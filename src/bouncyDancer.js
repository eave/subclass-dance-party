var BouncyDancer = function(top, left, timeBetweenSteps, styleClass){
  Dancer.call(this, top, left, timeBetweenSteps, styleClass);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // add bounce functionality
  this.$node.toggleClass("active");
};
