export default function initTypewriter() {
  const message = ["Desenvolvedor Web"];
  const speed = 100;
  let textPosition = 0;

  function typewriter() {
    document.querySelector("#typewriter").innerHTML =
      message[0].substring(0, textPosition) + "<span> |</span>";
    if (textPosition++ != message[0].length) setTimeout(typewriter, speed);
  }

  window.addEventListener("load", typewriter);
}
