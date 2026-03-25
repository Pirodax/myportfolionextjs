export const navItems = [
  { name: "À propos", name_en: "About", link: "#about" },
  { name: "Projets", name_en: "Projects", link: "#projects" },
  { name: "Témoignages", name_en: "Testimonials", link: "#testimonials" },
  { name: "Contact", name_en: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "La collaboration est la clé pour des projets ambitieux",
    title_en: "Collaboration is the key to ambitious projects",
    description: "",
    description_en: "",
    className: [
      "lg:col-span-4 md:col-span-4",
      "lg:col-start-1 md:col-start-1",
      "lg:row-span-2 md:row-span-2",
      "lg:row-start-1 md:row-start-1",
    ].join(" "),
    imgClassName: "absolute left-0 top-0 w-full h-full object-cover ",
    titleClassName: "justify-end",
    img: "/Projet_DesignSprint/img3_projet_DesignSprint.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je suis habitué à travailler au sein d'équipes multiculturelles",
    title_en: "I'm used to working in multicultural teams",
    description: "Échange universitaire de six mois à Taïwan",
    description_en: "Six-month university exchange in Taiwan",
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
  {
    id: 3,
    title: "",
    title_en: "",
    description: "",
    description_en: "",
    className: [
      "lg:col-span-3 md:col-span-3",
      "lg:col-start-1 md:col-start-1",
      "lg:row-span-0.5 md:row-span-0.5",
      "lg:row-start-3 md:row-start-3",
    ].join(" "),
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
  },
  {
    id: 5,
    title: "",
    title_en: "",
    description: "",
    description_en: "",
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
    title: "Prêt(e) à travailler ensemble ?",
    title_en: "Ready to work together?",
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
    title_en: "My Professional Portfolio, Next.js",
    des: "Découvrez mon portfolio professionnel moderne avec des effets visuels avancés, construit comme une application web responsive.",
    des_en: "Explore my modern professional portfolio with advanced visual effects, built as a responsive web application.",
    img: "/Project_web_portfolio/img1_project_web.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/cloudfare.png", "/vercel.png"],
    link: "/projet1",
  },
  {
    id: 2,
    title: "Site de vitrine Deedee DORZEE - Next.js TypeScript",
    title_en: "Deedee DORZEE Showcase Website - Next.js TypeScript",
    des: "Un site web de type portfolio regroupant les travaux photographiques et la biographie de Deedee Dorzée, développé avec Next.js et TypeScript.",
    des_en: "A portfolio-type website gathering the photographic works and biography of Deedee Dorzée, built with Next.js and TypeScript.",
    img: "/Projet_dd_portfolio/img1_project_dd_portfolio.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/vercel.png"],
    link: "/projet2",
  },
  {
    id: 3,
    title: "Premier prix du concours Design Sprint 2025 (Figma🥇)",
    title_en: "First Prize at Design Sprint Contest 2025 (Figma🥇)",
    des: "Développement du prototype d'une application mobile via l'outil Figma.",
    des_en: "Development of a mobile application prototype using Figma.",
    img: "/Projet_DesignSprint/img1_projet_DesignSprint.png",
    iconLists: ["/figma.png"],
    link: "/projet3",
  },
  {
    id: 4,
    title: "Déploiement d'une Newsletter – Bêta-testeurs Loodo",
    title_en: "Newsletter Deployment – Loodo Beta-Testers",
    des: "Automatisation des envois et gestion des abonnés avec vérification d'email, via Next.js, PostgreSQL, Prisma et une base de données Neon.",
    des_en: "Automated sends and subscriber management with email verification, using Next.js, PostgreSQL, Prisma and a Neon database.",
    img: "/Projet_newsletter_loodo/img1_project_newsletter_loodo.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/vercel.png", "/icon_techno/neon.webp", "/icon_techno/postgresql.webp", "/icon_techno/prisma.png"],
    link: "/projet4",
  },
  {
    id: 5,
    title: "Mutuellia – Application mobile de simulation de remboursements santé (Projet d'équipe)",
    title_en: "Mutuellia – Mobile Health Insurance Reimbursement Simulator (Team Project)",
    des: "Travail en équipe de 6 personnes en mode Agile Scrum pour développer une MVP d'application mobile. Gestion complexe de bases de données massives. Rôle : Tech Lead & Product Owner.",
    des_en: "Teamwork of 6 people in Agile Scrum mode to develop a mobile app MVP. Complex management of massive databases. Role: Tech Lead & Product Owner.",
    img: "/Projet_Mutuellia/img0_project_mutuellia.png",
    iconLists: ["/icon_techno/dart.png", "/icon_techno/flutter.png", "/icon_techno/android_studio.png", "/icon_techno/postgresql.webp", "/icon_techno/supabase.png", "/icon_techno/jira.png"],
    link: "/projet5",
  },
  // {
  //   id: 6,
  //   title: "Fine-tuning QLoRA d'un LLM",
  //   title_en: "QLoRA Fine-tuning of an LLM",
  //   des: "Fine-tuning d'un grand modèle de langage (LLM) avec la technique QLoRA pour l'adapter à un domaine spécifique, en réduisant les ressources GPU grâce à la quantification 4-bit.",
  //   des_en: "Fine-tuning of a large language model (LLM) with QLoRA technique to adapt it to a specific domain, drastically reducing GPU resources with 4-bit quantization.",
  //   img: "/Projet_QLoRA/img1_project_qlora.png",
  //   iconLists: ["/icon_techno/python.png", "/icon_techno/huggingface.png"],
  //   link: "/projet6",
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
    img: "/pp_Antoine_LEBLANC.jpg",
  },
];

export const companies = [
  { id: 1, name: "cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "HOSTINGER", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "docker.", img: "/dock.svg", nameImg: "/dockerName.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Conception et développement d'applications web et mobile.",
    desc_en: "Design and development of web and mobile applications.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Elocance",
    desc: "Gestion d'équipe agile et aisance à l'oral; lauréat du prix « Coup de cœur » deux années consécutives au sein de mon école.",
    desc_en: "Agile team management and public speaking skills; winner of the 'Fan Favorite' award two consecutive years at school.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "githube",
    desc: "Bonne utilisation d'outils de gestion de versions, tels que GitHub et GitLab.",
    desc_en: "Proficient use of version control tools such as GitHub and GitLab.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg", link: "https://github.com/Pirodax" },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ludovic-bergeron-14b308268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];
