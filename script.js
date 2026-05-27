// Data
const classesData = [
    { time: "06:00 AM", name: "HIIT Blast", trainer: "Coach Ryan", intensity: "🔥🔥🔥", status: "STARTING SOON", statusClass: "card-soon" },
    { time: "07:00 AM", name: "Strength Training", trainer: "Coach Ali", intensity: "🔥🔥", status: "LIVE NOW", statusClass: "card-live" },
    { time: "09:00 AM", name: "Yoga Flow", trainer: "Coach Sara", intensity: "🔥", status: "UPCOMING", statusClass: "card-upcoming" },
    { time: "12:00 PM", name: "Core Burn", trainer: "Coach Mike", intensity: "🔥🔥", status: "UPCOMING", statusClass: "card-upcoming" },
    { time: "06:00 PM", name: "CrossFit", trainer: "Coach Dani", intensity: "🔥🔥🔥", status: "POPULAR", statusClass: "card-popular" },
    // Duplicates for seamless scrolling if needed, or just enough to fill screen
    { time: "07:30 PM", name: "Boxing", trainer: "Coach Tyson", intensity: "🔥🔥🔥", status: "UPCOMING", statusClass: "card-upcoming" },
    { time: "08:30 PM", name: "Recovery", trainer: "Coach Sara", intensity: "🔥", status: "UPCOMING", statusClass: "card-upcoming" }
];

const promoHeadlines = [
    "JOIN TODAY<br>GET STRONGER",
    "NO EXCUSES<br>PUSH YOUR LIMITS",
    "SHOW UP<br>STRONG",
    "EARN YOUR<br>RESULTS"
];

// Elements
const classesList = document.getElementById('classes-list');
const promoHeadlineEl = document.getElementById('promo-headline');
const glassPanel = document.querySelector('.glass-panel');
const timelineProgress = document.querySelector('.timeline-progress');

// Initialize Timeline
function initTimeline() {
    classesList.innerHTML = '';

    classesData.forEach((cls, index) => {
        const card = document.createElement('div');
        card.className = `class-card ${cls.statusClass}`;
        // Stagger animation delay
        card.style.animationDelay = `${index * 0.15}s`;

        card.innerHTML = `
            <div class="class-time">${cls.time}</div>
            <div class="class-info">
                <div class="class-name">${cls.name}</div>
                <div class="class-details">
                    <span>${cls.trainer}</span>
                    <span class="intensity">${cls.intensity}</span>
                </div>
            </div>
            <div class="class-status">${cls.status}</div>
        `;
        classesList.appendChild(card);
    });
}

// Timeline Scrolling Logic
let scrollPos = 0;
const cardHeight = 130; // Approx height + gap
const totalCards = classesData.length;

function scrollTimeline() {
    scrollPos -= 0.5; // Speed

    // Reset condition based on content length
    if (Math.abs(scrollPos) > (cardHeight * totalCards) - (cardHeight * 4)) {
        scrollPos = 0; // Reset for loop
        // Re-trigger slide in animations
        const cards = document.querySelectorAll('.class-card');
        cards.forEach((c, i) => {
            c.style.animation = 'none';
            c.offsetHeight; // Trigger reflow
            c.style.animation = `slideUpFade 0.5s ease-out forwards`;
            c.style.animationDelay = `${i * 0.1}s`;
        });
    }

    classesList.style.transform = `translateY(${scrollPos}px)`;
    requestAnimationFrame(scrollTimeline);
}

// Progress Bar Animation (Simulated class progress)
let progressPercent = 0;
function updateProgress() {
    progressPercent += 0.5;
    if (progressPercent > 100) progressPercent = 0;

    // Map to specific card heights if needed, or just fill container
    // Here we simulate filling up the line
    timelineProgress.style.height = `${progressPercent}%`;
}

// Promo Content Rotation
let promoIndex = 0;
function rotatePromo() {
    glassPanel.style.opacity = '0';

    setTimeout(() => {
        promoIndex = (promoIndex + 1) % promoHeadlines.length;
        promoHeadlineEl.innerHTML = promoHeadlines[promoIndex];

        // Slight structural shift for dynamic feel
        const shiftY = Math.random() > 0.5 ? '2px' : '-2px';
        glassPanel.style.transform = `translateY(${shiftY})`;

        glassPanel.style.opacity = '1';
    }, 500); // Wait for fade out
}

// Start everything
document.addEventListener('DOMContentLoaded', () => {
    initTimeline();

    // Start timeline scroll
    setTimeout(() => {
        requestAnimationFrame(scrollTimeline);
    }, 2000); // Wait for initial intro animations

    // Update progress bar
    setInterval(updateProgress, 200);

    // Rotate Promo every 7 seconds
    setInterval(rotatePromo, 7000);
});
