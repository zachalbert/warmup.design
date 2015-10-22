Template.warmupSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    // Grab the post ID from the URL
    var warmupId = FlowRouter.getParam('postId');
    self.subscribe('warmupSingle', warmupId);
  });
});

Template.warmupSingle.helpers({
  getWarmup: function() {
    var warmup = Warmups.findOne({});
    return warmup;
  }
});