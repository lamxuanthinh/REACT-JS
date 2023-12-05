var btnDone = document.querySelector(".btnDone");
var btnlist = document.querySelector(".btnlist");
var modal = document.querySelector(".modal");
var close = document.querySelector(".close");
btnDone.onclick = () => {
  setTimeout(() => {
    location.replace("./phieutiem.html");
  }, 0);
};

btnlist.onclick = () => {
  modal.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none ";
};
