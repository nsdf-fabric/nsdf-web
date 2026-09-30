const root = document.querySelector("[data-carousel]");
const track = document.querySelector("[data-carousel-track]");
const prev = document.querySelector(".carousel-prev");
const next = document.querySelector(".carousel-next");
const filters = document.querySelectorAll(".filter-chip");
const cards = Array.from(track.querySelectorAll(".usecase-card"));

function visibleCards() {
  return [...document.querySelectorAll("[data-use-case]:not([hidden])")];
}

// Finds index of next card
function cardStep() {
  const trackLeft = track.getBoundingClientRect().left;
  let closestIndex = 0;
  let smallestDistance =Infinity;

  cards.forEach((card,index) => {
      const cardLeft = card.getBoundingClientRect().left;
      const distance = Math.abs(cardLeft - trackLeft);
      if (distance < smallestDistance){
          smallestDistance = distance;
          closestIndex = index;
      }
    });
  return closestIndex;
}

// Updates the progress bar
function updateProgressBar(){
    const progressBar = document.getElementById("carousel-progress");
    if(!progressBar || !track) return;
    // Calc max scroll distance
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0){
        progressBar.style.width = "100%"
        return;
    }

    // Calc percentage of bar srolled
    const scrollPercent = (track.scrollLeft / maxScroll) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
}

prev?.addEventListener("click", () => {
  const currentIndex= cardStep();
  const targetIndex = Math.max(currentIndex-1, 0)

  // Scroll card based on index
  cards[targetIndex].scrollIntoView({
      behavior:"smooth",
      inline: "start",
      block: "nearest"
  });
});

next?.addEventListener("click", () => {
  const currentIndex= cardStep();
  const targetIndex = Math.min(currentIndex+1, cards.length-1)

  // Scroll card based on index
  cards[targetIndex].scrollIntoView({
      behavior:"smooth",
      inline: "start",
      block: "nearest"
  });
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll("[data-use-case]").forEach((card) => {
      const categories = (card.dataset.category || "").split(/\s+/);
      card.hidden = filter !== "all" && !categories.includes(filter);
    });

    track?.scrollTo({ left: 0, behavior: "smooth" });
  });
});

// Track ProgressBar
track.addEventListener("scroll", updateProgressBar);
updateProgressBar();
