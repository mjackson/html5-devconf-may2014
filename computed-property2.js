var Conversation = Ember.Object.extend({
  messages: null,
  messageCount: Ember.computed.oneWay('messages.length'),
  hasMessages: Ember.computed.bool('messageCount')
});

var conversation = Conversation.create({
  messages: [ 'Hello', 'HTML5', 'DevConf' ]
});

conversation.get('messageCount'); // 3
conversation.get('hasMessages'); // true

conversation.set('messages', []);

conversation.get('messageCount'); // 0
conversation.get('hasMessages'); // false
