/* ---------------------------------------------------------------------------
   Site content. One source of truth.

   New content (research, featuredWork, methods, education, leadership) carries
   its copy as { en, fr } objects. The legacy `projects` array below keeps the
   older `_en` suffix shape so the existing project pages keep working.
   --------------------------------------------------------------------------- */

export type Bilingual = { en: string; fr: string };

export const identity = {
  name: "Ludovic Bergeron",
  email: "ludo.bergeron@icloud.com",
  github: "https://github.com/Pirodax",
  linkedin: "https://www.linkedin.com/in/bergeronludovic",
  // Replace this file to update the CV; nothing else needs to change.
  cv: "/CV/CV_Ludovic_BERGERON.pdf",
  location: { en: "Paris, France", fr: "Paris, France" } as Bilingual,
};

export const navItems = [
  { id: "research", label: { en: "Research", fr: "Recherche" } as Bilingual },
  { id: "work", label: { en: "Work", fr: "Travaux" } as Bilingual },
  { id: "methods", label: { en: "Methods", fr: "Méthodes" } as Bilingual },
  { id: "contact", label: { en: "Contact", fr: "Contact" } as Bilingual },
];

export const hero = {
  headline: {
    en: ["Machine learning", "that has to hold up", "outside the lab."],
    fr: ["Des modèles qui doivent", "tenir debout", "hors du laboratoire."],
  },
  lead: {
    en: "I'm Ludovic Bergeron, a final-year engineering student at ESIEA (MSc level, AI & Data Science) and a student researcher at esiealab, where I work on making deep reinforcement learning controllers for type 1 diabetes explainable enough to reach a clinic. Before that I ran an open-ended applied research project at the AI Factory of Christian Dior Couture, on product similarity for recommendation.",
    fr: "Je suis Ludovic Bergeron, étudiant en dernière année d'ingénierie à l'ESIEA (niveau master, IA & science des données) et étudiant-chercheur à l'esiealab, où je travaille à rendre les contrôleurs d'insuline par apprentissage par renforcement profond assez explicables pour atteindre la clinique. Avant cela, j'ai mené un projet de recherche appliquée en autonomie à l'AI Factory de Christian Dior Couture, sur la similarité produit pour la recommandation.",
  },
  seeking: {
    en: "Looking for a research internship and then a PhD in machine learning.",
    fr: "À la recherche d'un stage de recherche, puis d'une thèse en apprentissage automatique.",
  },
};

/* --------------------------------------------------------------------------
   Research — the work a researcher came here to read. Newest first.
   -------------------------------------------------------------------------- */

export type ResearchEntry = {
  id: string;
  period: Bilingual;
  status: Bilingual;
  current: boolean;
  org: string;
  meta: { label: Bilingual; value: string }[];
  title: Bilingual;
  abstract: Bilingual;
  methods: Bilingual;
  note?: Bilingual;
};

