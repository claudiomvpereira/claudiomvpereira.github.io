export default function initCarousel() {
  document.addEventListener("DOMContentLoaded", function () {
    const thumbs = document.querySelectorAll(".projetos-thumb");
    const cards = document.querySelectorAll(".projeto-card");
    const prevButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");

    let currentCardIndex = 0;

    function showCard(cardIndex) {
      cards.forEach((card) => {
        card.classList.remove("current-card");
      });
      cards[cardIndex].classList.add("current-card");

      thumbs.forEach((thumb) => {
        thumb.classList.remove("current-card");
      });
      thumbs[cardIndex].classList.add("current-card");
    }

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        currentCardIndex = index;
        showCard(currentCardIndex);
      });
    });

    prevButton.addEventListener("click", () => {
      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
      showCard(currentCardIndex);
    });

    nextButton.addEventListener("click", () => {
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      showCard(currentCardIndex);
    });

    showCard(currentCardIndex);
  });
}
