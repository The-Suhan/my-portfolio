export default defineI18nLocale(() => ({
  resume: {
    whyHireMe: {
      title: "Why hire me?",
    },
    tabs: {
      experience: "Experience",
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
        id: "fullstack",
        number: "01",
        title: "Fullstack Project 'Owazym'",
        desc: "Owazym is a full-stack music streaming platform inspired by services like Spotify. It provides a clean, responsive UI for discovering, playing, and managing music with smooth audio playback and playlist support. Built with modern web technologies, it focuses on performance, scalability, and a polished user experience.",
        techs: ["Node.js", "Prisma", "Vue.js", "PostreSQL"],
        liveUrl: "https://owazym-frontend.vercel.app",
        githubUrl: "https://github.com/The-Suhan/owazym-full-project",
        images: [
          "/projects/owazym.jpg",
        ],
      },
      heartAnimation: {
        id: "heartAnimation",
        number: "02",
        title: "Heart Animation",
        desc: "A tender front-end piece I crafted for my queen — a gentle, looping heart animation built with pure CSS and canvas magic. Every pulse was written with her in mind.",
        techs: ["Nuxt.js", "CSS", "Canvas API"],
        liveUrl: "https://only-for-my-princess.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/only-for-my-princess",
        images: ["/projects/project1.png"],
      },
      myEyesOnHer: {
        id: "myEyesOnHer",
        number: "03",
        title: "Her In My Eyes",
        desc: "A visual love letter — this project captures exactly how she looks through my eyes. Colors, light, and motion all shaped by the way I see her.",
        techs: ["Nuxt.js"],
        liveUrl: "https://for-my-princess-tau.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/for-my-princess",
        images: ["/projects/project2.png"],
      },
      questionForPrincess: {
        id: "questionForPrincess",
        number: "04",
        title: "A Question for My Princess",
        desc: "I had a question prepared just for my princess — one I built into an interactive experience she'd never forget.",
        techs: ["Nuxt.js"],
        liveUrl: "https://questionformylove.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/Question-template-for-my-wife-",
        images: ["/projects/project3.png"],
      },
    },
  },

  home: {
    hero: {
      description:
        "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
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