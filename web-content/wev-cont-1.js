// $(document).ready(function(){
//    if ($('.menu').srcollTop(800)){
//         $(this).attr('position','fixed');
//     }
// });
window.onscroll = function(){
    console.info(document.body.scrollTop)
    if(document.documentElement.scrollTop > 490){
        var header = document.getElementById("menu");
        header.style.position = "fixed";
    }
    else{
        var header = document.getElementById("menu");
        header.style.position = "relative";
    }
}