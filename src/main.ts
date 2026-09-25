import './style.css';

/* ==========================================================================
   Basavaraj Hebbal - Selected Core Skills (Only C, Java, HTML, CSS, DBMS)
   ========================================================================== */
interface Skill {
  name: string;
  badge: string;
  description: string;
  iconSvg: string;
}

const skills: Skill[] = [
  {
    name: 'C Programming',
    badge: 'Core Language',
    description: 'Pointers, dynamic memory management (malloc/free), structs, recursion, and core data structure logic.',
    iconSvg: `<svg viewBox="0 0 128 128" width="36" height="36"><path fill="#e5a96a" d="M117.5 33.5L66.7 4.2c-1.7-1-3.8-1-5.5 0L10.5 33.5c-1.7 1-2.7 2.8-2.7 4.7v58.6c0 2 1 3.7 2.7 4.7l50.7 29.3c1.7 1 3.8 1 5.5 0l50.7-29.3c1.7-1 2.7-2.8 2.7-4.7V38.2c.1-1.9-.9-3.7-2.6-4.7z"/><path fill="#1a0f0a" d="M64 96c-17.7 0-32-14.3-32-32s14.3-32 32-32c9.2 0 17.5 3.9 23.3 10.1l-10 10c-3.4-3.6-8.2-5.9-13.3-5.9-10.1 0-18.3 8.2-18.3 18.3s8.2 18.3 18.3 18.3c5.3 0 10.1-2.4 13.5-6.2l10.2 9.8C79.7 92.4 72.2 96 64 96z"/></svg>`
  },
  {
    name: 'Java',
    badge: 'OOP & DSA',
    description: 'Object-Oriented Programming (Classes, Inheritance, Polymorphism, Encapsulation), collections, and algorithmic problem solving.',
    iconSvg: `<svg viewBox="0 0 128 128" width="36" height="36"><path fill="#f59e0b" d="M48.2 96.6s-6.3 3.6 4.4 4.8c13 1.5 19.8 1.4 34.3-.8 0 0 4.1 2.6 9.8 4.9-38.3 16.3-84.6-2-48.5-8.9M43.9 81.3s-7.1 5.3 3.6 6.3c14.2 1.3 26.6 1.5 45.4-1.3 0 0 3.2 3.3 7.6 4.7-32.9 12.4-74.9 3.5-56.6-9.7M67.1 55.4c4.6 5.3-1.2 10.4-1.2 10.4s11.9-6.1 6.5-13.9c-5.2-7.5-9.6-11.2 12.8-23.7 0 0-26.6 6.7-18.1 27.2"/><path fill="#e5a96a" d="M84.5 91.5c16.3-9.5 8.7-18.7 3.5-17.5-1.3.3-1.8.8-1.8.8s.5-.6 1.5-1.2c7.6-4.5-5.3-13.7-15.8-6.5-3.8 2.6-9.8 8.8-4.2 10 7.1 1.6 12.8.9 16.8 14.4M61.9 14.5c4.7 7.7-12.2 19.2-8.3 29.5 3.3-7.5 1.5-12.7 7.4-17.7 8.3-7.1 13.6-10.4.9-11.8M89.7 114.7c-25 1.7-44.4 1.9-57.9-.9-4.2-.9-3-3.2-3-3.2s-2.7 1.8 1.4 3.4c14.8 5.7 65.5 3.8 69.3-1.3 0 0-3.3 1.4-9.8 2"/></svg>`
  },
  {
    name: 'HTML',
    badge: 'Structure',
    description: 'Semantic markup, accessible web hierarchy, clean document trees, and modern web application foundations.',
    iconSvg: `<svg viewBox="0 0 128 128" width="36" height="36"><path fill="#f59e0b" d="M19.3 115.8L8.6 0h110.8l-10.7 115.8L64 128l-44.7-12.2z"/><path fill="#d97706" d="M64 117.8l36.5-10 9-97.8H64v107.8z"/><path fill="#fdf8f5" d="M64 52.8H46.4L45.2 39h18.8V25.2H30.1l3.5 39.8H64V52.8zm0 35.8l-.2.1-15.4-4.2-1-11.2H33.6l1.9 22.1 28.5 7.9V88.6z"/><path fill="#ffffff" d="M64 52.8v12.2h16.4l-1.5 17.5-14.9 4v14.4l28.5-7.9 3.9-40.2H64zm0-27.6v13.8h33.8L99 25.2H64z"/></svg>`
  },
  {
    name: 'CSS',
    badge: 'Styling & Motion',
    description: 'Responsive Flexbox, CSS Grid layouts, glassmorphism UI, smooth transitions, keyframe animations, and custom color themes.',
    iconSvg: `<svg viewBox="0 0 128 128" width="36" height="36"><path fill="#d97706" d="M19.3 115.8L8.6 0h110.8l-10.7 115.8L64 128l-44.7-12.2z"/><path fill="#e5a96a" d="M64 117.8l36.5-10 9-97.8H64v107.8z"/><path fill="#fdf8f5" d="M64 52.8H46.4L45.2 39h18.8V25.2H30.1l3.5 39.8H64V52.8zm0 35.8l-.2.1-15.4-4.2-1-11.2H33.6l1.9 22.1 28.5 7.9V88.6z"/><path fill="#ffffff" d="M64 52.8v12.2h16.4l-1.5 17.5-14.9 4v14.4l28.5-7.9 3.9-40.2H64zm0-27.6v13.8h33.8L99 25.2H64z"/></svg>`
  },
  {
    name: 'DBMS',
    badge: 'Database Management',
    description: 'Relational Database concepts, ER modeling, SQL querying, table joins, 1NF/2NF/3NF Normalization, and ACID transaction rules.',
    iconSvg: `<svg viewBox="0 0 128 128" width="36" height="36"><path fill="#e5a96a" d="M64 4C28.7 4 0 16.5 0 32v64c0 15.5 28.7 28 64 28s64-12.5 64-28V32C128 16.5 99.3 4 64 4zm48 92c0 6.6-21.5 12-48 12S16 102.6 16 96v-8.8c10.4 5.5 28.5 8.8 48 8.8s37.6-3.3 48-8.8V96zm0-24c0 6.6-21.5 12-48 12S16 78.6 16 72v-8.8c10.4 5.5 28.5 8.8 48 8.8s37.6-3.3 48-8.8V72zm0-24c0 6.6-21.5 12-48 12S16 54.6 16 48v-8.8c10.4 5.5 28.5 8.8 48 8.8s37.6-3.3 48-8.8V48zm0-24c0 6.6-21.5 12-48 12S16 30.6 16 24s21.5-12 48-12 48 5.4 48 12z"/></svg>`
  }
];

