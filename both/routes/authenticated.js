const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/profile', {
  name: 'profile',
  action() {
    BlazeLayout.render( 'default', { yield: 'profile' } );
  }
});

authenticatedRoutes.route( '/contribute', {
  name: 'contribute',
  action() {
    BlazeLayout.render( 'default', { yield: 'contribute' } );
  }
});
