import {
  Briefcase,
  UserCheck,
  Clock,
  Palette,
  Lightbulb,
  Scissors,
  BarChart3,
  Smile,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const REASONS = [
  {
    icon: Briefcase,
    title: 'Expertise professionnelle',
    description: "Une équipe pluridisciplinaire maîtrisant chaque aspect du marketing digital moderne.",
  },
  {
    icon: UserCheck,
    title: 'Accompagnement personnalisé',
    description: "Un interlocuteur dédié qui comprend vos enjeux et adapte la stratégie à vos objectifs.",
  },
  {
    icon: Clock,
    title: 'Réactivité',
    description: "Des réponses rapides et un suivi de proximité à chaque étape de votre projet.",
  },
  {
    icon: Palette,
    title: 'Créativité',
    description: "Des concepts originaux et des designs qui se démarquent dans un univers concurrentiel.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: "Nous explorons en permanence les nouvelles technologies pour vous garder en avance.",
  },
  {
    icon: Scissors,
    title: 'Solutions sur mesure',
    description: "Chaque projet est unique : nous concevons des stratégies adaptées à votre réalité.",
  },
  {
    icon: BarChart3,
    title: 'Résultats mesurables',
    description: "Des KPI clairs et un reporting transparent pour suivre concrètement votre ROI.",
  },
  {
    icon: Smile,
    title: 'Satisfaction client',
    description: "Votre réussite est notre priorité absolue. Nous nous engageons sur les résultats.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-primary-600/20 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary-600/20 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-400">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            8 raisons de faire confiance à Soan Digitale
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            Nous ne livrons pas seulement des projets. Nous bâtissons des
            partenariats durables centrés sur votre croissance.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                key={reason.title}
                delay={(i % 4) * 80}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary-400/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/30 to-secondary-500/20 text-primary-300 transition-colors duration-300 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{reason.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
