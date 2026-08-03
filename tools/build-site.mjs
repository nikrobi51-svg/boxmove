import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lastmod = "2026-07-27";
const assetVersion = "20260727-6";

const company = {
  name: "BoxMove",
  domain: "https://boxmove.ge",
  phoneDisplay: "+995 555 320 865",
  phoneCompact: "995555320865",
  whatsapp: "https://wa.me/message/3XB2AJBAQTQMK1",
  whatsappDirect: "https://wa.me/995555320865",
  telegram: "https://t.me/grutbi",
  telegramLabel: "Telegram @grutbi",
  analyticsId: "G-NS7CFH82KT",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
  minPrice: "50 ₾",
  dispatchTime: "40 минут",
  priceRange: "₾₾",
  hours: "Приём заказов ежедневно 07:00–23:00. Срочные заказы — по согласованию.",
  areas: ["Tbilisi", "Georgia"],
  districts: ["Ваке", "Сабуртало", "Диди Дигоми", "Глдани", "Надзаладеви", "Исани", "Самгори", "Авлабари", "Чугурети", "Мтацминда", "Ортачала"],
  image: "/assets/boxmove-tbilisi-van.png"
};

const homePages = {
  ru: {
    lang: "ru",
    locale: "ru_GE",
    path: "/ru/",
    label: "RU",
    title: "Грузоперевозки в Тбилиси от 50 ₾ — BoxMove",
    description: "Грузоперевозки по Тбилиси и всей Грузии. Фургон, грузчики, перевозка мебели, квартирные и офисные переезды. Подача от 40 минут. Цена от 50 ₾.",
    nav: ["Услуги", "Цены", "Как работаем", "Районы", "FAQ", "Контакты"],
    navIds: ["services", "prices", "process", "area", "faq", "contacts"],
    skip: "К услугам",
    eyebrow: "Грузоперевозки в Тбилиси и по всей Грузии",
    h1: "Грузоперевозки в Тбилиси и по Грузии",
    lead: "BoxMove аккуратно перевезёт мебель, технику, вещи и коммерческие грузы. Фургон с водителем и грузчиками — от 50 ₾.",
    primary: "Рассчитать в WhatsApp",
    secondary: "Наши услуги",
    proof: ["Подача от 40 минут", "Грузчики по запросу", "Безопасная упаковка"],
    today: "Приём заказов",
    from: "от",
    city: "Тбилиси + вся Грузия",
    urgent: "по согласованию",
    quick: [
      ["✓", "Аккуратная работа", "Бережно относимся к мебели, технике и личным вещам."],
      ["▣", "Вместительный фургон", "Подходит для переезда, доставки и грузового такси."],
      ["↗", "Маршруты по Грузии", "Тбилиси, Батуми, Кутаиси, Рустави и другие города."]
    ],
    servicesTitle: "Услуги грузоперевозок в Тбилиси",
    servicesText: "Можно заказать только машину, машину с грузчиками, вывоз мусора или переезд под ключ с упаковкой, разборкой и сборкой мебели.",
    pricesTitle: "Стоимость грузоперевозок",
    pricesText: "Каждый заказ рассчитывается под задачу: маршрут, объём, этаж, грузчики, упаковка и ожидание. Минимальная городская перевозка указана от 50 ₾, точную цену лучше уточнить после описания груза.",
    processTitle: "Как проходит перевозка",
    processText: "Перед подачей машины уточняем детали, чтобы приехать с подходящим фургоном, нужным количеством грузчиков и понятным расчётом.",
    whyTitle: "Почему выбирают BoxMove",
    whyText: "Мы заранее уточняем объём, этаж, лифт, хрупкие вещи и маршрут. Приезжаем вовремя, закрепляем груз в кузове и держим связь до завершения заказа.",
    areaTitle: "Районы обслуживания",
    areaText: "Мы выполняем грузоперевозки по всем районам Тбилиси, включая Ваке, Сабуртало, Диди Дигоми, Глдани, Исани, Самгори и центральные районы города. Также доступны перевозки из Тбилиси в другие города Грузии.",
    faqTitle: "Частые вопросы",
    quoteTitle: "Заказать грузоперевозку",
    quoteText: "Форма открывает готовое сообщение в WhatsApp. Добавьте адреса, тип груза и количество грузчиков, чтобы быстрее получить расчёт.",
    contactsTitle: "Напишите BoxMove — подберём машину и время",
    contactsText: "Лучше всего отправить фото вещей, адреса и желаемое время. Мы быстро скажем цену и свободный слот.",
    footer: "Грузоперевозки, переезды и грузовое такси в Тбилиси и по Грузии.",
    mobile: "WhatsApp расчёт",
    quoteMessage: "Здравствуйте, хочу рассчитать перевозку BoxMove.",
    form: {
      from: "Откуда",
      to: "Куда",
      type: "Тип услуги",
      helpers: "Грузчики",
      comment: "Что нужно перевезти",
      submit: "Отправить в WhatsApp",
      fromPlaceholder: "Сабуртало, Тбилиси",
      toPlaceholder: "Ваке, Тбилиси",
      commentPlaceholder: "Например: диван, холодильник, 12 коробок",
      helperOptions: ["Не нужны", "1 грузчик", "2 грузчика", "3+ грузчика"]
    },
    faq: [
      ["Сколько стоит грузоперевозка по Тбилиси?", "Минимальная стоимость городской перевозки — от 50 ₾. Итоговая цена зависит от маршрута, объёма груза, этажа, лифта, количества грузчиков, упаковки и ожидания."],
      ["От чего зависит итоговая цена?", "Мы учитываем расстояние, размер и вес вещей, сложность погрузки, количество адресов, время работы команды и дополнительные услуги."],
      ["Можно ли заказать грузчиков?", "Да. Грузчиков можно заказать вместе с автомобилем для погрузки, разгрузки, подъема на этаж и переноски мебели или коробок."],
      ["Перевозите ли вы мебель и бытовую технику?", "Да, перевозим диваны, шкафы, холодильники, стиральные машины, коробки, личные вещи и коммерческие грузы."],
      ["Работаете ли вы по выходным?", "На сайте указана работа ежедневно 07:00–23:00. Срочные заказы обсуждаются отдельно при наличии свободного времени."],
      ["Выполняете ли вы перевозки за пределы Тбилиси?", "Да, доступны перевозки из Тбилиси в другие города Грузии. Стоимость рассчитывается по маршруту и параметрам груза."],
      ["Как быстро можно подать автомобиль?", "При свободном слоте фургон по Тбилиси часто можно подать в течение 40-90 минут. Точное время зависит от района, дороги и текущей загрузки."],
      ["Нужно ли заранее упаковывать вещи?", "Хрупкие и мелкие вещи лучше подготовить заранее. При необходимости можно обсудить пленку, коробки, защитные материалы, разборку и сборку мебели."],
      ["Можно ли заказать только автомобиль без грузчиков?", "Да, можно заказать фургон с водителем без грузчиков или добавить помощь при погрузке отдельно."]
    ]
  },
  en: {
    lang: "en",
    locale: "en_US",
    path: "/en/",
    label: "EN",
    title: "Cargo Transport in Tbilisi from 50 ₾ — BoxMove",
    description: "Cargo transport in Tbilisi and across Georgia. Van, driver, movers, furniture delivery, apartment and office moves. Fast quote via WhatsApp.",
    nav: ["Services", "Formats", "Process", "Areas", "FAQ", "Contacts"],
    navIds: ["services", "prices", "process", "area", "faq", "contacts"],
    skip: "Skip to services",
    eyebrow: "Cargo transport in Tbilisi and across Georgia",
    h1: "Cargo Transport in Tbilisi and Across Georgia",
    lead: "BoxMove moves furniture, boxes, appliances and bulky cargo with care. Book a van with a driver and movers from 50 ₾.",
    primary: "Get WhatsApp quote",
    secondary: "Our services",
    proof: ["Van from 40 minutes", "Loaders on request", "Protective packing"],
    today: "Order hours",
    from: "from",
    city: "Tbilisi + all Georgia",
    urgent: "by agreement",
    quick: [
      ["✓", "Careful handling", "Furniture, appliances and personal items are treated gently."],
      ["▣", "Spacious van", "Good for moving, delivery and cargo taxi orders."],
      ["↗", "Georgia routes", "Tbilisi, Batumi, Kutaisi, Rustavi and other cities."]
    ],
    servicesTitle: "Cargo transport services in Tbilisi",
    servicesText: "Book only a van, a van with loaders, junk removal, or a turnkey move with packing, disassembly and assembly.",
    pricesTitle: "Prices",
    pricesText: "Every order is matched to the route, volume, floor, loaders, packing and waiting time. A quick quote is available on WhatsApp.",
    processTitle: "How the transport works",
    processText: "We clarify the details before dispatch so the van and team match the job.",
    whyTitle: "Why choose BoxMove",
    whyText: "We clarify volume, floor, elevator, fragile items and route in advance. We arrive on time, secure the cargo inside the van and stay in touch until the job is complete.",
    areaTitle: "Areas served",
    areaText: "BoxMove works across Tbilisi and can arrange routes from Tbilisi to other cities in Georgia.",
    faqTitle: "Common questions",
    quoteTitle: "Request cargo transport",
    quoteText: "The form opens a prepared WhatsApp message. Add addresses, cargo type and loader count.",
    contactsTitle: "Message BoxMove — we will choose a van and time",
    contactsText: "Send photos of the items, addresses and preferred time. We will reply with price and available slot.",
    footer: "Moving, cargo transport and cargo taxi in Tbilisi and Georgia.",
    mobile: "WhatsApp quote",
    quoteMessage: "Hello, I want to get a BoxMove transport quote.",
    form: {
      from: "From",
      to: "To",
      type: "Service type",
      helpers: "Loaders",
      comment: "What needs to be moved",
      submit: "Send to WhatsApp",
      fromPlaceholder: "Saburtalo, Tbilisi",
      toPlaceholder: "Vake, Tbilisi",
      commentPlaceholder: "Example: sofa, fridge, 12 boxes",
      helperOptions: ["Not needed", "1 loader", "2 loaders", "3+ loaders"]
    },
    faq: [
      ["Can I book a van today?", "Yes, if a slot is available. In Tbilisi a van can often be dispatched within 40-90 minutes."],
      ["Do you provide loaders?", "Yes, loaders can help with carrying, loading, unloading and moving items by stairs."],
      ["Can you deliver to another city?", "Yes, BoxMove works on routes across Georgia. Price depends on distance, weight, volume and urgency."],
      ["Do you provide packing?", "Film, cardboard, tape and protective materials can be discussed before the move."]
    ]
  },
  ka: {
    lang: "ka",
    locale: "ka_GE",
    path: "/ka/",
    label: "KA",
    title: "ტვირთის გადაზიდვა თბილისში 50 ₾-დან — BoxMove",
    description: "ტვირთის გადაზიდვა თბილისში და საქართველოს მასშტაბით. ფურგონი, მძღოლი, მტვირთავები, ავეჯის გადაზიდვა, ბინისა და ოფისის გადატანა.",
    nav: ["სერვისები", "ფორმატები", "როგორ ვმუშაობთ", "ზონა", "FAQ", "კონტაქტი"],
    navIds: ["services", "prices", "process", "area", "faq", "contacts"],
    skip: "სერვისებზე გადასვლა",
    eyebrow: "ტვირთის გადაზიდვა თბილისში და საქართველოს მასშტაბით",
    h1: "ტვირთის გადაზიდვა თბილისში და საქართველოს მასშტაბით",
    lead: "BoxMove ფრთხილად გადაიტანს ავეჯს, ტექნიკას, ყუთებს და დიდ ტვირთს. ფურგონი მძღოლით და მტვირთავებით — 50 ₾-დან.",
    primary: "დათვლა WhatsApp-ში",
    secondary: "ჩვენი სერვისები",
    proof: ["მანქანა 40 წუთიდან", "მტვირთავები მოთხოვნით", "დაცული შეფუთვა"],
    today: "შეკვეთების მიღება",
    from: "დან",
    city: "თბილისი + მთელი საქართველო",
    urgent: "შეთანხმებით",
    quick: [
      ["✓", "ფრთხილი მუშაობა", "ავეჯს, ტექნიკას და პირად ნივთებს ფრთხილად ვეპყრობით."],
      ["▣", "ტევადი ფურგონი", "გამოდგება გადატანისთვის, მიწოდებისთვის და სატვირთო ტაქსისთვის."],
      ["↗", "მარშრუტები საქართველოში", "თბილისი, ბათუმი, ქუთაისი, რუსთავი და სხვა ქალაქები."]
    ],
    servicesTitle: "BoxMove სერვისები",
    servicesText: "შეგიძლიათ შეუკვეთოთ მხოლოდ მანქანა, მანქანა მტვირთავებით, ნარჩენების გატანა ან სრული გადატანა შეფუთვით და ავეჯის დაშლა-აწყობით.",
    pricesTitle: "პოპულარული ფორმატები",
    pricesText: "ყოველ შეკვეთას ვარჩევთ მარშრუტის, მოცულობის, სართულის, მტვირთავების, შეფუთვის და ლოდინის მიხედვით.",
    processTitle: "როგორ ხდება გადაზიდვა",
    processText: "წინასწარ ვაზუსტებთ დეტალებს, რომ მანქანა და გუნდი ზუსტად შეესაბამებოდეს შეკვეთას.",
    whyTitle: "გადატანა მშვიდი უნდა იყოს და არა ქაოსური",
    whyText: "წინასწარ ვაზუსტებთ მოცულობას, სართულს, ლიფტს, მყიფე ნივთებს და მარშრუტს. მოვდივართ დროულად, ვამაგრებთ ტვირთს ფურგონში და კონტაქტზე ვართ დასრულებამდე.",
    areaTitle: "მომსახურების ზონა",
    areaText: "BoxMove მუშაობს თბილისში და აწყობს მარშრუტებს საქართველოს ქალაქების მიმართულებით.",
    faqTitle: "ხშირი კითხვები",
    quoteTitle: "შეუკვეთეთ გადაზიდვა",
    quoteText: "ფორმა ხსნის მზა WhatsApp შეტყობინებას. დაამატეთ მისამართები, ტვირთის ტიპი და მტვირთავების რაოდენობა.",
    contactsTitle: "მოგვწერეთ BoxMove-ს — შევარჩევთ მანქანას და დროს",
    contactsText: "საუკეთესოა ნივთების ფოტოები, მისამართები და სასურველი დრო გამოგვიგზავნოთ.",
    footer: "გადაზიდვები, ბინის გადატანა და სატვირთო ტაქსი თბილისში და საქართველოში.",
    mobile: "WhatsApp დათვლა",
    quoteMessage: "გამარჯობა, მინდა BoxMove გადაზიდვის დათვლა.",
    form: {
      from: "საიდან",
      to: "სად",
      type: "სერვისის ტიპი",
      helpers: "მტვირთავები",
      comment: "რა არის გადასატანი",
      submit: "გაგზავნა WhatsApp-ში",
      fromPlaceholder: "საბურთალო, თბილისი",
      toPlaceholder: "ვაკე, თბილისი",
      commentPlaceholder: "მაგალითად: დივანი, მაცივარი, 12 ყუთი",
      helperOptions: ["არ არის საჭირო", "1 მტვირთავი", "2 მტვირთავი", "3+ მტვირთავი"]
    },
    faq: [
      ["შეიძლება მანქანის შეკვეთა დღეს?", "დიახ, თუ თავისუფალი დრო არის. თბილისში ხშირად შესაძლებელია ფურგონის მიწოდება 40-90 წუთში."],
      ["მტვირთავებიც გყავთ?", "დიახ, მტვირთავები დაგეხმარებიან ატანაში, ჩამოტანაში, ჩატვირთვასა და გადმოტვირთვაში."],
      ["შეიძლება სხვა ქალაქში გადაზიდვა?", "დიახ, ვმუშაობთ საქართველოს ქალაქებს შორისაც. ფასი დამოკიდებულია მანძილზე, წონაზე, მოცულობაზე და სისწრაფეზე."],
      ["შეფუთვა გაქვთ?", "ფირი, მუყაო, სკოჩი და დამცავი მასალები შეიძლება წინასწარ შეთანხმდეს."]
    ]
  }
};

