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

    saving: false,

    compile_tools: '',

    save_keyCodes: [],

    progressbar: {},

    get_current_progress: function() {
        return CompileController.progressbar.progressbar('option', 'value');
    },

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
        $('div#bodyContent > div#compilation > div#compile_tools_menu').animate({
            right: "-72px"
        }, 'slow');
    },
    show_tools_menu: function() {
        $('div#bodyContent > div#compilation > div#compile_tools_menu').animate({
            right: "0px"
        }, 'fast');
    },
				link_autocomplete: function(elem, fixed) {
								// autocomplete for suggest box on quote or link not found
								// jQuery.autocomplete was customized in order to display properly
								// in our fixed compile_tools box
								$(elem).autocomplete("/php/get_vanisource_title.php", {
												extraParams: { type: 'title', suggest: true},
            minChars: 4,
												resultsClass: 'link_suggest_results',
												fixed: fixed
								});
				},
    // category_autocomplete: function(elem, fixed) {
    // 								// autocomplete for suggest box on quote or link not found
    // 								// jQuery.autocomplete was customized in order to display properly
    // 								// in our fixed compile_tools box
    // 								$(elem).autocomplete("/php/category_search2.php", {
    // 												minChars: 3,
    //         resultsClass: 'cat_suggest_results',
    //         max: 45,
    // 												fixed: fixed,
    //         matchContains: true,
    //         selectFirst: false
    // 								});
    // 				},
		category_autocomplete: function function_name (elem, fixed) {
			$(elem).autocomplete({
				source: function(request, response) {
					$.ajax({
						url: "/search/category",
					  dataType: "json",
				    data: { q: request.term },
						success: function( data ) {
								var l = $.map(data, function(title) {
									return title.category;
								});
				        response(l);
				    }
				});
				}
			});
		},
    enable_keybindings: function() {
        CompileController.disable_keybindings();
        $(document).bind('keydown', CompileController.keybindings);
    },
    disable_keybindings: function() {
        $(document).unbind('keydown', CompileController.keybindings);
    },

    keybindings: function(e) {
        var factsK, formK, $tools, selected;
        factsK = 70;
        formK = 67;
        if(!e.altKey) return;
        if(e.keyCode !== factsK && e.keyCode !== formK) return;
        e.stopImmediatePropagation();
        e.preventDefault();
        CompileController.show_compile_tools();
        $tools = $('div#compilation > div#compile_tools');
        selected = $tools.tabs('option', 'selected');
        if(e.keyCode === formK) {
            if(selected !== 0) $tools.tabs('select', 0);
        }
        if(e.keyCode === factsK) {
            if(selected !== 1) $tools.tabs('select', 1);
        }
    },
    show_compile_tools: function(pos) {
        CompileController.fix_z_indexes(true);
        CompileController.compile_tools.css('opacity', 1).fadeIn('fast', function() {
            if(pos) window.scrollTo(0, pos);
        });
        $('div#compilation > div#compile_tools_menu > p#compile_tools_toggle span#compile_tools_toggle_text').text('Hide Tools');
        $('div#compilation > div#transparent_background').show();
        QuotesController.disable_keybindings();
        FactsController.enable_keybindings();
        $('textarea', CompileController.compile_tools).focus();
    },
    hide_compile_tools: function() {
        // Make transparent background dissapear. This bg is used to enable click on anywhere but inside compie_tools element to hide it.
        $('div#compilation > div#transparent_background').hide();
        CompileController.fix_z_indexes(false);
        CompileController.compile_tools.hide('fast');

        $('div#compilation > div#compile_tools_menu > p#compile_tools_toggle > span#compile_tools_toggle_text').text('Show Tools');
        setTimeout( CompileController.hide_tools_menu, 5000);
        FactsController.disable_keybindings();
        CompileController.enable_keybindings();
    },
    fix_z_indexes: function(fix) {
        // fix logo z-index for overlays in compile tools when passed true it will set it to 1 when false is reset to original
        $('#p-logo, #p-cactions').css('z-index', fix ? 1 : '');
    },
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
        that.update_progressbar(5, 'Fetching compilation...');
        data = $('div#bodyContent > form#editform > textarea#wpTextbox1').val();
        // Check this page for existing compilation tags
        if(data !== '' && data.indexOf('<div id="compilation">') === -1) {
            if(window.console) { console.log('No compilation found in this page!' ); }
            this._loading('end_gracefully');
            return;
        }
        that.update_progressbar(5, 'Building compilation...');
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

    "div#compile_tools span#compile_tools_hide click": function(params) {
        CompileController.hide_compile_tools();
    },
    "div#transparent_background click": function() {
        CompileController.hide_compile_tools();
    },
    "div#compile_tools_menu p#compile_tools_toggle click": function(params) {
        // calculate pos in page for callback to scroll page back to its current location
        var pos = params.event.pageY - 50;
        this.toggle_compile_tools(pos);
    //if(window.console) { console.log(pos); }
    },
    "div#compile_tools_menu p#compile_tools_save click": function(params) {
								params.event.kill();
        this.save();
    },
    "div#compile_tools div#compile_form .ui-state-default mouseover": function(params) {
        $(params.element).addClass('ui-state-hover');
    },
    "div#compile_tools #compile_form .ui-state-default mouseout": function(params) {
        $(params.element).removeClass('ui-state-hover');
    },
    // Loading message while building compilation
    _loading: function(now) {
        var that, progress;
        that = this;
        this.Class.loading = true;
        if (now === 'init') {
            if(wgUserName === null) {
                alert('You must Log-in to compile.');
                return;
            }
            $('title, #firstHeading').each(function() {
                $(this).text($(this).text().replace(/Editing/, 'Compiling'));
            });
            $('<div id="background_overlay" class="ui-corner-bl"></div>').appendTo('body');
            CompileController.progressbar = $('<div id="progressbar"></div>');
            CompileController.progressbar.appendTo('body')
            that.publish('progressbar', { text: 'Loading Compilation...'});
            $('#editform, #toolbar').hide();
            $('#mw-edit-longpagewarning').hide();
            this.loading = {};
            $('body div#column-one > div#p-cactions').children().each(function() {
                $('li#ca-edit', this).removeClass('selected');
                $('li#ca-compile', this).addClass('selected');
            });
        }

        if (now === 'end_gracefully') {
            if(window.console) { console.info('In CompilationController._loading ending gracefully...'); }
            this.publish('progressbar_hide');
            $('body div#bodyContent > form#editform, body div#bodyContent > #toolbar').show();
        }

        if (now === 'end') {
            $(document).ready(function() {
                CompileController.compile_tools = $('div#bodyContent > div#compilation > div#compile_tools');
                // Attach jQuery bindings to elements
                that.attach_events();
                that.publish('progressbar_hide');
                $('body div#bodyContent > div#compilation').fadeIn('slow').removeClass('hidden');
                CompileController.show_compile_tools();
            });
            this.Class.loading = false;
        }
        return;
    },
    // jQuery bindings/effects/widgets
    attach_events: function() {
        var that;
        that = this;
        // jQuery Event attachments
        CompileController.compile_tools.tabs().draggable({ handle: '> ul' });
        $('div#bodyContent > div#compilation > div#compile_tools_menu')
					.hoverIntent(that.Class.compile_tools_menu_hover_options);
				// Help menu
				$('div#compilation > div#compile_tools > div#compile_help').accordion({
				    autoHeight: false,
		      collapsible: true,
		      active: false
		    });
				// jQuery UI theme switcher
				$('div#compilation > div#compile_tools > #compile_help #theme_switcher > .jlthemeswitcher-opener').jlthemeswitcher({
					defaultTheme: 'Vaniquotes',
					themePreview: false,
					closeOnClick: false,
					importThemes: false,
					autoOpen: true,
					width: "100%",
					// importThemesPath: "http://localhost/js/compile-2.0/stylesheets/skins/vaniquotes/jqueryui-themes.js"
					themes: [
						[
						"Vaniquotes",
						"/js/compile-2.0/stylesheets/skins/vaniquotes/images/theme_30_ui_vaniquotes.png",
						"/js/compile-2.0/stylesheets/skins/vaniquotes/jquery-ui.css"
						],
						[
						"UI Lightness",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_ui_light.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css"	
						],
						[
						"UI Darkness",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_ui_dark.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-darkness/jquery-ui.css"	
						],
						[
						"Smoothness",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_smoothness.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/smoothness/jquery-ui.css"	
						],
						[
						"Start",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_start_menu.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/start/jquery-ui.css"	
						],
						[
						"Redmond",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_windoze.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/redmond/jquery-ui.css"	
						],
						[
						"Sunny",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_sunny.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/sunny/jquery-ui.css"	
						],
						[
						"Overcast",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_overcast.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/overcast/jquery-ui.css"	
						],
						[
						"Le Frog",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_le_frog.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/le-frog/jquery-ui.css"	
						],
						[
						"Flick",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_flick.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/flick/jquery-ui.css"	
						],
						[
						"Pepper Grinder",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_pepper_grinder.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/pepper-grinder/jquery-ui.css"	
						],
						[
						"Eggplant",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_eggplant.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/eggplant/jquery-ui.css"	
						],
						[
						"Dark Hive",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_dark_hive.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/dark-hive/jquery-ui.css"	
						],
						[
						"Cupertino",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_cupertino.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/cupertino/jquery-ui.css"	
						],
						[
						"South St",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_south_street.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/south-street/jquery-ui.css"	
						],
						[
						"Blitzer",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_blitzer.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/blitzer/jquery-ui.css"	
						],
						[
						"Humanity",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_humanity.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/humanity/jquery-ui.css"	
						],
						[
						"Hot Sneaks",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_hot_sneaks.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/hot-sneaks/jquery-ui.css"	
						],
						[
						"Excite Bike",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_excite_bike.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/excite-bike/jquery-ui.css"	
						],
						[
						"Vader",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_black_matte.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/vader/jquery-ui.css"	
						],
						[
						"Dot Luv",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_dot_luv.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/dot-luv/jquery-ui.css"	
						],
						[
						"Mint Choc",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_mint_choco.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/mint-choc/jquery-ui.css"	
						],
						[
						"Black Tie",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_black_tie.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/black-tie/jquery-ui.css"	
						],
						[
						"Trontastic",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_trontastic.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/trontastic/jquery-ui.css"	
						],
						[
						"Swanky Purse",
						"http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_swanky_purse.png",
						"http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/swanky-purse/jquery-ui.css"	
						]
					],
					
				});
				
        // SetTimeout to hide the tools_menu
        setTimeout( that.Class.hide_tools_menu, 5000);

        // buttons effects
        $('div#bodyContent > div#compilation > div#compile_tools_menu > p')
					.bind('mouseenter', function() {
            $(this).addClass('ui-state-hover');
        }).bind('mouseleave', function() {
            $(this).removeClass('ui-state-hover');
        });

        // Key bindings will show the compile form or page facts depending on which key is typed by the user: f(acts) or c(ompile form)
        CompileController.enable_keybindings();
        this.enable_keybinding_save();

        // Safeguard for accidental navigation away from compilation
        window.onbeforeunload = function() {
            if(!that.Class.saving) {
                return "";
            }
        }
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
        if($('div#compilation > div#'+section).children().length > 1) {
            $('div#compilation > div#'+section).children('div.section, div.sub_section').tsort({
                attr: "sec_index"
            });
        }
    },
    // Sort sections according to their index
    _sort_sections: function() {
        var main_sec = $('div#compilation > div.section');
        var sub_sec  = $('div#compilation > div.section > div.sub_section');
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
								find_and_remove($('div#compilation > div.section > div.sub_section'));
								find_and_remove($('div#compilation > div.section'));

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
        $('div#bodyContent > div#compilation div.quote').tsort({ attr: "index" });
    },
    toggle_compile_tools: function(pos) {
        CompileController.compile_tools.is(':hidden') ? CompileController.show_compile_tools(pos) : CompileController.hide_compile_tools(pos);
    },

    relogin: function() {
        var that, actionURL;
        that = this;
        $("body > div#progressbar").progressbar('disable');
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
                    $("body > div#progressbar").progressbar('enable');
                    // if login succeded try to save again
                    that.save();
                },
                error : function( XMLHttpRequest, textStatus, errorThrown ){
                    //TODO : add error handling here
                    if(window.console) {
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
        that.publish('progressbar', { text: 'Begin saving...'}); // init progresbar
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
                if(window.console) { console.log("Success: "+request.responseText); }
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
        that.update_progressbar(0, 'Checking compilation before save...');
        function cancel_save() {
            that.publish('progressbar_hide');
        }
        // check if a new quote has not been inserted yet
        if($('.building_quote').not('.deleted_quote').length) {
            cancel_save();
            this.publish('warning', {
                msg: 'You must insert all quotes before saving!'
            });
            $.scrollTo('.building_quote', 'fast');
            return;
        }
								if($('.bad_link').length) {
            cancel_save();
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
        var that, facts, sections, subs, quotes, new_compilation, final_html, progress_unit;
        that = this;
        this.Class.saving = true;
        new_compilation = $('<div id="compilation"></div>');
        that.update_progressbar(0, 'Saving facts...');
        // Process facts
        facts   = Facts.save();
        that.update_progressbar();
        $('<div id="facts">'+facts+'</div>').appendTo(new_compilation);
        that.update_progressbar(0, 'Saving quotes...');
        // Process quotes
        quotes = $('.quote').not('.deleted_quote').clone();
        progress_unit = 40 / quotes.length;
        if(window.console) console.log('q_count is '+quotes.length+', cur_progress is '+CompileController.progress_val+', progress_unit is '+progress_unit);
        quotes.each(function() {
            var q, p, l, lt, inline;
            q = $(this);
            p = q.attr('parent');
            l = q.attr('link').replace(/_/g, ' ');
            lt = $('.link a', q).text();
            if( $('div.q_menu div.candidate_quote', q).hasClass('ui-state-error') ) { q.addClass('qod_candidate'); }
            $('.q_menu', q).remove();
            $('.link', q).html("[[Vanisource:"+l+"|"+lt+"]]: ");
            $('.cited_link', q).each(function() {
                $(this).replaceWith('[[Vanisource:'+$(this).text()+'|'+$(this).text()+']]');
            });
            $('.verse_in_q', q).each(function() {
                $(this).replaceWith($(this).text().replace(/^([^\n])/mg, ':$1'));
            });
            $('span.ui-state-highlight', q).each(function() {
                var t = $(this).text();
                $(this).replaceWith(t);
            });
            q.removeClass().addClass('quote');
            q.removeAttr('style');
            that.update_progressbar(progress_unit);
        });
        quotes.appendTo(new_compilation);

        // Process sections
        // Clone them first
        that.update_progressbar(0, 'Saving sections and subsections...');
        subs = $('.sub_section').clone();
        sections = $('.section').clone();

        // Calculate progress unit for progressbar and then process subsections
        progress_unit = 10 / subs.length;
        if(window.console) console.log('subs_count is '+subs.length+', cur_progress is '+CompileController.progress_val+', progress_unit is '+progress_unit);
        subs.each(insert_section);

        // Calculate progress unit for progressbar and then process sections
        progress_unit = 10 / sections.length;
        if(window.console) console.log('sections_count is '+sections.length+', cur_progress is '+CompileController.progress_val+', progress_unit is '+progress_unit);
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
             that.update_progressbar(progress_unit);
        }

        // Append all to new_compilation
        final_html = new_compilation.wrap('<div></div>').parent('div').html().replace(/^\s+/mg, '').replace(/<\/span>\n/g, '</span>').replace(/(<div[^>]+?(?:id="facts"|class="(?:quote|section|sub_section)"))/g, '\n$1').replace(/([^\n])<\/div>/g, '$1\n</div>');
         that.update_progressbar(0, 'Finished processing compilation for save..');
        $('#wpTextbox1').val(final_html);
         that.update_progressbar();
        if(window.console) {
            console.log(facts);
            console.log(quotes);
            console.log(new_compilation);
        }
         that.update_progressbar(100, 'Saving!');
        // Save!
        $('#wpSave').click();
		// Return to wiki view (Fix had to be done for Internet conn problems)
        $('#editform, #toolbar').show();
        that.publish('progressbar_hide');
		
        // Last check in case we are still here
        setTimeout(function() {
            if(that.Class.saving) {
                that.check_internet_connection();
            }
        }, 15000);
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
        compile_tools = CompileController.compile_tools.is(':visible');
        this.warning = msg;
        CompileController.fix_z_indexes(true);
        this.render({
            to: 'warning',
            action: 'warning'
        });
        $('div#bodyContent > div#compilation > div#warning:hidden, div#bodyContent > div#compilation > div#warning_overlay:hidden').fadeIn()
        $(window).click(hide_warning);
        $(window).keydown(hide_warning);

        function hide_warning(e) {
            if( e.type !== 'click' && e.keyCode !== 27) { return; }
            $('div#bodyContent > div#compilation > div#warning, div#bodyContent > div#compilation > div#warning_overlay').fadeOut(function() { if(!compile_tools) { CompileController.fix_z_indexes(false); } });
            $(this).unbind('click', hide_warning);
            $(this).unbind('keydown', hide_warning);
        }
    },
    report_error: function(msg) {
        $.post('/php/report_error.php', { error: msg });
    },
    // Update progress and status
    update_progressbar: function(val, status) {
        var that;
        that = this;
        that.Class.progress_val = val === undefined || val == 0 ? that.Class.progress_val + 2 : that.Class.progress_val + val;
        // Update current status
        if(status) $('body > div#progressbar > div').text(status);
        CompileController.progressbar.progressbar('value', that.Class.progress_val);
        /*if(window.console) {
            console.log('Updating progressbar to '+that.Class.progress_val+', status: '+status);
        }*/
    },
    block_background: function(action) {
        var that;
        that = this;
        if(window.console) {
            console.info('In Compilation_controller.block_background with action: '+action);
        }
        if(action) {
            CompileController.fix_z_indexes(true);
            $('#background_overlay').show();
        } else {
            CompileController.fix_z_indexes(false);
            $('#background_overlay').fadeOut();
        }
    },
    connection_error: function(params) {
        var that;
        that = this;
        if(window.console) { console.log('Ajax error: '+params.ajax.text+' : '+params.ajax.error); }
        window.alert(params.msg);
    },
    enable_keybinding_save: function() {
        var that;
        that = this;
        $(document).bind('keydown', function(e) {
            var saveK, special_key;
            saveK = 83; // s
            if( e.ctrlKey && e.shiftKey && e.keyCode === saveK ) {
                //alert('Saving!');
                e.stopPropagation();
                // Save Compilation
                that.save();
            }
        });
    },
    /***** Subscriptions ******/
    "compilation.built subscribe": function() {
        var that;
        that = this;
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
        if(CompileController.compile_tools.is(':visible')) CompileController.hide_compile_tools();
    },
    "compilation.quote_inserted subscribe": function(params) {
        CompileController.show_compile_tools();
    },

    // Event response to a publish('created', new_section) from section model
    "section.created subscribe": function(section) {
        Compilation.add_to_db(section, section.id, section.parent, 's');
        this._render_section(section);
    },
    "hide_compile_tools subscribe": function() {
        CompileController.hide_compile_tools();
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
        if($("div#bodyContent > div#compilation > #compile_tools").is(':visible')) { CompileController.hide_compile_tools(); }
        CompileController.progressbar.progressbar({ value: 0 });
        $('body > div#progressbar > div').text(params.text);
    },
    "progressbar_hide subscribe": function(params) {
        if(!CompileController.progressbar.hasClass('ui-progressbar')) { return; }
        var that;
        that = this;
        if(window.console) { console.info('Closing progressbar'); }
        CompileController.progressbar.progressbar('destroy');
        that.block_background(false);
        that.Class.progress_val = 0;
    },
    "progressbar_update subscribe": function(params) {
        if(window.console) { console.count('Progressbar_update subscribe'); }
        var status;
        status = params.status ? params.status : false;
        this.update_progressbar(params.val, status);
    },
    "compilation.progressbar_update subscribe": function(params) {
        if(window.console) { console.count('Progressbar_update subscribe from Compilation'); }
        status = params.status ? params.status : false;
        this.update_progressbar(params.val, status);
    },
    "facts.progressbar_update subscribe": function(params) {
        if(window.console) { console.count('Progressbar_update subscribe from Facts'); }
        status = params.status ? params.status : false;
        this.update_progressbar(params.val, status);
    },
    "quote.check_internet_connection subscribe": function(params) {
        this.check_internet_connection(params);
    }
}); // End of CompileController
