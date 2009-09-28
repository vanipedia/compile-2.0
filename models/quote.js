/**
* Class for creating "quotes" instances
* @param {Object} elem Existing elem to build
* @param {String} ref Reference to object: The name or id of the element. It must have underscores (_) instead of spaces
* @param {String} parent Name of the parent of the element
*/
Quote = MVC.Model.extend('quote',
/* @Static */
{
    attr: ['id', 'parent', 'book', 'heading', 'link', 'link_text', 'text', 'trans', 'purport', 'index', 'type', 'tips', 'verses', 'bad_link'],
    tips_db: {
        section:             {
            title:     "Set Section",
            desc:     "...this quote requires a section. Click here",
            id:         "set_section_tip"
        },
        edit_section: {
            title:     "Edit Section",
            desc:     "...by clicking here!",
            id:         "edit_section_tip"
        },
        heading: {
            title:     "Set Heading",
            desc:     "...by highlighting a part of the quote",
            id:         "set_heading_tip"
        },
        edit_heading: {
            title:     "Edit Heading",
            desc:     "...by highlighting a part of the quote",
            id:         "edit_heading_tip"
        },
        edit_quote: {
            title:    "Edit quote",
            desc:     "...by doubleClicking on it or clicking here",
            id:         "edit_quote_tip"
        },
        insert_new: {
            title:    "Insert!",
            desc:        "...this quote to the compilation by clicking here",
            id:            "set_insert_tip"
        }
    },
    link_text_db: {
        'NOD': "Nectar of Devotion",
        'ISO': "Sri Isopanisad",
        'TLC': "Teachings of Lord Caitanya, Chapter",
        'RTW': "Renunciation Through Wisdom",
        'NOI': "Nectar of Instruction",
        'KB': "Krsna Book",
        'EJ': "Easy Journey to Other Planets",
        'LOB': "Light of the Bhagavata",
        'MOG': "Message of Godhead",
        'NBS': "Narada Bhakti Sutra",
        'MM' : "Mukunda-mala-stotra mantra"
    },
    cache:{},
    /**
    * Find meta-data for a creating a quote by querying PVRA.vanisource_titles db.
	 * @param {string} params.ref Reference string to submit for search => either VB ref or quote.link
	 * @param {string} params.type type of reference being submited: 'reference' if it is a Ref. Vedabase =>, or title.
    */
    find_reference: function(params) {
        var that, request, attr_search, async;
        that = this;
        request = {};
								attr_search = false;
        // Check first if we already queried this ref
        if(that.cache[params.ref]) {
            if(window.console) { console.info('Quote#find_reference: found submitted ref in Quote.cache. '+params.ref); }
            that.publish('found_reference', that.cache[params.ref]);
            return;
        }
        // Build request object
        request.ref = params.ref;
        // params.type defines the column to make the search in the db
        if(params.type) { request.type = params.type; }
								// if params has an "attr" it means is a call from a quote instance for a missing specific attribute
								if(params.attr) { attr_search = true; }
        // Set async. if request has an attr request, the request should be
        // asynchronous.
        if(attr_search) { async = false; }
        // Send request
        $.ajax({
            type: "GET",
            url: '/php/get_vanisource_title.php',
            dataType: "json",
            async: async,
            data: request,
            error: connection_error,
            success: function(resp) {
                if(resp.result !== 'Found') {
                    result = resp.result;
                    if(window.console) { console.error('Quote#find_reference: Ref not found in database'); }
                    if(!attr_search) {
																								that.publish('warning', { msg: 'Ref not found for '+params.ref });
																								that.publish('not_found_reference', { ref: params.ref });
																				} else {
																								params.quote.bad_link = true;
																				}
                } else {
                    new_quote = {
                        link:       resp.title,
                        link_text:  resp.title,
                        parent:     resp.parent.replace(/\s+/g, '_'),
                        index:      resp.index,
                        //type:       'new'
                    };
                    // Save to Quote.cache
																				new_quote.type = attr_search ? false : 'new';
                    that.cache[params.ref] = new_quote;
                    if(window.console) { console.info('Updated Quote.cache with:'); console.dir(that.cache); }
                    // If the request is an attr request from a quote instance set the attr else it must be a new quote(publish the reference_found)
                    if(attr_search) {
                        if(window.console) { console.info('Quote#find_reference: updating '+params.attr+' => '+that.cache[params.ref][params.attr]); }
                        //params.quote[params.attr] = that.cache[params.ref][params.attr];
																								$.each(that.cache[params.ref], function(attr, value) {
																												params.quote[attr] = value;
																								});
                    } else {
                        that.publish('found_reference', new_quote);
                    }
                }
            }
        });
        function connection_error(xmlreq, text, error) {
            var ajax;
            ajax = {};
            ajax.text = text;
            ajax.error = error;
            if(navigator.platform == 'MacIntel') {
                    that.publish('check_internet_connection');
                } else {
                    that.publish('connection_error', { ajax: ajax, msg: 'Vaniquotes server is unreachable, please wait a minute and submit your quote again.' });
                }
        }
        $(document).ajaxStart(function() {
            that.publish('ajax', { type: 'start', msg: 'Quote being processed...'});
        });
        $(document).ajaxStop(function() {
            that.publish('ajax', { type: 'end', msg: 'Quote request done'});
        });
    },
    /**
    * Use to verify whether the quote needs a section
    * @param ref {string} reference or id
    */
    need_section: function(ref) {
        if(!ref) {
            if(window.console) { console.error('ref argument missing in Quote.need_section'); }
            return;
        }
        if(/^(SB \d+.\d+.\d+(?:-\d+)?|BG \d+.\d+(?:-\d+)?|CC (Adi|Madhya|Antya) \d+.\d+(?:-\d+)?|NOI \d+|ISO \d+|MM \d+|NBS \d+|LOB \d+)$/.test(ref)) {
            if(window.console) { console.info('Quote#need_section: quote '+ref+' needs trans/purport section'); }
            return true;
            } else {
            return false;
        }
    },
    /**
	 * Update the tips of quote depending on its properties. e.g.: if section is needed and missing will display < Set Section, etc.
    * @param quote {object} quote to be checked and update its tips
    */
    update_tips: function(quote) {
        var that, quote_tips, text;
        that = this;
        quote_tips = [];
        // Check ref for titles that require a Trans, Purport or both.
        if(this.need_section(quote.link)) {
            // if no section is defined, set section else edit section
            if(!quote.section) {
                quote_tips.push(this.tips_db.section);
                } else {
                quote_tips.push(this.tips_db.edit_section);
            }
        }
        // in no heading is defined, set heading else edit heading
        !quote.heading || quote.heading === '' ? quote_tips.push(this.tips_db.heading) : quote_tips.push(this.tips_db.edit_heading);

        // Everyone need a quote tip
        quote_tips.push(this.tips_db.edit_quote);
        // if a new quote give the inset tip
        if (quote.type === 'new') { quote_tips.push(this.tips_db.insert_new); }

        quote.tips = quote_tips;
    },

    /**
    * Use this function to set/reset the section titles in new or exsisting quotes. In new quotes it will attempt to find the trans or/and purport properties
    * @param quote {object} Compilation.db quote instance or new_quote instance that will be updated by checking on existing quote.trans and quote.purport attributes to set its quote.section
    */
    update_section: function(quote) {
        var m;
        if(this.need_section(quote.link)) {         // check if this quote requires sections
            if(window.console) { console.info('Quote#update_section: finding section(s) for '+quote.link); }
            if(!quote.trans && !quote.purport) {         // if translation nor purport have not been set
																if(window.console) { console.log('Quote#update_section: no current trans/purport'); }
                if(quote.type === 'new') {
					if( quote.text.indexOf("PURPORT") > -1) {
                        make_trans_purport("PURPORT");
                    }
                    } else {
                    // find apostrophies in text
                    m = quote.text.match(/'''/g);
																				if(m !== null && window.console) { console.log('Quote#update_section: found '+m.length+' apostrophies'); }
                    if(m !== null && m.length % 2 === 1) {
                        make_trans_purport("'''");
                    }
                    if(m === null) {
                        quote.purport = quote.text;
                    }
                }
            }
            // Check if trans || purport have been set and assign the section text quote.section
            if(quote.trans && quote.purport) {
                quote.section = 'Translation and Purport';
            } else if(quote.trans) {
                quote.section = 'Translation';
            } else if(quote.purport) {
                quote.section = 'Purport';
            } else {
                if(quote.type !== 'new') {
																				if(window.console) { console.warn('This quote '+quote.link+' does not contain a proper section'); }
																}
            }

            if(quote.trans || quote.purport) { quote.text = false; }
        }
        // Function to make the split of Translation and Purport if the needle is found
        function make_trans_purport(needle) {         // needle may be: 1. PURPORT (for new quotes being compiled) or 2. ''' (for existing quotes in compilation) , depending on the match.
            // Because of \n in text regexp doesnt behave so well so we extract it in this way
            quote.trans =  $.trim(quote.text.substring(0, quote.text.indexOf(needle)) );
            quote.purport = $.trim(quote.text.substr(quote.text.indexOf(needle) + needle.length) );
            if(quote.purport === '') { quote.purport = false; }
        }
    },
    // check for verse in quote
    check_verses: function(quote) {
        var that, text, lines, verses, longest, count, first, i, len, line_len;
        if(quote.type === 'new' && (quote.text || quote.purport)) {
            that = this;
            text = quote.text || quote.purport;
            lines = text.split('\n');
            verses = [];
            longest = 0;
            first = false;
            last = false;

			for(i = 0, len = lines.length; i < len; i++) {
                // Define current line length
                line_len = lines[i].length;
				if(line_len > longest) { longest = lines[i].length; }
				if(line_len < 89 && !/[:,"\?]/.test(lines[i]) && !/^\s*$/.test(lines[i])) {
                    if(first === false) {
                        first = i;
                        last = i;
                        } else {
                        last++;
                    }
                    verses[i] = lines[i];
                    } else {
                    if(i !== last && first !== false && last !== false) { that.request_verse(quote, verses.slice(first, last + 1)); }
                    first = last = false;
                }
                if(i + 1 === len && first !== false && last !== false) { that.request_verse(quote, verses.slice(first, last + 1)); }
                //if(window.console) { console.log('index: '+i+' first: '+first+' last: '+last); }
            }
        }
    },
    /**
    * request_verse builds the verse_in_quote to be displayed to the compiler and to be pushed to the db.
    * @param {obj or string} quote can be a Compilation.db quote object or a string id which will be used to find its respective quote in db.
    * @param {array} verse in the form of an array
    */
    request_verse: function(quote, verse) {
		var v = verse.join('<br/>');
        if(typeof quote === 'string') { quote = Compilation.find_in_db(quote, 'q'); }
        if(window.console) { console.log("Is this a verse?\n"+v); }
		if(quote.verses === false) { quote.verses = []; }
        this.publish('verse_request', { verse: v, id: quote.verses.length, quote: quote.id });
        quote.verses.push(verse.join('\n'));
    },
    /**
    * Clean text in new quote
    * @param {strin} text to be cleaned up from wiki markup and balaram encoding
    */
    clean_new: function(text) {
        // Convert Balaram to Unicode
        text = BaltoUni(text);
        text = fix_links(text);
        return text;

        function fix_links(text) {
            var re, re_l;
            re = /[\[\(](.+?)[\]\)]/g;
            re_l = /^\s*(\(\[\[(?:Vanisource:)?[^\[]+\]\]\))$/mg;
            text = text.replace(re, replace_link);
            text = text.replace(re_l, ':$1');
            return text;
        }
        function replace_link(all, l) {
            var f, l_db;
            l_db = {
                'BG $1': /^Bg\. (\d+.\d+)$/i,
                '$1': /^(SB \d+.\d+.\d+)$/,
                'CC $1': /^Cc. ((?:Adi|Madhya|Antya) \d+.\d+)$/,
                'NOI $1': /^NoI (\d+)$/i,
																'ISO $1': /^Īśo (?:mantra )?(\d+)$/i
            };
            $.each(l_db, function(sub, re) {
                if(l.match(re)) {
                    f = l.replace(re, sub);
                    return false;
                }
            });

            return f ? '([[Vanisource:'+f+'|'+f+']])' : '('+l+')';
        }
    }
},
/* @Prototype */
{

    /**
    * Create a new quote
    * To create a new quote you require: ref, parent, heading, text (trans/purport) and index.
    *    attributes for quotes are: 'id', 'parent', 'book', 'heading', 'link', 'link_text', 'text', 'trans', 'purport', 'index', 'type', 'tips', 'verses'),
    */
    init: function(quote_obj) {
        if(quote_obj === undefined) {
            if(window.console) { console.error('Error creating new quote with quote_obj: '+quote_obj); }
            return;
        }
        var that, this_sec_index, this_text, link_re;
        that            = this; // Use for introspection changes
        link_re         = /^(?:''')\[\[(?:Vanisource:)?(.+?)\|(.+?)\]\]:(?:''')?/;
        // Iteration to assign attributes in quote_obj to this instance independent of source of quote_obj(from a dom node or new_quote)
        if(!quote_obj.link)  {
            $.each(that.Class.attr, function(i, a) {
                !/^(?:text|trans|purport|heading)$/.test(a) ? that[a] = $(quote_obj).attr(a) || false : that[a] = $(quote_obj).children('.'+a).html() || false;
                //if(window.console) { console.log($(quote_obj).attr('link')+' => '+a+': '+that[a]); }
            });
            } else {
																$.each(that.Class.attr, function(i, a) { that[a] = quote_obj[a] || false; });
        }

								// Check for missing (vital) attributes before building quote
        if(!check_missing_attr()) {
												if(window.console) { console.error('Quote.init#check_missing_attr: Error creating quote, missing link attribute which is vital to build a quote'); }
												return;
								}

        // Clean text
        if(this.type == 'new') { this.text = this.Class.clean_new(this.text); }

        // Remove underscores and extraspaces
        if(this.link) { this.link = this.link.replace(/[_\s]+/g, ' '); }
        if(!this.link_text) { this.link_text = this.link; }
        // Eliminate (New 2003) from link_text quotes
        this.link_text = this.link_text.replace('(New-2003)', '');

        // quote.parent is the section it belongs to. If missing request it as section as that is the attribute it returns
        Section.exists(this.parent) ? this.parent = this.parent.replace(/\s+/g, '_') : find_attr('parent');

        // Set index/position within its section(parent) if existing else initialize it
        this_sec_index = Compilation.db.quote_count[this.parent] ?  Compilation.db.quote_count[this.parent] : 0;

        // this.id is the link + quote_count in this quote's section (parent)
        if(this.link)   { this.id = this.link.replace(/\W/g, '')+'_'+this_sec_index; }

        // Verify book name presence and formatting
        if(!this.book) { this.book = Section.find_attr(this.parent, 'sec_book'); }

        // Clean heading
        if(this.heading){ this.heading = this.heading.replace(/'''/g, ''); }

        // check if link_text needs to be transformed e.g.: NOI 3 to Nectar of Instruction 3
        transform_link_text();

								// Remove link from the text before we update the sections
								remove_link();

        // Find translation and purport
        this.Class.update_section(this);

        // Verify that we have a text
        if(!this.text && !this.trans && !this.purport) { if(window.console) { console.error('No text, trans or purport in ref '+this.link); } }

								// General clean_texts
        clean_texts();

        // get_tips
        if(!this.tips) { this.Class.update_tips(this); }

        // check for verse(s)
        if(!this.verses) { this.Class.check_verses(this); }

        // Publish creation of new quote!
        this.publish('created', this);

        /**** Helper Functions ****/
        function remove_link() {
            $.each(['trans', 'purport', 'text'], function(i, t) {
												// Extract link and remove <br/>
                var link_ready = false;
                if(that[t]) {
                    if(!link_ready) {
                        that[t] = $.trim(that[t].replace(link_re, ''));
                        link_ready = true;
                    }
																}
												});
        }
        function check_missing_attr() {
            $.each(['link', 'parent', 'index'], function(i, attr) {
                if(!that[attr]) {
																				if(attr == 'link') {
																								if(window.console) { console.error('Quote.init#check_missing_attr: Missing link!'+attr); }
																								return false;
																				} else {
																								if(window.console) { console.warn('Quote.init#check_missing_attr: Missing '+attr); }
																								find_attr(attr);
																				}
                }
            });
												return true;
        }
        function find_attr(attr) {
            var resp;
            if(window.console) { console.log('In Quote.init#find_attr, checking Quote.cache['+that.link+'] = '); console.dir(Quote.cache[that.link]); }
            if(Quote.cache[that.link]) {
                if(window.console) { console.info('In Quote.init#find_attr, updating '+attr+' with '+Quote.cache[that.link][attr]); }
                that[attr] = Quote.cache[that.link][attr];
                } else {
                if(!that.link) {
                    //that.publish('warning', {msg: attr+' not found for submitted text in find_attr'});
                    if(window.console) { console.error('Quote.init#find_attr: Missing that.link to query db for missing '+attr); }
                    } else {
                    if(window.console) { console.warn('Quote.init#find_attr: '+attr+' not found in Quote.cache for '+that.link+'. Submiting request to Quote.find_reference'); }
                    // Clean link since it most probably has underscores instead of spaces
                    Quote.find_reference({ quote: that, ref: that.link, type: 'title', attr: attr});
                }
            }
        }

        function transform_link_text() {
            if(!that.link_text) { that.link_text = that.link.replace(/_/g, ' '); }
            $.each(Quote.link_text_db, function(acronym, full) {
                //if(window.console) { console.log('In Quote.init.transform_link_text: checking '+acronym+' against '+full); }
                if(that.link_text.indexOf(acronym) === 0) {
                    that.link_text = that.link_text.replace(acronym, full);
                    return false;
                }

            });
        }

        function clean_texts() {
            $.each(['trans', 'purport', 'text'], function(i, t) {
				// Extract link and remove <br/>
                var link_ready = false;
                if(that[t]) {
                    if(!link_ready) {
                        that[t] = $.trim(that[t].replace(link_re, ''));
                        link_ready = true;
                    }
                    that[t] = that[t].replace(/\n+/g, '\n');
                    that[t] = that[t].replace(/<br\/?>/g, '\n');
                    that[t] = that[t].replace(/<p(?:.+?)?>(.+?)<\/p>/g, '$1\n');
                    // fix apostrophies and quotation marks
                    that[t] = that[t].replace(/(^|\s)'{2,}(.+?)'{2,}(\s|$)/g, '$1"$2"$3');
                    that[t] = that[t].replace(/(^|\s)[“‘]+(.+?)[”’]+(\s|$)/g, '$1"$2"$3');
                    //that[t] = that[t].replace(/(^|\s)[“‘]+/g, '$1');
                    that[t] = that[t].replace(/(\w+)’/g, "$1'");
                }
            });

        }

    } // End of init

});