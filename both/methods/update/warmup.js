Meteor.methods({
  incrementLike( warmup ) {
    check( warmup, Object );
    if( !Meteor.userId() ) {
      throw new Meteor.Error("not-authorized");
    }

    try {
      var documentId = Warmups.update( warmup._id, {
        $inc: { 'likeCount': 1 }
      });

      return documentId;

    } catch( exception ) {
      return exception;
    }
  }
});
