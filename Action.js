const playBtn = document.querySelector(".play-btn");
const song = document.getElementById("song");

if (playBtn && song) {
  playBtn.addEventListener("click", () => {
    if (song.paused) {
      song.play();
      playBtn.textContent = "❚❚";
    } else {
      song.pause();
      playBtn.textContent = "▶";
    }
  });

  // Reset button when song ends
  song.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
}