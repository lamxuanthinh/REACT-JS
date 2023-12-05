const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input"),
        bntDone = document.querySelector('.btnColor');
let textModal = document.querySelector('#textModal');
let data = document.querySelectorAll('.input-field > input')


// let string1= '';
// let arr = []
// for (const key in data) {
//         data[key].onchange = (e) => {
//             arr.push(e.target.value)
//             console.log(arr)
//             string1 += `${arr[key]}!`
//             console.log(string1)
//             localStorage.setItem("textvalue", string1)
// }


nextBtn.addEventListener("click", ()=> {
    // allInput.forEach(input => {
    //     if(input.value != ""){
    //         form.classList.add('secActive');
    //     }else{
    //         form.classList.remove('secActive');
    //         }
    //     })
    form.classList.add('secActive');
        textModal.innerText = `Mã xác thực được gửi đến số điện thoại ${arr[3].toString()}`
    })
    
backBtn.addEventListener("click", () => form.classList.remove('secActive'));



bntDone.addEventListener("click", () =>{
    setTimeout(() => {
        location.replace('/vaccinationRegister/indexQR.html');
    },0);
})








