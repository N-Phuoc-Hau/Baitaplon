// $(document).ready(function(){
//    if ($('.menu').srcollTop(800)){
//         $(this).attr('position','fixed');
//     }
// });

var gototop = document.getElementById("gTTop");
window.onscroll = function(){
    var gototop = document.getElementById("gTTop");
    if(document.documentElement.scrollTop > 300){
        gototop.style.display = "block";
    }
    else{
        gototop.style.display = "none";
    }
}
gototop.addEventListener('click', e=>{
    var timer = setInterval(function(){
        document.documentElement.scrollTop-=20;

        if (document.documentElement.scrollTop <= 0)
        clearInterval(timer);
    }, 5)
})

const Submit = document.querySelector(".submit");
Submit.addEventListener("click", (e) => {
        alert("Đăng kí thành công")
});
window.onscroll = function(){
    console.info(document.body.scrollTop)
    var headmenu = document.getElementById('headmenu');
    if(document.documentElement.scrollTop > 300){
        headmenu.style.position = "fixed";
    }
    else{
        headmenu.style.position = "relative";
    }
}
//JSGoToTop

//Mũi tên
$(document).ready(function(){
    //Tìm tất cả li có menu con và thêm class has-child cho nó
    $('.sub-menu').parent('li').addClass('has-child');
});