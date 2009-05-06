TermsController = MVC.Controller.Stateful.extend('terms',{
  init: function(term) {
    //this._super(MVC.$E(element));
    this._super({ id: term.id });
    this.term = term;
    //this.value = this.element.innerHTML;
    //this.render({bottom: 'terms_list'});
  },
  /*click:  function(params) {
    if(window.console) console.log('In termsController'+params.element);
  },*/
  set: function(attr, value) {
    this[attr] = value;
  },
  set_val: function(value) {
    this.element.innerHTML = value;
  }
}
);