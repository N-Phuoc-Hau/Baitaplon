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


//ẩn hiện danh sách
$(document).ready(function(){
    $('#button-1').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-1').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-1').css('display', 'none');
        }
    });
});
$(document).ready(function(){
    $('#button-2').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-2').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-2').css('display', 'none');
        }
    });
});
$(document).ready(function(){
    $('#button-3').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-3').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-3').css('display', 'none');
        }
    });
});
$(document).ready(function(){
    $('#button-4').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-4').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-4').css('display', 'none');
        }
    });
});