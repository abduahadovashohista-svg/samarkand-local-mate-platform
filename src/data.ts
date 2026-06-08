import { Mate, Review } from "./types";

// High quality photo assets for static mates
export const MATES_DATA: Mate[] = [
  {
    id: "azizbek",
    name: "Azizbek",
    age: 28,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    ratingCount: 38,
    pricePerHour: 15,
    specialtyKey: "tarix_taomlar",
    languages: ["O'zbek", "Русский", "English"],
    subtitle: {
      uz: "Eski shahar bo'yicha tarixchi & Gurman",
      en: "Old City Historian & Gastronomist",
      ru: "Историк Старого города и гурман"
    },
    bio: {
      uz: "Eski shahar bozorlaridagi eng yaxshi somsa qayerda ekanligini va qadimiy madrasalarning yashirin sirlarini bilaman. Sizni tarixga va mazali taomlar olamiga yetaklayman.",
      en: "I know exactly where to find the absolute best somsa in the bazaar and the overlooked histories of the ancient madrasahs. Let me lead you through history and taste.",
      ru: "Я точно знаю, где на базаре самая лучшая самса, и подскажу скрытые легенды древних медресе. Проведу вас по тропам истории и вкуса."
    },
    details: {
      experience: {
        uz: "5 yildan oshiq vaqt davomida Samarqandning qadimiy me'morchiligi va an'anaviy pishiriqlari bo'yicha mustaqil tadqiqotlar qilaman.",
        en: "Over 5 years of independent historical research on Samarkand's architecture and local gastronomic heritage.",
        ru: "Более 5 лет независимых исследований архитектуры Самарканда и его уникальных гастрономических традиций."
      },
      transport: {
        uz: "Jamoat transporti va piyoda sayohatlar ustasi (Yengil avtomobil so'rovga ko'ra)",
        en: "Public transit master or walking expedition (Private car available on direct request)",
        ru: "Мастер пеших прогулок и общественного транспорта (Автомобиль по договоренности)"
      },
      itinerary: {
        uz: [
          "Registon maydonining maxfiy burchaklaridan fotosuratlar",
          "Siyob bozorida ziravorlar va qadimiy novvoyxonalar degustatsiyasi",
          "Bibixonim jome masjidi va uning unutilgan afsonalari",
          "Haqiqiy o'tin pechida tayyorlanadigan milliy Samarqand oshi"
        ],
        en: [
          "Capturing secret perspective shots at Registan Square",
          "Siyob Bazaar spices and traditional round-bread bakery tasting",
          "Bibi-Khanym Mosque and its long-lost myths",
          "Tasting authentic Samarkand plov cooked over open fire wood stove"
        ],
        ru: [
          "Фотосъемка скрытых ракурсов на площади Регистан",
          "Дегустация самаркандских лепешек и специй на Сиабском базаре",
          "Мечеть Биби-Ханум и её забытые легенды",
          "Традиционный Самаркандский плов на открытых дровах"
        ]
      },
      achievements: [
        "Gold Guide Certificate (2024)",
        "Bazaar Culinary Expert Badge"
      ]
    }
  },
  {
    id: "malika",
    name: "Malika",
    age: 25,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    rating: 5.0,
    ratingCount: 42,
    pricePerHour: 18,
    specialtyKey: "foto",
    languages: ["O'zbek", "English", "Deutsch"],
    subtitle: {
      uz: "Professional fotograf & blogger",
      en: "Professional Photographer & Trend Setter",
      ru: "Профессиональный фотограф и блогер"
    },
    bio: {
      uz: "Instagram uchun ajoyib kadrlar va eng chiroyli yorug'lik tushadigan burchaklarni izlayapsizmi? Men sizga shaharning eng betakror, unutilgan me'moriy joylarini va ko'k koshinlarini ko'rsataman.",
      en: "Searching for the perfect golden hour lighting or unforgettable aesthetic compositions? I'll guide you to hidden blue-tile alleys and courtyard framing secrets.",
      ru: "Ищете идеальные ракурсы для кадров или незабываемые эстетичные виды? Я покажу вам скрытые дворики, аутентичные синие мозаики и лучшие точки съемки."
    },
    details: {
      experience: {
        uz: "Samarqand foto-turizmi bo'yicha 3 yillik blogerlik tajribasi va maxsus fotoko'rgazmalar tashkilotchisi.",
        en: "3 years capturing the visual soul of Samarkand, visual content creator and photo exhibition curator.",
        ru: "3 года ведения блогов о фототуризме в Самарканде, профессиональные навыки съемки и построения кадра."
      },
      transport: {
        uz: "Piyoda sayohatlar va shinam velosipedlar",
        en: "Scenic walking tours or elegant urban bicycles",
        ru: "Приятные пешие маршруты или городские велосипеды"
      },
      itinerary: {
        uz: [
          "Shohi Zinda majmuasida quyosh botishi ssenariysi",
          "Eski mahallalarning betakror eshiklari va hovlilari galereyasi",
          "Samarqand ipak qog'ozi hunarmandchilik bog'idagi estetika",
          "Ko'k koshinlar fonida professional shaxsiy fotosessiya"
        ],
        en: [
          "Golden sunset session at Shah-i-Zinda necropolis",
          "Exploring atmospheric historic alley doors and traditional brick-arch courtyards",
          "Artistic photoshoots at the Konigil Mulberry Paper Mill",
          "Personal professional camera capture in front of cobalt-and-gold mosaics"
        ],
        ru: [
          "Золотой закат на древнейшем некрополе Шахи-Зинда",
          "Поиск живописных аутентичных ворот в исторических жилых кварталах",
          "Эстетическое вдохновение на фабрике шелковой бумаги Конигил",
          "Профессиональная фотосессия на фоне кобальтовых мозаик Самарканда"
        ]
      },
      achievements: [
        "Exclusive Visual Explorer Winner (2025)",
        "Top-Rated Photo Mate Certification"
      ]
    }
  },
  {
    id: "rustam",
    name: "Rustam",
    age: 35,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    ratingCount: 29,
    pricePerHour: 20,
    specialtyKey: "hunarmandchilik",
    languages: ["O'zbek", "Русский", "Français"],
    subtitle: {
      uz: "Kulolchi & Qadimiy hunar ustasi",
      en: "Master Potter & Crafts Guardian",
      ru: "Мастер-гончар и хранитель традиций"
    },
    bio: {
      uz: "Haqiqiy hunarmandlar ustaxonalariga bevosita tashrif buyurib, o'z qo'lingiz bilan loydan mo'jiza yaratishni xohlaysizmi? Milliy kulolchilik va Samarqand gilam to'qish san'ati olamiga safar qilamiz.",
      en: "Want to step directly inside genuine multi-generational artisan studios and feel clay on your own hands? Let's experience old pottery techniques and classic carpet weaving.",
      ru: "Хотите прикоснуться к глине на настоящем гончарном круге в семейной мастерской? Раскроем секреты ковроткачества и шелкового искусства."
    },
    details: {
      experience: {
        uz: "Avloddan-avlodga o'tib kelayotgan usta kulol, Samarqand Hunarmandlar Assotsiatsiyasi a'zosi.",
        en: "7th-generation ceramic master artisan, registered member of the Samarkand Guild of Craftsmen.",
        ru: "Гончар в 7-м поколении, действующий член Союза Ремесленников Самарканда."
      },
      transport: {
        uz: "Shaxsiy shinam mikroavtobus xizmati (barcha turlar uchun bepul)",
        en: "Private air-conditioned minibus (provided complimentary for all itinerary stops)",
        ru: "Комфортабельный минивэн с кондиционером (бесплатно на протяжении всего маршрута)"
      },
      itinerary: {
        uz: [
          "Konigil hunarmandchilik qishlog'ida suv tegirmonlari va qog'oz tayyorlash",
          "Oilaviy kulolchilik ustaxonasida loydan narsalar yasash amaliyoti",
          "Qadimiy uslubda bo'yaladigan ipak gilamlari fabrikasiga tashrif",
          "Samarqand milliy choyxo'rlik marosimi va shirinliklar degustatsiyasi"
        ],
        en: [
          "Konigil craft village - authentic ancient watermill and paper masterclass",
          "Hands-on pottery throwing session at a family studio block",
          "Tour of natural vegetable-dye silk carpet weaving workshop",
          "Traditional Samarkand tea ceremony with local sweets, dried fruits, and stories"
        ],
        ru: [
          "Ремесленная деревня Конигил - водяные мельницы и создание шелковой бумаги",
          "Практический мастер-класс на гончарном круге в семейной студии",
          "Фабрика изысканных шелковых ковров на натуральных красителях",
          "Традиционная чайная церемония с самаркандскими сладостями и сухофруктами"
        ]
      },
      achievements: [
        "National Master of Heritage Award",
        "UNESCO Crafts Certificate Affiliate"
      ]
    }
  }
];

