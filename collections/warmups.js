Warmups = new Meteor.Collection("warmups");

Warmups.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Warmups.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let WarmupSchema = new SimpleSchema({
  "warmupPubDate": {
    type: String,
    label: "Date the warmup was added."
  },
  "imageURL": {
    type: String,
    label: "Location of the image."
  },
  "designer": {
    type: String,
    label: "Person who submitted the warmup."
  },
  "designerURL": {
    type: String,
    label: "URL of the designer."
  },
  "shareCount": {
    type: Number,
    label: "Number of times shared."
  },
  "likeCount": {
    type: Number,
    label: "Number of times liked."
  },
  "createdAt": {
    type: Date,
    label: "Time the warmup was submitted.",
    autoValue: function() {
      if( this.isInsert ) {
        return new Date();
      }
    }
  }
});

Warmups.attachSchema( WarmupSchema );