/* ==========================================================================
   Render Portfolio Application HTML
   ========================================================================== */
function renderApp(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Navigation Bar -->
    <header class="navbar" id="navbar">
      <div class="container nav-container">
        <a href="#home" class="nav-brand" aria-label="Basavaraj Hebbal Portfolio">
          <div class="brand-icon">BH</div>
          <div class="brand-name">BASAVARAJ <span class="truffle-gradient-text">HEBBAL</span></div>
        </a>

        <!-- Navigation Links -->
        <nav class="nav-links" aria-label="Main Navigation">
          <a href="#home" class="nav-link active">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#profiles" class="nav-link">Profiles</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <!-- Navbar Actions -->
        <div class="nav-actions">
          <a href="#contact" class="primary-btn shine-btn" style="padding: 9px 20px; font-size: 0.88rem;">
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <!-- Mobile Hamburger Toggle -->
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
          <div class="hamburger-box">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </div>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer Menu -->
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <a href="#home" class="nav-link active mobile-link">Home</a>
      <a href="#about" class="nav-link mobile-link">About</a>
      <a href="#education" class="nav-link mobile-link">Education</a>
      <a href="#skills" class="nav-link mobile-link">Skills</a>
      <a href="#profiles" class="nav-link mobile-link">Profiles</a>
      <a href="#contact" class="nav-link mobile-link">Contact</a>
      <div style="margin-top: 20px;">
        <a href="#contact" class="primary-btn shine-btn mobile-link" style="width: 100%; text-align: center;">
          <span>Get in Touch</span>
        </a>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <main>
      <!-- 1. HERO SECTION (Galaxy Motion & Soft Molten Caramel Glow) -->
      <section class="hero" id="home">
        <!-- Interactive Galaxy Simulation Canvas -->
        <canvas class="particle-canvas" id="particle-canvas"></canvas>
        <div class="galaxy-nebulas"></div>
        <div class="hero-grid"></div>

        <div class="container hero-content">
          <div class="hero-text reveal active">
            <div class="hero-greeting">
              <span class="hero-greeting-pill highlight-bangers">★ WELCOME TO MY PORTFOLIO ★</span>
            </div>

            <!-- BIG ATTRACTIVE NAME WITH GRAVITAS ONE (Soft Refined Diffusion) -->
            <div class="name-hero-container">
              <h1 class="hero-name-big headline-font">
                BASAVARAJ HEBBAL
              </h1>
            </div>

            <!-- Dynamic Typing Headline -->
            <div class="hero-role-wrapper">
              <span class="hero-role-prompt highlight-bangers">&gt;</span>
              <span class="hero-role-prefix">Aspiring</span>
              <span class="hero-role-dynamic truffle-gradient-text" id="typing-text">Web Developer</span>
            </div>

            <!-- Short & Sweet Bio -->
            <p class="hero-description">
              3rd-semester Computer Science student at <strong style="color: var(--accent-caramel);">REVA University</strong>. Passionate about writing clean code in <strong>C &amp; Java</strong>, building modern web experiences with <strong>HTML &amp; CSS</strong>, and mastering <strong>DBMS</strong>.
            </p>

            <!-- Hero Action Buttons with Direct Profile Links -->
            <div class="hero-actions">
              <a href="https://www.linkedin.com/in/basavaraj-hebbal-0b7002342/" target="_blank" rel="noopener noreferrer" class="primary-btn shine-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Basavaraj-2007-k" target="_blank" rel="noopener noreferrer" class="secondary-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                <span>GitHub Repos</span>
              </a>
              <a href="https://leetcode.com/u/Basavaraj_33/" target="_blank" rel="noopener noreferrer" class="secondary-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.732 3.755 3.755 0 0 1 .614-.567l4.132-4.426 5.06-5.41a1.395 1.395 0 0 0-.97-2.362zm5.79 9.13a1.382 1.382 0 0 0-1.38 1.382v.81H9.866a1.38 1.38 0 1 0 0 2.76h8.027v.81a1.38 1.38 0 1 0 2.76 0v-4.38a1.382 1.382 0 0 0-1.38-1.382z"/></svg>
                <span>LeetCode</span>
              </a>
            </div>

            <!-- Highlighted Core Skills Ticker -->
            <div class="hero-tech-ticker">
              <span class="ticker-label highlight-bangers">MY FOCUS:</span>
              <div class="ticker-track">
                <span class="ticker-item"><span class="ticker-bullet">●</span> C PRGM</span>
                <span class="ticker-item"><span class="ticker-bullet">●</span> JAVA</span>
                <span class="ticker-item"><span class="ticker-bullet">●</span> HTML</span>
                <span class="ticker-item"><span class="ticker-bullet">●</span> CSS</span>
                <span class="ticker-item"><span class="ticker-bullet">●</span> DBMS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <a href="#about" class="hero-scroll" aria-label="Scroll to About section">
          <span class="highlight-bangers">SCROLL TO EXPLORE</span>
          <div class="scroll-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </div>
        </a>
      </section>

      <!-- Section Transition Divider -->
      <div class="section-divider"></div>

      <!-- 2. ABOUT ME SECTION -->
      <section class="section" id="about">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-badge highlight-bangers">WHO I AM</span>
            <h2 class="section-title headline-font">ABOUT <span class="truffle-gradient-text">ME</span></h2>
            <p class="section-subtitle">
              Passionate student developer at REVA University focusing on programming logic and web development.
            </p>
          </div>

          <div class="about-grid">
            <!-- Left: Short & Sweet Narrative Card -->
            <div class="glass-card about-text-card reveal delay-1">
              <h3 class="about-card-title headline-font">
                Driven by Code &amp; Curiosity
              </h3>
              <p style="margin-top: 14px; font-size: 1.05rem; line-height: 1.7;">
                I'm <strong>Basavaraj Hebbal</strong>, currently in my <strong>3rd Semester</strong> pursuing a Bachelor of Technology in Computer Science and Engineering at <strong>REVA University</strong>, Bengaluru.
              </p>
              <p style="margin-top: 12px; font-size: 1.05rem; line-height: 1.7;">
                My technical interest centers on mastering <strong>C and Java</strong> for algorithmic problem solving, building responsive interfaces with <strong>HTML &amp; CSS</strong>, and structuring relational data with <strong>DBMS &amp; SQL</strong>.
              </p>

              <div class="about-highlight-box highlight-bangers">
                "WRITE CLEAN CODE. SOLVE PROBLEMS DAILY. IMPROVE CONSTANTLY."
              </div>
            </div>

            <!-- Right: Quick Profile Summary Card -->
            <div class="glass-card info-card reveal delay-2">
              <div class="info-card-header">
                <div class="info-avatar-icon highlight-bangers">BH</div>
                <div>
                  <h3 class="headline-font" style="font-size: 1.25rem;">Basavaraj Hebbal</h3>
                  <p style="color: var(--accent-caramel); font-size: 0.9rem;">Computer Science Student</p>
                </div>
              </div>

              <div class="info-details-list" style="margin-top: 20px;">
                <div class="info-detail-item">
                  <span class="detail-label">University</span>
                  <span class="detail-value">REVA University</span>
                </div>
                <div class="info-detail-item">
                  <span class="detail-label">Degree</span>
                  <span class="detail-value">B.Tech in CSE (3rd Sem)</span>
                </div>
                <div class="info-detail-item">
                  <span class="detail-label">Location</span>
                  <span class="detail-value">Bengaluru, Karnataka</span>
                </div>
                <div class="info-detail-item">
                  <span class="detail-label">Core Stacks</span>
                  <span class="detail-value" style="color: var(--accent-caramel);">C, Java, HTML, CSS, DBMS</span>
                </div>
                <div class="info-detail-item">
                  <span class="detail-label">Status</span>
                  <span class="detail-value" style="color: var(--accent-gold);">Open to Learning &amp; Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Transition Divider -->
      <div class="section-divider"></div>

      <!-- 3. EDUCATION SECTION -->
      <section class="section" id="education">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-badge highlight-bangers">ACADEMIC JOURNEY</span>
            <h2 class="section-title headline-font">MY <span class="truffle-gradient-text">EDUCATION</span></h2>
            <p class="section-subtitle">
              Formal computer science foundations and engineering coursework.
            </p>
          </div>

          <div class="education-compact-container">
            <div class="glass-card edu-card reveal delay-1">
              <div class="edu-card-top">
                <div>
                  <span class="edu-badge highlight-bangers">UNDERGRADUATE</span>
                  <h3 class="edu-institution headline-font">REVA UNIVERSITY</h3>
                  <div class="edu-degree">Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering</div>
                </div>
                <div class="edu-period highlight-bangers">2025 — PRESENT (3RD SEMESTER)</div>
              </div>

              <div class="edu-pills-row">
                <span class="edu-pill">📍 Bengaluru, Karnataka</span>
                <span class="edu-pill">🎓 Computer Science &amp; Engineering</span>
                <span class="edu-pill">💻 Web Development &amp; Problem Solving</span>
              </div>

              <p class="edu-desc">
                Currently in the 3rd Semester. Deepening core understanding in C programming, Object-Oriented Programming with Java, Database Management Systems (DBMS), and modern responsive web markup.
              </p>

              <div class="edu-tags">
                <span class="edu-tag">C Language &amp; Data Structures</span>
                <span class="edu-tag">Java &amp; OOP Concepts</span>
                <span class="edu-tag">HTML &amp; CSS Web Basics</span>
                <span class="edu-tag">Database Management Systems (DBMS)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Transition Divider -->
      <div class="section-divider"></div>

      <!-- 4. CORE SKILLS SECTION -->
      <section class="section" id="skills">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-badge highlight-bangers">TECHNICAL FOCUS</span>
            <h2 class="section-title headline-font">CORE <span class="truffle-gradient-text">SKILLS</span></h2>
            <p class="section-subtitle">
              Selected key programming languages, web technologies, and database systems.
            </p>
          </div>

          <div class="skills-grid">
            ${skills
              .map(
                (skill, idx) => `
              <div class="glass-card skill-card reveal delay-${idx + 1}">
                <div class="skill-header">
                  <div class="skill-icon-box">
                    ${skill.iconSvg}
                  </div>
                  <span class="skill-badge highlight-bangers">${skill.badge}</span>
                </div>
                <h3 class="skill-name headline-font">${skill.name}</h3>
                <p class="skill-desc">${skill.description}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- Section Transition Divider -->
      <div class="section-divider"></div>

      <!-- 5. CODING PROFILES & HIGHLIGHTED LINKS -->
      <section class="section" id="profiles">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-badge highlight-bangers">PROFILES &amp; ACTIVITY</span>
            <h2 class="section-title headline-font">CODING <span class="truffle-gradient-text">PROFILES</span></h2>
            <p class="section-subtitle">
              Explore my verified code repositories, algorithmic problem-solving profiles, and professional network.
            </p>
          </div>

          <div class="profiles-grid">
            <!-- GitHub Profile Card -->
            <a href="https://github.com/Basavaraj-2007-k" target="_blank" rel="noopener noreferrer" class="glass-card profile-link-card reveal delay-1">
              <div class="profile-card-header">
                <div class="profile-icon-wrapper github-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </div>
                <span class="profile-tag highlight-bangers">CODE REPOSITORIES</span>
              </div>
              <h3 class="profile-card-name headline-font">GitHub</h3>
              <p class="profile-card-desc">Public code repositories, C programming exercises, and web development projects.</p>
              <div class="profile-handle">@Basavaraj-2007-k →</div>
            </a>

            <!-- LinkedIn Profile Card -->
            <a href="https://www.linkedin.com/in/basavaraj-hebbal-0b7002342/" target="_blank" rel="noopener noreferrer" class="glass-card profile-link-card reveal delay-2">
              <div class="profile-card-header">
                <div class="profile-icon-wrapper linkedin-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span class="profile-tag highlight-bangers">PROFESSIONAL NETWORK</span>
              </div>
              <h3 class="profile-card-name headline-font">LinkedIn</h3>
              <p class="profile-card-desc">Connect with me for internship opportunities, technical collaborations, and networking.</p>
              <div class="profile-handle">in/basavaraj-hebbal →</div>
            </a>

            <!-- LeetCode Profile Card -->
            <a href="https://leetcode.com/u/Basavaraj_33/" target="_blank" rel="noopener noreferrer" class="glass-card profile-link-card reveal delay-3">
              <div class="profile-card-header">
                <div class="profile-icon-wrapper leetcode-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.732 3.755 3.755 0 0 1 .614-.567l4.132-4.426 5.06-5.41a1.395 1.395 0 0 0-.97-2.362zm5.79 9.13a1.382 1.382 0 0 0-1.38 1.382v.81H9.866a1.38 1.38 0 1 0 0 2.76h8.027v.81a1.38 1.38 0 1 0 2.76 0v-4.38a1.382 1.382 0 0 0-1.38-1.382z"/></svg>
                </div>
                <span class="profile-tag highlight-bangers">PROBLEM SOLVING</span>
              </div>
              <h3 class="profile-card-name headline-font">LeetCode</h3>
              <p class="profile-card-desc">Active algorithmic practice in C and Java covering arrays, stacks, and search techniques.</p>
              <div class="profile-handle">@Basavaraj_33 →</div>
            </a>

            <!-- Direct Email Card -->
            <div class="glass-card profile-link-card reveal delay-4" id="email-copy-card" style="cursor: pointer;" title="Click to copy email address">
              <div class="profile-card-header">
                <div class="profile-icon-wrapper email-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span class="profile-tag highlight-bangers">DIRECT INBOX</span>
              </div>
              <h3 class="profile-card-name headline-font">Email</h3>
              <p class="profile-card-desc">Click to copy my email address or send a direct message.</p>
              <div class="profile-handle" id="email-address-text">rajuhebal83@gmail.com 📋</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Transition Divider -->
      <div class="section-divider"></div>

      <!-- 6. CONTACT SECTION -->
      <section class="section" id="contact">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-badge highlight-bangers">GET IN TOUCH</span>
            <h2 class="section-title headline-font">LET'S <span class="truffle-gradient-text">CONNECT</span></h2>
            <p class="section-subtitle">
              Have an internship opening, question, or want to discuss a project? Feel free to reach out.
            </p>
          </div>

          <div class="contact-container">
            <!-- Left: Direct Details List -->
            <div class="contact-info-col reveal delay-1">
              <h3 class="contact-headline headline-font">
                Let's Build Something Great Together
              </h3>
              <p class="contact-intro">
                I am actively seeking software engineering and web development internship roles. Reach out through email, LinkedIn, or send a message directly using the form.
              </p>

              <div class="contact-cards-list">
                <!-- Email Item -->
                <div class="contact-link-card" id="contact-email-btn" title="Click to copy email">
                  <div class="contact-icon-wrapper">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div class="contact-card-content">
                    <span class="contact-card-label highlight-bangers">EMAIL (CLICK TO COPY)</span>
                    <span class="contact-card-value">rajuhebal83@gmail.com</span>
                  </div>
                </div>

                <!-- LinkedIn Item -->
                <a href="https://www.linkedin.com/in/basavaraj-hebbal-0b7002342/" target="_blank" rel="noopener noreferrer" class="contact-link-card">
                  <div class="contact-icon-wrapper">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div class="contact-card-content">
                    <span class="contact-card-label highlight-bangers">LINKEDIN</span>
                    <span class="contact-card-value">basavaraj-hebbal-0b7002342</span>
                  </div>
                </a>

                <!-- GitHub Item -->
                <a href="https://github.com/Basavaraj-2007-k" target="_blank" rel="noopener noreferrer" class="contact-link-card">
                  <div class="contact-icon-wrapper">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </div>
                  <div class="contact-card-content">
                    <span class="contact-card-label highlight-bangers">GITHUB</span>
                    <span class="contact-card-value">github.com/Basavaraj-2007-k</span>
                  </div>
                </a>

                <!-- LeetCode Item -->
                <a href="https://leetcode.com/u/Basavaraj_33/" target="_blank" rel="noopener noreferrer" class="contact-link-card">
                  <div class="contact-icon-wrapper">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.732 3.755 3.755 0 0 1 .614-.567l4.132-4.426 5.06-5.41a1.395 1.395 0 0 0-.97-2.362zm5.79 9.13a1.382 1.382 0 0 0-1.38 1.382v.81H9.866a1.38 1.38 0 1 0 0 2.76h8.027v.81a1.38 1.38 0 1 0 2.76 0v-4.38a1.382 1.382 0 0 0-1.38-1.382z"/></svg>
                  </div>
                  <div class="contact-card-content">
                    <span class="contact-card-label highlight-bangers">LEETCODE</span>
                    <span class="contact-card-value">leetcode.com/u/Basavaraj_33</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Right: Interactive Contact Form -->
            <div class="glass-card contact-form-card reveal delay-2">
              <form class="contact-form" id="contact-form">
                <div class="form-group">
                  <label for="contact-name" class="form-label highlight-bangers">YOUR FULL NAME</label>
                  <input type="text" id="contact-name" class="form-input" placeholder="e.g. Recruiter / Collaborator" required />
                </div>

                <div class="form-group">
                  <label for="contact-email" class="form-label highlight-bangers">YOUR EMAIL ADDRESS</label>
                  <input type="email" id="contact-email" class="form-input" placeholder="e.g. name@company.com" required />
                </div>

                <div class="form-group">
                  <label for="contact-message" class="form-label highlight-bangers">MESSAGE</label>
                  <textarea id="contact-message" class="form-textarea" placeholder="Hello Basavaraj, I'd like to connect regarding an opportunity..." required></textarea>
                </div>

                <button type="submit" class="primary-btn shine-btn submit-btn" id="submit-btn">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand-block">
            <h3 class="headline-font" style="font-size: 1.5rem;">BASAVARAJ HEBBAL</h3>
            <p class="footer-role">Computer Science Student &amp; Aspiring Web Developer • REVA University</p>
            <p class="footer-skills-line highlight-bangers">C PRGM • JAVA • HTML • CSS • DBMS</p>
          </div>

          <div class="footer-social-links">
            <a href="https://github.com/Basavaraj-2007-k" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/basavaraj-hebbal-0b7002342/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://leetcode.com/u/Basavaraj_33/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="LeetCode">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.732 3.755 3.755 0 0 1 .614-.567l4.132-4.426 5.06-5.41a1.395 1.395 0 0 0-.97-2.362zm5.79 9.13a1.382 1.382 0 0 0-1.38 1.382v.81H9.866a1.38 1.38 0 1 0 0 2.76h8.027v.81a1.38 1.38 0 1 0 2.76 0v-4.38a1.382 1.382 0 0 0-1.38-1.382z"/></svg>
            </a>
            <a href="mailto:rajuhebal83@gmail.com" class="footer-social-btn" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copy">
            &copy; 2026 Basavaraj Hebbal. Designed &amp; Engineered with Passion.
          </div>
          <button class="back-to-top" id="back-to-top" aria-label="Back to top">
            <span class="highlight-bangers">BACK TO TOP ↑</span>
          </button>
        </div>
      </div>
    </footer>

    <!-- Notification Toast -->
    <div class="toast" id="toast">
      <div class="toast-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div class="toast-message" id="toast-message">Copied to clipboard!</div>
    </div>
  `;
}

/* ==========================================================================
   Wave-Like Interactive Cursor Animation System
   ========================================================================== */
function initCustomCursor(): void {
  const cursor = document.querySelector<HTMLDivElement>('#custom-cursor');
  const follower = document.querySelector<HTMLDivElement>('#cursor-follower');
  const label = document.querySelector<HTMLSpanElement>('#cursor-label');

  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Instant inner dot tracking
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function renderFollower(): void {
    // Smooth lerp (100-150ms spring interpolation)
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;

    follower!.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  // Dynamic hover expansion and card badge logic
  const interactiveTargets = document.querySelectorAll<HTMLElement>(
    'a, button, input, textarea, select, .project-card, .skill-card, .profile-link-card, .hover-target, .hero-name-big, .glass-card'
  );

  interactiveTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-active');
      follower.classList.add('cursor-expand');

      const isCard = el.matches('.skill-card, .profile-link-card, .glass-card, [data-cursor-text]');
      const customText = el.getAttribute('data-cursor-text') || (isCard ? (el.matches('.profile-link-card') ? 'EXPLORE' : 'VIEW') : '');

      if (customText && label) {
        label.textContent = customText;
        follower.classList.add('cursor-view');
      }
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-active');
      follower.classList.remove('cursor-expand');
      follower.classList.remove('cursor-view');
      if (label) {
        label.textContent = '';
      }
    });
  });
}

