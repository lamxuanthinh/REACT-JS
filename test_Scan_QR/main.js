function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = '<span class="result">'+qrCodeMessage+'</span>';
}
function onScanError(errorMessage) {
  //handle scan error
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);


// var arr = "{
//   name: 'thinhlam',
//   Dob: '29/08/2003',
//   Address1 : 'quangnam',
//   Address2 : 'quangnam' 
// }";

var arr1 =  ['thinhlam', '29/08/2003','quangnam','quangnam'];
var arr = arr1;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

