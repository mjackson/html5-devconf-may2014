var User = Ember.Object.extend({
  name: null,
  handle: null,
  displayName: function () {
    return this.get('name') || this.get('handle');
  }.property('name', 'handle')
});

var user = User.create({
  handle: 'edijkstra'
});

alert(user.get('displayName')); // edijkstra

user.set('name', 'Edsger Dijkstra');

alert(user.get('displayName')); // Edsger Dijkstra
