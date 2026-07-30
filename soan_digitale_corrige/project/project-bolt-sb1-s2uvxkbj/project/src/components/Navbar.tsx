import { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { WHATSAPP_LINK } from '@/lib/constants';

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass-light shadow-[0_18px_50px_-20px_rgba(15,16,32,0.25)]'
              : 'bg-white/60 backdrop-blur-md border border-slate-200/60'
          }`}
        >
          <a href="#accueil" className="flex items-center gap-3 group" aria-label="Soan Digitale, accueil">
            <Logo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-6" />
            <span className="font-display text-lg font-bold tracking-tightest text-slate-900">
              Soan<span className="text-gradient">Digitale</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-primary-600 to-secondary-600 transition-transform duration-300 hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#25D366] hover:text-[#1faa52]"
              aria-label="Discuter sur WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href="#devis"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 glow"
            >
              <FileText className="h-4 w-4" />
              Demander un devis
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:text-primary-600"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm border-l border-slate-200 bg-white px-6 py-24 transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-700"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href="#devis"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-base font-semibold text-white"
            >
              <FileText className="h-5 w-5" />
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
