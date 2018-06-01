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
  this.songs.push(new_song);
};


jukebox.prototype.getSong = function(index){
  var my_song = this.songs[index];
  return my_song;
};

jukebox.prototype.list = function(){
  for (i = 0; i < this.songs.length ; i++){
    console.log("Name is: " + this.songs[i].name);
  }
};

var my_juke = new jukebox();
my_juke.addSong("name1","songs/song1.mp3","img1");
my_juke.addSong("name2","songs/song2.mp3","img2");
my_juke.addSong("name3","songs/song3.mp3","img3");
my_juke.addSong("name4","songs/song4.mp3","img4");
my_juke.addSong("name5","songs/song5.mp3","img5");
my_juke.addSong("name5","songs/song6.mp3","img5");


console.log(my_juke.getSong(0).name);
console.log(my_juke.getSong(0).source);
console.log(my_juke.getSong(0).image);

my_juke.list();


document.getElementById("next").addEventListener("click", function()){
    var song_playing = document.getElementsByTagName("")
}