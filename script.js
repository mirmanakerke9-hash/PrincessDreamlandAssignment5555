/* =====================================================
   Princess Dreamland - script.js
   Assignment 5: Advanced JavaScript and DOM Manipulation
===================================================== */

/* =====================================================
   DATA (objects and arrays)
===================================================== */

// Array of objects: the princesses shown when the page opens.
// More princesses are loaded later from princesses.json with fetch.
const starterPrincesses = [
  {
    key: "cinderella",
    name: "Cinderella",
    category: "classic",
    image: "https://wallpaperaccess.com/full/3520000.jpg",
    alt: "Fairytale castle",
    text: "A kind-hearted dreamer who believes in magic.",
    story: "Cinderella teaches us to be kind, stay hopeful, and believe in our dreams."
  },
  {
    key: "mulan",
    name: "Mulan",
    category: "brave",
    image: "https://lumiere-a.akamaihd.net/v1/images/2024_hb_disneyprincess_mulan_mobile_3497_36a691ee.jpeg?region=0%2C0%2C1024%2C768",
    alt: "Beautiful green forest",
    text: "A courageous heroine who protects her family.",
    story: "Mulan is brave, determined, and willing to challenge expectations to protect the people she loves."
  },
  {
    key: "elsa",
    name: "Elsa",
    category: "magical",
    image: "https://i1.sndcdn.com/artworks-000110816449-0l34b3-t500x500.jpg",
    alt: "Magical snowy mountains",
    text: "A magical queen learning to embrace her powers.",
    story: "Elsa learns that accepting herself and caring for others are more powerful than fear."
  }
];


// Products for the Magic Shop (filtered by category and price)
const products = [
  { name: "Royal Tiara", category: "accessories", price: 25, text: "A sparkling crown for every little princess." },
  { name: "Magic Wand", category: "accessories", price: 12, text: "Wave it and make a wish come true." },
  { name: "Glass Slipper Charm", category: "accessories", price: 35, text: "A tiny shining slipper for your bracelet." },
  { name: "Fairytale Storybook", category: "books", price: 18, text: "Classic stories to read before bedtime." },
  { name: "Coloring Book", category: "books", price: 8, text: "Color castles, gowns, and enchanted forests." },
  { name: "Princess Songbook", category: "music", price: 22, text: "Sing along with your favorite melodies." },
  { name: "Golden Music Box", category: "music", price: 40, text: "A gentle tune from a magical little box." }
];

// News feed items for each category
const newsData = {
  movies: [
    "Snow White and the Seven Dwarfs (1937) was Disney's first full-length animated movie.",
    "Frozen became a worldwide hit and inspired fans of all ages.",
    "Moana takes us on an ocean adventure inspired by Pacific island cultures."
  ],
  music: [
    "Princess movies are famous for songs that people sing for many years.",
    "Beauty and the Beast has a beautiful ballroom waltz scene.",
    "Songs help princesses share their dreams, fears, and courage."
  ],
  tales: [
    "Rapunzel is a German fairy tale collected by the Brothers Grimm.",
    "The Little Mermaid was written by Hans Christian Andersen.",
    "Mulan comes from a Chinese poem called the Ballad of Mulan."
  ]
};

