// app/layout.js
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/components.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Erwan Maréchal — Portfolio',
  description: 'Développeur web • Projets, expériences et contact.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
