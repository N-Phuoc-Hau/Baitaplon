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
        imgFeat.style.opacity = '0';

        setTimeout(()=>{
            updateImgByIndex(index);
            imgFeat.style.opacity = '1';
        },200)
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length -1;
    }
    else{
        currentIndex--;
    }
    

    imgFeat.style.animation = '';
    setTimeout(()=>{
        updateImgByIndex(currentIndex);
        imgFeat.style.animation = 'slideLeft 1s ease-in-out forwards';
    },200)
})
nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length -1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    
    imgFeat.style.animation = '';
    setTimeout(()=>{
        updateImgByIndex(currentIndex);
        imgFeat.style.animation = 'slideRight 1s ease-in-out forwards';
    },200)
})