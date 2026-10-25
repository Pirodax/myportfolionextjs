'use client';

import ProjectArticle from '@/components/project/ProjectArticle';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { SIGN2SPEAK_VIDEO, SIGN2SPEAK_WRITEUP } from '@/data';
import { useLanguage } from '@/contexts/LanguageContext';

/* For still images, drop them in /public/Projet_Sign2Speak/ and render them
   with <Figure src="..." /> or <Gallery items={[...]} /> from ProjectArticle. */

const t = {
  en: {
    subtitle:
      'An American Sign Language translator that runs entirely on the phone, from camera frame to spoken English, with no server round-trip.',
    h1: 'Why it has to run on the device',
    p1: 'Most sign language translation tools stream video to a server. For a deaf signer that means two costs at once: a dependency on the network exactly when a conversation cannot wait, and a privacy cost on exchanges that are often medical, legal or personal. Sign2Speak takes the opposite constraint as the starting point — nothing leaves the phone — and asks what is still achievable inside it.',
    h2: 'The pipeline',
    p2: 'Five stages run on the handset. CameraX captures the signer. MediaPipe extracts hand and face landmarks from each frame. A TFLite classifier turns the landmark sequence into ASL gloss. Gemma 4 E2B, running on-device through LiteRT-LM, rewrites that gloss as fluent English. Android text-to-speech says it out loud.',
    h3: 'The classifier',
    p3: 'I trained a custom Conv1D + Transformer architecture in Keras on the Kaggle ISLR dataset — roughly 94,000 sequences at 543 landmarks per frame — and exported it to TFLite via LiteRT for on-device inference. The convolutional front end summarises short bursts of movement; the attention layers relate them across the whole sign.',
    p4: 'Working from landmarks rather than raw frames is the decision the rest of the system rests on. It collapses the input dimensionality by orders of magnitude, which is what makes a TFLite budget realistic at all; it drops the background, the lighting and the signer’s skin tone from the representation; and it leaves a model small enough to load alongside a language model on the same device.',
    h4: 'Gloss is not English',
    p5: 'ASL gloss carries the signs in the order they were produced, which is not English word order and often omits function words entirely. A rule-based rewriter breaks on anything it has not seen. Handing the gloss to a small language model on the device gives a fluent sentence while keeping the no-network guarantee intact — the reason the whole system is built around a model that fits in a phone.',
    h5: 'Where it goes next',
    p6: 'The vocabulary covers 50 signs and the architecture extends to the full 250-sign set of the dataset. The harder step is continuous signing: segmenting a stream into signs without a pause between them, rather than classifying isolated ones. Latency across the five stages is the budget that governs every choice.',
    context: 'Google DeepMind Gemma 4 Good hackathon',
    period: 'May 2026 — present',
    roleLabel: 'Role',
    role: 'Solo project',
    stackLabel: 'Built with',
    stack: 'Keras, MediaPipe, TFLite / LiteRT, Gemma 4 E2B, Android',
    demo: 'The full pipeline running on the phone: camera, landmarks, classifier, Gemma, speech.',
    writeup: 'Kaggle write-up',
  },
  fr: {
    subtitle:
      "Un traducteur de langue des signes américaine qui tourne entièrement sur le téléphone, de l'image de la caméra à la voix, sans aucun aller-retour serveur.",
    h1: 'Pourquoi tout doit tenir sur le téléphone',
    p1: "La plupart des outils de traduction de la langue des signes envoient la vidéo à un serveur. Pour une personne sourde, cela coûte deux fois : une dépendance au réseau au moment précis où la conversation ne peut pas attendre, et une perte de confidentialité sur des échanges souvent médicaux, juridiques ou intimes. Sign2Speak prend la contrainte inverse comme point de départ — rien ne quitte l'appareil — et cherche ce qui reste atteignable à l'intérieur.",
    h2: 'Le pipeline',
    p2: "Cinq étapes s'exécutent sur le téléphone. CameraX capte le signeur. MediaPipe extrait les points de repère des mains et du visage de chaque image. Un classifieur TFLite transforme la séquence de repères en glose ASL. Gemma 4 E2B, embarqué via LiteRT-LM, réécrit cette glose en anglais fluide. La synthèse vocale Android la prononce.",
    h3: 'Le classifieur',
    p3: "J'ai entraîné une architecture Conv1D + Transformer sur mesure avec Keras, sur le jeu de données Kaggle ISLR — environ 94 000 séquences à 543 points de repère par image — puis exporté le modèle en TFLite via LiteRT pour l'inférence embarquée. La partie convolutive résume de courtes rafales de mouvement ; les couches d'attention les relient à l'échelle du signe entier.",
    p4: "Travailler sur des points de repère plutôt que sur les images brutes est la décision sur laquelle repose tout le reste. Elle réduit la dimension de l'entrée de plusieurs ordres de grandeur, ce qui rend un budget TFLite réaliste ; elle retire de la représentation l'arrière-plan, l'éclairage et la couleur de peau du signeur ; et elle laisse un modèle assez petit pour cohabiter avec un modèle de langue sur le même appareil.",
    h4: "La glose n'est pas de l'anglais",
    p5: "La glose ASL restitue les signes dans l'ordre où ils ont été produits, qui n'est pas l'ordre des mots anglais et omet souvent les mots-outils. Un réécriveur à règles casse dès qu'il rencontre l'imprévu. Confier la glose à un petit modèle de langue embarqué donne une phrase fluide tout en préservant la garantie « sans réseau » — ce qui explique que tout le système soit bâti autour d'un modèle qui tient dans un téléphone.",
    h5: 'La suite',
    p6: "Le vocabulaire couvre 50 signes et l'architecture s'étend à l'ensemble des 250 signes du jeu de données. L'étape difficile est le signe continu : segmenter un flux en signes sans pause entre eux, au lieu de classer des signes isolés. La latence cumulée des cinq étapes est le budget qui gouverne chaque choix.",
    context: 'Hackathon Gemma 4 Good de Google DeepMind',
    period: "Mai 2026 — aujourd'hui",
    roleLabel: 'Rôle',
    role: 'Projet solo',
    stackLabel: 'Construit avec',
    stack: 'Keras, MediaPipe, TFLite / LiteRT, Gemma 4 E2B, Android',
    demo: "Le pipeline complet sur le téléphone : caméra, points de repère, classifieur, Gemma, voix.",
    writeup: 'Write-up Kaggle',
  },
};

