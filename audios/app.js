const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");

// Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

// Pick different sounds
  sounds.forEach(sound => {
    sound.addEventListener("click", function() {
      song.src = this.getAttribute("data-sound");
      checkPlaying(song);
    });
  });

// Play sound
  play.addEventListener("click", function() {
    checkPlaying(song);
  });

// Create a function specific to stop and play the sounds
  const checkPlaying = song => {
    if(song.paused) {
      song.play();
    } else {
      song.pause();
    }
  };
};

app();