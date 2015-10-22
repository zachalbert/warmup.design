// Return all warmups for given date
Meteor.publish('warmupsByDate', function(dayOfWarmup) {
  return Warmups.find({ warmupPubDate: dayOfWarmup });
});

// // Return only top warmups for each day
// Meteor.publish('allTopWarmups', function() {
//   return Warmups.find({}, {limit: 1, fields: { imageURL: 1, createdAt: 1 }});
// });

// Return a single warmup, for a warmup detail view
Meteor.publish('warmupSingle', function(postId) {
  return Warmups.find({ _id: postId });
});

// Return all prompt data for a given day
Meteor.publish('promptByDate', function(dayOfPrompt) {
  return Prompts.find({ promptPubDate: dayOfPrompt });
});

// // Return just prompt text & date for all days
// Meteor.publish('allPrompts', function() {
//   return Prompts.find({}, { fields: { promptText: 1, promptDate: 1 }});
// });