// Translations for the language selector (English, Russian, Kazakh)
const translations = {
  en: {
    nav_home: "Home", nav_princesses: "Princesses", nav_faq: "FAQ", nav_team: "Our Team", nav_contact: "Contact",
    day_btn: "\u2600 Day", night_btn: "\u263E Night",
    hero_small: "WELCOME TO A MAGICAL WORLD", hero_text: "Discover your favorite princesses and enter a world of magic.", hero_btn: "Explore Princesses",
    name_placeholder: "Enter your name", name_button: "Greet Me", dreamer: "dreamer",
    greet_morning: "Good morning, {name}! A new fairytale is waiting for you.",
    greet_afternoon: "Good afternoon, {name}! Time for a little magic.",
    greet_evening: "Good evening, {name}! The stars are shining for you.",
    princesses_title: "Our Princesses", princesses_text: "Find a princess and discover her story.", search_placeholder: "Search princess...",
    filter_all: "All princesses", filter_classic: "Classic", filter_brave: "Brave", filter_magical: "Magical", load_more: "Load More Princesses",
    gallery_title: "Magic Gallery", gallery_text: "Click a small picture to see it bigger.",
    shop_title: "Magic Shop", shop_text: "Filter royal treasures by category and price.",
    shop_cat_all: "All categories", shop_cat_acc: "Accessories", shop_cat_books: "Books", shop_cat_music: "Music",
    shop_price_all: "All prices", shop_price_low: "Under $15", shop_price_mid: "$15 - $30", shop_price_high: "Over $30",
    news_title: "Princess News Feed", news_movies: "Movies", news_music: "Music", news_tales: "Fairy Tales",
    feature_title: "A Little Magic for Your Day", feature_text: "Change the page color and make your own magical atmosphere.",
    bg_btn: "Change Background", datetime_label: "Current date and time:", time_btn: "Show Current Time",
    fact_title: "Princess Fact", fact_text: "Press the button to learn something new about fairytales.", fact_btn: "New Magic Fact",
    about_title: "About Princess Dreamland", about_text: "Princess Dreamland is a magical corner of the internet created by two students who love fairytales.",
    about_more: "We built this website to practice HTML, CSS, and JavaScript. Every page is designed to feel like a storybook, with ratings, sounds, animations, and surprises waiting for you.",
    readmore_more: "Read More", readmore_less: "Read Less",
    faq_title: "Frequently Asked Questions", faq_q1: "What is Princess Dreamland?", faq_q2: "How can I find a princess?", faq_q3: "How can I contact the team?",
    faq_a1: "Princess Dreamland is a fan-inspired website where you can explore fairytale characters.",
    faq_a2: "Use the search box or choose a category from the filter.", faq_a3: "Visit our Contact page and fill out the contact form.",
    newsletter_title: "Join Our Magical Newsletter", newsletter_text: "Subscribe to receive updates from Princess Dreamland.",
    signup_name: "Your name", signup_email: "Your email", subscribe_btn: "Subscribe",
    team_hero_title: "Meet Our Team", team_hero_text: "Two creative minds behind Princess Dreamland.", team_title: "Our Team Members",
    contact_hero_title: "Contact Us", contact_hero_text: "We would love to hear from you!", get_title: "Get in Touch",
    get_text: "Have a question or suggestion? Send us a message.", send_title: "Send a Message",
    label_name: "Full Name", label_email: "Email Address", label_subject: "Subject", label_message: "Message",
    back_btn: "Back", next_btn: "Next", send_btn: "Send Message", clear_btn: "Clear Form",
    step_label: "Step {n} of {total}", step_1: "Your details", step_2: "Your message"
  },
  ru: {
    nav_home: "Главная", nav_princesses: "Принцессы", nav_faq: "Вопросы", nav_team: "Наша команда", nav_contact: "Контакты",
    day_btn: "\u2600 День", night_btn: "\u263E Ночь",
    hero_small: "ДОБРО ПОЖАЛОВАТЬ В ВОЛШЕБНЫЙ МИР", hero_text: "Найдите любимых принцесс и войдите в мир магии.", hero_btn: "Смотреть принцесс",
    name_placeholder: "Введите ваше имя", name_button: "Поприветствуй меня", dreamer: "мечтатель",
    greet_morning: "Доброе утро, {name}! Новая сказка уже ждёт тебя.",
    greet_afternoon: "Добрый день, {name}! Самое время для немного магии.",
    greet_evening: "Добрый вечер, {name}! Звёзды сияют для тебя.",
    princesses_title: "Наши принцессы", princesses_text: "Найдите принцессу и узнайте её историю.", search_placeholder: "Поиск принцессы...",
    filter_all: "Все принцессы", filter_classic: "Классические", filter_brave: "Храбрые", filter_magical: "Волшебные", load_more: "Загрузить ещё принцесс",
    gallery_title: "Волшебная галерея", gallery_text: "Нажмите на маленькую картинку, чтобы увидеть её крупнее.",
    shop_title: "Волшебный магазин", shop_text: "Фильтруйте королевские сокровища по категории и цене.",
    shop_cat_all: "Все категории", shop_cat_acc: "Аксессуары", shop_cat_books: "Книги", shop_cat_music: "Музыка",
    shop_price_all: "Все цены", shop_price_low: "До $15", shop_price_mid: "$15 - $30", shop_price_high: "Дороже $30",
    news_title: "Лента новостей о принцессах", news_movies: "Фильмы", news_music: "Музыка", news_tales: "Сказки",
    feature_title: "Немного магии для вашего дня", feature_text: "Измените цвет страницы и создайте свою волшебную атмосферу.",
    bg_btn: "Сменить фон", datetime_label: "Текущая дата и время:", time_btn: "Показать текущее время",
    fact_title: "Факт о принцессах", fact_text: "Нажмите на кнопку, чтобы узнать что-то новое о сказках.", fact_btn: "Новый волшебный факт",
    about_title: "О Princess Dreamland", about_text: "Princess Dreamland — это волшебный уголок интернета, созданный двумя студентами, которые любят сказки.",
    about_more: "Мы создали этот сайт, чтобы практиковаться в HTML, CSS и JavaScript. Каждая страница похожа на сказочную книгу: здесь вас ждут оценки, звуки, анимации и сюрпризы.",
    readmore_more: "Читать далее", readmore_less: "Свернуть",
    faq_title: "Часто задаваемые вопросы", faq_q1: "Что такое Princess Dreamland?", faq_q2: "Как найти принцессу?", faq_q3: "Как связаться с командой?",
    faq_a1: "Princess Dreamland — это сайт для фанатов, где можно познакомиться со сказочными героинями.",
    faq_a2: "Используйте поле поиска или выберите категорию в фильтре.", faq_a3: "Перейдите на страницу «Контакты» и заполните форму.",
    newsletter_title: "Подпишитесь на волшебную рассылку", newsletter_text: "Подпишитесь, чтобы получать новости Princess Dreamland.",
    signup_name: "Ваше имя", signup_email: "Ваш email", subscribe_btn: "Подписаться",
    team_hero_title: "Знакомьтесь с нашей командой", team_hero_text: "Два творческих человека, стоящих за Princess Dreamland.", team_title: "Участники команды",
    contact_hero_title: "Свяжитесь с нами", contact_hero_text: "Мы будем рады услышать вас!", get_title: "Как с нами связаться",
    get_text: "Есть вопрос или предложение? Напишите нам.", send_title: "Отправить сообщение",
    label_name: "Полное имя", label_email: "Адрес электронной почты", label_subject: "Тема", label_message: "Сообщение",
    back_btn: "Назад", next_btn: "Далее", send_btn: "Отправить сообщение", clear_btn: "Очистить форму",
    step_label: "Шаг {n} из {total}", step_1: "Ваши данные", step_2: "Ваше сообщение"
  },
  kk: {
    nav_home: "Басты бет", nav_princesses: "Ханшайымдар", nav_faq: "Сұрақтар", nav_team: "Біздің команда", nav_contact: "Байланыс",
    day_btn: "\u2600 Күн", night_btn: "\u263E Түн",
    hero_small: "СИҚЫРЛЫ ӘЛЕМГЕ ҚОШ КЕЛДІҢІЗ", hero_text: "Сүйікті ханшайымдарыңызды тауып, сиқыр әлеміне енбіңіз.", hero_btn: "Ханшайымдарды көру",
    name_placeholder: "Атыңызды енгізіңіз", name_button: "Сәлемдес", dreamer: "арманшыл",
    greet_morning: "Қайырлы таң, {name}! Жаңа ертегі сені күтіп тұр.",
    greet_afternoon: "Қайырлы күн, {name}! Аздап сиқыр жасайтын уақыт.",
    greet_evening: "Қайырлы кеш, {name}! Жұлдыздар саған жарқырап тұр.",
    princesses_title: "Біздің ханшайымдар", princesses_text: "Ханшайымды тауып, оның тарихын біліңіз.", search_placeholder: "Ханшайымды іздеу...",
    filter_all: "Барлық ханшайымдар", filter_classic: "Классикалық", filter_brave: "Батыл", filter_magical: "Сиқырлы", load_more: "Тағы ханшайымдарды жүктеу",
    gallery_title: "Сиқырлы галерея", gallery_text: "Үлкенірек көру үшін кішкентай суретті басыңыз.",
    shop_title: "Сиқырлы дүкен", shop_text: "Патшалық қазыналарды санат пен баға бойынша сүзгілеңіз.",
    shop_cat_all: "Барлық санаттар", shop_cat_acc: "Аксессуарлар", shop_cat_books: "Кітаптар", shop_cat_music: "Музыка",
    shop_price_all: "Барлық бағалар", shop_price_low: "$15-ке дейін", shop_price_mid: "$15 - $30", shop_price_high: "$30-дан жоғары",
    news_title: "Ханшайымдар жаңалықтары", news_movies: "Фильмдер", news_music: "Музыка", news_tales: "Ертегілер",
    feature_title: "Күніңізге аздап сиқыр", feature_text: "Бет түсін өзгертіп, өзіңіздің сиқырлы атмосфераңызды жасаңыз.",
    bg_btn: "Фонды өзгерту", datetime_label: "Қазіргі күн мен уақыт:", time_btn: "Қазіргі уақытты көрсету",
    fact_title: "Ханшайымдар туралы дерек", fact_text: "Ертегілер туралы жаңа нәрсе білу үшін батырманы басыңыз.", fact_btn: "Жаңа сиқырлы дерек",
    about_title: "Princess Dreamland туралы", about_text: "Princess Dreamland — ертегіні жақсы көретін екі студент жасаған интернеттің сиқырлы бұрышы.",
    about_more: "Біз бұл сайтты HTML, CSS және JavaScript жаттығу үшін жасадық. Әр бет ертегі кітабы сияқты: бағалар, дыбыстар, анимациялар мен тосын сыйлар күтіп тұр.",
    readmore_more: "Толығырақ", readmore_less: "Жасыру",
    faq_title: "Жиі қойылатын сұрақтар", faq_q1: "Princess Dreamland деген не?", faq_q2: "Ханшайымды қалай табуға болады?", faq_q3: "Командамен қалай байланысуға болады?",
    faq_a1: "Princess Dreamland — ертегі кейіпкерлерімен танысуға болатын жанкүйерлер сайты.",
    faq_a2: "Іздеу жолағын қолданыңыз немесе сүзгіден санатты таңдаңыз.", faq_a3: "«Байланыс» бетіне өтіп, форманы толтырыңыз.",
    newsletter_title: "Сиқырлы жаңалықтарға жазылыңыз", newsletter_text: "Princess Dreamland жаңалықтарын алу үшін жазылыңыз.",
    signup_name: "Атыңыз", signup_email: "Электрондық поштаңыз", subscribe_btn: "Жазылу",
    team_hero_title: "Біздің команданы танысыңыз", team_hero_text: "Princess Dreamland артындағы екі шығармашыл адам.", team_title: "Команда мүшелері",
    contact_hero_title: "Бізбен байланысыңыз", contact_hero_text: "Сізден хабар алсақ қуанамыз!", get_title: "Байланыс",
    get_text: "Сұрағыңыз немесе ұсынысыңыз бар ма? Бізге жазыңыз.", send_title: "Хабарлама жіберу",
    label_name: "Толық аты-жөні", label_email: "Электрондық пошта", label_subject: "Тақырып", label_message: "Хабарлама",
    back_btn: "Артқа", next_btn: "Келесі", send_btn: "Хабарлама жіберу", clear_btn: "Форманы тазарту",
    step_label: "{total} қадамның {n}-і", step_1: "Сіздің деректеріңіз", step_2: "Сіздің хабарламаңыз"
  }
};

