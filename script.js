// Fixing target logic: Targeting November 19, 2026 accurately
const targetYear = 2026;
const targetDate = new Date(`November 19, ${targetYear} 00:00:00`).getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Time calculations
    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    // Render countdown numbers securely
    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

    // True trigger only when the target actually crosses zero
    if (gap <= 0) {
        clearInterval(countdown);
        revealSurprise();
    }
}, 1000);

// Passcode Override Feature so she can preview/flex early
function checkPasscode() {
    const codeEntered = document.getElementById("passcode").value;
    // She can use this secret key to open the surprise deck instantly
    if (codeEntered === "aditi19") { 
        clearInterval(countdown);
        revealSurprise();
    } else {
        alert("❌ System Error: Access Key Mismatch!");
    }
}

function revealSurprise() {
    document.getElementById("countdown-screen").classList.add("hidden");
    document.getElementById("surprise-screen").classList.remove("hidden");
    triggerInfiniteConfetti();
}

// Fixed Premium Audio Vibe Controller
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");
    const text = document.getElementById("music-text");
    
    if (music.paused) {
        music.play();
        icon.innerText = "⏸️";
        text.innerText = "System Music Active";
        text.style.color = "#00f5d4";
    } else {
        music.pause();
        icon.innerText = "🎵";
        text.innerText = "System Music Paused";
        text.style.color = "#fff";
    }
}

// Explosive Confetti Script
function triggerInfiniteConfetti() {
    var end = Date.now() + (7 * 1000);
    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 60, origin: { x: 0 }, colors: ['#00f5d4', '#ff007f', '#fee440'] });
        confetti({ particleCount: 3, angle: 120, spread: 60, origin: { x: 1 }, colors: ['#00f5d4', '#ff007f', '#fee440'] });
        if (Date.now() < end) { requestAnimationFrame(frame); }
    }());
}
