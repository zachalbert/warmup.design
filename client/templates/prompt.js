Template.dailyWarmup.helpers({
  promptDateFormatted: function() {
    return moment(this.promptDate).format('MM/DD/YYYY');
  }
});