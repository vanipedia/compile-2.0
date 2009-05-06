/**
* Class for creating "quotes" instances
* @param {Object} elem Existing elem to build
* @param {String} ref Reference to object: The name or id of the element. It must have underscores (_) instead of spaces
* @param {String} parent Name of the parent of the element
*/
Quote = MVC.Model.extend('quote',
/* @Static */
{
	attr: new Array('ref', 'id', 'parent', 'book', 'heading', 'link', 'link_text', 'text', 'trans', 'purport', 'index', 'type', 'tips', 'verses'),
	tips_db: {
		section: 			{
			title: 	"< Set the Section",
			desc: 	"...this quote requires a section. Click here",
			id: 		"set_section_tip"
		},
		edit_section: {
			title: 	"< Edit this Section",
			desc: 	"...by clicking here!",
			id: 		"edit_section_tip"
		},
		heading: {
			title: 	"< Set the Heading",
			desc: 	"...by highlighting a part of the quote",
			id: 		"set_heading_tip"
		},
		edit_heading: {
			title: 	"< Edit the Heading",
			desc: 	"...by highlighting a part of the quote",
			id: 		"edit_heading_tip"
		},
		edit_quote: {
			title:	"< Edit this quote",
			desc: 	"...by doubleClicking on it or clicking here",
			id: 		"edit_quote_tip"
		},
		insert_new: {
			title:	"< Insert!",
			desc:		"...this quote to the compilation by clicking here",
			id:			"set_insert_tip"
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
		'NBS': "Narada Bhakti Sutra "
	},
	cache: new Object,
	/**
	 * Find meta-data for a creating a quote by querying PVRA.vanisource_titles db.
	 * @param {string} params.ref Reference string to submit for search
	 * @param {string} params.type type of reference being submited: 'reference' if it is a Ref. Vedabase =>, or title.
	 */
	find_reference: function(params) {
    var that, request, async;
		that = this;
		request = {};
		// Check first if we already queried this ref
		if(that.cache[params.ref]) {
			if(window.console) console.log('Quote.find_reference: found submitted ref in Quote.cache. '+params.ref);
			that.publish('found_reference', that.cache[params.ref]);
			return;
		}
		// Build request object
		request.ref = params.ref;
		if(params.type) request.type = params.type;
		// Set async. if request has an attr request, the request should be asynchronous.
		if(params.attr) async = false;
		// Send request
		$.ajax({
			type: "GET",
			url: '/php/get_vanisource_title.php',
			dataType: "json",
			async: async,
			data: request,
			success: function(resp) {
        if(resp.result !== 'Found') {
          result = resp.result;
          that.publish('warning', { msg: 'Quote not found for '+params.ref });
        } else {
          new_quote = {
            link_text:  resp.title,
            link:       resp.title.replace(/\s/g, '_'),
            parent:     resp.section.replace(/\s+/g, '_'),
            index:      resp.index,
            ref: 		    resp.title.replace(/\s+/g, '_'),
            type:       'new'
          };
					// Save to Quote.cache
					that.cache[params.ref] = new_quote;
					// If the request is an attr request from a quote instance set the attr else it must be a new quote(publish the reference_found)
          params.attr ? params.quote[params.attr] = resp[params.attr] : that.publish('found_reference', new_quote);
        }
      }
		});
    $(document).ajaxStart(function() {
      that.publish('ajax', { type: 'start', msg: 'Quote being processed...'})
    });
    $(document).ajaxStop(function() {
      that.publish('ajax', { type: 'end', msg: 'Quote request done'})
    })
	},
	/**
	 * Use to verify whether the quote needs a section
	 * @param ref {string} reference or id
	 */
	need_section: function(ref) {
		if(!ref) if(window.console) console.log('ref argument missing in Quote.need_section');
		return /^(SB_\d+.\d+.\d+|BG_\d+.\d+|CC_(Adi|Madhya|Antya)_\d+.\d+|NOI_\d+)/.test(ref) ? true : false;
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
		if(this.need_section(quote.ref)) {
			// if no section is defined, set section else edit section
			if(!quote.section) {
				quote_tips.push(this.tips_db.section)
			} else {
				quote_tips.push(this.tips_db.edit_section);
			}
		}
		// in no heading is defined, set heading else edit heading
		!quote.heading || quote.heading === '' ? quote_tips.push(this.tips_db.heading) : quote_tips.push(this.tips_db.edit_heading);

		// Everyone need a quote tip
		quote_tips.push(this.tips_db.edit_quote);
		// if a new quote give the inset tip
		if (quote.type === 'new') quote_tips.push(this.tips_db.insert_new);

		quote.tips = quote_tips;
  },

	/**
	 * Use this function to set/reset the section titles in new or exsisting quotes. In new quotes it will attempt to find the trans or/and purport properties
	 * @param quote {object} Compilation.db quote instance or new_quote instance that will be updated by checking on existing quote.trans and quote.purport attributes to set its quote.section
	 */
	update_section: function(quote) {
		var m;
		if(this.need_section(quote.ref)) { 		// check if this quote requires sections
			if(!quote.trans && !quote.purport) { 		// if translation nor purport have not been set
				if(quote.type === 'new') {
					if( quote.text.indexOf("PURPORT") > -1) {
						make_trans_purport("PURPORT");
					}
				} else {
					// find apostrophies in text
					m = quote.text.match(/'''/g);
					if(m !== null && m.length === 1) {
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
				if(quote.type !== 'new') this.publish('warning', { msg: 'This quote '+quote.ref+' does not contain a proper section' });
			}

			if(quote.trans || quote.purport) quote.text = false;
		}
		// Function to make the split of Translation and Purport if the needle is found
		function make_trans_purport(needle) { 		// needle may be: 1. PURPORT (for new quotes being compiled) or 2. ''' (for existing quotes in compilation) , depending on the match.
			// Because of \n in text regexp doesnt behave so well so we extract it in this way
			quote.trans =  $.trim(quote.text.substring(0, quote.text.indexOf(needle)) );
			quote.purport = $.trim(quote.text.substr(quote.text.indexOf(needle) + needle.length) );
			if(quote.purport === '') quote.purport = false;
		}
	},
	// check for verse in quote
	check_verses: function(quote) {
		var that, text, lines, verses, longest, count, first;
		if(quote.type === 'new' && (quote.text || quote.purport)) {
			that = this;
			text = quote.text || quote.purport;
			lines = text.split('\n');
			verses = [];
			longest = 0;
			first = false;
			last = false;

			for(i=0, len = lines.length; i < len; i++) {
				if(lines[i].length > longest) longest = lines[i].length;
				if(lines[i].length < 89 && !/[:,"\?]/.test(lines[i]) && !/^\s*$/.test(lines[i])) {
					if(first === false) {
						first = i;
						last = i;
					} else {
						last++;
					}
					verses[i] = lines[i];
				} else {
					if(i !== last && first !== false && last !== false) that.request_verse(quote, verses.slice(first, last + 1));
					first = last = false;
				}
				if(i + 1 === len && first !== false && last !== false) that.request_verse(quote, verses.slice(first, last + 1));
				if(window.console) console.log('index: '+i+' first: '+first+' last: '+last);
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
		if(typeof quote === 'string') quote = Compilation.find_in_db(quote, 'q');
		if(window.console) console.log("Is this a verse?\n"+v);
		if(quote.verses === false) quote.verses = new Array();
		this.publish('verse_request', { verse: v, id: quote.verses.length, quote: quote.id });
		quote.verses.push(verse.join('\n'));
	},
	/**
	 * Clean text in quote
	 * @param {strin} text to be cleaned up from wiki markup and balaram encoding
	 */
	clean: function(text) {
		text = BaltoUni(text);
		text = text.replace(/'{2,3}/g, '"');
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
			}
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
 *
 */
	init: function(quote_obj) {
		if(quote_obj === undefined) {
			new Error('Error creating new quote with quote_obj: '+quote_obj);
			if(window.console) console.log('Quote.init was called without an quote_obj');
			return;
		}
		var that, this_sec_index, this_text, link_re, attr_requested;
		that 					= this; // Use for introspection changes
		link_re 			= /(?:''')?\[\[(?:Vanisource:)?(.+?)\|(.+?)\]\]:?(?:''')?/;
		attr_requested = false;
		// Iteration to assign attributes in quote_obj to this instance independent of source of quote_obj(from a dom node or new_quote)
		if(!quote_obj.ref)  {
			$.each(that.Class.attr, function(i, a) { !/text|trans|purport|heading/.test(a) ? that[a] = $(quote_obj).attr(a) || false : that[a] = $(quote_obj).children('.'+a).html() || false; });
		} else {
			$.each(that.Class.attr, function(i, a) { that[a] = quote_obj[a] || false; });
		}

		// Clean text and extract_link
		if(this.type == 'new') this.text = this.Class.clean(this.text);
		if(this.link === 'undefined') {
			$.each(['trans', 'purport', 'text'], function(i, t) {
				if(that[t]) {
					that[t] = $.trim(that[t].replace(link_re, extract_link));
					return false;
				}
			});
		}

		// Check for missing attributes before building quote
		check_missing_attr();
		this_sec_index = Compilation.db.quote_count[this.parent] ?  Compilation.db.quote_count[this.parent] : 0;
		// this.id is the ref + quote_count in this quote's section (it's parent)
		this.ref 				? this.id 			= this.ref.replace(/\W/g, '')+'_'+this_sec_index : find_attr('ref');
		this.parent 		? this.parent 	= this.parent.replace(/\s/, '_') 		: find_attr('parent');
		this.book				? this.book			= this.book.replace(/\s/, '_') 			: this.parent ? this.book = Section.find_attr(this.parent, 'sec_book') : find_attr('parent');
		this.index 			? "": find_attr('index');
		this.heading  	? this.heading 	= this.heading.replace(/'''/g, '') 	: '';
		this.link_text  ? transform_link_text() : find_link_text();

		// Find translation and purport
		this.Class.update_section(this);

		if(!this.text && !this.trans && !this.purport) if(window.console) console.log('No text, trans or purport in ref '+this.ref);

		// get_tips
		if(!this.tips) this.Class.update_tips(this);
		// check for verse(s)
		if(!this.verses) this.Class.check_verses(this);

		// Publish creation of new quote!
		this.publish('created', this);


		/**** Functions ****/
		function extract_link(all, link1, link2) {
			if(!that.link) that.link = $.trim(link1);
			if(!that.link_text) that.link_text = $.trim(link2.replace(/, ?(Translation and Purport|Translation|Purport)/i, extract_section));
			// return empty str to replace link in text
			return '';
		}
    function extract_section(all, m) {
			that.section = m;
			return '';
		}
		function check_missing_attr() {
			$.each(['index', 'link', 'link_text', 'parent', 'ref'], function(i, attr) {
				if(!that[attr]) find_attr(attr);
			});
		}
		function find_attr(attr) {
			var resp;
			if(window.console) console.log('In find_attr, checking Quote.cache['+that.link+'] = '+Quote.cache[that.link]);
			if(Quote.cache[that.link]) {
			if(window.console) console.log('In find_attr, updating '+attr+' with '+Quote.cache[that.link][attr]);
				that[attr] = Quote.cache[that.link][attr];
			} else {
				//if (attr_requested) setTimeout(find_attr, 1000, attr);
				if(!that.link) {
					//that.publish('warning', {msg: attr+' not found for submitted text in find_attr'});
					if(window.console) console.log('Quote.init.find_attr: Missing that.link to query db for missing '+attr);
				} else {
					if(window.console) console.log(attr+' not found in Quote.cache for '+that.link+'. Submiting request to Quote.find_reference');
					Quote.find_reference({ quote: that, ref: that.link, type: 'title', attr: attr});
					attr_requested = true;
				}
			}
		}
		function find_link_text() {
			find_attr('link_text');
			if(that.link_index) transform_link_text();
		}
		function transform_link_text() {
			$.each(Quote.link_text_db, function(acronym, full) {
				if(window.console) console.log('In Quote.init.transform_link_text: checking '+acronym+' against '+full);
				if(that.link_text.indexOf(acronym) === 0) {
					that.link_text = that.link_text.replace(acronym, full);
					return false;
				}
			});
		}

	}, // End of init
	get: function(attr) {
		return this[attr];
	},
	set: function(attr, value) {
		this[attr] = value;
		this.update_tips;
	}

});