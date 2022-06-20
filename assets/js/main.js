

function SignUp (event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById('password-confirm').value;
    var user = {
      user_name: username,
      pass_word: password,
      e_mail: email,
    
    };
    if (user.user_name == 'admin'){
      alert('không thể đăng kí');
      return;
    }

    if(password == passwordConfirm){

      localStorage.setItem(username, JSON.stringify(user));
      alert('dang ki thanh cong');
    }
    else{
      alert('mật khẩu không trùng');
    }
    
  };



function Login(event){
  event.preventDefault();
  const unAdmin = 'admin';
  const pwAdmin = '123456';
  var username = document.getElementById('username-login').value;
  var password = document.getElementById('password-login').value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if(username == '' || password == ''){
    alert('chưa nhập tài khoản mật khẩu');
    return;
  }
  else if(username == unAdmin && password == pwAdmin){
    window.location.href = 'admin.html';
    return;
  }
  

  if(user == null){
    alert('tài khoản không tồn tại')
  }
  else if(username == data.user_name && password == data.pass_word ){
    window.location.href = 'index.html';
  }
  else{
    alert('sai tài khoản hoặc mật khẩu')
  }
}