Template.promptFull.helpers({
  getPrompt: function() {
    var promptDate = FlowRouter.getParam('promptPubDate');
    var prompt = Prompts.findOne({});
    return prompt;
  },
  previousDate: function() {
    var self = this;
    var currentDate = self.promptPubDate;
    var yesterday = moment(currentDate).subtract(1, 'days').format('YYYY-MM-DD');
    return yesterday;
  },
  futureDate: function() {
    var self = this;
    var currentDate = self.promptPubDate;
    var now = moment().format('YYYY-MM-DD');

    if( currentDate >= now ) {
      return false;
    } else {
      var tomorrow = moment(currentDate).add(1, 'days').format('YYYY-MM-DD');
      return tomorrow;
    }
  }
});

Template.submitModal.events({
  "click .submit-warmup-btn": function (){
    // $('#submitModal').modal('show');
    FlowRouter.setQueryParams({ 'action': 'submit-warmup' });
  }
});