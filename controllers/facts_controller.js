FactsController = MVC.Controller.extend('facts',
/* @Static */
{},
/* @Prototype */
{
    load: function() {
        // Set autocomplet for category search
        CompileController.category_autocomplete($('#facts > #categories #add_categories > input'), true);
    },
  /****** Event listeners ******/
  ".facts_tools .add click": function(params) {
    this.add(params);
  },
  ".facts_tools input keyup": function(params) {
    var that = this;
    params.event.kill();
    if(params.event.keyCode === 13) {
      that.add(params);
    }
  },
  "#copy_terms .copy click": function(params) {
    var that, all_terms;
    that = this;
    params.event.kill();
    all_terms = Facts.get_all_terms();
    if(all_terms === '') {
      this.publish('warning', { msg: 'You have no expressions to copy'});
      return;
    }
    if(window.console) { console.log(all_terms); }
    $('#copy_terms_man').val(all_terms).show().select();
  },

  /****** functions and Event handlers *****/
  /**
   * Add new facts to db. Used only for terms and categories. Other dont have an add action but update only
   * @param {obj} element params element to the corresponding event
   */
  add: function(params) {
    var fact, value;
    fact = $(params.element).parents('.fact').attr('id');
    value = $(params.element).parent().children('input').val().replace(/"/g, '');
    $(params.element).parent().children('input').val('');
    fact === 'terms' && /\|/.test(value) ? add_multiple_terms(value) : Facts.add(fact, value);
    function add_multiple_terms(values) {
        var terms_list;
        terms_list = values.split('|');
        $.each(terms_list, function(i, t) { Facts.add('terms', t); });
    }
  },

  update: function(elem, value) {
    var fact, index;
    fact = $(elem).hasClass('fact') ? elem.id : $(elem).parents('.fact').attr('id');
    index = elem.id.match(/\d+/);
    return Facts.update(fact, index, value);
  },
  /**
   * Append is used to append new values to expressions and categories.
   * @param {string} params.fact
   * @param {string} params.index
   */
  append: function(params) {
    var css, parent;
    parent = params.fact+'_list';
    this.id     = params.fact+'_'+params.index;
    this.f_class  = params.fact;
    this.value  = Facts.get(params.fact, params.index);
    if($('#'+parent).length === 0) {
      if(window.console) { console.error('Error in FactsController.append: '+parent+' does not exist in dom'); }
      return;
    }
    this.render({
      bottom: parent,
      action: 'append' // Specify template otherwise it will attempt to render into the subscriber that executed this function
    });
     css = params.index % 2 ? { background: '#DEE2F9' } : { background: '#D4D9F9' };
     $('#'+this.id).css(css);
    this.editable(this.id);
    // Hilite it in all the current quotes if it's a term
    if(params.fact === 'terms') this.hilite(this.value);
  },
  /**
   * Hilite will highlight a term in all the quotes in the compilation
   * @param {string} term
   */
  hilite: function(term) {
    if(term === '') return;
    $('.quote .text').highlight_sanskrit(term);
  },
  /**
   * Un_hilite a term from all the quotes in the compilation
   * @param {string} term
   */
  un_hilite: function(term) {
    if(!term) {
      if(window.console) { console.log('term missing in FactsController.un_hilite '+term); }
      return;
    }
    var v, re;
    re = new RegExp('<span class="highlight_terms">'+term+'</span>', 'g');
    $('.quote .text').each(function() {
      v = $(this).html().replace(re, term);
      $(this).html(v);
    });
  },
  editable: function(id) {
   var edit, that;
   that = this;
   edit = id ? '#'+id : '.term, #goal, .categories, #notes';
   $(edit).editable(function(value, settings) {
         return that.update(this, value);
      }, {
        event: "dblclick",
        type: "text",
        style: "border: solid 0px indigo;"
    });
  },

  _render_facts: function(facts) {
    var that, options;
    that = this;
    this.facts = facts;
    $('#facts').length ? options = { to: 'facts', action: 'facts' } : options = { bottom: 'compile_tools', action: 'facts' };
    this.render(options);
    $(document).ready(function() { that.attach_events() });
  },
	"compilation.built subscribe": function() {
    this.run_checks();
  },
  run_checks: function() {
    Facts.check_totals();
  },
  attach_events: function() {
    var that;
    that = this;
    $('#facts').accordion({
        autoHeight: false,
        collapsible: true,
        active: false
		});
    this.color_list($('.term, .categories, .compiler, #complete > div, #totals_by_section > div'));

    /**** Check and uncheck functions   ****/
    $.fn.check = function() {
        return this.each(function() {
          this.checked = true;
        });
    };
    $.fn.uncheck = function() {
        return this.each(function() {
          this.checked = false;
        });
    };
    /**** Checkboxes logic  ****/
    $.each(Facts.db.complete, function() {
      $('#complete_'+this).check();
    })
    $('.complete_checks').click(function() {
      that.checkbox(this);
      if($('.complete_checks:checked').length === 7) {
        $('#complete_ALL').check().click().check();
        return;
      }
      if(this.id !== 'complete_ALL') {
        $('#complete_ALL').uncheck();
        $('#goal').prev().show();
      } else {
        $('.complete_checks').not('#complete_ALL').uncheck();
        this.checked === true ? $('#goal').prev().hide(): $('#goal').prev().show();
      }
    });
    // Check if ALL is already checked and hide Goal field in Facts table
    if($("#complete_ALL").is(':checked')) $('#facts #goal').prev().hide();
    this.editable();
  },
    color_list: function(list) {
        list.filter(':even').css({
            background: '#D4D9F9'
        }).end().filter(':odd').css({
            background: '#DEE2F9'
        });
    },
  checkbox: function(elem) {
    var book, action;
    book = elem.id.replace(/complete_/, '');
    action = elem.checked ? 'add' : 'del';
    Facts.complete(book, action);
  },
  update_t_b_sections_view: function() {
    this.totals = Facts.db.totals_by_section
    this.render({
      to: 'totals_by_section',
      action: 'totals'
    })
  },
  update_totals_view: function() {
    this.total = Facts.db.total;
    this.render({
      to: 'total',
      action: 'total'
    })
  },
  /*********** Subscriptions *********/

  /**
   * Subscribe to facts.created to render the Page facts form
   */
   "facts.created subscribe": function(params) {
    var that;
    that = this;
    this._render_facts(params.facts);
    // Make categories draggable
    $('#categories_list').sortable({
        placeholder: 'facts_sortable_placeholder',
        axis: 'y',
        cursor: 'move',
        forcePlaceholderSize: true,
        items: 'li',
        opacity: 0.7,
        update: function() { that.color_list($('.categories')) }
    });
    $("#categories_list").disableSelection();

  },
  /**
   * facts.added will receive message from facts and add the element to the dom for display
   * @param {string} type type of fact added to the Facts.db
   * @param {number} index Number in db that matches number in dom e.g: terms_8
   */
  "facts.added subscribe": function(params) {
    this.append(params);
  },
  /**
   * remove the node from the dom. This is done only in elements in arrays, in the Facts.db
   * @param {obj} params.elem to be removed from dom.
   */
  "facts.deleted subscribe": function(params) {
    var elem;
    elem = '#'+params.fact+'_'+params.index;
    if(params.fact === 'terms') this.un_hilite(params.old);
    $(elem).remove();
  },
  "facts.totals_updated subscribe": function(params) {
    this.update_t_b_sections_view();
    this.update_totals_view();
  },
  /**
   * Listens for compilation.quote_inserted to update the totals (total by sections and total)
   */
  "facts.updated_term subscribe": function(params) {
    this.hilite(params.term);
  },
  "quote.created subscribe": function(params) {
    Facts.update_totals(params);
  },
  "compilation.deleted subscribe": function(params) {
    Facts.update_totals(params);
  },
  "compilation.undone subscribe": function(params) {
    Facts.update_totals(params);
  }
}
);