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
my_juke.addSong("name1","songs/song1.mp3","img1");
my_juke.addSong("name2","songs/song2.mp3","img2");
my_juke.addSong("name3","songs/song3.mp3","img3");
my_juke.addSong("name4","songs/song4.mp3","img4");
my_juke.addSong("name5","songs/song5.mp3","img5");
my_juke.addSong("name5","songs/song6.mp3","img5");

my_juke.list();


function add_func(){
  var my_songs = document.getElementsByTagName("li");
  for (i = 0; i < my_songs.length ; i++){
    my_songs[i].addEventListener("click", function(){
      var my_play = document.getElementById("playing");
    });

  }

}

function play(){
      var audio = document.getElementById("juke");
      audio.load();
      audio.play();};


function add_func(){
  var my_songs = document.getElementsByTagName("li");
  for (i = 0; i < my_songs.length ; i++){
    my_songs[i].addEventListener("click", function(){
    var my_play = document.getElementById("playing");
      //console.log("songs/"+ this.id);
      my_play.setAttribute("src","songs/"+ this.id)
      play();
    });

  };

};

add_func();

document.getElementById("next").addEventListener("click", function(){
    var playing_song = document.getElementById("playing");
    playing_song = playing_song.getAttribute;
    console.log(playing_song);
    var get_song_number = playing_song;
    //console.log(playing_song.setAttribute("src","songs/song"+ this.id));
});
                                                 