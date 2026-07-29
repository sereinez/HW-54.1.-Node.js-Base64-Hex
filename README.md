# homework-36.1

Домашнє завдання з TypeScript: функції `sumArray`, `createUser`, `getOrderStatus` та enum `OrderStatus`.



## Встановлення

```bash
npm install
```

## Компіляція TypeScript → JavaScript

Одноразово:

```bash
npx tsc
```

Або в режимі стеження (перекомпілює `main.js` автоматично при кожному збереженні `main.ts`):

```bash
npx tsc --watch
```


### Запускати потрібно через локальний сервер:

**Варіант A — Live Server у VS Code (найпростіше):**

1. Встановити розширення **Live Server** (автор: Ritwick Dey).
2. Правою кнопкою по `index.html` → **Open with Live Server**.
3. Відкриється сторінка на кшталт `http://127.0.0.1:5500/index.html`.

**Варіант B — через Node.js:**

```bash
npx serve .
```

або

```bash
npx http-server .
```

і відкрити посилання, яке покаже термінал.

## Перевірка результату

Відкрити консоль браузера (**F12 → Console**) — там будуть результати виклику функцій.

---

**Коротка послідовність дій:**

```bash
npm install
npx tsc              # скомпілювати main.ts → main.js
npx serve .           # або Live Server у VS Code
# відкрити http://... у браузері, НЕ файл напряму
```
