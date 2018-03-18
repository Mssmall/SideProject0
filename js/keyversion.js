$(document).ready(function () {

  const playSound = function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function from running if there is no keydown match with audio datakey in code
    audio.currentTime = 0; //rewind to start
    audio.play();
    const file = document.querySelector(`audio[data-key="${e.keyCode}"]`).src; // getting src
    const track = file.split('/').pop().split('.').shift().split('-'); //obtains just the track name from src
    $('.trackName').html( track ); //displays track name in browser
    key.classList.add('playing'); // JQuery: key.addClass('playing')
  }

  const removeTransition = function(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

//////// stops two songs from playing at same time
    document.addEventListener('play', function(e){
      var audios = document.getElementsByTagName('audio');
      for (let i = 0, len = audios.length; i < len; i++){
        if (audios[i] != e.target) {
            audios[i].pause();
        }

      }
    }, true);

  ////// RESTART FUNCTION
  $('.restart').on('click', function() {
    const audio = $('audio');
    for (let i = 0; i < audio.length; i++) {
      audio.get(i).currentTime = 0; //restarts audio
    };
  });
  ////// TIME FUNCTION
  $('audio').on('timeupdate', function () {
    $('#time').html(formatTime(this.currentTime)); //Set current timestamp
    $('#total-time').html(formatTime(this.duration)); //Set total timestamp
    let keys = $('.keys');
      if (this.currentTime === this.duration) { //turns key back to white when song finishes playing
        keys.css('background-color', 'white');
      };
  });

  const formatTime = function(time) { //Change time format
   let minutes = Math.floor(time / 60); //time is in seconds, convert to minutes
   minutes = (minutes >= 10) ? minutes : "" + minutes; //ternary
   let seconds = Math.floor(time % 60);
   seconds = (time >= 10) ? seconds : "0" + seconds;
   return minutes + ":" + seconds;
  };

});

////// STOP FUNCTION
// $('.stop').keyup(function() {
//   const audio = $('audio');
//   for (let i = 0; i < audio.length; i++) {
//     let oldSrc = audio.src;
//     audio[i].src = "";
//   };
// })
