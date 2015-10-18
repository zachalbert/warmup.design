// Helpers are in JSON
Template.body.helpers({

  warmups: function () {
    return Warmups.find({}, {sort: {likeCount: -1}});
  }
});

// Call this like so: {{formatDateFull mongoFieldName}}
UI.registerHelper('formatDateFull', function(context, options) {
  if(context)
    return moment(context).format('MMMM Do, YYYY');
});

UI.registerHelper('formatDate', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YYYY');
});