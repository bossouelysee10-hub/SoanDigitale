import {
  Globe,
  Smartphone,
  MessageSquare,
  Facebook,
  Search,
  TrendingUp,
  Palette,
  PenTool,
  Video,
  ShoppingBag,
  Filter,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const SERVICES = [
  {
    icon: Globe,
    title: 'Création de sites web',
    description:
      'Sites vitrines et e-commerce sur-mesure, rapides, sécurisés et optimisés pour tous les écrans et tous les appareils.',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    description:
      'Applications Android et iOS natives et hybrides, conçues pour offrir une expérience fluide et engageante.',
  },
  {
    icon: MessageSquare,
    title: 'Community Management',
    description:
      "Gestion complète de vos réseaux sociaux : création de contenu, publication, modération et engagement de votre communauté.",
  },
  {
    icon: Facebook,
    title: 'Facebook Ads',
    description:
      'Campagnes publicitaires ciblées sur Facebook et Instagram pour attirer des clients qualifiés et maximiser votre ROI.',
  },
  {
    icon: Search,
    title: 'Référencement SEO',
    description:
      "Optimisation technique et éditoriale pour que votre site apparaisse en haut des résultats Google et attire un trafic qualifié.",
  },
  {
    icon: TrendingUp,
    title: 'Google Ads',
    description:
      "Publicités sur le réseau Google pour capter l'intention d'achat au moment exact où vos clients vous recherchent.",
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      "Création de logos, d'identités visuelles et de chartes graphiques fortes qui marquent l'esprit de vos clients.",
  },
  {
    icon: PenTool,
    title: 'Graphisme professionnel',
    description:
      "Visuels, flyers, supports de communication et contenus créatifs qui reflètent l'excellence de votre marque.",
  },
  {
    icon: Video,
    title: 'Montage vidéo publicitaire',
    description:
      "Vidéos promotionnelles et motion design captivants qui racontent votre histoire et convertissent votre audience.",
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description:
      'Boutiques en ligne performantes avec gestion de catalogue, paiement sécurisé et suivi des commandes.',
  },
  {
    icon: Filter,
    title: 'Tunnels de vente',
    description:
      'Parcours d\'achat optimisés étape par étape pour transformer vos visiteurs en clients fidèles.',
  },
  {
    icon: Zap,
    title: 'Automatisation marketing',
    description:
      'Automatisation de vos campagnes, emails et processus pour gagner du temps et scaler sans effort.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-slate-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Nos services
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            12 expertises pour propulser votre présence digitale
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Une offre complète, de la stratégie à l'exécution. Nous réunissons
            design, technologie et marketing pour créer des expériences qui
            font la différence.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 80}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 card-hover hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/0 blur-2xl transition-all duration-500 group-hover:bg-primary-500/15"
                  aria-hidden
                />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient-soft text-primary-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{service.description}</p>
                <a
                  href="#devis"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all hover:gap-2.5"
                >
                  Demander ce service
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
