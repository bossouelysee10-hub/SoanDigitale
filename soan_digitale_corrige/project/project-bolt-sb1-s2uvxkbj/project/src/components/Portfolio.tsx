import { useMemo, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Project = {
  id: string;
  title: string;
  category: 'Sites web' | 'Applications mobiles' | 'Identités visuelles' | 'Publicités digitales' | 'Créations graphiques';
  client: string;
  description: string;
  image: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    id: 'baobab-web',
    title: 'Baobab Studio',
    category: 'Sites web',
    client: 'Baobab Studio',
    description:
      "Site vitrine pour un studio de photographie à Cotonou. Galerie plein écran, transitions cinématographiques et réservation en ligne.",
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['UX/UI', 'Animation', 'Réservation'],
  },
  {
    id: 'lome-app',
    title: 'Lomé Foods App',
    category: 'Applications mobiles',
    client: 'Lomé Foods',
    description:
      "Application mobile de livraison de repas pour le marché togolais. Géolocalisation, paiement mobile money et suivi en temps réel.",
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Android', 'iOS', 'Mobile Money'],
  },
  {
    id: 'abidjan-brand',
    title: 'Abidjan Beauty',
    category: 'Identités visuelles',
    client: 'Abidjan Beauty',
    description:
      "Identité visuelle complète pour une marque de cosmétiques naturels : logo, packaging aux motifs wax, déclinaisons et charte graphique.",
    image:
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Logo', 'Charte', 'Packaging'],
  },
  {
    id: 'cotonou-ads',
    title: 'Campagne Sahel Connect',
    category: 'Publicités digitales',
    client: 'Sahel Connect',
    description:
      "Campagne Facebook & Google Ads pour une startup de services. ROAS x4 en 2 mois avec un ciblage précis de l'audience ouest-africaine.",
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Facebook Ads', 'Google Ads', 'ROAS x4'],
  },
  {
    id: 'porto-graphic',
    title: 'Porto-Novo Market',
    category: 'Créations graphiques',
    client: 'Porto-Novo Market',
    description:
      "Série de visuels et flyers pour un marché artisanal. Mise en avant des produits locaux avec une direction artistique colorée et moderne.",
    image:
      'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Flyers', 'Direction artistique', 'Print'],
  },
  {
    id: 'parakou-web',
    title: 'Parakou Agri',
    category: 'Sites web',
    client: 'Parakou Agri',
    description:
      "Plateforme e-commerce pour une coopérative agricole. Catalogue produits, commande en gros et tableau de bord logistique.",
    image:
      'https://images.pexels.com/photos/4458/cup-mug-coffee-man.jpg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['E-commerce', 'Catalogue', 'Dashboard'],
  },
];

const FILTERS = [
  'Tous',
  'Sites web',
  'Applications mobiles',
  'Identités visuelles',
  'Publicités digitales',
  'Créations graphiques',
] as const;
type Filter = (typeof FILTERS)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('Tous');
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === 'Tous' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="realisations" className="relative py-24 sm:py-32">
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-[160px]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Réalisations
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Des projets qui parlent d'eux-mêmes
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Une sélection de nos créations. Chaque projet est pensé sur-mesure,
              en collaboration étroite avec nos clients.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-brand-gradient text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 3) * 80}
              className="group cursor-pointer"
            >
              <button
                type="button"
                onClick={() => setActive(project)}
                className="block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left card-hover hover:-translate-y-1 hover:shadow-xl"
                aria-label={`Voir le projet ${project.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} par Soan Digitale`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-slate-700 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{project.description}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <Lightbox project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Projet ${project.title}`}
    >
      <div
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-xl animate-fade-up"
        onClick={onClose}
        style={{ animationDuration: '0.3s' }}
      />
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white animate-fade-up">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 text-white backdrop-blur-md transition-colors hover:bg-ink-950"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-primary-50 px-3 py-1 font-medium text-primary-700">
              {project.category}
            </span>
            <span className="text-slate-400">{project.client}</span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">{project.title}</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
