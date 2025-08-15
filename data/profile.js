// src/data/profile.js
export const profile = {
  name: "Erwan Maréchal",
  role: "Développeur Web · Full-Stack JS",
  location: "Villejuif (94800), France",
  email: "erwan.a.marechal@gmail.com",
  availability: "Recherche une alternance à partir de septembre / octobre",
  tagline:
    "J’aime construire des interfaces propres, des APIs fiables, et garder un code simple, performant et maintenable.",
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "B2 (TOEIC 860)" },
    { name: "Espagnol", level: "B1" }
  ],
  // Affiche ce que tu veux dans l’About
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React", "Angular", "Bootstrap"],
    backend: ["Node.js (JS/TS)", "Express.js", "PHP / Laravel", "Python (Django/Flask/FastAPI)", "Java (Spring Boot)", "Ruby on Rails"],
    data: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
    tools: ["Docker", "Git/GitHub", "Linux", "Postman", "PowerShell", "CLI", "VirtualBox"],
  },
  misc: ["Permis B & A", "PSE2"]
};
