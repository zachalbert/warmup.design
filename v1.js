Warmups = new Mongo.Collection("warmups");

if (Meteor.isClient) {
  
  Template.body.helpers({

/* dummy data
db.warmups.insert({ imageURL: "http://www.fillmurray.com/1600/1400", submitter: "Mister Submitter", submitterURL: "http://www.twitter.com/zachalbert", shareCount: 0, likeCount: 0, createdAt: new Date() });
db.warmups.insert({ imageURL: "http://www.fillmurray.com/1602/1402", submitter: "Jolly Face", submitterURL: "http://www.twitter.com/georgebluth", shareCount: 0, likeCount: 0, createdAt: new Date() });
db.warmups.insert({ imageURL: "http://www.fillmurray.com/1604/1404", submitter: "Heisenberg", submitterURL: "http://www.twitter.com/elonmusk", shareCount: 0, likeCount: 0, createdAt: new Date() });
*/
    warmups: function () {
      return Warmups.find({}, {sort: {likeCount: -1}});
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

  Template.submitWarmup.events({
    "submit .submit-warmup": function(event) {
      event.preventDefault();

      // Get values from input
      var imageURL = event.target.imageURL.value;
      var submitter = event.target.submitter.value;
      var submitterURL = event.target.submitterURL.value;

      // Insert said values into the collection
      Warmups.insert({
        imageURL: imageURL,
        submitter: submitter,
        submitterURL: submitterURL,
        shareCount: 0,
        likeCount: 0,
        createdAt: new Date() // current time
      });

      // Finally, clear said form to make it ready for new junk
      event.target.imageURL.value = "";
      event.target.submitter.value = "";
      event.target.submitterURL.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
