var AwkwardDancer = function(top, left, timeBetweenSteps, styleClass){
  Dancer.call(this, top, left, timeBetweenSteps, styleClass);
};

AwkwardDancer.prototype = Object.create(Dancer.prototype);
AwkwardDancer.prototype.constructor = AwkwardDancer;

AwkwardDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
