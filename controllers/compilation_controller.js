/*
 * 	CompileController will retreive the data and transform it into two different views:
 * 		1. A view for view the quotes in the current Vaniquote page
 * 		2. A view for editing a quote when clicked on
 *
 */

CompileController = MVC.Controller.extend('compilation',
/* @Static */
{
    progress_val: 0,

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
        var that, data;
        that = this;
        that.update_progressbar(10);
        data = $('#wpTextbox1').val();
        // Check this page for existing compilation tags
        if(data !== '' && data.indexOf('<div id="compilation">') === -1) {
            if(window.console) { console.log('No compilation found in this page!' ); }
            this._loading('end_gracefully');
            return;
        }
        that.update_progressbar(10);
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
        that.update_progressbar(10);
        Facts.build(data);
        that.update_progressbar(10);
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
            $('<div id="background_overlay"></div>').appendTo('body');
            $('<div id="progressbar"></div><').appendTo('body')
            that.publish('progressbar', { text: 'Loading Compilation...'});
            $('#editform, #toolbar').hide();
            $('#mw-edit-longpagewarning').hide();
            this.loading = {};
            $('#p-cactions').children().each(function() {
                $('li#ca-edit', this).removeClass('selected');
                $('li#ca-compile', this).addClass('selected');
            });
        }

        if (now === 'end_gracefully') {
            if(window.console) { console.info('In CompilationController._loading ending gracefully...'); }
            that.update_progressbar(20);
            this.publish('progressbar_hide');
            $('#editform, #toolbar').show();
        }

        if (now === 'end') {
            $(document).ready(function() {
                // Attach jQuery bindings to elements
                that.attach_events();
                that.publish('progressbar_hide');
                $('#compilation').fadeIn('slow').removeClass('hidden');
                that.show_compile_tools();
            });
            //setTimeout(function() {
              //that.publish('warning', { msg: "Your session will time out soon, please save your work soon to avoid a wiki session timeout." });
            //}, 900000);
            this.Class.loading = false;
        }
        return;
    },
    // jQuery bindings/effects/widgets
    attach_events: function() {
        var that;
        that = this;
        // jQuery Event attachments
        $('#compile_tools').tabs().draggable({ handle: '> ul' });
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
        this.fix_z_indexes(true);
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
        this.fix_z_indexes(false);
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
    fix_z_indexes: function(fix) {
        // fix logo z-index for overlays in compile tools when passed true it will set it to 1 when false is reset to original
        $('#p-logo, #p-cactions').css('z-index', fix ? 1 : '');
    },

    relogin: function() {
        var that, actionURL;
        that = this;
        this.user = wgUserName;
        this.render({
            to: 'login_form',
            action: 'login_form'
        });
        if(window.console) { console.info(wgUserName+' needs to relogin'); }
        login();

        function submit_login(credentials) {
            actionURL = wgServer + wgScriptPath + '/api.php?action=login&format=json&'+credentials;
            $.ajax({
                type : 'POST',
                url : actionURL,
                dataType : 'json',
                //data : dataString,
                success : function( data ) {
                    if(window.console) { console.dir(data); }
                    // if login succeded try to save again
                    that.save();
                },
                error : function( XMLHttpRequest, textStatus, errorThrown ){
                    //TODO : add error handling here
                    if( typeof console != 'undefined' ){
                        console.log( 'Error in AjaxLogin.js!' );
                    }
                    return false;
                }
            });
        }

        function submit() {
            $('#login_form').dialog('close');
            submit_login($('#login_form form').serialize());
        }

        function login() {
            if(!$('#login_form').hasClass('ui-dialog-content')) {
                $('#login_form').dialog({
                    modal: true,
                    title: 'Log-in to save',
                    modal: true,
                    open: function(event, ui) { $('#login_form #lgpassword').focus() },
                    buttons: {
                        "Login": submit
                    }
                }).keydown(function(e) {
                    if (e.keyCode === 13) {
                        submit();
                    }
                });
            } else {
                $('#login_form').dialog('open');
            }
        }
    },

    /**
   * Save compilation data will dump all the quotes, sections and facts compiled to the original wiki editbox.
   */
    save: function() {
        var that;
        that = this;
        that.publish('progressbar', { text: 'Saving...'}); // init progresbar
        // Checks before saving
        that.check_user_loggedin();
    },
    check_internet_connection: function() {
        var that, connected, xmlReq;
        that = this;
        connected = false;
        xmlReq = new XMLHttpRequest();
        xmlReq.onreadystatechange = state_change;
        //xmlReq.onerror = ajax_error;
        xmlReq.open("HEAD", "http://www.google.com", true);
        xmlReq.send(null);
        setTimeout(function() {
            if(xmlReq.readyState == 4 && !connected) { ajax_error(); }
        }, 3000);

        function state_change() {
            if(window.console) {
                console.log(xmlReq.readyState);
                //console.dir(xmlReq);
            }
            if(xmlReq.readyState == 4) {
                if (xmlReq.statusText && xmlReq.statusText != "") {
                    if(window.console) {
                        console.log('Connected');
                        //console.dir(xmlReq);
                    }
                    connected = true;
                    that.publish('progressbar_hide');
                    that.publish('connection_error', { ajax: xmlReq, msg: 'Vaniquotes server is unreachable, please wait a minute and try again.' });
                }
            }
        }
        function ajax_error() {
            that.publish('progressbar_hide');
            that.publish('connection_error', { ajax: xmlReq, msg: 'You appear to be offline! Check your internet connection and try again.' });
        }
    },
    check_user_loggedin: function() {
        var that, resp;
        that = this;
        resp = false;
        // check if user is loggedIn before actual _do_save()
        sajax_do_call("isUserLoggedIn", [], isUserLoggedIn_callback);
        setTimeout(function() {
            if(!resp) {
                if(navigator.platform == 'MacIntel') {
                    that.check_internet_connection();
                } else {
                    that.publish('progressbar_hide');
                    that.publish('connection_error', { ajax: {} , msg: 'Vaniquotes server is unreachable, please wait a minute and try to save again.' });
                }
            }
        }, 3000);

        function isUserLoggedIn_callback(request) {
            resp = true;
            if(request.status != 200) {
                that.publish('connection_error', { ajax: request, msg: 'Vaniquotes server is unreachable, please wait a minute and try to save again.' });
            } else {
                console.log("Success: "+request.responseText);
            }

            if(request.responseText === 'no') {
                that.relogin();
            } else {
                that._check_before_save();
            }
        }
    },
    _check_before_save: function() {
        var that;
        that = this;
        that.update_progressbar();
        // check if a new quote has not been inserted yet
        if($('.building_quote').not('.deleted_quote').length) {
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
        that._do_save();
    },
    _do_save: function() {
        var that, facts, sections, subs, quotes, new_compilation, final_html, upb, progress;
        that = this;
        upb = that.update_progressbar;
        new_compilation = $('<div id="compilation"></div>');
        that.update_progressbar();
        // Process facts
        facts   = Facts.save();
         that.update_progressbar();
        $('<div id="facts">'+facts+'</div>').appendTo(new_compilation);
        that.update_progressbar();
        // Process quotes
        quotes = $('.quote').not('.deleted_quote').clone();
        that.update_progressbar();
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
             that.update_progressbar(1);
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
             that.update_progressbar();
        }

        // Append all to new_compilation
        final_html = new_compilation.wrap('<div></div>').parent('div').html().replace(/^\s+/mg, '').replace(/<\/span>\n/g, '</span>').replace(/(<div[^>]+?class="(?:quote|section|sub_section)")/g, '\n$1');
         that.update_progressbar();
        $('#wpTextbox1').val(final_html);
         that.update_progressbar();
        if(window.console) {
            console.log(facts);
            console.log(quotes);
            console.log(new_compilation);
        }
         that.update_progressbar();
        // Save!
        that.update_progressbar();
        $('#wpSave').click();
    }, // End of _do_save

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
        $('#info:hidden, #background_overlay:hidden').fadeIn();
        $(window).click(function() {
            $('#info, #background_overlay').fadeOut();
            $(this).unbind('click');
        });
    },
    /**
   * Warning dialog
   * @param {string} msg Message to be displayed
   */
    warning: function(msg) {
        var that, compile_tools;
        that = this;
        // set compile_tools to its visibility. If it's present we dont need to take care of z-indexes
        // since is being done already by show_compile_tools and hide_compile_tools
        compile_tools = $("#compile_tools").is(':visible');
        this.warning = msg;
        this.fix_z_indexes(true);
        this.render({
            to: 'warning',
            action: 'warning'
        });
        $('#warning:hidden, #warning_overlay:hidden').fadeIn()
        $(window).click(function() {
            $('#warning, #warning_overlay').fadeOut(function() { if(!compile_tools) { that.fix_z_indexes(false); } });
            $(this).unbind('click');
        });
    },
    report_error: function(msg) {
        $.post('/php/report_error.php', { error: msg });
    },
    update_progressbar: function(val) {
        var that;
        that = this;
        that.Class.progress_val = val === undefined ? that.Class.progress_val + 3 : that.Class.progress_val + val;
        $('#progressbar').progressbar('value', that.Class.progress_val);
        if(window.console) {
            //console.count('progressbar');
            //console.log('Updating progressbar to '+that.Class.progress_val)
            //if(that.Class.progress_val > 100) { console.trace(); }
        }
    },
    block_background: function(action) {
        var that;
        that = this;
        if(window.console) {
            console.info('In Compilation_controller.block_background with action: '+action);
        }
        if(action) {
            that.fix_z_indexes(true);
            $('#background_overlay').show();
        } else {
            that.fix_z_indexes(false);
            $('#background_overlay').fadeOut();
        }
    },
    connection_error: function(params) {
        var that;
        that = this;
        if(window.console) { console.log('Ajax error: '+params.ajax.text+' : '+params.ajax.error); }
        //that.publish('warning', { msg: "Connection error: Server is not responding. Check your internet connection or wait a minute and try again." });
        window.alert(params.msg);
    },
    /***** Subscriptions ******/
    "compilation.built subscribe": function() {
        var that;
        that = this;
        that.update_progressbar(20);
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
    },
    "section.warning subscribe": function(params) {
        if(window.console) { console.log('Warning: '+params.msg); }
        this.warning(params.msg);
    },
    "report_error subscribe": function(params) {
        if(window.console) { console.log('Reporting error to developers/maintainers: '+params.msg); }
        this.report_error(params.msg);
    },
    "connection_error subscribe": function(params) {
        this.connection_error(params);
    },
    "quote.connection_error subscribe": function(params) {
        this.connection_error(params);
    },
    "progressbar subscribe": function(params) {
        var that;
        that = this;
        that.block_background(true);
        if(window.console) { console.info('Init progressbar'); }
        if($("#compile_tools").is(':visible')) { that.hide_compile_tools(); }
        $('#progressbar').progressbar({ value: 0 });
        $('#progressbar > div').text(params.text);
    },
    "progressbar_hide subscribe": function(params) {
        if(!$('#progressbar').hasClass('ui-progressbar')) { return; }
        var that;
        that = this;
        if(window.console) { console.info('Closing progressbar'); }
        $('#progressbar').progressbar('destroy');
        that.block_background(false);
        that.Class.progress_val = 0;
    },
    "progressbar_update subscribe": function(params) {
        if(window.console) { console.count('Progressbar_update subscribe'); }
        this.update_progressbar(params.val);
    },
    "compilation.progressbar_update subscribe": function(params) {
        if(window.console) { console.count('Progressbar_update subscribe'); }
        this.update_progressbar(params.val);
    },
    "quote.check_internet_connection subscribe": function(params) {
        this.check_internet_connection(params);
    }
}); // End of CompileController
