$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type','text');
        }
        else  $(this).prev().attr('type','password');
    });
});
$(document).ready(function(){
    $('#eye-again').click(function(){
        $(this).toggleClass('open')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type','text');
        }
        else  $(this).prev().attr('type','password');
    });
});

//hàm signup
const inputUsernameRegister = document.querySelector("#username");
const inputPasswordRegister = document.querySelector("#password");
const btnRegister = document.querySelector(".submit");
const btn_close = document.getElementById('btn-close');

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    document.getElementById('content').innerHTML="Vui lòng không được để trống!"
    document.getElementById('container-modal').style.display = 'block';
    if (btn_close.addEventListener('click', () => {
      document.getElementById('container-modal').style.display = 'none';
    }));
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
   //hiện modal box
   document.getElementById('content').innerHTML="Bạn đã đăng kí thành công!"
   document.getElementById('container-modal').style.display= 'block';
   if(btn_close.addEventListener('click', () => {
     document.getElementById('container-modal').style.display= 'none';
     window.location.href = "./log-in.html";
   }));
  }
});

