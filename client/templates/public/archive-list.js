Template.archiveList.onCreated(function() {
  var self = this;

  self.autorun(function() {
    // TODO: Turn this into a single subscription?
    self.subscribe( 'allPrompts' );
    self.subscribe( 'topWarmups' );
  });
});

Template.archiveList.helpers({
  getPrompts: function() {
    var prompts = Prompts.find({});
    return prompts;
  },
  getWarmup: function(date) {
    var self = this; // Being inside the prompt loop, self refers to the prompt
    var pubDate = self.promptPubDate;
    // var warmupWinner = Warmups.findOne({ warmupPubDate: pubDate }, { sort: { likeCount: -1}});
    var warmupWinner = Warmups.findOne({ warmupPubDate: pubDate });
    return warmupWinner;
  }
});