import { Target, Eye, Heart, Rocket, Users, Award, ShieldCheck, Lightbulb } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const VALUES = [
  {
    icon: Rocket,
    title: 'Innovation',
    description: "Nous adoptons en permanence les dernières technologies et tendances digitales pour vous garder en avance.",
  },
  {
    icon: ShieldCheck,
    title: 'Confiance',
    description: "Transparence, honnêteté et engagement total dans chaque projet que nous entreprenons.",
  },
  {
    icon: Award,
    title: 'Excellence',
    description: "Nous visons l'excellence dans chaque détail, du premier pixel au déploiement final.",
  },
  {
    icon: Users,
    title: 'Proximité',
    description: "Un accompagnement humain et personnalisé, proche de vos réalités et de vos objectifs.",
  },
];

export function About() {
  return (
    <section id="apropos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Poignée de main entre un entrepreneur noir et un entrepreneur blanc — collaboration internationale chez Soan Digitale"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="font-display text-3xl font-bold text-gradient">Sept. 2025</div>
              <div className="mt-1 text-xs text-slate-500">Année de création</div>
            </div>
            <div className="absolute -top-4 -left-4 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              Basée au Bénin
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              À propos de Soan Digitale
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Une agence née pour faire grandir les ambitions digitales
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Fondée en septembre 2025, Soan Digitale est une agence de marketing
              digital basée au Bénin et au service de l'international. Nous
              accompagnons les entrepreneurs, commerçants, auteurs, PME, startups
              et grandes entreprises dans leur transformation digitale.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Notre mission est simple : aider nos clients à développer leur
              visibilité, attirer davantage de clients et augmenter leur chiffre
              d'affaires grâce au digital. Chaque projet est traité avec
              exigence, créativité et engagement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MissionCard
                icon={Target}
                title="Notre mission"
                text="Développer votre visibilité, attirer des clients qualifiés et faire croître votre chiffre d'affaires grâce au digital."
              />
              <MissionCard
                icon={Eye}
                title="Notre vision"
                text="Devenir l'agence digitale de référence en Afrique de l'Ouest, reconnue pour son expertise et ses résultats."
              />
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <Reveal className="mt-20">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-primary-600" />
            <h3 className="text-2xl font-bold text-slate-900">Nos valeurs</h3>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal
                key={value.title}
                delay={(i % 4) * 80}
                className="rounded-2xl border border-slate-200 bg-white p-6 card-hover hover:border-primary-300 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 text-lg font-bold text-slate-900">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MissionCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Target;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
      <div className="flex items-center gap-2.5">
        <Icon className="h-5 w-5 text-primary-600" />
        <h4 className="text-base font-bold text-slate-900">{title}</h4>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}
