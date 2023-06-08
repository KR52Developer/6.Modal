let modalBtn = document.querySelector(".modalBtn");
let closeBtn = document.querySelector(".closeBtn");
console.log(closeBtn);
let overlay = document.querySelector(".overlay");



modalBtn.addEventListener("click", function () {
    overlay.classList.toggle("overlayVisibilty");
});

closeBtn.addEventListener("click", function () {
    overlay.classList.toggle("overlayVisibilty");
})