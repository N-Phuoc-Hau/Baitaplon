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

    // let imgFeat = document.querySelector('.img-slide');
    // let listImg = document.querySelectorAll('.list-i img');
    

    // let currentIndex = 0;
    // function updateImgByIndex(index){
    //     //remove active-class
    //     document.querySelectorAll('.list-i img').forEach(item=>{
    //         item.classList.remove('active');
    //     })
        
    //     currentIndex = index;
    //     imgFeat.src = listImg[index].getAttribute('src');
    //     listImg[index].classList.add('active');
    // }
    // updateImgByIndex(0);

    // listImg.forEach((imgElement, index)=>{

    //     imgElement.addEventListener('click', e=>{
    //         imgFeat.style.opacity ="0";
    //         setTimeout(() => {
    //             updateImgByIndex(index);
    //             imgFeat.style.opacity ="1";
    //         }, 600);
    //     })
    // })

    // prevBtn.addEventListener('click', e=>{


    //     if(currentIndex == 0){
    //         currentIndex = listImg.length -1;
    //     }
    //     else{
    //         currentIndex--;
    //     }
    //     imgFeat.style.animation = '';
    //     setTimeout(() => {
    //         updateImgByIndex(currentIndex);
    //         imgFeat.style.animation = "slideLeft 1s ease-in-out forwards";
    //     }, 100);
    // })
    // let auto = nextBtn.addEventListener('click', e=>{
    //     if(currentIndex == listImg.length -1){
    //         currentIndex = 0;
    //     }
    //     else{
    //         currentIndex++;
    //     }
    //     imgFeat.style.animation = '';
    //     setTimeout(() => {
    //         updateImgByIndex(currentIndex);
    //         imgFeat.style.animation = "slideRight 1s ease-in-out forwards";
    //     }, 100);
    // })
    // var clickSlide = addEventListener('load',e=>{
    //     if(currentIndex == listImg.length -1){
    //         currentIndex = 0;
    //     }
    //     else{
    //         currentIndex++;
    //     }
    //     updateImgByIndex(currentIndex);
    // })

//JS body


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



// window.onscroll = function(){
//     var timer = setInterval(function(){
//     if(document.documentElement.scrollTop < 300){
//         var a;
//         a.click(function(){
//             if(currentIndex == listImg.length -1){
//                 currentIndex = 0;
//             }
//             else{
//                 currentIndex++;
//             }
//             imgFeat.style.animation = '';
//             setTimeout(() => {
//                 updateImgByIndex(currentIndex);
//                 imgFeat.style.animation = "slideRight 1s ease-in-out forwards";
//             }, 100);
//         }, 5000)
//     }
//     else{
//         clearInterval(timer);
//     }
//     },2000);
// }


$(document).ready(function(){
    if( $('#search-item').focus(function(){
            $('.search').removeClass('search').addClass('search1')
            $('.course-list').css('display','block')
        }
    ));
});

$(document).ready(function(){
    if( $('#search-item').blur(function(){
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

    for (var i=0; i < name.length; i++){
        let match = course[i].getElementsByTagName('h2')[0];

        if(match)
        {
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1 )
            {
                course[i].style.display ="";
            }
            else{
                course[i].style.display ="none";
            }
        }
    }
}