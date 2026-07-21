const projects = [
  {
    title: 'Macbook GSAP Landing Page',
    description: 'Immersive animated product landing experience with GSAP and Three.js.',
    link: 'https://gsap-macbook-landing-rust.vercel.app/',
    stack: ['React', 'Tailwind CSS', 'GSAP', 'Three.js'],
  },
  {
    title: 'Kinetix',
    description: 'Modern, high-energy landing page focused on bold visuals and clear messaging.',
    link: 'https://kinetix-beige.vercel.app/',
    stack: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Enterprise Dashboard',
    description: 'Professional analytics dashboard with a polished admin UI.',
    link: 'https://enterprise-dashboard-five-omega.vercel.app/',
    stack: ['React', 'Tailwind CSS'],
  },
  {
    title: 'AI Game',
    description: 'Creative and interactive experience blending modern frontend and playful visuals.',
    link: 'https://ai-game-dun.vercel.app/',
    stack: ['React', 'Tailwind CSS'],
  },
];

const skills = ['React.js', 'Tailwind CSS', 'Next.js', 'TypeScript', 'GSAP', 'Three.js', 'UI Designing'];
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

import { useEffect, useMemo, useState } from 'react';

export default function App() {
const [theme] = useState('dark');

  const isDark = true;

  const toggleTheme = () => {};

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
    window.localStorage.setItem('theme', 'dark');
  }, []);

  const headerClass =
    'sticky top-0 z-20 border-b backdrop-blur-xl ' +
    (isDark ? 'border-white/15 bg-slate-950/60' : 'border-slate-200/60 bg-white/60');

  const linkClass = (baseDark, baseLight) => (isDark ? baseDark : baseLight);

  return (
    <div
      className={`min-h-screen bg-transparent ${isDark ? 'text-slate-100' : 'text-slate-900'}`}
    >
      <header id="home" className={headerClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <a
            href="#home"
            className={linkClass(
              'text-lg font-bold tracking-wide text-slate-100',
              'text-lg font-bold tracking-wide text-slate-900'
            )}
          >
            MOHAMED <span className="text-sky-400 font-bold">TAHA</span>
          </a>

          <div className="flex items-center gap-3">
            <nav className="flex flex-wrap items-center gap-2 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkClass(
                    'rounded-full border border-white/10 px-3 py-2 transition hover:bg-white/10',
                    'rounded-full border border-slate-300/60 bg-white/40 px-3 py-2 transition hover:bg-slate-900/5'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>


          </div>
        </div>
      </header>

      <main className="px-6 py-10 md:px-10 lg:px-16">
        <section
          className={
            'mx-auto flex max-w-7xl flex-col gap-10 rounded-[2rem] border p-8 shadow-glow backdrop-blur-xl md:p-12 ' +
            (isDark
              ? 'border-white/15 bg-white/10'
              : 'border-slate-200/70 bg-white/70')
          }
          id="hero"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
<div
                className="inline-flex rounded-full border border-sky-300/60 bg-sky-800/35 px-4 py-2 text-sm font-medium text-sky-100"
              >
                React Developer • UI Designer • Creative Frontend Engineer
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Building high-performance web apps with modern frontend tools.
              </h1>
              <p className="max-w-2xl text-lg" style={{ color: isDark ? '#cbd5e1' : '#334155' }}>
                I craft fast, responsive, and component-driven web interfaces that turn complex designs into seamless digital products.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-sky-500 px-5 py-3 font-medium text-white transition hover:bg-sky-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className={linkClass(
                    'rounded-full border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/10',
                    'rounded-full border border-slate-300/70 bg-white/60 px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-900/5'
                  )}
                >
                  Let’s Connect
                </a>
              </div>
            </div>

            <div
              className={
                'relative overflow-hidden rounded-3xl border p-6 transition-transform duration-500 hover:-translate-y-1 ' +
                'animate-[float_4s_ease-in-out_infinite] ' +
                (isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200/70 bg-white/70')
              }
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-500/15 blur-2xl" />
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-glow">
                  <img
                    src="portfolio/src/content/MohamedTaha.jpeg"
                    alt="Mohamed Taha"
                    className="h-28 w-28 object-cover"
                  />
                </div>
              </div>
              <p
                className="mt-4 text-center text-sm uppercase tracking-[0.3em] animate-pulse"
                style={{ color: isDark ? '#94a3b8' : '#64748b' }}
              >
                Core strengths
              </p>
              <ul className="mt-3 space-y-2">
                {skills.slice(0, 4).map((skill, i) => (
                  <li
                    key={skill}
                    className={
                      'rounded-2xl border px-4 py-2 transition-all duration-300 hover:scale-[1.03] hover:border-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.25)] ' +
                      (isDark ? 'border-white/10 bg-white/5' : 'border-slate-200/70 bg-white')
                    }
                    style={{
                      opacity: 0,
                      animation: `skillPopIn 0.5s ease-out ${i * 0.12}s forwards`,
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

<section id="about" className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={
              'group rounded-[2rem] border p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 ' +
              (isDark ? 'border-white/10 bg-white/5' : 'border-slate-200/70 bg-white/70')
            }
          >
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">About</p>
            <h2 className="mt-3 text-2xl font-semibold">Engineering interactive web experiences</h2>
            <p className="mt-4" style={{ color: isDark ? '#cbd5e1' : '#334155' }}>
               I specialize in building highly responsive, component-driven web applications. My focus is on writing clean, scalable code that translates complex designs into pixel-perfect interactive realities.
            </p>
          </div>
          <div
            className={
              'group rounded-[2rem] border p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-800/60 ' +
              (isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200/70 bg-white/70')
            }
          >
            <p style={{ color: isDark ? '#cbd5e1' : '#334155' }}>
              From complex, state-managed applications to pixel-perfect landing pages, I translate design mockups into production-ready code while keeping performance, SEO, and maintainability at the core of my workflow.
            </p>
          </div>
        </section>

        <section
          className={
            'mx-auto mt-8 max-w-7xl rounded-[2rem] border p-8 backdrop-blur-xl md:p-10 ' +
            (isDark ? 'border-white/10 bg-white/5' : 'border-slate-200/70 bg-white/70')
          }
        >
          <div className="grid gap-8 lg:grid-cols-[1fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">DEVELOPMENT PHILOSOPHY</p>
              <h2 className="text-3xl font-semibold">Modern design met with scalable code</h2>
              <p style={{ color: isDark ? '#cbd5e1' : '#334155' }}>
                Turning complex ideas into clean, component-driven interfaces using modern web tools, prioritizing performance, accessibility, and sleek layout execution.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={
            'mx-auto mt-8 max-w-7xl rounded-[2rem] border p-8 backdrop-blur-xl md:p-10 ' +
            (isDark ? 'border-white/10 bg-white/5' : 'border-slate-200/70 bg-white/70')
          }
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Selected Work</p>
              <h2 className="mt-2 text-3xl font-semibold">Featured projects</h2>
            </div>
            <p style={{ color: isDark ? '#cbd5e1' : '#334155' }}>
              A mix of animated product experiences, polished marketing sites, and modern dashboard interfaces.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={
                  'group rounded-3xl border p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 ' +
                  (isDark ? 'border-white/10 bg-slate-900/70 hover:bg-slate-800/80' : 'border-slate-200/70 bg-white/70 hover:bg-slate-50')
                }
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
<span className="rounded-full border border-sky-300/70 bg-sky-500/35 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-50 font-semibold">
                    Case Study
                  </span>
                </div>
                <p style={{ color: isDark ? '#cbd5e1' : '#334155' }} className="mt-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item, sIdx) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-200 transition-all duration-300 hover:scale-105 hover:border-sky-300/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                      style={{
                        opacity: 0,
                        animation: `skillPopIn 0.4s ease-out ${(index * 0.12) + (sIdx * 0.08)}s forwards`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass(
                    'mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm transition duration-300 group-hover:bg-sky-500/20 group-hover:text-sky-100',
                    'mt-6 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm transition duration-300 group-hover:bg-sky-500/20 group-hover:text-sky-800'
                  )}
                >
                  Visit Project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={
            'mx-auto mt-8 max-w-7xl rounded-[2rem] border p-8 backdrop-blur-xl md:p-10 ' +
            (isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200/70 bg-white/70')
          }
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold">Let’s build something standout</h2>
              <p className="mt-4 max-w-xl" style={{ color: isDark ? '#cbd5e1' : '#334155' }}>
                Open for freelance clients, contract work, and custom frontend builds.
              </p>
            </div>
            <div className="rounded-3xl border border-sky-400/20 bg-sky-500/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40">
              <div className="space-y-3">
                <a
                  href="https://wa.me/201099940939"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass(
                    'block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10',
                    'block rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white'
                  )}
                >
                  WhatsApp
                </a>
                <a
                  href="https://github.com/mohamedtaha152"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass(
                    'block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10',
                    'block rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white'
                  )}
                >
                  GitHub
                </a>
                <a
                  href="portfolio/src/content/MohamedTahaCV (1).pdf"
                  className={linkClass(
                    'block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10',
                    'block rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white'
                  )}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={
          'border-t px-6 py-6 text-center text-sm md:px-10 lg:px-16 ' +
          (isDark ? 'border-white/10 bg-slate-950/80 text-slate-400' : 'border-slate-200/70 bg-white/70 text-slate-600')
        }
      >
        <p>© 2026 Mohamed Taha. Crafted for modern frontend engineering.</p>
      </footer>
    </div>
  );
}

