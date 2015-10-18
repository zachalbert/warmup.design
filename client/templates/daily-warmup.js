Template.dailyWarmup.helpers({
  prompts: function() {
    return Prompts.find({}, {limit: 1});
  }
});