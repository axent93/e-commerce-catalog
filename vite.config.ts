import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import { VitePWA } from 'vite-plugin-pwa'

const apiUrl = process.env.VITE_APP_API_URL || 'http://localhost:5000/api'

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin('all'),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      devOptions: {
        enabled: true
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp(`${apiUrl}/products`),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'products-cache'
            }
          },
          {
            urlPattern: new RegExp(`${apiUrl}/categories`),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'categories-cache'
            }
          }
        ]
      },
      manifest: {
        name: 'E-commerce catalog',
        short_name: 'EComCatalog',
        description: 'A React application',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
