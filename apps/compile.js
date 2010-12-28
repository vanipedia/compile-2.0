include.resources(
		'jquery-1.4.4.min',
		'jquery-ui/js/jquery-ui.min.js',
		'jquery.jlthemeswitcher',
    'jquery.tinysort.min',
    'jquery.autogrow','jquery.easing', 'jquery.scrollTo',
    'jquery.jeditable', 'jquery.hoverIntent', 
    'BaltoUni.min', 'UniToASCII', 'jquery.highlight_sanskrit', 'RegExp.escape'
    );
include.engines();
include.plugins(
    'controller', 'controller/hover', 'controller/view',
    'view','view/helpers',
    'model'
    );

include(function(){ //runs after prior includes are loaded
  include.models('compilation', 'quote', 'section', 'compile_form', 'facts');
  include.controllers('compilation', 'quotes', 'compile_form', 'facts');
  include.views();
});
include.css(
	// 'skins/ui-lightness/jquery-ui',
	'skins/vaniquotes/jquery-ui',
	'compilation', 
	'quotes', 
	'edit_quote', 
	'deleted_quote', 
	'compile_form', 
	'facts'
);
