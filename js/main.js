$(document).ready(function () {
    var popup = document.querySelector(".popup");
    var xiaomi = "Xiaomi";
    var iphone = "Iphone";
    var samsung = "Samsung";
    $(".btn_one").click(function(e){
        cb("1% , -300px");
        $(".span_phone").html(samsung);
    });
    $(".btn_two").click(function(e){
        cb("1% , -300px");
        $(".span_phone").html(iphone);
    });
    $(".btn_tree").click(function(e){
        cb("1% , -300px");
        $(".span_phone").html(xiaomi);
    });
    function cb(){
        popup.style.transform = "translate(1% ,-300px)"
    };
    $(".close-btn").click(function(e){

        if(popup.style.transform == "translate(1% ,-300px)"){
            popup.style.transform = "translate(1% , -300px)"
        }else{
            popup.style.transform = "translate(-1110% , 200%)"
        }
    })
});