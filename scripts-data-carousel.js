
document.addEventListener("DOMContentLoaded", function () {
    const shell = document.getElementById("all-use-collections");
    if (!shell) return;
    const track = shell.querySelector(".collection-track");
    const prev = shell.querySelector(".data-carousel-prev");
    const next = shell.querySelector(".data-carousel-next");
    const cards = Array.from(track.querySelectorAll(".collection-card"));

    if (!cards.length) return;

    // Finds the index of the next card
    function cardStep(){
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

    // Next card (move right)
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

    // Prev card (move left)
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

    // Track ProgressBar
    track.addEventListener("scroll", updateProgressBar);
    updateProgressBar();
});

