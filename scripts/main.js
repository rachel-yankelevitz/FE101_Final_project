$(".pugBtn").click(function() {
   // alert("what up?");
    $("#pug").fadeIn();
});

$("#location_dropdown").change(function() {
    var selectedLocation = $("#location_dropdown").val();
    // alert(selectedLocation);

        $(".backLocation").fadeOut();
        if (selectedLocation === "2") {
            $("#hawaii").fadeIn();
        } else if (selectedLocation === "3") {
            $("#NYC").fadeIn();
        } else if (selectedLocation === "4") {
            $("#Paris").fadeIn();
        } else if (selectedLocation === "5") {
            $("#Desert").fadeIn();
        } else if (selectedLocation === "6") {
            $("#outerSpace").fadeIn();
        }
});

$("#hat_dropdown").change(function() {
    var selectedHat = $("#hat_dropdown").val();
    $(".hat").fadeOut();
    if(selectedHat === "2") {
        $("#baseball").fadeIn();
    } else if (selectedHat === "3") {
        $("#pilot").fadeIn();
    } else if (selectedHat === "4") {
        $("#sombrero").fadeIn();
    } else if (selectedHat === "5") {
        $("#santa").fadeIn();
    } else if (selectedHat === "6") {
        $("#beret").fadeIn();
    } else if (selectedHat === "7") {
        $("#birthday").fadeIn();
    }

});
//tennis ball, bone, fire hydrant, sunglasses

$("#accessories_dropdown").change(function() {
    var selectedAccessory = $("#accessories_dropdown").val();
    // $(".accessories").fadeOut();
    if(selectedAccessory === "2") {
        $("#tennisBall").fadeIn();
    } else if(selectedAccessory === "3") {
        $("#bone").fadeIn();
    } else if(selectedAccessory === "4") {
        $("#hydrant").fadeIn();
    } else if(selectedAccessory === "5") {
        $("#sunglasses").fadeIn();
    } else if(selectedAccessory === "1.4") {
        alert("Click on the accessory to remove it");
    }
});

$("#tennisBall").click(function(){
    $("#tennisBall").fadeOut();
});

$("#bone").click(function(){
    $("#bone").fadeOut();
});

$("#hydrant").click(function(){
    $("#hydrant").fadeOut();
});

$("#sunglasses").click(function(){
    $("#sunglasses").fadeOut();
});










