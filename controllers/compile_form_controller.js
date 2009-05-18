CompileFormController = MVC.Controller.extend('compile_form',
/* @Static */
{
  last_quote_value: '',
  interID: '',
  temp_quote: ''
},
/* @Prototype */
{
  load: function() {
    // autocomplete for suggest box on quote not found
    // jQuery.autocomplete was customized in order to display properly
    // in our fixed compile_tools box
    $('input#link').autocomplete("/php/get_vanisource_title.php", { 
        extraParams: { type: 'title', suggest: true, minChars: 2}, 
        resultsClass: 'suggest_results',
        fixed: true
    });
    
  },
  
  // Events to submit a new_quote for rendering and ref request
  // the event is triggered by onkeyup
  "textarea keyup": function(params) {
    this.process_new_quote(params.element);
  },
  "textarea change": function(params) {
    this.process_new_quote(params.element);
  },

  "#submit_quote click": function(params) {
    if(this.check_uninserted_quotes()) this.process_new_quote($(params.element).parents('#compile_form').children('textarea')[0]);
  },
  "#clear_form click": function(params) {
    $(params.element.parentNode).children('textarea').val('');
  },
  process_new_quote: function(elem) {
    var that;
    that = this;
    attr = {};
    if($(elem).siblings('input#link').not(':hidden')) attr['ref'] = $(elem).siblings('input#link').val();
    attr['text'] = elem.value;
    if(!attr['ref'] && !this.check_text(elem.value)) return;
    this.submit_quote(attr);
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
  submit_quote: function(attr) {
    var re, text, new_quote, ref, temp_quote, submit;
    re = new RegExp(">>> Ref. VedaBase => (.+)");
    text = attr['text'];
    if (re.test(text)) {
      submit = {};
      // Remove Ref from VedaBase
      temp_quote = $.trim(text.replace(re, ''));
      // Convert Balaram to Unicode encoding and diacritics
      temp_quote = BaltoUni(temp_quote);
      // Save quote text to Class variable temp_quote
      this.Class.temp_quote = temp_quote;
      // Extract the Vedabase reference.
      // Check first if we are coming from a not found ref and if so,
      // use the link provided in the form by the suggest link field
      submit['ref'] = attr['ref'] ? attr['ref'] : $.trim(re.exec(text)[1]);
      // add type "title" to submission if this is a suggested reference
      attr['ref'] ? submit['type'] = 'title': '';
      // Submit the reference to the Quote.find_reference class method
      Quote.find_reference(submit);
    } else {
      this.publish('warning', { msg: "No Vedabase Reference in pasted quote!\nPerhaps you forgot to use the \"Copy with Reference\" button in Vedabase"});
      return;
    }
  },

  /***** Subscriptions *****/
  "quote.found_reference subscribe": function() {
    if($('#compile_form textarea').length) $('#compile_form textarea').val('');
  },
  "quote.not_found_reference subscribe": function(params) {
        if($("#compile_tools input#link").is(':hidden')) {
            $("#compile_tools input#link")
                .show()
                .val("Try finding the link for this quote by typing it here")
                .one("click",
                    function(){
                        $(this).val("");
                    }
                );
        }
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