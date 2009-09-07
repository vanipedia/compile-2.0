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
    // Set autocomplete on link box in form
				CompileController.autocomplete($('input#link'), true);
				// Intialize Vanisource reference lookup table as a dialog and close it
				$('#ref_lookup_table').dialog({
								autoOpen: false,
								title: 'Vanisource Reference lookup',
								width: 532,
								maxHeight: 700,
								maxWidth: 800
				}).children('table').each(function() {
								$('tr:first', this).css({ background: '#603F9D', color: '#C3C9F2', 'font-weight': 'bold' });
				});
  },

  // Events to submit a new_quote for rendering and ref request
  // the event is triggered by onkeyup
  "textarea keyup": function(params) {
    params.event.kill();
    this.process_new_quote();
  },
  "textarea change": function(params) {
    params.event.kill();
    this.process_new_quote();
  },

  "#submit_quote click": function(params) {
    params.event.kill();
    if(this.check_uninserted_quotes()) this.process_new_quote();
  },
  "#clear_form click": function(params) {
    params.event.kill();
    var p = $('#compile_form');
    $('textarea', p).val('');
    if($('#ref_lookup').is(':visible')) {
								$('#ref_lookup').hide();
								$('#ref_lookup #ref').html('');
								$('#ref_lookup input#link').val('');
				}
  },
		"#ref_lookup_table_open click": function(params) {
				if(window.console) { console.info('CompileformController#ref_lookup_table_open was clicked'); }
				params.event.kill();
    if($('#ref_lookup_table').is(':empty')) {
        this.render({
            to: 'ref_lookup_table',
            action: 'ref_lookup_table'
        });
    }
				$('#ref_lookup_table').dialog('open');
		},
  process_new_quote: function() {
    var that, elem, rl;
    that = this;
				elem = $('#compile_tools > #compile_form > textarea')[0];
				rl = $('#ref_lookup');
    attr = {};
    if(rl.not(':hidden')) {
								if(window.console) { console.log('CompileformController In process_new_quote!'); }
								attr['ref'] = $('input#link', rl).val();
								$('#clear_form').click();
				}
    attr['text'] = elem.value;
    if(this.action_name !== '#submit_quote click' && !attr['ref'] && !this.check_text(elem.value)) return;
    this.submit_quote(attr);
  },
  check_text: function(text) {
    text = $.trim(text);
    if(text === '' || text === this.Class.last_quote_value || !this.check_uninserted_quotes()) return false;
    this.Class.last_quote_value = text;
    return true
  },
  check_uninserted_quotes: function() {
    if( $('div.building_quote').not('.deleted_quote').length !== 0) {
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
      //temp_quote = BaltoUni(temp_quote); *** deprecated since we are doing the conversion inside the Quote.init
      // Save quote text to Class variable temp_quote
      this.Class.temp_quote = temp_quote;
      // Extract the Vedabase reference.
      // Check first if we are coming from a not found ref and if so,
      // use the link provided in the form by the suggest link field
      submit['ref'] = attr['ref'] ? attr['ref'] : $.trim(re.exec(text)[1]);
      // Clean the extra-spacing we have found in some of the refs from Vedabase
      submit['ref'] = submit['ref'].replace(/\s+/g, ' ');
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
        if($("#compile_tools #ref_lookup").is(':hidden')) {
            $("#compile_tools #ref_lookup #ref").html("Search for link for this quote and click submit.<br/>Orig ref. was: <b>"+params.ref+"</b>");
            $("#compile_tools #ref_lookup").show()
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