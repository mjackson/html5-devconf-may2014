var Conversation = Ember.Object.extend({
  currentUserId: null,
  messages: null,
  sentMessages: Ember.computed.filter('messages', function (message) {
    return message.senderId === this.get('currentUserId');
  })
});

var conversation = Conversation.create({
  currentUserId: 'a',
  messages: [
    { senderId: 'a', text: 'Hello friend!' },
    { senderId: 'b', text: 'Hi!' },
    { senderId: 'b', text: "Let's do lunch." },
    { senderId: 'a', text: 'Sounds good.' }
  ]
});

conversation.get('sentMessages').length; // 2

conversation.get('messages').addObject({
  senderId: 'a', text: 'Should be there around noon.'
});

conversation.get('sentMessages').length; // 3
