function jukebox(){
    this.songs = [];
};


function song(name, source, image) {
    this.name = name;
    this.source = source;
    this.image = image;
};

jukebox.prototype.addSong = function(name, source, image){
  var new_song = new song(name, source, image);
  this.jukebox.push(new_song);
};


jukebox.prototype.getSong = function(index){
  var my_song = this.jukebox[index];
  return my_song;
};

jukebox.prototype.list = function(){
  for (i = 0; i < this.jukebox.length ; i++){
    console.log("Name is: " + this.jukebox[i].name);
  }
};
