# Relief Soft — витрина

Модульный Astro-сайт: авторские расширения/обработки для типовых баз.

## Локально

```bash
cd F:\Site1C
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

Статика попадёт в `dist/`.

## Где что менять

- Бренд / Telegram / email — `src/data/site.ts`
- Товары — `src/data/products.ts`
- Кнопки — `src/components/ui/Button.astro`
- Блоки страниц — `src/components/blocks/`

## GitHub Pages

1. Создайте репо `relief-soft` (или используйте `website`).
2. Залейте этот проект.
3. Settings → Pages → Source: GitHub Actions **или** deploy из `dist` / branch `gh-pages`.
4. Если сайт не на корне user pages, задайте `base` в `astro.config.mjs`.

## Дизайн

Индиго + мягкий янтарь, логотип-дуга (облегчение), без феникса/МК и без «1С» в бренде.
