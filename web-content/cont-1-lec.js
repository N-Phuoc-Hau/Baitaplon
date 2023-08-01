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