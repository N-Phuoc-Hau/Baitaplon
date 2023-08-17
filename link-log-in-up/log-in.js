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

// validation form login
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const btnLogin = document.querySelector(".submit");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    document.getElementById('content').innerHTML="Vui lòng không được để trống!"
    document.getElementById('container-modal').style.display= 'block';
    if (btn_close.addEventListener('click', () => {
      document.getElementById('container-modal').style.display= 'none';
    }));
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      document.getElementById('container-modal').style.display= 'block';
      if (btn_close.addEventListener('click', () => {
        document.getElementById('container-modal').style.display= 'none';
        window.location.href = "../BTLlater.html";
      }));
      
    } else {
      document.getElementById('content').innerHTML="Đăng nhập thất bại!"
      document.getElementById('container-modal').style.display= 'block';
      if (btn_close.addEventListener('click', () => {
        document.getElementById('container-modal').style.display= 'none';
        window.location.href = "./log-in.html";
      }));
    }
  }
});