export default function Project8() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title="Sign2Speak"
      subtitle={text.subtitle}
      meta={[
        { label: { en: 'Period', fr: 'Période' }, value: text.period },
        { label: { en: 'Context', fr: 'Contexte' }, value: text.context },
        { label: { en: 'Role', fr: 'Rôle' }, value: text.role },
        { label: { en: 'Built with', fr: 'Construit avec' }, value: text.stack },
      ]}
      links={[
        { label: { en: text.writeup, fr: text.writeup }, href: SIGN2SPEAK_WRITEUP },
      ]}
    >
      <YouTubeEmbed
        className="mb-10"
        id={SIGN2SPEAK_VIDEO}
        title="Sign2Speak"
        caption={text.demo}
      />

      <h2 className="font-serif text-[1.3rem] tracking-tight">{text.h1}</h2>
      <p className="mt-3">{text.p1}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h2}</h2>
      <p className="mt-3">{text.p2}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h3}</h2>
      <p className="mt-3">{text.p3}</p>
      <p>{text.p4}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h4}</h2>
      <p className="mt-3">{text.p5}</p>

      <h2 className="mt-9 font-serif text-[1.3rem] tracking-tight">{text.h5}</h2>
      <p className="mt-3">{text.p6}</p>
    </ProjectArticle>
  );
}
