Meteor.publish('warmupsByDate', function( dayOfWarmup ) {
  check( dayOfWarmup, String );
  
  var warmup = Warmups.find({
    'warmupPubDate': dayOfWarmup
  });

  if( warmup ) {
    return warmup;
  }

  return this.ready();
});
