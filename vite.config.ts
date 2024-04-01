import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    Icons({
      compiler: 'svelte'
    }),
    SvelteKitPWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      srcDir: 'src',
      scope: '/',
      base: '/',
      devOptions: {
        enabled: process.env.NODE_ENV === 'development',
        type: 'module',
        navigateFallback: '/'
      },
      manifest: {
        short_name: 'NASA Hunch',
        name: 'NASA Hunch',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#7c3aed',
        background_color: '#ffffff',
        description: 'The NASA Hunch website.',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      },
      injectManifest: {
        globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
      },
      workbox: {
        globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    hmr: !process.env.CODESPACES,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
