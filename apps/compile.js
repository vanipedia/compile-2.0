include.resources(
    'jquery',
    'jquery.tinysort.packed', 'jquery.autogrow','jquery.easing', 'jquery.scrollTo',
    'jquery.jeditable', 'jquery.hoverIntent', 'jquery-autocomplete/jquery.autocomplete',
    'jquery-ui-1.7.2.custom.min',
    'BaltoUni', 'UniToASCII', 'jquery.highlight_sanskrit', 'RegExp.escape'
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
            'skins/light_blue/jquery-ui', 'jquery.autocomplete'
            );
