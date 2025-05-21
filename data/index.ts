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
    {
    id: 3,
    title: "Mes langages deprogrammation",
    description: "Je cherche sans cesse à m'améliorer !",
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
      "Ludovicccc vraiment trop cool.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "ludo ludo ludo.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "nonononon",
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