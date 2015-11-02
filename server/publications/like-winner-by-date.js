Meteor.publish('likeWinnerByDate', function( dayOfWarmup ) {
  check( dayOfWarmup, String );

  var warmup = Warmups.findOne({ 
    'warmupPubDate': dayOfWarmup
  }, {
    sort: { 'likeCount': -1 }, 
    fields: { '_id': 1 }
  });

  if( warmup ) {
    return warmup;
  }

  return this.ready();
});