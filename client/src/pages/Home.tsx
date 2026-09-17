import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown, Check, Copy, Github, Instagram, Linkedin, Mail, Menu, Rocket, ShieldCheck, Sparkles, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { links, type Project } from "@/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const { c, isArabic, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "#about", label: c.nav.about },
    { href: "#work", label: c.nav.work },
    { href: "#ai", label: c.nav.ai },
    { href: "#security", label: c.nav.security },
    { href: "#experience", label: c.nav.experience },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || open ? "border-b border-white/[0.06] bg-[#07080b]/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-medium tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-[13px] font-semibold text-black">AD</span>
            <span className="hidden text-[15px] sm:inline">{isArabic ? "عبدالرحمن" : "Abdulrahman"}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="rounded-full px-3.5 py-2 text-sm text-[var(--dim)] transition hover:text-white">
                {i.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="h-9 rounded-full border border-white/10 px-3.5 text-[13px] font-medium text-[#c4c7cf] transition hover:border-white/20 hover:text-white"
              aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
            >
              {isArabic ? "EN" : "عربي"}
            </button>
            <a href="#contact" className="btn btn-primary hidden !h-9 !px-4 !text-[13px] sm:inline-flex">
              {c.nav.cta}
            </a>
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="shell pb-5 md:hidden">
            <div className="flex flex-col">
              {items.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.06] py-3.5 text-lg text-[#c4c7cf] last:border-0"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const { c, isArabic } = useLanguage();
  const reduce = useReducedMotion();

  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

  const phones = [
    { src: "/images/athar/screen-prayer.webp", rot: -9, x: "-62%", y: 36, z: 1, delay: 0.35 },
    { src: "/images/wize/screen-overview.webp", rot: 0, x: "0%", y: 0, z: 3, delay: 0.2 },
    { src: "/images/najem/kid-home.webp", rot: 9, x: "62%", y: 36, z: 2, delay: 0.45, framed: true },
  ];

  return (
    <section id="top" className="noise relative overflow-hidden pt-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(122,162,255,0.16),transparent)]" />

      <motion.div variants={container} initial="hidden" animate="show" className="shell relative text-center">

        <motion.p variants={item} className="eyebrow">
          {c.hero.name}
        </motion.p>

        <motion.h1 variants={item} className="display mx-auto mt-4 max-w-5xl text-[2.2rem] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          <span className="text-gradient">{c.hero.title1}</span>
          <br />
          <span className="text-[var(--dim)]">{c.hero.title2}</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--dim)] sm:text-lg">
          {c.hero.sub}
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#c4c7cf]">
          {c.hero.roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/25" />}
              {r}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#work" className="btn btn-primary w-full sm:w-auto">
            {c.hero.primary}
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost w-full sm:w-auto">
            {c.hero.secondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Phone fan */}
      <div className="shell relative mt-16 sm:mt-20">
        <div className="relative mx-auto h-[300px] max-w-[760px] overflow-hidden sm:h-[500px]" dir="ltr">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(29,185,84,0.14),transparent)] blur-2xl" />
          {phones.map((p, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-0 w-[38%] max-w-[250px]"
              style={{ zIndex: p.z, x: "-50%" }}
              initial={reduce ? false : { opacity: 0, y: 80, rotate: 0 }}
              animate={{ opacity: 1, y: p.y, rotate: p.rot }}
              transition={{ duration: 1.1, ease, delay: p.delay }}
            >
              <div style={{ transform: `translateX(${p.x})` }}>
                {p.framed ? (
                  <PhoneFrame src={p.src} />
                ) : (
                  <img
                    src={p.src}
                    alt=""
                    className="w-full rounded-[1.6rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] sm:rounded-[2rem]"
                    loading="eager"
                  />
                )}
              </div>
            </motion.div>
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#07080b] via-[#07080b]/80 to-transparent sm:h-44" />
        </div>
      </div>

      {/* Stats */}
      <div className="shell relative pb-6">
        <div className="grid grid-cols-2 border-y border-white/[0.06] md:grid-cols-4">
          {c.hero.stats.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 0.05}
              className={`px-2 py-6 text-center sm:py-8 ${i % 2 === 1 ? "border-s border-white/[0.06]" : ""} ${
                i === 2 ? "md:border-s md:border-white/[0.06]" : ""
              } ${i >= 2 ? "border-t border-white/[0.06] md:border-t-0" : ""}`}
            >
              <div className="text-lg font-medium tracking-tight text-white sm:text-2xl" dir={isArabic && /[A-Za-z]/.test(s.v) ? "ltr" : undefined}>
                {s.v}
              </div>
              <div className="mt-1 text-xs text-[var(--dim)] sm:text-sm">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Visuals ---------------- */

function PhoneFrame({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      className={`relative rounded-[2rem] border border-white/15 bg-[#0b0b0d] p-[6px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] sm:rounded-[2.4rem] sm:p-2 ${className}`}
    >
      <img src={src} alt="" loading="lazy" className="w-full rounded-[1.6rem] sm:rounded-[1.9rem]" />
    </div>
  );
}

function ProjectVisual({ p }: { p: Project }) {
  const v = p.visual;
  const glow = { background: `radial-gradient(60% 60% at 50% 60%, ${p.accent}33, transparent 70%)` };

  if (v.kind === "wide") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={glow} />
        {v.fit === "bleed" ? (
          <img
            src={v.image}
            alt={p.name}
            loading="lazy"
            dir="ltr"
            className="absolute bottom-0 left-0 h-[88%] w-auto max-w-none origin-bottom-left transition duration-700 group-hover:scale-[1.03] sm:h-[92%]"
          />
        ) : (
        <img
          src={v.image}
          alt={p.name}
          loading="lazy"
          className={`relative h-full w-full transition duration-700 group-hover:scale-[1.03] ${
            v.fit === "contain" ? "object-contain p-6 sm:p-10" : "object-cover"
          }`}
        />
        )}
      </div>
    );
  }

  const [a, b, cImg] = v.images;
  const Item = ({ src, cls }: { src: string; cls: string }) =>
    v.kind === "phones" ? (
      <PhoneFrame src={src} className={cls} />
    ) : (
      <img src={src} alt="" loading="lazy" className={`rounded-[1.4rem] border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${cls}`} />
    );

  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden px-4 pt-12" dir="ltr">
      <div className="absolute inset-0" style={glow} />
      <div className="relative flex w-full max-w-[520px] items-end justify-center">
        <Item src={a} cls="relative z-[1] w-[31%] translate-x-[14%] translate-y-[8%] -rotate-6 opacity-90 transition duration-700 group-hover:-rotate-[8deg] group-hover:translate-x-[6%]" />
        <Item src={b} cls="relative z-[2] w-[36%] translate-y-[4%] transition duration-700 group-hover:-translate-y-[1%]" />
        <Item src={cImg} cls="relative z-[1] w-[31%] -translate-x-[14%] translate-y-[8%] rotate-6 opacity-90 transition duration-700 group-hover:rotate-[8deg] group-hover:-translate-x-[6%]" />
      </div>
    </div>
  );
}

