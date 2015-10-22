Template.warmupCard.events({
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