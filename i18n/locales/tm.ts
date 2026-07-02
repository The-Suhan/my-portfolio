export default defineI18nLocale(() => ({
  projects: {
    "title": "Meniň taslamalarym"
  },
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
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/owazym-full-project",
        images: ["/projects/owazym.jpg"],
      },
      HazarOil: {
        id: "Hazar Oil",
        number: "02",
        title: "Hazar Oil",
        desc: "Hazar Oil — nebit kompaniýasy üçin döredilen korporatiw tanyşdyryş saýty bolup, «Biz hakda» we «Hyzmatdaşlarymyz» ýaly bölümleri öz içine alýar. Saýt kompaniýanyň gymmatlyklaryny beýan etmek we işewür gatnaşyklary ynam hem görsel aýdyňlyk esasynda görkezmek üçin arassa we professional görnüşde işlenip düzüldi.",
        techs: ["Nuxt.js"],
        liveUrl: "https://hazaroil.uz/",
        githubUrl: "https://github.com/The-Suhan/Hazar-Oil",
        images: ["/projects/hazar-oil.png"],
      },
      Velora: {
        id: "Velora Cafe",
        number: "03",
        title: "Velora Online Cafe",
        desc: "Velora Cafe — müşderi we admin taraplaryny öz içine alýan doly restoran web goşundysydyr. Ulanyjylar iýmit we içgileri kategoriýa boýunça görup bilerler, sargyt edip bilerler, profilini dolandyryp bilerler we OTP arkaly howpsuz parol dikeltme ulgamy bilen hasaba durup ýa-da girip bilerler. Admin paneli menýu we sargytlar üstünde doly gözegçiligi üpjün edýär.",
        techs: ["Laravel", "Nuxt.js", "PostreSQL"],
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/velora-online-cafe-full-project",
        images: ["/projects/velora.png"],
      },
    },
  },

  error: {
    notFound: "Sahypa tapylmady",
    unexpected: "Bir zat ters gitdi",
    notFoundDesc: "Gözleýän sahypaňyz ýok ýa-da başga ýere geçirildi.",
    unexpectedDesc: "Garaşylmadyk ýalňyşlyk ýüze çykdy.",
    goHome: "Baş sahypa",
  },

  home: {
    "title": "Baş sahypa",
    "description": "Meniň baş sahypam",
    hero: {
      description:
        "Freelance Full Stack Developer. Döwrebap web saýtlaryny, e-commerce platformalaryny, mobil programmalary we ýörite programma üpjünçilik çözgütlerini müşderileriň islegine görä döredýärin.",
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