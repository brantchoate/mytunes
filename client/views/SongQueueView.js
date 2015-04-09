// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.collection.on('add', function(){
      console.log('add');
      this.render();
    }, this);

    this.collection.on('remove', function(){
      console.log('');
      this.render();
    }, this);

  },
  render: function() {
    this.collection.forEach(this.renderEntry, this);
  },
  renderEntry: function(entry){
    var renderedEntry = new SongQueueEntryView({model: entry});
    return renderedEntry.render();
  }


});
