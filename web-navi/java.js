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
            <div class="wrap">
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


window.onload = () => {
    loadstatus();
}