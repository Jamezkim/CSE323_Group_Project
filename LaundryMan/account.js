$(document).ready(function(){
    var x = document.getElementById("my-account");
    var y = document.getElementById("reservation-status");
    var z = document.getElementById("history");
    var l = document.getElementById("setting")

    window.items = [x, y, z, l];
    items[0].style.display = "block";
    items[1].style.display = "none";
    items[2].style.display = "none";
    items[3].style.display = "none";

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

    
});