let _triggerModal = ( element ) => {
  element.modal("show");

  // This event fires after the modal has been hidden and css transitions are complete
  element.one("hidden.bs.modal", function() {
    FlowRouter.setQueryParams({ action: null });
  });
}

Template.default.onRendered( function() {
  var instance = Template.instance();
  
  instance.autorun( function() {
    var action = FlowRouter.getQueryParam("action");

    if( action == "submit" ) {
      $('.wd-modal').modal('hide');
      return _triggerModal( $('#submitWarmupModal') );
    } else if( action == "login" ) {
      $('.wd-modal').modal('hide');
      return _triggerModal( $('#loginModal') );
    } else if( action == "signup" ) {
      $('.wd-modal').modal('hide');
      return _triggerModal( $('#signupModal') );
    } else if( action == "resetpwd" ) {
      $('.wd-modal').modal('hide');
      return _triggerModal( $('#resetPasswordModal') );
    } else if( action == "recoverpwd" ) {
      $('.wd-modal').modal('hide');
      return _triggerModal( $('#recoverPasswordModal') );  
    } else {
      FlowRouter.setQueryParams({ action: null });
    }
  });

  $('.prevent-default').click( function(e) {
    e.preventDefault();
  });
});

Template.default.events({
  "click .submit-warmup-trigger": function ( event, template ) {
    FlowRouter.setQueryParams({ 'action': 'submit' });
  },
  "click .login-trigger": function ( event, template ) {
    FlowRouter.setQueryParams({ 'action': 'login' });
  },
  "click .signup-trigger": function ( event, template ) {
    FlowRouter.setQueryParams({ 'action': 'signup' });
  },
  "click .reset-pwd-trigger": function ( event, template ) {
    FlowRouter.setQueryParams({ 'action': 'resetpwd' });
  },
  "click .recover-pwd-trigger": function ( event, template ) {
    FlowRouter.setQueryParams({ 'action': 'recoverpwd' });
  }
});