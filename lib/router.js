// Home, also, today's warmup
FlowRouter.route('/', {
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'archiveSingle' });
  },
  name: 'home'
});

// Single date page
FlowRouter.route('/archive/:promptPubDate', {
  action: function(params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'archiveSingle' });
  },
  name: 'archiveSingle'
});

// Archive list page
FlowRouter.route('/archive', {
  action: function(params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'archiveList' });
  },
  name: 'archive'
});

// Single warmup view
FlowRouter.route('/warmup/:designer/:postId', {
  action: function(params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'warmupSingle' });
  },
  name: 'warmup'
});

// Profile
FlowRouter.route('/profile', {
  action: function(params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'profile' });
  },
  name: 'profile'
});