export default defineI18nLocale(() => ({
  projects: {
    "title": "Мои проекты"
  },
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
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/owazym-full-project",
        images: ["/projects/owazym.jpg"],
      },
      HazarOil: {
        id: "Hazar Oil",
        number: "02",
        title: "Hazar Oil",
        desc: "Hazar Oil — корпоративный презентационный сайт нефтяной компании с разделами «О нас» и «Наши партнёры». Сайт выполнен в чистом и профессиональном стиле, отражает ценности компании и демонстрирует деловые связи с акцентом на доверие и визуальную привлекательность.",
        techs: ["Nuxt.js"],
        liveUrl: "https://hazaroil.uz/",
        githubUrl: "https://github.com/The-Suhan/Hazar-Oil",
        images: ["/projects/hazar-oil.png"],
      },
      Velora: {
        id: "Velora Cafe",
        number: "03",
        title: "Velora Online Cafe",
        desc: "Velora Cafe — полноценное веб-приложение для ресторана с клиентской и административной частями. Пользователи могут просматривать блюда и напитки по категориям, оформлять заказы, управлять профилем, а также регистрироваться и входить в систему с защищённым восстановлением пароля через OTP. Админ-панель обеспечивает полный контроль над меню и заказами.",
        techs: ["Laravel", "Nuxt.js", "PostreSQL"],
        liveUrl: null,
        githubUrl: "https://github.com/The-Suhan/velora-online-cafe-full-project",
        images: ["/projects/velora.png"],
      },
    },
  },

  error: {
    notFound: "Страница не найдена",
    unexpected: "Что-то пошло не так",
    notFoundDesc: "Страница, которую вы ищете, не существует или была перемещена.",
    unexpectedDesc: "Произошла непредвиденная ошибка.",
    goHome: "На главную",
  },

  home: {
    "title": "Главная",
    "description": "Моя главная страница",
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