const publicRedirect = () => {
  if ( Meteor.userId() ) {
    FlowRouter.go( 'index' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'archiveSingle' } );
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

publicRoutes.route( '/archive/:promptPubDate', {
  name: 'archiveSingle',
  action() {
    BlazeLayout.render( 'default', { yield: 'archiveSingle' } );
  }
});

publicRoutes.route( '/archive', {
  name: 'archive',
  action() {
    BlazeLayout.render( 'default', { yield: 'archiveList' } );
  }
});

// TODO: Refactor to be /username/date
publicRoutes.route( '/:promptPubDate/:postId', {
  name: 'warmupSingle',
  action() {
    BlazeLayout.render( 'default', { yield: 'warmupSingle' } );
  }
});