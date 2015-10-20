FlowRouter.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('warmups', Meteor.subscribe('allWarmups'));
    this.register('prompts', Meteor.subscribe('promptToday'));
  },
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'warmupsList' });
  },
  name: 'home'
});

FlowRouter.route('/warmup/:postId', {
  subscriptions: function(params, queryParams) {
    this.register('warmup', Meteor.subscribe('singleWarmup', params.postId));
  },
  action: function(params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'singleWarmup' });
  },
  name: 'warmup'
});