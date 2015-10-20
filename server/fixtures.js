/* Adds dummy data to db */

var numWarmups = 11;
var numPrompts = 3;

function randomDate(start, end) {  
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomImageParams() {
  var randSize = Math.round((Math.random()*520+480))
  return randSize + '/' + randSize;
}

function randomLetter() {
  var letter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  return letter[Math.round(Math.random()*25)];
}

Meteor.startup(function () {  
  if (Warmups.find().count() === 0) {
    console.log('Adding junk warmups...');

    _(numWarmups).times(function (n) {
      Warmups.insert({
        imageURL: 'http://www.fillmurray.com/' + randomImageParams(),
        submitter: 'Mister Submitter ' + n,
        submitterURL: 'http://www.asdf.com/',
        shareCount: Math.round((Math.random()*25)+1),
        likeCount: Math.round((Math.random()*25)+1),
        createdAt: randomDate(new Date(2015, 0, 1), new Date())
      });
    });
  }

  if (Prompts.find().count() === 0) {
    console.log('Adding junk prompts...');

    _(numPrompts).times(function (n) {
      Prompts.insert({
        promptDate: randomDate(new Date(2015, 0, 1), new Date()), 
        promptText: 'Draw '+ Math.round(Math.random()*15+7) +' "'+ randomLetter() +'"s',
        prompter: "Designer Person",
        prompterURL: "http://www.asdf.com",
        createdAt: randomDate(new Date(2015, 0, 1), new Date())
      });
    });
  }
});