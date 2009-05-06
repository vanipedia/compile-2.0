/**
 * Reference is a proxy to query PVRA.vanisource_titles db.table for metadata for building quotes.
 */
Reference = MVC.Model.extend('reference',
/* @Static */
{
  find: function(ref) {
    var that, result;
		that = this;
		// Ajax request
    $.getJSON('/php/get_vanisource_title.php',
      {ref: ref},
      function(resp) {
        if(resp.result !== 'Found') {
          result = resp.result;
          that.publish('warning', { msg: 'Quote not found for '+ref});
        } else {
          new_quote = {
            link_text:  resp.title,
            link:       resp.title.replace(/\s/g, '_'),
            parent:     resp.section.replace(/\s+/g, '_'),
            index:      resp.index,
            ref: 		    resp.title.replace(/\s+/g, '_'),
            type:       'new'
          };
          that.publish('found', new_quote);
        }
      }
		);
    $(document).ajaxStart(function() {
      that.publish('ajax', { type: 'start', msg: 'Quote being processed...'})
    });
    $(document).ajaxStop(function() {
      that.publish('ajax', { type: 'end', msg: 'Quote request done'})
    })
  }
},
/* @Prototype */
{
}
);