export const TESTIMONIALS_DATA: Review[] = [
  {
    id: "rev1",
    userInitials: "S",
    userName: "Sarah J.",
    country: {
      uz: "Buyuk Britaniya",
      en: "United Kingdom",
      ru: "Великобритания"
    },
    mateName: "Azizbek",
    rating: 5,
    comment: {
      uz: "Azizbek bilan sayohat qilish xuddi uzoq yillik do'stim bilan shaharni aylangandek bo'ldi. U bizni turistlar bormaydigan choyxonaga olib bordi va bu safarimizning eng unutilmas qismi bo'ldi.",
      en: "Exploring with Azizbek felt like discovering the city with a lifelong friend. He brought us to a back-alley teahouse tourists never find, which became the highlight of our entire trip.",
      ru: "Прогулка с Азизбеком была похожа на встречу со старым другом. Он привел нас в скрытую чайхану, куда туристы никогда не заходят. Это было лучшее впечатление поездки!"
    }
  },
  {
    id: "rev2",
    userInitials: "M",
    userName: "Maria L.",
    country: {
      uz: "Ispaniya",
      en: "Spain",
      ru: "Испания"
    },
    mateName: "Malika",
    rating: 5,
    comment: {
      uz: "Yolg'iz sayohatchi ayol sifatida biroz xavotirda edim, ammo Malika shunchalik professional va do'stona bo'ldiki, o'zimni butunlay xavfsiz va qulay his qildim. Suratlar esa shunchaki ajoyib asarlar!",
      en: "As a solo female traveler, I had some reservations, but Malika was incredibly professional and warm. I felt completely safe and at ease. Plus, the photos she took are absolute masterpieces!",
      ru: "Я немного волновалась, путешествуя в одиночку. Но Малика оказалась настолько чуткой и профессиональной, что я была в полной безопасности. А её фотографии — истинные шедевры!"
    }
  },
  {
    id: "rev3",
    userInitials: "T",
    userName: "Thomas K.",
    country: {
      uz: "Germaniya",
      en: "Germany",
      ru: "Германия"
    },
    mateName: "Rustam",
    rating: 5,
    comment: {
      uz: "Hunarmandchilik turlari menga juda yoqdi. Rustam o'z ishining chinakam ustasi ekan, oilasi bilan loydan idish yasash ajoyib taassurot bo'ldi. Sanoat turlaridan ancha oldinda turadi.",
      en: "The workshop experience was spectacular. Rustam is a true craft maestro, and sculpting clay with his family was an unforgettable highlight. Far superior to any generic commercial tour.",
      ru: "Это было невероятно. Рустам — настоящий мастер своего дела, а лепка на гончарном круге вместе с его семьей оставила незабываемые воспоминания. Намного глубже банальных экскурсий."
    }
  }
];

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  uz: {
    title: "Samarkand Local Mate — Mahalliy Gidlar Platformasi",
    brand_sub: "Local Mate",
    nav_how: "Qanday ishlaydi",
    nav_mates: "Gidlarimiz",
    nav_reviews: "Fikrlar",
    nav_cta: "Mate Topish",
    hero_tag: "Sayohatni qayta kashf eting",
    hero_title_1: "Sizning ",
    hero_title_2: "Samarqandingizni",
    hero_title_3: " ko'rsatadigan mahalliy Gid bilan tanishing.",
    hero_desc: "Standart, quruq ekskursiyalardan charchadingizmi? O'z qiziqishlaringizga mos keladigan, shaharning sirli go'zalliklarini biladigan haqiqiy mahalliy do'st (Mate) toping.",
    hero_btn_primary: "Gidni tanlash",
    hero_btn_secondary: "Kategoriya bo'yicha",
    stats_mates: "Sinalgan Gidlar",
    stats_rating: "O'rtacha baho",
    stats_trips: "Baxtli sayohatchilar",
    how_title: "Qanday ishlaydi?",
    how_subtitle: "Sizning mukammal sayohatingiz faqatgina 3 ta oson qadamda.",
    step1_title: "Qiziqishlarni belgilang",
    step1_desc: "Tarix, milliy oshxona, hunarmandchilik yoki fotografiya? Nimalar sizga qiziq ekanligini belgilang.",
    step2_title: "Hamroh bilan tanishing",
    step2_desc: "Biz taklif qilgan professional samarqandlik do'stlar profillarini ko'ring va o'zingizga ma'qulini tanlang.",
    step3_title: "Kashfiyotni boshlang",
    step3_desc: "Faqat mahalliy aholi biladigan sirli bekatlarni ko'ring, unutilmas suhbat va sarguzashtdan zavqlaning.",
    mates_title: "Mahalliy gid do'stlarimiz listi",
    mates_subtitle: "Sizga Samarqandni chin dildan sevdiradigan, o'z ishi bo'yicha chuqur bilimga ega mahalliy ahollar.",
    mates_all_link: "Barcha gidlarimiz",
    filter_all: "Hamma gidlar",
    filter_tarix: "Tarix & Me'morchilik",
    filter_taomlar: "Milliy Taomlar (Food)",
    filter_foto: "Yashirin Foto Maskanlar",
    filter_hunar: "Hunarmandchilik",
    card_hour: "soat",
    card_status_active: "Faol / Qabul qilishga tayyor",
    card_status_busy: "Peshindan keyin bo'sh",
    card_btn: "Batafsil / Band qilish",
    ai_banner_tag: "Sun'iy Intellekt Konsept Layout",
    ai_desc_title: "Kimni qidirayotganingizga ikkilanyapsizmi?",
    ai_desc_text: "Quyidagi interaktiv filtr maydonidan o'zingiz yoqtirgan mavzularni (Pill) tanlang va vizual mos keladigan gidni tizim qanday ko'rsatishini ko'ring. Hech qanday soxta API yuklamalarisiz — tez va aniq statik moslashtiruv.",
    ai_heading: "O'zingizga mos giddan namunalar oling:",
    ai_item_art: "San'at & Foto",
    ai_item_food: "Oshpazlik & Taomlar",
    ai_item_history: "Klassik Tarix",
    ai_item_life: "Mahalla Hayoti",
    ai_btn: "Mos keladigan Gidni ajratish",
    testimonials_title: "Sayohatchilarimiz qalbidan fikrlar",
    testimonials_subtitle: "Haqiqiy insonlar, madaniy uchrashuvlar va samimiy taassurotlar.",
    reviews_add_btn: "Standart ma'lumotlar",
    footer_copy: "© 2024 - 2026 Samarkand Local Mate. Samarqand sayohatlari va madaniyati uyushmasi. Barcha huquqlar himoyalangan.",
    foot_priv: "Maxfiylik siyosati",
    foot_terms: "Foydalanish shartlari",
    foot_contact: "Aloqa",
    foot_safety: "Xavfsizlik yo'riqnomasi",
    // Modal specific
    modal_title: "Gid haqida ma'lumot",
    modal_languages: "Muloqot tillari:",
    modal_price: "Xizmat haqi:",
    modal_experience: "Ish tajribasi & Faoliyati:",
    modal_transport: "Sayohat davomidagi transport:",
    modal_itinerary: "Namunaviy Shaxsiy Marshrut:",
    modal_close: "Yopish",
    modal_book_now: "Marshrutni band qilish",
    modal_book_desc: "Eslatma: Ushbu platforma UI/UX loyihadir, ma'lumotlarni saqlash yoki soxta server taqlidi yo'q.",
    ticket_created: "Kuzatuv chiptasi muvaffaqiyatli shakllandi!",
    ticket_desc: "Gid bilan bog'lanish va marshrutni tasdiqlash uchun chipta ma'lumotlaridan foydalashingiz mumkin.",
    ticket_code: "Chipta Kodi",
    ticket_mate: "Gid do'stingiz",
    ticket_price: "Narxi",
    ticket_time: "Vaqt",
    ticket_date: "Sana",
    ticket_close: "Tushunarli",
    booking_success_bubble: "Chipta statik ko'rinishda saqlandi!"
  },
  en: {
    title: "Samarkand Local Mate — Local Guides Platform",
    brand_sub: "Local Mate",
    nav_how: "How it works",
    nav_mates: "Our Guides",
    nav_reviews: "Reviews",
    nav_cta: "Find a Mate",
    hero_tag: "Rediscover Travel Intimately",
    hero_title_1: "Meet a ",
    hero_title_2: "Samarkand",
    hero_title_3: " local guide who reveals the hidden side of the city.",
    hero_desc: "Tired of generic, robotic, pre-packaged tours? Match with a friendly local (Mate) who shares your exact hobbies, showing you deep history and absolute local gems.",
    hero_btn_primary: "Choose a Guide",
    hero_btn_secondary: "By Category",
    stats_mates: "Verified Mates",
    stats_rating: "Average Rating",
    stats_trips: "Happy Wanderers",
    how_title: "How It Works",
    how_subtitle: "Your exceptional bespoke journey is only 3 straightforward steps away.",
    step1_title: "Select Your Passions",
    step1_desc: "History, culinary adventures, photography, or traditional workshops? Highlight what triggers your curiosity.",
    step2_title: "Meet Your Local Mate",
    step2_desc: "Skim through profiles of skilled Samarkand residents and pick the guide who perfectly matches your frequency.",
    step3_title: "Explore Authentically",
    step3_desc: "Walk past the tourist traps into lively residential blocks, majestic shrines, and sharing rich conversations.",
    mates_title: "Meet Your Local Companions",
    mates_subtitle: "Authentic sons and daughters of Samarkand eager to make you fall in love with their heritage.",
    mates_all_link: "See All Guides",
    filter_all: "All Mates",
    filter_tarix: "History & Architecture",
    filter_taomlar: "Traditional Food",
    filter_foto: "Aesthetic Photo Spots",
    filter_hunar: "Local Crafts",
    card_hour: "hour",
    card_status_active: "Active / Ready to Guide",
    card_status_busy: "Free in the afternoon",
    card_btn: "Details & Book",
    ai_banner_tag: "AI Conceptual UI Layout",
    ai_desc_title: "Unsure which style suits you?",
    ai_desc_text: "Toggle different interests in our interactive selector below and watch matching guides dynamically filter on the page. Completely static layout with pristine responsive styling, no simulated network lag.",
    ai_heading: "Highlight your perfect guide archetype:",
    ai_item_art: "Art & Snaps",
    ai_item_food: "Cookery & Taste",
    ai_item_history: "Classic Lore",
    ai_item_life: "District Life",
    ai_btn: "Filter Matching Partners",
    testimonials_title: "Voiced of Genuine Travelers",
    testimonials_subtitle: "Real people sharing profound cultural connections and warm memories.",
    reviews_add_btn: "Information Specs",
    footer_copy: "© 2024 - 2026 Samarkand Local Mate. Samarkand Tourism & Cultural Guild. All rights reserved.",
    foot_priv: "Privacy Policy",
    foot_terms: "Terms of Use",
    foot_contact: "Contact Us",
    foot_safety: "Safety Policy",
    // Modal specific
    modal_title: "Mate Profile Outlook",
    modal_languages: "Languages spoken:",
    modal_price: "Hourly Rate:",
    modal_experience: "Background & Passion:",
    modal_transport: "Transit arrangement:",
    modal_itinerary: "Inspirational Sample Schedule:",
    modal_close: "Close Window",
    modal_book_now: "Acquire This Itinerary",
    modal_book_desc: "Note: This platform is a static UI/UX prototype. No local database storage or backend server endpoints are activated.",
    ticket_created: "Excursion Ticket Pre-Assembled!",
    ticket_desc: "Use this static ticket model to verify your customized itinerary and rate with the local guide.",
    ticket_code: "Ticket Code",
    ticket_mate: "Selected Companion",
    ticket_price: "Est. Total",
    ticket_time: "Time Block",
    ticket_date: "Date",
    ticket_close: "Understood",
    booking_success_bubble: "Ticket rendered statically!"
  },
  ru: {
    title: "Samarkand Local Mate — Платформа Местных Гидов",
    brand_sub: "Local Mate",
    nav_how: "Как это устроено",
    nav_mates: "Наши Гиды",
    nav_reviews: "Отзывы",
    nav_cta: "Найти Гида",
    hero_tag: "Откройте для себя Самарканд заново",
    hero_title_1: "Познакомьтесь с местным ",
    hero_title_2: "Самаркандским",
    hero_title_3: " другом-гидом, который покажет душу города.",
    hero_desc: "Устали от шаблонных, скучных групповых туров? Найдите своего человека (Mate), который разделяет ваши интересы и проведёт вас в глубины истории.",
    hero_btn_primary: "Выбрать Гида",
    hero_btn_secondary: "По категориям",
    stats_mates: "Надежных Гидов",
    stats_rating: "Средняя оценка",
    stats_trips: "Счастливых туристов",
    how_title: "Как это работает?",
    how_subtitle: "Ваше идеальное уникальное путешествие всего в 3 простых шага.",
    step1_title: "Укажите интересы",
    step1_desc: "История, национальная кухня, народное ремесло или атмосферные ракурсы для фото? Отметьте ваши предпочтения.",
    step2_title: "Выберите напарника",
    step2_desc: "Изучите профили реальных самаркандцев и закажите подробный обзор у того, кто вам по душе.",
    step3_title: "Начните приключение",
    step3_desc: "Пройдите вглубь жилых махаллей, исследуйте лавки мастеров и наслаждайтесь искренним диалогом.",
    mates_title: "Наши Местные Жители (Mates)",
    mates_subtitle: "Коренные самаркандцы, готовые влюбить вас в историческое наследие, гастрономию и традиции.",
    mates_all_link: "Все проводники",
    filter_all: "Все гиды",
    filter_tarix: "История и Архитектура",
    filter_taomlar: "Национальная еда",
    filter_foto: "Фото-Локации",
    filter_hunar: "Ремесла",
    card_hour: "час",
    card_status_active: "Активен / Готов к турам",
    card_status_busy: "Свободен во второй половине дня",
    card_btn: "Подробнее",
    ai_banner_tag: "Интерактивный концепт UI на ИИ",
    ai_desc_title: "Не знаете, кого выбрать?",
    ai_desc_text: "Выберите привлекательные темы на панели интересов ниже и посмотрите, как это мгновенно фильтрует список проверенных гидов. Абсолютно чистый адаптивный интерфейс без лишних имитаций.",
    ai_heading: "Выберите идеальный архетип проводника:",
    ai_item_art: "Искусство и Фото",
    ai_item_food: "Кулинария и Вкус",
    ai_item_history: "Истинная История",
    ai_item_life: "Жизнь Махалли",
    ai_btn: "Отрегулировать список",
    testimonials_title: "Отзывы наших путешественников",
    testimonials_subtitle: "Настоящие эмоции, искренний межкультурный контакт и добрые воспоминания.",
    reviews_add_btn: "Техническое описание",
    footer_copy: "© 2024 - 2026 Samarkand Local Mate. Ассоциация культуры и туризма Самарканда. Все права защищены.",
    foot_priv: "Политика конфиденциальности",
    foot_terms: "Условия использования",
    foot_contact: "Контакты",
    foot_safety: "Правила безопасности",
    // Modal specific
    modal_title: "Профиль Проводника",
    modal_languages: "Языки общения:",
    modal_price: "Часовой тариф:,",
    modal_experience: "Профессиональный опыт:",
    modal_transport: "Транспортное обеспечение:",
    modal_itinerary: "Примерный план экскурсии:",
    modal_close: "Закрыть",
    modal_book_now: "Забронировать визит",
    modal_book_desc: "Примечание: Данная платформа является статическим кликабельным дизайн-макетом. Серверные вызовы отсутствуют.",
    ticket_created: "Ваш посадочный купон сформирован!",
    ticket_desc: "Вы можете сохранить этот статический купон для сверки маршрута и расчетов с гидом на месте.",
    ticket_code: "Код билета",
    ticket_mate: "Ваш проводник",
    ticket_price: "Стоимость",
    ticket_time: "Время",
    ticket_date: "Дата встречи",
    ticket_close: "Понятно",
    booking_success_bubble: "Билет зафиксирован на экране!"
  }
};