const serviceCards = [
  ["Грузоперевозки в Тбилиси", "Фургон, водитель и грузчики для мебели, техники, вещей и коммерческих грузов.", "/ru/gruzoperevozki-tbilisi/", "/assets/service-cargo-tbilisi.webp", "Фургон BoxMove для грузоперевозок в Тбилиси"],
  ["Грузовое такси", "Быстрая подача машины для коробок, покупок, оборудования и небольших грузов.", "/ru/gruzovoe-taksi-tbilisi/", "/assets/service-taxi-tbilisi.webp", "Фургон BoxMove для грузового такси по Тбилиси"],
  ["Перевозка мебели", "Аккуратная погрузка, размещение в кузове и доставка мебели по нужному адресу.", "/ru/perevozka-mebeli-tbilisi/", "/assets/service-furniture-moving.webp", "Мебель и бытовая техника закреплены в фургоне"],
  ["Разборка и сборка мебели", "Разберём крупную мебель перед перевозкой и соберём её на новом адресе по согласованию.", "/ru/razborka-sborka-mebeli-tbilisi/", "/assets/service-furniture-assembly.webp", "Разборка и сборка мебели перед перевозкой"],
  ["Квартирный переезд", "Перевозка мебели, техники, коробок и личных вещей с помощью грузчиков.", "/ru/kvartirny-pereezd-tbilisi/", "/assets/service-apartment-move.webp", "Квартирный переезд с фургоном и грузчиками"],
  ["Офисный переезд", "Перевозка столов, кресел, техники, документов и имущества компании.", "/ru/ofisny-pereezd-tbilisi/", "/assets/service-office-move.webp", "Офисный переезд с коробками и фургоном BoxMove"],
  ["Услуги грузчиков", "Погрузка, разгрузка, подъём на этаж и переноска мебели, техники и коробок.", "/ru/gruzchiki-tbilisi/", "/assets/service-loaders.webp", "Грузчики переносят мебель у дома"],
  ["Вывоз мусора", "Вывоз строительного мусора, старой мебели и ненужных вещей после ремонта или переезда.", "/ru/vyvoz-musora-tbilisi/", "/assets/service-junk-removal.webp", "Вывоз строительного мусора с погрузкой"],
  ["Грузоперевозки по Грузии", "Междугородние перевозки между городами Грузии.", "/ru/gruzoperevozki-po-gruzii/", "/assets/service-georgia-transport.webp", "Фургон BoxMove на маршруте по Грузии"]
];

const servicePages = [
  {
    slug: "gruzoperevozki-tbilisi",
    title: "Грузоперевозки в Тбилиси — фургон и грузчики | BoxMove",
    description: "Грузоперевозки в Тбилиси для мебели, техники, личных вещей и коммерческих грузов. Фургон, водитель и помощь грузчиков. Закажите перевозку в BoxMove.",
    h1: "Грузоперевозки в Тбилиси",
    lead: "BoxMove помогает перевезти мебель, технику, коробки, стройматериалы и коммерческие грузы по Тбилиси. Можно заказать фургон с водителем, добавить грузчиков и заранее согласовать удобное время.",
    detail: "Услуга подходит для разовых перевозок, переездов, доставки покупок, перевозки товара между адресами и маршрутов из Тбилиси по Грузии. Перед заказом мы уточняем объём, вес, этаж, лифт, необходимость упаковки и количество адресов, чтобы расчёт был понятным.",
    suitable: ["перевезти мебель и бытовую технику", "доставить коробки, товар или оборудование", "организовать переезд квартиры, офиса или магазина", "отправить груз из Тбилиси в другой город Грузии"],
    steps: ["Опишите груз и адреса в WhatsApp или по телефону.", "Мы уточним детали, время, этажи, лифт и грузчиков.", "Фургон приезжает к согласованному времени.", "Груз аккуратно загружается, крепится и доставляется по адресу."],
    cost: "Минимальная цена на сайте указана от 50 ₾. Итоговая стоимость зависит от маршрута, объёма, веса, этажей, ожидания, количества грузчиков и дополнительных услуг.",
    advantages: ["фургон с водителем", "грузчики по запросу", "перевозки по Тбилиси и Грузии", "бережная погрузка и крепление"],
    faq: [["Сколько стоит грузоперевозка в Тбилиси?", "Ориентир начинается от 50 ₾, но точный расчёт зависит от маршрута, объёма груза, этажей, грузчиков и времени работы."], ["Можно ли заказать только автомобиль?", "Да, можно заказать фургон с водителем без грузчиков или добавить помощь при погрузке отдельно."], ["Какие грузы можно перевезти?", "Мебель, бытовую технику, коробки, личные вещи, стройматериалы, оборудование и небольшие коммерческие грузы."], ["Работаете ли вы за пределами Тбилиси?", "Да, доступны маршруты из Тбилиси в другие города Грузии."]],
    related: ["gruzovoe-taksi-tbilisi", "perevozka-mebeli-tbilisi", "gruzoperevozki-po-gruzii"],
    image: "/assets/service-cargo-tbilisi.webp",
    imageAlt: "Фургон BoxMove для грузоперевозок в Тбилиси"
  },
  {
    slug: "gruzovoe-taksi-tbilisi",
    title: "Грузовое такси в Тбилиси — заказать фургон | BoxMove",
    description: "Закажите грузовое такси в Тбилиси для перевозки мебели, техники, покупок и небольших грузов. Удобная подача автомобиля и помощь с погрузкой.",
    h1: "Грузовое такси в Тбилиси",
    lead: "Грузовое такси BoxMove подходит, когда нужно быстро перевезти коробки, покупку из магазина, небольшую мебель, технику или оборудование по Тбилиси.",
    detail: "В отличие от полноценного переезда, грузовое такси обычно решает одну конкретную задачу: забрать груз, довезти до адреса и при необходимости помочь с погрузкой. Перед выездом мы уточняем габариты, вес и нужна ли помощь грузчиков.",
    suitable: ["перевезти покупку из магазина", "доставить коробки или оборудование", "перевезти один-два предмета мебели", "быстро доставить груз между районами Тбилиси"],
    steps: ["Напишите, что нужно перевезти и откуда забрать.", "Уточните адрес доставки и желаемое время.", "Мы согласуем машину, грузчиков и ориентировочную стоимость.", "Фургон забирает груз и доставляет его по адресу."],
    cost: "Минимальная стоимость городской перевозки — от 50 ₾. Итоговая цена зависит от маршрута, объёма груза, этажей и необходимости грузчиков.",
    advantages: ["быстрая городская подача", "подходит для небольших грузов", "можно добавить грузчика", "расчёт до выезда"],
    faq: [["Можно ли вызвать грузовое такси сегодня?", "Да, при наличии свободного слота. По Тбилиси машина часто доступна в день обращения."], ["Грузчики входят в грузовое такси?", "Грузчиков можно добавить по запросу. Если помощь не нужна, можно заказать только фургон с водителем."], ["Можно ли перевезти технику?", "Да, перевозим бытовую технику и оборудование, если заранее известны размеры и вес."]],
    related: ["gruzoperevozki-tbilisi", "perevozka-mebeli-tbilisi", "gruzchiki-tbilisi"],
    image: "/assets/service-taxi-tbilisi.webp",
    imageAlt: "Фургон BoxMove для грузового такси в Тбилиси"
  },
  {
    slug: "perevozka-mebeli-tbilisi",
    title: "Перевозка мебели в Тбилиси с грузчиками | BoxMove",
    description: "Аккуратная перевозка мебели в Тбилиси. Погрузка, размещение в автомобиле и доставка по нужному адресу. Закажите машину и грузчиков.",
    h1: "Перевозка мебели в Тбилиси",
    lead: "BoxMove перевозит диваны, шкафы, столы, кровати, кресла и другую мебель по Тбилиси. При необходимости можно добавить грузчиков, упаковку, разборку и сборку.",
    detail: "Перед перевозкой мебели важно понять размеры предметов, наличие лифта, ширину проходов и нужно ли разбирать крупные элементы. Мы заранее уточняем эти детали, чтобы подобрать фургон и команду без лишней суеты на адресе.",
    suitable: ["перевезти диван, шкаф, кровать или стол", "доставить мебель из магазина или мастерской", "перевезти мебель между квартирами", "добавить разборку, упаковку и сборку"],
    steps: ["Опишите мебель и приложите фото, если есть.", "Уточните этаж, лифт и возможность подъезда.", "Мы согласуем фургон, грузчиков и упаковку.", "Мебель переносится, размещается в кузове и доставляется по адресу."],
    cost: "Стоимость зависит от количества и размера предметов, этажей, лифта, разборки, упаковки, маршрута и времени работы команды. Фиксированная цена не указывается без деталей заказа.",
    advantages: ["бережная погрузка", "грузчики по запросу", "упаковочные материалы можно обсудить заранее", "разборка и сборка сложной мебели"],
    faq: [["Разбираете ли вы мебель перед перевозкой?", "Да, разборку и сборку можно согласовать заранее, если мебель не проходит в лифт или дверной проем."], ["Нужно ли упаковывать мебель заранее?", "Хрупкие поверхности лучше защитить заранее. Также можно обсудить пленку, картон и защиту углов."], ["Можно ли перевезти холодильник или стиральную машину?", "Да, перевозка бытовой техники возможна. Важно заранее сообщить размеры, вес и этаж."]],
    related: ["razborka-sborka-mebeli-tbilisi", "kvartirny-pereezd-tbilisi", "gruzchiki-tbilisi"],
    image: "/assets/service-furniture-moving.webp",
    imageAlt: "Мебель и бытовая техника закреплены в фургоне"
  },
  {
    slug: "razborka-sborka-mebeli-tbilisi",
    title: "Разборка и сборка мебели в Тбилиси | BoxMove",
    description: "Разборка и сборка мебели в Тбилиси перед переездом или перевозкой. Шкафы, кровати, столы и крупная мебель по предварительному согласованию.",
    h1: "Разборка и сборка мебели в Тбилиси",
    lead: "BoxMove помогает разобрать крупную мебель перед перевозкой и собрать ее на новом адресе. Услугу можно добавить к перевозке мебели, квартирному или офисному переезду.",
    detail: "Разборка нужна, когда шкаф, кровать, стол или стеллаж не проходит в лифт, дверной проем или коридор. Перед заказом важно отправить фото мебели, примерные размеры и рассказать, есть ли доступ к крепежу. Мы заранее согласуем, какую мебель нужно разобрать, как упаковать элементы и нужна ли сборка после доставки.",
    suitable: ["разобрать шкаф, кровать, стол или стеллаж перед перевозкой", "подготовить мебель к квартирному переезду", "перевезти крупную мебель через узкие проходы", "собрать мебель после доставки на новом адресе"],
    steps: ["Отправьте фото мебели и опишите, что нужно разобрать.", "Мы уточним размеры, крепёж, этаж, лифт и адрес сборки.", "Команда разберёт мебель и подготовит элементы к погрузке.", "После перевозки мебель можно собрать на новом месте по согласованию."],
    cost: "Стоимость зависит от количества предметов, сложности крепежа, времени работы, этажей, необходимости упаковки и того, нужна ли сборка после перевозки. Фиксированная цена без описания мебели не указывается.",
    advantages: ["удобно добавлять к переезду", "помогает перевезти крупную мебель", "упаковку деталей можно обсудить заранее", "расчёт по реальному объёму работ"],
    faq: [["Какие предметы мебели можно разобрать?", "Обычно можно обсудить шкафы, кровати, столы, стеллажи и другую крупную мебель. Лучше заранее отправить фото и размеры."], ["Собираете ли мебель после перевозки?", "Да, сборку на новом адресе можно согласовать заранее вместе с перевозкой."], ["Нужно ли сохранять крепеж?", "Да, крепеж лучше сложить в отдельный пакет или коробку и подписать, чтобы сборка прошла спокойнее."]],
    related: ["perevozka-mebeli-tbilisi", "kvartirny-pereezd-tbilisi", "gruzchiki-tbilisi"],
    image: "/assets/service-furniture-assembly.webp",
    imageAlt: "Разборка и сборка мебели перед перевозкой"
  },
  {
    slug: "kvartirny-pereezd-tbilisi",
    title: "Квартирный переезд в Тбилиси под ключ | BoxMove",
    description: "Организуем квартирный переезд в Тбилиси: перевозка мебели, техники, коробок и личных вещей. Машина, водитель и грузчики.",
    h1: "Квартирный переезд в Тбилиси",
    lead: "BoxMove помогает организовать квартирный переезд по Тбилиси: перевезти мебель, бытовую технику, коробки, личные вещи и крупные предметы.",
    detail: "Переезд требует больше подготовки, чем обычная доставка. Мы уточняем список вещей, этажи, лифт, упаковку, необходимость разборки мебели и количество грузчиков, чтобы переезд прошел спокойно и без лишних задержек.",
    suitable: ["переезд из квартиры в квартиру", "перевозка мебели, техники и коробок", "частичный переезд или перевозка отдельных вещей", "переезд с грузчиками и упаковкой"],
    steps: ["Составьте примерный список вещей или отправьте фото.", "Мы уточним адреса, этажи, лифт и упаковку.", "Команда приедет с фургоном и грузчиками.", "Вещи аккуратно загрузят, перевезут и выгрузят на новом адресе."],
    cost: "Цена квартирного переезда зависит от объёма вещей, количества грузчиков, этажей, лифта, упаковки, разборки мебели и расстояния между адресами. Расчёт делается после уточнения деталей.",
    advantages: ["команда под объём вещей", "погрузка и выгрузка", "упаковка по запросу", "разборка и сборка мебели"],
    faq: [["Можно ли заказать переезд под ключ?", "Да, можно обсудить упаковку, разборку мебели, перевозку, разгрузку и сборку на новом месте."], ["Сколько грузчиков нужно для квартиры?", "Это зависит от объёма вещей, этажей, лифта и крупной мебели. Количество лучше определить после описания переезда."], ["Можно ли переехать вечером или в выходной?", "Да, время обсуждается заранее. На сайте указан ежедневный график 07:00–23:00."]],
    related: ["perevozka-mebeli-tbilisi", "razborka-sborka-mebeli-tbilisi", "gruzchiki-tbilisi"],
    image: "/assets/service-apartment-move.webp",
    imageAlt: "Квартирный переезд с фургоном и грузчиками"
  },
  {
    slug: "ofisny-pereezd-tbilisi",
    title: "Офисный переезд в Тбилиси — перевозка мебели и техники | BoxMove",
    description: "Офисные переезды в Тбилиси. Перевозка рабочих столов, кресел, техники, документов и другого имущества компании.",
    h1: "Офисный переезд в Тбилиси",
    lead: "BoxMove организует офисные переезды по Тбилиси: перевозку рабочих столов, кресел, техники, документов, коробок и торгового оборудования.",
    detail: "Для офисного переезда важно заранее согласовать время, доступ к зданию, лифты, парковку, список имущества и порядок перевозки. Мы помогаем перевезти офис аккуратно, чтобы команда могла быстрее вернуться к работе.",
    suitable: ["переезд небольшого офиса", "перевозка мебели и техники", "доставка оборудования между адресами", "перевозка коробок, документов и стеллажей"],
    steps: ["Опишите объём офиса и желаемое время переезда.", "Уточните доступ к зданию, лифт, парковку и этажи.", "Мы согласуем фургон, грузчиков и порядок работ.", "Имущество загружается, перевозится и выгружается на новом адресе."],
    cost: "Стоимость зависит от объёма мебели и техники, количества адресов, этажей, лифта, времени работы команды, упаковки и необходимости разборки мебели.",
    advantages: ["перевозка техники и мебели", "работа в согласованное время", "грузчики по запросу", "расчёт по реальному объёму"],
    faq: [["Перевозите ли вы офисную технику?", "Да, перевозим технику и оборудование, если заранее известны размеры, вес и требования к переноске."], ["Можно ли переехать вечером?", "Да, время можно согласовать заранее с учётом графика команды и доступа к зданию."], ["Помогаете ли с разборкой офисной мебели?", "Разборку и сборку мебели можно обсудить при расчёте заказа."]],
    related: ["gruzchiki-tbilisi", "razborka-sborka-mebeli-tbilisi", "gruzoperevozki-tbilisi"],
    image: "/assets/service-office-move.webp",
    imageAlt: "Офисный переезд с коробками и фургоном BoxMove"
  },
  {
    slug: "gruzchiki-tbilisi",
    title: "Услуги грузчиков в Тбилиси — погрузка и разгрузка | BoxMove",
    description: "Грузчики в Тбилиси для переездов, погрузки, разгрузки и переноски мебели, техники и коробок. Закажите помощь вместе с автомобилем или отдельно.",
    h1: "Услуги грузчиков в Тбилиси",
    lead: "Грузчики BoxMove помогают с погрузкой, разгрузкой, переноской мебели, техники, коробок и подъемом на этаж. Услугу можно добавить к перевозке или обсудить отдельно.",
    detail: "Перед заказом важно понять вес и размеры предметов, этаж, наличие лифта, расстояние от подъезда до машины и количество вещей. Это помогает определить нужное число грузчиков и время работы.",
    suitable: ["погрузка и разгрузка при переезде", "подъем мебели или техники на этаж", "перенос коробок и личных вещей", "помощь при доставке или вывозе ненужных вещей"],
    steps: ["Опишите, что нужно перенести и на какой этаж.", "Мы уточним лифт, проходы, вес и количество вещей.", "Согласуем количество грузчиков и время.", "Грузчики выполнят переноску, погрузку или разгрузку."],
    cost: "Стоимость зависит от числа грузчиков, времени работы, веса предметов, этажей, наличия лифта и сложности переноски. Точный расчёт делается после описания задачи.",
    advantages: ["помощь вместе с автомобилем или отдельно", "подъем и спуск по этажам", "аккуратная переноска", "можно добавить упаковку"],
    faq: [["Можно ли заказать грузчиков без машины?", "Да, такую задачу можно обсудить отдельно, если нужна только переноска, погрузка или разгрузка."], ["Сколько грузчиков нужно?", "Это зависит от веса, размера предметов, этажей и объёма работы. Обычно число определяется после описания груза."], ["Работаете ли без лифта?", "Да, но этаж и объём вещей нужно сообщить заранее, чтобы корректно рассчитать работу."]],
    related: ["perevozka-mebeli-tbilisi", "razborka-sborka-mebeli-tbilisi", "kvartirny-pereezd-tbilisi"],
    image: "/assets/service-loaders.webp",
    imageAlt: "Грузчики переносят мебель у дома"
  },
  {
    slug: "vyvoz-musora-tbilisi",
    title: "Вывоз строительного мусора в Тбилиси | BoxMove",
    description: "Вывоз строительного мусора, старой мебели и ненужных вещей в Тбилиси. Погрузка и транспортировка подходящим автомобилем.",
    h1: "Вывоз мусора в Тбилиси",
    lead: "BoxMove помогает вывезти строительный мусор, старую мебель и ненужные вещи после ремонта, переезда или освобождения помещения в Тбилиси.",
    detail: "Мы вывозим строительный мусор, старую мебель и ненужные вещи на специализированные площадки для приёма таких отходов после согласования объёма, адреса и типа груза.",
    suitable: ["вывезти старую мебель", "убрать мусор после ремонта", "освободить квартиру, офис или помещение", "добавить грузчиков для погрузки"],
    steps: ["Опишите тип и примерный объём мусора или вещей.", "Уточните адрес, этаж, лифт и возможность подъезда.", "Мы согласуем автомобиль, грузчиков и время.", "Команда погрузит и вывезет согласованный объём."],
    cost: "Цена зависит от объёма, веса, этажей, необходимости грузчиков, времени работы и маршрута. Фиксированная стоимость без осмотра или описания объёма не указывается.",
    advantages: ["погрузка по запросу", "подходит для старой мебели и вещей", "расчёт по объёму и сложности", "работа по Тбилиси"],
    faq: [["Куда вы вывозите строительный мусор?", "Мы вывозим согласованный объём мусора и ненужных вещей на специализированные площадки для приёма таких отходов. Тип груза лучше уточнить заранее."], ["Можно ли вывезти старую мебель?", "Да, можно обсудить вывоз старой мебели, если заранее известен объём, этаж и нужна ли разборка."], ["Нужны ли грузчики?", "Если мусор или мебель нужно вынести из помещения, грузчиков лучше добавить при заказе."]],
    related: ["gruzchiki-tbilisi", "gruzovoe-taksi-tbilisi", "gruzoperevozki-tbilisi"],
    image: "/assets/service-junk-removal.webp",
    imageAlt: "Вывоз строительного мусора с погрузкой"
  },
  {
    slug: "gruzoperevozki-po-gruzii",
    title: "Грузоперевозки по Грузии — междугородние перевозки | BoxMove",
    description: "Грузоперевозки по Грузии между городами. Перевозка мебели, техники, личных вещей и коммерческих грузов по согласованному маршруту.",
    h1: "Грузоперевозки по Грузии",
    lead: "BoxMove выполняет междугородние грузоперевозки по Грузии: мебель, техника, личные вещи, коробки, оборудование, коммерческие грузы, квартирные и офисные переезды между городами.",
    detail: "Маршруты по Грузии требуют предварительного расчёта по расстоянию, объёму, весу и срокам. Мы уточняем город отправления, город доставки, адреса, удобное время выезда, особенности груза и необходимость грузчиков на каждом адресе.",
    suitable: ["перевезти вещи между городами Грузии", "доставить мебель или технику по Грузии", "перевезти коммерческий груз между городами", "организовать междугородний переезд"],
    steps: ["Сообщите город отправления, город доставки и адреса.", "Опишите груз, вес, объём и необходимость грузчиков.", "Мы согласуем маршрут, время выезда и расчёт.", "Груз доставляется по адресу, а команда остаётся на связи в пути."],
    cost: "Стоимость междугородней перевозки зависит от расстояния, объёма и веса груза, времени выезда, ожидания и погрузочно-разгрузочных работ. Цена рассчитывается индивидуально.",
    areaText: "Выполняем междугородние маршруты между городами Грузии: Тбилиси, Батуми, Кутаиси, Рустави, Гори, Телави, Зугдиди, Поти, Боржоми и другие направления по согласованию.",
    advantages: ["маршруты между городами Грузии", "перевозка мебели, вещей и товаров", "грузчики на адресах по запросу", "согласование времени выезда"],
    faq: [["В какие города вы ездите?", "В текущем контенте указаны маршруты по всей Грузии, включая Батуми, Кутаиси и Рустави. Конкретные города отправления и доставки лучше уточнить перед заказом."], ["Как считается цена по Грузии?", "Учитываются расстояние, объём, вес, время выезда, ожидание, этажи и необходимость грузчиков."], ["Можно ли заказать междугородний переезд?", "Да, можно обсудить перевозку мебели, техники, коробок и личных вещей между городами Грузии."]],
    related: ["gruzoperevozki-tbilisi", "kvartirny-pereezd-tbilisi", "gruzovoe-taksi-tbilisi"],
    image: "/assets/service-georgia-transport.webp",
    imageAlt: "Фургон BoxMove на маршруте по Грузии"
  }
];

