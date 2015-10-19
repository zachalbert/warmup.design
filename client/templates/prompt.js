Template.dailyWarmup.helpers({
  promptDateFormatted: function() {
    return moment(this.promptDate).format('MM/DD/YYYY');
  }
});

Template.dailyWarmup.events({
  "click .kill-prompt": function(e) {
    e.preventDefault();
    Prompts.remove(this._id);
  }
});