//JS header
// slider
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4)
        counter = 1;
}, 4000)


    // let imgFeat = document.querySelector('.img-slide');
    // let listImg = document.querySelectorAll('.list-i img');
    // let prevBtn = document.querySelector('.prev')
    // let nextBtn = document.querySelector('.next')

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
