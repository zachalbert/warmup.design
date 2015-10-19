# Warmup.Design

A daily design warmup to help designers get better at design.

# TODO

Everything, more or less.

* Make `server/fixtures.js` work
* Remove autopublish package and get the right things publishing in `server/publications.js`
* Figure out how to use flow router and flow layout (already included) from (this site)[http://massimilianomarini.com/flowrouter-and-flowlayout-101/].

* If you don't have meteor installed, run `curl https://install.meteor.com/ | sh`
* Clone the repo
* Run `meteor` from the app directory, which will serve the app to http://localhost:3000
* Run `meter mongo` to do database stuff directly

# Dummy data

## A few dummy warmup submissions

db.warmups.insert({ imageURL: "http://www.fillmurray.com/1600/1400", submitter: "Mister Submitter", submitterURL: "http://www.twitter.com/zachalbert", shareCount: 0, likeCount: 0, createdAt: new Date() });
db.warmups.insert({ imageURL: "http://www.fillmurray.com/1602/1402", submitter: "Jolly Face", submitterURL: "http://www.twitter.com/georgebluth", shareCount: 0, likeCount: 0, createdAt: new Date() });
db.warmups.insert({ imageURL: "http://www.fillmurray.com/1604/1404", submitter: "Heisenberg", submitterURL: "http://www.twitter.com/elonmusk", shareCount: 0, likeCount: 0, createdAt: new Date() });

## Some warmup prompts

db.prompts.insert({ promptDate: new Date(), promptText: 'Draw one million "Q"s', prompter: "Pop Pop", prompterURL: "http://www.asdf.com", createdAt: new Date() });
db.prompts.insert({ promptDate: new Date(), promptText: 'Draw one million "G"s', prompter: "Huzzah", prompterURL: "http://www.asdf.com", createdAt: new Date() });
