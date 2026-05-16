export default defineI18nLocale(() => ({
  resume: {
    whyHireMe: {
      title: "Почему нанять меня?",
    },
    tabs: {
      experience: "Опыт",
      education: "Образование",
      skills: "Навыки",
      about: "Обо мне",
    },
    experience: {
      title: "Мой опыт",
      items: {
        junior: {
          period: "2025",
          title: "Junior Web Developer",
          place: "Официальный центр программирования",
        },
        frontend: {
          period: "Март 2026",
          title: "Стажёр Front-End Developer",
          place: "Студия веб-дизайна",
        },
        fullstack: {
          period: "Май 2026",
          title: "Full Stack разработчик",
          place: "Tech Solutions Inc.",
        },
      },
    },
    education: {
      title: "Моё образование",
      items: {
        programming: {
          period: "2025",
          title: "Курс программирования",
          place: "Центр программирования Gujurly",
        },
        certified: {
          period: "2025",
          title: "Сертифицированный веб-разработчик",
          place: "В городе",
        },
        bootcamp: {
          period: "2026",
          title: "Full Stack Web Development Bootcamp",
          place: "Онлайн платформа обучения",
        },
      },
    },
    skills: {
      title: "Мои навыки",
    },
    about: {
      title: "Обо мне",
      fields: {
        name: "Имя",
        phone: "Телефон",
        experience: "Опыт",
        nationality: "Национальность",
        email: "Email",
        freelance: "Фриланс",
        languages: "Языки",
      },
      values: {
        name: "Suhan Begenjov",
        phone: "+993 63 846663",
        experience: "1+ год",
        nationality: "Туркмен",
        email: "suxanoff07",
        freelance: "Доступен",
        languages: "Английский, Русский, Туркменский, Турецкий",
      },
    },
  },

  work: {
    liveProject: "Живой проект",
    githubRepo: "GitHub репозиторий",
    popup: {
      title: "Приватный доступ",
      desc: "Этот проект закрытый. Введите 4-значный код для продолжения.",
      error: "Неверный код. Попробуйте снова.",
      confirm: "Подтвердить",
    },
    projects: {
      fullstack: {
        id: "fullstack",
        number: "01",
        title: "Fullstack проект 'Owazym'",
        desc: "Owazym — это full-stack музыкальная платформа, вдохновлённая Spotify. Она позволяет искать, слушать и управлять музыкой через удобный интерфейс.",
        techs: ["Node.js", "Prisma", "Vue.js", "PostreSQL"],
        liveUrl: "https://owazym-frontend.vercel.app",
        githubUrl: "https://github.com/The-Suhan/owazym-full-project",
        images: ["/projects/owazym.jpg"],
      },
      heartAnimation: {
        id: "heartAnimation",
        number: "02",
        title: "Анимация сердца",
        desc: "Небольшая фронтенд-работа, которую я сделал для моей королевы — нежная зацикленная анимация сердца на чистом CSS и Canvas. Каждый импульс написан с мыслью о ней.",
        techs: ["Nuxt.js", "CSS", "Canvas API"],
        liveUrl: "https://only-for-my-princess.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/only-for-my-princess",
        images: ["/projects/project1.png"],
      },
      myEyesOnHer: {
        id: "myEyesOnHer",
        number: "03",
        title: "Она в моих глазах",
        desc: "Визуальное любовное письмо — этот проект передаёт именно то, какой я её вижу. Цвета, свет и движение — всё сформировано тем, как я смотрю на неё.",
        techs: ["Nuxt.js"],
        liveUrl: "https://for-my-princess-tau.vercel.app/",
        githubUrl: "https://github.com/The-Suhan/for-my-princess",
        images: ["/projects/project2.png"],
      },
      questionForPrincess: {
        id: "questionForPrincess",
        number: "04",
        title: "Вопрос для моей принцессы",
        desc: "У меня был вопрос, подготовленный специально для моей принцессы — я превратил его в интерактивный опыт, который она не забудет.",
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
        "Я создаю элегантные цифровые интерфейсы и владею различными технологиями программирования.",
      role: "Программист",
      greeting: "Привет, я",
      roles: {
        name: "Suhan Begenjov",
        uiux: "UI UX дизайнер",
        frontend: "Full Stack разработчик",
      },
    },
    stats: {
      experience: "Лет опыта",
      projects: "Завершённые проекты",
      technologies: "Освоенные технологии",
      commits: "Коммиты кода",
    },
    social: {
      downloadCV: "Скачать CV",
      github: "GitHub",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      twitter: "Twitter",
    },
  },

  layout: {
    nav: {
      home: "Главная",
      services: "Сервисы",
      resume: "Резюме",
      work: "Работы",
      contact: "Контакты",
      language: "Язык",
    },
    footer: {
      builtWith: "Создано с",
      architecture: "Feature-Based Architecture",
    },
  },

  contact: {
    title: "Давайте работать вместе",
    form: {
      firstname: "Имя",
      lastname: "Фамилия",
      email: "Адрес электронной почты",
      phone: "Номер телефона",
      selectService: "Выберите услугу",
      services: {
        web: "Веб-разработка",
        design: "UI/UX дизайн",
        fullstack: "Full Stack",
        other: "Другое",
      },
      message: "Введите ваше сообщение.",
      send: "Отправить сообщение",
      sending: "Отправка...",
      success: "Сообщение успешно отправлено!",
      error: "Не удалось отправить. Попробуйте снова.",
    },
    info: {
      phone: {
        label: "Телефон",
        value: "+993 63 846663",
      },
      email: {
        label: "Электронная почта",
        value: "suxanoff07",
      },
      address: {
        label: "Адрес",
        value: "Туркменистан, Ашхабад",
      },
    },
  },
}));