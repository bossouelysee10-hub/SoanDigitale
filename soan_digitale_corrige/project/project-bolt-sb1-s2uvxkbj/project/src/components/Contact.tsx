import { useState, type FormEvent, type ComponentType, type ReactNode } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Linkedin,
  Instagram,
  Twitter,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { supabase } from '@/lib/supabase';
import {
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
  EMAIL,
  EMAIL_LINK,
  SERVICES_LIST,
  COUNTRIES,
} from '@/lib/constants';

type Status = 'idle' | 'loading' | 'success' | 'error';

const HOURS = [
  { day: 'Lundi – Vendredi', time: '08h00 – 18h00' },
  { day: 'Samedi', time: '09h00 – 13h00' },
  { day: 'Dimanche', time: 'Fermé' },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      company: String(data.get('company') ?? '').trim() || null,
      service: String(data.get('service') ?? '').trim() || null,
      country: String(data.get('country') ?? '').trim() || null,
      message: String(data.get('message') ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorMsg('Merci de renseigner votre nom, votre email et votre message.');
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg("Une erreur est survenue. Vous pouvez nous écrire directement sur WhatsApp ou par email.");
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <section id="contact" className="relative bg-slate-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Contact
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Une idée, un besoin, une envie de renouveler votre image ? Écrivez-nous,
            nous revenons vers vous sous 24h.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left — infos + map + hours */}
          <Reveal className="flex flex-col gap-6">
            <ul className="space-y-3">
              <ContactInfo
                icon={WhatsAppIcon}
                label="WhatsApp"
                value={WHATSAPP_DISPLAY}
                href={WHATSAPP_LINK}
                external
              />
              <ContactInfo icon={Mail} label="Email" value={EMAIL} href={EMAIL_LINK} />
              <ContactInfo icon={MapPin} label="Adresse" value="Bénin · 100% remote-friendly" />
            </ul>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Localisation de Soan Digitale au Bénin"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3%2C6.3%2C2.75%2C6.55&layer=mapnik&marker=6.43%2C2.52"
                className="h-56 w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-primary-600" />
                <h3 className="text-base font-bold text-slate-900">Horaires</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="font-medium text-slate-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
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
          </Reveal>

          {/* Right — form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              {status === 'success' ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" htmlFor="name" required>
                      <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jean Dupont" className={inputClass} />
                    </Field>
                    <Field label="Email" htmlFor="email" required>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="vous@email.com" className={inputClass} />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Entreprise (optionnel)" htmlFor="company">
                      <input id="company" name="company" type="text" autoComplete="organization" placeholder="Votre société" className={inputClass} />
                    </Field>
                    <Field label="Pays" htmlFor="country">
                      <select id="country" name="country" className={inputClass} defaultValue="">
                        <option value="" disabled>Sélectionner…</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Service concerné" htmlFor="service">
                    <select id="service" name="service" className={inputClass} defaultValue="">
                      <option value="" disabled>Sélectionner…</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Votre message" htmlFor="message" required>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Parlez-nous de votre projet, vos objectifs, vos délais…"
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 glow"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-base font-semibold text-[#1faa52] transition-all hover:bg-[#25D366]/20"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400/20';

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-primary-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient-soft text-primary-600">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-slate-400">{label}</span>
        <span className="block text-sm font-semibold text-slate-900">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 transition-colors hover:border-primary-300"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3">{content}</div>
      )}
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-primary-300 hover:text-primary-600"
    >
      {children}
    </a>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">Message envoyé !</h3>
      <p className="max-w-sm text-slate-500">
        Merci pour votre message. Nous revenons vers vous sous 24h. À très vite
        chez Soan Digitale.
      </p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Continuer sur WhatsApp
      </a>
    </div>
  );
}
