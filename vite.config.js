import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function vercelOgPlugin() {
  return {
    name: 'vercel-og-url',
    transformIndexHtml(html) {
      const domain =
        process.env.VITE_SITE_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL ||
        process.env.VERCEL_URL

      if (!domain) return html
      const baseUrl = domain.startsWith('http') ? domain.replace(/\/$/, '') : `https://${domain}`
      return html.replaceAll('content="/og-image.jpg"', `content="${baseUrl}/og-image.jpg"`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vercelOgPlugin()],
})
