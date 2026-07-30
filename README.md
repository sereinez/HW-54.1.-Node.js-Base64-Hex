homework-37.1

Встановлення
npm install
Компіляція TypeScript → JavaScript
Одноразово:

npx tsc
Або в режимі стеження (перекомпілює main.js автоматично при кожному збереженні main.ts):

npx tsc --watch
Запускати потрібно через локальний сервер:
Варіант A — Live Server у VS Code (найпростіше):

Встановити розширення Live Server (автор: Ritwick Dey).
Правою кнопкою по index.html → Open with Live Server.
Відкриється сторінка на кшталт http://127.0.0.1:5500/index.html.
Варіант B — через Node.js:

npx serve .
або

npx http-server .
і відкрити посилання, яке покаже термінал.

Перевірка результату
Відкрити консоль браузера (F12 → Console) — там будуть результати виклику функцій.

Коротка послідовність дій:

npm install
npx tsc              # скомпілювати main.ts → main.js
npx serve .           # або Live Server у VS Code
# відкрити http://... у браузері, НЕ файл напряму