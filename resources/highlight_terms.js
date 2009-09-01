/**************************************************************
 *  This script makes the highlighting possible
 *  by taking the terms found in the current
 *  vaniquotes page and hightlight them by first
 *  translating everything to ASCII and then
 *  wrapping the matches with <span class=highlight></span>
 **************************************************************/

if (wgAction == 'view' && wgCanonicalNamespace == '') {
  // Variables
  //Jquery highlighting function taking terms from page header inside <span class="terms" id="termN">
  function high_this(key) {
    $('p b a').parent().parent().highlight_sanskrit(key);
    $('p').filter(function() {
      return ! $(this).children().size() > 0;
    }).highlight_sanskrit(key);
  }
  // highlight function for compilations built in v 2.0
  function high_this2(key) {
    $('.quote .text').highlight_sanskrit(key);
  }
    // BEGIN
    $(document).ready(function() {
      // if spans with class terms exist
        // check for compilation version. This is temporary while we move everything into 2.0
        var highlight = $('.quote').length > 0 ? high_this2 : high_this;
        if ($('span.terms').size()) {
            // iterate
            hi_term = new Array();
            $('span.terms').each(function(i) {
              // sanitize hi_term for search
              hi_term[i] = $(this).text().replace(/"/g, "");
              hi_term[i] = hi_term[i].replace(/(^ *| *$)/mg, "");
              hi_term[i] = hi_term[i].replace(/ {2,}/g, ' ');
              highlight(hi_term[i]);
            });
        } else {
            // if no terms found, use wgTitle(title of article) as the search term for highlighting
            hi_term = wgTitle;
            highlight(hi_term);
        }
    });
}