export const research: ResearchEntry[] = [
  {
    id: "esiealab",
    period: { en: "Sep 2026 — Jan 2027", fr: "Sept. 2026 — Janv. 2027" },
    status: { en: "In progress", fr: "En cours" },
    current: true,
    org: "esiealab, ESIEA",
    meta: [
      { label: { en: "Advisor", fr: "Encadrante" }, value: "Dr. Mélanie Piot" },
      { label: { en: "Place", fr: "Lieu" }, value: "Paris, France" },
    ],
    title: {
      en: "Explaining deep-RL insulin controllers through causal inference",
      fr: "Expliquer les contrôleurs d'insuline par apprentissage par renforcement, via l'inférence causale",
    },
    abstract: {
      en: "Deep reinforcement learning controllers for closed-loop insulin delivery perform well, but a clinician cannot see why they act. I infer which factor drives each glucose deviation — a meal, stress, the hormonal cycle — using anti-causal inference, then feed that factor back into the loop as an interpretable control variable. The aim is to lift the black-box barrier that keeps these controllers out of clinical deployment.",
      fr: "Les contrôleurs par apprentissage par renforcement profond pour la délivrance d'insuline en boucle fermée fonctionnent, mais un clinicien ne peut pas voir pourquoi ils agissent. J'infère quel facteur provoque chaque déviation glycémique — un repas, le stress, le cycle hormonal — par inférence anti-causale, puis je réinjecte ce facteur dans la boucle comme variable de contrôle interprétable. L'objectif : lever la barrière de la boîte noire qui tient ces contrôleurs à l'écart du déploiement clinique.",
    },
    methods: {
      en: "Deep reinforcement learning, causal and anti-causal inference, interpretable control, glucose dynamics simulation",
      fr: "Apprentissage par renforcement profond, inférence causale et anti-causale, contrôle interprétable, simulation de la dynamique glycémique",
    },
  },
  {
    id: "dior",
    period: { en: "Apr — Aug 2026", fr: "Avr. — Août 2026" },
    status: { en: "Completed", fr: "Terminé" },
    current: false,
    org: "Christian Dior Couture, AI Factory",
    meta: [
      {
        label: { en: "Role", fr: "Rôle" },
        value: "Applied ML Research Intern",
      },
      { label: { en: "Place", fr: "Lieu" }, value: "Paris, France" },
    ],
    title: {
      en: "Product similarity for recommendation, learned from metadata",
      fr: "Similarité produit pour la recommandation, apprise à partir des métadonnées",
    },
    abstract: {
      en: "An open-ended R&D brief with no predefined objective: I framed the problem statement and the research direction myself, from loosely defined business needs. I surveyed the recommendation literature and implemented a Prod2Vec / Meta-Prod2Vec recommender — skip-gram with negative sampling — as a first baseline. I then engineered product metadata as side information, pairing exploratory visual analysis with product-domain expertise, and benchmarked configurations under a rigorous offline protocol (HR@K, NDCG@K, MRR, coverage@K) to isolate the attributes that genuinely improved ranking quality.",
      fr: "Un sujet de R&D ouvert, sans objectif prédéfini : j'ai formulé moi-même la problématique et la direction de recherche à partir de besoins métier flous. J'ai parcouru la littérature de la recommandation et implémenté un recommandeur Prod2Vec / Meta-Prod2Vec — skip-gram avec échantillonnage négatif — comme première référence. J'ai ensuite construit les métadonnées produit comme information latérale, en croisant analyse visuelle exploratoire et expertise du domaine, puis comparé les configurations sous un protocole hors ligne rigoureux (HR@K, NDCG@K, MRR, coverage@K) pour isoler les attributs qui amélioraient réellement la qualité du classement.",
    },
    methods: {
      en: "Prod2Vec, Meta-Prod2Vec, skip-gram with negative sampling, offline ranking evaluation, UMAP, spectral clustering",
      fr: "Prod2Vec, Meta-Prod2Vec, skip-gram avec échantillonnage négatif, évaluation hors ligne du classement, UMAP, clustering spectral",
    },
    note: {
      en: "Covered by a confidentiality agreement. The problem framing, the method and the evaluation protocol are described here; the data, the product names and the figures are not.",
      fr: "Couvert par un accord de confidentialité. Le cadrage, la méthode et le protocole d'évaluation sont décrits ici ; les données, les noms de produits et les chiffres ne le sont pas.",
    },
  },
];

/* --------------------------------------------------------------------------
   Selected work — built things, with the research content kept visible.
   `media` is null until the real screenshots and video are in /public.
   -------------------------------------------------------------------------- */

export type WorkEntry = {
  id: number;
  href: string;
  period: Bilingual;
  context: Bilingual;
  title: string | Bilingual;
  summary: Bilingual;
  detail: Bilingual;
  stack: string[];
  media:
    | { type: "image"; src: string }
    | { type: "video"; src: string; poster?: string }
    | { type: "youtube"; id: string }
    | null;
  links?: { label: Bilingual; href: string }[];
};

export const SIGN2SPEAK_VIDEO = "iZyHT8b3G_g";
export const SIGN2SPEAK_WRITEUP =
  "https://www.kaggle.com/competitions/gemma-4-good-hackathon/writeups/sign2speak";

