import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lakhotia Eye Centre',
    short_name: 'Lakhotia Eye',
    description: 'Excellence in Eye Care Since 1986 - Dr. Sharad Lakhotia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1d6fb8',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
