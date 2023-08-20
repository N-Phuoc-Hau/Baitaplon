//Json
function loadmenu(){
    fetch("dataLT/nav.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("nav");
        let re = "";
        for (let c of data)
        re += `<li><span title="${c.title}"><a href="${c.href}"><i class="${c.icon}"></i></a></span></li>`;

        d.innerHTML += re;
    })
}
// function loadimgslide1(){
//     fetch("data/imgslide.json").then(res => res.json()).then(data =>{
//         let d = document.getElementById("nav");
//         let re = "";
//         for (let c of data)
//         re += `<img src="${c.srcimg}" alt="Ảnh slide1">`;

//         d.innerHTML += re;
//     })
// }
function loadforumspro(){
    fetch("dataLT/forumspro.json").then(res => res.json()).then(data =>{
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
    fetch("dataLT/forumsnor.json").then(res => res.json()).then(data =>{
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
function loadstatus(){
    fetch("dataLT/statuscont.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("json-status");
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
function loadcourselist(){
    fetch("dataLT/courselist.json").then(res => res.json()).then(data =>{
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
    loadmenu();
    loadcourselist();
    loadforumspro();
    loadforumsnor();
    loadstatus();
}
