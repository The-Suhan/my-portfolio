export default defineI18nLocale(() => ({
  resume: {
    whyHireMe: {
      title: "Näme üçin men ?",
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
    popup: {
      title: "Şahsy Giriş",
      desc: "Bu taslama ýapykdyr. Dowam etmek üçin 4 sanly kody giriziň.",
      error: "Nädogry kod. Täzeden synanyşyň.",
      confirm: "Tassykla",
    },
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
      heartAnimation: {
        id: "heartAnimation",
        number: "02",
        title: "Ýürek Animasiýasy",
        desc: "Meniň printessam üçin ýazan bir front-end işim — arassa CSS we Canvas bilen döredilen näzik, gaýtalanýan ýürek animasiýasy. Her urgy onuň hakynda pikir edip ýazyldy.",
        techs: ["Nuxt.js", "CSS", "Canvas API"],
        liveUrl: "https://only-for-my-princess.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/only-for-my-princess",
        images: ["/projects/project1.png"],
      },
      myEyesOnHer: {
        id: "myEyesOnHer",
        number: "03",
        title: "Ol Meniň Gözümde",
        desc: "Bu taslama ony meniň gözüm bilen edil nähili görýändigimi beýan edýär. Reňkler, ýagtylyk we hereket hemmesi onuň mende döredýän duýgularyndan ylham aldy.",
        techs: ["Nuxt.js"],
        liveUrl: "https://for-my-princess-tau.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/for-my-princess",
        images: ["/projects/project2.png"],
      },
      questionForPrincess: {
        id: "questionForPrincess",
        number: "04",
        title: "Prensesim Üçin Sorag",
        desc: "Meniň prensesim üçin taýýarlanan bir soragym bardy — ony ol hiç wagt unutmajak interaktiw bir tejribä öwürdim.",
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
        "Men sanly tejribeleri döretmekde ökde we dürli programmirleme dillerini ulanmagy başarýaryn.",
      role: "Programist",
      greeting: "Salam men",
      roles: {
        name: "Suhan Begenjov",
        uiux: "UI UX Dizaýner",
        frontend: "Full Stack Web Developer",
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