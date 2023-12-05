let chucnang = document.querySelector('.chucnang');
let hoanthanh = document.querySelector('.hoanthanh');
chucnang.onclick = function () {
    document.querySelector('.chucnang').style.display = "none";
    document.querySelector('.hoanthanh').style.display = "none";
    window.print();
    document.querySelector('.chucnang').style.display = "block";
    document.querySelector('.hoanthanh').style.display = "block";
}
hoanthanh.onclick = function () {
    window.location = './index.html'
}
// -------------------------------------tùy biến theo số mũi-------------------------------------------------
function mui__2() {
    var table = document.getElementById('bangdongdau');
    table.innerHTML += (`
    <tr>
    <td>
        <b>Mũi 2/Second dose</b><br>
        Ngày/date: <a id="date-Second-Dose"></a> <br>
        Loại vắc xin/Vaccine: <a id="vaccine-Second-Dose"></a>
        <br><br><br><br>
    </td>
    <td class="kyten">
        Cơ sở tiêm chủng/Immunization unit <br>
        Ký tên, đóng dấu <br>
        (Sign and Stamp)
        <br><br><br><br>
    </td>
</tr>
`)
}
function mui__3() {
    var table = document.getElementById('bangdongdau');
    table.innerHTML += (`
<tr>
    <td>
        <b>Mũi 3/Third dose</b><br>
        Ngày/date: <a id="date-Third-Dose"></a> <br>
        Loại vắc xin/Vaccine: <a id="vaccine-Third-Dose"></a>
        <br><br><br><br>
    </td>
        <td class="kyten">
        Cơ sở tiêm chủng/Immunization unit <br>
        Ký tên, đóng dấu <br>
        (Sign and Stamp)
        <br><br><br><br>
    </td>
</tr>
`)
}
function mui__boSung() {
    var table = document.getElementById('bangdongdau');
    table.innerHTML += (`
<tr>
    <td colspan="2" class="lieucoban"><b>Liều bổ sung/additional dose*</b></td>
</tr>
<tr>
    <td>
        <br>
        Ngày/date <br>
        Loại vắc xin/Vaccine: 
        <br><br><br><br>
    </td>
    <td class="kyten">
        Cơ sở tiêm chủng/Immunization unit <br>
        Ký tên, đóng dấu <br>
        (Sign and Stamp)
        <br><br><br><br>
    </td>
</tr>
`)
}
function soMui(){
    var kichThuocHeight = document.getElementById('kichThuoc__phieu')
    var api = 'https://jsonplaceholder.typicode.com/users/1'
fetch(api)
.then(function(response){
    return response.json()
})
.then(function(data){

    var mui2 = [data].map(function(data){
        return `${data.mui2}`;
    })
    if(mui2=='Đã tiêm'){
        mui__2()
        kichThuocHeight.style.height = '540px'
    }
    //--------------------------------------------------------------------------
    var mui3 = [data].map(function(data){
        return `${data.mui3}`;
    })
    if(mui3=='Đã tiêm'){
        mui__3()
        kichThuocHeight.style.height = '660px'
    }
    //--------------------------------------------------------------------------
    var muiBoSung = [data].map(function(data){
        return `${data.muiBoSung}`;
    })
    if(muiBoSung=='Đã tiêm'){
        mui__boSung()
        kichThuocHeight.style.height = '800px'
    }
})
}
// soMui()
