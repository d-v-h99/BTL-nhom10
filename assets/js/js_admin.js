
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
var rIndex,
table=document.getElementById('table');
//kt dk
function checkEmptyInput(){
  var check=false,
      masp=document.getElementById('ma_sp').value,
      tensp=document.getElementById('ten_sp').value,
      giasp=document.getElementById('gia').value;
  if(masp==""){
    alert("Mã sản phẩm không được để trống");
    check=true;
  }
  else if(tensp==""){
    alert("Tên sản phẩm không được để trống");
    check=true;
  }
  else if(giasp==""){
    alert("Giá sản phẩm không được để trống");
    check=true;
  }
  return check;

}
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if (!checkEmptyInput()) {
      var newRow = table.insertRow(table.length),
          cell1 = newRow.insertCell(0),
          cell2 = newRow.insertCell(1),
          cell3 = newRow.insertCell(2),
          masp=document.getElementById('ma_sp').value,
        tensp=document.getElementById('ten_sp').value,
        giasp=document.getElementById('gia').value;

      cell1.innerHTML = masp;
      cell2.innerHTML = tensp;
      cell3.innerHTML = giasp;
      // call the function to set the event to the new row
      selectedRowToInput();
  }
}
function selectedRowToInput() {
for (var i = 1; i < table.rows.length; i++) {
  table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("ma_sp").value = this.cells[0].innerHTML;
      document.getElementById("ten_sp").value = this.cells[1].innerHTML;
      document.getElementById("gia").value = this.cells[2].innerHTML;
  };
}
}
selectedRowToInput();
function editHtmlTbleSelectedRow() {
   var   masp=document.getElementById('ma_sp').value,
      tensp=document.getElementById('ten_sp').value,
      giasp=document.getElementById('gia').value;
  if (!checkEmptyInput()) {
      table.rows[rIndex].cells[0].innerHTML = masp;
      table.rows[rIndex].cells[1].innerHTML = tensp;
      table.rows[rIndex].cells[2].innerHTML = giasp;
  }
}
function removeSelectedRow() {
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById("ma_sp").value = "";
  document.getElementById("ten_sp").value = "";
  document.getElementById("gia").value = "";
}
const searchInput = document.getElementById("search");
    const rows = document.querySelectorAll("tbody tr");
    console.log(rows);
    searchInput.addEventListener("keyup", function (event) {
      const q = event.target.value.toLowerCase();
      console.log(q);
      rows.forEach((row) => {
        row.querySelector("td").textContent.toLowerCase().startsWith(q)
          ? (row.style.display = "table-row")
          : (row.style.display = "none");
      });
    });
    