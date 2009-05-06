/**
  Highlight_sanskrit.js plug-in for jQuery
  This plug-in is used to highlight terms used in every vaniquotes article and to highlight terms passed
  from a vaniquote to a vanisource page.
  Usage: $(elem).highlight_sanskrit('Krsna', { global: false, i: true });
  options are global: boolean(true|false) and i(case insensitive): boolean(true|false). By default they are both true.
**/

(function($) {
  jQuery.fn.highlight_sanskrit = function(key, options) {
    defaults = {
      i: true,
      global: true,
      strict: true,
      hi_class: 'highlight_terms',
      type: 'span'
    };
    var opts = $.extend(defaults, options);
    return this.each(function() {

      if (/ä|é|ü|å|è|ì|ï|ö|ò|ë|ç|à|ù|ÿ|û|Ä|É|Ü|Å|È|Ì|Ñ|Ï|Ö|Ò|Ë|Ç|À|Ù|ß/.test(key)) {
        key = UniToASCII(BaltoUni(key));
      }
      if(/ā|ī|ū|ṛ|ṟ|ṅ|ṣ|ñ|ṭ|ḍ|ṇ|ś|ṁ|ḥ|ḷ|ḻ|Ā|Ī|Ū|Ṛ|Ṟ|Ṣ|Ñ|Ṭ|Ḍ|Ṇ|Ś|Ṁ|Ḥ|Ḷ/.test(key)) {
        key = UniToASCII(key);
      }

      var html_1    = $(this).html();
      var html_2    = UniToASCII(html_1);
      var html_f    = html_1;
      var hi_class  = opts.hi_class;
      var tag       = '<'+opts.type+' class="'+hi_class+'">';
      var tag_close = '</'+opts.type+'>';
      var set_flags = ''; opts.global ? set_flags += 'g':'';  opts.i ? set_flags += 'i':'';
      key           = quotemeta(key);
      opts.strict ? re1 = new RegExp('\\b'+key+'\\b', set_flags) : re1 = new RegExp(key, set_flags);
      var matches=html_2.match(re1);
      if(matches) {
        var found=0;
        var indexes=new Array(matches.length);
        for(var m = 0; m < matches.length; m++){
          found       = html_2.substring(0, found).length;
          indexes[m]  = found+html_2.substring(found).search(re1);
          var key1    = tag+html_1.substr(indexes[m], key.length)+tag_close;
          var key2    = tag+matches[m]+tag_close;
          var len     = matches[m].length;
          var a1      = html_1.substring(0, indexes[m]);
          var a2      = html_2.substring(0, indexes[m]);
          var b1      = html_1.substring(a1.length+len);
          var b2      = html_2.substring(a2.length+len);
          html_1      = a1+key1+b1;
          html_2      = a2+key2+b2;
          found       = indexes[m]+key2.length;
          $(this).html(html_1);
        }
      }
    })
  }
/* Hack derived from imatch.js
  Thanks to imatch.js in http://www.fullposter.com/?1
*/
  function quotemeta (string) {
      return string.replace(/([\(\)])/g, "\\$1");
  }

})(jQuery);