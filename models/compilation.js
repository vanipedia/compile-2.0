/**
 *	This model will retrieve and set the raw data from/to the edit box in a Vaniquotes page.
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
				that.new_quote(this);
			});
		}
		if(window.console) console.dir(this.db);
	},

	/**
	 * Method to create a new quote and insert it into the Compilation.db
	 * @param {Object} elem to build into this compilation db
	 * @param {String} ref Reference to object: The name or id of the element. It must have underscores (_) instead of spaces
	 * @param {String} parent Name of the parent of the element
	 **/
	new_quote: function(elem) {
		var q;
		q = new Quote(elem);
	},

	_build_sections: function(data) {
		var $this, ref, parent, that;
		that = this;
		if ($('.section, .sub_section', data).length > 0) {
			$('.section, .sub_section', data).each(function() {
				//if(window.console) console.log('Creating '+id+' with element: '+$this);
				that.create_new_section(this);
			});
		}
	},

	create_new_section: function(ref) {
		var resp, section, s;
		section = typeof ref === 'string' ? 'ref' : $(ref).attr('id');
		resp = this.find_in_db(section, 's');
		if (!resp) {
			s = new Section(ref);
		}
	},

	insert_new_quote: function(name, attr, type) {
		var that, quote, check;
		that = this;
		check = checklist(name);
		if ( check.length === 0) {
			this.db.update(name, attr, type);
			this.publish('quote_inserted', {id: name});
			//that.publish('warning', { msg: 'Quote Inserted!'});
		} else {
			this.publish('warning', { msg: 'Missing '+check.join(', ') });
		}
		function checklist(name) {
			var q, items, miss;
			q = that.find_in_db(name, 'q');
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
		if( arguments.length !== 4 || !elem || !ref || !parent || !type ) {
			if(window.console) console.log('Error adding to db with elem: '+elem+' and ref '+ref);
			return;
		}
		if (parent === 'undefined') parent = Section.find_attr(ref, 'sec_parent');
		if (type === 's') {
				if (parent === 'compilation') {
						//if(window.console) console.log('adding '+ref+' to db')
						this.db.add(elem, ref, 's');
				} else {
						if ( !this.find_in_db(parent, 's') ) {
							//if(window.console) console.log('adding missing '+parent+' for '+ref)
							this.create_new_section(parent);
						}
						//if(window.console) console.log('adding '+ref+' to db');
						this.db.add(elem, ref, 's');
				}
		}
		if (type === 'q') {
			var resp;
			// Find parent of this quote in the db
			resp = this.find_in_db(parent, 's');
			// If not found, create it!
			if (!resp) {
				if(parent) {
					this.create_new_section(parent);
				} else {
					if(window.console) console.log('Error in Compilation.add_to_db: creating new section for '+ref+', missing parent');
					return;
				}
			}

			this.db.add(elem, ref, 'q');
			this.publish('new_quote', {elem: elem});
		}
	},
	/**
	 * @param name {string} name/ref of the quote (name in Compilation.db is the same as "id" in DOM)
	 * @param attr {object} must contain section attribute with the new section for this quote
	 */
	update_q_section: function(name, attr) {
		if(arguments.length !== 2) {
			if(window.console) console.log('missing arguments in udpate_q_section');
			return;
		}
		// check if this quote actually requires a section
		if(Quote.need_section(name)) {
			var new_attributes, q, miss;
			// 1. set the text to "section" (e.g.: q.trans or q.purport, depending on the choice found in attr.section)
			// 2. submit the result quote to Quote.update_section to update q.section (text that will appear in quote in view mode)
			new_attributes = new Object();
			new_attributes.section = attr.section; 		// copy the section in the attr obj
			// get the quote
			q = this.find_in_db(name, 'q');

			// set_text_to_section iterates through the posible new_attributes in the quote to find where the text is currently residing
			// It set the quote text to the new_section and sets the old one to false
			function set_text_to_section(wanted_section) {
				var sections;
				sections = ['trans', 'purport', 'text'];
				if(!q[wanted_section]) { 		// if text not already in wanted_section
					$.each(sections, function(i, sec) { 		// loop through the posible sections where the text may presently reside
						if(sec === wanted_section) return; 		// skip
						if(q[sec]) { 		// if found the text
							new_attributes[wanted_section] = q[sec]; 		// add the value to the attribute that will be pass to update_db
							new_attributes[sec] = false; 		// set the old section that held the sec to false
						}
					});
				} else { 		// if there's text already in the wanted_section, we guess the compiler wants to convert a "Translation and Purport" to other.
										// So I guess we'll delete the text in the other sections
					$.each(sections, function(i, sec) {
						if(sec === wanted_section) return; // Skip if section we want. *** Negation of equality will not work! so simply return if equal
						new_attributes[sec] = false; 		// Set the other sections to false
					});
				}
			}

			if(attr.section !== 'Translation and Purport') {
				if(attr.section.match(/trans/i)) { 		// check if section submitted is Translation
					set_text_to_section('trans');
				} else { 		// else it should be Purport
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
			this.update_db(name, new_attributes, 'q'); 		// submit the new data to the db
			//Quote.update_section(this.find_in_db(name, 'q')); 		// update_section to set the section_text to the current (updated) section
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
		if(params.action === 'set') attr.heading = params.heading;
		if(params.action === 'new') attr.heading = ' ';
		this.update_db(params.id, attr, 'q');
	},
	/**
	 * Update local(client) db (quote or section)
	 * @param {string} name of quote to be updated
	 * @param {obj} attr json object with attributes to be updated e.g.: attr.heading, attr.section, etc.
	 * @param {string} type indicate which db to search for the object to be updated: 'q' for quote or 's' for section.
	 */
	update_db: function(name, attr, type) {
		if(!name || !attr || !type) if(window.console) console.log('Missing parameters in udpate_db');
		this.db.update(name, attr, type);
		Quote.update_section(this.find_in_db(name, 'q'));
		this.publish('updated', {id: name});
	},

	del_from_db: function(ref, type) {
		this.db.del(ref, type);
		this.publish('deleted', {id: ref});
	},

	/**
	 * find quote or section instance in Compilation.db
	 * @param ref {string} reference or id of quote
	 * @param type {string} 'q' for quote and 's' for section
	 */
	find_in_db: function(ref, type) {
		if(!ref || !type) {
			if(window.console) console.log('Missing parameters in find_in_db');
			return;
		}
		var resp;
		resp = this.db.find(ref, type);
		return resp;
	},
	check_sec_consistency: function(name) {
		var that, q, sec;
		that = this;
		q = this.find_in_db(name, 'q');
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
			that.publish('section_checked', {id: name, result: 'good'});
		}

		function publish_error() {
			that.publish('section_checked', {id: name, result: 'bad'});
			that.publish('warning', { warning: 'You have set "'+q.section+'" as your section but this quote appears to be missing the corresponding text(s)!' });
		}
	},
	undo: function(name, type) {
		this.db.undo(name, type);
		this.publish('undone', { id: name });
	},

	/* DB holds data about every quote and section in the compilation */
	db: {
		sections: 		new Object(),
		undo_sections:new Object(),
		sec_count: 		new Object(),
		quotes: 			new Object(),
		undo_quotes: 	new Object(),
		quote_count: 	new Object(),

		add: function(obj, name, type) {
				var where;
				where = this._where(type);
				if (type === 'q') {
						if (this.quote_count[obj.parent] === undefined) this.quote_count[obj.parent] = 0;
						//name = name.replace(/\./g, '_')+'_'+this.quote_count[obj.parent];
						this.quote_count[obj.parent]++;
				} else {
						this.sec_count++;
				}
				this[where][name] = obj;
		},

		find: function(name, type) {
				var where;
				where = this._where(type);
				//if(window.console) console.log('find: searching for '+name+' in '+where);
				for(var obj in this[where]) {
						if (obj == name) {
								//if(window.console) console.log('found '+name+' in '+where);
								return this[where][obj];
						}
				}
				//if(window.console) console.log(name+' not found!');
				return false;
		},

		update: function(name, attributes, type) {
				var where, undo;
				where = this._where(type);
				this._backup(name, where);
				from = attributes;
				to 		= this[where][name];
				this._clone(from, to);
				if (type === 'q') Quote.update_tips(this[where][name]);
		},

		del: function(name, type) {
				var where;
				where = this._where(type);
				this._backup(name, where);
				// Set val of this quote to false
				this[where][name] = false;

		},

		undo: function(name, type) {
				var where, undo, from, to;
				where = this._where(type);
				undo 	= 'undo_'+where;
				// Save back to original array
				if(this[undo][name] === undefined) return;
				if(this[where][name] === false) this[where][name] = new Object();
				from 	= this[undo][name];
				to 		= this[where][name];
				this._clone(from, to);
				return;
		},

		_backup: function(name, where) {
				var undo, from, to;
				undo 	= 'undo_'+where;
				if(this[undo][name] === undefined) this[undo][name] = new Object();
				/*for(var attr in this[where][name]) {
						this[undo][name][attr] = this[where][name][attr];
				}*/
				from 	= this[where][name];
				to 		= this[undo][name];
				this._clone(this[where][name], this[undo][name]);
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
