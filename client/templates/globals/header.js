Template.header.helpers({
  brandLink() {
    let login = FlowRouter.path( 'login' ),
        index = FlowRouter.path( 'index' );
    // This split is useful if index is behind a login wall. Saving for posterity.
    // return !Meteor.loggingIn() && !Meteor.userId() ? login : index;
    return index;
  },
  isToday: function() {
    let route = FlowRouter.getRouteName();
    let date = FlowRouter.getParam( 'promptPubDate' );
    let today = moment().format('YYYY-MM-DD');

    if( !date ) {
      if( route == "index" ) {
        date = today;
      }
    }

    if( date >= today ) {
      return ' active';
    } else {
      return false;
    }
  },
  isArchive: function() {
    let route = FlowRouter.getRouteName();
    let date = FlowRouter.getParam( 'promptPubDate' );
    let today = moment().format('YYYY-MM-DD');

    if( date ) {
      if( date < today ) {
        return ' active';
      }
    } else if( route == "archive" ) {
      return ' active';
    } else if( route == "index" ) {
      return false;
    }
  }
});

Template.header.events({
  'click .logout' () {
    // Currently, if a user logs out, they get redirected to the login page.
    // TODO: Should just redirect them back to the current route they're on.
    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  }
});
