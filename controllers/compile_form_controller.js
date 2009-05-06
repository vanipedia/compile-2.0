CompileFormController = MVC.Controller.extend('compile_form',
/* @Static */
{
  last_quote_value: '',
  interID: '',
  temp_quote: ''
},
/* @Prototype */
{
  // Events to submit a new_quote for rendering and ref request
  // the event is triggered by onkeyup
  // TODO troubleshoot for right-clickers
  "textarea keyup": function(params) {
    this.process_new_quote(params.element);
  },
  "textarea change": function(params) {
    this.process_new_quote(params.element);
  },

  "#submit_quote click": function(params) {
    if(this.check_uninserted_quotes()) this.submit_quote($(params.element.parentNode).children('textarea').val());
  },
  "#clear_form click": function(params) {
    $(params.element.parentNode).children('textarea').val('');
  },
  process_new_quote: function(elem) {
    var that;
    that = this;
    if(this.check_text(elem.value)) this.submit_quote(elem.value);
  },
  check_text: function(text) {
    text = $.trim(text);
    if(text === '' || text === this.Class.last_quote_value || !this.check_uninserted_quotes()) return false;
    this.Class.last_quote_value = text;
    return true
  },
  check_uninserted_quotes: function() {
    if( $('div.building_quote').length !== 0) {
      this.publish('hide_compile_tools');
      this.publish('warning', { msg: 'You must Insert the new quote to continue compiling!'});
      $.scrollTo('.building_quote', 'slow', { easing: 'easeOutExpo', offset: -50 });
      return false;
    }
    return true;
  },
  submit_quote: function(text) {
    var re, new_quote, ref, temp_quote;
    re = new RegExp(">>> Ref. VedaBase => (.+)");
    if (re.test(text)) {
      temp_quote = $.trim(text.replace(re, ''));
      temp_quote = BaltoUni(temp_quote);
      this.Class.temp_quote = temp_quote;
      ref = $.trim(re.exec(text)[1]);
      Quote.find_reference({ref: ref});
    } else {
      this.publish('warning', { msg: 'No Ref in pasted quote!'});
      return;
    }
  },

  /***** Subscriptions *****/
  "quote.found_reference subscribe": function() {
    if($('#compile_form textarea').length) $('#compile_form textarea').val('');
  },
  "quote.title_req_failed subscribe": function(resp) {
    this.publish('warning', { msg: resp.msg});
  },
  "quote.ajax subscribe": function(params) {
    if(params.type === 'start') $('#ajax').show();
    if(params.type === 'end') $('#ajax').hide();
  }
}
);