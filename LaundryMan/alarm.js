$(document).ready(function(){
  states = [false, false, false, false, false, false, false];
  $('.ui.dropdown')
  .dropdown();
  $('.ui.accordion')
  .accordion();
  $('.ui.modal')
  .modal();

//   Alert js
  $.uiAlert = function(options) {
    var setUI = $.extend({
    textHead: 'Your user registration was successful.',
    text: 'You may now log-in with the username you have chosen',
    textcolor: '#19c3aa',
    bgcolors: '#fff',
    position: 'top-right',
    icon: '',
    time: 5,
    permanent: false
    }, options);

    var ui_alert = 'ui-alert-content';
    ui_alert += '-' + setUI.position;
    setUI.bgcolors ='style="background-color: '+setUI.bgcolor+';   box-shadow: 0 0 0 1px rgba(255,255,255,.5) inset,0 0 0 0 transparent;"';
    if(setUI.bgcolors === '') setUI.bgcolors ='style="background-color: ; box-shadow: 0 0 0 1px rgba(255,255,255,.5) inset,0 0 0 0 transparent;"';
    if(!$('body > .' + ui_alert).length) {
        $('body').append('<div class="ui-alert-content ' + ui_alert + '" style="width: inherit;"></div>');
    }
    var message = $('<div id="messages" class="ui icon message" ' + setUI.bgcolors + '><i class="'+setUI.icon+' icon" style="color: '+setUI.textcolor+';"></i><i class="close icon" style="color: '+setUI.textcolor+';" id="messageclose"></i><div style="color: '+setUI.textcolor+'; margin-right: 10px;">   <div class="header">'+setUI.textHead+'</div>  <p> '+setUI.text+'</p></div>  </div>');
    $('.' + ui_alert).prepend(message);
    message.animate({
        opacity: '1',
    }, 300);
    if(setUI.permanent === false){
        var timer = 0;
        $(message).mouseenter(function(){
        clearTimeout(timer);
        }).mouseleave(function(){
        uiAlertHide();
        });
        uiAlertHide();
    }
    function uiAlertHide(){
        timer = setTimeout(function() {
            message.animate({
                opacity: '0',
            } , 300, function() {
                message.remove();
        });
        }, (setUI.time * 1000) );
    }

    $('#messageclose').on('click', function() {
        $(this).closest('#messages').transition('fade');
    });
  };
  function triggerAlert (option) {
        $.uiAlert({
            textHead: "Please select the " + option + "!", // header
            text: '', // Text
            bgcolor: '#DB2828', // background-color
            textcolor: '#fff', // color
            position: 'bottom-right',// position . top And bottom ||  left / center / right
            icon: 'remove circle', // icon in semantic-UI
            time: 3, // time
        });
   };
  
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

  //Find index which button is clicked in states
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
  //Change color of each button based on user's click
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

  $(".title").click(function() {
    
  })
  $("#daynext").click(function() {
    if (!checkStates()) {
        triggerAlert("day");
    }
    else {
        $('.ui.accordion').accordion('open', 1);
    }
  })
  $("#timenext").click(function() {
    if ($('.search.dropdown').dropdown("get value") == "") {
        triggerAlert("time");
    }
    else {
        $('.ui.accordion').accordion('open', 2);
    }
  })
  $("#timeprev").click(function() {
    $('.ui.accordion').accordion('open', 0);
  })
  $("#howprev").click(function() {
    $('.ui.accordion').accordion('open', 1);
  })
  
  $("#savehow").click(function() {
    $('#myModal').modal('show');
  })
  $("#noModalbtn").click(function() {
    $('#myModal').modal('hide');
  })
  $("#yesModalbtn").click(function() {
    window.location.href="index.html";
  })
});