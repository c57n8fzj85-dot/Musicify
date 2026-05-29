// Get all audio elements and play buttons
const allAudios = document.querySelectorAll("audio");
const allPlayBtns = document.querySelectorAll(".card .play-btn");

// Function to stop all audios and reset all buttons
function stopAllAudios(exceptAudio = null) {
  allAudios.forEach((audio) => {
    if (audio !== exceptAudio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  
  allPlayBtns.forEach((btn) => {
    btn.textContent = "▶";
  });
}

// Add click event to all play buttons
allPlayBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const audio = btn.closest(".card").querySelector("audio");
    
    if (!audio) return;
    
    if (audio.paused) {
      // Stop all other audios
      stopAllAudios(audio);
      // Play current audio
      audio.play();
      btn.textContent = "❚❚";
    } else {
      // Pause current audio
      audio.pause();
      btn.textContent = "▶";
    }
  });
  
  // Reset button when audio ends
  const audio = btn.closest(".card").querySelector("audio");
  if (audio) {
    audio.addEventListener("ended", () => {
      btn.textContent = "▶";
    });
  }
});
