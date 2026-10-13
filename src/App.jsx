import React, { useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Terminal,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  { name: 'HTML', note: 'Building clear, semantic page structures.', icon: Braces, color: 'text-orange-300', mark: '</>' },
  { name: 'CSS', note: 'Exploring layouts, responsive design, and polish.', icon: Layers3, color: 'text-sky-300', mark: '##' },
  { name: 'JavaScript', note: 'Learning to bring interfaces to life.', icon: Code2, color: 'text-yellow-200', mark: 'JS' },
  { name: 'React', note: 'Creating interfaces with reusable components.', icon: Cpu, color: 'text-cyan-200', mark: 'R' },
  { name: 'Python', note: 'Practicing problem solving and scripting.', icon: Terminal, color: 'text-blue-200', mark: 'Py' },
  { name: 'C / C++', note: 'Building programming fundamentals.', icon: Code2, color: 'text-violet-200', mark: 'C+' },
]

const projects = [
  {
    number: '01',
    title: 'Automatic Chick Counting System',
    description: 'A camera-based system concept for counting chicks moving on a conveyor belt, with the goal of reducing repetitive manual counting in hatcheries.',
    technologies: ['Computer Vision', 'Camera System', 'Web Application'],
    status: 'Concept · In development',
    icon: Cpu,
    tone: 'from-violet-400/20 to-indigo-400/5',
    repo: '#replace-project-1-repository',
    demo: '#replace-project-1-demo',
  },
  {
    number: '02',
    title: 'Developer Profile Card',
    description: 'A frontend practice project focused on shaping a personalized developer profile into a simple, expressive interface.',
    technologies: ['HTML', 'CSS', 'JavaScript / React'],
    status: 'Practice project',
    icon: Code2,
    tone: 'from-fuchsia-400/20 to-violet-400/5',
    repo: '#replace-project-2-repository',
    demo: '#replace-project-2-demo',
  },
  {
    number: '03',
    title: 'Upcoming Project',
    description: 'A space reserved for the next idea worth exploring. Details will take shape as the project moves from a plan into a build.',
    technologies: ['Curiosity', 'Learning by doing'],
    status: 'Planned',
    icon: Layers3,
    tone: 'from-sky-400/15 to-cyan-400/5',
    repo: '#replace-project-3-repository',
    demo: '#replace-project-3-demo',
  },
]

const contactLinks = [
  { label: 'Email', value: 'shashankbk283@gmail.com', href: 'mailto:shashankbk283@gmail.com', icon: Mail, copy: true },
  { label: 'Phone', value: '9113647947', href: 'tel:9113647947', icon: Phone, copy: true },
  { label: 'GitHub', value: 'github.com/GoldenStarz', href: 'https://github.com/GoldenStarz', icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/shashank-b-k-2b7169384', href: 'https://www.linkedin.com/in/shashank-b-k-2b7169384/', icon: Linkedin },
]

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-7 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-violet-300">
          <span className="mr-3 text-white/30">{number}</span>{eyebrow}
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      </div>
      {description && <p className="max-w-sm text-sm leading-7 text-zinc-400 md:text-right">{description}</p>}
    </div>
  )
}

function updatePointerSpotlight(event) {
  if (event.pointerType !== 'mouse') return

  const bounds = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}

function PlaceholderLink({ href, children, className = '', ariaLabel, onClick }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={(event) => {
        if (href.startsWith('#replace-')) event.preventDefault()
        onClick?.(event)
      }}
      target={href.startsWith('https://') ? '_blank' : undefined}
      rel={href.startsWith('https://') ? 'noreferrer' : undefined}
      className={className}
      title={href.startsWith('#replace-') ? 'Replace this placeholder with your link' : undefined}
    >
      {children}
    </a>
  )
}

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article onPointerMove={updatePointerSpotlight} className="pointer-spotlight group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111117] transition duration-300 hover:-translate-y-1 hover:border-violet-300/30">
      <div className={`relative flex min-h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.tone}`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-white/15 bg-[#111117]/75 text-violet-100 shadow-[0_0_45px_rgba(139,92,246,0.2)] transition duration-300 group-hover:scale-105">
          <Icon size={32} strokeWidth={1.4} aria-hidden="true" />
        </div>
        <span className="absolute left-5 top-5 font-mono text-xs text-white/45">PROJECT_{project.number}</span>
        <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 font-mono text-[10px] text-violet-100/80">{project.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="max-w-sm text-xl font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-zinc-300">{technology}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-5 font-mono text-[11px]">
          <PlaceholderLink href={project.repo} ariaLabel={`Repository link placeholder for ${project.title}`} className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white">
            <Github size={14} aria-hidden="true" /> Repository <ExternalLink size={12} aria-hidden="true" />
          </PlaceholderLink>
          <PlaceholderLink href={project.demo} ariaLabel={`Live demo link placeholder for ${project.title}`} className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white">
            <Globe2 size={14} aria-hidden="true" /> Live demo <ExternalLink size={12} aria-hidden="true" />
          </PlaceholderLink>
        </div>
      </div>
    </article>
  )
}

function CodeIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] py-10 lg:ml-auto lg:mr-0 lg:py-0">
      <div aria-hidden="true" className="absolute -inset-12 rounded-full bg-violet-500/[0.08] blur-3xl" />
      <div className="absolute -right-3 top-2 h-24 w-24 rounded-full border border-violet-300/15 lg:-right-8 lg:-top-6" aria-hidden="true" />
      <div className="absolute -bottom-6 -left-5 size-16 rounded-xl border border-fuchsia-300/15 rotate-12" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#111117]/95 shadow-2xl shadow-violet-950/30">
        <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-rose-400/80" />
            <span className="size-2.5 rounded-full bg-amber-300/80" />
            <span className="size-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <span className="font-mono text-[10px] text-zinc-500">ideas.js</span>
          <Code2 size={14} className="text-violet-300" aria-hidden="true" />
        </div>
        <div className="flex min-h-[285px] font-mono text-[11px] leading-7 sm:text-xs">
          <div className="select-none border-r border-white/5 px-4 py-5 text-right text-zinc-600">{Array.from({ length: 9 }, (_, index) => <div key={index}>{String(index + 1).padStart(2, '0')}</div>)}</div>
          <div className="overflow-hidden px-5 py-5 text-zinc-300 sm:px-7">
            <div><span className="text-fuchsia-300">const</span> <span className="text-sky-200">developer</span> = {'{'}</div>
            <div className="pl-4"><span className="text-violet-200">name</span>: <span className="text-emerald-200">'Shashank'</span>,</div>
            <div className="pl-4"><span className="text-violet-200">focus</span>: [</div>
            <div className="pl-8 text-amber-200">'learn', 'build',</div>
            <div className="pl-8 text-amber-200">'keep exploring'</div>
            <div className="pl-4">],</div>
            <div className="pl-4"><span className="text-violet-200">status</span>: <span className="text-emerald-200">'in progress'</span></div>
            <div>{'}'}</div>
            <div className="mt-2 text-zinc-500"><span className="text-fuchsia-300">//</span> small steps, real progress <span className="animate-pulse text-violet-300">▍</span></div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 font-mono text-[10px] text-zinc-500">
          <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-300" /> READY TO LEARN</span>
          <span>UTF-8&nbsp;&nbsp; JavaScript</span>
        </div>
      </div>
      <div className="absolute -bottom-9 right-0 flex items-center gap-3 rounded-lg border border-white/10 bg-[#17171f] px-4 py-3 shadow-xl sm:-right-7">
        <span className="flex size-8 items-center justify-center rounded-md bg-violet-400/10 text-violet-200"><Check size={15} aria-hidden="true" /></span>
        <div><p className="font-mono text-[9px] text-zinc-500">CURRENT MODE</p><p className="mt-0.5 text-xs font-medium text-white">Learning by building</p></div>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState('')
  const currentYear = new Date().getFullYear()

  async function copyContact(event, link) {
    event.preventDefault()

    try {
      await navigator.clipboard.writeText(link.value)
      const feedback = `${link.label} copied`
      setCopyFeedback(feedback)
      window.setTimeout(() => setCopyFeedback((current) => current === feedback ? '' : current), 1600)
    } catch {
      const feedback = 'Copy unavailable'
      setCopyFeedback(feedback)
      window.setTimeout(() => setCopyFeedback((current) => current === feedback ? '' : current), 1600)
    }
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0b10] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0b0b10]/85 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" onClick={closeMenu} className="group flex items-center gap-2.5" aria-label="Shashank home">
            <span className="flex size-8 items-center justify-center rounded-lg border border-violet-300/25 bg-violet-300/[0.08] font-mono text-xs font-medium text-violet-200 transition group-hover:bg-violet-300/15">S.</span>
            <span className="font-mono text-xs tracking-[0.16em] text-white">SHASHANK</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => <a key={item.href} href={item.href} className="text-xs text-zinc-400 transition hover:text-white">{item.label}</a>)}
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-md border border-violet-300/30 bg-violet-300/[0.08] px-4 py-2.5 text-xs text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-300/15">Explore projects <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>

          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="flex size-10 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-white/25 hover:text-white md:hidden" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
        {menuOpen && <div id="mobile-navigation" className="border-t border-white/10 bg-[#0b0b10] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="border-b border-white/[0.06] py-3.5 text-sm text-zinc-300 transition hover:text-white">{item.label}</a>)}
            <a href="#projects" onClick={closeMenu} className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-violet-300/30 bg-violet-300/[0.08] px-4 py-3 text-sm text-violet-100">Explore projects <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[780px] scroll-mt-20 items-center pt-24 sm:min-h-[820px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,rgba(113,73,184,0.13),transparent_38%),radial-gradient(ellipse_at_85%_68%,rgba(79,55,128,0.10),transparent_35%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-12 lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <p className="mb-8 inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-200 sm:text-xs"><span className="size-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,.85)]" /> CSE student <span className="text-white/25">·</span> developer in progress</p>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">Shashank <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-400 bg-clip-text text-transparent">B K</span></h1>
              <p className="mt-5 text-2xl font-medium leading-tight text-white sm:text-3xl">Building ideas <span className="text-zinc-500">into</span> <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-400 bg-clip-text text-transparent">real things.</span></p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">I'm a Computer Science student exploring software development, building projects, and learning by doing.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-2.5 rounded-md bg-violet-300 px-5 py-3.5 text-sm font-semibold text-[#15121d] transition hover:bg-violet-200">View my projects <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden="true" /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-white/35 hover:bg-white/[0.04]">Get in touch <ArrowDownRight size={15} aria-hidden="true" /></a>
              </div>
              <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex -space-x-2" aria-hidden="true"><span className="flex size-8 items-center justify-center rounded-full border border-[#0b0b10] bg-violet-300/15 text-violet-200"><Code2 size={14} /></span><span className="flex size-8 items-center justify-center rounded-full border border-[#0b0b10] bg-fuchsia-300/10 text-fuchsia-200"><Terminal size={14} /></span><span className="flex size-8 items-center justify-center rounded-full border border-[#0b0b10] bg-sky-300/10 text-sky-200"><Braces size={14} /></span></div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">Curious mind. Hands-on learner.</p>
              </div>
            </div>
            <CodeIllustration />
          </div>
          <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 transition hover:text-violet-200 sm:flex">Scroll to explore <ArrowDown size={13} aria-hidden="true" /></a>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/[0.06] bg-[#0e0e14] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading number="01" eyebrow="A little about me" title="Curiosity is my starting point." description="I'm a CSE student learning programming and web development through practical projects, experimentation, and plenty of questions." />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: 'Currently learning', text: 'The foundations of frontend development, React, and how software comes together.', icon: Terminal, tint: 'text-violet-200 bg-violet-300/10' },
                { label: 'What I like', text: 'Turning an idea into something interactive, useful, and a little more polished each time.', icon: Braces, tint: 'text-fuchsia-200 bg-fuchsia-300/10' },
                { label: 'My approach', text: 'Start small, stay curious, and learn by building things I can improve and share.', icon: ArrowRight, tint: 'text-sky-200 bg-sky-300/10' },
              ].map((item) => {
                const Icon = item.icon
                return <article key={item.label} className="rounded-lg border border-white/10 bg-[#121218] p-6 transition hover:border-white/20 md:p-7"><span className={`mb-7 flex size-10 items-center justify-center rounded-lg ${item.tint}`}><Icon size={18} aria-hidden="true" /></span><h3 className="text-base font-semibold text-white">{item.label}</h3><p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p></article>
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading number="02" eyebrow="Tools I'm exploring" title="Learning one layer at a time." description="A growing toolkit, built through study and practice. These are skills in progress, not claims of expertise." />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return <article key={skill.name} onPointerMove={updatePointerSpotlight} className="pointer-spotlight group flex min-h-36 items-start gap-5 rounded-lg border border-white/10 bg-[#111117] p-5 transition duration-300 hover:border-violet-300/25 hover:bg-[#15141c] sm:p-6">
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] font-mono text-sm ${skill.color}`} aria-hidden="true">{skill.mark}</span>
                  <div className="min-w-0"><div className="flex items-center gap-2"><h3 className="font-semibold text-white">{skill.name}</h3><Icon size={13} className="text-zinc-600 transition group-hover:text-violet-300" aria-hidden="true" /></div><p className="mt-2 text-sm leading-6 text-zinc-500">{skill.note}</p><span className="mt-3 inline-block font-mono text-[9px] uppercase tracking-[0.12em] text-violet-300/70">Currently exploring</span></div>
                  <span className="ml-auto font-mono text-[10px] text-zinc-700">0{index + 1}</span>
                </article>
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-y border-white/[0.06] bg-[#0e0e14] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading number="03" eyebrow="Things I've been working on" title="Ideas, experiments, and next steps." description="A snapshot of my journey so far. Projects are labeled honestly, from early concepts to practice builds." />
            <div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/4 size-96 rounded-full bg-violet-500/[0.07] blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading number="04" eyebrow="Open to a conversation" title="Have an idea? Let's talk." description="Have a project, question, or opportunity in mind? Reach out through any of these channels." />
            <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#111117] md:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 md:p-10 lg:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-violet-300">Get in touch</p>
                <h3 className="mt-5 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">Good things start with a conversation.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">I'm always glad to learn from new people and hear about interesting ideas. Reach me through one of these channels.</p>
                <a href="#contact-links" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white">Find my links <ArrowDown size={15} aria-hidden="true" /></a>
              </div>
              <div
                id="contact-links"
                className="pointer-spotlight border-t border-white/10 bg-white/[0.02] p-5 sm:p-7 md:border-l md:border-t-0 lg:p-9"
                onPointerMove={updatePointerSpotlight}
              >
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  const isCopied = copyFeedback === `${link.label} copied`
                  return <PlaceholderLink key={link.label} href={link.href} onClick={link.copy ? (event) => copyContact(event, link) : undefined} ariaLabel={isCopied ? `${link.label} copied to clipboard` : `${link.label}: ${link.value}${link.copy ? ', copy to clipboard' : ''}`} className="group flex items-center gap-4 border-b border-white/[0.07] py-5 transition duration-200 hover:translate-x-1 hover:bg-white/[0.02] active:scale-[0.99] first:pt-1 last:border-0 last:pb-1">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300"><Icon size={17} aria-hidden="true" /></span>
                    <span className="min-w-0 flex-1"><span className="block text-xs font-medium text-white">{link.label}</span><span className="mt-1 block truncate text-xs text-zinc-500">{link.value}</span></span>
                    {link.copy && <span className={`font-mono text-[10px] transition-colors ${isCopied ? 'text-emerald-300' : 'text-zinc-600 group-hover:text-violet-200'}`}>{isCopied ? 'Copied' : 'Copy'}</span>}
                    {link.copy ? (isCopied ? <Check size={15} className="text-emerald-300 transition-transform duration-200" aria-hidden="true" /> : <Copy size={15} className="text-zinc-600 transition-transform duration-200 group-hover:scale-110 group-hover:text-violet-200" aria-hidden="true" />) : <ArrowUpRight size={15} className="text-zinc-600" aria-hidden="true" />}
                  </PlaceholderLink>
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08] bg-[#09090d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Shashank, back to top"><span className="flex size-7 items-center justify-center rounded-md border border-violet-300/20 bg-violet-300/[0.07] font-mono text-[10px] text-violet-200">S.</span><span className="font-mono text-[10px] tracking-[0.14em] text-zinc-300">SHASHANK</span></a>
          <p className="text-xs text-zinc-500">Designed and built with React + Tailwind CSS</p>
          <div className="flex items-center justify-between gap-6 md:justify-end"><span className="font-mono text-[10px] text-zinc-600">© {currentYear} Shashank</span><a href="#home" className="inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-white">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a></div>
        </div>
      </footer>
    </div>
  )
}

export default App