
//Mũi tên
$(document).ready(function(){
    //Tìm tất cả li có menu con và thêm class has-child cho nó
    $('.sub-menu').parent('li').addClass('has-child');
});



//ẩn hiện tìm kiếm
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
//ẩn hiện danh sách
$(document).ready(function(){
    $('#button-1').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-1').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-1').css('display', 'none');
        }
    });
});

$(document).ready(function(){
    $('#button-2').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-2').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-2').css('display', 'none');
        }
    });
});

$(document).ready(function(){
    $('#button-3').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-3').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-3').css('display', 'none');
        }
    });
});

$(document).ready(function(){
    $('#button-4').click(function(){
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).children('i').removeClass('fa-solid fa-plus');
            $(this).children('i').addClass('fa-solid fa-minus');
            $('.lessons-4').css('display', 'block');
        }
        else {
            $(this).children('i').addClass('fa-solid fa-plus');
            $('.lessons-4').css('display', 'none');
        }
    });
});

//Theo dõi quá trình học

let progress = 10;
const progressText = document.getElementById('progressText');

if (localStorage.getItem('progress')) {
    progress = parseInt(localStorage.getItem('progress'));
    updateProgressBar();
  }
  
  function updateProgressBar() {
    progressText.textContent = `${progress.toFixed(2)}%`; // Để hiển thị đến 2 chữ số thập phân
  }
  
  function updateProgress() {
    if (progress < 99) {
      progress += 10; // Tăng phần trăm lên 10% cho mỗi bài học hoàn thành
      updateProgressBar();
      localStorage.setItem('progress', progress.toString()); // Lưu giá trị phần trăm vào LocalStorage
    }
  }
  
  function resetProgress() {
    progress = 0; // Đặt giá trị phần trăm về 0
    updateProgressBar();
    localStorage.removeItem('progress'); // Xóa dữ liệu phần trăm khỏi LocalStorage
}
