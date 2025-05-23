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
    title: "Réseau social - Next.js et Tailwind CSS",
    des: "Découvrez cette application web et mobile qui changera le monde des réseaux sociaux à tout jamais",
    img: "/img1_project_REMEMBER.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/starUML.png", "/figma.png", "/android-studio.png"],
    link: "/ui.apple.com",
  },
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
      "Soyez un des premiers à laisser un commentaire! Envoyez-moi un message privé et j'ajouterai votre contribution par la suite 😉",
    name: "Ludovic Bergeron",
    title: "Étudiant en cycle d'ingénieur à l'Esiea (3ème année) ",
    img : "/pp_ludovic.jpg",
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