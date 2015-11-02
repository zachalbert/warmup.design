Meteor.publish('archiveSingle', function( date ) {
  check( date, String );

  var data = [
    Prompts.find({ 'promptPubDate': date }),
    Warmups.find({ 'warmupPubDate': date })
  ];

  if( data ) {
    return data;
  }

  return this.ready();
});