export const featuredWork: WorkEntry[] = [
  {
    id: 8,
    href: "/project8",
    period: { en: "May 2026 — present", fr: "Mai 2026 — aujourd'hui" },
    context: {
      en: "Built solo for the Google DeepMind Gemma 4 Good hackathon",
      fr: "Développé en solo pour le hackathon Gemma 4 Good de Google DeepMind",
    },
    title: "Sign2Speak",
    summary: {
      en: "A fully on-device American Sign Language translator. 50 signs, extensible to 250, with no server round-trip — for privacy and for offline use.",
      fr: "Un traducteur de langue des signes américaine entièrement embarqué. 50 signes, extensible à 250, sans aucun aller-retour serveur — pour la confidentialité et l'usage hors ligne.",
    },
    detail: {
      en: "I trained a custom Conv1D + Transformer sign classifier in Keras on the Kaggle ISLR dataset (~94k sequences, 543 landmarks per frame) and exported it to TFLite via LiteRT for on-device inference. The edge pipeline runs end to end on the phone: CameraX captures the signer, MediaPipe extracts hand and face landmarks, the TFLite classifier produces ASL gloss, Gemma 4 E2B (LiteRT-LM, on-device) turns that gloss into fluent English, and Android text-to-speech says it out loud.",
      fr: "J'ai entraîné un classifieur de signes Conv1D + Transformer sur mesure avec Keras, sur le jeu de données Kaggle ISLR (~94k séquences, 543 points de repère par image), puis exporté en TFLite via LiteRT pour l'inférence embarquée. Le pipeline tourne entièrement sur le téléphone : CameraX capte le signeur, MediaPipe extrait les repères des mains et du visage, le classifieur TFLite produit la glose ASL, Gemma 4 E2B (LiteRT-LM, embarqué) transforme cette glose en anglais fluide, et la synthèse vocale Android la prononce.",
    },
    stack: ["Keras", "MediaPipe", "TFLite / LiteRT", "Gemma 4 E2B", "Android"],
    media: { type: "youtube", id: SIGN2SPEAK_VIDEO },
    links: [
      {
        label: { en: "Kaggle write-up", fr: "Write-up Kaggle" },
        href: SIGN2SPEAK_WRITEUP,
      },
    ],
  },
  {
    id: 9,
    href: "/project9",
    period: { en: "Sep 2025 — present", fr: "Sept. 2025 — aujourd'hui" },
    context: {
      en: "Shipping to the App Store and Google Play",
      fr: "Bientôt sur l'App Store et Google Play",
    },
    title: "Loodo",
    summary: {
      en: "A social productivity app — a Strava for work — whose AI coaching agent performs real in-app actions instead of only talking about them.",
      fr: "Une application de productivité sociale — un Strava du travail — dont l'agent de coaching IA exécute de vraies actions dans l'app, au lieu d'en parler.",
    },
    detail: {
      en: "The coaching agent is prompt-engineered on top of an LLM API and wired to the app's own actions, so advice and execution are the same gesture. I also prototyped an on-device coach by fine-tuning Mistral 7B with QLoRA (Unsloth), to see how far the experience survives without a network call. The app runs on Flutter over Supabase.",
      fr: "L'agent de coaching repose sur une API de LLM, avec un prompt travaillé, et il est câblé aux actions de l'application : le conseil et son exécution sont le même geste. J'ai aussi prototypé un coach embarqué en affinant Mistral 7B par QLoRA (Unsloth), pour voir jusqu'où l'expérience survit sans appel réseau. L'application tourne sous Flutter au-dessus de Supabase.",
    },
    stack: ["Flutter", "Supabase", "LLM agent", "QLoRA / Unsloth"],
    media: null,
    links: [
      { label: { en: "loodo.app", fr: "loodo.app" }, href: "https://loodo.app" },
    ],
  },
  {
    id: 10,
    href: "/project10",
    period: { en: "Sep 2025 — present", fr: "Sept. 2025 — aujourd'hui" },
    context: {
      en: "Team project on a de-identified oncology cohort",
      fr: "Projet d'équipe sur une cohorte d'oncologie anonymisée",
    },
    title: {
      en: "Endocrine therapy toxicity prediction",
      fr: "Prédiction des toxicités de l'hormonothérapie",
    },
    summary: {
      en: "Predicting one-year toxicities of breast cancer endocrine therapy, on a cohort of 2,115 patients and 199 variables.",
      fr: "Prédire les toxicités à un an de l'hormonothérapie du cancer du sein, sur une cohorte de 2 115 patientes et 199 variables.",
    },
    detail: {
      en: "The interesting work here was upstream of the model. I established the missing-data mechanism (missing at random), benchmarked missForest against MICE for imputation, and restricted the cohort to patients with an observed target — so that the label is never imputed and the evaluation stays honest.",
      fr: "L'essentiel du travail se situait en amont du modèle. J'ai établi le mécanisme des données manquantes (manquantes au hasard), comparé missForest à MICE pour l'imputation, et restreint la cohorte aux patientes dont la cible est observée — afin que l'étiquette ne soit jamais imputée et que l'évaluation reste honnête.",
    },
    stack: ["Python", "pandas", "scikit-learn", "missForest / MICE"],
    media: null,
  },
];

