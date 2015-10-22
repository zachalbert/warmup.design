Template.warmupSingle.onCreated(function() {
  var self = this;
  var warmupId = FlowRouter.getParam('postId');

  self.autorun(function() {
    // Grab the post ID from the URL
    self.subscribe('warmupSingle', warmupId);
  });
});

Template.warmupSingle.helpers({
  getWarmups: function() {
    var warmup = Warmups.find({}, { limit: 1 });
    return warmup;
  }
});



// getWarmups: function() {
//     var promptDate = FlowRouter.getParam('promptPubDate');
//     var warmups = Warmups.find({}, { warmupPubDate: promptDate, sort: { likeCount: -1 }});
//     return warmups;
//   }
// });