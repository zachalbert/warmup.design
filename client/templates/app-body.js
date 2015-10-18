// Helpers are in JSON
Template.body.helpers({

  warmups: function () {
    return Warmups.find({}, {sort: {likeCount: -1}});
  }
});
