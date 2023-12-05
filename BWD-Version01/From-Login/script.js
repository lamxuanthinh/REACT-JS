var btnlogin = document.querySelector("#Login");
var user1 = "04020123";
var user2 = "04020456";
var user3 = "04020789";
var password1 = "123";
var password2 = "123";
var password3 = "123";

btnlogin.onclick = () => {
  var cccd = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  console.log(cccd);
  console.log(password);
  if (cccd == user1 && password == password1) {
    setTimeout(() => {
      location.replace("../demo-QR-code/qr-scanner/NurseModule/index.html");
    }, 0);
  } else if (cccd == user2 && password == password2) {
    setTimeout(() => {
      location.replace("../Form2/index.html");
    }, 0);
  } else {
    setTimeout(() => {
      location.replace("../Form3/index.html");
    }, 0);
  }
};
