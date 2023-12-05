// turn on modal profile
var profile = document.getElementById("profile");
var modalProfile = document.querySelector(".modal-profile");
var spanProfile = document.getElementsByClassName("close-profile")[0];

var btnDone = document.querySelector(".btnDone");
// modal profile

var btnlist = document.querySelector(".btnlist");
var btnDoneList = document.querySelector(".btnDoneList");
var modal = document.querySelector(".modal");
var close = document.querySelector(".close");

// reder data
var Name = document.querySelector(".name");
var date = document.querySelector("#date");
var gender = document.querySelector("#gender");

// modal list user
btnlist.onclick = () => {
  modal.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none";
};

btnDoneList.onclick = () => {
  Name.innerText = "Ngô Hùng Sở";
  date.innerText = "15/10/2003";
  gender.innerText = "Nam";
};

// modal profile
profile.onclick = () => {
  modalProfile.style.display = "block";
};

spanProfile.onclick = () => {
  modalProfile.style.display = "none";
};

btnDone.onclick = () => {
  setTimeout(() => {
    location.replace("../From-Login/index.html");
  }, 0);
};

// window.onclick = (event) => {
//   if (event.target != modalProfile) {
//     modalProfile.style.display = "none";
//   }
// };
