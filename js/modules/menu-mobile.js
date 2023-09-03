export default function initMenuMobile() {
  const hamburger = document.querySelector(".menu-hamburger");
  const menu = document.querySelector(".header-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu-mobile").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    })
  );
}
