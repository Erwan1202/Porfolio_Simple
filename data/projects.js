// src/data/projects.js
export const projects = [
  {
    slug: "momentia",
    title: "Momentia — Instagram-like fullstack",
    year: "2025",
    summary:
      "Réseau social minimal : feed, likes, commentaires, recherche d’amis. Front en Vue, API Node/Express, base Supabase.",
    tags: ["Vue", "Node", "Supabase", "Tailwind→CSS pur"],
    image: "/projects/momentia.webp", // place l'image dans /public/projects/
    width: 1200,
    height: 800,
    links: {
      demo: "https://example.com/momentia",
      repo: "https://github.com/Erwan1202/momentia"
    }
  },
  {
    slug: "Physarum",
    title: "Battle Grid: Physarum - Un jeu de stratégie au tour par tour",
    year: "2025",
    summary: "Battle Grid: Physarum est un jeu de stratégie au tour par tour dans lequel vous incarnez un organisme intelligent de type Physarum. Déployez-vous sur une carte, construisez des bases, gérez votre énergie et affrontez des bots adaptatifs pour dominer la grille.",
    tags: ["JavaScript", "TailwindCSS", "HTML", "React", "Zustand", "Vite", "Vercel"],
    image: "/img/Physarum.png",
    width: 1200,
    height: 800,
    links: {
      demo: "https://physarum-five.vercel.app/",
      repo: "https://github.com/Erwan1202/physarum"
    }
  }
  
];
