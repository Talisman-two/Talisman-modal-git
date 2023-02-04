$(document).ready(function () {
    var popup = document.querySelector(".popup");
    var xiaomi = "Xiaomi";
    var iphone = "Iphone";
    var samsung = "Samsung";
    $(".btn_one").click(function(e){
        cb("1% , -300px");
        $(".span_phone").html(samsung);
        console.log(samsung);
    });
    $(".btn").click(function(e){
        $(".overlay").show()
    })
    $(".btn_two").click(function(e){
        cb("1% , -300px");
        $(".span_phone").html(iphone);
        console.log(iphone);
    });
    $(".btn_tree").click(function(e){
        cb("1% , -300px");
        $(".span_phone").html(xiaomi);
        console.log(xiaomi);
    });
    function cb(){
        popup.style.transform = "translate(1% ,-300px)"
    };
    $(".close-btn").click(function(e){
        if(popup.style.transform == "translate(1% ,-300px)"){
            popup.style.transform = "translate(1% , -300px)"
        }else{
            popup.style.transform = "translate(-1110% , 200%)"
        $(".overlay").hide()
        }
    })
});