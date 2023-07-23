//JS header
let imgFeat = document.querySelector('.img-slide');
let listImg = document.querySelectorAll('.list-i img');
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')

let currentIndex = 0;
function updateImgByIndex(index){
    //remove active-class
    document.querySelectorAll('.list-i img').forEach(item=>{
        item.classList.remove('active');
    })
    
    currentIndex = index;
    imgFeat.src = listImg[index].getAttribute('src');
    listImg[index].classList.add('active');
}
updateImgByIndex(0);

listImg.forEach((imgElement, index)=>{

    imgElement.addEventListener('click', e=>{
        updateImgByIndex(index);
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length -1;
    }
    else{
        currentIndex--;
    }
    updateImgByIndex(currentIndex);
})
var clickSlide = nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length -1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    updateImgByIndex(currentIndex);
})

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

window.onscroll = function(){
    var timer = setInterval(function(){
    if(document.documentElement.scrollTop > 300){
        clickSlide();
    }
    else{
        clearInterval(timer);
    }
    },2000);
}
