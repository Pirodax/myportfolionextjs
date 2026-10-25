'use client';

import ProjectArticle from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

/* Loodo has a full app and a website. Drop screenshots in /public/Projet_Loodo/
   and render them with <Gallery portrait items={[...]} /> from ProjectArticle. */

const t = {
  en: {
    subtitle:
      'A social productivity app — a Strava for work — whose coaching agent performs real actions in the app instead of only describing them.',
    h1: 'The idea',
    p1: 'Productivity apps measure what you did; social fitness apps make what you did worth showing. Loodo puts the two together: sessions of focused work are recorded, shared with the people you choose, and accumulate the way training does. The social layer is the retention mechanism, not a feature bolted on top.',
    h2: 'An agent that acts',
    p2: 'The coaching agent is built on an LLM API with a carefully constrained prompt, and it is wired to the application’s own actions — it can start a session, restructure a plan, or move a commitment, rather than returning a paragraph telling the user to do so. Advice and execution become the same gesture, which is also what makes the agent falsifiable: it either did the thing or it did not.',
    h3: 'A coach that fits on the phone',
    p3: 'Calling a hosted model for every exchange costs latency, money and privacy. I prototyped an on-device coach by fine-tuning Mistral 7B with QLoRA using Unsloth, to find out how much of the experience survives with no network call at all. The same question drives Sign2Speak, from the other end: how small can a useful model get before the product stops working.',
    h4: 'How it is built',
    p4: 'The application is written in Flutter and runs on Supabase. Beta-tester recruitment runs through a newsletter service I built for it, with email verification and automated sends.',
    h5: 'Status',
    p5: 'Loodo is in beta and heading for the App Store and Google Play.',
    period: 'Sep 2025 — present',
    role: 'Founder, solo development',
    stack: 'Flutter, Supabase, LLM agent, QLoRA / Unsloth',
    status: 'Beta, shipping to the stores',
  },
  fr: {
    subtitle:
      "Une application de productivité sociale — un Strava du travail — dont l'agent de coaching exécute de vraies actions dans l'app au lieu de simplement les décrire.",
    h1: "L'idée",
    p1: "Les applications de productivité mesurent ce que vous avez fait ; les applications de sport social rendent ce que vous avez fait digne d'être montré. Loodo réunit les deux : les sessions de travail concentré sont enregistrées, partagées avec les personnes de votre choix, et s'accumulent comme un entraînement. La couche sociale est le mécanisme de rétention, pas une fonctionnalité ajoutée par-dessus.",
    h2: 'Un agent qui agit',
    p2: "L'agent de coaching repose sur une API de LLM avec un prompt soigneusement contraint, et il est câblé aux actions de l'application : il peut lancer une session, restructurer un plan ou déplacer un engagement, au lieu de renvoyer un paragraphe invitant l'utilisateur à le faire. Le conseil et son exécution deviennent le même geste — ce qui rend aussi l'agent réfutable : soit il a fait la chose, soit il ne l'a pas faite.",
    h3: 'Un coach qui tient dans le téléphone',
    p3: "Appeler un modèle hébergé à chaque échange coûte en latence, en argent et en confidentialité. J'ai prototypé un coach embarqué en affinant Mistral 7B par QLoRA avec Unsloth, pour savoir quelle part de l'expérience survit sans le moindre appel réseau. La même question anime Sign2Speak, par l'autre bout : jusqu'où un modèle utile peut-il rétrécir avant que le produit cesse de fonctionner.",
    h4: 'La construction',
    p4: "L'application est écrite en Flutter et s'appuie sur Supabase. Le recrutement des bêta-testeurs passe par un service de newsletter que j'ai construit pour elle, avec vérification d'e-mail et envois automatisés.",
    h5: 'État',
    p5: "Loodo est en bêta et se dirige vers l'App Store et Google Play.",
    period: "Sept. 2025 — aujourd'hui",
    role: 'Fondateur, développement en solo',
    stack: 'Flutter, Supabase, agent LLM, QLoRA / Unsloth',
    status: 'Bêta, en route vers les stores',
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
      <h2 className="font-serif text-[1.3rem] tracking-tight">{text.h1}</h2>
      <p className="mt-3">{text.p1}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h2}</h2>
      <p className="mt-3">{text.p2}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h3}</h2>
      <p className="mt-3">{text.p3}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h4}</h2>
      <p className="mt-3">{text.p4}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h5}</h2>
      <p className="mt-3">{text.p5}</p>
    </ProjectArticle>
  );
}
