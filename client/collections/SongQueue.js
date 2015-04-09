// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(){
      if(this.models.length === 1 )
        this.playFirst();
    }, this);

    this.on('ended', function(){
      this.shift();
      if(this.models.length !== 0)
        this.playFirst();
    }, this);

  },

  playFirst: function(){

    if(this.models)
      this.models[0].play();
  }
});