/* ==========================================================================
   Multi-Layered Galaxy Simulation with Swirling Stars & Meteors
   ========================================================================== */
function initGalaxyBackground(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('#particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const mouse = { x: -1000, y: -1000, radius: 180 };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Galaxy Stars
  interface GalaxyStar {
    x: number;
    y: number;
    radius: number;
    baseAlpha: number;
    twinkleSpeed: number;
    phase: number;
    color: string;
    orbitSpeed: number;
    angle: number;
    distance: number;
  }

  // Shooting Meteors
  interface Meteor {
    x: number;
    y: number;
    vx: number;
    vy: number;
    length: number;
    alpha: number;
    active: boolean;
  }

  const starColors = ['#fdf8f5', '#fbbf24', '#f59e0b', '#e5a96a', '#d97706', '#faebd7'];
  const stars: GalaxyStar[] = [];
  const starCount = Math.min(Math.floor((width * height) / 9000), 160);

  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < starCount; i++) {
    const dist = Math.random() * Math.max(width, height) * 0.7;
    const angle = Math.random() * Math.PI * 2;
    stars.push({
      x: centerX + Math.cos(angle) * dist,
      y: centerY + Math.sin(angle) * dist,
      radius: Math.random() * 2.2 + 0.6,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.04 + 0.01,
      phase: Math.random() * Math.PI * 2,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      orbitSpeed: (0.0002 + Math.random() * 0.0003) * (Math.random() > 0.5 ? 1 : -1),
      angle: angle,
      distance: dist
    });
  }

  const meteors: Meteor[] = [];
  for (let i = 0; i < 3; i++) {
    meteors.push({
      x: Math.random() * width,
      y: Math.random() * (height * 0.5),
      vx: (Math.random() * 5 + 6),
      vy: (Math.random() * 3 + 3),
      length: Math.random() * 80 + 60,
      alpha: 0,
      active: false
    });
  }

  function launchMeteor(): void {
    const inactive = meteors.find((m) => !m.active);
    if (inactive) {
      inactive.x = Math.random() * (width * 0.7);
      inactive.y = Math.random() * (height * 0.4);
      inactive.vx = Math.random() * 6 + 7;
      inactive.vy = Math.random() * 3.5 + 3.5;
      inactive.alpha = 1;
      inactive.active = true;
    }
    setTimeout(launchMeteor, Math.random() * 3500 + 2000);
  }
  setTimeout(launchMeteor, 1500);

  let frame = 0;

  function renderGalaxy(): void {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    frame++;

    // 1. Draw Starfield with Galactic Rotation & Mouse Warp
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Slow galactic orbital drift
      s.angle += s.orbitSpeed;
      s.x = centerX + Math.cos(s.angle) * s.distance;
      s.y = centerY + Math.sin(s.angle) * s.distance;

      // Mouse interactive gravitational pull
      const dx = mouse.x - s.x;
      const dy = mouse.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let curX = s.x;
      let curY = s.y;

      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        curX += (dx / dist) * force * 15;
        curY += (dy / dist) * force * 15;
      }

      // Twinkling scintillation
      s.phase += s.twinkleSpeed;
      const alpha = s.baseAlpha + Math.sin(s.phase) * 0.3;

      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(curX, curY, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.shadowBlur = s.radius > 1.6 ? 8 : 4;
      ctx.shadowColor = s.color;
      ctx.fill();
      ctx.restore();
    }

    // 2. Draw Streaking Meteors / Shooting Stars
    for (let i = 0; i < meteors.length; i++) {
      const m = meteors[i];
      if (m.active) {
        m.x += m.vx;
        m.y += m.vy;
        m.alpha -= 0.015;

        if (m.alpha <= 0 || m.x > width || m.y > height) {
          m.active = false;
        } else {
          ctx.save();
          ctx.globalAlpha = m.alpha;
          const grad = ctx.createLinearGradient(
            m.x,
            m.y,
            m.x - m.vx * (m.length / 10),
            m.y - m.vy * (m.length / 10)
          );
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.3, '#f59e0b');
          grad.addColorStop(1, 'transparent');

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - m.vx * (m.length / 10), m.y - m.vy * (m.length / 10));
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    requestAnimationFrame(renderGalaxy);
  }

  requestAnimationFrame(renderGalaxy);
}

