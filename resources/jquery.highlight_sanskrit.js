
/**
  Highlight_sanskrit.js plug-in for jQuery
  This plug-in is used to highlight terms used in every vaniquotes article and to highlight terms passed
  from a vaniquote to a vanisource page.
  Usage: $(elem).highlight_sanskrit('Krsna', { global: false, i: true });
  options are global: boolean(true|false) and i(case insensitive): boolean(true|false). By default they are both true.
**/

;(function($) {
  jQuery.fn.highlight_sanskrit = function(key, options) {
    var defaults = {
      i: true,
      global: true,
      strict: true,
      hi_class: 'highlight_terms',
      type: 'span'
    };
    var opts = $.extend(defaults, options);
    return this.each(function() {
        var html_1, html_2, hi_class, tag, tag_close, set_flags, re1, matches, found,
        indexes, key1, key2, len, a1, a2, b1, b2, opentag_count, closetag_count;

      if (/ä|é|ü|å|è|ì|ï|ö|ò|ë|ç|à|ù|ÿ|û|Ä|É|Ü|Å|È|Ì|Ñ|Ï|Ö|Ò|Ë|Ç|À|Ù|ß/.test(key)) {
        key = UniToASCII(BaltoUni(key));
      }
      if(/ā|ī|ū|ṛ|ṟ|ṅ|ṣ|ñ|ṭ|ḍ|ṇ|ś|ṁ|ḥ|ḷ|ḻ|Ā|Ī|Ū|Ṛ|Ṟ|Ṣ|Ñ|Ṭ|Ḍ|Ṇ|Ś|Ṁ|Ḥ|Ḷ/.test(key)) {
        key = UniToASCII(key);
      }
    /* This is a very interesting scheme by which we search for the key
      replace it and continue search where we stopped in order to speed up
      the search and most importantly to replace the keywords in their original
      form (sanskrit, caps, etc).*/
    // We use 2 versions of the text in order to search in plaintext (ASCII)
      html_1    = $(this).html();
      html_2    = UniToASCII(html_1);
      hi_class  = opts.hi_class;
      tag       = '<'+opts.type+' class="'+hi_class+'">';
      tag_close = '</'+opts.type+'>';
      set_flags = ''; opts.global ? set_flags += 'g':'';  opts.i ? set_flags += 'i':'';
      re1 = opts.strict ? new RegExp('\\b'+RegExp.escape(key)+'\\b', set_flags) : new RegExp(key, set_flags);
      matches=html_2.match(re1);
      if(matches) {
        found=0;
        indexes=new Array(matches.length);
        for(var m = 0; m < matches.length; m++){
          found       = html_2.substring(0, found).length;
          indexes[m]  = found+html_2.substring(found).search(re1);
          key1    = tag+html_1.substr(indexes[m], key.length)+tag_close;
          key2    = tag+matches[m]+tag_close;
          len     = matches[m].length;
          a1      = html_1.substring(0, indexes[m]);
          a2      = html_2.substring(0, indexes[m]);
          found       = indexes[m]+key2.length;
          // search for open tags to see if we are inside a tag
          opentag_count = /</.test(a1) ? a1.match(/</g).length : 0;
          closetag_count = />/.test(a1) ? a1.match(/>/g).length : 0;
          // if there are more open than close or viceversa, skip replacement
          if( opentag_count !== closetag_count ) continue;
          b1      = html_1.substring(a1.length+len);
          b2      = html_2.substring(a2.length+len);
          html_1      = a1+key1+b1;
          html_2      = a2+key2+b2;
          $(this).html(html_1);
        }
      }
    });
  }
/* Hack derived from imatch.js
  Thanks to imatch.js in http://www.fullposter.com/?1
*/
})(jQuery);