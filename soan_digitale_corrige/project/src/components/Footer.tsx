import { Linkedin, Instagram, Twitter, ArrowUp, Mail } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL, EMAIL_LINK, SLOGAN, SERVICES_LIST } from '@/lib/constants';

const QUICK_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#blog', label: 'Blog' },
  { href: '#devis', label: 'Demander un devis' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-slate-300">
      <div
        className="absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#accueil" className="flex items-center gap-3" aria-label="Soan Digitale">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-tightest text-white">
                Soan<span className="text-gradient">Digitale</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {SLOGAN} Agence de marketing digital au Bénin, au service de
              l'international. Création web, apps, branding, SEO et publicités.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={WHATSAPP_LINK} label="WhatsApp">
                <WhatsAppIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/" label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://twitter.com/" label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Liens rapides">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {SERVICES_LIST.slice(0, 7).map((service) => (
              <li key={service}>
                <a href="#services" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {service}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={EMAIL_LINK} className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
            </li>
            <li className="text-sm text-slate-400">Bénin · 100% remote-friendly</li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Soan Digitale. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">Mentions légales</a>
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">Confidentialité</a>
            <a href="#accueil" className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white">
              Haut de page
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-primary-400/40 hover:text-primary-300"
    >
      {children}
    </a>
  );
}
