const tombol = document.querySelector(".nav-toggle");
const nav = document.querySelector(".navi");

// responsive menu
let hitung = 0;
tombol.addEventListener("click", () => {
  hitung++;
  if (hitung % 2 == 1) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
