Meteor.publish('topWarmups', function() {
  var warmup = Warmups.find({}, {
    sort: { 'likeCount': -1 }
  });

  if( warmup ) {
    return warmup;
  }

  return this.ready();
});