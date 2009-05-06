/**
 * This model submits and receives requests to a php service quering the vanisource_titles table in pvra database
 */
CompileForm = MVC.Model.extend('compile_form',
/* @Static */
{
  blank_form: function(){
      return {
        id: 'compile_form',
        tips : this._get_tips()
      }
  },
  submit_quote: function(text) {
		var re, new_quote, ref;
    re = new RegExp(">>> Ref. VedaBase => (.+)");
    if (re.test(text) ) {
      temp_quote = $.trim(text.replace(re, ''));
      temp_quote = BaltoUni(temp_quote);
      this.temp_quote = temp_quote;
      ref = $.trim(re.exec(text)[1]);
      Quote.find_reference(ref);
    } else {
        this.publish('warning', { msg: 'No Ref in pasted quote!'});
        return;
    }
	}
},
/* @Prototype */
{
}
);