/* --------------------------------------------------------------------------
   Education, methods, and the life outside the lab.
   -------------------------------------------------------------------------- */

export const education = [
  {
    id: "esiea",
    period: { en: "2022 — 2027", fr: "2022 — 2027" } as Bilingual,
    school: "ESIEA",
    place: { en: "Paris, France", fr: "Paris, France" } as Bilingual,
    degree: {
      en: "Engineering degree (Master level), major in Artificial Intelligence & Data Science. Expected September 2027.",
      fr: "Diplôme d'ingénieur (niveau master), majeure Intelligence artificielle & science des données. Diplômation prévue en septembre 2027.",
    } as Bilingual,
  },
  {
    id: "tamkang",
    period: { en: "2024 — 2025", fr: "2024 — 2025" } as Bilingual,
    school: "Tamkang University",
    place: { en: "New Taipei, Taiwan", fr: "New Taipei, Taïwan" } as Bilingual,
    degree: {
      en: "Computer Science & Information Engineering, university exchange. Coursework in mathematics for machine learning.",
      fr: "Informatique et ingénierie de l'information, échange universitaire. Cours de mathématiques pour l'apprentissage automatique.",
    } as Bilingual,
  },
];

export const methods = [
  {
    label: { en: "Machine learning", fr: "Apprentissage automatique" } as Bilingual,
    items: "PyTorch, TensorFlow / Keras, Hugging Face Transformers, scikit-learn, Unsloth / QLoRA",
  },
  {
    label: { en: "Recommendation", fr: "Recommandation" } as Bilingual,
    items: "Prod2Vec, Meta-Prod2Vec, StarSpace, negative sampling, Gensim (Word2Vec / SGNS), UMAP, spectral clustering",
  },
  {
    label: { en: "On-device and edge", fr: "Embarqué" } as Bilingual,
    items: "TFLite / LiteRT, LiteRT-LM, MediaPipe, Gemma, Android (CameraX)",
  },
  {
    label: { en: "Data and tooling", fr: "Données et outils" } as Bilingual,
    items: "pandas, NumPy, missForest / MICE, Supabase, Flutter, Google ADK, Git",
  },
  {
    label: { en: "Programming", fr: "Programmation" } as Bilingual,
    items: "Python, SQL, Dart",
  },
  {
    label: { en: "Spoken", fr: "Langues" } as Bilingual,
    items: "English (professional), French (native), Chinese (beginner)",
  },
];

export const leadership = {
  role: {
    en: "Co-Lead, GDG on Campus ESIEA (Google Developer Group)",
    fr: "Co-responsable, GDG on Campus ESIEA (Google Developer Group)",
  } as Bilingual,
  period: { en: "Jul 2025 — present", fr: "Juil. 2025 — aujourd'hui" } as Bilingual,
  body: {
    en: "GDG on Campus is Google's network of student developer chapters, and I launched the one at ESIEA. We run talks, workshops and hackathons — I gave the opening talk, on AI agent architecture, and ran the hands-on workshop alongside it. The chapter exists to give motivated students somewhere to be seen: a hackathon is one of the few settings where someone with no title and no publication can show what they are actually able to build, in front of people who will notice.",
    fr: "GDG on Campus est le réseau de clubs étudiants de développeurs de Google, et j'ai lancé celui de l'ESIEA. Nous organisons des conférences, des ateliers et des hackathons — j'ai donné la conférence inaugurale, sur l'architecture des agents IA, et animé l'atelier pratique qui l'accompagnait. Le club existe pour donner aux étudiants motivés un endroit où être vus : un hackathon est l'un des rares cadres où quelqu'un sans titre ni publication peut montrer ce qu'il sait réellement construire, devant des gens qui le remarqueront.",
  } as Bilingual,
  link: {
    label: {
      en: "The chapter on gdg.community.dev",
      fr: "Le chapitre sur gdg.community.dev",
    } as Bilingual,
    href: "https://gdg.community.dev/gdg-on-campus-esiea-paris-france/",
  },
  /* Add an entry here after each event: { date, title: {en, fr}, img } */
  events: [] as { date: string; title: Bilingual; img?: string }[],
};

