//kipkemoi elvis rono

// the beginning of javascript document for the project

// toggle function a 

$(document).ready(function(){
    $("#one").click(function(){
        $(".design").toggle();
        $("#one").hide();
    })
})
$(document).ready(function(){
    $("#design").click(function(){
        $("#one").toggle();
        $(".design").hide();
    })
})

$(document).ready(function(){
    $("#two").click(function(){
        $(".development").toggle();
        $("#two").hide();
    })
})
// development, product and image hover

$(document).ready(function(){
    $("#development").click(function(){
        $("#two").toggle();
        $(".development").hide();
    })
})
$(document).ready(function(){
    $("#three").click(function(){
        $(".product").toggle();
        $("#three").hide();
    })
})
$(document).ready(function(){
    $("#product").click(function(){
        $("#three").toggle();
        $(".product").hide();
    })
})

// hover
