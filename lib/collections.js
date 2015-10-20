// Warmups submitted by people
Warmups = new Mongo.Collection("warmups");

// Warmup prompts submitted by people
Prompts = new Mongo.Collection("prompts");




// Allow all the things!!!!

Warmups.allow({
  'insert': function (userId, doc) {
    return true; 
  },
  'update': function (userId, doc) {
    return true;
  },
  'remove': function (userId, doc) {
    return true;
  }
});

Prompts.allow({
  'insert': function (userId, doc) {
    return true; 
  },
  'update': function (userId, doc) {
    return true;
  },
  'remove': function (userId, doc) {
    return true;
  }
});