const serviceIdsByRuSlug = {
  "gruzoperevozki-tbilisi": "cargo",
  "gruzovoe-taksi-tbilisi": "taxi",
  "perevozka-mebeli-tbilisi": "furniture",
  "razborka-sborka-mebeli-tbilisi": "assembly",
  "kvartirny-pereezd-tbilisi": "apartment",
  "ofisny-pereezd-tbilisi": "office",
  "gruzchiki-tbilisi": "movers",
  "vyvoz-musora-tbilisi": "junk",
  "gruzoperevozki-po-gruzii": "georgia"
};

servicePages.forEach((service) => {
  service.lang = "ru";
  service.path = `/ru/${service.slug}/`;
  service.id = serviceIdsByRuSlug[service.slug];
});

const localizedServicePages = [
  {
    id: "cargo",
    lang: "en",
    slug: "cargo-transportation-tbilisi",
    title: "Cargo Transport in Tbilisi — Van and Movers | BoxMove",
    description: "Cargo transport in Tbilisi for furniture, appliances, boxes and business goods. Order a van, driver and movers from BoxMove.",
    h1: "Cargo Transport in Tbilisi",
    cardTitle: "Cargo transport in Tbilisi",
    cardText: "Van, driver and movers for furniture, appliances, boxes and commercial cargo.",
    lead: "BoxMove helps move furniture, appliances, boxes, renovation materials and business goods across Tbilisi. You can book a van with a driver and add movers when the job needs carrying or loading.",
    detail: "This service is useful for one-time deliveries, apartment or office moves, store deliveries and routes from Tbilisi to other cities in Georgia. Before dispatch, we clarify cargo size, weight, floor, elevator access, packing and the number of addresses so the quote is clear.",
    suitable: ["moving furniture and appliances", "delivering boxes, equipment or shop goods", "moving an apartment, office or small store", "sending cargo from Tbilisi to another city in Georgia"],
    steps: ["Send the cargo details and addresses by WhatsApp or phone.", "We clarify timing, floors, elevator access and movers.", "The van arrives at the agreed time.", "Items are loaded carefully, secured in the van and delivered."],
    cost: "The minimum city transport guide on the site starts from 50 ₾. Final price depends on route, volume, weight, floors, waiting time, movers and extra services.",
    advantages: ["van with driver", "movers on request", "routes in Tbilisi and Georgia", "careful loading and fastening"],
    faq: [["How much does cargo transport in Tbilisi cost?", "The guide starts from 50 ₾. The exact quote depends on route, cargo volume, floors, movers and working time."], ["Can I book only a van?", "Yes. You can order a van with driver only or add movers separately."], ["What can you transport?", "Furniture, appliances, boxes, personal items, renovation materials, equipment and small business goods."], ["Do you work outside Tbilisi?", "Yes, routes from Tbilisi to other cities in Georgia can be arranged."]],
    related: ["taxi", "furniture", "georgia"],
    image: "/assets/service-cargo-tbilisi.webp",
    imageAlt: "BoxMove van for cargo transport in Tbilisi"
  },
  {
    id: "taxi",
    lang: "en",
    slug: "man-with-van-tbilisi",
    title: "Man with a Van in Tbilisi — Fast Cargo Taxi | BoxMove",
    description: "Order a man with a van in Tbilisi for furniture, appliances, boxes and small cargo. Fast quote by WhatsApp.",
    h1: "Man with a Van in Tbilisi",
    cardTitle: "Man with a van",
    cardText: "Fast cargo taxi for boxes, purchases, appliances and small loads.",
    lead: "A man with a van is a practical option when you need to move one or several items around Tbilisi without organizing a full relocation.",
    detail: "The service fits quick store pickups, small furniture delivery, equipment transport and short city routes. We ask for dimensions, weight and floor details before dispatch so the van and assistance match the task.",
    suitable: ["delivering a purchase from a store", "moving boxes or equipment", "transporting one or two furniture items", "quick transport between Tbilisi districts"],
    steps: ["Tell us what needs to be moved and pickup address.", "Send the delivery address and preferred time.", "We agree the van, movers if needed and guide price.", "The van collects the cargo and delivers it to the address."],
    cost: "City transport starts from 50 ₾ as a guide. Final price depends on distance, cargo size, floors and whether movers are needed.",
    advantages: ["quick city dispatch", "good for small cargo", "mover can be added", "quote before departure"],
    faq: [["Can I book a van today?", "Yes, if a slot is available. In Tbilisi, same-day dispatch is often possible."], ["Are movers included?", "Movers can be added on request. If you do not need help, you can order only the van with driver."], ["Can you move appliances?", "Yes, if dimensions, weight and floor details are known in advance."]],
    related: ["cargo", "furniture", "movers"],
    image: "/assets/service-taxi-tbilisi.webp",
    imageAlt: "BoxMove van for cargo taxi in Tbilisi"
  },
  {
    id: "furniture",
    lang: "en",
    slug: "furniture-moving-tbilisi",
    title: "Furniture Moving in Tbilisi with Movers | BoxMove",
    description: "Careful furniture moving in Tbilisi. Transport sofas, wardrobes, tables, appliances and boxes with BoxMove movers.",
    h1: "Furniture Moving in Tbilisi",
    cardTitle: "Furniture moving",
    cardText: "Careful loading, placement in the van and delivery to the needed address.",
    lead: "BoxMove transports sofas, wardrobes, tables, beds, chairs and other furniture across Tbilisi. Movers, packing, disassembly and assembly can be added by agreement.",
    detail: "Furniture moving needs attention to dimensions, elevator access, narrow entrances and surfaces that need protection. We clarify these details before the job so the team arrives prepared.",
    suitable: ["moving a sofa, wardrobe, bed or table", "delivering furniture from a store or workshop", "moving furniture between apartments", "adding packing, disassembly and assembly"],
    steps: ["Describe the furniture and send photos if possible.", "Share floor, elevator and parking details.", "We agree the van, movers and packing needs.", "Furniture is carried, placed in the van and delivered."],
    cost: "The price depends on the number and size of items, floors, elevator access, disassembly, packing, route and working time. A fixed quote is given after details are clarified.",
    advantages: ["careful carrying", "movers on request", "packing can be discussed in advance", "disassembly and assembly for large furniture"],
    faq: [["Do you disassemble furniture before moving?", "Yes, disassembly and assembly can be agreed in advance when furniture does not fit through doors, stairs or elevators."], ["Should I pack furniture before you arrive?", "Fragile surfaces are better protected in advance. Film, cardboard and corner protection can be discussed."], ["Can you move a fridge or washing machine?", "Yes, appliance moving is possible when size, weight and floor details are known."]],
    related: ["assembly", "apartment", "movers"],
    image: "/assets/service-furniture-moving.webp",
    imageAlt: "Furniture and appliances secured inside a van"
  },
  {
    id: "assembly",
    lang: "en",
    slug: "furniture-assembly-tbilisi",
    title: "Furniture Assembly and Disassembly in Tbilisi | BoxMove",
    description: "Furniture disassembly and assembly in Tbilisi before a move or delivery. Prepare wardrobes, beds, tables and large furniture with BoxMove.",
    h1: "Furniture Assembly and Disassembly in Tbilisi",
    cardTitle: "Furniture assembly",
    cardText: "Large furniture can be prepared before moving and assembled at the new address.",
    lead: "BoxMove can disassemble large furniture before transport and assemble it again at the new address by agreement.",
    detail: "This is useful when wardrobes, beds, tables or shelving do not pass through narrow doors, corridors or elevators. Photos and approximate dimensions help us understand the work before arrival.",
    suitable: ["disassembling wardrobes, beds, tables or shelving", "preparing furniture for an apartment move", "moving large furniture through narrow access points", "assembling furniture after delivery"],
    steps: ["Send photos and describe the furniture.", "We clarify dimensions, fasteners, floor and elevator access.", "The team disassembles and prepares items for loading.", "After delivery, assembly can be completed by agreement."],
    cost: "Price depends on the number of items, complexity of fasteners, working time, floor access, packing and whether assembly is needed after transport.",
    advantages: ["easy to add to a move", "helps with bulky furniture", "parts can be packed by agreement", "quote based on the real task"],
    faq: [["What furniture can be disassembled?", "Wardrobes, beds, tables, shelving and other large furniture can usually be discussed after photos are sent."], ["Do you assemble it after transport?", "Yes, assembly at the new address can be agreed together with the move."], ["Should I keep the fasteners?", "Yes, it is best to place fasteners in a separate marked bag or box."]],
    related: ["furniture", "apartment", "movers"],
    image: "/assets/service-furniture-assembly.webp",
    imageAlt: "Furniture disassembly and assembly before moving"
  },
  {
    id: "apartment",
    lang: "en",
    slug: "apartment-moving-tbilisi",
    title: "Apartment Moving in Tbilisi — Van and Movers | BoxMove",
    description: "Apartment moving in Tbilisi with a van, driver and movers. Move furniture, appliances, boxes and personal belongings.",
    h1: "Apartment Moving in Tbilisi",
    cardTitle: "Apartment moving",
    cardText: "Furniture, appliances, boxes and personal belongings moved with movers on request.",
    lead: "BoxMove helps organize apartment moving in Tbilisi: furniture, appliances, boxes, personal items and bulky objects.",
    detail: "An apartment move usually needs more preparation than a simple delivery. We clarify the list of items, floors, elevator access, packing, furniture disassembly and number of movers so the move is calm and predictable.",
    suitable: ["moving from one apartment to another", "transporting furniture, appliances and boxes", "partial moves or single large items", "moves with movers and packing"],
    steps: ["Prepare an approximate item list or send photos.", "We clarify addresses, floors, elevator and packing.", "The team arrives with a van and movers.", "Items are loaded, transported and unloaded at the new address."],
    cost: "Apartment moving price depends on volume, movers, floors, elevator access, packing, furniture disassembly and distance between addresses.",
    advantages: ["team matched to item volume", "loading and unloading", "packing on request", "furniture disassembly and assembly"],
    faq: [["How many movers do I need?", "It depends on volume, floors and item weight. We suggest the number after details are sent."], ["Can you move without an elevator?", "Yes, but floors and item volume must be known for a correct quote."], ["Can you help with packing?", "Packing materials can be discussed before the move."]],
    related: ["furniture", "assembly", "movers"],
    image: "/assets/service-apartment-move.webp",
    imageAlt: "Apartment move with BoxMove van and movers"
  },
  {
    id: "office",
    lang: "en",
    slug: "office-moving-tbilisi",
    title: "Office Moving in Tbilisi — Furniture and Equipment | BoxMove",
    description: "Office moving in Tbilisi for desks, chairs, equipment, documents and business items. Order a van and movers from BoxMove.",
    h1: "Office Moving in Tbilisi",
    cardTitle: "Office moving",
    cardText: "Desks, chairs, documents, electronics and company items moved by agreement.",
    lead: "BoxMove helps move offices, small stores and workspaces in Tbilisi with a van, driver and movers.",
    detail: "Office moving often includes desks, chairs, shelves, documents, monitors, printers and packed equipment. We agree timing, item list and access details in advance to reduce downtime.",
    suitable: ["moving a small or medium office", "transporting desks, chairs and shelves", "moving boxes with documents", "relocating equipment and work supplies"],
    steps: ["Send the item list, photos and addresses.", "We clarify floors, elevator, parking and preferred time.", "The team arrives with the van and movers.", "Items are loaded, transported and placed at the new location."],
    cost: "Office moving is quoted individually based on volume, floors, number of movers, packing, route and agreed working time.",
    advantages: ["planned timing", "movers on request", "careful handling of equipment", "suitable for office furniture and boxes"],
    faq: [["Can you move office equipment?", "Yes, monitors, printers and packed equipment can be transported when dimensions and packing are known."], ["Can the move be done outside busy hours?", "Time can be discussed in advance depending on team availability."], ["Do you move documents?", "Yes, packed document boxes can be included in the move."]],
    related: ["movers", "assembly", "cargo"],
    image: "/assets/service-office-move.webp",
    imageAlt: "Office move with BoxMove boxes and van"
  },
  {
    id: "movers",
    lang: "en",
    slug: "movers-tbilisi",
    title: "Movers in Tbilisi — Loading and Unloading | BoxMove",
    description: "Movers in Tbilisi for loading, unloading, carrying furniture, appliances and boxes. Order movers with a van or separately.",
    h1: "Movers in Tbilisi",
    cardTitle: "Movers",
    cardText: "Carrying by stairs, loading, unloading and moving furniture or boxes.",
    lead: "BoxMove movers help with carrying, loading, unloading and moving furniture, appliances, boxes and bulky items in Tbilisi.",
    detail: "Movers can be added to van transport or discussed as separate help when you need carrying inside a building. Floors, elevator access and item weight are important for a correct quote.",
    suitable: ["loading or unloading a van", "carrying furniture by stairs", "moving boxes and appliances", "helping with apartment or office moves"],
    steps: ["Describe what needs to be carried.", "Share floor, elevator and access details.", "We agree the number of movers and time.", "Movers complete the carrying, loading or unloading work."],
    cost: "The cost depends on working time, number of movers, floors, elevator access, item weight and complexity of carrying.",
    advantages: ["can be ordered with a van", "help with stairs and elevators", "useful for heavy items", "clear quote before the work starts"],
    faq: [["Can I order movers without a van?", "This can be discussed depending on the task and team availability."], ["How many movers are needed?", "Usually it depends on item weight, floors and total volume."], ["Can movers carry appliances?", "Yes, if weight, dimensions and access conditions are known in advance."]],
    related: ["furniture", "assembly", "apartment"],
    image: "/assets/service-loaders.webp",
    imageAlt: "Movers carrying furniture near a building"
  },
  {
    id: "junk",
    lang: "en",
    slug: "junk-removal-tbilisi",
    title: "Junk Removal in Tbilisi — Old Furniture and Waste | BoxMove",
    description: "Junk removal in Tbilisi for old furniture, renovation waste and unwanted items. Loading and transport by BoxMove.",
    h1: "Junk Removal in Tbilisi",
    cardTitle: "Junk removal",
    cardText: "Removal of renovation waste, old furniture and unwanted items.",
    lead: "BoxMove helps remove renovation waste, old furniture and unwanted items after renovation, moving or clearing a room in Tbilisi.",
    detail: "We transport agreed waste and unwanted items to suitable receiving points for this type of cargo after the volume, address and item type are clarified.",
    suitable: ["removing old furniture", "clearing renovation waste", "emptying an apartment, office or room", "adding movers for carrying"],
    steps: ["Describe the type and approximate volume.", "Share address, floor, elevator and parking details.", "We agree the vehicle, movers and time.", "The team loads and removes the agreed volume."],
    cost: "Price depends on volume, weight, floors, movers, working time and route. A fixed quote is not given without understanding the volume.",
    advantages: ["loading on request", "suitable for old furniture and items", "quote based on volume and complexity", "work across Tbilisi"],
    faq: [["Where do you take renovation waste?", "We take agreed waste and unwanted items to suitable receiving points for this type of cargo. Please clarify the item type in advance."], ["Can you remove old furniture?", "Yes, old furniture removal can be discussed when volume, floor and disassembly needs are known."], ["Do I need movers?", "If items need to be carried from an apartment or office, movers are usually worth adding."]],
    related: ["movers", "taxi", "cargo"],
    image: "/assets/service-junk-removal.webp",
    imageAlt: "Removal of renovation waste with loading"
  },
  {
    id: "georgia",
    lang: "en",
    slug: "cargo-transportation-georgia",
    title: "Cargo Transport Across Georgia — Intercity Moving | BoxMove",
    description: "Intercity cargo transport across Georgia. Move furniture, appliances, boxes and commercial goods between Georgian cities.",
    h1: "Cargo Transport Across Georgia",
    cardTitle: "Cargo transport across Georgia",
    cardText: "Intercity transport between Georgian cities.",
    lead: "BoxMove arranges intercity cargo transport across Georgia: furniture, appliances, boxes, equipment, commercial goods, apartment moves and office moves between cities.",
    detail: "Routes across Georgia are calculated by distance, cargo volume, weight and timing. We clarify departure city, destination city, addresses, loading conditions and whether movers are needed at each address.",
    suitable: ["moving items between Georgian cities", "delivering furniture or appliances across Georgia", "transporting business goods between cities", "organizing an intercity move"],
    steps: ["Send the departure city, destination city and addresses.", "Describe cargo weight, volume and mover needs.", "We agree the route, departure time and quote.", "Cargo is delivered to the address while the team stays in contact."],
    cost: "Intercity price depends on distance, volume, weight, departure time, waiting and loading or unloading work. The quote is calculated individually.",
    areaText: "We arrange intercity routes between Georgian cities, including Tbilisi, Batumi, Kutaisi, Rustavi, Gori, Telavi, Zugdidi, Poti, Borjomi and other destinations by agreement.",
    advantages: ["routes between Georgian cities", "furniture, personal items and goods", "movers on request at addresses", "agreed departure time"],
    faq: [["Which cities do you serve?", "The site lists routes across Georgia, including Batumi, Kutaisi and Rustavi. Please confirm your destination before ordering."], ["How is the price calculated?", "Distance, volume, weight, departure time, waiting, floors and movers are considered."], ["Can I book an intercity apartment move?", "Yes, furniture, appliances, boxes and personal belongings can be discussed for intercity moving."]],
    related: ["cargo", "apartment", "taxi"],
    image: "/assets/service-georgia-transport.webp",
    imageAlt: "BoxMove van on a cargo route across Georgia"
  },
  {
    id: "cargo",
    lang: "ka",
    slug: "tvirtis-gadazidva-tbilisi",
    title: "ტვირთის გადაზიდვა თბილისში — ფურგონი და მტვირთავები | BoxMove",
    description: "ტვირთის გადაზიდვა თბილისში ავეჯისთვის, ტექნიკისთვის, ყუთებისთვის და კომერციული ტვირთისთვის. შეუკვეთეთ ფურგონი, მძღოლი და მტვირთავები.",
    h1: "ტვირთის გადაზიდვა თბილისში",
    cardTitle: "ტვირთის გადაზიდვა თბილისში",
    cardText: "ფურგონი, მძღოლი და მტვირთავები ავეჯისთვის, ტექნიკისთვის, ყუთებისთვის და ტვირთისთვის.",
    lead: "BoxMove გეხმარებათ ავეჯის, ტექნიკის, ყუთების, სამშენებლო მასალების და კომერციული ტვირთის გადაზიდვაში თბილისში.",
    detail: "სერვისი გამოდგება ერთჯერადი მიწოდებისთვის, ბინის ან ოფისის გადატანისთვის, მაღაზიის შეკვეთისთვის და თბილისიდან სხვა ქალაქში მარშრუტისთვის. წინასწარ ვაზუსტებთ მოცულობას, წონას, სართულს, ლიფტს, შეფუთვას და მისამართების რაოდენობას.",
    suitable: ["ავეჯისა და ტექნიკის გადატანა", "ყუთების, ნივთების ან აღჭურვილობის მიწოდება", "ბინის, ოფისის ან მაღაზიის გადატანა", "ტვირთის გაგზავნა თბილისიდან სხვა ქალაქში"],
    steps: ["მოგვწერეთ ტვირთის აღწერა და მისამართები.", "ვაზუსტებთ დროს, სართულებს, ლიფტს და მტვირთავებს.", "ფურგონი მოდის შეთანხმებულ დროს.", "ტვირთი ფრთხილად იტვირთება, მაგრდება და მიდის მისამართზე."],
    cost: "ქალაქში გადაზიდვის მინიმალური ორიენტირი საიტზე იწყება 50 ₾-დან. ზუსტი ფასი დამოკიდებულია მარშრუტზე, მოცულობაზე, წონაზე, სართულებზე, ლოდინზე, მტვირთავებზე და დამატებით სერვისებზე.",
    advantages: ["ფურგონი მძღოლით", "მტვირთავები მოთხოვნით", "მარშრუტები თბილისში და საქართველოში", "ფრთხილი ჩატვირთვა და დამაგრება"],
    faq: [["რა ღირს ტვირთის გადაზიდვა თბილისში?", "ორიენტირი იწყება 50 ₾-დან. ზუსტი ფასი დამოკიდებულია მარშრუტზე, მოცულობაზე, სართულებზე, მტვირთავებზე და სამუშაო დროზე."], ["შეიძლება მხოლოდ მანქანის შეკვეთა?", "დიახ, შეგიძლიათ შეუკვეთოთ ფურგონი მძღოლით ან დაამატოთ მტვირთავები."], ["რა ტვირთის გადატანა შეიძლება?", "ავეჯი, ტექნიკა, ყუთები, პირადი ნივთები, სამშენებლო მასალები, აღჭურვილობა და მცირე კომერციული ტვირთი."], ["მუშაობთ თბილისის გარეთ?", "დიახ, შესაძლებელია მარშრუტები თბილისიდან საქართველოს სხვა ქალაქებში."]],
    related: ["taxi", "furniture", "georgia"],
    image: "/assets/service-cargo-tbilisi.webp",
    imageAlt: "BoxMove ფურგონი ტვირთის გადაზიდვისთვის თბილისში"
  },
  {
    id: "taxi",
    lang: "ka",
    slug: "satvirto-taqsi-tbilisi",
    title: "სატვირთო ტაქსი თბილისში — ფურგონის შეკვეთა | BoxMove",
    description: "სატვირთო ტაქსი თბილისში ავეჯის, ტექნიკის, ყუთების და მცირე ტვირთის გადასატანად. სწრაფი დათვლა WhatsApp-ში.",
    h1: "სატვირთო ტაქსი თბილისში",
    cardTitle: "სატვირთო ტაქსი",
    cardText: "სწრაფი ფურგონი ყუთებისთვის, შენაძენებისთვის, ტექნიკისთვის და მცირე ტვირთისთვის.",
    lead: "სატვირთო ტაქსი მოსახერხებელია, როცა თბილისში ერთი ან რამდენიმე ნივთის სწრაფად გადატანა გჭირდებათ სრული გადატანის ორგანიზების გარეშე.",
    detail: "სერვისი უხდება მაღაზიიდან ნივთის წამოღებას, მცირე ავეჯის მიწოდებას, ტექნიკის გადატანას და მოკლე ქალაქურ მარშრუტებს. გასვლამდე ვაზუსტებთ ზომას, წონას და სართულს.",
    suitable: ["მაღაზიიდან შენაძენის წამოღება", "ყუთების ან აღჭურვილობის გადატანა", "ერთი-ორი ავეჯის ნივთის გადაზიდვა", "თბილისის უბნებს შორის სწრაფი მიწოდება"],
    steps: ["გვითხარით, რა არის გადასატანი და საიდან.", "გამოგვიგზავნეთ მიტანის მისამართი და სასურველი დრო.", "ვათანხმებთ მანქანას, საჭირო მტვირთავებს და ფასის ორიენტირს.", "ფურგონი იღებს ტვირთს და მიაქვს მისამართზე."],
    cost: "ქალაქში გადაზიდვის ორიენტირი იწყება 50 ₾-დან. საბოლოო ფასი დამოკიდებულია მანძილზე, ტვირთის ზომაზე, სართულებზე და მტვირთავებზე.",
    advantages: ["სწრაფი ქალაქური გამოძახება", "გამოდგება მცირე ტვირთისთვის", "შესაძლებელია მტვირთავის დამატება", "დათვლა გასვლამდე"],
    faq: [["შეიძლება ფურგონის შეკვეთა დღეს?", "დიახ, თუ თავისუფალი დრო არის. თბილისში ხშირად შესაძლებელია იმავე დღეს მომსახურება."], ["მტვირთავები შედის ფასში?", "მტვირთავები ემატება მოთხოვნით. თუ დახმარება არ გჭირდებათ, შეგიძლიათ მხოლოდ ფურგონი მძღოლით შეუკვეთოთ."], ["ტექნიკის გადატანა შეიძლება?", "დიახ, თუ წინასწარ ვიცით ზომა, წონა და სართული."]],
    related: ["cargo", "furniture", "movers"],
    image: "/assets/service-taxi-tbilisi.webp",
    imageAlt: "BoxMove ფურგონი სატვირთო ტაქსისთვის თბილისში"
  },
  {
    id: "furniture",
    lang: "ka",
    slug: "avejis-gadazidva-tbilisi",
    title: "ავეჯის გადაზიდვა თბილისში მტვირთავებით | BoxMove",
    description: "ავეჯის ფრთხილი გადაზიდვა თბილისში. დივნები, კარადები, მაგიდები, ტექნიკა და ყუთები BoxMove-ის მტვირთავებით.",
    h1: "ავეჯის გადაზიდვა თბილისში",
    cardTitle: "ავეჯის გადაზიდვა",
    cardText: "ფრთხილი ჩატვირთვა, ფურგონში განთავსება და მიტანა საჭირო მისამართზე.",
    lead: "BoxMove გადაიტანს დივნებს, კარადებს, მაგიდებს, საწოლებს, სკამებს და სხვა ავეჯს თბილისში.",
    detail: "ავეჯის გადატანისას მნიშვნელოვანია ზომები, ლიფტი, შესასვლელები და ზედაპირების დაცვა. ამ დეტალებს წინასწარ ვაზუსტებთ, რომ გუნდი მომზადებული მოვიდეს.",
    suitable: ["დივნის, კარადის, საწოლის ან მაგიდის გადატანა", "ავეჯის მიწოდება მაღაზიიდან ან სახელოსნოდან", "ავეჯის გადატანა ბინებს შორის", "შეფუთვის, დაშლის და აწყობის დამატება"],
    steps: ["აღწერეთ ავეჯი და თუ შეგიძლიათ, ფოტო გამოგვიგზავნეთ.", "მოგვწერეთ სართული, ლიფტი და მანქანის გაჩერების შესაძლებლობა.", "ვათანხმებთ ფურგონს, მტვირთავებს და შეფუთვას.", "ავეჯი გადადის ფრთხილად და მიდის ახალ მისამართზე."],
    cost: "ფასი დამოკიდებულია ნივთების რაოდენობაზე და ზომაზე, სართულებზე, ლიფტზე, დაშლაზე, შეფუთვაზე, მარშრუტზე და სამუშაო დროზე.",
    advantages: ["ფრთხილი გადატანა", "მტვირთავები მოთხოვნით", "შეფუთვა წინასწარი შეთანხმებით", "დიდი ავეჯის დაშლა და აწყობა"],
    faq: [["შეგიძლიათ ავეჯის დაშლა გადატანამდე?", "დიახ, დაშლა და აწყობა შეიძლება წინასწარ შეთანხმდეს, თუ ავეჯი კარში, კიბეზე ან ლიფტში არ ეტევა."], ["ავეჯი წინასწარ უნდა შევფუთო?", "მყიფე ზედაპირების დაცვა ჯობს წინასწარ. ფირი, მუყაო და კუთხეების დაცვა შეიძლება განვიხილოთ."], ["მაცივრის ან სარეცხი მანქანის გადატანა შეიძლება?", "დიახ, ტექნიკის გადატანა შესაძლებელია, თუ ზომა, წონა და სართული ცნობილია."]],
    related: ["assembly", "apartment", "movers"],
    image: "/assets/service-furniture-moving.webp",
    imageAlt: "ავეჯი და ტექნიკა ფურგონში დამაგრებულია"
  },
  {
    id: "assembly",
    lang: "ka",
    slug: "avejis-dashla-atsyoba-tbilisi",
    title: "ავეჯის დაშლა-აწყობა თბილისში | BoxMove",
    description: "ავეჯის დაშლა-აწყობა თბილისში გადატანის წინ ან მიწოდების შემდეგ. კარადები, საწოლები, მაგიდები და დიდი ავეჯი წინასწარი შეთანხმებით.",
    h1: "ავეჯის დაშლა-აწყობა თბილისში",
    cardTitle: "ავეჯის დაშლა-აწყობა",
    cardText: "დიდი ავეჯის მომზადება გადატანამდე და აწყობა ახალ მისამართზე.",
    lead: "BoxMove დაგეხმარებათ დიდი ავეჯის დაშლაში გადატანამდე და აწყობაში ახალ მისამართზე წინასწარი შეთანხმებით.",
    detail: "ეს სერვისი საჭიროა, როცა კარადა, საწოლი, მაგიდა ან თარო ვერ გადის კარში, კორიდორში ან ლიფტში. ფოტოები და ზომები გვეხმარება სამუშაოს სწორად შეფასებაში.",
    suitable: ["კარადის, საწოლის, მაგიდის ან თაროს დაშლა", "ავეჯის მომზადება ბინის გადატანისთვის", "დიდი ავეჯის გატანა ვიწრო სივრცეებიდან", "ავეჯის აწყობა მიწოდების შემდეგ"],
    steps: ["გამოგვიგზავნეთ ფოტოები და აღწერა.", "ვაზუსტებთ ზომებს, სამაგრებს, სართულს და ლიფტს.", "გუნდი შლის ავეჯს და ამზადებს ჩატვირთვისთვის.", "მიწოდების შემდეგ აწყობა შესაძლებელია შეთანხმებით."],
    cost: "ფასი დამოკიდებულია ნივთების რაოდენობაზე, სამაგრების სირთულეზე, სამუშაო დროზე, სართულებზე, შეფუთვაზე და იმაზე, საჭიროა თუ არა აწყობა გადატანის შემდეგ.",
    advantages: ["ადვილად ემატება გადატანას", "ეხმარება დიდი ავეჯის გადატანაში", "დეტალების შეფუთვა შეიძლება შეთანხმდეს", "დათვლა რეალური სამუშაოს მიხედვით"],
    faq: [["რომელი ავეჯის დაშლა შეიძლება?", "კარადები, საწოლები, მაგიდები, თაროები და სხვა დიდი ავეჯი შეიძლება განვიხილოთ ფოტოებისა და ზომების შემდეგ."], ["მიწოდების შემდეგ აწყობაც შეგიძლიათ?", "დიახ, ახალ მისამართზე აწყობა შეიძლება წინასწარ შეთანხმდეს."], ["სამაგრები როგორ შევინახო?", "სჯობს სამაგრები ცალკე პაკეტში ან ყუთში ჩადოთ და მონიშნოთ."]],
    related: ["furniture", "apartment", "movers"],
    image: "/assets/service-furniture-assembly.webp",
    imageAlt: "ავეჯის დაშლა და აწყობა გადატანის წინ"
  },
  {
    id: "apartment",
    lang: "ka",
    slug: "binis-gadatana-tbilisi",
    title: "ბინის გადატანა თბილისში — ფურგონი და მტვირთავები | BoxMove",
    description: "ბინის გადატანა თბილისში ფურგონით, მძღოლით და მტვირთავებით. ავეჯი, ტექნიკა, ყუთები და პირადი ნივთები.",
    h1: "ბინის გადატანა თბილისში",
    cardTitle: "ბინის გადატანა",
    cardText: "ავეჯის, ტექნიკის, ყუთების და პირადი ნივთების გადატანა მტვირთავებით მოთხოვნის შემთხვევაში.",
    lead: "BoxMove გეხმარებათ ბინის გადატანაში თბილისში: ავეჯი, ტექნიკა, ყუთები, პირადი ნივთები და დიდი საგნები.",
    detail: "ბინის გადატანა ჩვეულებრივ მეტ მომზადებას ითხოვს, ვიდრე უბრალო მიწოდება. წინასწარ ვაზუსტებთ ნივთების სიას, სართულებს, ლიფტს, შეფუთვას, ავეჯის დაშლას და მტვირთავების რაოდენობას.",
    suitable: ["ბინიდან ბინაში გადასვლა", "ავეჯის, ტექნიკის და ყუთების გადატანა", "ნაწილობრივი გადატანა ან ერთი დიდი ნივთი", "გადატანა მტვირთავებით და შეფუთვით"],
    steps: ["მოამზადეთ ნივთების მოკლე სია ან გამოგვიგზავნეთ ფოტოები.", "ვაზუსტებთ მისამართებს, სართულებს, ლიფტს და შეფუთვას.", "გუნდი მოდის ფურგონით და მტვირთავებით.", "ნივთები იტვირთება, გადადის და იცლება ახალ მისამართზე."],
    cost: "ბინის გადატანის ფასი დამოკიდებულია მოცულობაზე, მტვირთავებზე, სართულებზე, ლიფტზე, შეფუთვაზე, ავეჯის დაშლაზე და მისამართებს შორის მანძილზე.",
    advantages: ["გუნდი ნივთების მოცულობის მიხედვით", "ჩატვირთვა და გადმოტვირთვა", "შეფუთვა მოთხოვნით", "ავეჯის დაშლა და აწყობა"],
    faq: [["რამდენი მტვირთავია საჭირო?", "ეს დამოკიდებულია ნივთების რაოდენობაზე, სართულებზე და წონაზე. რაოდენობას დეტალების შემდეგ გირჩევთ."], ["ლიფტის გარეშე მუშაობთ?", "დიახ, მაგრამ სართული და ნივთების მოცულობა წინასწარ უნდა ვიცოდეთ."], ["შეფუთვაშიც დამეხმარებით?", "შეფუთვის მასალები შეიძლება წინასწარ შეთანხმდეს."]],
    related: ["furniture", "assembly", "movers"],
    image: "/assets/service-apartment-move.webp",
    imageAlt: "ბინის გადატანა BoxMove ფურგონით და მტვირთავებით"
  },
  {
    id: "office",
    lang: "ka",
    slug: "ofisis-gadatana-tbilisi",
    title: "ოფისის გადატანა თბილისში — ავეჯი და ტექნიკა | BoxMove",
    description: "ოფისის გადატანა თბილისში მაგიდებისთვის, სკამებისთვის, ტექნიკისთვის, დოკუმენტებისთვის და კომპანიის ნივთებისთვის.",
    h1: "ოფისის გადატანა თბილისში",
    cardTitle: "ოფისის გადატანა",
    cardText: "მაგიდები, სკამები, დოკუმენტები, ტექნიკა და კომპანიის ქონება.",
    lead: "BoxMove ეხმარება ოფისებს, მცირე მაღაზიებს და სამუშაო სივრცეებს თბილისში ფურგონით, მძღოლით და მტვირთავებით.",
    detail: "ოფისის გადატანაში ხშირად შედის მაგიდები, სკამები, თაროები, დოკუმენტები, მონიტორები, პრინტერები და შეფუთული ტექნიკა. დროს, ნივთების სიას და მისასვლელებს წინასწარ ვათანხმებთ.",
    suitable: ["მცირე ან საშუალო ოფისის გადატანა", "მაგიდების, სკამების და თაროების გადატანა", "დოკუმენტების ყუთების გადაზიდვა", "ტექნიკის და სამუშაო ნივთების გადატანა"],
    steps: ["გამოგვიგზავნეთ ნივთების სია, ფოტოები და მისამართები.", "ვაზუსტებთ სართულებს, ლიფტს, პარკინგს და დროს.", "გუნდი მოდის ფურგონით და მტვირთავებით.", "ნივთები იტვირთება, გადადის და ახალ ადგილას თავსდება."],
    cost: "ოფისის გადატანა ითვლება ინდივიდუალურად: მოცულობა, სართულები, მტვირთავები, შეფუთვა, მარშრუტი და შეთანხმებული სამუშაო დრო.",
    advantages: ["დრო წინასწარ იგეგმება", "მტვირთავები მოთხოვნით", "ტექნიკის ფრთხილი გადატანა", "ოფისის ავეჯისა და ყუთებისთვის შესაფერისი"],
    faq: [["ოფისის ტექნიკასაც გადაიტანთ?", "დიახ, მონიტორები, პრინტერები და შეფუთული ტექნიკა შეიძლება გადავიტანოთ, თუ ზომები და შეფუთვა ცნობილია."], ["შეიძლება გადატანა არასამუშაო დროს?", "დრო წინასწარ შეთანხმდება გუნდის თავისუფალი დროის მიხედვით."], ["დოკუმენტების ყუთებს გადაიტანთ?", "დიახ, შეფუთული დოკუმენტების ყუთები შეიძლება შევიტანოთ შეკვეთაში."]],
    related: ["movers", "assembly", "cargo"],
    image: "/assets/service-office-move.webp",
    imageAlt: "ოფისის გადატანა BoxMove ყუთებით და ფურგონით"
  },
  {
    id: "movers",
    lang: "ka",
    slug: "mtvirtavebi-tbilisi",
    title: "მუშა-მტვირთავები თბილისში — ჩატვირთვა და გადმოტვირთვა | BoxMove",
    description: "მუშა-მტვირთავები თბილისში ავეჯის, ტექნიკის, ყუთების ატანისთვის, ჩატვირთვისთვის და გადმოტვირთვისთვის. ფურგონთან ერთად ან ცალკე შეთანხმებით.",
    h1: "მუშა-მტვირთავები თბილისში",
    cardTitle: "მუშა-მტვირთავები",
    cardText: "ატანა, ჩამოტანა, ჩატვირთვა, გადმოტვირთვა და ავეჯის ან ყუთების გადატანა.",
    lead: "BoxMove-ის მუშა-მტვირთავები დაგეხმარებიან ავეჯის, ტექნიკის, ყუთების და დიდი ნივთების ატანაში, ჩამოტანაში, ჩატვირთვასა და გადმოტვირთვაში თბილისში.",
    detail: "მტვირთავები შეიძლება დაემატოს ფურგონს ან ცალკე შეთანხმდეს, როცა შენობაში ნივთების გადატანა გჭირდებათ. სწორი დათვლისთვის მნიშვნელოვანია სართული, ლიფტი და ნივთების წონა.",
    suitable: ["ფურგონის ჩატვირთვა ან გადმოტვირთვა", "ავეჯის კიბით ატანა ან ჩამოტანა", "ყუთებისა და ტექნიკის გადატანა", "ბინის ან ოფისის გადატანის დახმარება"],
    steps: ["აღწერეთ, რა არის გადასატანი.", "მოგვწერეთ სართული, ლიფტი და მისასვლელი.", "ვათანხმებთ მტვირთავების რაოდენობას და დროს.", "მტვირთავები ასრულებენ ატანას, ჩატვირთვას ან გადმოტვირთვას."],
    cost: "ფასი დამოკიდებულია სამუშაო დროზე, მტვირთავების რაოდენობაზე, სართულებზე, ლიფტზე, ნივთების წონაზე და სირთულეზე.",
    advantages: ["შეიძლება ფურგონთან ერთად", "დახმარება კიბეზე და ლიფტთან", "გამოდგება მძიმე ნივთებისთვის", "დათვლა სამუშაოს დაწყებამდე"],
    faq: [["მტვირთავების შეკვეთა მანქანის გარეშე შეიძლება?", "შესაძლებელია შეთანხმებით, სამუშაოს ტიპისა და გუნდის თავისუფალი დროის მიხედვით."], ["რამდენი მტვირთავია საჭირო?", "ჩვეულებრივ ეს დამოკიდებულია ნივთების წონაზე, სართულებზე და მთლიან მოცულობაზე."], ["ტექნიკის ატანა შეგიძლიათ?", "დიახ, თუ წინასწარ ვიცით წონა, ზომა და მისასვლელი პირობები."]],
    related: ["furniture", "assembly", "apartment"],
    image: "/assets/service-loaders.webp",
    imageAlt: "მტვირთავები ავეჯს შენობასთან ატარებენ"
  },
  {
    id: "junk",
    lang: "ka",
    slug: "nagvis-gatana-tbilisi",
    title: "ნაგვისა და სამშენებლო ნარჩენების გატანა თბილისში | BoxMove",
    description: "ნაგვის გატანა თბილისში ძველი ავეჯისთვის, სამშენებლო ნარჩენებისთვის და ზედმეტი ნივთებისთვის. ჩატვირთვა და ტრანსპორტირება BoxMove-ით.",
    h1: "ნაგვის გატანა თბილისში",
    cardTitle: "ნარჩენების გატანა",
    cardText: "სამშენებლო ნარჩენების, ძველი ავეჯის და ზედმეტი ნივთების გატანა.",
    lead: "BoxMove გეხმარებათ სამშენებლო ნარჩენების, ძველი ავეჯის და ზედმეტი ნივთების გატანაში რემონტის, გადატანის ან სივრცის დაცლის შემდეგ.",
    detail: "შეთანხმებულ ნარჩენებს და ზედმეტ ნივთებს ვიტანთ შესაბამის მიმღებ პუნქტებში მას შემდეგ, რაც მოცულობას, მისამართს და ტვირთის ტიპს დავაზუსტებთ.",
    suitable: ["ძველი ავეჯის გატანა", "რემონტის ნარჩენების გატანა", "ბინის, ოფისის ან ოთახის დაცლა", "მტვირთავების დამატება ჩატვირთვისთვის"],
    steps: ["აღწერეთ ტიპი და დაახლოებით მოცულობა.", "მოგვწერეთ მისამართი, სართული, ლიფტი და პარკინგი.", "ვათანხმებთ მანქანას, მტვირთავებს და დროს.", "გუნდი ტვირთავს და გააქვს შეთანხმებული მოცულობა."],
    cost: "ფასი დამოკიდებულია მოცულობაზე, წონაზე, სართულებზე, მტვირთავებზე, სამუშაო დროზე და მარშრუტზე. ფიქსირებული ფასი მოცულობის გაგების გარეშე არ იწერება.",
    advantages: ["ჩატვირთვა მოთხოვნით", "გამოდგება ძველი ავეჯისა და ნივთებისთვის", "დათვლა მოცულობის და სირთულის მიხედვით", "მუშაობა თბილისში"],
    faq: [["სად გაგაქვთ რემონტის ნარჩენები?", "შეთანხმებულ ნარჩენებს და ზედმეტ ნივთებს ვიტანთ შესაბამის მიმღებ პუნქტებში. ტვირთის ტიპი წინასწარ დააზუსტეთ."], ["ძველი ავეჯის გატანა შეიძლება?", "დიახ, ძველი ავეჯის გატანა შეიძლება განვიხილოთ, თუ მოცულობა, სართული და დაშლის საჭიროება ცნობილია."], ["მტვირთავები საჭიროა?", "თუ ნივთები ბინიდან ან ოფისიდან არის გამოსატანი, მტვირთავების დამატება ხშირად საჭიროა."]],
    related: ["movers", "taxi", "cargo"],
    image: "/assets/service-junk-removal.webp",
    imageAlt: "რემონტის ნარჩენების გატანა ჩატვირთვით"
  },
  {
    id: "georgia",
    lang: "ka",
    slug: "tvirtis-gadazidva-sakartvelo",
    title: "ტვირთის გადაზიდვა საქართველოს მასშტაბით — ქალაქებს შორის | BoxMove",
    description: "ქალაქებს შორის ტვირთის გადაზიდვა საქართველოს მასშტაბით. ავეჯი, ტექნიკა, ყუთები და კომერციული ტვირთი შეთანხმებული მარშრუტით.",
    h1: "ტვირთის გადაზიდვა საქართველოში",
    cardTitle: "გადაზიდვები საქართველოში",
    cardText: "ქალაქებს შორის გადაზიდვები საქართველოს მასშტაბით.",
    lead: "BoxMove აწყობს ქალაქებს შორის ტვირთის გადაზიდვას საქართველოს მასშტაბით: ავეჯი, ტექნიკა, ყუთები, აღჭურვილობა, კომერციული ტვირთი, ბინისა და ოფისის გადატანა.",
    detail: "საქართველოს მიმართულებები ითვლება მანძილის, ტვირთის მოცულობის, წონის და დროის მიხედვით. წინასწარ ვაზუსტებთ გამგზავრების ქალაქს, დანიშნულების ქალაქს, მისამართებს, გასვლის დროს, ჩატვირთვის პირობებს და მტვირთავების საჭიროებას.",
    suitable: ["ნივთების გადატანა საქართველოს ქალაქებს შორის", "ავეჯის ან ტექნიკის მიწოდება საქართველოში", "კომერციული ტვირთის გადაზიდვა ქალაქებს შორის", "ქალაქებს შორის ბინის გადატანა"],
    steps: ["მოგვწერეთ გამგზავრების ქალაქი, დანიშნულება და მისამართები.", "აღწერეთ ტვირთის წონა, მოცულობა და მტვირთავების საჭიროება.", "ვათანხმებთ მარშრუტს, გასვლის დროს და ფასს.", "ტვირთი მიდის მისამართზე, გუნდი კი გზაში კონტაქტზე რჩება."],
    cost: "ქალაქებს შორის ფასი დამოკიდებულია მანძილზე, მოცულობაზე, წონაზე, გასვლის დროზე, ლოდინზე და ჩატვირთვა-გადმოტვირთვის სამუშაოზე. დათვლა ხდება ინდივიდუალურად.",
    areaText: "ვათანხმებთ ქალაქებს შორის მარშრუტებს საქართველოში: თბილისი, ბათუმი, ქუთაისი, რუსთავი, გორი, თელავი, ზუგდიდი, ფოთი, ბორჯომი და სხვა მიმართულებები შეთანხმებით.",
    advantages: ["მარშრუტები საქართველოს ქალაქებს შორის", "ავეჯი, პირადი ნივთები და საქონელი", "მტვირთავები მისამართებზე მოთხოვნით", "გასვლის დრო წინასწარ თანხმდება"],
    faq: [["რომელ ქალაქებში მუშაობთ?", "საიტზე მითითებულია მარშრუტები საქართველოში, მათ შორის ბათუმი, ქუთაისი და რუსთავი. კონკრეტული მიმართულება შეკვეთამდე დააზუსტეთ."], ["როგორ ითვლება ფასი?", "ითვალისწინება მანძილი, მოცულობა, წონა, გასვლის დრო, ლოდინი, სართულები და მტვირთავები."], ["ქალაქებს შორის ბინის გადატანა შეიძლება?", "დიახ, ავეჯის, ტექნიკის, ყუთების და პირადი ნივთების გადატანა სხვა ქალაქში შეიძლება შეთანხმდეს."]],
    related: ["cargo", "apartment", "taxi"],
    image: "/assets/service-georgia-transport.webp",
    imageAlt: "BoxMove ფურგონი საქართველოს მიმართულებით"
  }
].map((service) => ({ ...service, path: `/${service.lang}/${service.slug}/` }));

