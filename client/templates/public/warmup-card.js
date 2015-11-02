Template.warmupCard.helpers({
  hasCrown: function() {
    let self = this;
    if(self.likeWinner) {
      return true;
    }
  },
  trianglify: function( imageURL ) {
    let self = this;

    let urlChunks = imageURL.split(".com/");
    let numberChunks = urlChunks[1].split("/");
    let dimensions = numberChunks[0];

    let tag = `<span id="${ self._id }" class="image-loading-bg"></span>`;
    
    // let target = document.getElementById( '#' + self._id );
    // console.log(target);
    // var dimensions = target.getClientRects()[0];
    // var pattern = Trianglify({
    //     width: dimensions.width, 
    //     height: dimensions.height
    // });
    // target.style['background-image'] = 'url(' + pattern.png() + ')';

    return tag;
  }
});

Template.warmupCard.events({
  "click .like-warmup": function(e) {
    e.preventDefault();
    let self = this;
    
    // If user is logged in, like.
    Meteor.call( 'incrementLike', self );
  },
  "click .share-warmup": function(e) {
    e.preventDefault();
    let self = this;
    Warmups.update(self._id, {
      $inc: {shareCount: 1}
    });
  }
});