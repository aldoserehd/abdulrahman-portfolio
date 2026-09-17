export type Lang = "en" | "ar";

export type Project = {
  id: string;
  name: string;
  kicker: string;
  title: string;
  desc: string;
  role: string;
  tags: string[];
  link?: { href: string; label: string };
  accent: string;
  icon?: string;
  iconBg?: string;
  visual:
    | { kind: "tiles"; images: string[] }
    | { kind: "phones"; images: string[] }
    | { kind: "wide"; image: string; fit?: "cover" | "contain" | "bleed" };
};

const EMAIL = "abdulrahmanaldousari4@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/abdulrahman-al-dousari-5a4837217";
const GITHUB = "https://github.com/aldoserehd";

export const links = { email: EMAIL, linkedin: LINKEDIN, github: GITHUB, tickholic: "https://www.instagram.com/tickholic/" };

const img = (p: string) => `/images/${p}`;

export const content = {
  en: {
    nav: { about: "About", work: "Work", ai: "AI", security: "Security", experience: "Experience", contact: "Contact", cta: "Let's talk" },
    hero: {
      status: "Open to freelance & full-time roles",
      roles: ["Entrepreneur", "Startup enthusiast", "AI builder", "Cybersecurity"],
      name: "Abdulrahman Al-Dousari",
      title1: "I build apps",
      title2: "people actually use.",
      sub: "Entrepreneur, software engineer and cybersecurity student. I turn ideas into real products with AI, shipping mobile and web apps end to end, in Arabic and English, for the Gulf and Canada.",
      primary: "See my work",
      secondary: "Get in touch",
      stats: [
        { v: "6", l: "products built" },
        { v: "iOS + Android", l: "shipped to both stores" },
        { v: "AR / EN", l: "bilingual from day one" },
        { v: "Ottawa ⇄ Kuwait", l: "where I work" },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Things I've designed, built and shipped.",
      more: "More projects",
      role: "My role",
      visit: "Visit",
    },
    projects: [
      {
        id: "athar",
        name: "Athar",
        kicker: "Mobile app · iOS & Android",
        title: "A free, ad-free companion for everyday worship.",
        desc: "Prayer times with adhan, Qibla, a Qadha tracker, authentic hadith search and scanning, and a nearby mosque finder. Built solo, from the first sketch to both app stores, with full Arabic and English store listings.",
        role: "Founder · design, development, launch",
        tags: ["React Native", "Expo SDK 54", "TypeScript", "Supabase", "RTL"],
        link: { href: "https://try-athar.com", label: "try-athar.com" },
        accent: "#2BA3C7",
        icon: img("athar/logo-white.png"),
        iconBg: "#0c465b",
        visual: { kind: "tiles", images: [img("athar/screen-hadith.webp"), img("athar/screen-prayer.webp"), img("athar/screen-scan.webp")] },
      },
      {
        id: "wize",
        name: "WIZE",
        kicker: "Fintech app · GCC",
        title: "Personal finance that finally feels calm.",
        desc: "A bilingual money app for the Gulf: balances, budgets and goals in one place, receipt scanning, bank SMS parsing, analytics and an AI assistant. Firebase and Expo on the app, Cloud Run services for the AI and receipt scanning.",
        role: "Lead developer · freelance for Smart Idea Technology",
        tags: ["Expo", "Firebase", "Cloud Run", "AI assistant", "OCR"],
        link: { href: "https://trywize.com", label: "trywize.com" },
        accent: "#1DB954",
        icon: img("wize/logo-mark.png"),
        iconBg: "#060B14",
        visual: { kind: "tiles", images: [img("wize/screen-wize-ai.webp"), img("wize/screen-overview.webp"), img("wize/screen-analytics.webp")] },
      },
      {
        id: "yss",
        name: "YourSimpleSolutions",
        kicker: "AI SaaS · Ottawa",
        title: "An AI team that runs in the background of a business.",
        desc: "An AI receptionist that never misses a call, plus AI agents that handle follow-ups, track what's happening and report on it. I build the software side: the client portal, dispatch flows and the bilingual EN/FR experience.",
        role: "Software engineer",
        tags: ["React", "TypeScript", "AI agents", "Voice AI", "EN / FR"],
        link: { href: "https://yoursimplesolutions.ca", label: "yoursimplesolutions.ca" },
        accent: "#3B82F6",
        visual: { kind: "wide", image: img("yss/mockup-trio.webp"), fit: "bleed" },
      },
      {
        id: "najem",
        name: "Najem",
        kicker: "Family app · Gulf",
        title: "Chores and habits, turned into a game kids want to play.",
        desc: "Parents assign tasks, kids earn stars, and stars unlock rewards in a store the parents control. Separate parent and kid experiences, badges, goals and a wallet, all bilingual with dark mode.",
        role: "Founder · product, design, development",
        tags: ["React Native", "Gamification", "Multi-role auth", "RTL"],
        accent: "#E96840",
        icon: img("najem/icon.png"),
        visual: { kind: "phones", images: [img("najem/kid-home.webp"), img("najem/parent-home.webp"), img("najem/kid-store.webp")] },
      },
    ] as Project[],
    smallProjects: [
      {
        id: "mshro3e",
        name: "Mshro3e",
        kicker: "Marketplace · Kuwait",
        title: "Helping people find Kuwait's home-based businesses.",
        desc: "A discovery directory for home-based vendors, with WhatsApp contact, governorate filters and seasonal modes. Admin dashboard and mobile app.",
        role: "Founder",
        tags: ["React Native", "Next.js admin", "KWD subscriptions"],
        accent: "#3F7BF5",
        visual: { kind: "wide", image: img("mshro3e/og.webp"), fit: "cover" },
      },
      {
        id: "flipreward",
        name: "Flipreward",
        kicker: "Loyalty platform · Web",
        title: "A tablet loyalty sign-up that turns walk-ins into regulars.",
        desc: "Landing site for an in-store loyalty tablet: customers join with a phone number and get rewards back by SMS. Responsive, animated and built to convert.",
        role: "Front-end developer",
        tags: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
        accent: "#E5337A",
        visual: { kind: "wide", image: img("flipreward/tablet-3.webp"), fit: "contain" },
      },
    ] as Project[],
    about: {
      eyebrow: "About me",
      title: "Founder energy, engineer habits, security mindset.",
      paragraphs: [
        "I'm Abdulrahman, a Kuwaiti builder studying Computer Science at Carleton University in Ottawa, specializing in cybersecurity. I split my life between Canada and the Gulf, and most of what I build is for people back home.",
        "I've been an entrepreneur for as long as I can remember. I run Tickholic, a luxury watch business selling across the GCC, I've done freelance web and app work for Gulf clients, and I keep launching my own products: Athar, Najem and Mshro3e.",
        "In April 2026 I went all in on AI and haven't stopped. I'm at my desk around 12 hours a day, building with LLMs and coding agents, turning ideas into shipped apps faster than I ever could before.",
      ],
      facts: [
        { k: "Based in", v: "Ottawa, Canada · Kuwait" },
        { k: "Studying", v: "B.Sc. Computer Science, Carleton" },
        { k: "Focus", v: "Cybersecurity specialization + minor" },
        { k: "Languages", v: "Arabic · English" },
      ],
    },
    pillars: {
      eyebrow: "What drives me",
      title: "Three things I'm obsessed with.",
      items: [
        {
          id: "startups",
          name: "Startups",
          title: "I build businesses, not just code.",
          desc: "From selling Rolex and Patek Philippe watches across the GCC with Tickholic, to launching my own apps and building the SaaS side of an AI company. I like owning the whole thing: idea, product, launch, customers.",
          points: ["Tickholic · luxury watches, GCC", "Athar, Najem, Mshro3e · founder", "YourSimpleSolutions · AI SaaS", "Freelance work for Gulf clients"],
        },
        {
          id: "ai",
          name: "AI & LLMs",
          title: "AI is my daily co-worker.",
          desc: "I build with Claude Code and Codex every day and ship AI features into real products: an AI receptionist that answers calls, agents that follow up and report, a finance assistant and receipt scanning in WIZE.",
          points: ["12B+ tokens used since coding agents launched", "AI receptionist + business agents", "WIZE AI assistant & receipt OCR", "Agentic workflows, MCP, prompt design"],
        },
        {
          id: "security",
          name: "Cybersecurity",
          title: "Secure by default, not as an afterthought.",
          desc: "My degree is focused on cybersecurity, and it shapes how I build: locked-down database rules, proper auth, least privilege, and understanding how things break so they don't.",
          points: ["Carleton cybersecurity specialization + minor", "Applied Cryptography & Authentication, Networking", "Firestore rules, Firebase Auth, Supabase, Cloudflare"],
        },
      ],
    },
    aiStats: [
      { v: "12B+", l: "tokens through coding agents" },
      { v: "12h", l: "a day at the desk" },
      { v: "Apr 2026", l: "went all in on AI" },
      { v: "Daily", l: "shipping with Claude Code + Codex" },
    ],
    gallery: {
      eyebrow: "Inside the apps",
      title: "Real screens from real products.",
    },
    github: {
      eyebrow: "Code",
      title: "On GitHub.",
      bio: "My contribution graph doesn't tell the full story. The real work is happening under the hood.",
      cta: "View GitHub",
      repos: [
        { name: "Athar", lang: "TypeScript", desc: "A full library of the Prophet Mohammed's hadiths from all 6 major hadith books, inside the Athar app." },
        { name: "mshro3e-project", lang: "TypeScript", desc: "The Mshro3e app and admin dashboard for Kuwaiti home-based businesses." },
        { name: "Najem-App", lang: "React Native", desc: "Gamified family app where kids earn stars for tasks and redeem rewards." },
        { name: "Caesar-cipher", lang: "Python", desc: "Caesar cipher encryptor/decryptor plus a brute-force script that shows why the cipher is weak." },
        { name: "postgres-crud-students", lang: "Python", desc: "PostgreSQL CRUD app for COMP 3005 (Database Management Systems)." },
        { name: "COMP3005_health_club_project", lang: "Python", desc: "Health club management system backed by a relational database." },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I've been building.",
      nowTitle: "Right now",
      now: ["Building the AI SaaS at YourSimpleSolutions"],
      items: [
        { when: "2026 — Now", what: "Software Engineer", where: "YourSimpleSolutions.ca · Ottawa", note: "Building the SaaS: AI receptionist, AI agents and the client portal." },
        { when: "2026", what: "Freelance Mobile Developer", where: "WIZE · Smart Idea Technology, Kuwait", note: "Took a bilingual finance app from build to Google Play and App Store." },
        { when: "Ongoing", what: "Founder & Solo Developer", where: "Athar · Najem · Mshro3e", note: "Idea, design, code, store listings and launch, all on my own." },
        { when: "Bootcamp", what: "Full-Stack Development", where: "CODED · Kuwait", note: "Intensive, hands-on training in web and mobile development." },
        { when: "In progress", what: "B.Sc. Computer Science", where: "Carleton University · Ottawa", note: "Cybersecurity specialization and minor." },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "What I use to ship.",
      groups: [
        { name: "Mobile", items: ["React Native", "Expo", "EAS Build", "App Store Connect"] },
        { name: "Web", items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS"] },
        { name: "Backend", items: ["Firebase", "Google Cloud Run", "Node.js", "Python", "REST APIs"] },
        { name: "AI & tooling", items: ["Claude Code", "Codex", "LLM agents", "Voice AI", "Figma"] },
        { name: "Also", items: ["Java", "C++", "Cybersecurity", "Arabic / RTL UX", "Cloudflare"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea? Let's build it.",
      sub: "Freelance project, full-time role or just want to talk shop. I usually reply within a day.",
      email: "Email me",
      linkedin: "LinkedIn",
      copy: "Copy email",
      copied: "Copied",
    },
    footer: "Designed and built by Abdulrahman Al-Dousari",
  },

  ar: {
    nav: { about: "عني", work: "أعمالي", ai: "الذكاء الاصطناعي", security: "الأمن", experience: "الخبرات", contact: "تواصل", cta: "لنتحدث" },
    hero: {
      status: "متاح لمشاريع حرة ووظائف بدوام كامل",
      roles: ["رائد أعمال", "شغوف بالشركات الناشئة", "أبني بالذكاء الاصطناعي", "أمن سيبراني"],
      name: "عبدالرحمن الدوسري",
      title1: "أبني تطبيقات",
      title2: "يستخدمها الناس فعلاً.",
      sub: "رائد أعمال ومهندس برمجيات وطالب أمن سيبراني. أحوّل الأفكار إلى منتجات حقيقية بالذكاء الاصطناعي، وأطلق تطبيقات جوال ومواقع من البداية للنهاية، بالعربي والإنجليزي، للخليج وكندا.",
      primary: "شاهد أعمالي",
      secondary: "تواصل معي",
      stats: [
        { v: "6", l: "منتجات بنيتها" },
        { v: "iOS + Android", l: "منشورة على المتجرين" },
        { v: "عربي / EN", l: "ثنائية اللغة من البداية" },
        { v: "أوتاوا ⇄ الكويت", l: "مكان عملي" },
      ],
    },
    work: {
      eyebrow: "أعمال مختارة",
      title: "منتجات صممتها وبنيتها وأطلقتها.",
      more: "مشاريع أخرى",
      role: "دوري",
      visit: "زيارة",
    },
    projects: [
      {
        id: "athar",
        name: "أثر",
        kicker: "تطبيق جوال · iOS و Android",
        title: "رفيق مجاني وبدون إعلانات لعبادتك اليومية.",
        desc: "مواقيت الصلاة مع الأذان، اتجاه القبلة، متابعة صلوات القضاء، البحث في الأحاديث الصحيحة ومسحها، وإيجاد أقرب مسجد. بنيته وحدي من أول فكرة إلى المتجرين، مع صفحات متجر كاملة بالعربي والإنجليزي.",
        role: "مؤسس · تصميم، تطوير، إطلاق",
        tags: ["React Native", "Expo SDK 54", "TypeScript", "Supabase", "RTL"],
        link: { href: "https://try-athar.com", label: "try-athar.com" },
        accent: "#2BA3C7",
        icon: img("athar/logo-white.png"),
        iconBg: "#0c465b",
        visual: { kind: "tiles", images: [img("athar/screen-hadith.webp"), img("athar/screen-prayer.webp"), img("athar/screen-scan.webp")] },
      },
      {
        id: "wize",
        name: "WIZE",
        kicker: "تطبيق مالي · الخليج",
        title: "إدارة أموالك الشخصية بهدوء ووضوح.",
        desc: "تطبيق مالي ثنائي اللغة للخليج: الرصيد والميزانيات والأهداف في مكان واحد، مسح الإيصالات، قراءة رسائل البنك، تحليلات ومساعد ذكي. Firebase و Expo للتطبيق، وخدمات Cloud Run للذكاء الاصطناعي ومسح الإيصالات.",
        role: "المطور الرئيسي · عمل حر لشركة Smart Idea Technology",
        tags: ["Expo", "Firebase", "Cloud Run", "AI assistant", "OCR"],
        link: { href: "https://trywize.com", label: "trywize.com" },
        accent: "#1DB954",
        icon: img("wize/logo-mark.png"),
        iconBg: "#060B14",
        visual: { kind: "tiles", images: [img("wize/screen-wize-ai.webp"), img("wize/screen-overview.webp"), img("wize/screen-analytics.webp")] },
      },
      {
        id: "yss",
        name: "YourSimpleSolutions",
        kicker: "منصة SaaS بالذكاء الاصطناعي · أوتاوا",
        title: "فريق ذكاء اصطناعي يشغّل العمل في الخلفية.",
        desc: "موظف استقبال ذكي لا تفوته أي مكالمة، ووكلاء ذكاء اصطناعي يتابعون العملاء ويرصدون ما يحدث ويحللونه. أبني الجانب البرمجي: بوابة العملاء، مسارات التوجيه، والتجربة ثنائية اللغة إنجليزي/فرنسي.",
        role: "مهندس برمجيات",
        tags: ["React", "TypeScript", "AI agents", "Voice AI", "EN / FR"],
        link: { href: "https://yoursimplesolutions.ca", label: "yoursimplesolutions.ca" },
        accent: "#3B82F6",
        visual: { kind: "wide", image: img("yss/mockup-trio.webp"), fit: "bleed" },
      },
      {
        id: "najem",
        name: "نجم",
        kicker: "تطبيق عائلي · الخليج",
        title: "المهام والعادات، على شكل لعبة يحبها الأطفال.",
        desc: "الأهل يحددون المهام، والأطفال يجمعون النجوم ويستبدلونها بمكافآت في متجر يتحكم فيه الأهل. تجربة منفصلة للأهل وللأطفال، أوسمة وأهداف ومحفظة، بلغتين ومع الوضع الداكن.",
        role: "مؤسس · المنتج، التصميم، التطوير",
        tags: ["React Native", "Gamification", "Multi-role auth", "RTL"],
        accent: "#E96840",
        icon: img("najem/icon.png"),
        visual: { kind: "phones", images: [img("najem/kid-home.webp"), img("najem/parent-home.webp"), img("najem/kid-store.webp")] },
      },
    ] as Project[],
    smallProjects: [
      {
        id: "mshro3e",
        name: "مشروعي",
        kicker: "منصة · الكويت",
        title: "نوصل الناس بالمشاريع المنزلية في الكويت.",
        desc: "دليل لاكتشاف المشاريع المنزلية مع زر واتساب، فلترة حسب المحافظة، ومواسم خاصة. لوحة تحكم وتطبيق جوال.",
        role: "مؤسس",
        tags: ["React Native", "Next.js admin", "KWD subscriptions"],
        accent: "#3F7BF5",
        visual: { kind: "wide", image: img("mshro3e/og.webp"), fit: "cover" },
      },
      {
        id: "flipreward",
        name: "Flipreward",
        kicker: "منصة ولاء · ويب",
        title: "تسجيل ولاء على تابلت يحوّل الزوار إلى عملاء دائمين.",
        desc: "موقع لتابلت ولاء داخل المتجر: العميل يسجل برقم جواله ويستلم المكافآت برسالة. متجاوب ومتحرك ومصمم للتحويل.",
        role: "مطور واجهات",
        tags: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
        accent: "#E5337A",
        visual: { kind: "wide", image: img("flipreward/tablet-3.webp"), fit: "contain" },
      },
    ] as Project[],
    about: {
      eyebrow: "عني",
      title: "روح رائد أعمال، عادات مهندس، وعقلية أمنية.",
      paragraphs: [
        "أنا عبدالرحمن، كويتي أدرس علوم الحاسوب في جامعة كارلتون في أوتاوا بتخصص الأمن السيبراني. حياتي بين كندا والخليج، وأغلب ما أبنيه موجّه لناسنا هناك.",
        "من زمان وأنا أحب التجارة وريادة الأعمال. أدير Tickholic لبيع الساعات الفاخرة في دول الخليج، واشتغلت مشاريع حرة لمواقع وتطبيقات لعملاء خليجيين، ودايماً أطلق منتجاتي الخاصة: أثر ونجم ومشروعي.",
        "في أبريل 2026 دخلت عالم الذكاء الاصطناعي بكل قوتي وما وقفت. أقضي حوالي 12 ساعة يومياً على مكتبي، أبني بالنماذج اللغوية ووكلاء البرمجة، وأحوّل الأفكار إلى تطبيقات منشورة أسرع من أي وقت مضى.",
      ],
      facts: [
        { k: "المكان", v: "أوتاوا، كندا · الكويت" },
        { k: "الدراسة", v: "بكالوريوس علوم الحاسوب، كارلتون" },
        { k: "التركيز", v: "تخصص وتخصص فرعي في الأمن السيبراني" },
        { k: "اللغات", v: "العربية · الإنجليزية" },
      ],
    },
    pillars: {
      eyebrow: "ما يحركني",
      title: "ثلاث أشياء مهووس فيها.",
      items: [
        {
          id: "startups",
          name: "ريادة الأعمال",
          title: "أبني مشاريع، مو بس كود.",
          desc: "من بيع ساعات رولكس وباتيك فيليب في الخليج عبر Tickholic، إلى إطلاق تطبيقاتي وبناء الجانب البرمجي لشركة ذكاء اصطناعي. أحب أمتلك كل شيء: الفكرة، المنتج، الإطلاق، والعملاء.",
          points: ["Tickholic · ساعات فاخرة، الخليج", "أثر، نجم، مشروعي · مؤسس", "YourSimpleSolutions · منصة SaaS", "مشاريع حرة لعملاء خليجيين"],
        },
        {
          id: "ai",
          name: "الذكاء الاصطناعي",
          title: "الذكاء الاصطناعي زميلي اليومي.",
          desc: "أبني يومياً باستخدام Claude Code و Codex، وأضيف مزايا ذكاء اصطناعي لمنتجات حقيقية: موظف استقبال ذكي يرد على المكالمات، وكلاء يتابعون ويرفعون التقارير، ومساعد مالي ومسح إيصالات في WIZE.",
          points: ["أكثر من 12 مليار توكن منذ إطلاق وكلاء البرمجة", "موظف استقبال ذكي ووكلاء أعمال", "مساعد WIZE الذكي ومسح الإيصالات", "سير عمل الوكلاء، MCP، وتصميم الأوامر"],
        },
        {
          id: "security",
          name: "الأمن السيبراني",
          title: "الأمان من البداية، مو فكرة لاحقة.",
          desc: "دراستي مركزة على الأمن السيبراني، وهذا ينعكس على طريقة بنائي: قواعد قواعد بيانات محكمة، مصادقة صحيحة، أقل صلاحيات ممكنة، وفهم كيف تنكسر الأنظمة عشان ما تنكسر.",
          points: ["تخصص وتخصص فرعي في الأمن السيبراني، كارلتون", "التشفير التطبيقي والمصادقة، الشبكات", "Firestore rules، Firebase Auth، Supabase، Cloudflare"],
        },
      ],
    },
    aiStats: [
      { v: "12B+", l: "توكن عبر وكلاء البرمجة" },
      { v: "12h", l: "يومياً على المكتب" },
      { v: "أبريل 2026", l: "بداية الانغماس في الذكاء الاصطناعي" },
      { v: "يومياً", l: "أبني مع Claude Code و Codex" },
    ],
    gallery: {
      eyebrow: "من داخل التطبيقات",
      title: "شاشات حقيقية من منتجات حقيقية.",
    },
    github: {
      eyebrow: "الكود",
      title: "على GitHub.",
      bio: "My contribution graph doesn't tell the full story. The real work is happening under the hood.",
      cta: "زيارة GitHub",
      repos: [
        { name: "Athar", lang: "TypeScript", desc: "مكتبة كاملة لأحاديث النبي محمد ﷺ من الكتب الستة داخل تطبيق أثر." },
        { name: "mshro3e-project", lang: "TypeScript", desc: "تطبيق مشروعي ولوحة التحكم للمشاريع المنزلية في الكويت." },
        { name: "Najem-App", lang: "React Native", desc: "تطبيق عائلي يجمع فيه الأطفال النجوم مقابل المهام ويستبدلونها بمكافآت." },
        { name: "Caesar-cipher", lang: "Python", desc: "تشفير وفك تشفير قيصر مع سكربت هجوم القوة الغاشمة يوضح ضعف هذا التشفير." },
        { name: "postgres-crud-students", lang: "Python", desc: "تطبيق CRUD على PostgreSQL لمادة COMP 3005 (أنظمة قواعد البيانات)." },
        { name: "COMP3005_health_club_project", lang: "Python", desc: "نظام إدارة نادي صحي مبني على قاعدة بيانات علائقية." },
      ],
    },
    experience: {
      eyebrow: "الخبرات",
      title: "أين كنت أبني.",
      nowTitle: "حالياً",
      now: ["أبني منصة الذكاء الاصطناعي في YourSimpleSolutions"],
      items: [
        { when: "2026 — الآن", what: "مهندس برمجيات", where: "YourSimpleSolutions.ca · أوتاوا", note: "أبني منصة SaaS: موظف استقبال ذكي، وكلاء ذكاء اصطناعي، وبوابة العملاء." },
        { when: "2026", what: "مطور تطبيقات (عمل حر)", where: "WIZE · Smart Idea Technology، الكويت", note: "نقلت تطبيقاً مالياً ثنائي اللغة من البناء إلى Google Play و App Store." },
        { when: "مستمر", what: "مؤسس ومطور مستقل", where: "أثر · نجم · مشروعي", note: "الفكرة والتصميم والبرمجة وصفحات المتجر والإطلاق، كلها بنفسي." },
        { when: "معسكر", what: "تطوير Full-Stack", where: "CODED · الكويت", note: "تدريب مكثف وعملي في تطوير الويب والجوال." },
        { when: "قيد الدراسة", what: "بكالوريوس علوم الحاسوب", where: "جامعة كارلتون · أوتاوا", note: "تخصص وتخصص فرعي في الأمن السيبراني." },
      ],
    },
    stack: {
      eyebrow: "الأدوات",
      title: "ما أستخدمه لأطلق المنتجات.",
      groups: [
        { name: "الجوال", items: ["React Native", "Expo", "EAS Build", "App Store Connect"] },
        { name: "الويب", items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS"] },
        { name: "الخوادم", items: ["Firebase", "Google Cloud Run", "Node.js", "Python", "REST APIs"] },
        { name: "الذكاء الاصطناعي", items: ["Claude Code", "Codex", "LLM agents", "Voice AI", "Figma"] },
        { name: "أيضاً", items: ["Java", "C++", "الأمن السيبراني", "تجربة عربية / RTL", "Cloudflare"] },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "عندك فكرة؟ خلنا نبنيها.",
      sub: "مشروع حر، وظيفة بدوام كامل، أو بس حاب نسولف عن التقنية. عادةً أرد خلال يوم.",
      email: "راسلني",
      linkedin: "LinkedIn",
      copy: "نسخ البريد",
      copied: "تم النسخ",
    },
    footer: "تصميم وتطوير عبدالرحمن الدوسري",
  },
};

export type Content = typeof content.en;
