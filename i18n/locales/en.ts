export default defineI18nLocale(() => ({
  projects: {
    "title": "My Projects"
  },
  resume: {
    whyHireMe: {
      title: "Why hire me?",
    },
    tabs: {
      education: "Education",
      skills: "Skills",
      about: "About me",
    },
    experience: {
      title: "My experience",
      items: {
        junior: {
          period: "2025",
          title: "Junior Web Developer",
          place: "Official Programing Courses Center",
        },
        frontend: {
          period: "March 2026",
          title: "Front-End Developer Intern",
          place: "Web Design Studio",
        },
        fullstack: {
          period: "May 2026",
          title: "Full Stack Developer",
          place: "Tech Solutions Inc.",
        },
      },
    },
    education: {
      title: "My education",
      items: {
        programming: {
          period: "2025",
          title: "Programming Course",
          place: "Gujurly Programming Courses Center",
        },
        certified: {
          period: "2025",
          title: "Certified Web Developer",
          place: "In the City",
        },
        bootcamp: {
          period: "2026",
          title: "Full Stack Web Development Bootcamp",
          place: "Online Course Platform",
        },
      },
    },
    skills: {
      title: "My skills",
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
          "/projects/owazym.jpg",
        ],
      },
      HazarOil: {
        id: "Hazar Oil",
        number: "02",
        title: "Hazar Oil",
        desc: "Hazar Oil is a corporate presentation website built for an oil company, featuring sections such as About Us and Our Partners. It delivers a clean and professional look to represent the brand online, highlight company values, and showcase business relationships with a focus on credibility and visual clarity.",
        techs: ["Nuxt.js"],
        liveUrl: "https://hazaroil.uz/",
        githubUrl: "https://github.com/The-Suhan/Hazar-Oil",
        images: [
          "/projects/hazar-oil.png",
        ],
      },
      Velora: {
        id: "Velora Cafe",
        number: "03",
        title: "Velora Online Cafe",
        desc: "Velora Cafe is a full-stack restaurant web application with both customer-facing and admin sides. Customers can browse food and drink items by category, place orders, manage their profile, and register or log in with a secure OTP-based forgot password system. The admin panel provides full control over menu management and orders, offering a seamless experience for both staff and guests.",
        techs: ["Laravel", "Nuxt.js", "PostreSQL"],
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/velora-online-cafe-full-project",
        images: [
          "/projects/velora.png",
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
        "As a Freelance Full Stack Developer, I build high-quality websites, e-commerce platforms, mobile applications, and custom software solutions for clients.",
      role: "Web Developer",
      greeting: "Hello I'm",
      roles: {
        name: "Suhan Begenjov",
        uiux: "UI UX Designer",
        frontend: "Full Stack Web Developer",
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
      resume: "Resume",
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