/* assets/js/app.js */

// Vibe Configuration (Dials: VARIANCE = 6, MOTION = 5, DENSITY = 4)
const MOTION_ENABLED = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// High-fidelity Fallback Portfolio Data
const FALLBACK_PROJECTS = [
  {
    name: "anes-journey",
    description: "Interactive visual developer journey built in Dart and Flutter. Features custom transition nodes, localized SQLite state storage, and dynamic asset animations representing a roadmap visualizer.",
    language: "Dart",
    stargazers_count: 12,
    html_url: "https://github.com/anesdevv/anes-journey",
    homepage: "https://github.com/anesdevv/anes-journey#readme",
    category: "mobile",
    tags: ["Flutter", "Dart", "SQLite", "Visual UI"]
  },
  {
    name: "infinite-xo",
    description: "An infinite scaling tic-tac-toe game with modular grid loops. Engineered using TypeScript, offering reactive visual layouts, offline sync features, and modern component lifecycle hooks.",
    language: "TypeScript",
    stargazers_count: 15,
    html_url: "https://github.com/anesdevv/infinite-xo",
    homepage: "https://infinite-xo.vercel.app",
    category: "web",
    tags: ["TypeScript", "Vercel", "Infinite Loop", "Modern UI"]
  },
  {
    name: "employee-management-system",
    description: "Desktop administrative ledger interface engineered in Python. Incorporates highly-polished layouts using CustomTkinter, concurrent thread updates, and local database table managers.",
    language: "Python",
    stargazers_count: 8,
    html_url: "https://github.com/anesdevv/employee-management-system",
    homepage: "https://github.com/anesdevv/employee-management-system#demo",
    category: "web",
    tags: ["Python", "CustomTkinter", "DB Manager", "Local Storage"]
  },
  {
    name: "car-dealers",
    description: "Clean, responsive, editorial automotive storefront interface. Employs semantic HTML5 markup, responsive grid structures, and asynchronous CSS query filters for high-contrast viewing.",
    language: "HTML",
    stargazers_count: 5,
    html_url: "https://github.com/anesdevv/car-dealers",
    homepage: "https://github.com/anesdevv/car-dealers#specs",
    category: "web",
    tags: ["HTML5", "CSS3", "Storefront", "Responsive"]
  },
  {
    name: "Learning-German-With-Anes",
    description: "Linguistic flashcard helper application designed for offline learning. Orchestrates dynamic vocab states, progressive repetition intervals, and clean offline storage hooks.",
    language: "HTML",
    stargazers_count: 4,
    html_url: "https://github.com/anesdevv/Learning-German-With-Anes",
    homepage: "https://learning-deutsch-with-anes.netlify.app/",
    category: "web",
    tags: ["Linguistics", "JavaScript", "Netlify", "Offline First"]
  }
];

// Map language to visual color highlights
const LANGUAGE_COLORS = {
  "Rust": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Dart": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Go": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "JavaScript": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "JS": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Python": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "HTML": "bg-red-500/10 text-red-400 border-red-500/20",
  "CSS": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Pascal": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
};

// Global Store
let projectsData = [];
let activeFilter = 'all';

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  setupFilterListeners();
  loadPortfolio();
});

// Load Projects from API or Fallback
async function loadPortfolio() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  renderSkeletons(container);

  try {
    const response = await fetch("https://api.github.com/users/anesdevv/repos");
    if (!response.ok) {
      throw new Error(`GitHub API error: status ${response.status}`);
    }
    const repos = await response.json();
    
    if (repos && Array.isArray(repos) && repos.length > 0) {
      // Process real GitHub repositories (excluding the portfolio repository itself)
      projectsData = repos
        .filter(repo => !repo.fork && repo.name.toLowerCase() !== "anesdevv.github.io")
        .map(repo => {
          // Categorize based on main language or tags
          let category = "web";
          const desc = (repo.description || "").toLowerCase();
          const lang = (repo.language || "").toLowerCase();
          
          if (lang === "dart" || desc.includes("flutter") || desc.includes("android") || desc.includes("ios")) {
            category = "mobile";
          }
          
          // Generate helper tags
          const tags = [];
          if (repo.language) tags.push(repo.language);
          
          return {
            name: repo.name,
            description: repo.description || "No description provided. Click below to inspect source code.",
            language: repo.language || "Other",
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url,
            homepage: repo.homepage || null,
            category: category,
            tags: tags
          };
        });
        
      // Sort by stars/recency
      projectsData.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else {
      // API worked but user had empty profile
      console.warn("Empty GitHub profile returned. Bootstrapping premium fallbacks.");
      projectsData = [...FALLBACK_PROJECTS];
    }
  } catch (error) {
    console.error("Failed to fetch GitHub repositories. Loading high-fidelity static fallbacks.", error);
    projectsData = [...FALLBACK_PROJECTS];
  }

  // Render processed projects
  renderProjects();
}

