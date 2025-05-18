import { MdDescription } from "react-icons/md";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
/////////////////////////////////// on est sur un tableau 6X6 (modifible dans BentoGrid.tsx)
// lg: pour large (grande ecran)
// md: pour medium (moyen ecran)
// sm: pour small (petit ecran) ou rien pour movbile de base
// col-span-x = x colonne
// row-span-x = x ligne 
// lg:col-start-1 = commence à la colonne 1 pour lg
// md:row-start-1 = commence à la ligne 1 pour md
//////////////////////////////////////////////
//className: "fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-white/90 px-6 py-3 rounded-xl shadow-lg", fait un grid qui te suit 
// Les utilitaires disponibles :

// object-top, object-bottom, object-left, object-right

// Combinaisons : object-top-left, object-bottom-right, etc.
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
    title: "Je suis habitué à travailler au sein d&apos;équipes multiculturelles",
    description: "faites touner ;)",
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
    title: "Mes langages deprogrammation",
    description: "Je cherche sans cesse à m&apos;améliorer !",
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
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   className: [
  //   "lg:col-span-3 md:col-span-3",
  //   "lg:col-start-1 md:col-start-1",
  //   "lg:row-span-0.5 md:row-span-0.5",
  //   "lg:row-start-3 md:row-start-3",
  //   ].join(" "),
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: [
    "lg:col-span-3 md:col-span-3",
    "lg:col-start-4 md:col-start-4",
    "lg:row-span-2 md:row-span-2",
    "lg:row-start-3 md:row-start-3",
    ].join(" "),
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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
    title: "Simulation d'une ruche d'abeilles en C",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/Mes-Projets/Projet1.txt",
  },
  {
    id: 2,
    title: "My Portfolio créé avec Next.js et Tailwind CSS",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "jeu 2D - GameMaker Studio",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Reseau social - Next.js et Tailwind CSS",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Design Logo - Figma",
    des: "Logo design project using Figma, showcasing creativity and design skills.",
    img: "/b5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
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