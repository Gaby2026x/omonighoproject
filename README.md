# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Telegram Notifications Setup

Application form submissions and contact inquiries are sent to Telegram. Follow these steps to set it up:

### 1. Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts to name your bot
3. Copy the **bot token** you receive (e.g. `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`)

### 2. Get Your Chat ID

1. Add your new bot to the Telegram group/channel where you want notifications
2. Send a message in the group
3. Visit `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates` in your browser
4. Look for `"chat":{"id": YOUR_CHAT_ID}` in the JSON response
5. For groups, the ID is usually negative (e.g. `-1001234567890`)

### 3. Configure Environment Variables

**For local development:**
```bash
cp .env.example .env
```
Then edit `.env` and fill in your values:
```
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

**For production (Netlify):**
1. Go to your Netlify dashboard
2. Navigate to **Site settings → Environment variables**
3. Add these two variables:
   - `VITE_TELEGRAM_BOT_TOKEN` = your bot token
   - `VITE_TELEGRAM_CHAT_ID` = your chat ID
4. Trigger a new deploy for the changes to take effect

> **Important:** Do NOT put your actual token/chat ID in `netlify.toml` — that file is committed to the repository. Use the Netlify dashboard instead.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
