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
    slug: "chat-terminal",
    title: "Chat Terminal — Client OpenAI en Java",
    year: "2025",
    summary:
      "Appli Java pour chatter en ligne de commande (profil, historique, sélection de modèle, mode offline de test).",
    tags: ["Java", "OpenAI API", "CLI"],
    image: "/projects/chat-terminal.webp",
    width: 1200,
    height: 800,
    links: {
      repo: "https://github.com/Erwan1202/chat-terminal"
    }
  },
  {
    slug: "modu-sol",
    title: "ModuSol — SaaS modulaire PME",
    year: "2025",
    summary:
      "Plateforme où les PME activent des modules à la carte (e-commerce, parrainage…). Dashboard, provisioning, suivi.",
    tags: ["React", "Firebase", "Firestore", "Vercel"],
    image: "/projects/modusol.webp",
    width: 1200,
    height: 800,
    links: {
      demo: "https://example.com/modusol"
    }
  }
];
