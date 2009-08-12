
// jQuery.floating-headers.js - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

;(function($){
  
  // --- Floating elements
  
  var floating = []
  
  // --- Float on scroll
  
  $(window).scroll(function() {
    var y = window.pageYOffset
    for (i = 0, len = floating.length; i < len; ++i)
      y > floating[i].y ?
        floating[i].element.show().css({ position : 'absolute', top : y }) :
        floating[i].element.hide();
        
  })
  
  /**
   * Float table headers with _options_.
   *
   * The table must wrap its headings in the 'thead' tags.
   * Currently no options are available.
   *
   * @param  {hash} options
   * @return {jQuery}
   * @api public
   */
  
  $.fn.floatHeaders = function(options) {
    var self = this.clone(true).prependTo(this.parent()).hide()
    self.children(':not(thead)').remove()
    floating.push({ element : self, y : this.offset().top })
    return this
  }
  
})(jQuery)
