const passwordBox = document.querySelector(".password");
const copyBtn = document.querySelector(".copyBtn");
const passBtn = document.querySelector(".passBtn");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowecase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allchars = upperCase + lowecase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowecase[Math.floor(Math.random() * lowecase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  passwordBox.value = password;
}

passBtn.addEventListener("click", createPassword);

copyBtn.addEventListener("click", () => {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
});







