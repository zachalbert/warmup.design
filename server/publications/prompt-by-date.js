Meteor.publish('promptByDate', function( dayOfPrompt ) {
  check( dayOfPrompt, String );

  var prompt = Prompts.find({
    'promptPubDate': dayOfPrompt 
  });

  if( prompt ) {
    return prompt;
  }

  return this.ready();
});