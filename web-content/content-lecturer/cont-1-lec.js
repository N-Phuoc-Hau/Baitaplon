
//Mũi tên
$(document).ready(function(){
    //Tìm tất cả li có menu con và thêm class has-child cho nó
    $('.sub-menu').parent('li').addClass('has-child');
});

const login = document.getElementsByClassName(".login-a");
    function logIn(){
        window.location.href = "./link-log-in-up/log-in.html";
    };
    function logOut(){ 
        alert("Đăng xuất thành công");
        window.location.href = "../../BTL.html";
};

//ẩn hiện tìm kiếm
$(document).ready(function(){
    if( $('#search-item').focus (function(){
            $('.search').removeClass('search').addClass('search1')
            $('.course-list').css('display','block')
        }
    ));
});

$(document).ready(function(){
 if( $('#wrapper').click(function(){
        $('.search1').removeClass('search1').addClass('search')
        $('.course-list').css('display','none')
    }
    ));
});
    
//search
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("course-list")
    const course = document.querySelectorAll(".course")
    const name = document.getElementsByTagName("h2")
    const type = document.getElementsByTagName("h3")

    for (var i=0; i < name.length; i++){
        let match = course[i].getElementsByTagName('h2')[0];
        let match1 = course[i].getElementsByTagName('h3')[0];
        if(match || match1)
        {
            let textvalue1 = match1.textContent || match1.innerHTML
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1 || textvalue1.toUpperCase().indexOf(searchbox) > -1 )
            {
                course[i].style.display ="";
            }
            else{
                course[i].style.display ="none";
            }
        }
    }
}
//ẩn hiện danh sách bài học
$(document).ready(function(){
    $('#headline-1').click(function(){
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
    $('#headline-2').click(function(){
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
    $('#headline-3').click(function(){
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
    $('#headline-4').click(function(){
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