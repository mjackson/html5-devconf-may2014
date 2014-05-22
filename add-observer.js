var User = Ember.Object.extend({
  name: null
});

var user = User.create();

user.addObserver('name', function () {
  alert(user.get('name'));
});

user.set('name', 'Michael Jackson');
