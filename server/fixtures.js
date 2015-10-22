/* Adds dummy data to db */

var numPrompts = 15;
var numWarmups = 3;

function randomImageSize() {
  var randSize = Math.round((Math.random()*520+480))
  return randSize + '/' + randSize;
}

function randomLetter() {
  var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return letter[Math.round(Math.random()*25)];
}

Meteor.startup(function () {  
  if (Prompts.find().count() === 0) {
    console.log('Adding '+numPrompts+' prompts...');

    _(numPrompts).times(function(n) {
      var promptPubDate = moment().subtract(n, 'days').format('YYYY-MM-DD');

      Prompts.insert({
        promptPubDate: promptPubDate,
        promptText: 'Draw '+ Math.round(Math.random()*42+7) +' "'+ randomLetter() +'"s',
        promptAuthor: Fake.user({ fields: ['fullname'] }),
        promptAuthorURL: "http://www.asdf.com",
        createdAt: new Date()
      });

      // Add some warmup submissions
      _(numWarmups).times(function (n) {        
        Warmups.insert({
          warmupPubDate: promptPubDate,
          imageURL: 'http://www.p-hold.com/' + randomImageSize(),
          designer: Fake.user({ fields: ['fullname'] }),
          designerURL: "http://www.asdf.com/",
          shareCount: Math.round((Math.random()*25)+1),
          likeCount: Math.round((Math.random()*25)+1),
          likeWinner: false,
          promptAuthorWinner: false,
          createdAt: new Date()
        });
      });

    });

    console.log('Prompts + Warmups added!');
  }
});