// Object with properties and methods: it stores the princesses and draws their cards.
const princessGallery = {
  list: document.getElementById("princessList"),
  items: [],

  // Check if a princess is already on the page
  has: function (key) {
    return this.items.some(function (princess) {
      return princess.key === key;
    });
  },

  // Find a princess by her key (used by the modal window)
  findByKey: function (key) {
    return this.items.find(function (princess) {
      return princess.key === key;
    });
  },

  // Build a card and add it to the page
  addPrincess: function (princess) {
    this.items.push(princess);

    const column = document.createElement("div");
    column.className = "col-md-4 princess-card card-enter";
    column.dataset.name = princess.name.toLowerCase();
    column.dataset.category = princess.category;

    // Build five stars with a loop
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      starsHTML += '<span class="star" data-value="' + i + '" role="button" tabindex="0" aria-label="Rate ' + i + ' out of 5">&#9733;</span>';
    }

    column.innerHTML =
      '<div class="card h-100">' +
        '<img src="' + princess.image + '" class="card-img-top" alt="' + princess.alt + '">' +
        '<div class="card-body">' +
          '<h3 class="card-title">' + princess.name + '</h3>' +
          '<p class="card-text">' + princess.text + '</p>' +
          '<div class="rating">' + starsHTML + '</div>' +
          '<p class="rating-text">Click a star to rate ' + princess.name + '.</p>' +
          '<button class="btn pink-btn details-btn" type="button" data-key="' + princess.key + '">Discover</button>' +
        '</div>' +
      '</div>';

    this.list.appendChild(column);
  }
};

