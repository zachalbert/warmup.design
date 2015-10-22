Template.warmupCard.helpers({
  hasCrown: function() {
    var self = this;
    if(self.likeWinner) {
      return true;
    }
  }
});

Template.warmupCard.events({
  "click .like-warmup": function(e) {
    e.preventDefault();
    var self = this;

    /* TODO: Currently, if viewing a single warmup view, and a card is liked 
    enough times to turn it into a winner, I can't figure out how to check the
    likeCount of other warmups with the same pub date. If possible, then we can 
    optionally assign the proper likeWinner flag to this particular warmup */
    // Get other warmups by the date of this id, then flip likeWinner flag
    // var warmupDate = self.warmupPubDate;
    // console.log('date of warmup is ' +warmupDate);
    // var winnerForDay = Warmups.find({}, { warmupPubDate: warmupDate }).fetch();
    // console.log(winnerForDay)

    Warmups.update(self._id, {
      $set: {likeCount: self.likeCount + 1}
      // if > current winner, update
    });
  },
  "click .share-warmup": function(e) {
    e.preventDefault();
    var self = this;
    Warmups.update(self._id, {
      $set: {shareCount: self.shareCount + 1}
    });
  }
});