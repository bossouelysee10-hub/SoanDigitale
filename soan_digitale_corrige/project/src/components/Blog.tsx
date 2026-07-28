import { ArrowUpRight, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const CATEGORIES = [
  'Marketing Digital',
  'Réseaux Sociaux',
  'Facebook Ads',
  'Google Ads',
  'Intelligence Artificielle',
  'Création de Sites Web',
  'E-commerce',
  'Entrepreneuriat',
  'Branding',
];

const POSTS: Post[] = [
  {
    id: 'seo-2025',
    title: 'SEO en 2025 : les 5 leviers qui changent la donne',
    excerpt:
      "L'intelligence artificielle redéfinit le référencement. Découvrez les actions concrètes à mettre en place pour rester visible sur Google.",
    category: 'Marketing Digital',
    date: '12 juin 2026',
    readTime: '6 min',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'facebook-africa',
    title: 'Facebook Ads en Afrique de l\'Ouest : bien cibler son audience',
    excerpt:
      "Le marché ouest-africain a ses spécificités. Voici comment paramétrer vos campagnes pour atteindre les bons prospects au Bénin et au-delà.",
    category: 'Facebook Ads',
    date: '28 mai 2026',
    readTime: '8 min',
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'branding-startup',
    title: 'Construire une marque forte quand on est une startup',
    excerpt:
      "Le branding ne se résume pas à un logo. C'est une stratégie complète qui différencie votre entreprise et crée la confiance.",
    category: 'Branding',
    date: '15 mai 2026',
    readTime: '5 min',
    image:
      'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Blog & ressources
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Nos conseils pour réussir votre stratégie digitale
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Actualités, guides pratiques et insights pour faire grandir votre
              présence en ligne.
            </p>
          </div>
        </Reveal>

        {/* Categories */}
        <Reveal delay={80} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600"
              >
                {cat}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Posts */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal
              key={post.id}
              delay={(i % 3) * 80}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white card-hover hover:-translate-y-1 hover:shadow-xl"
            >
              <article className="flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-primary-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all group-hover:gap-2.5">
                    Lire l'article
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
