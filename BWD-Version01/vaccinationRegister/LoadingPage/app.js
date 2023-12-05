let containerRegister = document.querySelector(".containerRegister");
let wrapper = document.querySelector(".wrapper");
console.log(wrapper);
let bntDone = document.querySelector("#btnDone");
function showLoading() {
  wrapper.style = "display:flex;";
  containerRegister.style = "display:none;";
}

function hideLoading() {
  wrapper.style = "display:none;";
}

bntDone.onclick = () => {
  showLoading();
  setTimeout(() => {
    location.replace("./CreateQRCode/indexQR.html");
    hideLoading();
  }, 1600);
};
