import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { Inter, Noto_Sans_Devanagari } from 'next/font/google'

// Font optimization for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const notoDev = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  variable: '--font-noto-dev',
  weight: ['400', '600', '700']
})

// ============================================================
// 🚀 FULL SEO METADATA - MAA GAYATRI GOSHAINGANJ MART (MGGM)
// ============================================================
export const metadata = {
  metadataBase: new URL('https://maagayatrigoshainganjmart.com'),
  
  // Primary Title & Description
  title: {
    default: 'Maa Gayatri Goshainganj Mart (MGGM) - Online Grocery Store in Lucknow',
    template: '%s | MGGM - Goshainganj Mart'
  },
  description: 'Shop fresh groceries, dals, rice, spices, oils, household items & personal care at Maa Gayatri Goshainganj Mart (MGGM). Best online kirana store in Goshainganj, Lucknow with free delivery!',

  // Keywords for better search ranking
  keywords: [
    'Maa Gayatri Goshainganj Mart',
    'MGGM',
    'online grocery store Lucknow',
    'kirana store Goshainganj',
    'fresh groceries delivery',
    'buy dal rice spices online',
    'household items Lucknow',
    'grocery shop near me',
    'Maa Gayatri Mart',
    'Goshainganj grocery',
    'home delivery kirana',
    'best grocery store Lucknow',
    'cheap grocery online',
    'MGGM store'
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Maa Gayatri Goshainganj Mart (MGGM) - Fresh Groceries Delivered',
    description: 'Your neighbourhood kirana store in Goshainganj, Lucknow. Shop dals, rice, spices, oils & household items with free delivery above ₹500.',
    url: 'https://maagayatrigoshainganjmart.com',
    siteName: 'Maa Gayatri Goshainganj Mart',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MGGM - Maa Gayatri Goshainganj Mart Online Grocery Store',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Maa Gayatri Goshainganj Mart (MGGM) - Online Grocery Store',
    description: 'Fresh groceries, dals, spices & household items delivered to your door in Goshainganj, Lucknow.',
    images: ['/twitter-image.jpg'],
    site: '@MGGMStore',
    creator: '@MGGMStore',
  },

  // Additional SEO
  alternates: {
    canonical: 'https://maagayatrigoshainganjmart.com',
    languages: {
      'en-IN': 'https://maagayatrigoshainganjmart.com',
      'hi-IN': 'https://maagayatrigoshainganjmart.com/hi',
    }
  },

  // Robots & Crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search consoles
  verification: {
    google: 'your-google-verification-code-here',
    yandex: 'your-yandex-verification-code-here',
    // other: {
    //   'baidu-site-verification': 'code-here',
    // },
  },

  // Icons & Branding
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#b45309' },
    ],
  },

  // Theme & Display
  manifest: '/site.webmanifest',
  themeColor: '#b45309', // Amber-700
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // Other metadata
  category: 'ecommerce',
  classification: 'Online Grocery Store',
  creator: 'Maa Gayatri Goshainganj Mart',
  publisher: 'MGGM',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },

  // Bookmark & App Links
  applicationName: 'MGGM - Maa Gayatri Goshainganj Mart',
  appleWebApp: {
    capable: true,
    title: 'MGGM Grocery',
    statusBarStyle: 'black-translucent',
  },

  // RSS Feed (if applicable)
  // feed: [
  //   {
  //     url: '/feed.xml',
  //     title: 'MGGM Latest Products Feed',
  //   },
  // ],
}

