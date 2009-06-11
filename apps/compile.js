include.resources(
    'jquery-1.3.2',
    'ejs_fulljslint',
    'jquery.tinysort.packed', 'jquery.autogrow','jquery.easing', 'jquery.scrollTo',
    'jquery.jeditable', 'jquery.hoverIntent', 'jquery-autocomplete/jquery.autocomplete',
    'jquery-ui-1.7.2.custom.min',
    'BaltoUni', 'UnitoASCII', 'jquery.highlight_sanskrit', 'JsAutoP'
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
include.css('compilation', 'quotes', 'edit_quote', 'deleted_quote', 'compile_form', 'facts',
            'compile-default/jquery-ui', 'jquery.autocomplete'
            );
