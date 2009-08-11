/*
 * 	CompileController will retreive the data and transform it into two different views:
 * 		1. A view for view the quotes in the current Vaniquote page
 * 		2. A view for editing a quote when clicked on
 *
 */

CompileController = MVC.Controller.extend('compilation',
/* @Static */
{
		loading: false,

    compile_tools_menu_hover_options: {
        sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
        interval: 300, // number = milliseconds for onMouseOver polling interval
        over: function() {
            CompileController.show_tools_menu();
        }, // function = onMouseOver callback (REQUIRED)
        timeout: 500, // number = milliseconds delay before onMouseOut
        out: function() {
            CompileController.hide_tools_menu();
        } // function = onMouseOut callback (REQUIRED)
    },
    // define hiding and show functions for compile_tools_menu
    hide_tools_menu: function() {
        $('#compile_tools_menu').animate({
            right: "-72px"
        }, 'slow');
    },
    show_tools_menu: function() {
        $('#compile_tools_menu').animate({
            right: "0px"
        }, 'fast');
    },
				autocomplete: function(elem, fixed) {
								// autocomplete for suggest box on quote or link not found
								// jQuery.autocomplete was customized in order to display properly
								// in our fixed compile_tools box
								$(elem).autocomplete("/php/get_vanisource_title.php", {
												extraParams: { type: 'title', suggest: true, minChars: 2},
												resultsClass: 'suggest_results',
												fixed: fixed
								});
				}
},
/* @Prototype */
{
    /**
	 * onLoad handler to retrieve the data from the current Vaniquotes page
	 * It will only retrieve if the page is in edit mode (wiki wgAction == 'edit' global)
	 */
    load: function(params) {
        this._loading('init');
        var data;
        data = $('#wpTextbox1').val();
        // Check this page for existing compilation tags
        if(data !== '' && data.indexOf('<div id="compilation">') === -1) {
            if(window.console) { console.log('No compilation found in this page!' ); }
            this._loading('end_gracefully');
            return;
        }
        if(data === '') {
            this.new_compilation_message();
            data = '<div id="compilation"></div>';
        }
        // Insert the compilation element that will hold the compilation once rendered
        this.render({
            after: 'wikiPreview',
            action: 'compilation'
        });

        // Start building the compilation
        Facts.build(data);
        Compilation.build(data);
    },
    "#compile_tools_hide click": function(params) {
        this.hide_compile_tools();
    },
    "#transparent_background click": function() {
        this.hide_compile_tools();
    },
    "#compile_tools_toggle click": function(params) {
        // calculate pos in page for callback to scroll page back to its current location
        var pos = params.event.pageY - 50;
        this.toggle_compile_tools(pos);
    //if(window.console) { console.log(pos); }
    },
    "#compile_tools_save click": function(params) {
								params.event.kill();
        this.save();
    },
    "#compile_form .ui-state-default mouseover": function(params) {
        $(params.element).addClass('ui-state-hover');
    },
    "#compile_form .ui-state-default mouseout": function(params) {
        $(params.element).removeClass('ui-state-hover');
    },
    // Loading message while building compilation
    _loading: function(now) {
        var that = this;
				this.Class.loading = true;
        if (now === 'init') {
            $('#editform, #toolbar').hide();
						$('#mw-edit-longpagewarning').hide();
            this.loading = {};
            this.loading.message = 'Loading compiling data...';
            this.render({
                top: 'bodyContent',
                action: 'loading'
            });
            // fix logo z-index for overlays in compile tools
            $('#p-logo').css('z-index', 1);
        }

        if (now === 'end_gracefully') {
            if(window.console) { console.info('In CompilationController._loading ending gracefully...'); }
            $('#loading').fadeOut('slow');
            $('#editform, #toolbar').show();
        }

        if (now === 'end') {
            $(document).ready(function() {
                // Attach jQuery bindings to elements
                that.attach_events();

								$('#loading').fadeOut('slow', function() {
                    $('#compilation').fadeIn('slow').removeClass('hidden');
                });
            });
						setTimeout(function() {
								that.publish('warning', { msg: "Your session will time out soon, please save your work soon to avoid a wiki session timeout." });
						}, 900000);
						this.Class.loading = false;
        }
        return;
    },
    // jQuery bindings/effects/widgets
    attach_events: function() {
        var that;
        that = this;
        // jQuery Event attachments
        $('#compile_tools').tabs().draggable();
        $('#compile_tools_menu').hoverIntent(that.Class.compile_tools_menu_hover_options);
        // SetTimeout to hide the tools_menu
        setTimeout( that.Class.hide_tools_menu, 5000);

        $('#compile_tools_menu p').bind('mouseenter', function() {
            $(this).addClass('ui-state-hover');
        }).bind('mouseleave', function() {
            $(this).removeClass('ui-state-hover');
        });
				return;
    },
    // Function to render sections
    _render_section: function(section) {
        var parent;
        this.section = section;
        parent = this.section.parent;
        if(window.console) { console.assert(parent); }
        // Render parent first if not already in dom
        if(parent !== 'compilation' && $('#'+parent).length !== 1) {
            this._render_section(Compilation.find_in_db(parent, 's'));
        }
								if(window.console) { console.info('CompileController#_render_section: rendering '+this.section.id+' to '+parent); }
        this.render({
            bottom: parent,
            action: 'sections'
        });
        // sort this section and its siblings by submitting parent to sort_section
        this.sort_section(parent);
    },

    /**
	 * clean_up function calls _sort_sections and remove_empty_sec (sections without children - quotes).
	 * This method should be called after all sections and quotes have been rendered
	 */
    clean_up: function() {
        this._sort_sections();
        this._remove_empty_secs();
								this._sort_quotes();
    },
    // Sort an individual section's children
    sort_section: function(section) {
        if($('#'+section).children().length > 1) {
            $('#'+section).children('.section, .sub_section').tsort({
                attr: "sec_index"
            });
        }
    },
    // Sort sections according to their index
    _sort_sections: function() {
        var main_sec = $('.section');
        var sub_sec  = $('.sub_section');
        $(main_sec).tsort({
            attr: "sec_index"
        });
        $(sub_sec).tsort({
            attr: "sec_index"
        });
    },
    // Remove empty sections that might have been rendered but dont have any children
    _remove_empty_secs: function() {
        var secs, id;
        secs = [];
        // Loop through subsection first and then sections
								find_and_remove($('.sub_section'));
								find_and_remove($('.section'));

								function find_and_remove(elem) {
												$(elem).each(function() {
																id = $(this).attr('id');
																// remove duplicate sections
																$.inArray(id, secs) > -1 ? remove(this) : secs.push(id);
																// if this sub_section has no quotes => remove it
																if ( $(this).children('div').length === 0 ) {
																				remove(this);
																}
												});
								}
								function remove(elem) {
												if(window.console) { console.info('CompilationController#_remove_empty_secs: removing duplicate or empty section: '+$(elem).attr('id')); }
												$(elem).remove();
												Compilation.del_from_db($(elem).attr('id'), 's');
								}
    },
		// Sort quotes within their (sub_)section
    _sort_quotes: function() {
        $('.quote').tsort({ attr: "index" });
    },
    toggle_compile_tools: function(pos) {
        $('#compile_tools').is(':hidden') ? this.show_compile_tools(pos) : this.hide_compile_tools(pos);
    },
    show_compile_tools: function(pos) {
        var that;
        that = this;
        $('#compile_tools').css('opacity', 1).fadeIn('fast', function() {
            if(pos) window.scrollTo(0, pos);
        });
        $('#compile_tools_toggle #compile_tools_toggle_text').text('Hide Tools');
        $('#transparent_background').show();

    },

    hide_compile_tools: function() {
        var that;
        that = this;
        // Make transparent background dissapear. This bg is used to enable click on anywhere but inside compie_tools element to hide it.
        $('#transparent_background').hide();

        // Blind first => transfer effect => hide
        $('#compile_tools').css('opacity', 0);
        $('#compile_tools').effect('transfer', {
            to: "#compile_tools_toggle",
            className: 'compile_tools_transfer'
        }, "medium");
        $('#compile_tools').hide('fast');

        $('#compile_tools_toggle > #compile_tools_toggle_text').text('Show Tools');
        setTimeout( that.Class.hide_tools_menu, 5000);
    },

    /**
   * Save compilation data will dump all the quotes, sections and facts compiled to the original wiki editbox.
   */
    save: function() {
        var facts, sections, subs, quotes, new_compilation, final_html;
        // Checks before saving
								// check if a new quote has not been inserted yet
        if($('.building_quote').length) {
            this.publish('warning', {
                msg: 'You must insert all quotes before saving!'
            });
            $.scrollTo('.building_quote', 'fast');
            return;
        }
								if($('.bad_link').length) {
												 this.publish('warning', {
                msg: 'You must fix bad links in page before saving!'
            });
            $.scrollTo('.bad_link', 'fast', { offset: -50 });
            return;
								}
        if(QuotesController.currently_editing) $(".edit_quote #Cancel_quote").click();

        new_compilation = $('<div id="compilation"></div>');

        facts   = Facts.save();
        $('<div id="facts">'+facts+'</div>').appendTo(new_compilation);

        // Process quotes
        quotes = $('.quote').not('.deleted_quote').clone();
        quotes.each(function() {
            var q, p, l, lt, inline;
            q = $(this);
            p = q.attr('parent');
            l = q.attr('link').replace(/_/g, ' ');
            lt = $('.link a', q).text();
            $('.q_menu', q).empty().remove();
            $('.link', q).html("[[Vanisource:"+l+"|"+lt+"]]: ");
            $('.cited_link', q).each(function() {
                $(this).replaceWith('[[Vanisource:'+$(this).text()+'|'+$(this).text()+']]');
            });
            $('.verse_in_q', q).each(function() {
                $(this).text($(this).text().replace(/^([^\n])/mg, ':$1')).replaceWith($(this).html());
            });
            $('.highlight_terms', q).each(function() {
                $(this).replaceWith($(this).text());
            })
            q.removeClass('ui-corner-all q_new q_updated');
            if(/inline/.test(q.attr('style'))) inline = true;
            q.removeAttr('style');
            if(inline) q.css('display', 'inline');
        });
        quotes.appendTo(new_compilation);

        // Process sections
        sections = $('.section').clone();
        subs = $('.sub_section').clone();
        subs.each(insert_section);
        sections.each(insert_section);

        function insert_section() {
            var s, l, h, id, text;
            s = $(this);
												l = s.hasClass('section') ? 2 : 3;
            h = 'h'+l;
            text = s.attr('text');
            id = text.replace(/ /g, '_');
            s.empty();
            $('<'+h+'>'+text+'</'+h+'></div>').appendTo(s);
            // Insert section before the first div with attr[parent] === this.id
            $('div[parent="'+id+'"]:first', new_compilation).before(s);
        }

        // Append all to new_compilation
        final_html = new_compilation.wrap('<div></div>').parent('div').html().replace(/^\s+/mg, '').replace(/<\/span>\n/g, '</span>').replace(/(<div[^>]+?class="(?:quote|section|sub_section)")/g, '\n$1');
        $('#wpTextbox1').val(final_html);
        if(window.console) {
            console.log(facts);
            console.log(quotes);
            console.log(new_compilation);
        }
        // Save!
        $('#wpSave').click();
    }, // End of save

    new_compilation_message: function() {
        $('.mw-newarticletext').replaceWith('<div id="new_compilation_message"></div>');
        this.text = "Welcome to a new Vaniquotes compiling page. Use the Compiling tools box to make new quotes and edit this page's facts";
        this.render({
            to: 'new_compilation_message',
            action: 'new_compilation_message'
        });
    },
    info: function(msg) {
        this.info = msg;
        this.render({
            to: 'info',
            action: 'info'
        });
        $('#info:hidden, #darken:hidden').fadeIn();
        $(window).click(function() {
            $('#info, #darken').fadeOut();
            $(this).unbind('click');
        });
    },
    /**
   * Warning dialog
   * @param {string} msg Message to be displayed
   */
    warning: function(msg) {
        this.warning = msg;
        this.render({
            to: 'warning',
            action: 'warning'
        });
        $('#warning:hidden, #darken:hidden').fadeIn();
        $(window).click(function() {
            $('#warning, #darken').fadeOut();
            $(this).unbind('click');
        });
    },
    /***** Subscriptions ******/
    "compilation.built subscribe": function() {
        this.clean_up(); // Clean sections for extra sections and unordered
        this._loading('end');

    },
    "quote.found_reference subscribe": function(params) {
        //if($('#compile_form input#link').is(':visible')) $('#compile_form input#link, #compile_form #ref').val('').hide();
        if($('#compile_form #ref_lookup').is(':visible')) {
            $('#compile_form #ref_lookup').each(function() {
                $(this).hide();
                $('#ref', this).html('');
                $('#ref_lookup_input > #link', this).val('');
            });
        }
        if($('#compile_tools').is(':visible')) this.hide_compile_tools();
    },
    "compilation.quote_inserted subscribe": function(params) {
        this.show_compile_tools();
    },

    // Event response to a publish('created', new_section) from section model
    "section.created subscribe": function(section) {
        Compilation.add_to_db(section, section.id, section.parent, 's');
        this._render_section(section);
    },
    "hide_compile_tools subscribe": function() {
        this.hide_compile_tools();
    },
    "info subscribe": function(params) {
        if(window.console) { console.info('Info: '+params.msg); }
        this.info(params.msg);
    },

    "warning subscribe": function(params) {
        if(window.console) { console.log('Warning: '+params.msg); }
        this.warning(params.msg);
    },
    "quote.warning subscribe": function(params) {
        if(window.console) { console.log('Warning: '+params.msg); }
        this.warning(params.msg);
    },
    "facts.warning subscribe": function(params) {
        if(window.console) { console.log('Warning: '+params.msg); }
        this.warning(params.msg);
    },
    "compilation.warning subscribe": function(params) {
        if(window.console) { console.log('Warning: '+params.msg); }
        this.warning(params.msg);
    }
}); // End of CompileController
