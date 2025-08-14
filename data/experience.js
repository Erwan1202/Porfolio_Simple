// src/data/experience.js
export const experiences = [
  {
    company: "Sapco",
    location: "Le Coudray-Montceaux",
    role: "Développeur d’applications (Stage)",
    start: "2022-06",
    end: "2022-09",
    bullets: [
      "Conception et implémentation d’une base de données MySQL (schéma relationnel, requêtes optimisées).",
      "Création d’une interface CRUD sécurisée (Tkinter/Python) pour le suivi entretien/réparation du parc industriel.",
      "Amélioration des processus internes via une interface plus intuitive pour les équipes."
    ],
    tech: ["Python", "MySQL", "Tkinter", "Git"]
  },
  {
    company: "Projets personnels",
    location: "Paris (remote)",
    role: "Développeur web",
    start: "2023-01",
    end: "Aujourd’hui",
    bullets: [
      "Dév. d’interfaces propres et responsives (Next.js/React) et APIs Node/Express.",
      "Mise en place d’auth, stockage et déploiements légers (Supabase, Vercel/Netlify)."
    ],
    tech: ["JavaScript", "Next.js", "Node.js", "Supabase"]
  }
];
