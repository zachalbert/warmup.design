Template.archiveSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    // If there isn't a date in the route, grab data with today's date
    if(FlowRouter.getParam('promptPubDate'))
      var promptDate = FlowRouter.getParam('promptPubDate');
    else
      var promptDate = moment().format('YYYY-MM-DD');
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

Template.archiveSingle.events({
  "click .like-warmup": function(e) {
    e.preventDefault();
    Warmups.update(this._id, {
      $set: {likeCount: this.likeCount + 1}
    });
    Session.set('lastLike', this.submitter);
    var lastLiked = Session.get('lastLike');
    console.log(lastLiked);
  },
  "click .share-warmup": function(e) {
    e.preventDefault();
    Warmups.update(this._id, {
      $set: {shareCount: this.shareCount + 1}
    });
  },
  "click .kill-warmup": function(e) {
    e.preventDefault();
    console.log(this._id);
    Warmups.remove(this._id);
  }
});