const allServicePages = [...servicePages, ...localizedServicePages];
const serviceBySlug = new Map(servicePages.map((service) => [service.slug, service]));
const serviceByLangId = new Map(allServicePages.map((service) => [`${service.lang}:${service.id}`, service]));
const serviceAlternatesByPath = new Map();

for (const id of Object.values(serviceIdsByRuSlug)) {
  const group = {};
  for (const lang of Object.keys(homePages)) {
    const service = serviceByLangId.get(`${lang}:${id}`);
    if (service) group[lang] = service.path;
  }
  for (const path of Object.values(group)) {
    serviceAlternatesByPath.set(path, group);
  }
}

const formTypes = {
  ru: ["Грузовое такси", "Переезд", "Переезд под ключ", "Разборка/сборка мебели", "Стройматериалы", "Вывоз мусора", "Межгород"],
  en: ["Cargo taxi", "Moving", "Turnkey moving", "Furniture assembly", "Construction materials", "Junk removal", "Intercity"],
  ka: ["სატვირთო ტაქსი", "გადატანა", "სრული გადატანა", "ავეჯის დაშლა/აწყობა", "სამშენებლო მასალები", "ნარჩენების გატანა", "ქალაქებს შორის"]
};
const formTypeValues = ["taxi", "move", "turnkey", "assembly", "materials", "junk", "intercity"];

