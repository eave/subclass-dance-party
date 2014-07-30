

var PacmanDancer = function(top, left, timeBetweenSteps, styleClass){
  this.$target = null;
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps, styleClass);
};

PacmanDancer.prototype = Object.create(Dancer.prototype);
PacmanDancer.prototype.constructor = PacmanDancer;

PacmanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if(this.$target !== null){
  	this.move();
  } else {
  	var closestDistance;
  	var iterationDistance;
  	var	left;
  	var top;

  	for(var i = 0; i < window.dancers.length; i++){

  		if(window.dancers[i] !== this.$node){
        dancerLeft = parseInt(window.dancers[i].css('left'));
        dancerTop = parseInt(window.dancers[i].css('top'));

        left = this.left - dancerLeft;
  			top = this.top - dancerTop;
  			iterationDistance = Math.sqrt(left*left + top*top);
  			if(closestDistance === undefined || closestDistance > iterationDistance){
  				closestDistance = iterationDistance;
          this.$target = window.dancers[i];
        }
  		}
  	}
  	//alert("TARGET AQUIRED! BEWARE!");
  }
};

PacmanDancer.prototype.move = function(){
  // get target position
  var targetLeft = parseInt(this.$target.css('left'));
  var targetTop = parseInt(this.$target.css('top'));

  if (Math.abs(targetLeft-this.left) < 10 &&
    Math.abs(targetTop-this.top) < 10) {
    this.$target.remove();
    this.$target = null;
  } else {
    if (Math.abs(targetLeft - this.left)) {
      if (targetLeft - this.left > 0) {
        this.left += 10;
      } else {
        this.left -= 10;
      }
      this.$node.css({left: this.left + "px"});
    }

    if (Math.abs(targetTop - this.top)) {
      if (targetTop - this.top > 0) {
        this.top += 10;
      } else {
        this.top -= 10;
      }
      this.$node.css({top: this.top + "px"});
    }
  }
};