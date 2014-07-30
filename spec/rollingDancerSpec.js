describe("rollingDancer", function() {

  var rollingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rollingDancer = new rollingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rollingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(rollingDancer.$node, 'toggle');
    rollingDancer.step();
    expect(rollingDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rollingDancer, "step");
      expect(rollingDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rollingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rollingDancer.step.callCount).to.be.equal(2);
    });
  });
});
