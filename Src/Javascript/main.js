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

// var modal = document.getElementById("myModal");

// // When the page finishes loading, open the modal
// window.onload = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// modal.getElementsByClassName("close")[0].onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Get the modal
var modal = document.getElementById("myModal");

// Get the anchor tags with the class 'open-modal' to open the modal
var modalLinks = document.querySelectorAll(".open-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the page loads, open the modal
window.onload = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on an anchor tag with the class 'open-modal' to open the modal
for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = function () {
    modal.style.display = "block";
  };
}

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scroll down
    document
      .getElementById("navbarToggleExternalContent")
      .classList.remove("show");
  } else {
    // Scroll up
    document
      .getElementById("navbarToggleExternalContent")
      .classList.add("show");
  }
  lastScrollTop = currentScroll;
});
