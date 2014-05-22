var Chat = require('models/chat');

var ChatRoute = Ember.Route.extend({

  beforeModel: function (transition) {
    if (!isSignedIn())
      this.redirectToSignIn(transition);
  },

  redirectToSignIn: function (transition) {
    // Save the attempted transition so we can retry it after signin.
    this.controllerFor('signin').set('attemptedTransition', transition);
    this.transitionTo('signin');
  },

  model: function (params) {
    return Chat.findById(params.chat_id);
  },

  actions: {
    willTransition: function () {
      enqueueTransitionAnimation('slideRight');
    }
  }

});
