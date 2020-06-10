$(document).ready(function(){
    var db = firebase.firestore();

    getData();
    var x = document.getElementById("my-account");
    var y = document.getElementById("reservation-status");
    var z = document.getElementById("history");
    var l = document.getElementById("setting");

    

    window.items = [x, y, z, l];
    items[0].style.display = "block";
    items[1].style.display = "none";
    items[2].style.display = "none";
    items[3].style.display = "none";

    function getData() {
        var docRef = db.collection("weekly").doc("data");

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                $("#getDay").append(doc.data().day);
                $("#getTime").append(doc.data().time);
                $("#getHow").append(doc.data().how);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        var docRef2 = db.collection("alarm").doc("data");

        docRef2.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                $("#getOnTime").append(doc.data().onTime);
                if (doc.data().before == "") {
                    $("#getBefore").append(doc.data().before);
                }
                else {
                    $("#getBefore").append(doc.data().before + " Min");
                }
                if (doc.data().after == "") {
                    $("#getAfter").append(doc.data().after);
                }
                else {
                    $("#getAfter").append(doc.data().after + " Min");
                }
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        

    }
    $("#alarm_change_btn").click(function() {
        window.location.href="alarm-setting.html";
    })
    $("#weekly_change_btn").click(function() {
        window.location.href="weekly-reminder.html";
    })
    $("#account-click").click(function() {
        

        items[1].style.display = "none";
        items[2].style.display = "none";
        items[3].style.display = "none";
        items[0].style.display = "block";


    })
    $("#status-click").click(function() {
        items[0].style.display = "none";
        items[2].style.display = "none";
        items[3].style.display = "none";
        items[1].style.display = "block";
        
    })
    $("#history-click").click(function() {
        items[0].style.display = "none";
        items[1].style.display = "none";
        items[3].style.display = "none";
        items[2].style.display = "block";
        
    })
    $("#setting-click").click(function() {
        items[0].style.display = "none";
        items[1].style.display = "none";
        items[2].style.display = "none";
        items[3].style.display = "block";
        
    })
    $("#toggleMe1").click(function() {
        if ($("#toggleMe1").is(":checked")) {
            $("#alarmBox").css("background", "");
            $("#alarmBox").css("opacity", "1");
        }
        else {
            $("#alarmBox").css("background", "lightgray");
            $("#alarmBox").css("opacity", "0.6");
            
        } 
    })
    $("#toggleMe2").click(function() {
        if ($("#toggleMe2").is(":checked")) {
            $("#weeklyBox").css("background", "");
            $("#weeklyBox").css("opacity", "1");
        }
        else {
            $("#weeklyBox").css("background", "lightgray");
            $("#weeklyBox").css("opacity", "0.6");
            
        } 
    })
    
});