/* --------------------------------------------------------------------------
   Legacy projects. NOT RENDERED ANYWHERE — kept only so the copy and the image
   paths are not lost. The /project1..7 pages still build and still work when
   visited directly, but nothing on the site links to any of them. Delete this
   array, and those pages, when you are sure none of it is wanted.
   -------------------------------------------------------------------------- */

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
    title: "Premier prix du concours Design Sprint 2025 (Figma)",
    title_en: "First Prize at Design Sprint Contest 2025 (Figma)",
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
    title: "Mutuellia – Application mobile de simulation de remboursements santé",
    title_en: "Mutuellia – Mobile Health Insurance Reimbursement Simulator",
    des: "Travail en équipe de 6 personnes en mode Agile Scrum pour développer une MVP d'application mobile. Rôle : Tech Lead & Product Owner.",
    des_en: "Teamwork of 6 people in Agile Scrum mode to develop a mobile app MVP. Role: Tech Lead & Product Owner.",
    img: "/Projet_Mutuellia/img0_project_mutuellia.png",
    iconLists: ["/icon_techno/dart.png", "/icon_techno/flutter.png", "/icon_techno/android_studio.png", "/icon_techno/postgresql.webp", "/icon_techno/supabase.png", "/icon_techno/jira.png"],
    link: "/projet5",
  },
];

export const testimonials = [
  {
    quote: {
      fr: "Intéressé et intéressant, Ludovic a su aller de l'avant pour aboutir sur ses projets.",
      en: "Interested and interesting, Ludovic knew how to push forward and see his projects through.",
    } as Bilingual,
    name: "Emmanuel Perez",
    title: {
      fr: "Professeur d'informatique à l'ESIEA, diplômé de l'EPITA",
      en: "Computer science lecturer at ESIEA, EPITA graduate",
    } as Bilingual,
    img: "/pp_Emanuel_Perez.jpg",
  },
  {
    quote: {
      fr: "Un étudiant sérieux, agréable et autonome, démontrant une solide capacité de travail. Il a suivi mes cours de Python avec assiduité, et ce fut un réel plaisir de l'accompagner dans sa progression.",
      en: "A serious, pleasant and self-reliant student with a solid capacity for work. He followed my Python courses diligently, and it was a real pleasure to support his progress.",
    } as Bilingual,
    name: "Antoine Leblanc",
    title: {
      fr: "Ingénieur en intelligence artificielle et enseignant à l'ESIEA",
      en: "Artificial intelligence engineer and lecturer at ESIEA",
    } as Bilingual,
    img: "/pp_Antoine_LEBLANC.jpg",
  },
  {
    quote: {
      fr: "C'est un étudiant sympa, curieux, qui s'intéresse beaucoup au développement.",
      en: "A friendly, curious student with a real interest in development.",
    } as Bilingual,
    name: "Zequan Huang",
    title: {
      fr: "Doctorant et enseignant à l'ESIEA, ingénieur en cybersécurité",
      en: "PhD candidate and lecturer at ESIEA, cybersecurity engineer",
    } as Bilingual,
    img: "/pp_Zequan_HUANG.jpg",
  },
];

export const socialMedia = [
  { id: 1, name: "GitHub", img: "/git.svg", link: identity.github },
  { id: 2, name: "LinkedIn", img: "/link.svg", link: identity.linkedin },
];
