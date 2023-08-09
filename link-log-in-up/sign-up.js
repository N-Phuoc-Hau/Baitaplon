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


btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "log-in.html";
  }
});