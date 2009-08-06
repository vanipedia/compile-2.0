/**
*    This model will retrieve and set the raw data from/to the edit box in a Vaniquotes page.
*/
Compilation = MVC.Model.extend('compilation',

/* @Static */
{
    /**
    * This method gets the original data from the current Vaniquotes page
    */
    build: function(data) {
        this._build_sections(data);
        this._build_quotes(data);
        this.publish('built');
    },

    _build_quotes: function(data) {
        var that;
        that = this;
        if ($('div.quote', data).length > 0) {
            $('div.quote', data).each(function() {
                // Skip quote if vital attr link is missing!
                if(!$(this).attr('link').length) { return; }
                // Create new quote
                that.new_quote(this);
            });
        }
        if(window.console) { console.dir(this.db); }
    },

    /**
    * Method to create a new quote and insert it into the Compilation.db
    * @param {Object} elem to build into this compilation db
    **/
    new_quote: function(elem) {
        var q;
        q = new Quote(elem);
    },

    _build_sections: function(data) {
        var that;
        that = this;
        if ($('.section, .sub_section', data).length > 0) {
            $('.section, .sub_section', data).each(function() {
                //if(window.console) { console.log('Creating section with element: '+this); }
                that.create_new_section(this);
            });
        }
    },

    create_new_section: function(ref) {
        var resp, section, s;
        section = typeof ref === 'string' ? ref : $(ref).text();
        resp = this.find_in_db(section, 's');
        if (!resp) {
            s = new Section(ref);
        }
    },

    /*
    * Insert quote to compilation. Technically simply change from type: new => quote.
    * @param {String} id of quote (dom id matches id in Compilation.db)
    * @param {String} name of the quote e.g.: SB 2.1.1.
    * @param {Object} attr is a json object that carries attributes to update. I should carry always the type: 'quote' in this istance
    * @param {String} type of element to be updated q for quote, s for section
    */
    insert_new_quote: function(id, name, attr, type) {
        var that, quote, check;
        that = this;
        check = checklist(id, name);
        if ( check.length === 0) {
            this.db.update(id, attr, type);
            this.publish('quote_inserted', {id: id});
            } else {
            this.publish('warning', { msg: 'Missing '+check.join(', ') });
        }
        function checklist(id, name) {
            var q, items, miss;
            q = that.find_in_db(id, 'q');
            list = new Array('id', 'index', 'link', 'link_text', 'parent', 'tips', 'type');
            miss = new Array();
            if(Quote.need_section(name)) {
                if(!q.trans && !q.purport) miss.push('section');
                } else {
                // if this quote not require a section (trans or purport), it will require a text
                list.push('text');
            }
            $.each(list, function(i, val) {
                if(!q[val]) miss.push(val);
            });
            return miss;
        }
    },

    add_to_db: function(elem, ref, parent, type) {
        var resp;
        /*if( arguments.length !== 4 || !elem || !ref || !parent || !type ) {
            if(window.console) {
                console.error('Compilation#add_to_db: Error adding to db ref '+ref+' element:');
                console.dir(elem);
            }
            return;
        }*/
        if (type === 's') {
            if (parent === 'compilation') {
                //if(window.console) { console.log('adding '+ref+' to db'); }
                this.db.add(elem, ref, 's');
                } else {
                if ( !this.find_in_db(parent, 's') ) {
                    //if(window.console) { console.log('adding missing '+parent+' for '+ref); }
                    this.create_new_section(parent);
                }
                //if(window.console) { console.log('adding '+ref+' to db'); }
                this.db.add(elem, ref, 's');
            }
        }
        if (type === 'q') {
            var resp;
            // Find parent of this quote in the db.
            resp = this.find_in_db(parent, 's');
            // If not found, create it!
            if (!resp) {
                if(parent) {
                    this.create_new_section(parent);
                    } else {
                    if(window.console) { console.error('Error in Compilation.add_to_db: creating new section for '+ref+', missing parent'); }
                    //return;
                }
            }

            this.db.add(elem, ref, 'q');
            this.publish('new_quote', {elem: elem});
        }
    },
    /**
    * @param id {string} id/ref of the quote (id in Compilation.db is the same as "id" in DOM)
    * @param attr {object} must contain section attribute with the new section for this quote
    */
    update_q_section: function(id, link, attr) {
        if(arguments.length !== 3) {
            if(window.console) { console.log('missing arguments in udpate_q_section'); }
            return;
        }
        // check if this quote actually requires a section
        if(Quote.need_section(link)) {
            var new_attributes, q, miss;
            // 1. set the text to "section" (e.g.: q.trans or q.purport, depending on the choice found in attr.section)
            // 2. submit the result quote to Quote.update_section to update q.section (text that will appear in quote in view mode)
            new_attributes = new Object();
            new_attributes.section = attr.section;         // copy the section in the attr obj
            // get the quote
            q = this.find_in_db(id, 'q');

            // set_text_to_section iterates through the posible new_attributes in the quote to find where the text is currently residing
            // It set the quote text to the new_section and sets the old one to false
            function set_text_to_section(wanted_section) {
                var sections;
                sections = ['trans', 'purport', 'text'];
                if(!q[wanted_section]) {         // if text not already in wanted_section
                    $.each(sections, function(i, sec) {         // loop through the posible sections where the text may presently reside
                        if(sec === wanted_section) return;         // skip
                        if(q[sec]) {         // if found the text
                            new_attributes[wanted_section] = q[sec];         // add the value to the attribute that will be pass to update_db
                            new_attributes[sec] = false;         // set the old section that held the sec to false
                        }
                    });
                    } else {         // if there's text already in the wanted_section, we guess the compiler wants to convert a "Translation and Purport" to other.
                    // So I guess we'll delete the text in the other sections
                    $.each(sections, function(i, sec) {
                        if(sec === wanted_section) return; // Skip if section we want. *** Negation of equality will not work! so simply return if equal
                        new_attributes[sec] = false;         // Set the other sections to false
                    });
                }
            }

            if(attr.section !== 'Translation and Purport') {
                if(attr.section.match(/trans/i)) {         // check if section submitted is Translation
                    set_text_to_section('trans');
                    } else {         // else it should be Purport
                    set_text_to_section('purport');
                }
                } else {
                // if the text is neither in trans or purport set it to purport which is the most common choice
                if(!q.trans && !q.purport) set_text_to_section('purport');
                // Place the message in the empty one
                if(!q.trans) {
                    miss = 'Translation';
                    new_attributes.trans = ' ';
                    } else {
                    miss = 'Purport';
                    new_attributes.purport = ' ';
                }
                this.publish('warning', { msg: 'You have chosen "Translation and Purport" but you are missing the '+miss+' text.' });
            }
            this.update_db(id, new_attributes, 'q');         // submit the new data to the db
            //Quote.update_section(this.find_in_db(id, 'q'));         // update_section to set the section_text to the current (updated) section
            } else {
            this.publish('warning', { msg: 'This quote does not require a section' });
        }
    },
    /**
    * Process_verse will process posible verse(s) in quotes
    * @param {string} quote id of the quote whose verse will be "processed" (e.g.: deleted if false alarm or reformated to show correctly in the quote)
    * @param {number} verse number in question
    * @param {boolean} resp true or false wheather we format or delete(remove from verse candidates in quote) the verse
    */
    process_verse: function(params) {
        var quote, verse, quote_text, text, attr;
        quote = this.find_in_db(params.quote, 'q');
        attr = {};
        attr['verses'] = quote.verses;
        function make_replacements(all) {
            var a = all.split('\n');
            for(i=0; i < a.length; i++) {
                a[i] = ':'+$.trim(a[i]);
            }
            return a.join('\n');
        }

        if(params.resp) {
            if(quote.text) {
                quote_text = quote.text;
                text = 'text';
                } else if(quote.purport) {
                quote_text = quote.purport;
                text = 'purport';
            }
            verse = quote.verses[params.verse];
            attr[text] = quote_text.replace(verse, make_replacements);
        }
        attr.verses[params.verse] = 'done';
        this.update_db(quote.id, attr, 'q');
    },
    /**
    * Update the heading on a quote
    * @param {string} params.id quote id
    * @param {string} params.heading text to update heading
    * @param {string} params.action to perform: "new" or "append"
    */
    update_heading: function(params) {
        if(!params && window.console) console.log('Missing params in Compilation.update_heading');
        var quote, attr;
        attr = {};
        if(params.action === 'append') {
            quote = this.find_in_db(params.id, 'q');
            // append existing heading to submitted heading. if there was no heading then simply set it.
            attr.heading = quote.heading ? quote.heading+' '+params.heading : params.heading;
        }
        if(params.action === 'set') { attr.heading = params.heading.replace(/^([a-z])(.+)/, camel); }
        if(params.action === 'new') { attr.heading = ' '; }

        function camel(all, first, rest) {
         return first.toUpperCase()+rest;
        }
        this.update_db(params.id, attr, 'q');
    },
    /**
    * Update local(client) db (quote or section)
    * @param {string} id of quote to be updated
    * @param {obj} attr json object with attributes to be updated e.g.: attr.heading, attr.section, etc.
    * @param {string} type indicate which db to search for the object to be updated: 'q' for quote or 's' for section.
    */
    update_db: function(id, attr, type) {
        if(!id || !attr || !type) if(window.console) { console.log('Missing parameters in udpate_db'); }
        this.db.update(id, attr, type);
        // Test to check speed of controller response on publish
        var q = this.find_in_db(id, 'q')
        Quote.update_section(q);
        this.publish('updated', {id: id, quote: q});
    },

    del_from_db: function(id, type) {
        this.db.del(id, type);
        if(type === 'q') { this.publish('deleted', {id: id}); }
    },

    /**
    * find quote or section instance in Compilation.db
    * @param ref {string} reference or id of quote
    * @param type {string} 'q' for quote and 's' for section
    */
    find_in_db: function(ref, type) {
        if(!ref || !type) {
            if(window.console) { console.error('Compilation#find_in_db: Missing parameters! ref: '+ref+', type: '+type); }
            return;
        }
        // Modify ref if it's a section/TOC search, since we have cleaned up the id
        if (type === 's') { ref = ref.replace(/[.,\(\)]/g, ''); }
        var resp;
        resp = this.db.find(ref, type);
        return resp;
    },
    check_sec_consistency: function(id) {
        var that, q, sec;
        that = this;
        q = this.find_in_db(id, 'q');
        if(!q.section) return;
        sec = q.section.match(/trans|purport/ig);
        if(sec) {
            // If its translation and purport
            if(sec.length === 2) {
                // check for trans or purport
                if(!q.trans || !q.purport) {
                    publish_error();
                    return;
                }
            }
            if(sec.length === 1) {
                // check for this section
                sec = sec[0].toLowerCase();
                if(!q[sec]) {
                    publish_error();
                    return;
                }
            }
            // then the sections seems ok
            that.publish('section_checked', {id: id, result: 'good'});
        }

        function publish_error() {
            that.publish('section_checked', {id: id, result: 'bad'});
            that.publish('warning', { warning: 'You have set "'+q.section+'" as your section but this quote appears to be missing the corresponding text(s)!' });
        }
    },
    undo: function(id, type) {
        this.db.undo(id, type);
        this.publish('undone', { id: id });
    },

    /* DB holds data about every quote and section in the compilation */
    db: {
        sections:         new Object(),
        undo_sections:new Object(),
        sec_count:         new Object(),
        quotes:             new Object(),
        undo_quotes:     new Object(),
        quote_count:     new Object(),

        add: function(obj, id, type) {
            var where;
            where = this._where(type);
            if (type === 'q') {
                if (this.quote_count[obj.parent] === undefined) this.quote_count[obj.parent] = 0;
                //id = id.replace(/\./g, '_')+'_'+this.quote_count[obj.parent];
                this.quote_count[obj.parent]++;
                } else {
                this.sec_count++;
            }
            this[where][id] = obj;
        },

        find: function(id, type) {
            var where;
            where = this._where(type);
            //if(window.console) { console.log('find: searching for '+id+' in '+where); }
            for(var obj in this[where]) {
                if (obj == id) {
                    //if(window.console) { console.log('found '+id+' in '+where); }
                    return this[where][obj];
                }
            }
            //if(window.console) { console.log(id+' not found!'); }
            return false;
        },

        update: function(id, attributes, type) {
            var where, undo;
            where = this._where(type);
            this._backup(id, where);
            from = attributes;
            to         = this[where][id];
            this._clone(from, to);
            if (type === 'q') Quote.update_tips(this[where][id]);
        },

        del: function(id, type) {
            var where;
            where = this._where(type);
            if(type === 'q') { this._backup(id, where); }
            // Set val of this quote to false
            this[where][id] = false;

        },

        undo: function(id, type) {
            var where, undo, from, to;
            where = this._where(type);
            undo     = 'undo_'+where;
            // Save back to original array
            if(this[undo][id] === undefined) return;
            if(this[where][id] === false) this[where][id] = new Object();
            from     = this[undo][id];
            to         = this[where][id];
            this._clone(from, to);
            return;
        },

        _backup: function(id, where) {
            var undo, from, to;
            undo     = 'undo_'+where;
            if(this[undo][id] === undefined) this[undo][id] = new Object();
            /*for(var attr in this[where][id]) {
                this[undo][id][attr] = this[where][id][attr];
            }*/
            from     = this[where][id];
            to         = this[undo][id];
            this._clone(this[where][id], this[undo][id]);
        },

        _clone: function(from , to) {
            for(var attr in from) {
                if(typeof from[attr] !== 'function' && to[attr] !== from[attr]) {
                    to[attr] = from[attr];
                }
            }
        },

        _where: function(type) {
            return type === 's' ? 'sections' : type === 'q' ? 'quotes': 'undo_quotes';
        }
    } // End of db

},

/* @Prototype */
{

}
);