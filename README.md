# BoxMove site

Статический сайт транспортной компании BoxMove для грузоперевозок в Тбилиси и по Грузии.

## Структура

- `/ru/`, `/en/`, `/ka/` — языковые главные страницы.
- `/ru/gruzoperevozki-tbilisi/` и другие `/ru/.../` — SEO-страницы услуг.
- `404.html` — страница ошибки.
- `sitemap.xml` и `robots.txt` — технические SEO-файлы.
- `tools/build-site.mjs` — генератор HTML-страниц.
- `tools/validate-site.mjs` — локальная проверка HTML, sitemap и robots.

## Локальный запуск

Сайт лучше смотреть через локальный сервер, потому что внутренние ссылки и ресурсы используют URL от корня сайта.

```bash
python -m http.server 4177
```

После этого откройте:

```text
http://127.0.0.1:4177/ru/
```

## Команды

```bash
npm run build
npm run lint
npm run typecheck
npm run test
```

Если `npm` недоступен, можно использовать Node напрямую:

```bash
node tools/build-site.mjs
node tools/validate-site.mjs
```

## Что менять перед публикацией

- Телефон `+995 555 320 865`, WhatsApp и Telegram, если контакты изменятся.
- Минимальную цену `50 ₾`, время подачи `40 минут` и часы работы, если условия изменятся.
- Реальные фото автомобиля, команды и работ.
- Search Console verification token через переменную `GOOGLE_SITE_VERIFICATION`, если используется meta-подтверждение.

Подробности описаны в `SEO-IMPLEMENTATION.md`.
