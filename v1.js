Warmups = new Mongo.Collection("warmups");

if (Meteor.isClient) {
  
  Template.body.helpers({

/* dummy data
db.warmups.insert({ imageURL: "http://www.fillmurray.com/600/400", submitter: "Mister Submitter", submitterURL: "http://www.twitter.com/zachalbert", shareCount: 0, likeCount: 0, createdAt: new Date() });
db.warmups.insert({ imageURL: "http://www.fillmurray.com/601/401", submitter: "Jolly Face", submitterURL: "http://www.twitter.com/georgebluth", shareCount: 0, likeCount: 0, createdAt: new Date() });
db.warmups.insert({ imageURL: "http://www.fillmurray.com/602/402", submitter: "Heisenberg", submitterURL: "http://www.twitter.com/elonmusk", shareCount: 0, likeCount: 0, createdAt: new Date() });
*/
    warmups: function () {
      return Warmups.find({});
    }
  });

  Template.warmup.events({
    "click .like-warmup": function(e) {
      e.preventDefault();
      Warmups.update(this._id, {
        $set: {likeCount: this.likeCount + 1}
      });
    },
    "click .share-warmup": function(e) {
      e.preventDefault();
      Warmups.update(this._id, {
        $set: {shareCount: this.shareCount + 1}
      });
    },
    "click .kill-warmup": function(e) {
      e.preventDefault();
      Warmups.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
