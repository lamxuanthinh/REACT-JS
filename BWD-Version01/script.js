// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// ------ Toggle --------

const btnToggle = document.getElementById('toggle');
const overLay = document.querySelector('.overlay');
const modalUsers = document.querySelector('.module');

console.log(btnToggle);
console.log(overLay);
btnToggle.onclick = () => {
  overLay.style.display = 'block';
  modalUsers.style.top = '20px';

}

overLay.onclick = () => {
  overLay.style.display = 'none';
  modalUsers.style.top = '-100%';
}



// Fetch API
var listUsers;
var usersAPI = 'http://localhost:3000/Users';
const root = document.getElementById('root')
const containerCard = document.getElementById('container__card')
fetch(usersAPI)
    .then(res => res.json())
    .then(users => {
      listUsers = users;
        var htmls = users.map(user => {
                return `
                    <li id="btn-${user.id}">${user.hoTen}</li>     
                `
        })

        var html = htmls.join('')
        root.innerHTML = html
        listUsers.map(user => {
          let btn = document.querySelector(`#btn-${user.id}`);
          var newHTML = `<div class="card front__card" id="front__${user.id}" style="width: 100%; position: absolute;">
                          <img class="card-img-top" src="./image/avt1.jpg" alt="${user.hoTen}">
                          <div class="card-body">
                            <h5 class="card-title">${user.hoTen}</h5>
                            <p class="card-text">${user.noiThuongTru}</p>
                            <div class="btn btn-primary" id="infor__${user.id}">Thông tin</div>
                          </div>
                        </div>
                        <div class="card back__card" id="back__${user.id}" style="width: 100%; position: absolute;" >
                          <div class="card-body">
                            <h5 class="card-title">${user.hoTen}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Ngày sinh: ${user.ngaySinh}</h6>
                            <p class="card-text">Giới tính: ${user.gioiTinh}</p>
                            <p class="card-text">Số bảo hiểm: ${"Chưa cập nhật." && user.bhyt}</p>
                            <p class="card-text">Số điện thoại: ${"Chưa cập nhật." && user.sdt}</p>
                            <p class="card-text">Nơi thường trú: ${user.noiThuongTru}</p>
                            <p class="card-text">Quê quán: ${user.queQuan}</p>
                            <a href="#" class="card-link">Another link</a>
                          </div>
                        </div>
                        `

          btn.onclick = () => {
            containerCard.innerHTML = newHTML;
            let btnInfor = document.getElementById(`infor__${user.id}`);
            let front__card = document.querySelector(`#front__${user.id}`);
            let back__card = document.querySelector(`#back__${user.id}`);
            notification.style.display = "block";
            canh_bao[1].style.display = "inline-block";
            nguy_hiem[4].style.display = "inline-block";
            modalUsers.style.top = '-100%';
            overLay.style.display = 'none';
            btnInfor.onclick = () => {
              front__card.style.display = 'none';
              front__card.style.transform = 'rotateY(90deg)';
              back__card.style.visibility = 'visible';
              back__card.style.transform = 'rotateY(0deg)';
              back__card.style.transition = '0.5s';
            }
          }
      })      
  }
)
  
// -------------------------thông báo từ sàng lọc---------------------------------------------------------------------------------
var notification = document.getElementById("myNotification");
var dong_tiem = document.getElementsByClassName("notification__body__button--tiem")[0];
var dong_hoantiem = document.getElementsByClassName("notification__body__button--hoantiem")[0];
var dong_khongtiem = document.getElementsByClassName("notification__body__button--khongtiem")[0];

var canh_bao = document.getElementsByClassName('fa-triangle-exclamation')
var nguy_hiem = document.getElementsByClassName('fa-circle-xmark')

dong_tiem.onclick = function () {
    notification.style.display = "none";
    nhandulieu()
}
function iconthongbao(){
    console.log('ko tiem')
}
dong_hoantiem.onclick = function () {
    notification.style.display = "none";
    var hoantiem = document.getElementsByClassName('thongBao--hoanTiem')[0];
    hoantiem.style.opacity = 1;
    iconthongbao();
    setTimeout(() => {
        hoantiem.style.opacity = 0;
    }, 2000);
}
dong_khongtiem.onclick = function () {
    notification.style.display = "none";
    var khongtiem = document.getElementsByClassName('thongBao--khongTiem')[0];
    khongtiem.style.opacity = 1;
    iconthongbao();
    var icon__thongbao = document.getElementById('icon--thongbao')
    icon__thongbao.style.transform = 'rotate(-40deg)';
    setTimeout(() => {
        icon__thongbao.style.transform = 'rotate(40deg)';
    }, 1500);

    setTimeout(() => {
        khongtiem.style.opacity = 0;
    }, 2000);
}

window.onclick = function (event) {
    if (event.target == notification) {
        notification.style.display = "none";
    }
}

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}



showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}

