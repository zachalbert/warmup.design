Template.promptFull.onCreated(function() {
  var self = this;
  self.autorun(function() {
    // If there isn't a date in the route, grab data with today's date
    if(FlowRouter.getParam('promptPubDate'))
      var promptDate = FlowRouter.getParam('promptPubDate');
    else
      var promptDate = moment().format('YYYY-MM-DD');
    self.subscribe('promptByDate', promptDate);
  });
});

Template.promptFull.helpers({
  getPrompt: function() {
    var promptDate = FlowRouter.getParam('promptPubDate');
    var prompt = Prompts.find({});
    return prompt;
  }
});

Template.promptFull.events({
  "click .kill-prompt": function(e) {
    e.preventDefault();
    Prompts.remove(this._id);
  }
});