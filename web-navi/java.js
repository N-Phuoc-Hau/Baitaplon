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
//thông báo đăng xuất
const login = document.getElementsByClassName(".login-a");
    function logIn(){
        window.location.href = "./link-log-in-up/log-in.html";
    };
    function logOut(){ 
        alert("Đăng xuất thành công");
        window.location.href = "../BTL.html";
};
//JSGoToTop
var gototop = document.getElementById("gTTop");
window.onscroll = function(){
    console.info(document.body.scrollTop);
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

// json

function loadstatus(){
    fetch("status.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("statusJson");
        let re = "";
        for (let c of data)
        re += `
            <div class="wrap-1">
                <div class="left">
                    <img src="${c.src}" alt="${c.alt}">
                </div>
                <div class="right">
                    <a href="${c.href}">
                        <h2>${c.name}</h2>
                        <p>${c.cont}</p>
                    </a>
                </div>
            </div>`;

        d.innerHTML += re;
    })
}
function loadforumspro(){
    fetch("forumspro.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("json-forums-pro");
        let re = "";
        for (let c of data)
        re += `
                 <section class="small-forums">
                     <div class="ele-for">
                         <a href="${c.href}" class="href">
                             <button class="BTN-for">
                                 Xem khóa học
                             </button>
                             <img class="img-for" src="${c.src}" alt="${c.alt}">
                         </a>
                         <h3>
                             <a class="a-deco" href="${c.href}">${c.name}</a>
                         </h3>
                     </div>
                 </section>`;

        d.innerHTML += re;
    })
}
function loadforumsnor(){
    fetch("forumsnor.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("json-forums-nor");
        let re = "";
        for (let c of data)
        re += `
                 <section class="small-forums">
                     <div class="ele-for">
                         <a href="${c.href}" class="href">
                             <button class="BTN-for">
                                 Xem khóa học
                             </button>
                             <img class="img-for" src="${c.src}" alt="${c.alt}">
                         </a>
                         <h3>
                             <a class="a-deco" href="${c.href}">${c.name}</a>
                         </h3>
                     </div>
                 </section>`;

        d.innerHTML += re;
    })
}
function loadmenu(){
    fetch("nav.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("nav");
        let re = "";
        for (let c of data)
        re += `<li><span title="${c.title}"><a href="${c.href}"><i class="${c.icon}"></i></a></span></li>`;

        d.innerHTML += re;
    })
}
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
function loadcourselist(){
    fetch("courselist.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("course-list");
        let re = "";
        for (let c of data)
        re += `
    <div class="course">
        <a href="${c.href}"><img src="${c.src}" alt=""></a>
        <div class="detail">
            <a href="${c.href}"><h2>${c.name}</h2></a>
            <h3>${c.cost}</h3>
        </div>
    </div>`;

        d.innerHTML += re;
    })
}
window.onload = () => {
    loadstatus();
    loadcourselist();
    loadforumsnor();
    loadforumspro();
    loadmenu();
}