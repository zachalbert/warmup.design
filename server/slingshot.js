Slingshot.fileRestrictions( "uploadToAmazonS3", {
  allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
  maxSize: 1.5 * 1024 * 1024
});

Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
  bucket: "warmup-design",
  region: "us-west-1",
  acl: "public-read",
  authorize: function() {
    let userFileCount = Files.find({ "userId": this.userId }).count();
    return userFileCount < 15 ? true : false;
  },
  key: function( file ) {
    var user = Meteor.users.findOne( this.userId );
    // return user.emails[0].address + '/' + file.name;
    return user.userId + "/" + file.name;
  }
});