
// .play() .pause()
// restart = .currentTime
// length of audio file = .duration
// timeupdate to update current time whenever audio .currentTime changes

$(document).ready(function () {
  //////TRACKONE
  $('#one').on('click', function() {
    $('#one').css('background-color', '#ccf2ff');
    $('#fool').get(0).play();
    const file = $('#fool').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#eight').on('click', function() {
    $('#fool').get(0).pause();
  });
  //////TRACKTWO
  $('#two').on('click', function() {
    $('#two').css('background-color', '#ccf2ff');
    $('#ifonly').get(0).play();
    const file = $('#ifonly').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#nine').on('click', function() {
    $('#ifonly').get(0).pause();
  });
  //////TRACKTHREE
  $('#three').on('click', function() {
    $('#three').css('background-color', '#ccf2ff');
    $('#youaremyworld').get(0).play();
    const file = $('#youaremyworld').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#nine').on('click', function() {
    $('#youaremyworld').get(0).pause();
  ///////TRACKFOUR
});$('#four').on('click', function() {
  $('#four').css('background-color', '#ccf2ff');
    $('#windflower').get(0).play();
    const file = $('#windflower').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#ten').on('click', function() {
    $('#windflower').get(0).pause();
  ///////TRACKFIVE
});$('#five').on('click', function() {
  $('#five').css('background-color', '#ccf2ff');
    $('#somewheresomeday').get(0).play();
    const file = $('#somewheresomeday').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#eleven').on('click', function() {
    $('#somewheresomeday').get(0).pause();
  ///////TRACKSIX
});$('#six').on('click', function() {
  $('#six').css('background-color', '#ccf2ff');
    $('#mydestiny').get(0).play();
    const file = $('#mydestiny').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#twelve').on('click', function() {
    $('#mydestiny').get(0).pause();
  ///////TRACKSEVEN
});$('#seven').on('click', function() {
  $('#seven').css('background-color', '#ccf2ff');
    $('#everymoment').get(0).play();
    const file = $('#everymoment').attr('src');
    const track = file.split('/').pop().split('.')[0];
    $('.trackName').html( track );
  });
  $('#twelve').on('click', function() {
    $('#everymoment').get(0).pause();
  });
  ////// RESTART FUNCTION
  $('button').on('click', function() {
    const audio = $('audio');
    for (let i = 0; i < audio.length; i++) {
      audio.get(i).currentTime = 0;
    };

  });


});

  ////// TIMER FUNCTION
  // $('.timer').on('timeupdate', function () {
  //   const audio = $('audio');
  //   for (var i = 0; i < audio.length; i++) {
  //   $('.timer').html( "current second: " + audio.get(i).currentTime);
  //   };
  // });

//   const audio = $('#fool');
//   console.log(audio);
//   $('audio').on('timeupdate', function () {
//     let progress = $('.timer');
//     let value = 0;
//     if (audio.duration === 'Infinity') {
//       value = 100;
//     } else if (audio.currentTime > 0) {
//       value = Math.floor((100 / audio.duration) * $('#fool').get(0)currentTime);
//       timer.stop().animate({'width':value + '%'},500);
//     };
//   });
//
//   const formatTime = function(time) { //Change time format
//    let minutes = Math.floor(time / 60);
//    minutes = (minutes >= 10) ? minutes : "" + minutes;
//    let seconds = Math.floor(time % 60);
//    seconds = (time >= 10) ? seconds : "0" + seconds;
//    return minutes + ":" + seconds;
// };
//
// $('.timer #time').html(formatTime($('#fool').currentTime)); //Set the new timestamp
// $('.timer #total-time').html(formatTime($('#fool').duration)); //Set total timestamp
