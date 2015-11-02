Prompts = new Meteor.Collection("prompts");

Prompts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Prompts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let PromptSchema = new SimpleSchema({
  "promptPubDate": {
    type: String,
    label: "Date the prompt will be published."
  },
  "promptText": {
    type: String,
    label: "Text of the prompt."
  },
  "promptAuthor": {
    type: String,
    label: "Author of the prompt."
  },
  "promptAuthorURL": {
    type: String,
    label: "URL the author's name should be linked to."
  },
  "createdAt": {
    type: Date,
    label: "Time prompted was added.",
    autoValue: function() {
      if( this.isInsert ) {
        return new Date();
      }
    }
  }
});

Prompts.attachSchema( PromptSchema );