const ui = {
  ru: {
    serviceEyebrow: "Что перевозим",
    pricesEyebrow: "Прозрачный расчёт",
    processEyebrow: "Как работаем",
    whyEyebrow: "Почему BoxMove",
    areaEyebrow: "Зона обслуживания",
    quoteEyebrow: "Быстрый расчёт",
    contactEyebrow: "Контакты",
    details: "Подробнее",
    estimateLabel: "Ориентир",
    estimateNote: "Точная цена после уточнения деталей",
    contactCall: "Позвонить",
    contactPhone: "Телефон",
    contactArea: "Зона",
    contactAreaValue: "Тбилиси и вся Грузия",
    contactHours: "Приём заказов",
    hoursValue: company.hours,
    floatingLabel: "Быстрая связь с BoxMove",
    whatsappAria: "Написать BoxMove в WhatsApp",
    telegramAria: "Написать BoxMove в Telegram",
    floatingCall: "Звонок",
    priceCards: [
      ["Грузовое такси", "Городская подача", "Когда нужно быстро перевезти вещи по Тбилиси", ["Фургон с водителем", "Подача по району", "Расчёт до выезда"]],
      ["Переезд с грузчиками", "Переезд с командой", "Для квартиры, офиса или магазина", ["Фургон + грузчики", "Погрузка и выгрузка", "Бережное крепление груза"], "is-featured"],
      ["Межгород", "Маршрут по Грузии", "Тбилиси — Батуми, Кутаиси, Рустави и другие города", ["Согласованное время выезда", "Расчёт по маршруту", "Связь в пути"]]
    ],
    processSteps: [
      "Вы отправляете адреса, фото или описание груза и желаемое время.",
      "Мы уточняем объём, этаж, лифт, необходимость упаковки и грузчиков.",
      "Команда приезжает, аккуратно грузит вещи и закрепляет их в кузове.",
      "Груз доставляется по адресу, выгружается и при необходимости переносится в помещение."
    ],
    stats: [["07:00–23:00", "ежедневный график"], ["40-90 мин", "подача по Тбилиси при свободном слоте"], ["Грузия", "маршруты из Тбилиси"]],
    fleet: ["Фургон для города и трассы", "Mercedes Sprinter / аналог", "Чистый кузов, ремни крепления, пледы и место для крупной мебели."],
    fleetAlt: "Фургон BoxMove в Тбилиси",
    districts: company.districts,
    footerServices: ["Грузоперевозки в Тбилиси", "Грузовое такси", "Перевозка мебели", "Разборка и сборка мебели", "Квартирный переезд", "Офисный переезд", "Услуги грузчиков", "Вывоз мусора", "Грузоперевозки по Грузии"]
  },
  en: {
    serviceEyebrow: "What we move",
    pricesEyebrow: "Clear quote",
    processEyebrow: "Process",
    whyEyebrow: "Why BoxMove",
    areaEyebrow: "Service area",
    quoteEyebrow: "Quick quote",
    contactEyebrow: "Contacts",
    details: "Get quote",
    estimateLabel: "Guide:",
    estimateNote: "Final price after clarifying details",
    contactCall: "Call",
    contactPhone: "Phone",
    contactArea: "Area",
    contactAreaValue: "Tbilisi and all Georgia",
    contactHours: "Order hours",
    hoursValue: "Daily 07:00–23:00. Urgent orders by agreement.",
    floatingLabel: "Quick contact with BoxMove",
    whatsappAria: "Message BoxMove on WhatsApp",
    telegramAria: "Message BoxMove on Telegram",
    floatingCall: "Call",
    priceCards: [
      ["Cargo taxi", "City dispatch", "For quick transport around Tbilisi", ["Van with driver", "Local pickup", "Quote before dispatch"]],
      ["Move with loaders", "Team move", "For apartments, offices or stores", ["Van + loaders", "Loading and unloading", "Safe cargo fastening"], "is-featured"],
      ["Intercity", "Georgia route", "Tbilisi — Batumi, Kutaisi, Rustavi and other cities", ["Agreed departure time", "Route-based quote", "Contact on the road"]]
    ],
    processSteps: [
      "You send the addresses, photos or cargo description and preferred time.",
      "We clarify volume, floor, elevator, packing and loader needs.",
      "The team arrives, loads items carefully and secures them inside the van.",
      "Cargo is delivered, unloaded and carried inside if needed."
    ],
    stats: [["07:00–23:00", "daily hours"], ["40-90 min", "city dispatch when a slot is available"], ["Georgia", "routes from Tbilisi"]],
    fleet: ["City and highway van", "Mercedes Sprinter / similar", "Clean cargo space, fastening straps, blankets and room for large furniture."],
    fleetAlt: "BoxMove van in Tbilisi",
    districts: ["Vake", "Saburtalo", "Didi Dighomi", "Gldani", "Nadzaladevi", "Isani", "Samgori", "Avlabari", "Chugureti", "Mtatsminda", "Ortachala"],
    footerServices: ["Cargo transport in Tbilisi", "Cargo taxi", "Furniture moving", "Furniture assembly", "Apartment moving", "Office relocation", "Loaders", "Junk removal", "Cargo transport across Georgia"]
  },
  ka: {
    serviceEyebrow: "რას გადავიტანთ",
    pricesEyebrow: "გასაგები დათვლა",
    processEyebrow: "როგორ ვმუშაობთ",
    whyEyebrow: "რატომ BoxMove",
    areaEyebrow: "ზონა",
    quoteEyebrow: "სწრაფი დათვლა",
    contactEyebrow: "კონტაქტი",
    details: "დათვლა",
    estimateLabel: "ორიენტირი",
    estimateNote: "ზუსტი ფასი დეტალების დაზუსტების შემდეგ",
    contactCall: "დარეკვა",
    contactPhone: "ტელეფონი",
    contactArea: "ზონა",
    contactAreaValue: "თბილისი და მთელი საქართველო",
    contactHours: "შეკვეთების მიღება",
    hoursValue: "ყოველდღე 07:00–23:00. სასწრაფო შეკვეთები — შეთანხმებით.",
    floatingLabel: "სწრაფი კავშირი BoxMove-თან",
    whatsappAria: "მიწერეთ BoxMove-ს WhatsApp-ში",
    telegramAria: "მიწერეთ BoxMove-ს Telegram-ში",
    floatingCall: "ზარი",
    priceCards: [
      ["სატვირთო ტაქსი", "ქალაქში გამოძახება", "როცა ნივთების სწრაფად გადატანა გჭირდებათ თბილისში", ["ფურგონი მძღოლით", "ადგილობრივი მიწოდება", "დათვლა გასვლამდე"]],
      ["გადატანა მტვირთავებით", "გადატანა გუნდით", "ბინისთვის, ოფისისთვის ან მაღაზიისთვის", ["ფურგონი + მტვირთავები", "ჩატვირთვა და გადმოტვირთვა", "ტვირთის უსაფრთხო დამაგრება"], "is-featured"],
      ["ქალაქებს შორის", "მარშრუტი საქართველოში", "თბილისი — ბათუმი, ქუთაისი, რუსთავი და სხვა ქალაქები", ["შეთანხმებული გასვლის დრო", "მარშრუტის მიხედვით დათვლა", "კავშირი გზაში"]]
    ],
    processSteps: [
      "გვიგზავნით მისამართებს, ფოტოს ან ტვირთის აღწერას და სასურველ დროს.",
      "ვაზუსტებთ მოცულობას, სართულს, ლიფტს, შეფუთვას და მტვირთავებს.",
      "გუნდი მოდის, ფრთხილად ტვირთავს ნივთებს და ამაგრებს ფურგონში.",
      "ტვირთი მიდის მისამართზე, იცლება და საჭიროების შემთხვევაში შედის შენობაში."
    ],
    stats: [["07:00–23:00", "ყოველდღიური გრაფიკი"], ["40-90 წთ", "მიწოდება თბილისში თავისუფალი დროისას"], ["საქართველო", "მარშრუტები თბილისიდან"]],
    fleet: ["ფურგონი ქალაქისთვის და გზისთვის", "Mercedes Sprinter / ანალოგი", "სუფთა საბარგო სივრცე, დამჭერი ღვედები, პლედები და ადგილი დიდი ავეჯისთვის."],
    fleetAlt: "BoxMove ფურგონი თბილისში",
    districts: ["ვაკე", "საბურთალო", "დიდი დიღომი", "გლდანი", "ნაძალადევი", "ისანი", "სამგორი", "ავლაბარი", "ჩუღურეთი", "მთაწმინდა", "ორთაჭალა"],
    footerServices: ["გადაზიდვები თბილისში", "სატვირთო ტაქსი", "ავეჯის გადატანა", "ავეჯის დაშლა/აწყობა", "ბინის გადატანა", "ოფისის გადატანა", "მტვირთავები", "ნარჩენების გატანა", "გადაზიდვები საქართველოში"]
  }
};

