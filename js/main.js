
// .play() .pause()
// restart = .currentTime
// length of audio file = .duration
// timeupdate to update current time whenever audio .currentTime changes

$(document).ready(function () {
  //////TRACKONE
  $('#one').on('click', function() {
    $('#one').css('background-color', '#ccf2ff'); //changes colour of key when specified song is played
    $('#fool').get(0).play(); //gets audio track and plays wnen specific white key is clicked
    const file = $('#fool').attr('src'); // gets src of audio
    const track = file.split('/').pop().split('.')[0]; //obtains just the track name from src
    $('.trackName').html( track ); //displays track name in browser
  });
  $('#eight').on('click', function() {
    $('#fool').get(0).pause(); // pauses audio track when corresponding black key is clicked
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
      audio.get(i).currentTime = 0; //restarts audio
    };
  });
  ////// TIME FUNCTION
  $('audio').on('timeupdate', function () {
    $('#time').html(formatTime(this.currentTime)); //Set current timestamp
    $('#total-time').html(formatTime(this.duration)); //Set total timestamp
  });

  const formatTime = function(time) { //Change time format
   let minutes = Math.floor(time / 60); //time is in seconds, convert to minutes
   minutes = (minutes >= 10) ? minutes : "" + minutes; //ternary
   let seconds = Math.floor(time % 60);
   seconds = (time >= 10) ? seconds : "0" + seconds;
   return minutes + ":" + seconds;
};

});