/* =====================================================
   SOUND EFFECTS
   A short chime is created with the Web Audio API.
   Only one sound plays at a time, so sounds never overlap.
===================================================== */

const soundNotes = {
  click: 600,
  star: 440,
  load: 520,
  theme: 400,
  success: 784,
  error: 220
};

let audioContext = null;
let activeOscillator = null;

function playSound(frequency) {
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Stop the previous sound before starting a new one
    if (activeOscillator) {
      try {
        activeOscillator.stop();
      } catch (error) {
        // The previous sound had already finished
      }
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.35);

    activeOscillator = oscillator;
    oscillator.onended = function () {
      if (activeOscillator === oscillator) {
        activeOscillator = null;
      }
    };
  } catch (error) {
    // If sound is not supported, the website still works normally
  }
}

/* =====================================================
   ANIMATION HELPER
   Adds a CSS animation class and removes it when finished,
   so the animation can be triggered again.
===================================================== */

function playAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth; // restart the animation
  element.classList.add(className);
  element.addEventListener("animationend", function () {
    element.classList.remove(className);
  }, { once: true });
}

/* =====================================================
   MAIN CODE (runs after the page is loaded)
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------------------
     LANGUAGE SELECTOR (English / Russian / Kazakh)
  ----------------------------------------------------- */

  let currentLang = "en";
  let userName = "";
  const languageHooks = []; // functions that refresh texts made by JavaScript

  // switch statement: choose the dictionary for the selected language
  function getDictionary(lang) {
    switch (lang) {
      case "ru":
        return translations.ru;
      case "kk":
        return translations.kk;
      default:
        return translations.en;
    }
  }

  // Get one translated text
  function t(key) {
    return getDictionary(currentLang)[key] || translations.en[key];
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "kk" ? "kk" : lang;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    // Refresh the texts that JavaScript builds by itself
    languageHooks.forEach(function (hook) {
      hook();
    });
  }

  function getSavedLanguage() {
    try {
      return localStorage.getItem("princessLanguage") || "en";
    } catch (error) {
      return "en";
    }
  }

  // Task 1: Form validation for the subscription form
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const message = document.getElementById("signupMessage");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.length < 2) {
        message.textContent = "Please enter a name with at least 2 characters.";
        message.className = "mt-3 msg-error";
        playSound(soundNotes.error);
        return;
      }

      if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.className = "mt-3 msg-error";
        playSound(soundNotes.error);
        return;
      }

      message.textContent = "Thank you for subscribing, " + name + "!";
      message.className = "mt-3 msg-success";
      playSound(soundNotes.success);
      signupForm.reset();
    });
  }

  // Task 2: Bootstrap accordion FAQ is controlled by Bootstrap.
  // The FAQ opens and closes when the user clicks a question.

  // Task 3: Subscription form is displayed in the newsletter section.
  // The form is validated above when the user submits it.

  // Task 4: Change the background color (style.backgroundColor)
  const changeBgBtn = document.getElementById("changeBgBtn");

  if (changeBgBtn) {
    const backgrounds = [
      "#fffafd",
      "#fff0f6",
      "#f1eaff",
      "#f0f8ff",
      "#fff5e8"
    ];

    let colorIndex = 0;

    changeBgBtn.addEventListener("click", function () {
      document.body.style.backgroundColor = backgrounds[colorIndex];
      colorIndex++;

      if (colorIndex >= backgrounds.length) {
        colorIndex = 0;
      }
    });
  }

  // Task 5: Display the current date and time
  const dateTime = document.getElementById("dateTime");

  function updateDateTime() {
    if (dateTime) {
      const now = new Date();
      dateTime.textContent = now.toLocaleString();
    }
  }

  updateDateTime();

  if (dateTime) {
    setInterval(updateDateTime, 1000);
  }

  /* -----------------------------------------------------
     ASSIGNMENT 5 - PART 1: DOM MANIPULATION AND STYLING
  ----------------------------------------------------- */

  // Day / Night theme switch (classes + localStorage)
  const themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    const isNight = theme === "night";

    document.body.classList.toggle("night", isNight);
    document.body.style.backgroundColor = ""; // remove the color chosen with the background button

    if (themeToggle) {
      themeToggle.textContent = isNight ? t("day_btn") : t("night_btn");
    }

    if (changeBgBtn) {
      changeBgBtn.disabled = isNight;
    }
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem("princessTheme") || "day";
    } catch (error) {
      return "day";
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("princessTheme", theme);
    } catch (error) {
      // Saving is optional
    }
  }

  applyTheme(getSavedTheme());
  languageHooks.push(function () {
    applyTheme(document.body.classList.contains("night") ? "night" : "day");
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const newTheme = document.body.classList.contains("night") ? "day" : "night";
      applyTheme(newTheme);
      saveTheme(newTheme);
      playSound(soundNotes.theme);
      playAnimation(themeToggle, "spin");
    });
  }

  // Greeting that depends on the time of day (switch statement)
  function getTimeOfDay() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "morning";
    } else if (hour < 18) {
      return "afternoon";
    }
    return "evening";
  }

  function showGreeting() {
    const greeting = document.getElementById("greeting");

    if (!greeting) {
      return;
    }

    const name = userName || t("dreamer");
    let text;

    switch (getTimeOfDay()) {
      case "morning":
        text = t("greet_morning");
        break;
      case "afternoon":
        text = t("greet_afternoon");
        break;
      default:
        text = t("greet_evening");
    }

    greeting.textContent = text.replace("{name}", name);
  }

  showGreeting();
  languageHooks.push(showGreeting);

  // Name form: the greeting is updated with the name the user enters
  const nameForm = document.getElementById("nameForm");
  const nameInput = document.getElementById("nameInput");

  if (nameForm) {
    nameForm.addEventListener("submit", function (event) {
      event.preventDefault();
      userName = nameInput.value.trim();
      showGreeting();
      playSound(soundNotes.success);
      playAnimation(document.getElementById("greeting"), "pop-text");
    });
  }

  /* -----------------------------------------------------
     PRINCESS CARDS: create, rate, search, details
  ----------------------------------------------------- */

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const noResults = document.getElementById("noResults");
  const princessList = document.getElementById("princessList");

  // Create the first cards from the array (loop with forEach)
  if (princessList) {
    starterPrincesses.forEach(function (princess) {
      princessGallery.addPrincess(princess);
    });
  }

  // Task 6: Search princesses by name and category
  function filterPrincesses() {
    if (!searchInput || !categoryFilter) {
      return;
    }

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const princessCards = document.querySelectorAll(".princess-card");
    let visibleCount = 0;

    princessCards.forEach(function (card) {
      const name = card.dataset.name;
      const category = card.dataset.category;

      const matchesName = name.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      if (matchesName && matchesCategory) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterPrincesses);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterPrincesses);
  }

  // Star rating: select the stars of one card with querySelectorAll
  function setRating(card, value) {
    const stars = card.querySelectorAll(".star");
    const ratingText = card.querySelector(".rating-text");
    const princessName = card.querySelector(".card-title").textContent;

    stars.forEach(function (star) {
      const starValue = Number(star.dataset.value);
      star.classList.toggle("selected", starValue <= value);
    });

    ratingText.textContent = "You rated " + princessName + " " + value + " out of 5!";

    const clickedStar = stars[value - 1];
    playAnimation(clickedStar, "pop");
    playSound(soundNotes.star + value * 60);
  }

  // Task 7: Show princess details in a modal window
  const modalElement = document.getElementById("princessModal");
  let princessModal = null;

  if (modalElement && typeof bootstrap !== "undefined") {
    princessModal = new bootstrap.Modal(modalElement);
  }

  function showDetails(key) {
    const princess = princessGallery.findByKey(key);

    if (!princess || !princessModal) {
      return;
    }

    document.getElementById("modalTitle").textContent = princess.name;
    document.getElementById("modalStory").innerHTML =
      "<p>" + princess.story + "</p><p><strong>Category:</strong> " + princess.category + "</p>";

    princessModal.show();
  }

  // One listener for all cards (also works for cards loaded later)
  if (princessList) {
    princessList.addEventListener("click", function (event) {
      const star = event.target.closest(".star");
      const detailsButton = event.target.closest(".details-btn");

      if (star) {
        setRating(star.closest(".princess-card"), Number(star.dataset.value));
      } else if (detailsButton) {
        playSound(soundNotes.click);
        showDetails(detailsButton.dataset.key);
      }
    });

    // Keyboard support for stars: Enter or Space selects the star
    princessList.addEventListener("keydown", function (event) {
      const star = event.target.closest(".star");

      if (star && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        setRating(star.closest(".princess-card"), Number(star.dataset.value));
      }
    });
  }

  // If a picture cannot be loaded, show a pink picture instead
  const fallbackImage = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="400">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#f8e2ec"/><stop offset="1" stop-color="#e8e0f4"/>' +
    '</linearGradient></defs>' +
    '<rect width="700" height="400" fill="url(#g)"/>' +
    '<text x="350" y="240" font-size="130" text-anchor="middle" fill="#c6a56b">&#10023;</text></svg>'
  );

  document.addEventListener("error", function (event) {
    if (event.target.tagName === "IMG" && event.target.src !== fallbackImage) {
      event.target.src = fallbackImage;
    }
  }, true);

  /* -----------------------------------------------------
     ASSIGNMENT 5 - PART 2: EVENT HANDLING
  ----------------------------------------------------- */

  // Button that loads more content with fetch (no page reload)
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const loadMessage = document.getElementById("loadMessage");

  async function loadMorePrincesses() {
    loadMoreBtn.disabled = true;
    loadMessage.textContent = "Loading more magic...";

    try {
      const response = await fetch("princesses.json");

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const morePrincesses = await response.json();

      // Higher-order functions: filter() removes princesses that are already shown,
      // forEach() adds the new ones to the page
      const newPrincesses = morePrincesses.filter(function (princess) {
        return !princessGallery.has(princess.key);
      });

      newPrincesses.forEach(function (princess) {
        princessGallery.addPrincess(princess);
      });

      filterPrincesses();
      playSound(soundNotes.load);

      const names = newPrincesses.map(function (princess) {
        return princess.name;
      });

      loadMessage.textContent = "New princesses joined: " + names.join(", ") + "!";
      loadMoreBtn.hidden = true;
    } catch (error) {
      loadMessage.textContent = "Could not load more princesses. Please open the website through GitHub Pages or a local server.";
      loadMoreBtn.disabled = false;
      playSound(soundNotes.error);
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMorePrincesses);
  }

  // Keyboard navigation for the menu (switch statement with arrow keys)
  const navbar = document.querySelector(".princess-nav");
  const navItems = Array.from(document.querySelectorAll(".princess-nav .nav-link, .princess-nav .lang-select, .princess-nav .theme-btn"));

  if (navbar) {
    navbar.addEventListener("keydown", function (event) {
      const currentIndex = navItems.indexOf(document.activeElement);

      if (currentIndex === -1) {
        return;
      }

      let nextIndex;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          nextIndex = (currentIndex + 1) % navItems.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          nextIndex = (currentIndex - 1 + navItems.length) % navItems.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = navItems.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      navItems[nextIndex].focus();
    });
  }

  // Bounce animation for every pink button when it is clicked
  document.addEventListener("click", function (event) {
    const button = event.target.closest(".pink-btn");

    if (button) {
      playAnimation(button, "btn-bounce");
    }
  });

  /* -----------------------------------------------------
     MORE INTERACTIVE FEATURES
  ----------------------------------------------------- */

  // Button that shows the current time (toLocaleTimeString)
  const timeBtn = document.getElementById("timeBtn");
  const timeDisplay = document.querySelector("#timeDisplay");

  if (timeBtn && timeDisplay) {
    timeBtn.addEventListener("click", function () {
      timeDisplay.textContent = new Date().toLocaleTimeString();
      playSound(soundNotes.click);
    });
  }

  // "Read More" button: toggles the style.display property
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");

  if (readMoreBtn && moreText) {
    moreText.style.display = "none";

    function updateReadMoreText() {
      const isHidden = moreText.style.display === "none";
      readMoreBtn.textContent = isHidden ? t("readmore_more") : t("readmore_less");
    }

    readMoreBtn.addEventListener("click", function () {
      const isHidden = moreText.style.display === "none";
      moreText.style.display = isHidden ? "block" : "none";
      updateReadMoreText();
      playSound(soundNotes.click);

      if (isHidden) {
        playAnimation(moreText, "card-enter");
      }
    });

    languageHooks.push(updateReadMoreText);
  }

  // Image gallery with thumbnails: changes the src of the big image
  const mainImage = document.getElementById("mainImage");
  const mainCaption = document.getElementById("mainCaption");
  const thumbButtons = document.querySelectorAll(".thumb-btn");

  thumbButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Small zoom-out effect with style.transform, then the new picture appears
      mainImage.style.opacity = "0";
      mainImage.style.transform = "scale(0.95)";

      setTimeout(function () {
        mainImage.src = button.dataset.full;
        mainImage.alt = button.dataset.caption;
        mainCaption.textContent = button.dataset.caption;
        mainImage.style.opacity = "1";
        mainImage.style.transform = "scale(1)";
      }, 250);

      thumbButtons.forEach(function (thumb) {
        thumb.classList.toggle("active", thumb === button);
      });

      playSound(soundNotes.click);
    });
  });

  // Random fact: fetch new content and show it in a content area
  const factBtn = document.getElementById("factBtn");
  const factArea = document.querySelector("#factArea");
  let lastFactIndex = -1;

  if (factBtn && factArea) {
    factBtn.addEventListener("click", function () {
      fetch("facts.json")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then(function (facts) {
          let index;

          do {
            index = Math.floor(Math.random() * facts.length);
          } while (index === lastFactIndex && facts.length > 1);

          lastFactIndex = index;
          factArea.innerText = facts[index];
          playAnimation(factArea, "card-enter");
          playSound(soundNotes.load);
        })
        .catch(function () {
          factArea.innerText = "Could not load a fact. Please open the website through GitHub Pages or a local server.";
          playSound(soundNotes.error);
        });
    });
  }

  // Magic Shop: filter products by category and price (switch statement)
  const productList = document.getElementById("productList");
  const productCategory = document.getElementById("productCategory");
  const productPrice = document.getElementById("productPrice");
  const noProducts = document.getElementById("noProducts");

  function matchesPrice(price, range) {
    switch (range) {
      case "low":
        return price < 15;
      case "mid":
        return price >= 15 && price <= 30;
      case "high":
        return price > 30;
      default:
        return true;
    }
  }

  function showProducts() {
    const category = productCategory.value;
    const range = productPrice.value;

    // Higher-order function: filter() keeps only the matching products
    const visibleProducts = products.filter(function (product) {
      const categoryMatches = category === "all" || product.category === category;
      return categoryMatches && matchesPrice(product.price, range);
    });

    productList.innerHTML = "";

    visibleProducts.forEach(function (product) {
      const column = document.createElement("div");
      column.className = "col-md-4 card-enter";
      column.innerHTML =
        '<div class="card product-card h-100">' +
          '<div class="card-body">' +
            '<p class="product-category">' + product.category + '</p>' +
            '<h3 class="card-title">' + product.name + '</h3>' +
            '<p class="card-text">' + product.text + '</p>' +
            '<p class="product-price">$' + product.price + '</p>' +
          '</div>' +
        '</div>';
      productList.appendChild(column);
    });

    noProducts.hidden = visibleProducts.length !== 0;
  }

  if (productList && productCategory && productPrice) {
    showProducts();

    productCategory.addEventListener("change", function () {
      showProducts();
      playSound(soundNotes.click);
    });

    productPrice.addEventListener("change", function () {
      showProducts();
      playSound(soundNotes.click);
    });
  }

  // News feed: buttons switch between categories (switch statement)
  const newsButtons = document.querySelectorAll(".news-btn");
  const newsHeading = document.getElementById("newsHeading");
  const newsList = document.getElementById("newsList");
  let currentNews = "movies";

  function showNews(category) {
    let items;
    let headingKey;

    switch (category) {
      case "music":
        items = newsData.music;
        headingKey = "news_music";
        break;
      case "tales":
        items = newsData.tales;
        headingKey = "news_tales";
        break;
      default:
        items = newsData.movies;
        headingKey = "news_movies";
    }

    currentNews = category;
    newsHeading.textContent = t(headingKey);
    newsList.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = items[i];
      newsList.appendChild(listItem);
    }

    playAnimation(newsList, "card-enter");
    newsButtons.forEach(function (button) {
      button.classList.toggle("news-active", button.dataset.category === category);
    });
  }

  if (newsList && newsHeading) {
    showNews(currentNews);

    newsButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        showNews(button.dataset.category);
        playSound(soundNotes.click);
      });
    });

    languageHooks.push(function () {
      newsHeading.textContent = t("news_" + currentNews);
    });
  }

  /* -----------------------------------------------------
     MULTI-STEP CONTACT FORM (callback function)
  ----------------------------------------------------- */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    const steps = contactForm.querySelectorAll(".form-step");
    const stepIndicator = document.getElementById("stepIndicator");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");
    const sendBtn = document.getElementById("sendBtn");
    const resetBtn = document.getElementById("resetBtn");
    const feedback = document.getElementById("contactFeedback");

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const subject = document.getElementById("contactSubject");
    const message = document.getElementById("contactMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let currentStep = 1;

    // Callback: shows the correct step and updates the buttons.
    // The input values stay in the form, so nothing is lost.
    function showStep(stepNumber) {
      steps.forEach(function (step) {
        step.hidden = Number(step.dataset.step) !== stepNumber;
      });

      stepIndicator.textContent = t("step_label").replace("{n}", stepNumber).replace("{total}", steps.length) + ": " + t("step_" + stepNumber);
      backBtn.hidden = stepNumber === 1;
      nextBtn.hidden = stepNumber === steps.length;
      sendBtn.hidden = stepNumber !== steps.length;
    }

    // Check the fields of one step (switch statement)
    function validateStep(stepNumber) {
      switch (stepNumber) {
        case 1: {
          const nameIsValid = name.value.trim().length >= 2;
          const emailIsValid = emailPattern.test(email.value.trim());
          name.classList.toggle("is-invalid", !nameIsValid);
          email.classList.toggle("is-invalid", !emailIsValid);
          return nameIsValid && emailIsValid;
        }
        case 2: {
          const subjectIsValid = subject.value.trim() !== "";
          const messageIsValid = message.value.trim().length >= 10;
          subject.classList.toggle("is-invalid", !subjectIsValid);
          message.classList.toggle("is-invalid", !messageIsValid);
          return subjectIsValid && messageIsValid;
        }
        default:
          return true;
      }
    }

    // Moves forward or back and calls the callback function
    function changeStep(direction, callback) {
      if (direction > 0 && !validateStep(currentStep)) {
        feedback.textContent = "Please correct the fields marked in red.";
        feedback.className = "mt-3 msg-error";
        playSound(soundNotes.error);
        return;
      }

      feedback.textContent = "";
      currentStep += direction;
      callback(currentStep);
      playSound(soundNotes.click);
    }

    nextBtn.addEventListener("click", function () {
      changeStep(1, showStep);
    });

    backBtn.addEventListener("click", function () {
      changeStep(-1, showStep);
    });

    // Reset button: clears all inputs
    resetBtn.addEventListener("click", function () {
      contactForm.querySelectorAll("input, textarea").forEach(function (field) {
        field.value = "";
        field.classList.remove("is-invalid");
      });

      feedback.textContent = "";
      currentStep = 1;
      showStep(currentStep);
      playSound(soundNotes.click);
    });

    // Sends the form data to a server with fetch (POST).
    // The callback function shows the result without reloading the page.
    function sendFormData(data, callback) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data)
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then(function () {
          callback(true);
        })
        .catch(function () {
          callback(false);
        });
    }

    // Task 8: Contact form validation and success message
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!validateStep(2)) {
        feedback.textContent = "Please correct the fields marked in red.";
        feedback.className = "mt-3 msg-error";
        playSound(soundNotes.error);
        return;
      }

      const formData = {
        name: name.value.trim(),
        email: email.value.trim(),
        subject: subject.value.trim(),
        message: message.value.trim()
      };

      sendBtn.disabled = true;
      feedback.textContent = "Sending your message...";
      feedback.className = "mt-3";

      sendFormData(formData, function (success) {
        sendBtn.disabled = false;

        if (success) {
          feedback.textContent = "Thank you, " + formData.name + "! Your message has been sent.";
          feedback.className = "mt-3 msg-success";
          playSound(soundNotes.success);
          contactForm.reset();
          currentStep = 1;
          showStep(currentStep);
        } else {
          feedback.textContent = "Sorry, the message could not be sent. Please check your internet connection and try again.";
          feedback.className = "mt-3 msg-error";
          playSound(soundNotes.error);
        }
      });
    });

    showStep(currentStep);
    languageHooks.push(function () {
      showStep(currentStep);
    });
  }


  // Language selector: start with the saved language and react to changes
  const languageSelect = document.getElementById("languageSelect");
  const savedLanguage = getSavedLanguage();

  if (languageSelect) {
    languageSelect.value = savedLanguage;

    languageSelect.addEventListener("change", function () {
      applyLanguage(languageSelect.value);

      try {
        localStorage.setItem("princessLanguage", languageSelect.value);
      } catch (error) {
        // Saving is optional
      }

      playSound(soundNotes.load);
    });
  }

  applyLanguage(savedLanguage);

});
