Meteor.publish('archiveList', function() {

  var data = [
    // TODO: Can prune both of these queries to not get all the data.
    Prompts.find({}, {
      sort: {
        'promptPubDate': -1
      },
      fields: {
        'promptText': 1,
        'promptDate': 1
      }
    }),
    Warmups.find({}, {
      sort: { 'likeCount': -1 },
      limit: 1
    })
  ];

  if( data ) {
    return data;
  }

  return this.ready();
});
