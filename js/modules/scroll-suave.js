export default function initScrollSuave() {
  document.addEventListener("DOMContentLoaded", function () {
    var menuHeight = document.querySelector(".header-bg").offsetHeight;
    var menuLinks = document.querySelectorAll(".header-menu a");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        var target = document.querySelector(this.getAttribute("href"));
        var targetOffset = target.offsetTop - menuHeight;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      });
    });
  });
}
