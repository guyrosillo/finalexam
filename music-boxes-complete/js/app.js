$(document).ready(function () {
  var cNote = document.getElementById('cAudio');
  var dNote = document.getElementById('dAudio');
  var eNote = document.getElementById('eAudio');
  var fNote = document.getElementById('fAudio');
  var gNote = document.getElementById('gAudio');
  var aNote = document.getElementById('aAudio');
  var bNote = document.getElementById('bAudio');

  $('#c').mousedown(function(){
      cNote.currentTime = 0;
      cNote.play();
  });

  $('#d').mousedown(function(){
      dNote.currentTime = 0;
      dNote.play();
  });

  $('#e').mousedown(function(){
      eNote.currentTime = 0;
      eNote.play();
  });

  $('#f').mousedown(function(){
      fNote.currentTime = 0;
      fNote.play();
  });

  $('#g').mousedown(function(){
      gNote.currentTime = 0;
      gNote.play();
  });

  $('#a').mousedown(function(){
      aNote.currentTime = 0;
      aNote.play();
  });

  $('#b').mousedown(function(){
      bNote.currentTime = 0;
      bNote.play();
  });

  $("#c_major_chord").mousedown(function() {
    cNote.currentTime = 0;
    cNote.play();

    eNote.currentTime = 0;
    eNote.play();

    gNote.currentTime = 0;
    gNote.play();
  });

  $("#g_major_chord").mousedown(function() {
    gNote.currentTime = 0;
    gNote.play();

    bNote.currentTime = 0;
    bNote.play();

    dNote.currentTime = 0;
    dNote.play();
  });

});
