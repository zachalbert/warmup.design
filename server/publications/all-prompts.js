Meteor.publish('allPrompts', function() {
  var prompts = Prompts.find({}, {
    fields: {
      'promptText': 1,
      'promptPubDate': 1 
    }
  });

  if( prompts ) {
    return prompts;
  }

  return this.ready();
});
