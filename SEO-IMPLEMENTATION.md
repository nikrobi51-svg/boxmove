# SEO implementation for BoxMove

## Архитектура

Сайт остается статическим: HTML, CSS и JavaScript без фреймворка и без внешней сборки. Страницы генерируются скриптом `tools/build-site.mjs` из централизованных данных компании, языковых текстов и описаний услуг.

## Что изменено

- Добавлены отдельные индексируемые языковые главные страницы: `/ru/`, `/en/`, `/ka/`.
- Добавлены SEO-страницы услуг для RU, EN и KA.
- Обновлены title, description, canonical, robots, Open Graph, Twitter Card и JSON-LD.
- Добавлены видимые FAQ, локальный блок районов Тбилиси и внутренние ссылки.
- Добавлены хлебные крошки на страницах услуг.
- Обновлены `sitemap.xml` и `robots.txt`.
- Добавлена страница `404.html` с `noindex, follow`.
- Добавлен `.env.example` для `GOOGLE_SITE_VERIFICATION`.
- Нижняя плавающая кнопка заменена на три кнопки: звонок, WhatsApp без готового текста и Telegram.
- Создана WebP-версия hero-изображения: `assets/boxmove-tbilisi-van.webp`.
- Добавлена услуга разборки и сборки мебели с отдельной страницей и отдельной иконкой.
- Для карточек услуг добавлены отдельные SVG-иконки, чтобы в блоке услуг не повторялись одинаковые изображения.

## URL

- `/ru/`
- `/en/`
- `/ka/`
- `/ru/gruzoperevozki-tbilisi/`
- `/ru/gruzovoe-taksi-tbilisi/`
- `/ru/perevozka-mebeli-tbilisi/`
- `/ru/razborka-sborka-mebeli-tbilisi/`
- `/ru/kvartirny-pereezd-tbilisi/`
- `/ru/ofisny-pereezd-tbilisi/`
- `/ru/gruzchiki-tbilisi/`
- `/ru/vyvoz-musora-tbilisi/`
- `/ru/gruzoperevozki-po-gruzii/`
- `/en/cargo-transportation-tbilisi/`
- `/en/man-with-van-tbilisi/`
- `/en/furniture-moving-tbilisi/`
- `/en/furniture-assembly-tbilisi/`
- `/en/apartment-moving-tbilisi/`
- `/en/office-moving-tbilisi/`
- `/en/movers-tbilisi/`
- `/en/junk-removal-tbilisi/`
- `/en/cargo-transportation-georgia/`
- `/ka/tvirtis-gadazidva-tbilisi/`
- `/ka/satvirto-taqsi-tbilisi/`
- `/ka/avejis-gadazidva-tbilisi/`
- `/ka/avejis-dashla-atsyoba-tbilisi/`
- `/ka/binis-gadatana-tbilisi/`
- `/ka/ofisis-gadatana-tbilisi/`
- `/ka/mtvirtavebi-tbilisi/`
- `/ka/nagvis-gatana-tbilisi/`
- `/ka/tvirtis-gadazidva-sakartvelo/`

Корневой `index.html` делает переход на `/ru/` и помечен `noindex, follow`, чтобы не создавать дубль русской главной.

## Где редактировать

- Название компании, домен, телефон, WhatsApp, Telegram, цена, время подачи и часы работы: `tools/build-site.mjs`, объект `company`.
- Title, description, H1 и тексты главных страниц: `tools/build-site.mjs`, объект `homePages`.
- Title, description, H1, FAQ и русские тексты услуг: `tools/build-site.mjs`, массив `servicePages`.
- Английские и грузинские страницы услуг: `tools/build-site.mjs`, массив `localizedServicePages`.
- JSON-LD: `tools/build-site.mjs`, функции `organizationSchema`, `pageSchemas`, `faqSchema` и блок в `serviceHtml`.
- Sitemap: генерируется функцией `sitemapXml` в `tools/build-site.mjs`.
- Robots.txt: генерируется в конце `tools/build-site.mjs`.
- Стили: `styles.css`.
- Форма и мобильное меню: `script.js`.

После правок в `tools/build-site.mjs` нужно выполнить:

```bash
npm run build
npm run lint
```

Если `npm` недоступен, можно запустить напрямую:

```bash
node tools/build-site.mjs
node tools/validate-site.mjs
```

## Как добавить новую страницу услуги

1. Добавить объект в массив `servicePages` в `tools/build-site.mjs`.
2. Добавить карточку в `serviceCards`, если услуга должна показываться на главной и в футере.
3. Добавить связанные услуги через `related`.
4. Запустить `npm run build`.
5. Запустить `npm run lint`.

## Как добавить языковые версии услуг

Для каждой услуги используется общий идентификатор `id`, по которому генератор связывает RU, EN и KA версии через `hreflang`. Чтобы добавить новый язык или новую услугу, нужно добавить отдельный текст, slug, title, description, H1, FAQ и связанные услуги в `localizedServicePages`, затем запустить сборку и проверку.

## Не добавлено без подтверждения

- Физический адрес офиса.
- Facebook и Instagram.
- AggregateRating и Review schema.
- Лицензии, гарантии, статистика и официальная утилизация отходов.
- Search Console verification token.

## Действия владельца после деплоя

- Открыть Google Search Console.
- Добавить домен `boxmove.ge`.
- Подтвердить владение через DNS или добавить реальный `GOOGLE_SITE_VERIFICATION`.
- Отправить `https://boxmove.ge/sitemap.xml`.
- Проверить главную `/ru/` и новые страницы услуг через инструмент проверки URL.
- Один раз запросить индексирование главной и новых страниц.
- Не отправлять страницу на переиндексацию после каждой мелкой правки.
