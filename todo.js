$("ul").on("click","li",function(){
    $(this).toggleClass("strike");
});

$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });

});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var data = $(this).val();
        $("ul").append("<li><span class='spanx'><i class='fa fa-trash-alt'></i></span> " + data + "</li>");
        $(this).val("");
    }
    
});

// $("input").css({
//     background: "#f5f5f5",
//     width: "100%",
//     fontSize: "24px",
//     padding: "10px 10px 10px 20px",
//     color: "#2980b9",
//     outline: "none"
// });

// $("input").focus(function(){
//     $(this).css({
//         background: "#fff",
//         border: "3px solid #2980b9"
//     })
// });

$(".fa-plus").css({
    float: "right"
});


$(".fa-plus").on("click",function(){
    $("input").slideToggle();
});



