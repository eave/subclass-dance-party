// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, styleClass){
  this.$node = $('<span class="dancer '+ styleClass +' "></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step(); // this may be wrong
  }, context._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css({
    top: top,
    left: left
  });
};
