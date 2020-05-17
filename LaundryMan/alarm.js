$(document).ready(function(){
  states = [false, false, false, false, false, false, false];
  $('.ui.dropdown')
  .dropdown();
  $('.ui.accordion')
  .accordion();
  //True meaning button is clicked
  //False meaning the opposite
  function checkStates () {
      for (i = 0; i < states.length; i++) {
          if (states[i]) {
              return true;
          }
      }
      return false;
  }
  function findIndex (j) {
      for (i = 0; i < states.length; i++) {
          if (states[i] && i != j) {
              return i;
          }
      }
      return -1;
  }
  
  //True meaning button is clicked
  //False meaning the opposite
  $("#mon").on("click", (function() {
      if (states[0] == true) {
          $(this).css("background-color", "#35B3FA");
          states[0] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[0] = true;
      }
      
      if (checkStates()) {
          var i = findIndex(0);
          if (i == 1) {           $("#tue").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 2) {      $("#wed").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 3) {      $("#thu").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 4) {      $("#fri").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 5) {      $("#sat").css("background-color", "#35B3FA"); states[i] = false; }
          else {                  $("#sun").css("background-color", "#35B3FA"); states[i] = false; }
      }

  }));

  $("#tue").on("click", (function() {
      if (states[1] == true) {
          $(this).css("background-color", "#35B3FA");
          states[1] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[1] = true;
      }
      if (checkStates()) {
          var i = findIndex(1);
          if (i == 0) {           $("#mon").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 2) {      $("#wed").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 3) {      $("#thu").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 4) {      $("#fri").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 5) {      $("#sat").css("background-color", "#35B3FA"); states[i] = false; }
          else {                 $("#sun").css("background-color", "#35B3FA"); states[i] = false; }
      }

  }));
  $("#wed").click(function() {
      if (states[2] == true) {
          $(this).css("background-color", "#35B3FA");
          states[2] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[2] = true;
      }
      
      if (checkStates()) {
          var i = findIndex(2);
          if (i == 0) {           $("#mon").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 1) {      $("#tue").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 3) {      $("#thu").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 4) {      $("#fri").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 5) {      $("#sat").css("background-color", "#35B3FA"); states[i] = false; }
          else {                  $("#sun").css("background-color", "#35B3FA"); states[i] = false; }
      }
  })
  $("#thu").click(function() {
      if (states[3] == true) {
          $(this).css("background-color", "#35B3FA");
          states[3] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[3] = true;
      }
      
      if (checkStates()) {
          var i = findIndex(3);
          if (i == 0) {           $("#mon").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 1) {      $("#tue").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 2) {      $("#wed").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 4) {      $("#fri").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 5) {      $("#sat").css("background-color", "#35B3FA"); states[i] = false; }
          else {                  $("#sun").css("background-color", "#35B3FA"); states[i] = false; }
      }
  })
  $("#fri").click(function() {
      if (states[4] == true) {
          $(this).css("background-color", "#35B3FA");
          states[4] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[4] = true;
      }
      
      if (checkStates()) {
          var i = findIndex(4);
          if (i == 0) {           $("#mon").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 1) {      $("#tue").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 2) {      $("#wed").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 3) {      $("#thu").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 5) {      $("#sat").css("background-color", "#35B3FA"); states[i] = false; }
          else {                  $("#sun").css("background-color", "#35B3FA"); states[i] = false; }
      }
  })
  $("#sat").click(function() {
      if (states[5] == true) {
          $(this).css("background-color", "#35B3FA");
          states[5] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[5] = true;
      }
      
      if (checkStates()) {
          var i = findIndex(5);
          if (i == 0) {           $("#mon").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 1) {      $("#tue").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 2) {      $("#wed").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 3) {      $("#thu").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 4) {      $("#fri").css("background-color", "#35B3FA"); states[i] = false; }
          else {                  $("#sun").css("background-color", "#35B3FA"); states[i] = false; }
      }
  })
  $("#sun").click(function() {
      if (states[6] == true) {
          $(this).css("background-color", "#35B3FA");
          states[6] = false;
      }
      else {
          $(this).css("background-color", "#FA9435");
          states[6] = true;
      }
      
      if (checkStates()) {
          var i = findIndex(6);
          if (i == 0) {           $("#mon").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 1) {      $("#tue").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 2) {      $("#wed").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 3) {      $("#thu").css("background-color", "#35B3FA"); states[i] = false; }
          else if (i == 4) {      $("#fri").css("background-color", "#35B3FA"); states[i] = false; }
          else {                  $("#sat").css("background-color", "#35B3FA"); states[i] = false; }
      }
  })
  $("#daynext").click(function() {
    $('.ui.accordion').accordion('open', 1);
  })
  $("#timenext").click(function() {
    $('.ui.accordion').accordion('open', 2);
  })
  $("#timeprev").click(function() {
    $('.ui.accordion').accordion('open', 0);
  })
  $("#howprev").click(function() {
    $('.ui.accordion').accordion('open', 1);
  })
  var modal = document.getElementById("myModal");
  $("#savehow").click(function() {
    modal.style.display = "block";
  })
});