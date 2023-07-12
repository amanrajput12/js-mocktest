var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");
var modal = document.getElementById("modal");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});


