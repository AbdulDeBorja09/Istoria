function QuantityButton() {
  const minusBtn = document.getElementById("minusBtn");
  const addBtn = document.getElementById("addBtn");
  const quantityInput = document.getElementById("quantityInput");

  minusBtn.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
      updateButtonState();
    }
  });

  addBtn.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity < 10) {
      quantityInput.value = currentQuantity + 1;
      updateButtonState();
    }
  });

  function updateButtonState() {
    let currentQuantity = parseInt(quantityInput.value);
    minusBtn.disabled = currentQuantity === 1;
    addBtn.disabled = currentQuantity === 10;
    minusBtn.classList.toggle("disabled", currentQuantity === 1);
    addBtn.classList.toggle("disabled", currentQuantity === 10);
  }
}

function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var eyeIcon = document.getElementById("eyeIcon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

function togglePasswordVisibility2() {
  var passwordField = document.getElementById("cpassword");
  var eyeIcon = document.getElementById("eyeIcon2");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

var modal = document.getElementById("myModal");
var anchors = document.getElementsByClassName("openModal");
window.onload = function () {
  modal.style.display = "block";
};
anchor.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
modal.getElementsByClassName("close")[0].onclick = function () {
  modal.style.display = "none";
};

if (window.location.pathname === "../../User/user_tray.html") {
  document.addEventListener("DOMContentLoaded", QuantityButton);
}
