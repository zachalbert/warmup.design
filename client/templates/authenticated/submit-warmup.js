Template.submitWarmup.events({
  "submit .submit-warmup": function(event) {
      event.preventDefault();

      // If user is logged in...
      // Get values from input
      var imageURL = event.target.imageURL.value;
      var designer = event.target.designer.value;
      var designerURL = event.target.designerURL.value;
      var forPrompt = Prompts.findOne({}).promptPubDate;
      
      // Insert said values into the collection
      Meteor.call('addWarmup', forPrompt, imageURL, designer, designerURL);

      // Finally, clear said form to make it ready for new junk
      event.target.imageURL.value = "";
      event.target.designer.value = "";
      event.target.designerURL.value = "";
    }
  });