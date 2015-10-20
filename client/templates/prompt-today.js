Template.promptToday.helpers({
  getPrompt: function() {
    return Prompts.find({}, { limit: 1, sort: { promptDate: -1 } });
  }
});

Template.promptToday.events({
  "click .kill-prompt": function(e) {
    e.preventDefault();
    Prompts.remove(this._id);
  }
});