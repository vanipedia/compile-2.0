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
				CompileController.link_autocomplete($('input#link'), true);
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
    if(!this.extract_veda_ref(params.element.value)) return;
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

    "div#form_buttons span#prabhupada_icon click": function(params) {
        var edit_quote_text;
        params.event.kill();
        compile_form_textarea = $("div#compilation > div#compile_tools > div#compile_form > textarea");
        QuotesController.insert_prabhupada_speaker(compile_form_textarea[0]);
        $(compile_form_textarea).focus();
    },

    process_new_quote: function() {
        var that, elem, rl, attr;
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
      var that, re, text, new_quote, quote, temp_quote, submit;
      that = this;
      //re = new RegExp(">>> Ref. VedaBase => (.+)");
      text = attr['text'];
      quote = that.extract_veda_ref(text);
      if (quote) {
          submit = {};
          // Remove Ref from VedaBase
          // Camelizing (now deprecated) has become counterproductive since compilers might copy the
          // quote incorrectly and camelizing makes that error hard to spot
          //temp_quote = $.trim(quote.text.replace(/^[a-z]/, camel));
          temp_quote = $.trim(quote.text);
          // Convert Balaram to Unicode encoding and diacritics
          //temp_quote = BaltoUni(temp_quote); *** deprecated since we are doing the conversion inside the Quote.init
          // Save quote text to Class variable temp_quote
          this.Class.temp_quote = temp_quote;
          // Extract the Vedabase reference.
          // Check first if we are coming from a not found ref and if so,
          // use the link provided in the form by the suggest link field
          //submit['ref'] = attr['ref'] ? attr['ref'] : $.trim(re.exec(text)[1]);
          submit['ref'] = attr['ref'] ? attr['ref'] : quote.ref;
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
      function camel(first) {
          return first.toUpperCase();
      }
    },
    extract_veda_ref: function(t) {
        var re, ref, quote;
        re = new RegExp(">>> Ref. VedaBase => (.+)");
        ref = re.exec(t);
        quote = {};
        if(ref) {
            quote.ref = $.trim(ref[1]);
            quote.text = $.trim(t.replace(re, ''));
        } else {
            quote = false;
        }
        return quote;
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