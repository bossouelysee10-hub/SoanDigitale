import { ArrowRight, Headset, Sparkles, Star } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useCountUp } from '@/hooks/useCountUp';
import { WHATSAPP_LINK } from '@/lib/constants';

const STATS = [
  { end: 40, suffix: '+', label: 'Projets réalisés' },
  { end: 8, suffix: '', label: "Mois d'existence" },
  { end: 98, suffix: '%', label: 'Clients satisfaits' },
  { end: 12, suffix: '', label: 'Services experts' },
];

const TRUSTED_BY = ['Baobab Studio', 'Dakar Labs', 'Abidjan Beauty', 'Lomé Foods', 'Cotonou Tech', 'Sahel Design'];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div
        className="absolute -top-40 left-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-primary-500/20 blur-[140px] animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute top-10 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-secondary-500/15 blur-[120px] animate-float"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left — copy */}
          <div className="max-w-2xl">
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-medium text-primary-700 animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Agence de marketing digital · Bénin · Disponible pour de nouveaux projets
            </div>

            <h1
              className="text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Propulsez votre marque dans
              <span className="block text-gradient">l'ère digitale.</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              Soan Digitale transforme vos idées en succès numérique. Design,
              stratégie et performance réunis pour développer votre visibilité,
              attirer plus de clients et faire croître votre chiffre d'affaires.
            </p>

            <p
              className="mt-3 text-sm font-medium text-slate-500 animate-fade-up"
              style={{ animationDelay: '280ms' }}
            >
              « Votre croissance, notre expertise. »
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <a
                href="#devis"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 glow"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 transition-all duration-300 hover:border-primary-400 hover:text-primary-600"
              >
                <Headset className="h-4 w-4" />
                Contacter un expert
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-base font-semibold text-[#1faa52] transition-all duration-300 hover:bg-[#25D366]/20"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div
              className="mt-8 flex items-center gap-2 text-sm text-slate-500 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-medium text-slate-800">5,0</span>
              <span>· Clients satisfaits au Bénin et à l'international</span>
            </div>
          </div>

          {/* Right — visual */}
          <div
            className="relative hidden lg:block animate-fade-up"
            style={{ animationDelay: '360ms' }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl shadow-primary-900/20">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Équipe de Soan Digitale travaillant sur une stratégie marketing digitale"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur animate-float">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-slate-900">+180%</div>
                  <div className="text-xs text-slate-500">Croissance moyenne</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg animate-float-slow">
              Depuis septembre 2025
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 max-w-4xl animate-fade-up"
          style={{ animationDelay: '480ms' }}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Trusted by marquee */}
        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400">
            Ils nous ont fait confiance
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
            <div className="marquee-track gap-12 animate-marquee">
              {[...TRUSTED_BY, ...TRUSTED_BY].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap font-display text-xl font-medium text-slate-400"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp({ end, suffix });
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-5 text-center backdrop-blur">
      <span ref={ref} className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {display}
      </span>
      <div className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</div>
    </div>
  );
}
