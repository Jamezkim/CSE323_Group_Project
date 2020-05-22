$(document).ready(function(){
    $('.ui.pointing.dropdown')
    .dropdown({
        action: 'nothing'
    });
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    $('.ui.modal')
    .modal({
        closable: false,
        dimmerSettings: {
            opacity : 0.8
        }
    });
    $("#messageModal1")
    .modal({
        dimmerSettings: {
            opacity : 0
        }
    })
    $("#messageModal2")
    .modal({
        dimmerSettings: {
            opacity : 0
        }
    })
    $("#messageModal3")
    .modal({
        dimmerSettings: {
            opacity : 0
        }
    })
    $("#messageModal4")
    .modal({
        dimmerSettings: {
            opacity : 0
        }
    })
    $("#messageModal5")
    .modal({
        dimmerSettings: {
            opacity : 0
        }
    })
    $("#myItem1").click(function() {
        $("#itemText").css("color", "darkgray")
        $("#messageModal1").modal('show');  
    })
    $("#myItem2").click(function() {
        $("#messageModal2").modal('show');  
    })
    $("#myItem3").click(function() {
        $("#messageModal3").modal('show');  
    })
    $("#myItem4").click(function() {
        $("#messageModal4").modal('show');  
    })
    $("#myItem5").click(function() {
        $("#messageModal5").modal('show');  
    })
    $("#messageClosebtn1").click(function() {
        $("#messageModal1").modal('hide');
    })
    $("#messageClosebtn2").click(function() {
        $("#messageModal2").modal('hide');
    })
    $("#messageClosebtn3").click(function() {
        $("#messageModal3").modal('hide');
    })
    $("#messageClosebtn4").click(function() {
        $("#messageModal4").modal('hide');
    })
    $("#messageClosebtn5").click(function() {
        $("#messageModal5").modal('hide');
    })
    $("#messageBar").click(function() {
        $('.badge').fadeOut('fast');
    })
    
      
});