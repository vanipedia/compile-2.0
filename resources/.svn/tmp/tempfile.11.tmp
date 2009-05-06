function JsAutoP(txt, br) {
  var br = typeof br == 'undefined' ? 1 : br;
  var txt = txt||'';
  if (!txt.match(/\n|\r/)) return txt;
    txt += '\n'; // just to make things a little easier, pad the end
    txt = txt.replace(/<br \/>\s*<br \/>/g, '\n\n');
    var blocks = '(table|thead|tfoot|caption|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|form|';
    blocks += 'blockquote|address|math|style|script|object|input|param|p|h[1-6])';
    txt = txt.replace(new RegExp('(<' + blocks + '[^>]*>)', 'g'), '\n$1');
    txt = txt.replace(new RegExp('(<\/' + blocks + '>)', 'g'), '$1\n\n');
    txt = txt.replace(/\r\n|\r/g, '\n'); // cross-platform newlines
    txt = txt.replace(/\n\n+/g, '\n\n'); // take care of duplicates
    txt = txt.replace(/\n?((.|\n)+?)\n\s*\n/g, '<p>$1</p>\n'); // make paragraphs
    txt = txt.replace(/\n?((.|\n)+?)$/, '<p>$1</p>\n'); //including one at the end
    txt = txt.replace(/<p>\s*?<\/p>/g, ''); // under certain strange conditions it could create a P of entirely whitespace
    txt = txt.replace(/<p>(<div[^>]*>\s*)/g, '$1<p>');
    txt = txt.replace(/<p>([^<]+)\s*?(<\/(div|address|form)[^>]*>)/g, '<p>$1</p>$2');
    txt = txt.replace(new RegExp('<p>\s*(<\/?' + blocks + '[^>]*>)\s*<\/p>', 'g'), '$1');
    txt = txt.replace(/<p>(<li.+?)<\/p>/g, '$1'); // problem with nested lists
    txt = txt.replace(/<p><blockquote([^>]*)>/g, '<blockquote$1><p>');
    txt = txt.replace(/<\/blockquote><\/p>/g, '</p></blockquote>');
    txt = txt.replace(new RegExp('<p>\s*(<\/?' + blocks + '[^>]*>)', 'g'), '$1');
    txt = txt.replace(new RegExp('(<\/?' + blocks + '[^>]*>)\s*<\/p>', 'g'), '$1');
    if (br) {
        txt = txt.replace(/<(script|style)(.|\n)*?<\/\1>/g, function($0) {return $0.replace(/\n/g, '<PNL />')});
        txt = txt.replace(/(<br \/>)?\s*\n/g, '<br />\n'); // optionally make line breaks
        txt = txt.replace(/<PNL \/>/g, '\n');
    }
    txt = txt.replace(new RegExp('(<\/?' + blocks + '[^>]*>)\s*<br \/>', 'g'), '$1');
    txt = txt.replace(/<br \/>(\s*<\/?(p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g, '$1');
    if (txt.indexOf('<pre') != -1) {
        txt = txt.replace(/(<pre(.|\n)*?>)((.|\n)*?)<\/pre>/g, function($0, $1, $2, $3) {return $1.replace(/\\([\'\"\\])/g, '$1') + $3.replace(/<p>/g, '\n').replace(/<\/p>|<br \/>/g, '').replace(/\\([\'\"\\])/g, '$1') + '</pre>'});//'
  }
    txt = txt.replace(/\n<\/p>$/g, '</p>');
    return txt;
}