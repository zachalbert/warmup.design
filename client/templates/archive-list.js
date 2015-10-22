Template.archiveList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    // self.subscribe('', promptDate);
    // Subscribe to all top warmups
    // Subscribe to prompt text
  });
});

Template.archiveSingle.helpers({
  getWarmups: function() {
    var promptDate = FlowRouter.getParam('promptPubDate');
    var warmups = Warmups.find({}, { warmupPubDate: promptDate, sort: { likeCount: -1 }});
    return warmups;
  }
});