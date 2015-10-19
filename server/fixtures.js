/* Adds dummy data to db */

var numWarmups = 5;

function randomDate(start, end) {  
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomImageParams() {
  return Math.round((Math.random()*1500+500)) + '/' + Math.round((Math.random()*1500+500));
}

Meteor.startup(function () {  
  if (Warmups.find().count() === 0) {
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
});