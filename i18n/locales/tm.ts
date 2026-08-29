export default defineI18nLocale(() => ({
  seo: {
    siteName: "Suhan Begenjow",
    titleTemplate: "%s — Suhan Begenjow",
    jobTitle: "Full Stack web döredijisi",
    home: {
      title: "Full Stack web döredijisi",
      description:
        "Suhan Begenjow — Aşgabatdan (Türkmenistan) freelance Full Stack web döredijisi. Vue, Nuxt, Node.js we Laravel bilen çalt web sahypalary, onlaýn dükanlar, Android goşundylary we programma üpjünçiligini taýýarlaýaryn.",
    },
    contact: {
      title: "Habarlaşmak",
      description:
        "Suhan Begenjow bilen habarlaşyň — freelance Full Stack web döredijisi. Web sahypalary, web goşundylary, onlaýn dükanlar we mobil taslamalar üçin açyk.",
    },
    error: {
      title: "Sahypa tapylmady",
      description: "Gözleýän sahypaňyz ýok ýa-da başga ýere geçirilen.",
    },
    keywords:
      "Suhan Begenjow, full stack dörediji, web dörediji Türkmenistan, Nuxt, Vue, freelance dörediji Aşgabat, Laravel, Node.js, Android",
    imageAlt: "Suhan Begenjow — Full Stack web döredijisiniň portfolio saýty",
  },
  projects: {
    "title": "Meniň taslamalarym"
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
        images: ["/projects/owazym.webp"],
      },
      Velora: {
        id: "Velora Cafe",
        number: "02",
        title: "Velora Online Cafe",
        desc: "Velora Cafe — müşderi we admin taraplaryny öz içine alýan doly restoran web goşundysydyr. Ulanyjylar iýmit we içgileri kategoriýa boýunça görup bilerler, sargyt edip bilerler, profilini dolandyryp bilerler we OTP arkaly howpsuz parol dikeltme ulgamy bilen hasaba durup ýa-da girip bilerler. Admin paneli menýu we sargytlar üstünde doly gözegçiligi üpjün edýär.",
        techs: ["Laravel", "Nuxt.js", "PostreSQL"],
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/velora-online-cafe-full-project",
        images: ["/projects/velora.webp"],
      },
      macbook: {
        id: "3D Template",
        number: "03",
        title: "Interaktiw 3D MacBook şablony",
        desc: "3D Template — Vue 3 + TypeScript esasynda döredilen interaktiw şablon bolup, Three.js we GSAP arkaly doly animasiýaly 3D MacBook sahnasyny öz içine alýar. Noutbuk modeli .glb faýlyndan ýüklenýär we sahypadaky mazmunyň aňyrsynda doly ekran görnüşinde görkezilýär. Gapak üçin elýeterli pivot nokady arkaly ekrany scroll ýa-da ulanyjynyň özara täsirleşmesi arkaly açyp ýa-da ýapyp bolýar. Şablon gaýtadan ulanmaga we özleşdirmäge niýetlenendir. Onda doly ekranly we ölçegi üýtgedilip bilinýän canvas, ýörite kamera we ýagtylandyryş sazlamalary, şeýle hem arassa we tertipli taslama gurluşy bar.",
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
        desc: "Oguz Trading Group — FxPro-nyň resmi hyzmatdaşynyň web sahypasy: forex, altyn we indeks bazarlarynda gündelik seljerme, göni söwda paýlaşygy we töwekgelçilik dolandyryş okuwy. Dört dilde (türk, iňlis, rus we türkmen) doly prerender edilen köpdilli sahypa; canonical, hreflang, Open Graph we JSON-LD bellikleri her dil üçin gurnama wagtynda döredilýär, stiller el bilen ýazyldy we şrift ýüklemesi ilkinji görkezilişi bökdemeýär.",
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
        "Frilans Full Stack Developer hökmünde, men ýokary hilli web-saýtlar, elektron söwda platformalary, mobil we Android goşundylar, şeýle-de müşderiler üçin ýörite programma üpjünçilikli çözgütler işläp taýýarlaýaryn.",
      role: "Programist",
      greeting: "Salam men",
      roles: {
        name: "Suhan Begenjov",
        uiux: "UI UX Dizaýner",
        frontend: "Full Stack Web Developer",
        android: "Android Programist",
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
        android: "Android goşundysy",
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