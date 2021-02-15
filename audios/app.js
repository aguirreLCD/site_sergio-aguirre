const app = () => {

  const song = document.querySelector(".song");
  const play = document.querySelector(".play");

  const replay = document.querySelector(".replay");

  const outline = document.querySelector(".moving-outline circle");
  const audio = document.querySelector(".audio-container audio");

// Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

// Time Display h3
  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");

// Get the length of the outline
  const outlineLength = outline.getTotalLength();
  // console.log(outlineLength);

// Duration 
  let fakeDuration = 60;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

// Pick different sounds
  sounds.forEach(sound => {
    sound.addEventListener("click", function() {
      song.src = this.getAttribute("data-sound");
      // audio.src = this.getAttribute("data-sound");
      checkPlaying(song);
    });
  });

// Play sound
  play.addEventListener("click", function() {
    checkPlaying(song);
  });

// Replay
  replay.addEventListener("click", function() {
    restartSong(song);
  });

const restartSong = (song) => {
  let currentTime = song.currentTime;
  song.currentTime = 0;
  console.log("bella ciao");
};

// Select sound
  timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    });
  });

// Create a function specific to stop and play the sounds
  const checkPlaying = song => {
    if(song.paused) {
      song.play();
      audio.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      audio.pause();
      play.src = "./svg/play.svg";
    }
  };

// Animate the circle
  song.ontimeupdate = function() {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      audio.pause();
    };
  };

};

app();