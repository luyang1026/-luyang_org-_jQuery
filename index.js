
exports._$ = (function(global, factory){
  factory(global);
})(typeof window !== undefined ? window : this, function(window) {

  function zQuery( arg ){
    this.element = [];
    var toString = Object.prototype.toString;
    switch ( typeof( arg ) )
    {
      case 'string':
        this.element.push( document.querySelector( arg ) );
      break;
      case 'object':
        this.element.push( arg );
      break;
    }
  }

  zQuery.fn = zQuery.prototype = {
    on( eventName, eventHandler ){
      for (var i = 0; i < this.element.length; i++) {
        this.element[i].addEventListener( eventName, eventHandler, false);
      }
    },
    off( eventName, eventHandler) {
      for (var i = 0; i < this.element.length; i++) {
        this.element[i].removeEventListener( eventName, eventHandler, false);
      }
    },
    css( styleObj ){
          console.log(this.element)
      for (var i = 0; i < this.element.length; i++) {
        for (var name in styleObj) {
          this.element[i].style[name] = styleObj[name] + 'px';
        }
      }
    }
  };

  return  window._$ = function ( arg ){
    return new zQuery( arg );
  }
});
 
