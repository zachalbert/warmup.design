Template.submitWarmup.events({
    "submit .submit-warmup": function(event) {
      event.preventDefault();

      // Get values from input
      var imageURL = event.target.imageURL.value;
      var submitter = event.target.submitter.value;
      var submitterURL = event.target.submitterURL.value;

      // Insert said values into the collection
      Warmups.insert({
        imageURL: imageURL,
        submitter: submitter,
        submitterURL: submitterURL,
        shareCount: 0,
        likeCount: 0,
        createdAt: new Date() // current time
      });

      // Finally, clear said form to make it ready for new junk
      event.target.imageURL.value = "";
      event.target.submitter.value = "";
      event.target.submitterURL.value = "";
    }
  });