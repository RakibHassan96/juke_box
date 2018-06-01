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
      audio.play();
}


function add_func(){
  var my_songs = document.getElementsByTagName("li");
  for (i = 0; i < my_songs.length ; i++){
    my_songs[i].addEventListener("click", function(){
    var my_play = document.getElementById("playing");
      //console.log("songs/"+ this.id);
      my_play.setAttribute("src","songs/"+ this.id)
      play();
      var my_header = document.getElementById("cur_play");
      my_header.innerText = my_juke.getSong(parseInt((this.id.substring(this.id.length-5,this.id.length-4)))).name;


    });

  };

};

var playing = document.getElementById("juke");

function pauseSong() {
  playing.pause();
}

function playSong() {
  playing.play();
}

add_func();

document.getElementById("next").addEventListener("click", function(){
    var playing_song = document.getElementById("playing");
    var new_song = playing_song;
    playing_song = playing_song.getAttribute("src");
    var parsed_name = playing_song.substr(playing_song.length-5, 1);
    parsed_name = parseInt(parsed_name);

    parsed_name = (++parsed_name % 6);
    new_song.setAttribute("src", "songs/song" + parsed_name + ".mp3");
    console.log(new_song);
    var get_song_number = playing_song;
    play();
});

document.getElementById("prev").addEventListener("click", function(){
    var playing_song = document.getElementById("playing");
    var new_song = playing_song;
    playing_song = playing_song.getAttribute("src");
    var parsed_name = playing_song.substr(playing_song.length-5, 1);
    parsed_name = parseInt(parsed_name);

    if(parsed_name == 0){
        parsed_name = 5;
    }
    else{
        parsed_name--;
    }
    new_song.setAttribute("src", "songs/song" + parsed_name + ".mp3");
    console.log(new_song);
    var get_song_number = playing_song;
    play();
});
