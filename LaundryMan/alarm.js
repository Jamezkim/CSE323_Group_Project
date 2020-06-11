$(document).ready(function(){
    var db = firebase.firestore();
    

    states = [false, false, false, false, false, false, false];
    days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    $('.ui.dropdown')
    .dropdown();
    $('.ui.accordion')
    .accordion();
//   Alert js
    $.uiAlert = function(options) {
        var setUI = $.extend({
        textHead: 'Your user registration was successful.',
        text: 'You may now log-in with the username you have chosen',
        textcolor: '#19c3aa',
        bgcolors: '#fff',
        position: 'top-right',
        icon: '',
        time: 3,
        permanent: false,
        }, options);

        var ui_alert = 'ui-alert-content';
        ui_alert += '-' + setUI.position;
        setUI.bgcolors ='style="background-color: '+setUI.bgcolor+';   0px 0px 0px 1px #E0B4B4 inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);"';
        if(setUI.bgcolors === '') setUI.bgcolors ='style="background-color: ; 0px 0px 0px 1px #E0B4B4 inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);"';
        if(!$('body > .' + ui_alert).length) {
            $('body').append('<div class="ui-alert-content ' + ui_alert + '" style="width: 97%; height:12%"></div>');
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
                bgcolor: '#FFF6F6', // background-color
                textcolor: '#912D2B', // color
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
            ("#test1.message").message('show');
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
        $('#confirmModal').modal('show');
    })
    $("#noModalbtn").click(function() {
        $('#confirmModal').modal('hide');
    })
    $("#yesModalbtn").click(function() {
        $('#confirmModal2').modal('show');
        var i = 0;
        for (j = 0; j < states.length; j++) {
            if (states[j]) {
                i = j;
            }
        }

        db.collection("weekly").doc("data").set ({
            day: days[i],
            how: $("input[name='optradio']:checked").parent().text(),
            time: $('.search.dropdown').dropdown("get value")
            
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

    })
    $("#okModalbtn").click(function() {
        
        window.location.href="index.html";
    })


    //Alarm-setting JS
    $("#yesModalbtn2").click(function() {
        $('#confirmModal2').modal('show');
        var onOroff = "";
        var beforeL = "";
        var afterL = "";
        if ($("#cb1").is(":checked")) {
            onOroff = "OFF"
        }
        else {
            onOroff = "ON"
        }
        if ($("#cb2").is(":checked")) {
            beforeL = ""
        }
        else {
            beforeL = test[0];
        }
        if ($("#cb3").is(":checked")) {
            afterL = ""
        }
        else {
            afterL = test[1];
        }
        
        db.collection("alarm").doc("data").set ({
            onTime: onOroff,
            before: beforeL,
            after: afterL
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

    })
    
});