// let data = document.querySelectorAll('.input-field > input')
// let arr = []
// let string ='1'; 
// for (const key in data) {
//     if (Object.hasOwnProperty.call(data, key)) {
//         data[key].onchange = (e) => {
//             arr.push(e.target.value)
//             console.log(e.target.value)
//             console.log(arr)
//         }
//     }
// }
// string = arr.join('');
// console.log(string)
let string2 = localStorage.getItem("textvalue")
// jquery 
$('#container').qrcode({
    "render": "div",
    "width": 300,
    "height": 300,
    "color": "#3a3",
    "text": `${string2}`
  });




const bntdownload = document.querySelector('bntdownload')

bntdownload.addEventListener("click", () => {
      
})