function esc(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function url(path) {
  return `${company.domain}${path}`;
}

function sentenceCaseRu(value = "") {
  return value ? value.charAt(0).toLocaleLowerCase("ru-RU") + value.slice(1) : "";
}

function serviceOrderHeading(service) {
  const phrase = sentenceCaseRu(service.h1);
  if (service.slug === "razborka-sborka-mebeli-tbilisi") {
    return "Заказать разборку и сборку мебели в Тбилиси";
  }
  if (service.slug === "perevozka-mebeli-tbilisi") {
    return "Заказать перевозку мебели в Тбилиси";
  }
  return `Заказать ${phrase}`;
}

const servicePageText = {
  en: {
    breadcrumbs: "Breadcrumbs",
    home: "Home",
    services: "Services",
    eyebrow: "BoxMove service",
    primary: "Order service",
    detailTitle: "Service details",
    suitableTitle: "Who this service is for",
    stepsTitle: "How it works",
    costTitle: "Price",
    areaTitle: "Service area",
    areaText: "We work across Tbilisi districts and arrange routes from Tbilisi to other cities in Georgia. In the city, service is available in Vake, Saburtalo, Didi Dighomi, Gldani, Isani, Samgori and central districts.",
    advantagesTitle: "Advantages",
    sideTitle: "Contact BoxMove",
    sideText: "Send the task, addresses, floors and preferred time. We will clarify the details and suggest the right transport format.",
    call: "Call",
    relatedTitle: "Related services",
    faqTitle: "FAQ",
    quoteEyebrow: "Order",
    quotePrefix: "Order",
    quoteText: "The form opens a WhatsApp message. You can also call or write in Telegram.",
    estimateLabel: "Guide",
    estimateNote: "Final price after clarifying details"
  },
  ka: {
    breadcrumbs: "ნავიგაცია",
    home: "მთავარი",
    services: "სერვისები",
    eyebrow: "BoxMove სერვისი",
    primary: "შეკვეთა",
    detailTitle: "სერვისის აღწერა",
    suitableTitle: "ვისთვის არის შესაფერისი",
    stepsTitle: "როგორ მუშაობს",
    costTitle: "ფასი",
    areaTitle: "მომსახურების ზონა",
    areaText: "ვმუშაობთ თბილისის უბნებში და ვათანხმებთ მარშრუტებს თბილისიდან საქართველოს სხვა ქალაქებში. ქალაქში მომსახურება ხელმისაწვდომია ვაკეში, საბურთალოზე, დიდ დიღომში, გლდანში, ისანში, სამგორში და ცენტრალურ უბნებში.",
    advantagesTitle: "უპირატესობები",
    sideTitle: "დაუკავშირდით BoxMove-ს",
    sideText: "მოგვწერეთ ამოცანა, მისამართები, სართულები და სასურველი დრო. დეტალებს დავაზუსტებთ და სწორ ფორმატს შეგირჩევთ.",
    call: "დარეკვა",
    relatedTitle: "დაკავშირებული სერვისები",
    faqTitle: "ხშირი კითხვები",
    quoteEyebrow: "შეკვეთა",
    quotePrefix: "შეუკვეთეთ",
    quoteText: "ფორმა ხსნის WhatsApp შეტყობინებას. ასევე შეგიძლიათ დარეკოთ ან Telegram-ში მოგვწეროთ.",
    estimateLabel: "ორიენტირი",
    estimateNote: "ზუსტი ფასი დეტალების დაზუსტების შემდეგ"
  }
};

function localizedServiceOrderHeading(service) {
  const copy = servicePageText[service.lang] || servicePageText.en;
  return `${copy.quotePrefix} ${service.h1}`;
}

function write(relativePath, content) {
  const filePath = join(rootDir, relativePath);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${content.trim()}\n`, "utf8");
}

function organizationSchema() {
  return {
    "@type": "MovingCompany",
    "@id": `${company.domain}/#organization`,
    name: company.name,
    url: company.domain,
    image: url(company.image),
    telephone: `+${company.phoneCompact}`,
    priceRange: company.priceRange,
    areaServed: [
      { "@type": "City", name: "Tbilisi" },
      { "@type": "Country", name: "Georgia" }
    ],
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "23:00"
    }]
  };
}

