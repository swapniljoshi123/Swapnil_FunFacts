const factsWithIcons = [
    { fact: "I love coding and aspire to become a top-notch full-stack developer.", icon: "fas fa-code" },
    { fact: "Exploring the world of cybersecurity fascinates me, and I enjoy analyzing potential threats.", icon: "fas fa-shield-alt" },
    { fact: "I'm passionate about writing—be it creative content, technical blogs, or journaling my thoughts.", icon: "fas fa-pen-nib" },
    { fact: "Books are my escape; I read everything from thrilling novels to thought-provoking non-fiction.", icon: "fas fa-book" },
    { fact: "I'm an enthusiastic cricket and badminton player—sports keep me energized and focused.", icon: "fas fa-futbol" },
    { fact: "Learning about emerging technologies and their real-world applications excites me.", icon: "fas fa-rocket" },
    { fact: "I enjoy solving complex problems, whether in code or life!", icon: "fas fa-puzzle-piece" },
    { fact: "I once built a fully functional app in just one day—it was an exhilarating challenge.", icon: "fas fa-laptop-code" },
    { fact: "Staying up-to-date with tech trends and security practices is a personal hobby.", icon: "fas fa-globe" },
    { fact: "My ideal weekend includes experimenting with new programming frameworks or libraries.", icon: "fas fa-cogs" },
    { fact: "I love mentoring others in tech and sharing my knowledge with the community.", icon: "fas fa-user-friends" },
    { fact: "I believe in lifelong learning, and every day is an opportunity to grow.", icon: "fas fa-lightbulb" }
];

// Elements
const factElement = document.getElementById('fact');
const iconElement = document.getElementById('fact-icon');
const button = document.getElementById('generate-btn');

// Event Listener
button.addEventListener('click', () => {
    // Reset animation
    factElement.style.animation = 'none';
    setTimeout(() => factElement.style.animation = '', 10);

    // Display a random fact with an icon
    const randomIndex = Math.floor(Math.random() * factsWithIcons.length);
    const randomFact = factsWithIcons[randomIndex];

    factElement.textContent = randomFact.fact;
    iconElement.className = randomFact.icon + " text-warning"; // Update icon
});
