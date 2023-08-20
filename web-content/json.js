function loadmenu(){
    fetch("nav.json").then(res => res.json()).then(data =>{
        let d = document.getElementById("nav");
        let re = "";
        for (let c of data)
        re += `<li><span title="${c.title}"><a href="${c.href}"><i class="${c.icon}"></i></a></span></li>`;

        d.innerHTML += re;
    })
}
function loadcourselist(){
    fetch("jsoncourse.json").then(res => res.json()).then(data =>{
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
}