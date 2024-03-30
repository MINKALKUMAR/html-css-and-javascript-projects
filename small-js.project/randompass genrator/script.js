const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const symbolset = "!@#$%^&*()+";
const numberset = "1234567890";

// sectors
let btn = document.querySelector(".btn");
let passbox = document.querySelector(".pass-box");
let totalchar = document.getElementById("total-char");
let upperinput = document.getElementById("upper-case");
let lowerinput = document.getElementById("lower-case");
let numberinput = document.getElementById("number");
let symbolinput = document.getElementById("symbol");

const getrandom = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};
const genratepass = (password = "") => {
  if (upperinput.checked) {
    password += getrandom(upperset);
  }
  if (lowerinput.checked) {
    password += getrandom(lowerset);
  }
  if (symbolinput.checked) {
    password += getrandom(symbolset);
  }
  if (numberinput.checked) {
    password += getrandom(numberset);
  }
  if (password.length < totalchar.value) {
    return genratepass(password);
  }

  passbox.innerHTML = truncateString(password, totalchar.value);
};
btn.addEventListener("click", () => {
  genratepass();
});

function truncateString(str, num) {
  if (str.length > num) {
    let substring = str.substring(0, num);
    return substring;
  } else {
    return str;
  }
}
genratepass();
