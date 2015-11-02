Template.warmupSingle.onCreated(function() {
  var self = this;

  self.autorun(function() {
    var warmupDate = FlowRouter.getParam('promptPubDate');
    self.subscribe('warmupsByDate', warmupDate);
  });
});

Template.warmupSingle.helpers({
  getWarmup: function() {
    var warmupId = FlowRouter.getParam('postId');
    var warmup = Warmups.findOne({ _id: warmupId });
    return warmup;
  }
});