// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %>'
    + '<a href="#" class="remove">Remove</a></td>'),
  events: {
    'click .remove': function(){
      console.log('this');
      this.model.dequeue();
    }
  },
  initialize: function(){

  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
