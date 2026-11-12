'use client';

import ProjectArticle, { Figure } from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    subtitle:
      'A social productivity app — a Strava for work — whose AI assistant performs real actions in the app instead of only describing them.',
    banner: '/Projet_Loodo/loodo-banner-en.png',
    bannerAlt: 'Loodo: Organize. Focus. Share. Progress. Three screens: the AI assistant, a focus session timer, and the profile with its activity map and badges.',
    h1: 'The idea',
    p1: 'Productivity apps measure what you did; social fitness apps make what you did worth showing. Loodo puts the two together. Focus sessions are timed, saved with a photo or a short video, and shared with the people you choose: public, friends only, or private. They add up the way training does, through streaks, an activity map and badges. The social layer is how Loodo keeps people coming back, not a feature bolted on top.',
    h2: 'An agent that acts',
    p2: "Loodo AI is a planning assistant running on Mistral through tool calling. The model does not answer with a paragraph telling you what to do; it calls the app's own operations:",
    list: [
      'It creates categories, goals and tasks, including nested subtasks.',
      'It edits them and ticks tasks off.',
      'It reads your progress over a given period.',
      'It keeps a memory of you that you can view and delete.',
    ],
    h3: 'A coach that fits on the phone',
    p3: 'Calling a hosted model for every exchange costs latency, money and privacy. I prototyped an on-device coach by fine-tuning Mistral 7B with QLoRA using Unsloth, to find out how much of the experience survives with no network call at all. The same question drives Sign2Speak, from the other end: how small can a useful model get before the product stops working.',
    h4: 'How it is built',
    p4: 'Loodo is a single Flutter app that runs on iPhone, Android and the web, backed by Supabase for accounts, data and the AI assistant. It is shaped by conversations with its beta testers, recruited through a newsletter I built for it: each version starts from what they actually need, not from what I assume they want.',
    h5: 'Status',
    p5: 'Loodo is available on the App Store. The Android version is coming soon to Google Play.',
    period: 'Sep 2025 — present',
    role: 'Founder, solo development',
    stack: 'Flutter, Supabase, Mistral (tool calling), QLoRA / Unsloth',
    status: 'On the App Store, Android coming soon',
  },
  fr: {
    subtitle:
      "Une application de productivité sociale — un Strava du travail — dont l'assistant IA exécute de vraies actions dans l'app au lieu de simplement les décrire.",
    banner: '/Projet_Loodo/loodo-banner-fr.png',
    bannerAlt: "Loodo : Organise. Focus. Partage. Progresse. Trois écrans : l'assistant IA, le minuteur de session de concentration, et le profil avec sa carte d'activité et ses badges.",
    h1: "L'idée",
    p1: "Les applications de productivité mesurent ce que vous avez fait ; les applications de sport social rendent ce que vous avez fait digne d'être montré. Loodo réunit les deux. Les sessions de concentration sont chronométrées, enregistrées avec une photo ou une courte vidéo, et partagées avec les personnes de votre choix : en public, entre amis ou en privé. Elles s'accumulent comme un entraînement, avec des séries, une carte d'activité et des badges. La couche sociale est ce qui fait revenir les utilisateurs, pas une fonctionnalité ajoutée par-dessus.",
    h2: 'Un agent qui agit',
    p2: "Loodo AI est un assistant de planification qui s'appuie sur Mistral par appel d'outils. Le modèle ne répond pas par un paragraphe vous disant quoi faire ; il appelle les opérations de l'application elle-même :",
    list: [
      'Il crée des catégories, des objectifs et des tâches, y compris des sous-tâches imbriquées.',
      'Il les modifie et coche les tâches terminées.',
      'Il lit votre progression sur une période donnée.',
      'Il garde une mémoire de vous, que vous pouvez consulter et effacer.',
    ],
    h3: 'Un coach qui tient dans le téléphone',
    p3: "Appeler un modèle hébergé à chaque échange coûte en latence, en argent et en confidentialité. J'ai prototypé un coach embarqué en affinant Mistral 7B par QLoRA avec Unsloth, pour savoir quelle part de l'expérience survit sans le moindre appel réseau. La même question anime Sign2Speak, par l'autre bout : jusqu'où un modèle utile peut-il rétrécir avant que le produit cesse de fonctionner.",
    h4: 'La construction',
    p4: "Loodo est une seule application Flutter qui tourne sur iPhone, Android et le web, adossée à Supabase pour les comptes, les données et l'assistant IA. Elle se construit au fil des échanges avec ses bêta-testeurs, recrutés par une newsletter que j'ai développée pour elle : chaque version part de ce dont ils ont réellement besoin, pas de ce que je suppose qu'ils veulent.",
    h5: 'État',
    p5: "Loodo est disponible sur l'App Store. La version Android arrive bientôt sur Google Play.",
    period: "Sept. 2025 — aujourd'hui",
    role: 'Fondateur, développement en solo',
    stack: "Flutter, Supabase, Mistral (appel d'outils), QLoRA / Unsloth",
    status: "Sur l'App Store, Android bientôt",
  },
};

export default function Project9() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title="Loodo"
      subtitle={text.subtitle}
      meta={[
        { label: { en: 'Period', fr: 'Période' }, value: text.period },
        { label: { en: 'Role', fr: 'Rôle' }, value: text.role },
        { label: { en: 'Status', fr: 'État' }, value: text.status },
        { label: { en: 'Built with', fr: 'Construit avec' }, value: text.stack },
      ]}
      links={[{ label: { en: 'loodo.app', fr: 'loodo.app' }, href: 'https://loodo.app' }]}
    >
      <Figure
        src={text.banner}
        alt={text.bannerAlt}
        width={3840}
        height={1646}
        priority
      />

      <h2 className="mt-10 font-serif text-[1.3rem] tracking-tight">{text.h1}</h2>
      <p className="mt-3">{text.p1}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h2}</h2>
      <p className="mt-3">{text.p2}</p>
      <ul className="mt-3 max-w-[68ch] list-disc space-y-1.5 pl-5 marker:text-ink-2">
        {text.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h3}</h2>
      <p className="mt-3">{text.p3}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h4}</h2>
      <p className="mt-3">{text.p4}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h5}</h2>
      <p className="mt-3">{text.p5}</p>
    </ProjectArticle>
  );
}