function faqSchema(items) {
  return {
    "@type": "FAQPage",
    "@id": "#faq",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
}

function schemaScript(nodes) {
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 2)}</script>`;
}

function pageSchemas(page, extras = []) {
  return [
    organizationSchema(),
    {
      "@type": "WebSite",
      "@id": `${company.domain}/#website`,
      name: company.name,
      url: company.domain,
      inLanguage: page.lang
    },
    {
      "@type": "WebPage",
      "@id": `${url(page.path)}#webpage`,
      url: url(page.path),
      name: page.title,
      description: page.description,
      inLanguage: page.lang,
      isPartOf: { "@id": `${company.domain}/#website` },
      about: { "@id": `${company.domain}/#organization` }
    },
    ...extras
  ];
}

function alternates(activeLang, currentPath) {
  const serviceGroup = serviceAlternatesByPath.get(currentPath);
  if (serviceGroup) {
    const links = Object.entries(serviceGroup)
      .map(([lang, path]) => `<link rel="alternate" hreflang="${lang}" href="${url(path)}">`)
      .join("\n    ");
    return `${links}\n    <link rel="alternate" hreflang="x-default" href="${url(serviceGroup.ru || currentPath)}">`;
  }
  const isHome = Object.values(homePages).some((page) => page.path === currentPath);
  if (isHome) {
    const links = Object.values(homePages)
      .map((page) => `<link rel="alternate" hreflang="${page.lang}" href="${url(page.path)}">`)
      .join("\n    ");
    return `${links}\n    <link rel="alternate" hreflang="x-default" href="${url("/ru/")}">`;
  }
  return `<link rel="alternate" hreflang="${activeLang}" href="${url(currentPath)}">`;
}

function head(page, schemas, noindex = false) {
  const verification = company.googleSiteVerification
    ? `\n    <meta name="google-site-verification" content="${esc(company.googleSiteVerification)}">`
    : "";
  return `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}">
    <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
    <meta name="theme-color" content="#111111">${verification}
    <link rel="canonical" href="${url(page.path)}">
    ${alternates(page.lang || "ru", page.path)}
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <meta property="og:type" content="${page.ogType || "website"}">
    <meta property="og:title" content="${esc(page.title)}">
    <meta property="og:description" content="${esc(page.description)}">
    <meta property="og:url" content="${url(page.path)}">
    <meta property="og:image" content="${url(company.image)}">
    <meta property="og:site_name" content="${company.name}">
    <meta property="og:locale" content="${page.locale || "ru_GE"}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(page.title)}">
    <meta name="twitter:description" content="${esc(page.description)}">
    <meta name="twitter:image" content="${url(company.image)}">
    <link rel="stylesheet" href="/styles.css?v=${assetVersion}">
    <script async src="https://www.googletagmanager.com/gtag/js?id=${company.analyticsId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${company.analyticsId}');
    </script>
    ${schemaScript(schemas)}
  </head>`;
}

function header(activeLang, servicePage = false, currentPath = "") {
  const page = homePages[activeLang] || homePages.ru;
  const nav = page.nav.map((label, index) => {
    const href = servicePage ? `${page.path}#${page.navIds[index]}` : `#${page.navIds[index]}`;
    return `<a href="${href}">${esc(label)}</a>`;
  }).join("");
  const switchPaths = serviceAlternatesByPath.get(currentPath);
  const switches = Object.values(homePages).map((item) => {
    const href = switchPaths?.[item.lang] || item.path;
    return `<a class="${item.lang === activeLang ? "is-active" : ""}" href="${href}" hreflang="${item.lang}">${item.label}</a>`;
  }).join("");
  return `
    <a class="skip-link" href="${servicePage ? "#content" : "#services"}">${esc(page.skip)}</a>
    <header class="site-header" data-header>
      <a class="brand" href="${page.path}" aria-label="BoxMove">
        <span class="brand-mark" aria-hidden="true"><span></span></span>
        <span class="brand-name">BoxMove</span>
      </a>
      <nav class="nav" data-nav aria-label="Main navigation">${nav}</nav>
      <div class="header-actions">
        <div class="language-switch" aria-label="Language">${switches}</div>
        <div class="header-socials" aria-label="Messenger links">
          <a class="icon-link icon-link-whatsapp" href="${company.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp BoxMove" title="WhatsApp">${whatsappSvg()}</a>
          <a class="icon-link icon-link-telegram" href="${company.telegram}" target="_blank" rel="noopener" aria-label="${company.telegramLabel}" title="${company.telegramLabel}">${telegramSvg()}</a>
        </div>
        <a class="header-phone" href="tel:+${company.phoneCompact}">${company.phoneDisplay}</a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>`;
}

