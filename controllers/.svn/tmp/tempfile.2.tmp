/*
 * 	CompileController will retreive the data and transform it into two different views:
 * 		1. A view for view the quotes in the current Vaniquote page
 * 		2. A view for editing a quote when clicked on
 *
 */

CompileController = MVC.Controller.extend('compile',
/* @Static */
{},
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
			if (data.indexOf('<div class="compilation">') === -1) {
				this.publish('warning', { msg: 'No compilation found in this page!' });
				return;
			}
			// Insert the compilation element that will hold the compilation once rendered
      this.render({
				top: 'wikiPreview',
				action: 'compilation'
			});
			// Start building the compilation
			Facts.build_facts(data);
			Compilation.build_compilation(data);
	},
	"compilation.built subscribe": function() {
			this.clean_up(); // Clean sections for extra sections and unordered
			this._loading('end');
	},
	"#compile_tools_hide": function() {
		$(params.element).parents('#compile_tools').hide();
	},
	// Loading message while building compilation
	_loading: function(now) {
		if (now === 'init') {
				$('#editform, #toolbar').hide();
				this.loading = {};
				this.loading.message = 'Loading compiling data...';
				this.render({
						top: 'bodyContent',
						action: 'loading'
				});
		}
		if (now === 'end') {
				$('#loading').fadeOut('slow', function() {
					$('#compilation').fadeIn('slow').removeClass('hidden');
						$(this).remove();
				});
				$('#compile_tools').tabs();
		}
		return;
	},

	// Event response to a publish('created', new_section) from section model
	"section.created subscribe": function(section) {
		Compilation.add_to_db(section, section.id, section.parent, 's');
		this._render_section(section);
	},
	// Function to render sections
	_render_section: function(section) {
		var parent;
		this.section = section;
		parent = this.section.parent;
		// Render parent first if not already in dom
		if(parent !== 'compilation' && $('#'+parent).length !== 1) {
			this._render_section(Compilation.find_in_db(parent, 's'));
		}
		this.render({
			bottom: parent,
			action: 'sections'
		});
	},

	/**
	 * clean_up function calls _sort_sections and remove_empty_sec (sections without children - quotes).
	 * This method should be called after all sections and quotes have been rendered
	 */
	clean_up: function() {
		this._sort_sections();
		this._remove_empty_secs();
	},
	// Sort sections according to their index
	_sort_sections: function() {
		var main_sec = $('.section');
		var sub_sec  = $('.sub_section');
		$(main_sec).tsort({attr: "sec_index"});
		$(sub_sec).tsort({attr: "sec_index"});
	},
	// Remove empty sections that might have been rendered but dont have any children
	_remove_empty_secs: function() {
		var secs, id;
		secs = new Array();
		$('.section, .sub_section').each(function() {
				id = $(this).attr('id');
				$.inArray(id, secs) > -1 ? $(this).remove() : secs.push(id);
				if ( $(this).children('div').length == 0 ) {
						$(this).remove();
				}
		});
	},

	"compile_form.warning subscribe": function(params) {
		if(window.console) console.log('Warning: '+params.msg);
	},
	"compilation.warning subscribe": function(params) {
		if(window.console) console.log('Warning: '+params.msg);
	}

}); // End of CompileController
