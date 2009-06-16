/**
 * This model requests and process the page_facts for every Vaniquote compilation
 */
Facts = MVC.Model.extend('facts',
/* @Static */
{
  build: function(compilation) {
    var facts;
    if(!this.find(wgArticleId)) {
      facts = $('div#facts', compilation).html();
      facts ? this.build_with(facts) : this.build_new();
      this.publish('created', {facts: this.db});
    }
  },
  /**
   * find retrieves a json formated facts database for the current compilation/page
   * @param {string} id Contains the MediaWiki articleId which should match the one on the facts server database
   */
  find: function(id) {
    var that;
    that = this;
    // Get id from mw global id value
    $.getJSON('/php/get_facts.php',
      {id: id},
      function(resp) {
        if(resp.result !== 'Found') {
          if(window.console) { console.log('No existing facts for article '+id+' in facts.db'); }
          return false;
        } else {
           that.db = resp.db;
           return true;
        }
      }
    );
  },
  /**
   * builds a blank facts.db
   * since most default blank values are already set in Facts.db
   * we only need to set a few
   */
  build_new: function() {
    var that;
    that = this;
    $.each(that.db, function(name, val) {
      if(name === 'first' || name === 'last') that.set(name, that.get_date());
      if(name === 'compiler') {
        var compiler = that.check_user();
        // compiler is an array
        if(compiler) that.set(name, new Array(compiler));
      }
    });
  },
  /**
   * builds a facts.db for the current compilation
   * @param {string} data contains all the data found within the <div id="facts"> in the compilation.
   */
  build_with: function(data) {
    var that, facts, f_array, categories, re_categories;
    that        = this;
    facts       = new Object();
    f_array     = new Array();
    categories  = new Array();
    re_categories = /\[\[Category:\s?(.+?)\s?\]\]/ig;

    // Check for data
    if(!data) {
        if(window.console) { console.log('Missing facts data in Facts.build_manually!'); }
        return;
    }

    /**** Facts ****/
    // Split data into its fields e.g: {{terms| etc...}}
    f_array = data.split('{{');
    f_array.shift();
    if(!f_array.length) {
        if(window.console) { console.error('Error creating facts array');  }
    }
    // Loop through array to build temp facts obj
    $.each(f_array, function(i, val) {
      var name, value;
      val = clean(val);
      if(val.indexOf('toc') === 0) {
        facts['toc'] = $.trim(val.substr(val.indexOf(' ') + 1));
        return true;
      }
      name = $.trim(val.substring(0, val.indexOf('|')));
      value = $.trim(val.substr(val.indexOf('|') + 1));
      if(window.console) { console.log('Setting '+name+' to '+value); }
      facts[name] = value;
    });

    // set the Facts.db to with the values found and saved in the facts obj
    $.each(that.db, function(name, val) {
      if(window.console) { console.log(name+' is '+typeof facts[name]+' in facts'); }
      if(typeof facts[name] !== 'undefined') {
        process_fact(name, facts[name]);
      } else {
        if(window.console) { console.log('In Facts.build: '+name+' was not found in extracted facts db'); }
      }
    });

    // process (reformat) fact according to its own requirements (e.g.: string, array or obj)
    function process_fact(name, value) {
      if(!value) return;
      // terms, cats, compiler, complete, must be converted to an array
      if((name === 'terms' && !/^Copy /.test(value)) || name === 'compiler' || name === 'complete' ) {
        value = convert_to_array(value);
      }
      // Compiler notes is a string
      if(name === 'total') {
        value = Number(value) || 0;
      }

      if(name === 'last' || (name === 'first' && value === '')) value = that.get_date();

      // Totals_by_section is an object
      if(name === 'totals_by_section') {
        var totals, re, book, val;
        totals = {};
        re = /(.+?)\s?=\s?(\d+)/;
        value = convert_to_array(value);
        $.each(value, function(i, sec) {
          book = sec.match(re)[1];
          val  = sec.match(re)[2];
          totals[book] = Number(val);
        });
        value = totals;
      }

      that.set(name, value);
    }

    function clean(str) {
      var now;
      now = str.replace(/"/g, '\"');
      now = now.replace(/<.+/, '');
      now = now.replace(/\n+/g, '');
      now = now.replace(/^(.+?)\}\}.*/, '$1');
      now = $.trim(now);
      return now;
    }
    // Convert facts to an array e.g.: terms or categories: "aversion to faultfinding"|"aversion to fault-finding"|"one should not find fault with others"
    function convert_to_array(str) {
      var value, array;
      value = str;
      value = value.replace(/"/g, '');
      value = value.replace(/ +\||\| +/g, '|');
      value = value.replace(/^ +| +$/g, '');
      array = value.split('|') || value;
      return array;
    }
    /**** Categories ****/
    categories = data.match(re_categories);     // Extract the Categories
    if(categories !== null) {
      categories = $.map(categories, function(val) { // Clean the brackets
        return val.replace(re_categories, '$1');
      });
      this.set('categories', categories);
    }
    /**** User ****/
    this.add_user();

    if(window.console) { console.log(this.db); }
  }, // End of build_manually

  /**
   * Update values in Facts.db
   * @param {string} fact to update
   * @param {number} index of value to update, only used for Terms and Categories
   * @param {string} value
   */
  update: function(fact, index, value) {
    value = $.trim(value);
    if(this.db[fact] === undefined) {
      if(window.console) { console.log('Error updating Facts.db in '+fact+' with '+value); }
      return false;
    }
    // Exceptions for empty values submitted
    if(value === '') {
      if(fact === 'goal') {
        this.publish('warning', { msg: 'Wrong goal setting. You must calculate your goal based on the amount of matches for your expressions search in Vedabase' });
        return 0;
      }
      if(index !== null) this.publish('deleted', { fact: fact, index: index, old: this.db[fact][index] });
    }
    if(fact === 'goal' && isNaN(value)) {
      this.publish('warning', { msg: 'Goal must be number' });
      return 0;
    }
    index === null ? this.db[fact] = value : this.db[fact][index] = value;
    this.publish('updated');
    if(fact === 'terms' && value !== '') this.publish('updated_term', { term: value });

    return value;
  },
  /**
   * set data in Facts.db
   * you must know the type of data in the db in order to set this properly. ducktyping is too much work just to set initial values
   * @param {string} fact to be updated
   * @param {string} value to set it can be anything (a string, array or obj)
   */
  set: function(name, value) {
    var that;
    that = this;
    if(!name || !value) {
      if(window.console) { console.log('Parameters missing in Facts.set(). name: '+name+' value: '+value); }
    }
    that.db[name] = value;
  },

  /**
   * Use to add values to facts db array like expressions(terms) and categories.
   * @param {string} fact array to update: terms or categories
   * @param {string} value
   */
  add: function(fact, value) {
    if(this.db[fact] === undefined || value === '') {
      if(window.console) { console.log('Bad fact in Facts.add '+fact+' val '+value); }
      return;
    }
    this.db[fact].push($.trim(value));
    this.publish('added', {fact: fact, index: this.db[fact].length - 1 });
  },


  get: function(fact, index) {
    return index === undefined ? this.db[fact] : this.db[fact][index];
  },

  get_all_terms: function() {
    var list;
    list = this.db.terms.sort();
    list = $.map(list, function(t) { if(t !== '') return '"'+t+'"'; })
    return list.join('|');
  },
  /**
   * check_user checks if current user/compiler is logged-in
   * and returns false or the userName
   */
  check_user: function() {
    var that, user;
    that = this;
    user = wgUserName || false;
    if(!user) {
      this.publish('warning', { msg: 'You are not logged in' });
      return false;
    } else {
      return user;
    }
  },
  /**
   * add_user adds compiler [wiki] name to Facts.db if not already in it
   */
  add_user: function() {
    var that, user, users;
    that = this;
    user = this.check_user();
    users = that.db.compiler;
    if(user && $.inArray(user, users) === -1) that.add('compiler', user);
  },
  /**
   * returns the date in specified Facts format
   */
  get_date: function() {
    var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
    var d = new Date(); var day = d.getDate().toString(); var month = monthname[d.getMonth()]; var year = d.getYear().toString().substring(1,3);
    if (day.length == 1) { day = '0'+day }
    var date = day+month+year;
    return date;
  },
  /**
   * Complete is called to add or remove completed books in Facts.db.complete
   * @param {string} book to add or remove for the completed list
   * @param {string} action add or remove
   */
  complete: function(book, action) {
    var complete;
    complete = this.db.complete;
    if(action === 'add') {
      if(book === 'ALL') {
        complete.splice(0);
        complete.push(book);
      } else {
        if($.inArray('ALL', complete) > -1) complete.splice($.inArray('ALL', complete), 1);
        complete.push(book);
      }
    } else {
      complete.splice($.inArray(book, complete), 1);
    }
    //if(window.console) { console.log(complete); }
  },

  /**
   * Update totals by checking the new quote added/deleted in the compilation, by finding it's book parent
   * @param {string} id Id of the inserted or deleted quote
   */
  update_totals: function(params) {
    var q, book;
    q = Compilation.find_in_db(params.id, 'q');
    if(q) {
      book = q.book;
      this.db.totals_by_section[book]++;
      this.db.total++;
    } else {
      book = Compilation.find_in_db(params.id, 'u').book;
      this.db.totals_by_section[book]--;
      this.db.total--;
    }
    this.publish('totals_updated');
  },
  /**
   * Check quotes in compilation.db and updates totals by section and total
   * it should be called after rendering compilation and before saving(and perhaps in other extra-ordinary situations)
   * For individual quotes added to compilation call update_totals instead
   */
  check_totals: function() {
    var that, book_count, total, updated;
    that = this;
    total = 0;
    book_count = {};
    if(window.console) { console.info('In Facts#check_totals'); }
    $.each(Compilation.db.quotes, function(name, attr) {
      var book = Compilation.db.quotes[name]['book'];
      book_count[book] ? book_count[book]++: book_count[book] = 1;
      if(window.console) { console.log('Facts#check_totals: In quote: '+name+' count for '+book+' is: '+book_count[book]); }
    });
		
    $.each(Facts.db.totals_by_section, function(book, val) {
      if(!book_count[book]) {
				if(window.console) { console.warn('Facts#check_totals: No book_count for '+book+' => '+book_count[book]); }
				book_count[book] = 0;
			}
      if( val !== book_count[book]) {
        if(window.console) { console.warn("Facts#check_totals: Facts.db totals_by_section doesn't match totals in Compilation.quotes.db for "+book+" totals: "+val+" => "+book_count[book]); }
        Facts.db.totals_by_section[book] = book_count[book];
        updated = true;
      }
      total += book_count[book];
    });
    if(updated) {
      if(window.console) { console.info('Updating Facts.db with quotes total '+total); }
      this.db.total = total;
      this.publish('totals_updated');
    }
  },
  /**
   * Save will rebuild the Facts.db in wiki format {{field|value1|value2|valueN}}
   */
  save:function() {
    var that, wiki;
    that = this;
    wiki = '';
    $.each(that.db, function(f, values) {
      if(f === 'books')     return true;
      if(f === 'terms')     wiki += wiki_format(f, format_terms(values));
      if(f === 'notes' || f === 'goal' || f === 'first' || f === 'last' || f === 'total') wiki += wiki_format(f, values);
      if(f === 'compiler' || f === 'complete')  wiki += wiki_format(f, values.join('|'));
      if(f === 'totals_by_section') wiki += wiki_format(f, format_tbs(values));
      if(f === 'toc') wiki += '\n{{toc right}}';
      if(f === 'categories') wiki += format_cats(values);
    });

    return wiki;

    function wiki_format(field, val) {
      return '\n{{'+field+'|'+val+'}}';
    }
    function format_terms(terms) {
      var t;
      t = $.map(terms, function(term) {
        if(term !== '') return '"'+term+'"';
      }).sort();
      return t.join('|');
    }
    // format totals_by_section obj
    function format_tbs(totals) {
      var t;
      t = new Array();
      $.each(totals, function(book, total) {
        t.push(book+'='+total);
      });
      return t.join('|');
    }
    function format_cats(categories) {
      var c = '';
      $.each(categories, function(i, cat) {
        if(cat === '') return true;
        c += '\n[[Category:'+cat+']]';
      });
      return c;
    }
  },

  db: {
		terms: 			new Array(),
		notes:			new String(),
		compiler:		new Array(),
		complete: 	new Array(),
		goal: 			new Number(0),
		first:			new String(),
		last:				new String(),
		totals_by_section: {'BG' : 0, 'SB' : 0, 'CC' : 0, 'OB' : 0, 'Lec' : 0, 'Con' : 0, 'Let' : 0 },
		total:			new Number(0),
		toc:				new String('right'),
		categories: new Array(),
    books:      new Array('BG', 'SB', 'CC', 'OB', 'Lec', 'Con', 'Let')
  },
  terms: new Array()
},
/* @Prototype */
{
}
);