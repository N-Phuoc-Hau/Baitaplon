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
nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length -1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    updateImgByIndex(currentIndex);
})

//JS body