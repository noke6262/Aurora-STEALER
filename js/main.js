let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".popup");
let openPopupButtons = document.querySelectorAll(".img-block");
let closePopupButton = document.querySelector(".popup-close");

console.log(openPopupButtons);
console.log(popup);
console.log(popupBg);

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

////////////////

let sftpBg = document.querySelector(".sftp__bg");
let sftp = document.querySelector(".sftp");
let opensftpButtons = document.querySelectorAll(".sftp-block");
let closesftpButton = document.querySelector(".sftp-close");

console.log(opensftpButtons);
console.log(sftp);
console.log(sftpBg);

opensftpButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    sftpBg.classList.add("active");
    sftp.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target === sftpBg) {
    sftpBg.classList.remove("active");
    sftp.classList.remove("active");
  }
});

closesftpButton.addEventListener("click", () => {
  sftpBg.classList.remove("active");
  sftp.classList.remove("active");
});
