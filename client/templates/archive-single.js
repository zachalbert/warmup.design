Template.archiveSingle.onCreated(function() {
  var self = this;
  var param = FlowRouter.getParam('promptPubDate');

  self.autorun(function() {
    // If there isn't a date in the route, grab data with today's date
    if(param) {
      var promptDate = param;
    } else {
      var promptDate = moment().format('YYYY-MM-DD');
    }
    
    self.subscribe('warmupsByDate', promptDate);
  });
});

Template.archiveSingle.helpers({
  getWarmups: function() {
    var promptDate = FlowRouter.getParam('promptPubDate');
    var warmups = Warmups.find({}, { warmupPubDate: promptDate, sort: { likeCount: -1 }});
    return warmups;
  }
});