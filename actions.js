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
  var my_list = document.getElementById("song_list");
  for (i = 0; i < this.songs.length ; i++){
    var node = document.createElement("li")
    var temp_li = document.createTextNode(this.songs[i].name);
    node.appendChild(temp_li);
    my_list.appendChild(node);
    document.getElementsByTagName("li")[i].setAttribute("id", "song"+i+".mp3");
  }
};

var my_juke = new jukebox();
my_juke.addSong("name","k2","img");
my_juke.addSong("name2","k22","img2");
my_juke.addSong("name3","k23","img3");
my_juke.addSong("name4","k24","img4");
my_juke.addSong("name5","k25","img5");



console.log(my_juke.getSong(0).name);
console.log(my_juke.getSong(0).source);
console.log(my_juke.getSong(0).image);

my_juke.list();
