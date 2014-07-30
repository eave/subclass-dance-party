var AwkwardDancer = function(top, left, timeBetweenSteps, styleClass){
  Dancer.call(this, top, left, timeBetweenSteps, styleClass);
};

AwkwardDancer.prototype = Object.create(Dancer.prototype);
AwkwardDancer.prototype.constructor = AwkwardDancer;

AwkwardDancer.prototype.step = function() {
  this.$node.hover(
    function(){
        $(this).addClass("active")
    },
    function(){
      $(this).removeClass('active');
    }
  );
};
