// let textModal = document.querySelector("#textModal");
// let bntDone = document.querySelector("#btnDone");

//start validation
function validator(options) {
  let formRegister = document.querySelector(options.form);
  let buttonSubmit = formRegister.querySelector(options.submitData);

  // click display modal
  buttonSubmit.onclick = () => {
    let checkData;
    let dataSubmit = [];
    if (formRegister) {
      options.rules.forEach((element) => {
        let inputElement = formRegister.querySelector(element.selector);
        if (inputElement) {
          let warning = inputElement.parentElement.querySelector(
            options.formMessage
          );
          checkData = element.test(inputElement, warning, element.selected);
          dataSubmit.push(inputElement.value.trim());
        }
      });
    }

    if (checkData) {
      //call api Post
      //call api Get
      buttonSubmit.setAttribute("data-target", "#exampleModal");
      buttonSubmit.setAttribute("data-toggle", "modal");
      console.log(dataSubmit);
      let textModal = document.querySelector(options.textModal);
      textModal.innerText = `Mã xác thực được gửi đến số điện thoại ${dataSubmit[1]}`;
      localStorage.setItem("textvalue", dataSubmit);
    }
  };

  if (formRegister) {
    options.rules.forEach((element) => {
      let inputElement = formRegister.querySelector(element.selector);
      if (inputElement) {
        let warning = inputElement.parentElement.querySelector(
          options.formMessage
        );
        inputElement.onblur = () => {
          element.test(inputElement, warning, element.selected);
        };
      }
    });
  }
}
// check input
function isRequired(selector) {
  return {
    selector: selector,
    test: (inputElement, warning) => {
      inputElement.oninput = () => {
        warning.innerText = "";
        inputElement.style = "border-color:none";
      };
      if (inputElement.value.trim()) {
        warning.innerText = "";
        inputElement.style = "border-color:none";
        return true;
      } else {
        warning.innerText = "Vui lòng nhập thông tin này";
        inputElement.style = "border-color:red";
        return false;
      }
    },
  };
}
// check select
function isRequiredSelect(selector, selected) {
  return {
    selector: selector,
    selected: selected,
    test: (inputElement, warning, selectedData) => {
      inputElement.oninput = () => {
        warning.innerText = "";
        inputElement.style = "border-color:none";
      };
      if (inputElement.value !== selectedData) {
        warning.innerText = "";
        inputElement.style = "border-color:none";
        return true;
      } else {
        warning.innerText = "Vui lòng nhập thông tin này";
        inputElement.style = "border-color:red";
        return false;
      }
    },
  };
}

// check phone
function isNumberPhone(selector) {
  return {
    selector: selector,
    test: (inputElement, warning) => {
      inputElement.oninput = () => {
        warning.innerText = "";
        inputElement.style = "border-color:none";
      };
      // regex will return true khi đúng và false khi sai
      let regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (regexPhoneNumber.test(inputElement.value.trim())) {
        warning.innerText = "";
        inputElement.style = "border-color:none";
        return true;
      } else {
        warning.innerText = "Vui lòng nhập số điện thoại hợp lệ";
        inputElement.style = "border-color:red";
        return false;
      }
    },
  };
}

// check Code People
function isRequiredCodePeople(selector) {
  return {
    selector: selector,
    test: (inputElement, warning) => {
      inputElement.oninput = () => {
        warning.innerText = "";
        inputElement.style = "border-color:none";
      };
      let regexCodePeople = /^0[0-9]{11}$/g;
      if (regexCodePeople.test(inputElement.value.trim())) {
        warning.innerText = "";
        inputElement.style = "border-color:none";
        return true;
        // call api POST
        // call api Get
      } else {
        warning.innerText = "Định dạng 08/09 hoặc 12 số";
        inputElement.style = "border-color:red";
        return false;
      }
    },
  };
}

// end validattion

// nextBtn.addEventListener("click", () => {
//   let Name1 = document.querySelector(".name1").value;
//   let dob = document.querySelector(".dob").value;
//   let gender = document.querySelector(".gender").value;
//   let address = document.querySelector(".address").value;
//   let NumberPhone = document.querySelector(".phone1").value;
//   let arr = [Name1, dob, gender, address];
//   let string1 = "";
//   for (const key in arr) {
//     string1 += `${arr[key]}!`;
//   }
//   console.log(string1);
//   textModal.innerText = `Mã xác thực được gửi đến số điện thoại ${NumberPhone}`;
//   localStorage.setItem("textvalue", string1);
// });

// bntDone.addEventListener("click", () => {
//   setTimeout(() => {
//     location.replace("./indexQR.html");
//   }, 0);
// });
