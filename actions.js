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
my_juke.addSong("I don't even speak spanish lol - XXXTENTACION","k2","img");
my_juke.addSong("Never Gonna Give You Up - Rick Astley","k22","img2");
my_juke.addSong("Delicate - Taylor Swift","k23","img3");
my_juke.addSong("Diamonds (Remix) - Kanye West","k24","img4");
my_juke.addSong("LOVE. - Kendrick Lamar ft. Zacari","k25","img5");
my_juke.addSong("Baby - Justin Bieber","k25","img5");


console.log(my_juke.getSong(0).name);
console.log(my_juke.getSong(0).source);
console.log(my_juke.getSong(0).image);

my_juke.list();

var playing = document.getElementById("juke");

function pauseSong() {
  playing.pause();
}

function playSong() {
  playing.play();
}

function add_func(){
  var my_songs = document.getElementsByTagName("li");
  console.log(my_songs[0].id);
  for (i = 0; i < my_songs.length ; i++){
    my_songs[i].addEventListener("click", function(){
    var my_play = document.getElementById("playing");
      //console.log("songs/"+ this.id);
      my_play.setAttribute("src","songs/"+ this.id)
      console.log(my_play.src);
    });

  };

};

add_func();
