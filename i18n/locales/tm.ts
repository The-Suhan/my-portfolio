export default defineI18nLocale(() => ({
  resume: {
    whyHireMe: {
      title: "Näme üçin meni işe almaly?",
    },
    tabs: {
      experience: "Tejribe",
      education: "Bilim",
      skills: "Tehnoligiyalar",
      about: "Men hakda",
    },
    experience: {
      title: "Meniň tejribäm",
      items: {
        junior: {
          period: "2025",
          title: "Junior Web Developer",
          place: "Resmi Programmirleme Kurslar Merkezi",
        },
        frontend: {
          period: "Mart 2026",
          title: "Front-End Developer Intern",
          place: "Web Dizaýn Studiýasy",
        },
        fullstack: {
          period: "Maý 2026",
          title: "Full Stack Developer",
          place: "Tech Solutions Inc.",
        },
      },
    },
    education: {
      title: "Meniň bilimim",
      items: {
        programming: {
          period: "2025",
          title: "Programmirleme Kursy",
          place: "Gujurly Programmirleme Kurslar Merkezi",
        },
        certified: {
          period: "2025",
          title: "Sertifikatly Web Developer",
          place: "Şäherde",
        },
        bootcamp: {
          period: "2026",
          title: "Full Stack Web Development Bootcamp",
          place: "Online Okuw Platformasy",
        },
      },
    },
    skills: {
      title: "Tehnologiyalarym",
    },
    about: {
      title: "Men hakda",
      fields: {
        name: "Ady",
        phone: "Telefon",
        experience: "Tejribe",
        nationality: "Milleti",
        email: "Email",
        freelance: "Freelance",
        languages: "Diller",
      },
      values: {
        name: "Suhan Begenjov",
        phone: "+993 63 846663",
        experience: "1+ ýyl",
        nationality: "Türkmen",
        email: "suxanoff07",
        freelance: "Elýeterli",
        languages: "Inlis, Rus, Türkmen, Türk",
      },
    },
  },

  work: {
    liveProject: "Canly taslama",
    githubRepo: "Github repositoriy",
    projects: {
      fullstack: {
        id: "fullstack",
        number: "01",
        title: "Fullstack Taslama 'Owazym'",
        desc: "Owazym Spotify ýaly hyzmatlardan ylham alnan full-stack aýdym platformasydyr. Aýdymlary tapmak, diňlemek we pleýlist dolandyrmak üçin arassa we responsive UI hödürleýär.",
        techs: ["Node.js", "Prisma", "Vue.js", "PostreSQL"],
        liveUrl: "https://owazym-frontend.vercel.app",
        githubUrl: "https://github.com/The-Suhan/owazym-full-project",
        images: ["/projects/owazym.jpg"],
      },
    },
  },

  home: {
    hero: {
      description:
        "Men sanly tejribeleri döretmekde ökde we dürli programmirleme dillerini ulanmagy başarýaryn.",
      role: "Programma üpjünçilik işläp düzüji",
      greeting: "Salam men",
      roles: {
        name: "Suhan Begenjov",
        uiux: "UI UX Dizaýner",
        frontend: "Full Stack Developer",
      },
    },
    stats: {
      experience: "Ýyl tejribe",
      projects: "Tamamlanan taslamalar",
      technologies: "Öwrenilen tehnologiýalar",
      commits: "Kod commitleri",
    },
    social: {
      downloadCV: "CV göçürip al",
      github: "GitHub",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      twitter: "Twitter",
    },
  },

  layout: {
    nav: {
      home: "Baş sahypa",
      services: "Hyzmatlar",
      resume: "Rezume",
      work: "Işler",
      contact: "Habarlaşmak",
      language: "Dil",
    },
    footer: {
      builtWith: "Gurulan tehnologiýa",
      architecture: "Feature-Based Architecture",
    },
  },

  contact: {
    title: "Geliň, bile işleşeliň",
    form: {
      firstname: "Ady",
      lastname: "Familiýasy",
      email: "E-poçta salgysy",
      phone: "Telefon belgi",
      selectService: "Hyzmat saýlaň",
      services: {
        web: "Web ösüşi",
        design: "UI/UX dizaýny",
        fullstack: "Full Stack",
        other: "Beýlekiler",
      },
      message: "Habaryňyzy ýazyň.",
      send: "Iber",
      sending: "Ugradylýar...",
      success: "Habar üstünlikli ugradyldy!",
      error: "Iberip bolmady. Gaýtadan synanyşyň.",
    },
    info: {
      phone: {
        label: "Telefon",
        value: "+993 63 846663",
      },
      email: {
        label: "E-poçta",
        value: "suxanoff07",
      },
      address: {
        label: "Salgysy",
        value: "Türkmenistan, Aşgabat",
      },
    },
  },
}));