// ============================================================
// JSON-LD Structured Data for Rich Snippets
// ============================================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Maa Gayatri Goshainganj Mart',
  alternateName: 'MGGM',
  image: 'https://maagayatrigoshainganjmart.com/logo.png',
  url: 'https://maagayatrigoshainganjmart.com',
  telephone: '+91-8840055833',
  email: 'info@maagayatrigoshainganjmart.com',
  description: 'Best online grocery store in Goshainganj, Lucknow. Fresh kirana items, dals, rice, spices, oils, and household essentials delivered at your doorstep.',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Road, Goshainganj',
    addressLocality: 'Lucknow',
    addressRegion: 'UP',
    postalCode: '226001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.8467',
    longitude: '80.9462',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '22:00',
    }
  ],
  sameAs: [
    'https://facebook.com/MGGMStore',
    'https://instagram.com/MGGMStore',
    'https://twitter.com/MGGMStore',
    'https://youtube.com/@MGGMStore',
  ],
  paymentAccepted: ['Cash', 'UPI', 'Credit Card', 'Debit Card'],
  currenciesAccepted: 'INR',
  areaServed: {
    '@type': 'City',
    name: 'Lucknow',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Grocery Products',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Dals & Pulses',
        itemListElement: [
          { '@type': 'Product', name: 'Toor Dal' },
          { '@type': 'Product', name: 'Moong Dal' },
          { '@type': 'Product', name: 'Masoor Dal' },
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Rice & Grains',
        itemListElement: [
          { '@type': 'Product', name: 'Basmati Rice' },
          { '@type': 'Product', name: 'Wheat Atta' },
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Spices & Masala',
        itemListElement: [
          { '@type': 'Product', name: 'Turmeric Powder' },
          { '@type': 'Product', name: 'Red Chili Powder' },
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Oils & Ghee',
        itemListElement: [
          { '@type': 'Product', name: 'Mustard Oil' },
          { '@type': 'Product', name: 'Ghee' },
        ]
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1250',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Ramesh Kumar'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Best grocery store in Goshainganj! Fresh products and very reasonable prices.',
      datePublished: '2025-01-15',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Priya Singh'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.5',
        bestRating: '5',
      },
      reviewBody: 'I love shopping from MGGM. The delivery is always on time!',
      datePublished: '2025-02-20',
    }
  ],
  numberOfEmployees: '12',
  foundingDate: '1995-01-01',
  foundingLocation: {
    '@type': 'Place',
    name: 'Goshainganj, Lucknow',
  },
  brand: {
    '@type': 'Brand',
    name: 'MGGM',
    logo: 'https://maagayatrigoshainganjmart.com/logo.png',
  },
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://maagayatrigoshainganjmart.com',
      actionPlatform: 'http://schema.org/DesktopWebPlatform',
    },
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      minPrice: '10',
      maxPrice: '5000',
    },
  },
}

// ============================================================
// MAIN LAYOUT COMPONENT
// ============================================================
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoDev.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Additional Meta Tags for better SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="Maa Gayatri Goshainganj Mart" />
        <meta name="author" content="Maa Gayatri Goshainganj Mart" />
        <meta name="rating" content="General" />
        
        {/* Business Meta Tags */}
        <meta name="business:name" content="Maa Gayatri Goshainganj Mart" />
        <meta name="business:brand" content="MGGM" />
        <meta name="business:type" content="Grocery Store" />
        <meta name="business:location" content="Goshainganj, Lucknow" />
        <meta name="business:phone" content="+91-8840055833" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Additional Schema for Breadcrumb (optional but good) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://maagayatrigoshainganjmart.com'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Grocery',
                  'item': 'https://maagayatrigoshainganjmart.com/grocery'
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Dals & Rice',
                  'item': 'https://maagayatrigoshainganjmart.com/category/dals-rice'
                }
              ]
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Maa Gayatri Goshainganj Mart',
              'alternateName': 'MGGM',
              'url': 'https://maagayatrigoshainganjmart.com',
              'logo': 'https://maagayatrigoshainganjmart.com/logo.png',
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+91-8840055833',
                'contactType': 'Customer Service',
                'availableLanguage': ['English', 'Hindi']
              },
              'sameAs': [
                'https://facebook.com/MGGMStore',
                'https://instagram.com/MGGMStore',
                'https://twitter.com/MGGMStore',
                'https://youtube.com/@MGGMStore'
              ]
            })
          }}
        />

        {/* Mobile Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MGGM" />
        
        {/* MS Tile */}
        <meta name="msapplication-TileColor" content="#b45309" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        
        {/* Theme Color for all browsers */}
        <meta name="theme-color" content="#b45309" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#78350f" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}