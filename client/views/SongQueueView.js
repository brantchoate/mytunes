// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    var that = this;

    this.collection.on('add dequeue', function(){
      this.trigger('updateQueue', this);
    }, this);

    this.collection.on('add', function(){
      this.render();
    }, this);

    this.collection.on('remove', function(){
      this.render();
    }, this);
    this.render();
  },
  render: function() {
    var html = this.collection.map(function(song){
      return new SongQueueEntryView({model: song}).render();
    });
    this.$el.html('<th>Queue</th>').append(html);
  },
  renderEntry: function(entry){
    return new SongQueueEntryView({model: entry});
  }


});
