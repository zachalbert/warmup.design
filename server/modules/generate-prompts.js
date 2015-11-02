let _randomImageUrl = () => {
  let randSize = Math.round((Math.random()*520+480))
  let url = "http://www.loremflickr.com/" + randSize + "/" + randSize + "/typography";
  return url;
};

let _randomNumber = ( min, max ) => {
  return Math.round( ( Math.random() * max ) + min );
}

let generatePrompts = () => {
  let fakePromptCount = 42,
      fakeWarmupCount = 9,
      promptsExist    = _checkIfPromptsExist( fakePromptCount );

  if ( !promptsExist ) {
    _createPrompts( _generateFakePrompts( fakePromptCount, fakeWarmupCount ) );
  }
};

let _checkIfPromptsExist = ( count ) => {
  let promptCount = Prompts.find().count();
  return promptCount < count ? false : true;
};

let _createPrompts = ( prompts ) => {
  for ( let i = 0; i < prompts.length; i++ ) {
    let prompt       = prompts[ i ],
        promptExists = _checkIfPromptExists( prompt.text );

    if ( !promptExists ) {
      _createPrompt( prompt );
    }
  }
};

let _checkIfPromptExists = ( prompt ) => {
  return Prompts.findOne( { 'prompt.text': prompt } );
};

let _createPrompt = ( prompt ) => {
  Prompts.insert({
    promptPubDate: prompt.date,
    promptText: prompt.text,
    promptAuthor: prompt.author.fullname,
    promptAuthorEmail: prompt.author.email,
    promptAuthorURL: prompt.author.url,
    createdAt: new Date()
  });
};

let _generateFakePrompts = ( pCount, wCount ) => {
  let prompts   = [],
      warmups   = [],
      startDate = moment().add(10, 'days');

  for ( let i = 0; i < pCount; i++ ) {
    let date = moment(startDate).subtract(i, 'days').format('YYYY-MM-DD');

    prompts.push({
      date: date,
      text: faker.lorem.sentence(),
      author: { 
        first: faker.name.firstName(), 
        last: faker.name.lastName(), 
        fullname: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        url: faker.internet.url()
      }
    });

    for ( let j = 0; j < wCount; j++ ) {
      Warmups.insert({
        warmupPubDate: date,
        imageURL: _randomImageUrl(),
        designer: faker.name.firstName() + ' ' + faker.name.lastName(),
        designerEmail: faker.internet.email(),
        designerURL: faker.internet.url(),
        shareCount: _randomNumber(0, 42),
        likeCount: _randomNumber(0, 99),
        createdAt: new Date()
      });
    }
  }

  return prompts;
};

Modules.server.generatePrompts = generatePrompts;