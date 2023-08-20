//JS header
// slider
var counter = 1;
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    setTimeout(() => {
        document.getElementById('radio' + counter).checked = true;
    }, 4000);
    if(counter > 4)
        counter = 1;
}, 4000)


//hiện search
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

const login = document.getElementsByClassName(".login-a");
    function logIn(){
        alert("chuyển tới trang đăng nhập");
        window.location.href = "./link-log-in-up/log-in.html";
    };

    function logOut(){ 
        alert("Đăng xuất thành công");
        window.location.href = "BTL.html";
};