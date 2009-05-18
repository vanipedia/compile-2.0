QuotesController = MVC.Controller.extend('quotes',
/* @Static */
{
		currently_editing: false

},
/* @Prototype */
{
		load: function() {
				var that;
				that = this;
				// This should probably go into a MainController
				$(document).keydown(function(e) {
						if(e.keyCode === 27) {
								that.cancel();
						}
				});
		},
		/****** Events ******/
		// Problems handling mouseup and dblclick event confusion
		dblclick: function(params){
				if(window.console) console.log('In dblclick');
				if (params.element.has_class('edit_quote') !== undefined) return;
				params.event.kill();
				if (this.Class.currently_editing) { this.render_quote(this.Class.currently_editing); }
				this.render_quote({elem: params.element, view: 'edit'});
				//$.scrollTo(params.element, 'slow', { easing: 'easeOutExpo', offset: -50 });
		},
		"#Update_quote click": function(params) {
				var quote;
				quote = $(params.element).parents('.quote');
				params.event.kill();
				this._event_resp({elem: quote, action: 'update'});
		},

		"#Cancel_quote click": function(params) {
				var quote;
				quote = $(params.element).parents('.quote');
				params.event.kill();
				this._event_resp({elem: quote, action: 'cancel'});
		},
		"#prabhupada_icon click": function(params) {
				var edit_quote_text;
				params.event.kill();
				edit_quote_text = $(params.element).parents('.quote').children('#text')[0];
				// if no selection has been made to insert the speaker
				if(edit_quote_text.value.length === edit_quote_text.selectionStart) {
						this.publish('warning', { msg: 'You must place the cursor in the text where Prabhupāda is the speaker' });
						return;
				}
				this.insert_prabhupada_speaker(edit_quote_text);
		},
		".undo_quote click": function(params) {
				if (params.element.has_class('edit_quote') !== undefined) return;
				var quote;
				params.event.kill();
				quote = $(params.element).parents('div.quote');
				this.undo(quote);
		},
		".del_quote click":function(params) {
				var quote;
				params.event.kill();
				quote = $(params.element).parents('div.quote');
				this.delete_quote(quote);
		},
		".deleted_quote_msg.undo_del_quote click": function(params) {
				var quote;
				params.event.kill();
				quote = params.element.parentNode;
				this.undo(quote);
		},
		".text mouseup": function(params) {
				if(window.getSelection().toString() === '') { return; }
				//if(window.console) console.log('In mouseup');
				if (params.element.has_class('edit_quote') !== undefined) return;
				params.event.kill();
				var elem;
				elem = params.element;
				this.check_selection(elem);
		},
		".tips click": function(params) {
				var elem;
				elem = params.element;
				params.event.kill();
				this.tips_handler(elem);
		},
		".alert_tip_heading_or_verse click": function(params) {
				var quote;
				params.event.kill();
				quote = $(params.element).parents('div.quote');
				params.element.id === 'heading_select' ? this.tip_alert({elem: quote, type: 'heading'}) : this.process_verse($(quote).attr('id'));

		},
		".alert_tip_heading_set click": function(params) {
				var id, quote;
				params.event.kill();
				id = params.element.id;
				quote = $(params.element).parents('div.quote');
				if(id === 'heading_new') {
						Compilation.update_heading({id: quote.attr('id'), heading: ' ', action: 'new'});
				}
				if(id === 'heading_edit') {
						// if other quote is in edit mode, render it to view mode
						if (this.Class.currently_editing) this.render_quote(this.Class.currently_editing);
						// if no existing heading.. update the quote with a blank heading, which will automagically render in edit mode
						if(quote.children('.heading').length === 0) {
								Compilation.update_heading({id: quote.attr('id'), heading: ' ', action: 'new'});
						} else {
								// render in edit mode
								this.render_quote({elem: quote, view: 'edit'});
						}
				}
				if(id === 'heading_create') this.tip_alert({elem: quote, type: 'heading'});
				if(id === 'heading_set' || id === 'heading_append') this._do_heading(quote, id);

		},

		// Event handler for sections in the q_menu
		"#alert_tip input click": function(params) {
				var selected_section, elem;
				params.event.kill();
				elem = params.element
				selected_section = elem.value;
				if(window.console) console.log(elem+' with '+selected_section);
				this._do_section(elem, selected_section)
		},

		/****** Event responders ********/
		/**
		 * @param elem {object} The quote object to be rendered
		 * @param id {string} The quote id/name
		 * @param action {string} Rendering mode: view, edit, delete
		 **/
		render_quote: function(params){
				//if(window.console) console.log('in render_quote');
				var id, elem, action;
				elem = params['elem'];
				// check for id in elem depending whether is an custom object or a dom object
				elem.id ? id = elem.id : id = $(elem).attr('id');
				if($('#'+id).length !== 1) this._append_quote(elem);
				if(params['view'] === 'view') {
						action = 'quote';
						this.Class.currently_editing = false;
						$('#'+id).removeClass('edit_quote');
						if (elem.type === 'new') $('#'+id).addClass('q_new building_quote');
				} else if (params['view'] === 'edit') {
						action = 'quote_edit';
						this.Class.currently_editing = { elem: elem, view: 'view' };
						$('#'+id).addClass('edit_quote');
						$(document).unbind('click');
				} else if (params['view'] === 'delete') {
						action = 'delete';
						$('#'+id).addClass('deleted_quote');
				}
				action === 'delete' ?
						this.deleted 	= Compilation.db.find(id, 'd'):
						this.quote 		= Compilation.db.find(id, 'q');

				// Change render action if quote is missing trans or purport text
				if(action === 'quote' && this.quote.section === 'Translation and Purport' && (this.quote.trans === ' ' || this.quote.purport === ' ') ) {
						this.render_quote({elem: elem, view: 'edit' });
						return;
				}
				// Change render action if quote has a blank heading (not false)
				if(action === 'quote' && this.quote.heading === ' ') {
						this.render_quote({elem: elem, view: 'edit' });
						return;
				}
				this.render({
					to: id,
					action: action
				});

				// Some CSS and behavior ------ Where should this go?
				$('#'+id+'.edit_quote').children('#heading, #trans, #purport, #text').autogrow();
				$('#'+id+'.edit_quote').children('.ui-state-default').hover(
						function() { $(this).addClass('ui-state-hover'); },
						function() { $(this).removeClass('ui-state-hover');
				});

				function tips_mouseenter() {
				// Test for tips desc on mouseover
						$(this).next('div').slideDown('fast');
				}
				function tips_mouseleave() {
						$(this).next('div').slideUp('slow');
				}
				var hover_options = {
						sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
						interval: 300, // number = milliseconds for onMouseOver polling interval
						over: tips_mouseenter, // function = onMouseOver callback (REQUIRED)
						timeout: 500, // number = milliseconds delay before onMouseOut
						out: tips_mouseleave // function = onMouseOut callback (REQUIRED)
				};
				// Replacement for hover with a delay
                $('#'+id+' .tips').hoverIntent(hover_options)
                // Make tips for this quote red in case they are required to be set
				$('#'+id+' .tips[id^="set_"]').not('#set_heading_tip').toggleClass('ui-state-error');

				this.publish('rendered', $('#'+id).not('.edit_quote'));

		},// End of render_quote
		/**
		 * Edit the quote
		 * @param {object} quote DOM object to edit
		 */
		edit_quote: function(quote) {
				if (this.Class.currently_editing) { this.render_quote(this.Class.currently_editing); }
				this.render_quote({elem: quote, view: 'edit'});
				$.scrollTo(quote, 'slow', { easing: 'easeOutExpo', offset: -50 });
		},
		/**
		 * Event responder for cancel and edit quote
		 * @param {dom} params.elem where event originates
		 * @param {string} params.action cancel or update
		 */
		_event_resp: function(params) {
				var $quote, id, that;
				that 		= this;
				$quote 	= $(params.elem);
				id 			= $quote.attr('id');
				action 	= params.action;
				if($quote.children('#trans, #purport').length === 2 && action === 'cancel') {
						// Make update on a quote with Translation and Purport where either one might be empty, e.g.: after choosing a Trans-Purport section when only one has text
						if( /^\s+$/.test($quote.children('#trans').val()) || /^\s+$/.test($quote.children('#purport').val())) action = 'update';
				}
				if($quote.children('#heading').length === 1 && action === 'cancel') {
						if(/^\s+$/.test($quote.children('#heading').val())) action = 'update';
				}
				if (action === 'update') {
						this.update($quote);
				} else {
						$quote.fadeOut("fast");
						this.render_quote({elem: $quote, view: 'view'});
						$quote.fadeIn("slow");
						if(!$quote.hasClass('building_quote')) this._transition_hilite($quote, '#FFFEC6', 2);
				}
		},

		/**
		 * Checks highlighted text in a quote to build a Heading
		 * @param {string} text_elem Dom element where event (highlight) ocurred. It can be passed as params.element or $(text_elem)
		 */
		check_selection: function(text_elem) {
				if($('#alert_tip').is(':visible')) return;
				var that, heading_selection, quote, tip_elem;
				that = this;
				heading_selection = $.trim(window.getSelection().toString());
				if (heading_selection === '' ) {
						if($('#alert_tip').is(':visible')) this.cancel_tip(quote);
						return;
				}
				quote = $(text_elem).parents('div.quote');
				//this.tip_alert({elem: quote, type: 'heading'});
				this.tip_alert({elem: quote, type: 'heading_or_verse'});
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
						that.render_quote({elem: quote, view: 'view'});
						$(this).removeClass('deleted_quote q_`').show('slow');
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
				if(selection === '') {
						this.publish('warning', { msg: 'You did not select any text for setting the heading'});
						return;
				}
				action = resp.replace('heading_', '');
				Compilation.update_heading({id: id, heading: selection, action: action});
		},
		/**
		 * Process_verse gets the selected text and submits it to to Quote.verse_request to process data as a verse_in_quote
		 * @param {dom_element} quote element where selection ocurred.
		 */
		process_verse: function(quote) {
				var verse;
				verse = $.trim(window.getSelection().toString()).split('\n');
				Quote.request_verse(quote, verse);
				this.display_verses();
		},
		/**
		 * Set section for quote according to choice in the quote menu
		 * @param {string} elem Dom element whose section will be modified
		 */
		_do_section: function(elem, new_section) {
				var quote, id, text;
				quote = $(elem).parents('div.quote')
				id 		= quote.attr('id');
				Compilation.update_q_section(id, {section: new_section});
		},
		/**
		 * Tips handler receives event from clicking on a tip
		 * @param {string} tips_elem dom element that was clicked in the q_menu
		 */
		tips_handler: function(tips_elem) {
				var that, quote;
				that = this;
				quote = $(tips_elem).parents('div.quote'); 		// Find the quote the tip that triggered the event belongs to
				if(/section/.test(tips_elem.id) )	this.tip_alert({elem: quote, type: 'section'});
				if(tips_elem.id === 'set_insert_tip') this.insert_new_quote(quote);
				if(tips_elem.id === 'edit_quote_tip') this.edit_quote(quote);
				if(tips_elem.id === 'edit_heading_tip' || tips_elem.id === 'set_heading_tip') this.tip_alert({elem: quote, type: 'edit_heading'});
		},

		tip_alert: function(params) {
				var that, tip_elem;
				that = this;
				tip_elem = this._find_alert_tip_elem(params.elem);
				if(!tip_elem) return;
				if(params.type === 'heading') this.message = $.trim(window.getSelection().toString()) === '' ? 'Highlight text for the heading and choose' : 'Heading:';
				if(params.type === 'edit_heading') this.message = 'Heading:';
				this.render({
					to: tip_elem,
					action: params.type
				})
				// Hide tips and show alert_tip
				if($(tip_elem).is(':hidden') ) {
						$(tip_elem).siblings('.tips').slideUp('fast');
						$(tip_elem).slideDown('fast');//effect('highlight', {color: "#E14F1C"});
				}
				$(document).click(function() {
						if(window.getSelection().toString() === '') that.cancel_tip(params.elem);
				});

		},
		/**
		 * Cancel tip in given elem
		 * @param {object} elem dom object whose tip will be canceled
		 */
		cancel_tip: function(elem) {
				if( !elem ) {
					if(window.console) console.log('Error in QuoteController.cancel_tip: missing elem argument');
				}
				if($(elem).hasClass('edit_quote') || $(elem).parents('.edit_quote').length) return; 		// If we are in edit_quote form, exit!
				var tip_elem;
				$(document).unbind('click');
				tip_elem = this._find_alert_tip_elem(elem);
				//if(!tip_elem) return;
				if($(tip_elem).is(':visible')) {
						// Always hide first
						$(tip_elem).slideUp('slow');
						if($(tip_elem).siblings('.tips')) $(tip_elem).siblings('.tips').slideDown('slow'); // Test for siblings before trying to hide them. (Problems with dblclick event)
				}
		},

		insert_new_quote: function(quote) {
				Compilation.insert_new_quote($(quote).attr('id'), {type: 'quote'}, 'q');
		},

		/**
		 * Will find the dom element (#alert_tip) whose quote triggered the event
		 * @param {object} elem dom element that triggered the event
		 */
		_find_alert_tip_elem: function(elem) {
				var p, tip;
				// Find .quote parent
				if($(elem).hasClass('quote')) {
						p = elem;
				} else {
						p = $(elem).parents('div.quote');
				}
				// return tip_element
				tip = $('#alert_tip', p).get(0);
				return tip;
		},
		/**
		 * Bind to the escape key and execute callback
		 * @param {function} callback Callback function to be executed on Esc keypress
		 */
		bind_escape: function(callback) {
				$(document).keydown(function(e) {
						if(e.keyCode === 27) {
								callback();
								$(this).unbind('keydown');
						}
				});
		},
		// Add the container for the just 'created' quote
		_append_quote: function(quote) {
				this.quote = quote;
				this.render({
						bottom: this.quote.parent,
						action: 'new_quote'
				});
		},
		hi_terms: function(elem) {
				var terms;
				terms = Facts.db.terms;
				if(!terms) { if(window.console) console.log('No terminologies to highlight in hi_terms!'); return; }
				$.each(terms, function(i, term) {
						if(term === '') return true;
						$(elem).highlight_sanskrit(term);
				});
		},
		// Event response to a cancel submited by CompileController
		cancel: function() {
				var that;
				that = this;
				if( $('.edit_quote').length ) {
						$('.edit_quote #Cancel_quote').click();
				}
				if( $('#alert_tip').is(':visible')) {
						$('#alert_tip:visible').each(function() {
								that.cancel_tip($(this).parents('.quote'));
						});
				}
		},
		update: function(quote) {
				var id, attr;
				id = $(quote).attr('id');
				// Current values when Update button is clicked
				attr = {};
				$.each(['heading', 'trans', 'purport'], function(i, field) {
						attr[field] = get_values(field);
				});
				function get_values(field) {
						if($(quote).children('#'+field).length) {
								var val = $.trim($(quote).children('#'+field).val());
								return val !== '' ? val : false;
						} else {
								return false;
						}
				}
				if ($(quote).children('#text').length) { attr['text'] = $(quote).children('#text').val(); }
				Compilation.update_db(id, attr, 'q');
				//Quote.update_section(Compilation.find_in_db(id, 'q'));
				return;
		},
		/**
		 * Insert Prabhupāda: as the speaker when button click in edit_quote
		 * @param {object} quote_textarea is a reference to the textarea of the quote
	 */
		insert_prabhupada_speaker: function(quote_textarea) {
				if (quote_textarea.selectionStart || quote_textarea.selectionStart == '0') {
						var startPos = quote_textarea.selectionStart;
						var endPos = quote_textarea.selectionEnd;
						quote_textarea.value = quote_textarea.value.substring(0, startPos)
						+ 'Prabhupāda: '
						+ quote_textarea.value.substring(endPos, quote_textarea.value.length);
				}
		},
		_transition_hilite: function(elem, color, time) {
				var w, q, diff, off;
				$(elem).css('background-color', color);
				setTimeout(function() {
								$(elem).css('background-color', '');
						}, time+'000');
				// Scrolling calculations
				w = window.innerHeight;
				q = $(elem).height();
				diff = w - q;
				off = diff <= 0 ? -50 : -diff/2;
				//if(window.console) console.log('Tesing offset: w is '+w+' q is '+q+' diff is '+diff+' and off is '+off);
				$.scrollTo($(elem), 'fast', { easing: 'easeOutElastic', offset: off });
		},
		// Display dialog(s) for verse in quote
		display_verses: function() {
				var that = this;
				if($('.verse').length) {

						function process_verse() {
								Compilation.process_verse({quote: $(this).attr('quote'), verse: $(this).attr('verse'), resp: true });
								$(this).dialog('close');
						}
						function cancel_verse() {
								$(this).dialog('close');
						}

						$('.verse').dialog({
								dialogClass: "verse_dialog",
								buttons: {
										"Yes": 	process_verse,
										"No": 	cancel_verse
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
				if($(elem).hasClass('deleted_quote')) return;
				reformat_verses(elem);
				make_inline(elem);
				fix_links(elem);
				fix_spacing(elem);
				// Hilite terms in this elem
				this.hi_terms($(elem).children('.text'));

				// fix newlines by making them into <p> otherwise they will render badly in wiki
				function fix_spacing(elem) {
						$('.text', elem).each(function() {
								var this_html;
								this_html = $(this).html();
								//this_html = JsAutoP(this_html);
								this_html = this_html.replace(/([^>])\n+([^<])/g, '$1<br />$2');
								$(this).html(this_html);
						});
				}

				// Reformat cited verses (vers_in_quote)
				function reformat_verses(elem) {
						$('.text', elem).each(function() {
								var this_html, verses;
								this_html = $(this).html();
								this_html = this_html.replace(/^:(.+?)$/mg, '<dd>$1 </dd>');
								// save each verse into a string and push it into verses array
								verses = this_html.match(/(<dd>.+?<\/dd>\n)+/g);
								if(verses) {
										$.each(verses, function(i, verse) {
												this_html = this_html.replace(verse, '<dl class="verse_in_q">\n'+verse+'</dl>');
										});
								}
								$(this).html(this_html);
						});
				}

				// Make first paragraph display: inline if
				function make_inline(elem) {
						var book, inline, t, a, b, c;
						inline = false;
						$(elem).each(function() {
								book = $(this).attr('book');
								if(book !== 'Con' && book !== 'Lec') {
										inline = true;
								} else {
										// "Mr. Tombe: hari hari<br".match(/^.+?<br/)[0].match(/^.+?:/)[0].match(/ /g).length
										inline = true;
										t = $(this).children('div.text:first').html();
										if(/^.+?(?:<br|\n|$)/.test(t)) a = t.match(/^.+?(?:<br|\n|$)/)[0];
										if(a && a.indexOf(':') > -1) b = a.substring(0, a.indexOf(':'));
										if(b) c = b.split(' '); // use split because match(/\w+/) makes a strange array with unicode chars
										if( a && b && c && c.length < 4) {
												inline = false;
										}
								}

								if (inline) $(this).children('div.text:first').css({ display: "inline" });
								inline = false;
						});
				}
				function fix_links(elem) {
						$('.text', elem).each(function() {
								if($(this).html().indexOf('[[') > -1) {
										var t;
										t = $(this).html();
										t = t.replace(/\[\[(?:Vanisource:)?.+?\|(.+?)\]\]/g, '<a class="cited_link" href="http://vanisource.org/wiki/$1"><b>$1</b></a>');
										$(this).html(t);
								}
						})
				}
		},// End of rendered subscription
		"compilation.updated subscribe": function(params) {
				var that, id, $quote;
				that = this;
				id = params.id;
				$quote = $('#'+id);
				that.render_quote({elem: $quote, view: 'view'});
				if(! $quote.hasClass('building_quote') ) {
						$quote.addClass('q_updated').removeClass('q_new');
						that._transition_hilite($('#'+id), '#DCBFF1', 5);
				}
		},
		"compilation.deleted subscribe": function(params) {
				var that, quote;
				that = this;
				quote = '#'+params.id;
				$(quote).slideUp('slow', function() {
						that.render_quote({elem: quote, view: 'delete' });
						$(this).removeClass('q_new building_quote').fadeIn('slow');
				});
		},
		"compilation.quote_inserted subscribe": function(params) {
				var that, quote;
				that = this;
				quote = $('#'+params.id);
				quote.fadeOut('fast', function() {
						that.render_quote({elem: quote, view: 'view'})
						$(this).removeClass('building_quote').fadeIn('medium');
				});
				this._transition_hilite(quote, '#EEF7D9', 5);
		},

		"compilation.new_quote subscribe": function(params) {
				var that = this;
				this.render_quote({elem: params.elem, id: params.elem.id, view: 'view'});
				$('#'+params.elem.id).parents('.sub_section').children('.quote').tsort({ attr: "index" });
				$.scrollTo('#'+params.elem.id+'.q_new', 'slow', { easing: 'easeOutExpo', offset: -50, onAfter: that.display_verses});
		},

		"compilation.section_checked subscribe": function(params) {
				var id, result;
				id 			= params.id;
				result 	= params.result;
				if(result === 'bad') {
						$('#'+id).addClass('q_bad_section');
				} else if($('#'+id).hasClass('q_bad_section') ) {
						$('#'+id).removeClass('q_bad_section');
				}
		},

		// Event response to a publish('created', new_quote) from quote model
		"quote.created subscribe": function(quote) {
			Compilation.add_to_db(quote, quote.id, quote.parent, 'q');
		},

		"quote.verse_request subscribe": function(params) {
				this.verse 	= params.verse;
				this.id			= params.id;
				this.quote	= params.quote;
				this.render({
						bottom: 'verses',
						action: 'verse'
				});
		},

		"quote.found_reference subscribe": function(quote) {
				quote.text = CompileFormController.temp_quote;
				q = new Quote(quote);
		}
}); // End of EditQuotesController
