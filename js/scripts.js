//Business logic
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


$(document).ready(function(){
    $(".img").hover(function(){
        $(".image-caption",this).slideToggle("slow");
    })
})


//User-interface Logic
    $(".form").on('submit',function(event){
        event.preventDefault();
        var name =$("#name").val();
        var email=$("#email").val();
        var text=$("#text").val();
        if (name === "" & email === "") {
            alert("Please fill in all fields!")
        } else {
            alert("Hi" + " " + name + "." + "Thank you for your feedback.We'll get back at you as soon as possible:)");
        };
    });