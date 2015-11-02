Meteor.methods({
  incrementLike( warmup ) {
    check( warmup, Object );

    try {
      var documentId = Warmup.update( warmup._id, {
        $inc: { 'likeCount': 1 }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
