Meteor.publish('allWarmups', function() {
  return Warmups.find({});
});

Meteor.publish('singleWarmup', function(postId) {
  return Warmups.find({ _id: postId });
});

Meteor.publish('promptToday', function(postId) {
  return Prompts.find({});
});