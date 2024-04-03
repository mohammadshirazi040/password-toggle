const btnToggle = document.getElementById("btn");
const passwordInput = document.getElementById("password-input");

let PasswordVisible = false;

function render() {
  if (PasswordVisible) {
    passwordInput.setAttribute("type", "text");
    btnToggle.textContent = "Hide Password";
  } else {
    passwordInput.setAttribute("type", "password");
    btnToggle.textContent = "Show Password";
  }
}

render();

btnToggle.addEventListener("click", function () {
  PasswordVisible = !PasswordVisible;
  render();
});