function footer(lang = "ru") {
  const page = homePages[lang] || homePages.ru;
  const copy = ui[lang] || ui.ru;
  const services = lang === "ru"
    ? serviceCards.map(([, , href], index) => ({ href, label: copy.footerServices[index] }))
    : localizedServicePages
      .filter((service) => service.lang === lang)
      .map((service, index) => ({ href: service.path, label: copy.footerServices[index] || service.cardTitle || service.h1 }));
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <a class="brand footer-brand" href="${page.path}" aria-label="BoxMove"><span class="brand-mark" aria-hidden="true"><span></span></span><span class="brand-name">BoxMove</span></a>
        <div class="footer-links">
          <p>${esc(page.footer)}</p>
          ${services.map((service) => `<a href="${service.href}">${esc(service.label)}</a>`).join("")}
        </div>
      </div>
    </footer>
    <div class="floating-contacts" aria-label="${esc(copy.floatingLabel)}">
      <a class="floating-contact floating-contact-phone" href="tel:+${company.phoneCompact}" aria-label="${esc(copy.contactCall)} BoxMove"><span class="floating-contact-icon" aria-hidden="true">${phoneSvg()}</span><span>${esc(copy.floatingCall)}</span></a>
      <a class="floating-contact floating-contact-whatsapp" href="${company.whatsappDirect}" target="_blank" rel="noopener" aria-label="${esc(copy.whatsappAria)}"><span class="floating-contact-icon" aria-hidden="true">${whatsappSvg()}</span><span>WhatsApp</span></a>
      <a class="floating-contact floating-contact-telegram" href="${company.telegram}" target="_blank" rel="noopener" aria-label="${esc(copy.telegramAria)}"><span class="floating-contact-icon" aria-hidden="true">${telegramSvg()}</span><span>Telegram</span></a>
    </div>
    <script src="/script.js?v=${assetVersion}"></script>`;
}

function quoteForm(page) {
  const options = formTypes[page.lang].map((label, index) => `<option value="${formTypeValues[index]}" ${index === 1 ? "selected" : ""}>${esc(label)}</option>`).join("");
  const helpers = page.form.helperOptions.map((label, index) => `<option value="${index === 3 ? 3 : index}" ${index === 0 ? "selected" : ""}>${esc(label)}</option>`).join("");
  return `
    <form class="quote-form" data-quote-form data-whatsapp-message="${esc(page.quoteMessage)}" data-reveal>
      <label><span>${esc(page.form.from)}</span><input type="text" name="from" placeholder="${esc(page.form.fromPlaceholder)}"></label>
      <label><span>${esc(page.form.to)}</span><input type="text" name="to" placeholder="${esc(page.form.toPlaceholder)}"></label>
      <label><span>${esc(page.form.type)}</span><select name="type" data-service-type>${options}</select></label>
      <label><span>${esc(page.form.helpers)}</span><select name="helpers" data-helper-count>${helpers}</select></label>
      <label class="form-wide"><span>${esc(page.form.comment)}</span><textarea name="comment" rows="4" placeholder="${esc(page.form.commentPlaceholder)}"></textarea></label>
      <button class="btn btn-primary form-wide" type="submit">${esc(page.form.submit)}</button>
    </form>`;
}

function serviceGrid(lang) {
  const copy = ui[lang] || ui.ru;
  if (lang !== "ru") {
    return localizedServicePages
      .filter((service) => service.lang === lang)
      .map((service) => `<article class="service-card" data-reveal><img src="${service.image}" alt="${esc(service.imageAlt)}" width="900" height="620" loading="lazy"><div class="service-content"><h3>${esc(service.cardTitle || service.h1)}</h3><p>${esc(service.cardText || service.lead)}</p><a href="${service.path}">${esc(copy.details)}</a></div></article>`)
      .join("");
  }
  return serviceCards.map(([title, text, href, image, alt]) => `<article class="service-card" data-reveal><img src="${image}" alt="${esc(alt)}" width="900" height="620" loading="lazy"><div class="service-content"><h3>${esc(title)}</h3><p>${esc(text)}</p><a href="${href}">${esc(copy.details)}</a></div></article>`).join("");
}

function homeHtml(page) {
  const schemas = pageSchemas(page, [faqSchema(page.faq)]);
  const copy = ui[page.lang] || ui.ru;
  const prices = copy.priceCards;
  return `<!doctype html>
<html lang="${page.lang}">
${head(page, schemas)}
  <body data-page-lang="${page.lang}">
    ${header(page.lang)}
    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-bg" aria-hidden="true"></div><div class="hero-shade" aria-hidden="true"></div>
        <div class="container hero-inner">
          <div class="hero-copy" data-reveal>
            <p class="eyebrow">${esc(page.eyebrow)}</p>
            <h1 id="hero-title">${esc(page.h1)}</h1>
            <p class="hero-text">${esc(page.lead)}</p>
            <div class="hero-actions"><a class="btn btn-primary" href="${company.whatsapp}">${esc(page.primary)}</a><a class="btn btn-secondary" href="#services">${esc(page.secondary)}</a></div>
            <div class="hero-proof" aria-label="Service highlights">${page.proof.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
          </div>
          <aside class="hero-status" data-reveal aria-label="Availability">
            <div class="status-time"><span>${esc(page.today)}</span><strong>07:00–23:00</strong></div>
            <div class="status-line"><span>${esc(page.from)}</span><strong>${company.minPrice}</strong></div>
            <div class="status-line"><span>${esc(page.city)}</span><strong>${esc(page.urgent)}</strong></div>
          </aside>
        </div>
      </section>
      <section class="quick-strip" aria-label="Key benefits">${page.quick.map(([icon, title, text]) => `<div class="quick-item"><span class="quick-icon" aria-hidden="true">${icon}</span><div><strong>${esc(title)}</strong><p>${esc(text)}</p></div></div>`).join("")}</section>
      <section class="section" id="services"><div class="container"><div class="section-head" data-reveal><p class="eyebrow">${esc(copy.serviceEyebrow)}</p><h2>${esc(page.servicesTitle)}</h2><p>${esc(page.servicesText)}</p></div><div class="services-grid">${serviceGrid(page.lang)}</div></div></section>
      <section class="section" id="prices"><div class="container"><div class="section-head" data-reveal><p class="eyebrow">${esc(copy.pricesEyebrow)}</p><h2>${esc(page.pricesTitle)}</h2><p>${esc(page.pricesText)}</p></div><div class="price-grid">${prices.map(([label, title, text, items, featured]) => `<article class="price-card ${featured || ""}" data-reveal><span>${esc(label)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p><ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></article>`).join("")}</div></div></section>
      <section class="section section-soft" id="process"><div class="container"><div class="section-head" data-reveal><p class="eyebrow">${esc(copy.processEyebrow)}</p><h2>${esc(page.processTitle)}</h2><p>${esc(page.processText)}</p></div><div class="steps-grid">${copy.processSteps.map((step, index) => `<article class="step-card" data-reveal><span>${index + 1}</span><p>${esc(step)}</p></article>`).join("")}</div></div></section>
      <section class="section section-dark" id="about"><div class="container split"><div class="split-copy" data-reveal><p class="eyebrow">${esc(copy.whyEyebrow)}</p><h2>${esc(page.whyTitle)}</h2><p>${esc(page.whyText)}</p><div class="feature-list">${copy.stats.map(([value, label]) => `<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join("")}</div></div><div class="fleet-card" data-reveal><img src="/assets/boxmove-tbilisi-van.png" alt="${esc(copy.fleetAlt)}" width="1400" height="934" loading="lazy"><div class="fleet-info"><span>${esc(copy.fleet[0])}</span><h3>${esc(copy.fleet[1])}</h3><p>${esc(copy.fleet[2])}</p></div></div></div></section>
      <section class="section" id="area"><div class="container"><div class="section-head" data-reveal><p class="eyebrow">${esc(copy.areaEyebrow)}</p><h2>${esc(page.areaTitle)}</h2><p>${esc(page.areaText)}</p></div><div class="area-pills" data-reveal>${copy.districts.map((area) => `<span>${esc(area)}</span>`).join("")}</div></div></section>
      <section class="section faq-section" id="faq"><div class="container faq-layout"><div class="section-head" data-reveal><p class="eyebrow">FAQ</p><h2>${esc(page.faqTitle)}</h2></div><div class="faq-list" data-reveal>${page.faq.map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></div></section>
      <section class="section quote-section" id="quote"><div class="container quote-layout"><div class="quote-copy" data-reveal><p class="eyebrow">${esc(copy.quoteEyebrow)}</p><h2>${esc(page.quoteTitle)}</h2><p>${esc(page.quoteText)}</p><div class="estimate-box"><span>${esc(copy.estimateLabel)}</span><strong data-estimate>50 ₾</strong><p>${esc(copy.estimateNote)}</p></div></div>${quoteForm(page)}</div></section>
      ${contactsSection(page)}
    </main>
    ${footer(page.lang)}
  </body>
</html>`;
}

function serviceHtml(service) {
  const page = {
    lang: "ru",
    locale: "ru_GE",
    path: `/ru/${service.slug}/`,
    title: service.title,
    description: service.description,
    ogType: "article"
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url(page.path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: url("/ru/") },
      { "@type": "ListItem", position: 2, name: "Услуги", item: url("/ru/#services") },
      { "@type": "ListItem", position: 3, name: service.h1, item: url(page.path) }
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    "@id": `${url(page.path)}#service`,
    name: service.h1,
    description: service.description,
    provider: { "@id": `${company.domain}/#organization` },
    areaServed: [{ "@type": "City", name: "Tbilisi" }, { "@type": "Country", name: "Georgia" }],
    serviceType: service.h1,
    url: url(page.path)
  };
  const schemas = pageSchemas(page, [breadcrumb, serviceSchema, faqSchema(service.faq)]);
  return `<!doctype html>
<html lang="ru">
${head(page, schemas)}
  <body data-page-lang="ru">
    ${header("ru", true, page.path)}
    <main id="top">
      <section class="service-hero" aria-labelledby="service-title">
        <div class="container service-hero-inner">
          <nav class="breadcrumbs" aria-label="Хлебные крошки"><a href="/ru/">Главная</a><a href="/ru/#services">Услуги</a><span>${esc(service.h1)}</span></nav>
          <div class="service-hero-copy" data-reveal>
            <p class="eyebrow">Услуга BoxMove</p>
            <h1 id="service-title">${esc(service.h1)}</h1>
            <p>${esc(service.lead)}</p>
            <div class="hero-actions"><a class="btn btn-primary" href="#quote">Заказать услугу</a><a class="btn btn-secondary" href="${company.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn-telegram" href="${company.telegram}" target="_blank" rel="noopener">Telegram</a></div>
          </div>
          <div class="service-hero-media" data-reveal><img src="${service.image}" alt="${esc(service.imageAlt)}" width="900" height="620"></div>
        </div>
      </section>
      <section class="section service-content-section" id="content"><div class="container service-layout">
        <article class="service-main">
          <h2>Описание услуги</h2><p>${esc(service.detail)}</p>
          <h2>Кому подходит услуга</h2><ul class="check-list">${service.suitable.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
          <h2>Этапы работы</h2><ol class="number-list">${service.steps.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>
          <h2>Стоимость</h2><p>${esc(service.cost)}</p>
          <h2>Территория обслуживания</h2><p>${esc(service.areaText || `Работаем по Тбилиси и согласовываем маршруты из Тбилиси в другие города Грузии. В городе доступны районы: ${company.districts.join(", ")}.`)}</p>
          <h2>Преимущества</h2><ul class="check-list">${service.advantages.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </article>
        <aside class="service-side">
          <div class="side-box"><h2>Связаться</h2><p>Опишите задачу, адреса, этажи и желаемое время. Мы уточним детали и подберем формат перевозки.</p><a class="btn btn-primary" href="tel:+${company.phoneCompact}">Позвонить</a><a class="btn btn-secondary btn-whatsapp" href="${company.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></div>
          <div class="side-box"><h2>Связанные услуги</h2><ul>${service.related.map((slug) => `<li><a href="/ru/${slug}/">${esc(serviceBySlug.get(slug).h1)}</a></li>`).join("")}</ul></div>
        </aside>
      </div></section>
      <section class="section faq-section"><div class="container faq-layout"><div class="section-head" data-reveal><p class="eyebrow">FAQ</p><h2>Частые вопросы</h2></div><div class="faq-list" data-reveal>${service.faq.map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></div></section>
      <section class="section quote-section" id="quote"><div class="container quote-layout"><div class="quote-copy" data-reveal><p class="eyebrow">Заказ</p><h2>${esc(serviceOrderHeading(service))}</h2><p>Форма откроет готовое сообщение в WhatsApp. Можно также позвонить или написать в Telegram.</p><div class="estimate-box"><span>Ориентир</span><strong data-estimate>50 ₾</strong><p>Точная цена после уточнения деталей</p></div></div>${quoteForm(homePages.ru)}</div></section>
      ${contactsSection(homePages.ru)}
    </main>
    ${footer("ru")}
  </body>
</html>`;
}

function localizedServiceHtml(service) {
  const home = homePages[service.lang] || homePages.en;
  const copy = servicePageText[service.lang] || servicePageText.en;
  const page = {
    lang: service.lang,
    locale: home.locale,
    path: service.path,
    title: service.title,
    description: service.description,
    ogType: "article"
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url(page.path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.home, item: url(home.path) },
      { "@type": "ListItem", position: 2, name: copy.services, item: url(`${home.path}#services`) },
      { "@type": "ListItem", position: 3, name: service.h1, item: url(page.path) }
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    "@id": `${url(page.path)}#service`,
    name: service.h1,
    description: service.description,
    provider: { "@id": `${company.domain}/#organization` },
    areaServed: [{ "@type": "City", name: "Tbilisi" }, { "@type": "Country", name: "Georgia" }],
    serviceType: service.h1,
    url: url(page.path)
  };
  const related = service.related
    .map((id) => serviceByLangId.get(`${service.lang}:${id}`))
    .filter(Boolean);
  const schemas = pageSchemas(page, [breadcrumb, serviceSchema, faqSchema(service.faq)]);
  return `<!doctype html>
<html lang="${service.lang}">
${head(page, schemas)}
  <body data-page-lang="${service.lang}">
    ${header(service.lang, true, page.path)}
    <main id="top">
      <section class="service-hero" aria-labelledby="service-title">
        <div class="container service-hero-inner">
          <nav class="breadcrumbs" aria-label="${esc(copy.breadcrumbs)}"><a href="${home.path}">${esc(copy.home)}</a><a href="${home.path}#services">${esc(copy.services)}</a><span>${esc(service.h1)}</span></nav>
          <div class="service-hero-copy" data-reveal>
            <p class="eyebrow">${esc(copy.eyebrow)}</p>
            <h1 id="service-title">${esc(service.h1)}</h1>
            <p>${esc(service.lead)}</p>
            <div class="hero-actions"><a class="btn btn-primary" href="#quote">${esc(copy.primary)}</a><a class="btn btn-secondary" href="${company.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn-telegram" href="${company.telegram}" target="_blank" rel="noopener">Telegram</a></div>
          </div>
          <div class="service-hero-media" data-reveal><img src="${service.image}" alt="${esc(service.imageAlt)}" width="900" height="620"></div>
        </div>
      </section>
      <section class="section service-content-section" id="content"><div class="container service-layout">
        <article class="service-main">
          <h2>${esc(copy.detailTitle)}</h2><p>${esc(service.detail)}</p>
          <h2>${esc(copy.suitableTitle)}</h2><ul class="check-list">${service.suitable.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
          <h2>${esc(copy.stepsTitle)}</h2><ol class="number-list">${service.steps.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>
          <h2>${esc(copy.costTitle)}</h2><p>${esc(service.cost)}</p>
          <h2>${esc(copy.areaTitle)}</h2><p>${esc(service.areaText || copy.areaText)}</p>
          <h2>${esc(copy.advantagesTitle)}</h2><ul class="check-list">${service.advantages.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </article>
        <aside class="service-side">
          <div class="side-box"><h2>${esc(copy.sideTitle)}</h2><p>${esc(copy.sideText)}</p><a class="btn btn-primary" href="tel:+${company.phoneCompact}">${esc(copy.call)}</a><a class="btn btn-secondary btn-whatsapp" href="${company.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn-telegram" href="${company.telegram}" target="_blank" rel="noopener">Telegram</a></div>
          <div class="side-box"><h2>${esc(copy.relatedTitle)}</h2><ul>${related.map((item) => `<li><a href="${item.path}">${esc(item.h1)}</a></li>`).join("")}</ul></div>
        </aside>
      </div></section>
      <section class="section faq-section"><div class="container faq-layout"><div class="section-head" data-reveal><p class="eyebrow">FAQ</p><h2>${esc(copy.faqTitle)}</h2></div><div class="faq-list" data-reveal>${service.faq.map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></div></section>
      <section class="section quote-section" id="quote"><div class="container quote-layout"><div class="quote-copy" data-reveal><p class="eyebrow">${esc(copy.quoteEyebrow)}</p><h2>${esc(localizedServiceOrderHeading(service))}</h2><p>${esc(copy.quoteText)}</p><div class="estimate-box"><span>${esc(copy.estimateLabel)}</span><strong data-estimate>50 ₾</strong><p>${esc(copy.estimateNote)}</p></div></div>${quoteForm(home)}</div></section>
      ${contactsSection(home)}
    </main>
    ${footer(service.lang)}
  </body>
</html>`;
}

function contactsSection(page) {
  const copy = ui[page.lang] || ui.ru;
  return `<section class="section contact-section" id="contacts"><div class="container contact-layout"><div class="contact-copy" data-reveal><p class="eyebrow">${esc(copy.contactEyebrow)}</p><h2>${esc(page.contactsTitle)}</h2><p>${esc(page.contactsText)}</p><div class="contact-actions"><a class="btn btn-primary" href="tel:+${company.phoneCompact}">${esc(copy.contactCall)}</a><a class="btn btn-secondary btn-whatsapp" href="${company.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn-telegram" href="${company.telegram}" target="_blank" rel="noopener">Telegram</a></div><ul class="contact-list"><li><strong>${esc(copy.contactPhone)}</strong><a href="tel:+${company.phoneCompact}">${company.phoneDisplay}</a></li><li><strong>${esc(copy.contactArea)}</strong><span>${esc(copy.contactAreaValue)}</span></li><li><strong>${esc(copy.contactHours)}</strong><span>${esc(copy.hoursValue)}</span></li></ul></div><div class="map-card" data-reveal><iframe title="Tbilisi map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Tbilisi%2C%20Georgia&output=embed"></iframe></div></div></section>`;
}

function rootRedirectHtml() {
  const page = { lang: "ru", locale: "ru_GE", path: "/", title: "BoxMove — грузоперевозки в Тбилиси", description: "Перейдите на русскую, английскую или грузинскую версию сайта BoxMove." };
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <meta name="robots" content="noindex, follow">
    <meta name="theme-color" content="#111111">
    <link rel="canonical" href="${url("/ru/")}">
    <link rel="alternate" hreflang="ru" href="${url("/ru/")}">
    <link rel="alternate" hreflang="en" href="${url("/en/")}">
    <link rel="alternate" hreflang="ka" href="${url("/ka/")}">
    <link rel="alternate" hreflang="x-default" href="${url("/ru/")}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${esc(homePages.ru.title)}">
    <meta property="og:description" content="${esc(homePages.ru.description)}">
    <meta property="og:url" content="${url("/ru/")}">
    <meta property="og:image" content="${url(company.image)}">
    <meta property="og:site_name" content="${company.name}">
    <meta property="og:locale" content="ru_GE">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(homePages.ru.title)}">
    <meta name="twitter:description" content="${esc(homePages.ru.description)}">
    <meta name="twitter:image" content="${url(company.image)}">
    <meta http-equiv="refresh" content="0; url=./ru/">
    <link rel="stylesheet" href="/styles.css?v=${assetVersion}">
    ${schemaScript(pageSchemas(homePages.ru))}
  </head>
  <body class="redirect-page">
    <main class="redirect-box">
      <a class="brand" href="./ru/" aria-label="BoxMove"><span class="brand-mark" aria-hidden="true"><span></span></span><span class="brand-name">BoxMove</span></a>
      <h1>Грузоперевозки в Тбилиси</h1>
      <p>Если переход не сработал автоматически, выберите язык.</p>
      <div class="hero-actions"><a class="btn btn-primary" href="./ru/">RU</a><a class="btn btn-secondary" href="./en/">EN</a><a class="btn btn-secondary" href="./ka/">KA</a></div>
    </main>
  </body>
</html>`;
}

function notFoundHtml() {
  const page = { lang: "ru", locale: "ru_GE", path: "/404.html", title: "Страница не найдена — BoxMove", description: "Страница не найдена. Вернитесь на главную или выберите услугу BoxMove." };
  return `<!doctype html>
<html lang="ru">
${head(page, pageSchemas(page), true)}
  <body data-page-lang="ru">
    ${header("ru", true)}
    <main class="not-found">
      <section class="service-hero"><div class="container service-hero-inner"><div class="service-hero-copy"><p class="eyebrow">404</p><h1>Страница не найдена</h1><p>Такой страницы нет. Можно вернуться на главную или перейти к основным услугам BoxMove.</p><div class="hero-actions"><a class="btn btn-primary" href="/ru/">На главную</a><a class="btn btn-secondary" href="/ru/#services">Услуги</a></div></div><div class="service-hero-media"><img src="/assets/boxmove-tbilisi-van.png" alt="Фургон BoxMove в Тбилиси" width="900" height="620"></div></div></section>
    </main>
    ${footer("ru")}
  </body>
</html>`;
}

function sitemapXml() {
  const pages = [homePages.ru, homePages.en, homePages.ka, ...allServicePages.map((service) => ({ path: service.path }))];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((page) => {
    const home = Object.values(homePages).find((item) => item.path === page.path);
    const serviceGroup = serviceAlternatesByPath.get(page.path);
    const alternateGroup = home ? { ru: "/ru/", en: "/en/", ka: "/ka/" } : serviceGroup;
    const links = alternateGroup ? `
${Object.entries(alternateGroup).map(([lang, path]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url(path)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(alternateGroup.ru || page.path)}"/>` : "";
    return `  <url>
    <loc>${url(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>${links}
  </url>`;
  }).join("\n")}
</urlset>`;
}

function whatsappSvg() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12.04 3.5a8.34 8.34 0 0 0-7.08 12.74l-.9 3.26 3.34-.88a8.34 8.34 0 1 0 4.64-15.12Zm0 1.65a6.69 6.69 0 1 1-3.4 12.45l-.24-.14-1.98.52.53-1.93-.16-.25a6.69 6.69 0 0 1 5.25-10.65Zm-2.56 3.58c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.66 4.12 3.62 2.04.8 2.46.64 2.9.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46Z"/></svg>`;
}

function telegramSvg() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.65 4.28c.32-.13.67.14.58.52l-2.58 14.7c-.08.43-.6.6-.94.32l-4.3-3.56-2.2 2.12c-.24.23-.65.11-.72-.22l-.9-4.12-3.95-1.3c-.45-.15-.48-.77-.04-.96L20.65 4.28Zm-3.5 3.28-8.92 4.88 2.7.9 5.9-3.68c.23-.14.47.16.28.35l-4.78 4.6.54 2.42 1.18-1.14a.73.73 0 0 1 .96-.04l2.2 1.82 1.82-10.38-1.88.27Z"/></svg>`;
}

function phoneSvg() {
  return `<svg viewBox="0 0 24 24" focusable="false"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"/></svg>`;
}

write("index.html", rootRedirectHtml());
Object.values(homePages).forEach((page) => write(`${page.lang}/index.html`, homeHtml(page)));
servicePages.forEach((service) => write(`ru/${service.slug}/index.html`, serviceHtml(service)));
localizedServicePages.forEach((service) => write(`${service.lang}/${service.slug}/index.html`, localizedServiceHtml(service)));
write("404.html", notFoundHtml());
write("robots.txt", `User-agent: *
Allow: /

Sitemap: ${company.domain}/sitemap.xml`);
write("sitemap.xml", sitemapXml());

console.log(`Generated ${3 + allServicePages.length} public pages, sitemap.xml, robots.txt and 404.html`);
