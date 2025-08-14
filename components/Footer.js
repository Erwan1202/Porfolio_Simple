// components/Footer.js
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Erwan Maréchal — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
