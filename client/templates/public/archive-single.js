Template.archiveSingle.onCreated( function() {
  var self = this;
  self.autorun( function() {
    let date = FlowRouter.getParam( 'promptPubDate' ),
        promptDate;
    
    if( date ) {
      promptDate = date;
    } else {
      promptDate = moment().format('YYYY-MM-DD');
    }

    self.subscribe('archiveSingle', promptDate);
  });
});

Template.archiveSingle.helpers({
  getWarmups: function() {
    let date = FlowRouter.getParam( 'promptPubDate' ),
        promptDate;

    if( date ) {
      promptDate = date;
    } else {
      promptDate = moment().format('YYYY-MM-DD');
    }

    let warmups = Warmups.find({ 'warmupPubDate': promptDate }, { sort: { likeCount: -1 }});
    if( warmups ) {
      return warmups;
    }
  },
  winnerBG: function() {
    var winner = Warmups.findOne({}, { sort: { likeCount: -1 }});
    var imageURL = winner.imageURL;
    if( imageURL ) {
      return imageURL;
    }
  }
});
