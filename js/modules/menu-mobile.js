export default function initMenuMobile() {
  const hamburger = document.querySelector(".menu-hamburger");
  const menu = document.querySelector(".header-menu");
  let menuOpen = false;

  hamburger.addEventListener("click", () => {
    menuOpen = !menuOpen;
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  document.body.addEventListener("click", (event) => {
    if (
      menuOpen &&
      !menu.contains(event.target) &&
      event.target !== hamburger
    ) {
      menuOpen = false;
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    }
  });

  document.querySelectorAll(".menu-mobile").forEach((n) =>
    n.addEventListener("click", () => {
      menuOpen = false;
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    })
  );
}