function ProjectIcon({ p, size = 40 }: { p: Project; size?: number }) {
  if (!p.icon) {
    return (
      <span
        className="grid place-items-center rounded-xl text-sm font-semibold text-white"
        style={{ width: size, height: size, background: p.accent }}
      >
        {p.name.slice(0, 1)}
      </span>
    );
  }
  return (
    <span
      className="grid place-items-center overflow-hidden rounded-xl border border-white/10"
      style={{ width: size, height: size, background: p.iconBg ?? "#fff" }}
    >
      <img src={p.icon} alt="" className={p.iconBg ? "h-[70%] w-[70%] object-contain" : "h-full w-full object-cover"} />
    </span>
  );
}

/* ---------------- About ---------------- */

function About() {
  const { c } = useLanguage();
  return (
    <section className="shell py-24 sm:py-32">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(122,162,255,0.22),transparent)] blur-2xl" />
            <div className="card relative overflow-hidden p-3">
              <div className="relative mx-auto mt-5 mb-3 w-[78%]">
                <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_210deg,#7aa2ff,#a78bfa,#34d399,#f5a524,#7aa2ff)] opacity-70" />
                <img src="/profile.png" alt="Abdulrahman Al-Dousari" className="relative aspect-square w-full rounded-full border-4 border-[#0e1015] object-cover" loading="lazy" />
              </div>
              <dl className="grid grid-cols-1 gap-px pt-3">
                {c.about.facts.map((f) => (
                  <div key={f.k} className="flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm odd:bg-white/[0.02]">
                    <dt className="text-[var(--dim)]">{f.k}</dt>
                    <dd className="text-end text-[#e4e5e9]">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHead id="about" eyebrow={c.about.eyebrow} title={c.about.title} />
          <div className="mt-8 space-y-5">
            {c.about.paragraphs.map((para, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className={`text-[17px] leading-relaxed ${i === 0 ? "text-[#e4e5e9]" : "text-[var(--dim)]"}`}>{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Github size={16} /> GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={links.tickholic} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Instagram size={16} /> Tickholic
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pillars (Startups / AI / Security) ---------------- */

const PILLAR_STYLE: Record<string, { icon: typeof Rocket; color: string }> = {
  startups: { icon: Rocket, color: "#F5A524" },
  ai: { icon: Sparkles, color: "#A78BFA" },
  security: { icon: ShieldCheck, color: "#34D399" },
};

function Pillars() {
  const { c, isArabic } = useLanguage();
  return (
    <section className="shell pb-24 sm:pb-32">
      <SectionHead eyebrow={c.pillars.eyebrow} title={c.pillars.title} />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {c.pillars.items.map((it, i) => {
          const st = PILLAR_STYLE[it.id];
          const Icon = st.icon;
          return (
            <Reveal key={it.id} delay={i * 0.07} className="h-full">
              <article id={it.id === "startups" ? undefined : it.id} className="card group relative flex h-full scroll-mt-24 flex-col overflow-hidden p-7 sm:p-8">
                <div
                  className="pointer-events-none absolute -top-24 end-[-20%] h-64 w-64 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `${st.color}22` }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10" style={{ background: `${st.color}14`, color: st.color }}>
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium" style={{ color: st.color }}>
                    {it.name}
                  </span>
                </div>
                <h3 className="relative mt-6 text-2xl font-medium leading-tight tracking-tight text-white">{it.title}</h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-[var(--dim)]">{it.desc}</p>
                <ul className="relative mt-6 space-y-2.5 border-t border-white/[0.06] pt-6">
                  {it.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-[#c4c7cf]">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: st.color }} />
                      {pt.startsWith("Tickholic") ? (
                        <a href={links.tickholic} target="_blank" rel="noopener noreferrer" dir="auto" className="inline-flex items-center gap-1.5 border-b border-white/20 transition hover:border-white hover:text-white">
                          {pt} <Instagram size={13} />
                        </a>
                      ) : (
                        <span dir="auto">{pt}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

    </section>
  );
}

/* ---------------- GitHub ---------------- */

const LANG_COLOR: Record<string, string> = { TypeScript: "#3178c6", Python: "#3572A5", "React Native": "#61dafb" };

function GitHubSection() {
  const { c } = useLanguage();
  return (
    <section className="shell pb-24 sm:pb-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHead id="github" eyebrow={c.github.eyebrow} title={c.github.title} />
        <Reveal>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Github size={16} /> {c.github.cta}
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
          <img src="/profile.png" alt="" className="h-12 w-12 rounded-full border border-white/10 bg-white" loading="lazy" />
          <div className="min-w-0">
            <div className="font-mono text-sm text-white" dir="ltr">@aldoserehd</div>
            <p className="mt-0.5 text-sm italic text-[var(--dim)]" dir="ltr">"{c.github.bio}"</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.github.repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.04} className="h-full">
            <a
              href={`${links.github}/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-6 transition hover:border-white/15 hover:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="truncate font-mono text-sm text-white" dir="ltr">{r.name}</span>
                <ArrowUpRight size={16} className="shrink-0 text-[var(--faint)] transition group-hover:text-white rtl:-scale-x-100" />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--dim)]">{r.desc}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-[var(--faint)]">
                <span className="flex items-center gap-1.5" dir="ltr">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: LANG_COLOR[r.lang] ?? "#888" }} />
                  {r.lang}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */

function FeaturedProject({ p, index }: { p: Project; index: number }) {
  const { c } = useLanguage();
  const flip = index % 2 === 1;

  const body = (
    <div className="flex flex-col justify-center p-7 sm:p-9">
      <div className="flex items-center gap-3">
        <ProjectIcon p={p} />
        <div>
          <div className="font-medium tracking-tight text-white">{p.name}</div>
          <div className="text-xs text-[var(--dim)]">{p.kicker}</div>
        </div>
      </div>

      <h3 className="display mt-6 text-[1.6rem] leading-[1.12] sm:text-[2rem]">{p.title}</h3>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--dim)]">{p.desc}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="chip" dir="auto">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
        <div>
          <div className="eyebrow !text-[0.68rem]">{c.work.role}</div>
          <div className="mt-1 text-sm text-[#c4c7cf]">{p.role}</div>
        </div>
        {p.link && (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-white"
          >
            <span dir="ltr" className="border-b border-white/20 pb-0.5 transition group-hover/link:border-white">
              {p.link.label}
            </span>
            <ArrowUpRight size={16} className="transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:-scale-x-100" />
          </a>
        )}
      </div>
    </div>
  );

  const visual = (
    <div className="relative min-h-[320px] border-b border-white/[0.06] sm:min-h-[380px] lg:min-h-[460px] lg:border-b-0">
      <ProjectVisual p={p} />
    </div>
  );

  return (
    <Reveal>
      <article className="card group grid overflow-hidden lg:grid-cols-2">
        <div className={flip ? "lg:order-2 lg:border-s lg:border-white/[0.06]" : "lg:border-e lg:border-white/[0.06]"}>{visual}</div>
        <div className={flip ? "lg:order-1" : ""}>{body}</div>
      </article>
    </Reveal>
  );
}

function SmallProject({ p, delay }: { p: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/9] border-b border-white/[0.06] bg-[#0b0c10]">
          <ProjectVisual p={p} />
        </div>
        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <div className="font-medium text-white">{p.name}</div>
            <div className="text-xs text-[var(--dim)]">{p.kicker}</div>
          </div>
          <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight">{p.title}</h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--dim)]">{p.desc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="chip" dir="auto">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SectionHead({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <Reveal>
      <div id={id} className="scroll-mt-24">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-[2.25rem] sm:text-5xl">{title}</h2>
      </div>
    </Reveal>
  );
}

function Work() {
  const { c } = useLanguage();
  return (
    <section className="shell py-24 sm:py-32">
      <SectionHead id="work" eyebrow={c.work.eyebrow} title={c.work.title} />
      <div className="mt-12 space-y-5 sm:mt-14 sm:space-y-6">
        {c.projects.map((p, i) => (
          <FeaturedProject key={p.id} p={p} index={i} />
        ))}
      </div>

      <Reveal>
        <p className="eyebrow mt-20">{c.work.more}</p>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2 sm:gap-8">
        {c.smallProjects.map((p, i) => (
          <SmallProject key={p.id} p={p} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */

function StackMarquee() {
  const { c } = useLanguage();
  const all = c.stack.groups.flatMap((g) => g.items);
  const row = [...all, ...all];
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-white/[0.06] py-5" dir="ltr">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#07080b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#07080b] to-transparent" />
      <div className="marquee">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-6 px-3 text-sm text-[var(--dim)] sm:text-base">
            {s}
            <span className="h-1 w-1 rounded-full bg-white/20" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- About / Experience ---------------- */

function Experience() {
  const { c } = useLanguage();
  return (
    <section className="shell py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHead id="experience" eyebrow={c.experience.eyebrow} title={c.experience.title} />
          <Reveal delay={0.1}>
            <div className="card mt-10 p-6">
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400 text-emerald-400" />
                {c.experience.nowTitle}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.experience.now.map((n) => (
                  <li key={n} className="text-[15px] leading-relaxed text-[#c4c7cf]">{n}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <ol className="relative">
          {c.experience.items.map((e, i) => (
            <Reveal key={e.what} delay={i * 0.05}>
              <li className="group grid gap-1 border-t border-white/[0.06] py-7 sm:grid-cols-[150px_1fr] sm:gap-8">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--faint)] sm:pt-1.5 rtl:font-[inherit] rtl:tracking-normal">
                  {e.when}
                </div>
                <div>
                  <div className="text-lg font-medium tracking-tight text-white sm:text-xl">{e.what}</div>
                  <div className="mt-0.5 text-sm text-[#c4c7cf]">{e.where}</div>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--dim)]">{e.note}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Stack ---------------- */

function Stack() {
  const { c } = useLanguage();
  return (
    <section className="shell pb-24 sm:pb-32">
      <SectionHead id="stack" eyebrow={c.stack.eyebrow} title={c.stack.title} />
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
        {c.stack.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.05} className="bg-[#07080b]">
            <div className="h-full p-7">
              <div className="text-sm font-medium text-white">{g.name}</div>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="text-[15px] text-[var(--dim)]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const { c } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="shell scroll-mt-20 pb-16">
      <Reveal>
        <div className="noise relative overflow-hidden rounded-[2rem] border border-white/[0.08] px-6 py-20 text-center sm:px-12 sm:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(122,162,255,0.18),transparent_70%)]" />
          <div className="grid-bg pointer-events-none absolute inset-0 rotate-180" />
          <div className="relative">
            <p className="eyebrow">{c.contact.eyebrow}</p>
            <h2 className="display mx-auto mt-5 max-w-3xl text-4xl sm:text-6xl md:text-7xl">
              <span className="text-gradient">{c.contact.title}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--dim)] sm:text-lg">{c.contact.sub}</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${links.email}`} className="btn btn-primary w-full sm:w-auto">
                <Mail size={16} />
                {c.contact.email}
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">
                <Linkedin size={16} />
                {c.contact.linkedin}
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">
                <Github size={16} />
                GitHub
              </a>
            </div>

            <button
              onClick={copy}
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-[var(--dim)] transition hover:text-white sm:text-sm"
              dir="ltr"
            >
              {links.email}
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span className="sr-only">{copied ? c.contact.copied : c.contact.copy}</span>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const { c } = useLanguage();
  return (
    <footer className="shell flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 text-sm text-[var(--faint)] sm:flex-row">
      <span>
        © {new Date().getFullYear()} · {c.footer}
      </span>
      <div className="flex items-center gap-5">
        <a href={`mailto:${links.email}`} className="transition hover:text-white" aria-label="Email">
          <Mail size={16} />
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="GitHub">
          <Github size={16} />
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Pillars />
        <StackMarquee />
        <Experience />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
