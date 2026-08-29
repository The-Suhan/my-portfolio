export default defineI18nLocale(() => ({
  seo: {
    siteName: "Suhan Begenjov",
    titleTemplate: "%s — Suhan Begenjov",
    jobTitle: "Full Stack Web Developer",
    home: {
      title: "Full Stack Web Developer",
      description:
        "Suhan Begenjov — freelance Full Stack Web Developer from Ashgabat, Turkmenistan. I build fast websites, e-commerce platforms, Android apps and custom software with Vue, Nuxt, Node.js and Laravel.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Suhan Begenjov — freelance Full Stack Web Developer. Available for websites, web apps, e-commerce and mobile projects.",
    },
    error: {
      title: "Page not found",
      description: "The page you are looking for does not exist or has been moved.",
    },
    keywords:
      "Suhan Begenjov, full stack developer, web developer Turkmenistan, Nuxt developer, Vue developer, freelance developer Ashgabat, Laravel, Node.js, Android developer",
    imageAlt: "Suhan Begenjov — Full Stack Web Developer portfolio",
  },
  projects: {
    "title": "My Projects"
  },
  about: {
    title: "About me",
    fields: {
      name: "Name",
      phone: "Phone",
      experience: "Experience",
      nationality: "Nationality",
      email: "Email",
      freelance: "Freelance",
      languages: "Languages",
    },
    values: {
      name: "Suhan Begenjov",
      phone: "+993 63 846663",
      experience: "1+ Years",
      nationality: "Turkmen",
      email: "suxanoff07",
      freelance: "Available",
      languages: "English, Russia, Turkmen, Turkish",
    },
  },

  work: {
    liveProject: "Live project",
    githubRepo: "Github repository",
    popup: {
      title: "Private Access",
      desc: "This project is private. Enter the 4-digit code to continue.",
      error: "Wrong code. Try again.",
      confirm: "Confirm",
    },
    projects: {
      fullstack: {
        id: "Owazym",
        number: "01",
        title: "Owazym",
        desc: "Owazym is a full-stack music streaming platform inspired by services like Spotify. It provides a clean, responsive UI for discovering, playing, and managing music with smooth audio playback and playlist support. Built with modern web technologies, it focuses on performance, scalability, and a polished user experience.",
        techs: ["Node.js", "Prisma", "Vue.js", "PostreSQL"],
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/owazym-full-project",
        images: [
          "/projects/owazym.webp",
        ],
      },
      Velora: {
        id: "Velora Cafe",
        number: "02",
        title: "Velora Online Cafe",
        desc: "Velora Cafe is a full-stack restaurant web application with both customer-facing and admin sides. Customers can browse food and drink items by category, place orders, manage their profile, and register or log in with a secure OTP-based forgot password system. The admin panel provides full control over menu management and orders, offering a seamless experience for both staff and guests.",
        techs: ["Laravel", "Nuxt.js", "PostreSQL"],
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/velora-online-cafe-full-project",
        images: [
          "/projects/velora.webp",
        ],
      },
      macbook: {
        id: "3D Template",
        number: "03",
        title: "3D Interactive MacBook Template",
        desc: "3D Template is an interactive Vue 3 + TypeScript template featuring a fully animated 3D MacBook scene built with Three.js and GSAP. The laptop model loads from a .glb file and renders full-screen behind the page content, with an exposed lid pivot that lets the screen be animated open or closed via scroll or user interaction. Designed as a reusable base template, it comes with a full-screen resizable canvas, custom camera and lighting setup, and a clean project structure ready for customization.",
        techs: ["Vue.js", "Three.js", "GSAP", "TypeScript", "Vite"],
        liveUrl: "https://3d-template-beta.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/3d-macbook-template-",
        images: [
          "/projects/macbook.webp",
        ],
      },
      oguz: {
        id: "Oguz Trading Group",
        number: "04",
        title: "Oguz Trading Group",
        desc: "Oguz Trading Group is the official web presence of an FxPro partner, covering daily forex, gold and index market analysis, live trade sharing and risk-management training. Built as a fully prerendered multilingual site in four languages (Turkish, English, Russian and Turkmen), with per-locale canonical, hreflang, Open Graph and JSON-LD tags generated at build time, hand-written scoped CSS, and a font loading strategy that keeps the first paint unblocked.",
        techs: ["Vue.js", "Vite", "JavaScript", "SEO"],
        liveUrl: "https://oguz-trade.vercel.app/tk/",
        githubUrl: "https://github.com/The-Suhan/Oguz-Trade",
        images: [
          "/projects/Oguz-trade.webp",
        ],
      },
    },
  },
  error: {
    notFound: "Page not found",
    unexpected: "Something went wrong",
    notFoundDesc: "The page you're looking for doesn't exist or has been moved.",
    unexpectedDesc: "An unexpected error occurred.",
    goHome: "Go home",
  },

  home: {
    "title": "Home",
    "description": "My home page",
    hero: {
      description:
        "As a freelance Full Stack Developer, I build high-quality websites, e-commerce platforms, mobile and Android apps, and custom software solutions for clients.",
      role: "Web Developer",
      greeting: "Hello I'm",
      roles: {
        name: "Suhan Begenjov",
        uiux: "UI UX Designer",
        frontend: "Full Stack Web Developer",
        android: "Android Developer",
      },
    },
    stats: {
      experience: "Years of experience",
      projects: "Projects completed",
      technologies: "Technologies mastered",
      commits: "Code commits",
    },
    social: {
      downloadCV: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      twitter: "Twitter",
    },
  },

  layout: {
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      contact: "Contact",
      language: "Language",
    },
    footer: {
      builtWith: "Built with",
      architecture: "Feature-Based Architecture",
    },
  },

  contact: {
    title: "Let's work together",
    form: {
      firstname: "Firstname",
      lastname: "Lastname",
      email: "Email address",
      phone: "Phone number",
      selectService: "Select a service",
      services: {
        web: "Web Development",
        design: "UI/UX Design",
        fullstack: "Full Stack",
        android: "Android Application",
        other: "Other",
      },
      message: "Type your message here.",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send. Please try again.",
    },
    info: {
      phone: {
        label: "Phone",
        value: "+993 63 846663",
      },
      email: {
        label: "Email",
        value: "suxanoff07",
      },
      address: {
        label: "Address",
        value: "Turkmenistan, Ashgabat",
      },
    },
  },
}))