# Client

Frontend app built with React + Vite + Tailwind.

Run locally:

```bash
cd client
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Deployment (Vercel):
- Connect the repo to Vercel.
- Environment variables (optional):
  - RESEND_API_KEY — Resend API key to send emails
  - CONTACT_EMAIL — where contact emails are sent
  - OPENAI_API_KEY — optional, for the AI assistant

Notes:
- Contact form posts to `/api/send-email` which uses Resend when configured. If not configured, messages are logged.
- PDF resume download is client-side (jsPDF).
- Blog content is in `src/content/blog/*.md`.
- Theme is toggled with `localStorage` via `useTheme` hook.
