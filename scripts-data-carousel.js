
document.addEventListener("DOMContentLoaded", function () {
    const shell = document.getElementById("all-use-collections");
    if (!shell) return;
    const track = shell.querySelector(".collection-track");
    const prev = shell.querySelector(".data-carousel-prev");
    const next = shell.querySelector(".data-carousel-next");

    function cardStep() {
        const first = track.querySelector(".collection-card");
        if (!first) return 320;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || "10");
        return first.getBoundingClientRect().width + gap;
    }

    prev?.addEventListener("click", () => {
        track?.scrollBy({ left: -cardStep(), behavior: "smooth" });
    });

    next?.addEventListener("click", () => {
        track?.scrollBy({ left: cardStep(), behavior: "smooth" });
    });
});

