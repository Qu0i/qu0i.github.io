const menu = document.getElementById("menu");
const detail = document.getElementById("detail");

let projectsCache = [];

function makeMenuItem(project) {
  const li = document.createElement("li");
  li.className = "menu-item";
  li.dataset.id = project.id;

  li.innerHTML = `
        <div class="title-row">
            <span class="title">${project.title}</span>
            ${project.lang ? `<span class="lang">${project.lang}</span>` : ""}
        </div>
        <div class="meta">${project.short}</div>
    `;

  li.addEventListener("click", () => selectProject(project.id, li));
  return li;
}

function selectProject(id, el) {
  document
    .querySelectorAll(".menu-item")
    .forEach((item) => item.classList.remove("active"));

  if (el) el.classList.add("active");

  const project = projectsCache.find((p) => p.id === id);

  if (!project) {
    detail.innerHTML = '<p class="empty">Project not found.</p>';
    return;
  }

  detail.classList.remove("visible");

  setTimeout(() => {
    detail.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>

            <div class="tech">
                ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>

            <div class="project-links">
                ${project.repo ? `<a class="link" href="${project.repo}" target="_blank">Repository</a>` : ""}
                ${project.demo ? `<a class="btn" href="${project.demo}" target="_blank">Demo</a>` : ""}
            </div>
        `;
    detail.classList.add("visible");
  }, 120);
}

fetch("../assets/data/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    projectsCache = projects;

    projects.forEach((p) => {
      menu.appendChild(makeMenuItem(p));
    });

    if (projects.length) {
      const first = menu.querySelector(".menu-item");
      if (first) first.click();
    }
  });
