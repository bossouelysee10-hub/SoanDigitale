import { Quote, Star, Info } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Soan Digitale a transformé notre présence en ligne. Notre site est magnifique et nos demandes de devis ont explosé en quelques semaines.",
    name: 'Rodrigue Dossou',
    role: 'Entrepreneur · Cotonou',
  },
  {
    quote:
      "Un accompagnement parfait du début à la fin. L'équipe a compris notre vision et créé une identité de marque qui nous ressemble vraiment.",
    name: 'Grâce Adjovi',
    role: 'Fondatrice de marque · Porto-Novo',
  },
  {
    quote:
      "Notre boutique en ligne est devenue un vrai levier de croissance. Paiement mobile money intégré et un suivi après lancement au top.",
    name: 'Carine Houngbédji',
    role: 'Commerçante · Cotonou',
  },
  {
    quote:
      "Le travail SEO a dépassé nos attentes. Nous sommes passés de la troisième page à la première position sur nos mots-clés stratégiques.",
    name: 'Arnaud Hounkpatin',
    role: 'Dirigeant de startup · Parakou',
  },
  {
    quote:
      "Professionnalisme, créativité et réactivité. Nos campagnes Facebook Ads nous ramènent des clients qualifiés chaque semaine.",
    name: 'Nadine Kiki',
    role: 'Gérante de boutique · Cotonou',
  },
  {
    quote:
      "Soan Digitale a conçu une application mobile fluide pour nos clients. L'expérience utilisateur est impeccable et le support réactif.",
    name: 'Ulrich Ahouandjinou',
    role: 'CEO tech · Abomey-Calavi',
  },
  {
    quote:
      "Le montage vidéo publicitaire réalisé pour notre lancement a fait sensation sur les réseaux. Créatif, professionnel et impactant.",
    name: 'Sandrine Tognifodé',
    role: 'Créatrice de contenu · Cotonou',
  },
  {
    quote:
      "Grâce au tunnel de vente mis en place, notre taux de conversion a doublé. Un travail rigoureux et des résultats concrets.",
    name: 'Brice Zannou',
    role: 'Formateur en ligne · Porto-Novo',
  },
  {
    quote:
      "Le community management de Soan Digitale a dynamisé nos réseaux sociaux. Notre communauté est engagée et fidèle.",
    name: 'Vanessa Codjia',
    role: 'Responsable marketing · Cotonou',
  },
  {
    quote:
      "Une équipe à l'écoute qui livre dans les délais. Notre branding nouveau a donné une image premium à notre entreprise.",
    name: 'Franck Houssou',
    role: 'PME · Bohicon',
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('');
}

export function Testimonials() {
  return (
    <section id="temoignages" className="relative bg-slate-50/60 py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute -left-20 top-1/2 -z-10 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-secondary-500/10 blur-[150px]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Témoignages
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            La satisfaction de nos clients est notre meilleure vitrine. Voici
            quelques retours d'expérience de collaborations récentes.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 60}
              as="article"
              className="mb-5 break-inside-avoid rounded-3xl border border-slate-200 bg-white p-7 card-hover hover:border-primary-300 hover:shadow-lg"
            >
              <Quote className="h-8 w-8 text-primary-200" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-700">« {t.quote} »</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white"
                  aria-hidden
                >
                  {getInitials(t.name)}
                </span>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="mx-auto flex max-w-2xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              Les témoignages ci-dessus sont présentés à titre{' '}
              <strong>démonstratif</strong> et illustrent le type de retours que
              nous visons pour chaque client. Ils seront remplacés par de vrais
              avis clients dès qu'ils seront disponibles.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
