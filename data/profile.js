// src/data/profile.js
export const profile = {
    name: "Erwan Maréchal",
    role: "Développeur Web · Full-Stack JS",
    location: "Villejuif (94800), France",
    email: "erwan.a.marechal@gmail.com",
    availability: "Recherche une alternance à partir de septembre / octobre",
    tagline:
        'Je m’appelle Erwan Maréchal. Je conçois des interfaces propres et des petites APIs qui font le job. Côté outils, je travaille surtout en JavaScript/TypeScript : React/Next (ou Vue) pour le front, Node/Express pour le back, avec Postgres/MySQL (parfois Supabase/Firebase quand il faut aller vite).\n' +
        'J’entame ma 3ᵉ année du Bachelor Développement web & application à l’Efrei. Mon approche est simple : partir d’un besoin clair, livrer une v1 utilisable, mesurer, itérer. Je privilégie le code lisible, les perfs raisonnables, et des micro-interactions qui n’encombrent pas l’accessibilité.\n' +
        'Je cherche une alternance à partir de septembre/octobre, où je peux contribuer en front et/ou en back, et monter encore en compétences.',
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
