
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
  //////TRACKONE
  $('#one').on('click', function() {
    $('#fool').get(0).play();
    const file = $('#fool').attr('src');
    const track = file.split('/').pop().split('.')[0];
    // console.log( track );
    $('.trackName').html( track );
  });
  $('#eight').on('click', function() {
    $('#fool').get(0).pause();
  });
  //////TRACKTWO
  $('#two').on('click', function() {
    $('#ifonly').get(0).play();
    const file = $('#ifonly').attr('src');
    const track = file.split('/').pop().split('.')[0];
    console.log( track );
    $('.trackName').html( track );
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  });
  //////TRACKTHREE
  $('#three').on('click', function() {
    $('#youaremyworld').get(0).play();
    const file = $('#youaremyworld').attr('src');
    const track = file.split('/').pop().split('.')[0];
    // console.log( track );
  });
  $('#nine').on('click', function() {
    $('#youaremyworld').get(0).pause();
  ///////TRACKFOUR
  });$('#two').on('click', function() {
    $('#ifonly').get(0).play();
    const file = $('#ifonly').attr('src');
    const track = file.split('/').pop().split('.')[0];
    // console.log( track );
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  ///////TRACKFIVE
  });$('#two').on('click', function() {
    $('#ifonly').get(0).play();
    const file = $('#ifonly').attr('src');
    const track = file.split('/').pop().split('.')[0];
    // console.log( track );
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  ///////TRACKSIX
  });$('#two').on('click', function() {
    $('#ifonly').get(0).play();
    const file = $('#ifonly').attr('src');
    const track = file.split('/').pop().split('.')[0];
    // console.log( track );
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  ///////TRACKSEVEN
  });$('#two').on('click', function() {
    $('#ifonly').get(0).play();
    const file = $('#ifonly').attr('src');
    const track = file.split('/').pop().split('.')[0];
    // console.log( track );
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  });
  ////// RESTART FUNCTION
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