// Render skeleton loaders for visual polish
function renderSkeletons(container) {
  let skeletonsHTML = "";
  for (let i = 0; i < 3; i++) {
    skeletonsHTML += `
      <div class="glass-panel p-6 rounded-xl border border-slate-800 animate-pulse flex flex-col h-full justify-between">
        <div>
          <div class="h-4 bg-slate-800 rounded w-2/3 mb-4"></div>
          <div class="space-y-2 mb-6">
            <div class="h-3 bg-slate-800 rounded w-full"></div>
            <div class="h-3 bg-slate-800 rounded w-5/6"></div>
            <div class="h-3 bg-slate-800 rounded w-4/5"></div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-auto">
          <div class="h-6 bg-slate-800 rounded-full w-20"></div>
          <div class="h-4 bg-slate-800 rounded w-16"></div>
        </div>
      </div>
    `;
  }
  container.innerHTML = skeletonsHTML;
}

// Render Project Cards to DOM with active filters
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = projectsData.filter(proj => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-500 mb-4">
          <i class="ph-bold ph-folder-open text-2xl"></i>
        </div>
        <h4 class="text-lg font-medium text-slate-300">No projects found</h4>
        <p class="text-slate-500 text-sm mt-1 max-w-xs mx-auto">Try selecting another filter or reload the showcase.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((proj, idx) => {
    const langColor = LANGUAGE_COLORS[proj.language] || "bg-slate-500/10 text-slate-400 border-slate-500/20";
    
    // Tag labels
    const tagElements = (proj.tags || [proj.language]).map(tag => 
      `<span class="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded border border-slate-800 bg-slate-950/50 text-slate-400">${tag}</span>`
    ).join("");

    // Dynamic animation entrance offset
    const animationDelay = MOTION_ENABLED ? `style="animation-delay: ${idx * 75}ms"` : '';
    const fadeClass = MOTION_ENABLED ? 'animate-fade-in-up' : '';

    return `
      <article ${animationDelay} class="${fadeClass} glass-panel hover-glow p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 flex flex-col justify-between h-full transition-all duration-300 group">
        <div>
          <!-- Title -->
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-lg font-bold text-slate-100 font-mono group-hover:text-emerald-400 transition-colors duration-200">${proj.name}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-4 group-hover:text-slate-300 transition-colors duration-200">${proj.description}</p>
        </div>

        <div>
          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagElements}
          </div>

          <!-- Actions -->
          <div class="flex justify-between items-center pt-3 border-t border-slate-800/60 mt-auto">
            <!-- Language Tag -->
            <span class="text-xs font-mono font-medium px-2 py-0.5 rounded-full border ${langColor}">
              ${proj.language}
            </span>
            
            <!-- Links -->
            <div class="flex items-center gap-2">
              <a href="${proj.html_url}" target="_blank" rel="noopener noreferrer" 
                 class="active-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950/40 hover:bg-slate-900/40 text-xs font-mono text-slate-400 hover:text-emerald-400 hover:border-emerald-500/25 transition-all duration-200" 
                 aria-label="View source code for ${proj.name}">
                <i class="ph-bold ph-git-branch text-sm text-emerald-400/80"></i> Code
              </a>
              ${proj.homepage ? `
                <a href="${proj.homepage}" target="_blank" rel="noopener noreferrer" 
                   class="active-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950/40 hover:bg-slate-900/40 text-xs font-mono text-slate-400 hover:text-teal-400 hover:border-teal-500/25 transition-all duration-200" 
                   aria-label="View live demo for ${proj.name}">
                  <i class="ph-bold ph-arrow-square-out text-sm text-teal-400/80"></i> Demo
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Filter Navigation Setup
function setupFilterListeners() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const filter = e.currentTarget.getAttribute("data-filter");
      if (filter === activeFilter) return;

      activeFilter = filter;

      // Update active states
      buttons.forEach(b => {
        b.classList.remove("bg-emerald-500/10", "text-emerald-400", "border-emerald-500/30");
        b.classList.add("bg-slate-900/40", "text-slate-400", "border-slate-800/80");
      });

      e.currentTarget.classList.remove("bg-slate-900/40", "text-slate-400", "border-slate-800/80");
      e.currentTarget.classList.add("bg-emerald-500/10", "text-emerald-400", "border-emerald-500/30");

      // Re-render with fade animations
      renderProjects();
    });
  });
}