/* ==========================================================================
   Rotating Typing Animation
   ========================================================================== */
function initTypingAnimation(): void {
  const el = document.querySelector<HTMLSpanElement>('#typing-text');
  if (!el) return;

  const roles = [
    'Web Developer',
    'C Programmer',
    'Java Developer',
    'DBMS Explorer',
    'Creative Problem Solver'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type(): void {
    const current = roles[roleIdx];

    if (isDeleting) {
      el!.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      el!.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3D Card Tilt on Hover
   ========================================================================== */
function initCardTilt(): void {
  const cards = document.querySelectorAll<HTMLElement>('.skill-card, .profile-link-card, .edu-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal(): void {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  reveals.forEach((r) => observer.observe(r));
}

/* ==========================================================================
   Navbar Scroll Spy & Active Indicator
   ========================================================================== */
function initNavbarSpy(): void {
  const navbar = document.querySelector<HTMLElement>('#navbar');
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

  window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSection = 'home';
    sections.forEach((section) => {
      const top = section.offsetTop - 130;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSection = section.getAttribute('id') || 'home';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu(): void {
  const toggleBtn = document.querySelector<HTMLButtonElement>('#mobile-toggle');
  const mobileMenu = document.querySelector<HTMLDivElement>('#mobile-menu');
  const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-link');

  if (!toggleBtn || !mobileMenu) return;

  function toggleMenu(): void {
    const isOpen = mobileMenu?.classList.toggle('open');
    toggleBtn?.classList.toggle('active', isOpen);
    toggleBtn?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggleBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   Toast Notification & Contact Form
   ========================================================================== */
function showToast(message: string): void {
  const toast = document.querySelector<HTMLDivElement>('#toast');
  const toastMessage = document.querySelector<HTMLDivElement>('#toast-message');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  const emailCard = document.querySelector<HTMLDivElement>('#email-copy-card');
  const contactEmailBtn = document.querySelector<HTMLDivElement>('#contact-email-btn');

  const copyEmail = () => {
    const email = 'rajuhebal83@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Copied "rajuhebal83@gmail.com" to clipboard!');
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  };

  if (emailCard) emailCard.addEventListener('click', copyEmail);
  if (contactEmailBtn) contactEmailBtn.addEventListener('click', copyEmail);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.querySelector<HTMLInputElement>('#contact-name');
      const submitBtn = document.querySelector<HTMLButtonElement>('#submit-btn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;
      }

      setTimeout(() => {
        const senderName = nameInput ? nameInput.value : 'there';
        showToast(`Thank you, ${senderName}! Your message has been sent.`);
        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          `;
        }
      }, 900);
    });
  }
}

/* ==========================================================================
   Back to Top Helper
   ========================================================================== */
function initBackToTop(): void {
  const btn = document.querySelector<HTMLButtonElement>('#back-to-top');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   Cinematic Left-To-Right Entry Sequence
   ========================================================================== */
function initCinematicEntry(): void {
  const preloader = document.querySelector<HTMLDivElement>('#preloader');
  if (!preloader) return;

  // Let the left-to-right entrance animation unfold gracefully, then wipe to right
  setTimeout(() => {
    preloader.classList.add('curtain-exit-right');
    setTimeout(() => {
      preloader.remove();
    }, 850);
  }, 1900);
}

/* ==========================================================================
   Application Bootstrap
   ========================================================================== */
function bootstrap(): void {
  renderApp();
  initCinematicEntry();
  initCustomCursor();
  initGalaxyBackground();
  initTypingAnimation();
  initCardTilt();
  initScrollReveal();
  initNavbarSpy();
  initMobileMenu();
  initContactForm();
  initBackToTop();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
