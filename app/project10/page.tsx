'use client';

import ProjectArticle from '@/components/project/ProjectArticle';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  en: {
    title: 'Endocrine therapy toxicity prediction',
    subtitle:
      'Predicting one-year toxicities of breast cancer endocrine therapy on a de-identified cohort of 2,115 patients and 199 variables.',
    h1: 'The question',
    p1: 'Endocrine therapy is given for years after breast cancer surgery, and its toxicities are the main reason patients stop taking it. Knowing at the outset which patients are likely to develop a toxicity within the first year would change how closely they are followed. The cohort is de-identified and was assembled by the clinical team we worked with.',
    h2: 'Most of the work was upstream of the model',
    p2: 'With 199 variables collected in routine care, the interesting problem is not which classifier to use — it is what the gaps in the table mean. I established the missing-data mechanism first and found it consistent with missing at random, which is what licenses imputation at all. Treating that as an assumption to be tested rather than a default changed the rest of the pipeline.',
    h3: 'Imputation, benchmarked rather than chosen',
    p3: 'I benchmarked missForest against MICE on the cohort instead of picking one on reputation. The two make different bets — a non-parametric random-forest fit against a chained set of parametric models — and the cohort decides which bet pays.',
    h4: 'Never impute the label',
    p4: 'The cohort was restricted to patients with an observed target. Imputing the outcome would have let the imputation model write the answers the classifier is then scored on, and the resulting metrics would have measured nothing. Dropping those rows costs sample size and buys an evaluation that means something.',
    h5: 'Context',
    p5: 'A team project, ongoing, on a real clinical cohort rather than a benchmark dataset.',
    period: 'Sep 2025 — present',
    role: 'Team project',
    stack: 'Python, pandas, scikit-learn, missForest / MICE',
    data: '2,115 patients, 199 variables, de-identified',
  },
  fr: {
    title: "Prédiction des toxicités de l'hormonothérapie",
    subtitle:
      "Prédire les toxicités à un an de l'hormonothérapie du cancer du sein, sur une cohorte anonymisée de 2 115 patientes et 199 variables.",
    h1: 'La question',
    p1: "L'hormonothérapie se poursuit pendant des années après la chirurgie du cancer du sein, et ses toxicités sont la première raison d'arrêt du traitement. Savoir dès le départ quelles patientes risquent de développer une toxicité dans la première année changerait la façon dont elles sont suivies. La cohorte est anonymisée et a été constituée par l'équipe clinique avec laquelle nous travaillons.",
    h2: "L'essentiel du travail se situait en amont du modèle",
    p2: "Avec 199 variables recueillies en soin courant, le problème intéressant n'est pas le choix du classifieur — c'est le sens des trous dans le tableau. J'ai d'abord établi le mécanisme des données manquantes et l'ai trouvé compatible avec « manquantes au hasard », ce qui est la condition qui autorise l'imputation. Traiter cela comme une hypothèse à tester plutôt que comme un réglage par défaut a changé la suite du pipeline.",
    h3: 'Une imputation comparée, pas choisie',
    p3: "J'ai comparé missForest à MICE sur la cohorte au lieu d'en retenir un sur sa réputation. Les deux font des paris différents — un ajustement non paramétrique par forêts aléatoires contre une chaîne de modèles paramétriques — et c'est la cohorte qui tranche.",
    h4: "Ne jamais imputer l'étiquette",
    p4: "La cohorte a été restreinte aux patientes dont la cible est observée. Imputer l'issue aurait laissé le modèle d'imputation écrire les réponses sur lesquelles le classifieur est ensuite noté, et les métriques obtenues n'auraient rien mesuré. Écarter ces lignes coûte en taille d'échantillon et achète une évaluation qui veut dire quelque chose.",
    h5: 'Contexte',
    p5: "Un projet d'équipe, en cours, sur une cohorte clinique réelle et non sur un jeu de données de référence.",
    period: "Sept. 2025 — aujourd'hui",
    role: "Projet d'équipe",
    stack: 'Python, pandas, scikit-learn, missForest / MICE',
    data: '2 115 patientes, 199 variables, anonymisées',
  },
};

export default function Project10() {
  const { language } = useLanguage();
  const text = t[language];

  return (
    <ProjectArticle
      title={text.title}
      subtitle={text.subtitle}
      meta={[
        { label: { en: 'Period', fr: 'Période' }, value: text.period },
        { label: { en: 'Role', fr: 'Rôle' }, value: text.role },
        { label: { en: 'Cohort', fr: 'Cohorte' }, value: text.data },
        { label: { en: 'Built with', fr: 'Construit avec' }, value: text.stack },
      ]}
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
