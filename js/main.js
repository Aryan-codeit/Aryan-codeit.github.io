/* CONFIG */

const CONFIG = {
  name:"Your Name",
  role:"Computer Science Student",
  about:"I study CS, build robotics systems and experiment with FPV drones. I enjoy algorithms, clean design, and practical engineering.",
  email:"your.email@example.com",
  github:"https://github.com/your_user",
  skills:["Python","JavaScript","C++","Linux","React","Git","Robotics"],
  projects:[
    {title:"FPV Drone Build",desc:"Freestyle drone build with tuning notes.",url:"#"},
    {title:"Web Chess",desc:"Online Stockfish interface.",url:"#"},
    {title:"ML Classifier",desc:"Simple image recognition prototype.",url:"#"},
    {title:"Algo Visualizer",desc:"Sorting and BFS/DFS visualizer.",url:"#"},
  ]
};

/* PARTICLES */
tsParticles.load("tsparticles",{
  particles:{
    number:{value:40},
    color:{value:"#06b6d4"},
    move:{enable:true,speed:1},
    size:{value:2},
    opacity:{value:0.4}
  }
});

/* TYPEWRITER */
function typeWrite(el, text, speed=60){
  let i=0;
  function next(){
    if(i<text.length){
      el.textContent+=text[i];
      i++;
      setTimeout(next,speed);
    }
  }
  next();
}

if(document.getElementById("role")){
  typeWrite(document.getElementById("role"), CONFIG.role);
}

/* INSERT ABOUT TEXT */
if(document.getElementById("aboutText")){
  document.getElementById("aboutText").textContent = CONFIG.about;
}

/* INSERT CONTACT */
if(document.getElementById("email")){
  email.textContent = CONFIG.email;
  email.href = "mailto:"+CONFIG.email;
}
if(document.getElementById("github")){
  github.href = CONFIG.github;
}

/* PROJECTS PAGE */
if(document.getElementById("projectsGrid")){
  const grid = document.getElementById("projectsGrid");

  CONFIG.projects.forEach(p=>{
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <h3><a href="${p.url}" target="_blank">${p.title}</a></h3>
      <p>${p.desc}</p>
    `;
    grid.appendChild(el);
  });
}

/* SKILLS PAGE */
if(document.getElementById("skillsList")){
  const sList = document.getElementById("skillsList");
  CONFIG.skills.forEach(s=>{
    const chip = document.createElement("span");
    chip.className="skill";
    chip.textContent = s;
    sList.appendChild(chip);
  });
}

/* SCROLL REVEAL */
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:.2});

document.querySelectorAll(".fade, .card, .skill").forEach(el=>obs.observe(el));

/* THEME SWITCH */
const toggle = document.getElementById("modeToggle");
toggle.onclick = ()=>{
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀";
};
