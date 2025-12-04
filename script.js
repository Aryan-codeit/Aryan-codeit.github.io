// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Hero text setup
const titleEl = document.getElementById("title");
const taglineEl = document.getElementById("tagline");
titleEl.textContent = CONFIG.name;

// Animated tagline rotation
let index = 0;
setInterval(() => {
  taglineEl.style.opacity = 0;
  setTimeout(() => {
    taglineEl.textContent = CONFIG.taglineRoles[index];
    taglineEl.style.opacity = 1;
    index = (index + 1) % CONFIG.taglineRoles.length;
  }, 500);
}, 2500);

// Render Projects dynamically
const projectsSection = document.getElementById("projects");
projectsSection.className = "content";
projectsSection.innerHTML = "<h2>Featured Projects</h2>";
CONFIG.home.featuredProjects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
  `;
  projectsSection.appendChild(card);
});

// Render Skills dynamically
const skillsSection = document.getElementById("skills");
skillsSection.className = "skills content";
skillsSection.innerHTML = "<h2>Skills</h2><ul></ul>";
const ul = skillsSection.querySelector("ul");
CONFIG.home.skills.forEach(s => {
  const li = document.createElement("li");
  li.textContent = s;
  ul.appendChild(li);
});
skillsSection.appendChild(ul);

// Render Contact dynamically
const contactSection = document.getElementById("contact");
contactSection.className = "content";
contactSection.innerHTML = "<h2>Contact</h2>";
const info = CONFIG.contact;
const list = document.createElement("ul");
list.innerHTML = `
  <li>Email: <a href="mailto:${info.email}">${info.email}</a></li>
  <li>GitHub: <a href="${info.github}" target="_blank">${info.github}</a></li>
  <li>LinkedIn: <a href="${info.linkedin}" target="_blank">${info.linkedin}</a></li>
  <li>Twitter: <a href="${info.twitter}" target="_blank">${info.twitter}</a></li>
  <li>Discord: ${info.discord}</li>
`;
contactSection.appendChild(list);
