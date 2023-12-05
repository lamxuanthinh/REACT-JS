let string1 = localStorage.getItem("textvalue");
// jquery
$("#QrCode").qrcode({
  render: "div",
  width: 300,
  height: 300,
  color: "#3a3",
  text: `${string1}`,
});

const bntdownload = document.querySelector(".bntdownload");
const bntDone = document.querySelector(".bntDone");

bntDone.addEventListener("click", () => {
  setTimeout(() => {
    location.replace("../../Home/Home-Page/index.html");
  }, 0);
});

bntdownload.addEventListener("click", () => {});
