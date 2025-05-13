import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base:'/solid-resume/' ,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'], // Add your static assets
      devOptions:{enabled:true},
      manifest: {
        name: 'Solid Résumé',
        short_name: 'SolidResume',
        description: 'Make your own Solid Résumé in minutes! ',
        theme_color: '#2d2d2d',
        icons: [
            {
              "src": "favicon.png",
              "sizes": "192x192",
              "type": "image/png"
            }],
        start_url:'/solid-resume/' ,
        screenshots: [
        {
          src: "screenshot-narrow.png",
          sizes: "320x320",
          type: "image/png",
          form_factor: "narrow",
          label: "Narrow"
        },
        {
          src: "screenshot-wide.png",
          sizes: "320x320",
          type: "image/png",
          form_factor: "wide",
          label: "Wide"
        }
        ],
      },
      workbox: {
        runtimeCaching:[
          { urlPattern:/assets/, handler:'NetworkFirst' },
        ]
        //globPatterns: ['**/*.{js,css,html,png,jpg,svg}'], // Automatically cache these file types
      },

    })




  ],

})
