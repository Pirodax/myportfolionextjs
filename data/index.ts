import { MdDescription } from "react-icons/md";
// import ActiveLink from '/app/components/ActiveLink';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "La collaboration est la clé pour des projets ambitieux",
    description: "",
    className: [
      "lg:col-span-4 md:col-span-4",
      "lg:col-start-1 md:col-start-1",
      "lg:row-span-2 md:row-span-2",
      "lg:row-start-1 md:row-start-1",
    ].join(" "),
    imgClassName: "absolute left-0 top-0 w-full h-full object-cover ",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
     
  },
  {// pour afficher le globe il faut row = 2*col
    id: 2,
    title: "Je suis habitué à travailler au sein d'équipes multiculturelles",
    description: "Échange universitaire de six mois à Taïwan",
    className: [
      "lg:col-span-2 md:col-span-2",
      "lg:col-start-5 md:col-start-5",
      "lg:row-span-2 md:row-span-2",
      "lg:row-start-1 md:row-start-1",
    ].join(" "),
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    },
    {// mes langages de programations
    id: 3,
    title: "",
    description: "",
    className: [
      "lg:col-span-3 md:col-span-3",
      "lg:col-start-1 md:col-start-1",
      "lg:row-span-0.5 md:row-span-0.5",
      "lg:row-start-3 md:row-start-3",
    ].join(" "),
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    //spareImg: "/ui.earth.com",
  },
  {// Mon CV téléchargable 
    id: 5,
    title: "",
    description: "",
    className: [
    "lg:col-span-3 md:col-span-3",
    "lg:col-start-4 md:col-start-4",
    "lg:row-span-2 md:row-span-2",
    "lg:row-start-3 md:row-start-3",
    ].join(" "),
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
  },
  {
    id: 6,
    title: " Prêt(e) à travailler ensemble ?",
    className: [
    "lg:col-span-3 md:col-span-3",
    "lg:col-start-1 md:col-start-1",
    "lg:row-span-0.5 md:row-span-0.5",
    "lg:row-start-4 md:row-start-4",
    ].join(" "),
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mon Portfolio professionnel, Next.js",
    des: "Découvrez mon portfolio professionnel moderne avec des effets visuels avancés, construit comme une application web responsive.",
    img: "/img1_project_web.png",
    iconLists: ["/re.svg","/next.svg", "/tail.svg", "/ts.svg", "/cloudfare.png", "/vercel.png","/sentry.png"],
    link: "/projet1",
  },
   {
    id: 2,
    title: "Site de vitrine Deedee DORZEE - Next.js TypeScript",
    des: "Un site web de type portfolio regroupant les travaux photographiques et la biographie de Deedee Dorzée, développé avec Next.js et TypeScript.",
    img: "/Projet_dd_portfolio/img1_project_dd_portfolio.png",
    iconLists: ["/re.svg","/next.svg", "/tail.svg", "/ts.svg", "/vercel.png",],
    link: "/projet2",
  },
    {
    id: 3,
    title: "Premier prix du concours Design Sprint 2025 (Figma🥇)",
    des: "Dévéloppement du prototype d'une application mobile via l'outil Figma.",
    img: "/Projet_DesignSprint/img1_projet_DesignSprint.png",
    iconLists: ["/figma.png"],
    link: "/projet3",
  },
  {
    id: 4,
    title: "Déploiement d'une Newsletter – Bêta-testeurs Loodo",
    des: "Automatisation des envois et gestion des abonnés avec vérification d'email, via Next.js, PostgreSQL, Prisma et une base de données Neon.",
    img: "/Projet_newsletter_loodo/img1_project_newsletter_loodo.png",
    iconLists: ["/re.svg","/next.svg", "/tail.svg", "/ts.svg", "/vercel.png","/icon_techno/neon.webp","/icon_techno/postgresql.webp","/icon_techno/prisma.png", ],
    link: "/projet4",
  },
  {
    id: 5,
    title: "Mutuellia – Application mobile de simulation de remboursements santé (Projet d'équipe)",
    des: "Travail en équipe de 6 personnes en mode Agile Scrum pour développer une MVP d'application mobile. Gestion complexe de bases de données massives (tableaux de remboursement de multiples mutuelles et formules). Rôle : Tech Lead & Product Owner.",
    img: "/placeholder-project.png",
    iconLists: ["/icon_techno/flutter.png", "/icon_techno/postgresql.webp", "/icon_techno/supabase.png", "/icon_techno/github.png", "/icon_techno/jira.png"],
    link: "/projet5",
  },
  {
    id: 6,
    title: "Loodo – Application mobile de productivité (Projet coup de cœur)",
    des: "Application personnelle née d'un besoin réel : améliorer ma concentration et mon organisation. Un outil que j'ai créé pour moi-même et que je souhaite maintenant partager avec le monde pour aider d'autres à mieux gérer leurs projets personnels et académiques.",
    img: "/placeholder-project.png",
    iconLists: ["/icon_techno/flutter.png", "/figma.png", "/icon_techno/postgresql.webp", "/icon_techno/supabase.png"],
    link: "/projet6",
  },
  {
    id: 7,
    title: "Sosoft – Mini CMS sur mesure (Projet professionnel)",
    des: "Développement de sites web professionnels avec un mini CMS personnalisé pour un client réel. Gestion de contenu via interface graphique, CI/CD et déploiement automatisé. Livrable professionnel avec suivi client.",
    img: "/placeholder-project.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/icon_techno/postgresql.webp", "/icon_techno/supabase.png", "/vercel.png"],
    link: "/projet7",
  }


  // {
  //   id: 4,
  //   title: "jeu 2D - GameMaker Studio",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },

  // {
  //   id: 5,
  //   title: "Design Logo - Figma",
  //   des: "Logo design project using Figma, showcasing creativity and design skills.",
  //   img: "/b5.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Intéressé et Intéressant, Ludovic à su aller de l'avant pour aboutir sur ses projets. Bravo !",
    name: "Emmanuel Perez",
    title: "Professeur d'informatique à ESIEA, diplômé de l'EPITA",
    img: "/pp_Emanuel_Perez.jpg",
  },
  {
    quote:
      "C'est un étudiant sympa, curieux, qui s'intéresse beaucoup au développement web. En plus, il parle très bien chinois 🙂",
    name: "Zequan HUANG",
    title: "Doctorant & Enseignant à ESIEA, Ingenieur cybersécurité, diplômé de l'Université Paris 1 Panthéon-Sorbonne",
    img: "/pp_Zequan_HUANG.jpg",
  },
  {
    quote:
      "Un étudiant sérieux, agréable et autonome, démontrant une solide capacité de travail. Il a suivi mes cours de Python avec assiduité, et ce fut un réel plaisir de l'accompagner dans sa progression.",
    name: "Antoine LEBLANC",
    title: "Ingénieur en Intelligence Artificielle & Enseignant à ESIEA, diplômé de l'Université IMT Mines Albi, certificat en intelligence artificelle à Polytechnique Montréal",
    img : "/pp_Antoine_LEBLANC.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Conception et développement d'applications web et Android statiques et dynamiques avec Next.js et Android Studio.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Elocance",
    desc: "Gestion d'équipe et aisance à l'oral; lauréat du prix « Coup de cœur » deux années consécutives au sein de mon école.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "githube",
    desc: "Bonne utilisation d'outils de gestion de versions, tels que GitHub et GitLab.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  //  {
  //   id: 2,
  //   title: "Mobile App Dev ",
  //   desc: "Dévelopement Algoritme  .",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Pirodax"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ludovic-bergeron-14b308268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
];