function check() {
  let Incheck = document.querySelectorAll('input[data-ok="ok"]');
  Incheck.forEach((ckitem) => {
    ckitem.addEventListener("input", verify);
  });
}
function verify() {
  let check = document.querySelectorAll('input[data-ok="ok"]');
  check.forEach((ckh) => {
    if (ckh.value === "") {
      ckh.classList.remove("form-valid");
    } else {
      ckh.classList.add("form-valid");
    }
  });
}
function phone() {
  var phone = document.getElementById("phone");
  if (phone.value === "") {
    phone.classList.remove("form-valid");
  } else if (phone.value.length <= 13) {
    phone.classList.remove("form-valid");
  } else {
    phone.classList.add("form-valid");
  }
}
function validate() {
  var user = document.getElementById("email").value;
  var user2 = document.getElementById("email");
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(user)) {
    user2.classList.add("form-valid");
    return true;
  } else {
    user2.classList.remove("form-valid");
    return false;
  }
}
// function global
const masks = {
  phone(value) {
    phone();
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
  name(value) {
    check();
    return value;
  },
  email(value) {
    validate();
    return value;
  },
  message(value) {
    check();
    return value;
  },
};
document.querySelectorAll('[data-check="check"]').forEach(($input) => {
  const field = $input.dataset.js;

  $input.addEventListener(
    "input",
    (e) => {
      e.target.value = masks[field](e.target.value);
    },
    false
  );
});

function boolValid() {
  let check = document.querySelectorAll("[required]");
  check.forEach((ckh) => {
    if (ckh.value === "" || ckh.checked === false) {
      ckh.classList.add("valid_bool");
    } else {
      ckh.classList.remove("valid_bool");
    }
  });
}