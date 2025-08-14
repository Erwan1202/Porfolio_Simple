// app/layout.js
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/components.css';

import Enhancements from "@/components/Enchancements"

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://example.com'), // ← remplace par ton domaine à terme
  title: {
    default: 'Erwan Maréchal — Portfolio',
    template: '%s · Erwan Maréchal'
  },
  description: 'Développeur web : interfaces propres, APIs fiables, performance et accessibilité.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Erwan Maréchal — Portfolio',
    description: 'Projets, expériences et contact.',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erwan Maréchal — Portfolio',
    description: 'Projets, expériences et contact.',
    images: ['/og.jpg']
  },
  icons: { icon: '/favicon.ico' },
  themeColor: '#0b0f14'
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
  <a className="skip-link" href="#contenu">Aller au contenu</a>
  <Header />
  <main id="contenu">{children}</main>
  <Footer />
  <Enhancements />
</body>
    </html>
  );
}
