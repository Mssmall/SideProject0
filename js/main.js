
// .play() .pause()
// restart = .currentTime
// length of audio file = .duration
// timeupdate to update current time whenever audio .currentTime changes

// let song = $('audio')
//
// let song1 = $('#fool')
// console.log(song1);
// let song2 = document.getElementById('fool')
// console.log(song2);

// const playSound = function (file) {
  // let audFool = new Audio(file);
  // audFool.play();
// }

$(document).ready(function () {
  $('#one').on('click', function() {
    $('#fool').get(0).play();
  });
  $('#eight').on('click', function() {
    $('#fool').get(0).pause();
  });
  $('#two').on('click', function() {
    $('#ifonly').get(0).play();
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  });
  $('.restart').on('click', function() {
    const audio = $('audio');
    for (let i = 0; i < audio.length; i++) {
      audio.get(i).currentTime = 0;
    };

  });




});


// $.each($('audio'), function () {
//   $(this).stop();
// });
