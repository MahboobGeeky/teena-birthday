# Happy Birthday, Teena

A small, friendly single-page site built with **React** and **Tailwind CSS** (Vite) to share birthday wishes and photos.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy on Vercel

Vercel works well with Vite/React static sites. Use either the dashboard or the CLI.

### Option A: Deploy from GitHub (recommended)

1. Push this project to a GitHub repository (without committing secrets).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New…** → **Project**, then **Import** your repository.
4. Vercel should detect **Vite** automatically. Defaults are usually:
   - **Framework Preset:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`
5. Click **Deploy**. After the build finishes, you get a production URL (and preview URLs for each branch/PR).

### Option B: Deploy with Vercel CLI

1. Install the CLI (once):

   ```bash
   npm i -g vercel
   ```

2. From the project root, run:

   ```bash
   vercel
   ```

3. Follow the prompts (link to a Vercel account, confirm project name, etc.). For production:

   ```bash
   vercel --prod
   ```

### Notes

- **Environment variables:** This app does not require API keys. If you add any later, set them in the Vercel project under **Settings → Environment Variables**.
- **Custom domain:** In the Vercel project, open **Settings → Domains** to attach a domain you own.

---

Photos live in `public/images/` (`photo-1.jpeg` … `photo-13.jpeg`). Replace them there if you update pictures; keep the same filenames or update `src/data/photos.js` accordingly.
# teena-birthday
