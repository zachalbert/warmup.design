let startup = () => {
  // Do stuff on client startup

  Session.set( 'redirectAfterLogin', '' );
};

Modules.client.startup = startup;
