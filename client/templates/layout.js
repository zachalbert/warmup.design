// Call this like so: {{formatDateFull mongoFieldName}}
Template.registerHelper('formatDateFull', function(context, options) {
  if(context)
    return moment(context).format('MMMM Do, YYYY');
});

Template.registerHelper('formatDate', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YYYY');
});