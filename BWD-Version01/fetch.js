         // fetchAPI  
            var accountsAPI = 'http://localhost:3000/Accounts'

            var mainDataUser;
            var idEdit;
            function start() {
              handleCreateForm();
            }
 
            start();
            
             function createAccounts(data) {
                 var option = {
                     method: "POST",
                     headers: {
                         'Content-Type': 'application/json'
                       },
                     body: JSON.stringify(data)
                 }

                 /// fix bug
                  fetch(accountsAPI, option)
                     .then(res => res.json())
                    //  .then(() => {
                    //   window.location = '/From-Login/index.html'
                    //  })
             }
            

             
            function handleCreateForm() {
              var createBtn = document.querySelector('#create')
               createBtn.onclick = () => {
                     const ten = document.querySelector('input[name = "ten"]').value;
                     const sdt = document.querySelector('input[name = "sdt"]').value;
                     const cccd = document.querySelector('input[name = "cccd"]').value;
                     const maXacNhan = document.querySelector('input[name = "maXacNhan"]').value;
                     const anhXacThuc = document.querySelector('input[name = "formFile"]').files[0].name;
                     const e = document.getElementById('vaiTro');
                     const vaiTro = e.options[e.selectedIndex].text;
                     const matKhau = document.querySelector('input[name = "matKhau"]').value;
                     const nhaplaimatkhau = document.querySelector('input[name = "nhaplaimatkhau"]').value;
                     var data = {
                         ten: ten,
                         anhXacThuc: anhXacThuc,
                         sdt: sdt,
                         maXacNhan: maXacNhan,
                         cccd: cccd,
                         vaiTro: vaiTro,
                         matKhau: matKhau,
                     };
                      createAccounts(data);
                      setTimeout(() => {
                        location.replace('/Form-SignUp/finish_signUp/index.html')
                      })
               }
            }



            
