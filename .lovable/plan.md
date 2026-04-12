

## Настройка SPA-роутинга на Vercel

Для работы прямых ссылок на `/privacy` и `/terms` нужно добавить файл `vercel.json` в корень проекта. Он указывает Vercel перенаправлять все запросы на `index.html`, чтобы React Router обрабатывал маршруты на клиенте.

### Что будет сделано

Создание файла `vercel.json` в корне проекта:

```json
{
  "rewrites": [
    { "source": "/((?!assets|ads\\.txt|app-ads\\.txt|og-image\\.png|robots\\.txt|placeholder\\.svg).*)", "destination": "/index.html" }
  ]
}
```

Это перенаправит все URL (кроме статических файлов: `ads.txt`, `app-ads.txt`, `og-image.png`, `robots.txt` и папки `assets`) на `index.html`, где React Router определит нужную страницу.

