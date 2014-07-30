var RollingDancer = function(top, left, timeBetweenSteps, styleClass){
  Dancer.call(this, top, left, timeBetweenSteps, styleClass);
};

RollingDancer.prototype = Object.create(Dancer.prototype);
RollingDancer.prototype.constructor = RollingDancer;

RollingDancer.prototype.step = function(){
  // add roll functionality
  this.$node.addClass("active");
  setTimeout(function(){
  	this.$node.remove();
  }, 10000)
};
