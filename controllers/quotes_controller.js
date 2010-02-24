QuotesController = MVC.Controller.extend('quotes',
/* @Static */
{
    currently_editing: false,
    focused_textarea: false,
    current_quote: '',
    key: {
        escape: 27, // esc
        //heading: 72, // h
        heading: 69, // e
        section: 83, // s
        trans: 84, // t
        purport: 80, // p
        trans_purport: 78, // n
        edit_quote: 81, // q
        //insert: 73, // i
        insert: 82, // r
        heading_create: 65, // a
        heading_edit: 77, // m
        heading_set: 69, // e
        heading_append: 68,// d
        heading_new: 78, // n
        verse_select: 86, // v
        enter: 13
    },

    enable_keybindings: function(q_obj) {
        $(document).bind('keydown', { quote: q_obj }, QuotesController.keybindings_event);
    },
    disable_keybindings: function() {
        $(document).unbind('keydown', QuotesController.keybindings_event);
    },
    keybindings_event: function(e) {
        var that, q, q_obj, k, key, tips;
        that = this;
        e.stopImmediatePropagation();
        e.preventDefault();
        q_obj = e.data.quote;
        q = QuotesController.current_quote;
        tips = $('div#alert_tip').is(':visible') ? $('div.q_menu > div.q_tips > div#alert_tip', q) : $('div.q_menu > div.q_tips', q);
        k = e.keyCode;
        if(QuotesController.key['escape'] === k) {
            if( $(q).hasClass('edit_quote') ) { $('> div#edit_buttons > input[id="Cancel_quote"]', q).click(); }
            if( $('div#alert_tip', q).is(':visible') ) { q_obj.cancel_tip(q); }
            return;
        }
        // Loop through the keys and click on the right button
        $.each(QuotesController.key, function(name, kcode) {
            if(kcode === e.keyCode) {
                $('input[id*="'+name+'"]', tips).click();
                return;
            }
        });
    },

    enable_edit_keybindings: function(q_obj) {
        QuotesController.disable_keybindings(); // disable tips
        //$(this.params.element).bind('keydown', that.edit_view_keybindings_event);
        $(q_obj).bind('keydown', { q: q_obj }, QuotesController.edit_view_keybindings_event);
    },
    disable_edit_keybindings: function(q_obj) {
        $(q_obj).unbind('keydown', QuotesController.edit_view_keybindings_event);
        QuotesController.enable_keybindings(q_obj); // enable tips
    },
    edit_view_keybindings_event: function(e) {
        q = e.data.quote;
        if(e.keyCode === QuotesController.key['escape']) { $('div#edit_buttons > input#Cancel_quote', q).click(); }
        if(e.shiftKey && e.keyCode === QuotesController.key['enter'] ) { $('div#edit_buttons > input#Update_quote', q).click(); }
    },
    /**
		 * Insert Prabhupāda: as the speaker when button click in edit_quote
		 * @param {object} quote_textarea is a reference to the textarea of the quote
	 */
    insert_prabhupada_speaker: function(quote_textarea) {
        if (quote_textarea.selectionStart || quote_textarea.selectionStart == '0') {
            var startPos = quote_textarea.selectionStart;
            var endPos = quote_textarea.selectionEnd;
            quote_textarea.value = quote_textarea.value.substring(0, startPos) + 'Prabhup&#257;da: ' + quote_textarea.value.substring(endPos, quote_textarea.value.length);
        }
    },

},
/* @Prototype */
{
    /****** Events ******/
    mouseover: function(params) {
        params.event.kill();
        QuotesController.current_quote = params.element;
        if(!$(params.element).hasClass('edit_quote')) { QuotesController.enable_keybindings(this); }
    },
    mouseleave: function(params) {
        params.event.kill();
        QuotesController.disable_keybindings();
        this.cancel_tip(params.element);
    },
    // Problems handling mouseup and dblclick event confusion
    dblclick: function(params) {
        if (params.element.has_class('edit_quote') !== undefined) return;
        params.event.kill();
        if (this.Class.currently_editing) {
            this.render_quote(this.Class.currently_editing);
        }
        this.render_quote({
            elem: params.element,
            view: 'edit'
        });
    },
    "div#edit_buttons input#Update_quote click": function(params) {
        var quote;
        quote = $(params.element).parents('.quote');
        params.event.kill();
        this._event_resp({
            elem: quote,
            action: 'update'
        });
    },

    "div#edit_buttons input#Cancel_quote click": function(params) {
        var quote;
        quote = $(params.element).parents('.quote');
        params.event.kill();
        this._event_resp({
            elem: quote,
            action: 'cancel'
        });
    },
    "div#link_text click": function(params) {
        params.event.kill();
        $(params.element).parents('div.edit_quote').children('div#fix_link').toggle().children('input#fix_link_input').focus();
    },
    "span#prabhupada_icon click": function(params) {
        var edit_quote_text;
        params.event.kill();
        edit_quote_text = $(params.element).parents('.quote').children('#text')[0];
        // if no selection has been made to insert the speaker
        if (edit_quote_text.value.length === edit_quote_text.selectionStart) {
            this.publish('warning', {
                msg: 'You must place the cursor in the text where Prabhup&#257;da is the speaker'
            });
            return;
        }
        QuotesController.insert_prabhupada_speaker(edit_quote_text);
    },
    "div#diacritics span#diacritics_toggle click": function(params) {
      $(params.element).siblings('p').toggle();
    },
    "div#diacritics p a click": function(params) {
        var edit_quote_text, diacritic;
        params.event.kill();
        edit_quote_text = this.Class.focused_textarea;
        // if no selection has been made to insert the speaker
        if (!edit_quote_text) {
            this.publish('warning', {
                msg: 'You must place the cursor in the text where you wish to insert the diacritic character'
            });
            return;
        }
        diacritc = params.element.innerHTML;
        this.insert_diacritic(edit_quote_text, diacritc);
    },
    "textarea focus": function(params) {
        this.Class.focused_textarea = params.element;
    },
    "div.undo_quote click": function(params) {
        if (params.element.has_class('edit_quote') !== undefined) return;
        var quote;
        params.event.kill();
        quote = $(params.element).parents('div.quote');
        this.undo(quote);
    },
    "div.del_quote click": function(params) {
        var quote;
        params.event.kill();
        quote = $(params.element).parents('div.quote');
        this.delete_quote(quote);
    },
    "div.candidate_quote click": function(params) {
      var qod_button;
      params.event.kill();
      $(params.element).hasClass('ui-state-error') ? $(params.element).removeClass('ui-state-error') : $(params.element).addClass('ui-state-error');
    },
    ".deleted_quote_msg .undo_del_quote click": function(params) {
        var quote;
        params.event.kill();
        quote = $(params.element).parents('div.quote');
        this.undo(quote);
    },
    "div.text mouseup": function(params) {
        if (window.getSelection().toString() === '') {
            return;
        }
        //if(window.console) { console.log('In mouseup'); }
        if (params.element.has_class('edit_quote') !== undefined) return;
        params.event.kill();
        var elem;
        elem = params.element;
        this.check_selection(elem);
    },
    "div.q_menu div.q_tips input.tips click": function(params) {
        var elem;
        elem = params.element;
        params.event.kill();
        this.tips_handler(elem);
    },
    "div.q_menu div.q_tips div#alert_tip input.alert_tip_heading_or_verse click": function(params) {
        var id, quote;
        params.event.kill();
        id = params.element.id;
        quote = $(params.element).parents('div.quote');
        if( id === 'heading_select') {
            // Let's skip the next menu if the heading is empty because we know we want to set the heading with the highlighted text
            if( quote.children('.heading').length ) {
                this.tip_alert({elem: quote, type: 'heading' })
            } else {
                // Submit to _do_heading with a heading_set id
                this._do_heading(quote, 'heading_set');
            }
        } else {
            this.process_verse($(quote).attr('id'));
        }

    },
    "div.q_menu div.q_tips div#alert_tip input.alert_tip_heading_set click": function(params) {
        var id, quote;
        params.event.kill();
        id = params.element.id;
        quote = $(params.element).parents('div.quote');
        if (id === 'heading_new') {
            // Update heading with an empty string
            Compilation.update_heading({
                id: quote.attr('id'),
                heading: ' ',
                action: 'new'
            });
            // Give focus to the heading
            $('#heading', quote).focus();
        }
        if (id === 'heading_edit') {
            // if other quote is in edit mode, render it to view mode
            if (this.Class.currently_editing) this.render_quote(this.Class.currently_editing);
            // if no existing heading.. update the quote with a blank heading, which will automagically render in edit mode
            if (quote.children('.heading').length === 0) {
                Compilation.update_heading({
                    id: quote.attr('id'),
                    heading: ' ',
                    action: 'new'
                });
            } else {
                // render in edit mode
                this.render_quote({
                    elem: quote,
                    view: 'edit'
                });
            }
            // Give focus and select text in heading
            $('#heading', quote).focus().select();
        }
        if (id === 'heading_create') this.tip_alert({
            elem: quote,
            type: 'heading'
        });
        if (id === 'heading_set' || id === 'heading_append') this._do_heading(quote, id);

    },

    // Event handler for sections in the q_menu
    "div.q_menu div.q_tips div#alert_tip input click": function(params) {
        var selected_section, elem;
        params.event.kill();
        elem = params.element
        selected_section = elem.id;
        if (window.console) {
            console.log(elem + ' with ' + selected_section);
        }
        this._do_section(elem, selected_section)
    },

    // custom buttons
    ".ui-state-default mouseover": function(params) {
        $(params.element).addClass('ui-state-hover');
    },
    ".ui-state-default mouseout": function(params) {
        $(params.element).removeClass('ui-state-hover');
    },
     ".ui-state-default mousedown": function(params) {
        $(params.element).addClass('ui-state-active');
    },
    ".ui-state-default mouseup": function(params) {
        $(params.element).removeClass('ui-state-active');
    },

    /****** Event responders ********/
    /**
		 * @param elem {object} The quote object to be rendered
		 * @param id {string} The quote id/name
		 * @param action {string} Rendering mode: view, edit, delete
		 **/
    render_quote: function(params) {
        //if(window.console) { console.log('in render_quote'); }
        var id, elem, action;
        elem = params['elem'];
        // check for id in elem depending whether is an custom object or a dom object
        elem.id ? id = elem.id: id = $(elem).attr('id');
        if ($('#' + id).length !== 1) this._append_quote(elem);
        if (params['view'] === 'view') {
            action = 'quote';
            this.Class.currently_editing = false;
            this.Class.focused_textarea = false;
            $('#' + id).removeClass('edit_quote');
            if (elem.type === 'new') $('#' + id).addClass('q_new building_quote');
            CompileController.enable_keybindings();
        } else if (params['view'] === 'edit') {
            action = 'quote_edit';
            this.Class.currently_editing = {
                elem: elem,
                view: 'view'
            };
            $('#' + id).addClass('edit_quote');
            $(document).unbind('click');
            CompileController.disable_keybindings();
            QuotesController.enable_edit_keybindings(elem);
        } else if (params['view'] === 'delete') {
            action = 'delete';
            $('#' + id).addClass('deleted_quote');
        }
        action === 'delete' ? this.deleted = Compilation.db.find(id, 'd') : this.quote = Compilation.db.find(id, 'q');

        // Change render action if quote is missing trans or purport text
        if (action === 'quote' && this.quote.section === 'Translation and Purport' && (this.quote.trans === ' ' || this.quote.purport === ' ')) {
            this.render_quote({
                elem: elem,
                view: 'edit'
            });
            return;
        }
        // Change render action if quote has a blank heading (not false)
        if (action === 'quote' && this.quote.heading === ' ') {
            this.render_quote({
                elem: elem,
                view: 'edit'
            });
            return;
        }
        if (params['view'] === 'edit') {
            this.edit_class = this.quote.bad_link ? 'ui-state-error ui-corner-all': 'ui-state-default ui-corner-all';
        }
								if($('#'+id).length) {
												//if(window.console) { console.info("In QuoteController#render_quote: rendering "+quote.id+" to "+id+" in template "+action); }
												this.render({
																to: id,
																action: action
												});
								} else {
												if(window.console) { console.error('QuotesController#render_quote: Error rendering quote to non-existing id in dom => '+id); }
												return;
								}

        // Some CSS and behavior ------ Where should this go?
        $('#' + id + '.edit_quote').children('#heading, #trans, #purport, #text').autogrow();

        // Make tips for this quote red in case they are required to be set
        $('#' + id + ' .tips[id^="set_"]').not('#set_heading_tip').toggleClass('ui-state-error');

        // Set autocomplete for bad_links
        if (params['view'] === 'edit') {
            CompileController.link_autocomplete($('#' + id + ' #fix_link_input'), false);
            if (this.quote.bad_link) {
                $('#' + id + ' #fix_link').show().children('#fix_link_input').focus();
            }
        }

        this.publish('rendered', $('#' + id));

    },
    // End of render_quote
    /**
		 * Edit the quote
		 * @param {object} quote DOM object to edit
		 */
    edit_quote: function(quote) {
        if (this.Class.currently_editing) {
            this.render_quote(this.Class.currently_editing);
        }
        this.render_quote({
            elem: quote,
            view: 'edit'
        });
        $.scrollTo(quote, 'slow', {
            easing: 'easeOutExpo',
            offset: -50
        });
    },
    /**
		 * Event responder for cancel and edit quote
		 * @param {dom} params.elem where event originates
		 * @param {string} params.action cancel or update
		 */
    _event_resp: function(params) {
        var $quote, id, that;
        that = this;
        $quote = $(params.elem);
        id = $quote.attr('id');
        action = params.action;
        if ($quote.children('#trans, #purport').length === 2 && action === 'cancel') {
            // Make update on a quote with Translation and Purport where either one might be empty, e.g.: after choosing a Trans-Purport section when only one has text
            if (/^\s+$/.test($quote.children('#trans').val()) || /^\s+$/.test($quote.children('#purport').val())) action = 'update';
        }
        if ($quote.children('#heading').length === 1 && action === 'cancel') {
            if (/^\s+$/.test($quote.children('#heading').val())) action = 'update';
        }
        if (action === 'update') {
            this.update($quote);
        } else {
            $quote.fadeOut("fast");
            this.render_quote({
                elem: $quote,
                view: 'view'
            });
            $quote.fadeIn("slow");
            if (!$quote.hasClass('building_quote')) this._transition_hilite($quote, '#FFFEC6', 2);
        }
        QuotesController.disable_edit_keybindings(params.elem);
    },

    /**
		 * Checks highlighted text in a quote to build a Heading
		 * @param {string} text_elem Dom element where event (highlight) ocurred. It can be passed as params.element or $(text_elem)
		 */
    check_selection: function(text_elem) {
        var q = $(text_elem).parents('.quote');
        if ($('div#alert_tip', q).is(':visible')) return;
        var that, heading_selection, quote, tip_elem;
        that = this;
        heading_selection = $.trim(window.getSelection().toString());
        if (heading_selection === '') {
            if ($('div#alert_tip').is(':visible')) this.cancel_tip(quote);
            return;
        }
        quote = $(text_elem).parents('div.quote');
        //this.tip_alert({elem: quote, type: 'heading'});
        this.tip_alert({
            elem: quote,
            type: 'heading_or_verse'
        });
    },

    /**
		 * Delete quote from compilation
		 * @param {string} quote Dom element to remove from compilation (dom)
		 */
    delete_quote: function(quote) {
        var id, that;
        that = this;
        id = $(quote).attr('id');
        Compilation.del_from_db(id, 'q');
    },
    /**
		 * Undo change or deletion of quote
		 * @param {string} quote Dom element. Even though quote might have been "deleted", the dom element is not removed (its class is changed only) from the dom so we can use it to undo deletions
		 */
    undo: function(quote) {
        var that, id;
        that = this;
        id = $(quote).attr('id');
        $(quote).slideUp('slow', function() {
            Compilation.undo(id, 'q');
            // remove class before rendering otherwise formatting and clean-up will not proceed in rendered listener
            $(this).removeClass('deleted_quote');
            that.render_quote({
                elem: quote,
                view: 'view'
            });
            $(this).show('slow');
        });
    },
    /**
		 * Process highlighted text to become the Heading of the quote
		 * @param {string} quote Dom element whose heading will be modified
		 * @param {string} resp is the id of the alert_tip_heading_set button that was clicked
		 */
    _do_heading: function(quote, resp) {
        var selection, id, action;
        id = $(quote).attr('id');
        selection = $.trim(window.getSelection().toString());
        if (selection === '') {
            this.publish('warning', {
                msg: 'You did not select any text for setting the heading'
            });
            return;
        }
        action = resp.replace('heading_', '');
        Compilation.update_heading({
            id: id,
            heading: selection,
            action: action
        });
    },
    /**
		 * Process_verse gets the selected text and submits it to to Quote.verse_request to process data as a verse_in_quote
		 * @param {dom_element} quote element where selection ocurred.
		 */
    process_verse: function(quote) {
        var verse;
        verse = $.trim(window.getSelection().toString()).split(/\r?\n/);
        // Eliminate empty lines for highlighted cases (introduced after changed in quotes spacing to <p>)
        verse = $.map(verse, function(line, i) {
                if(line !== '') { return line; }
            });
        Quote.request_verse(quote, verse);
        this.display_verses();
    },
    /**
		 * Set section for quote according to choice in the quote menu
		 * @param {string} elem Dom element whose section will be modified
		 */
    _do_section: function(elem, new_section_id) {
        var quote, id, text, new_section;
        quote = $(elem).parents('div.quote')
        id = quote.attr('id');
        link = quote.attr('link');
        if (new_section_id == 'trans') new_section = 'Translation';
        if (new_section_id == 'purport') new_section = 'Purport';
        if (new_section_id == 'trans_purport') new_section = 'Translation and Purport';
        Compilation.update_q_section(id, link, {
            section: new_section
        });
    },
    /**
		 * Tips handler receives event from clicking on a tip
		 * @param {string} tips_elem dom element that was clicked in the q_menu
		 */
    tips_handler: function(tips_elem) {
        var that, quote;
        that = this;
        quote = $(tips_elem).parents('div.quote'); // Find the quote the tip that triggered the event belongs to
        if (/section/.test(tips_elem.id)) this.tip_alert({
            elem: quote,
            type: 'section'
        });
        if (tips_elem.id === 'set_insert_tip') this.insert_new_quote(quote);
        if (tips_elem.id === 'edit_quote_tip') this.edit_quote(quote);
        if (tips_elem.id === 'edit_heading_tip' || tips_elem.id === 'set_heading_tip') this.tip_alert({
            elem: quote,
            type: 'edit_heading'
        });
    },

    tip_alert: function(params) {
        var that, tip_elem;
        that = this;
        tip_elem = this._find_alert_tip_elem(params.elem);
        if (!tip_elem) return;
        if (params.type === 'heading') this.message = $.trim(window.getSelection().toString()) === '' ? 'Highlight text and:': 'Set heading:';
        if (params.type === 'edit_heading') this.message = 'Set heading:';
        this.render({
            to: tip_elem,
            action: params.type
        })
        // Hide tips and show alert_tip
        if ($(tip_elem).is(':hidden')) {
            $(tip_elem).siblings('.tips').slideUp('fast');
            $(tip_elem).slideDown('fast');
            QuotesController.enable_clickbinding(this);
        }
    },
    /**
		 * Cancel tip in given elem
		 * @param {object} elem dom object whose tip will be canceled
		 */
    cancel_tip: function(elem) {
        if (!elem) {
            if (window.console) {
                console.log('Error in QuoteController.cancel_tip: missing elem argument');
            }
        }
        if ($(elem).hasClass('edit_quote') || $(elem).parents('div.edit_quote').length) return; // If we are in edit_quote form, exit!
        var tip_elem;
        tip_elem = this._find_alert_tip_elem(elem);
        //if(!tip_elem) return;
        if ($(tip_elem).is(':visible')) {
            // Always hide first
            $(tip_elem).slideUp('slow');
            if ($(tip_elem).siblings('.tips')) $(tip_elem).siblings('.tips').slideDown('slow'); // Test for siblings before trying to hide them. (Problems with dblclick event)
        }
    },

    insert_new_quote: function(quote) {
        Compilation.insert_new_quote($(quote).attr('id'), $(quote).attr('link'), {
            type: 'quote'
        },
        'q');
    },

    /**
		 * Will find the dom element (#alert_tip) whose quote triggered the event
		 * @param {object} elem dom element that triggered the event
		 */
    _find_alert_tip_elem: function(elem) {
        var p, tip;
        // Find .quote parent
        if ($(elem).hasClass('quote')) {
            p = elem;
        } else {
            p = $(elem).parents('div.quote');
        }
        // return tip_element
        tip = $('div#alert_tip', p).get(0);
        return tip;
    },
    /**
		 * Bind to the escape key and execute callback
		 * @param {function} callback Callback function to be executed on Esc keypress
		 */
    bind_escape: function(callback) {
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                callback();
                $(this).unbind('keydown');
            }
        });
    },
    // Add the container for the just 'created' quote
    _append_quote: function(quote) {
        var section;
        this.quote = quote;
        section = this.quote.parent ? this.quote.parent.replace(/[.,()]/g, '') : 'compilation';
        if (window.console) {
            console.info('QuotesController#_append_quote: appending ' + quote.id + ' to ' + section);
        }
								if ($('#'+section).length) {
												this.render({
																bottom: section,
																action: 'new_quote'
												});
								} else {
												if (window.console) {
                console.error('QuotesController#_append_quote: error rendering ' + quote.id + ' to ' + section);
            }
            this.publish('report_error', { msg: 'Error rendering ' + quote.id + ' to ' + section });
												return;
								}
    },
    hi_terms: function(elem) {
        var terms;
        terms = Facts.db.terms;
        if (!terms) {
            if (window.console) {
                console.log('No terminologies to highlight in hi_terms!');
                return;
            }
        }
        $.each(terms, function(i, term) {
            if (term === '') return true;
            $(elem).highlight_sanskrit(term);
        });
    },

    update: function(quote) {
        var id, attr, new_link;
        id = $(quote).attr('id');
        // Current values when Update button is clicked
        attr = {};
        $.each(['heading', 'trans', 'purport'], function(i, field) {
            attr[field] = get_values(field);
        });
        function get_values(field) {
            if ($(quote).children('#' + field).length) {
                var val = $.trim($(quote).children('#' + field).val());
                return val !== '' ? val: false;
            } else {
                return false;
            }
        }
        if ($(quote).children('#text').length) {
            attr['text'] = $(quote).children('#text').val();
        }
        new_link = $('#fix_link_input', quote);
        if ($(new_link).is(':visible') && $(new_link).val() !== '') {
            var link;
            link = $('#fix_link_input', quote).val();
            $(quote).attr('link', link).removeAttr('link_text').removeAttr('parent').removeAttr('book');
            if (window.console) {
                console.info('QuotesController#update: fixing link to: ' + link);
            }
            this.publish('changed_link', {
                elem: quote
            });
            return;
        }
        Compilation.update_db(id, attr, 'q');
        //Quote.update_section(Compilation.find_in_db(id, 'q'));
        return;
    },

    insert_diacritic: function(quote_textarea, diacritic) {
        if (quote_textarea.selectionStart || quote_textarea.selectionStart == '0') {
            var startPos = quote_textarea.selectionStart;
            var endPos = quote_textarea.selectionEnd;
            quote_textarea.value = quote_textarea.value.substring(0, startPos) + diacritic + quote_textarea.value.substring(endPos, quote_textarea.value.length);
            quote_textarea.setSelectionRange(endPos + 1, endPos + 1);
            quote_textarea.focus();
        }
    },
    _transition_hilite: function(elem, color, time) {
        var w, q, diff, off;
        $(elem).css('background-color', color);
        setTimeout(function() {
            $(elem).css('background-color', '');
        },
        time + '000');
        // Scrolling calculations
        w = window.innerHeight;
        q = $(elem).height();
        diff = w - q;
        off = diff <= 0 ? -50 : -diff / 2;
        //if(window.console) { console.log('Tesing offset: w is '+w+' q is '+q+' diff is '+diff+' and off is '+off); }
        $.scrollTo($(elem), 'fast', {
            easing: 'easeOutElastic',
            offset: off
        });
    },
    // Display dialog(s) for verse in quote
    display_verses: function() {
        var that = this;
        if ($('.verse').length) {

            function process_verse() {
                Compilation.process_verse({
                    quote: $(this).attr('quote'),
                    verse: $(this).attr('verse'),
                    resp: true
                });
                $(this).dialog('close');
            }
            function cancel_verse() {
                $(this).dialog('close');
            }

            $('.verse').dialog({
                dialogClass: "verse_dialog",
                buttons: {
                    "Yes": process_verse,
                    "No": cancel_verse
                }
            });
        }
    },
    /** Subscriptions **/
    /**
		 * Formating and fixes to be done after a quote(s) is rendered
		 * @param {obj} elem to be fixed. It can be a jquery array or a singe element
		 */
    "rendered subscribe": function(elem) {
        var that;
        that = this;
        if ($(elem).hasClass('deleted_quote') || $(elem).hasClass('edit_quote'))  { return; }
        reformat_verses(elem);
        fix_links(elem);
        fix_spacing(elem);
        make_inline(elem);
        // Hilite terms in this elem
        this.hi_terms($(elem).children('.text'));

        function reformat_verses(elem) {
            $('.text', elem).each(function() {
                var this_html, verses;
                this_html = $(this).html();
                this_html = this_html.replace(/^:(.+?)$/mg, '<dd>$1</dd>');
                // save each verse into a string and push it into verses array
                verses = this_html.match(/(<dd>.+?<\/dd>\n?)+/g);
                if (verses) {
                    $.each(verses, function(i, verse) {
                        var re = new RegExp('(.+?\\n+)' + RegExp.escape(verse), 'g');
                        this_html = this_html.replace(re, function(all, prev) {
                            // if verse is already wrapped avoid double wrapping (this is for quotes where verses are quoted more than once)
                            return prev.indexOf('<dl class="verse_in_q">') > -1 ? all : prev + '<dl class="verse_in_q">\n' + verse + '</dl>\n';
                        });
                    });
                }
                $(this).html(this_html);
            });
        }

        function fix_links(elem) {
            $('.text', elem).each(function() {
                if ($(this).html().indexOf('[[') > -1) {
                    var t;
                    t = $(this).html();
                    t = t.replace(/\[\[(?:Vanisource:)?(.+?)\|(.+?)\]\]/g, '<a class="cited_link" href="http://vanisource.org/wiki/$1"><b>$2</b></a>');
                    $(this).html(t);
                }
            })
        }
        // fix newlines by making them into <p> otherwise they will render badly in wiki
        function fix_spacing(elem) {
            $('.text', elem).each(function() {
                var this_html;
                this_html = $(this).html();
                //this_html = this_html.replace(/^([^>]+?)$/mg, '<p>$1</p>'); // Spacing doesn't look so good, lets change to <p> as wiki does.
                this_html = this_html.replace(/^.+$/mg, wrap_p); // Testing a better way to wrap paragraphs. This one will wrap also p adjacent to verses (verse_in_q)
                function wrap_p(all) {
                    //console.assert(/<\/?d(?:d|l)/g.test(text) || /^$/.test(all));
                    if(/<\/?d(d|l)/.test(all)) {
                        return all;
                    } else {
                        return '<p>'+all+'</p>';
                    }
                }
                $(this).html(this_html);
            });
        }



        // Make first paragraph display: inline if
        // and make all first <p> in each .text element inline too
        function make_inline(elem) {
            var book, inline, t, a, b, c;
            inline = false;
            $(elem).each(function() {
                book = $(this).attr('book');
                if (book !== 'Con' && book !== 'Lec') {
                    inline = true;
                } else {
                    // "Mr. Tombe: hari hari<br".match(/^.+?<br/)[0].match(/^.+?:/)[0].match(/ /g).length
                    inline = true;
                    t = $(this).children('div.text:first').html();
                    if (/^.+?(?:<br|\n|$)/.test(t)) { a = t.match(/^.+?(?:<br|\n|$)/)[0]; }
                    if (a && a.indexOf(':') > -1) b = a.substring(0, a.indexOf(':'));
                    if (b) c = b.split(' '); // use split because match(/\w+/) makes a strange array with unicode chars
                    if (a && b && c && c.length < 4) {
                        inline = false;
                    }
                }

                if (inline) $(this).children('div.text:first').css({
                    display: "inline"
                });
                inline = false;
                // Make first <p> child inline
                $(this).children('div.text').children(':first').each(function() {
                    if($(this).is('p')) { $(this).css('display', 'inline'); }
                });
            });
        }
    },
    // End of rendered subscription
    "compilation.updated subscribe": function(params) {
        var that, id, $quote;
        that = this;
        id = params.id;
        $quote = $('#' + id);
        that.render_quote({
            elem: $quote,
            view: 'view'
        });
        if (!$quote.hasClass('building_quote')) {
            $quote.addClass('q_updated').removeClass('q_new');
            that._transition_hilite($('#' + id), '#DCBFF1', 5);
        }
    },
    "compilation.deleted subscribe": function(params) {
        var that, quote;
        that = this;
        quote = '#' + params.id;
        $(quote).slideUp('slow', function() {
            that.render_quote({
                elem: quote,
                view: 'delete'
            });
            $(this).fadeIn('slow');
        });
    },
    "compilation.quote_inserted subscribe": function(params) {
        var that, quote;
        that = this;
        quote = $('#' + params.id);
        quote.fadeOut('fast', function() {
            that.render_quote({
                elem: quote,
                view: 'view'
            })
            $(this).removeClass('building_quote').fadeIn('medium');
        });
        this._transition_hilite(quote, '#EEF7D9', 5);
    },

    "compilation.new_quote subscribe": function(params) {
        var that = this;
        this.render_quote({
            elem: params.elem,
            id: params.elem.id,
            view: 'view'
        });
        if (!CompileController.loading) {
            $('#' + params.elem.id).parents('.sub_section').children('.quote').tsort({
                attr: "index"
            });
            $.scrollTo('#' + params.elem.id + '.q_new', 'slow', {
                easing: 'easeOutExpo',
                offset: -50,
                onAfter: that.display_verses
            });
        }
    },

    "compilation.section_checked subscribe": function(params) {
        var id, result;
        id = params.id;
        result = params.result;
        if (result === 'bad') {
            $('#' + id).addClass('q_bad_section');
        } else if ($('#' + id).hasClass('q_bad_section')) {
            $('#' + id).removeClass('q_bad_section');
        }
    },

    // Event response to a publish('created', new_quote) from quote model
    "quote.created subscribe": function(quote) {
        Compilation.add_to_db(quote, quote.id, quote.parent, 'q');
    },

    "quote.verse_request subscribe": function(params) {
        this.verse = params.verse;
        this.id = params.id;
        this.quote = params.quote;
        this.render({
            bottom: 'verses',
            action: 'verse'
        });
    },

    "quote.found_reference subscribe": function(quote) {
        quote.text = CompileFormController.temp_quote;
        q = new Quote(quote);
    },
    "changed_link subscribe": function(params) {
        if (window.console) {
            console.info('In QuotesController.changed_link observer');
        }
        var quote = params.elem;
        this.render_quote({
            elem: quote,
            view: 'view'
        });
        Compilation.del_from_db($(quote).attr('id'), 'q');
        q = new Quote(quote);
    }
}); // End of EditQuotesController