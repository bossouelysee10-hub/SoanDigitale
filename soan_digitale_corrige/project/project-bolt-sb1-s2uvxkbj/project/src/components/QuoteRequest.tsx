import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  FileText,
  MessageCircle,
  Mail,
  Clock,
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
  BUDGETS,
  COUNTRIES,
} from '@/lib/constants';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function QuoteRequest() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState(WHATSAPP_LINK);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      full_name: String(data.get('full_name') ?? '').trim(),
      company: String(data.get('company') ?? '').trim() || null,
      phone: String(data.get('phone') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      country: String(data.get('country') ?? '').trim() || null,
      service: String(data.get('service') ?? '').trim(),
      budget: String(data.get('budget') ?? '').trim() || null,
      project_description: String(data.get('project_description') ?? '').trim(),
    };

    if (!payload.full_name || !payload.phone || !payload.email || !payload.service || !payload.project_description) {
      setStatus('error');
      setErrorMsg('Merci de remplir les champs obligatoires : nom, téléphone, email, service et description.');
      return;
    }

    const { error } = await supabase.from('quote_requests').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg("Une erreur est survenue lors de l'envoi. Vous pouvez nous écrire directement sur WhatsApp.");
      return;
    }

    const waText = encodeURIComponent(
      `Bonjour Soan Digitale, je souhaite un devis.\n\n` +
        `Nom : ${payload.full_name}\n` +
        `Entreprise : ${payload.company || '—'}\n` +
        `Téléphone : ${payload.phone}\n` +
        `Email : ${payload.email}\n` +
        `Pays : ${payload.country || '—'}\n` +
        `Service : ${payload.service}\n` +
        `Budget : ${payload.budget || '—'}\n\n` +
        `Projet : ${payload.project_description}`
    );
    setWhatsappUrl(`${WHATSAPP_LINK}?text=${waText}`);
    setStatus('success');
    form.reset();
  }

  return (
    <section id="devis" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div
        className="absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-primary-600/20 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 left-1/4 h-[520px] w-[520px] rounded-full bg-secondary-600/20 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          {/* Left — pitch */}
          <Reveal className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-400">
                Demander un devis
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                lançons votre projet ensemble
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Recevez une proposition personnalisée sous 24h. Le formulaire
                est gratuit et sans engagement.
              </p>
            </div>

            <ul className="space-y-4">
              <Highlight icon={Clock} text="Réponse sous 24h ouvrées" />
              <Highlight icon={FileText} text="Devis détaillé et transparent" />
              <Highlight icon={MessageCircle} text="Échange direct avec un expert" />
            </ul>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-slate-300">Préférez discuter tout de suite ?</p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {WHATSAPP_DISPLAY}
                </a>
                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white p-6 backdrop-blur sm:p-8 shadow-2xl">
              {status === 'success' ? (
                <SuccessState whatsappUrl={whatsappUrl} />
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom complet" htmlFor="full_name" required>
                      <input id="full_name" name="full_name" type="text" required autoComplete="name" placeholder="Jean Dupont" className={inputClass} />
                    </Field>
                    <Field label="Nom de l'entreprise" htmlFor="company">
                      <input id="company" name="company" type="text" autoComplete="organization" placeholder="Votre société" className={inputClass} />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Téléphone / WhatsApp" htmlFor="phone" required>
                      <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+229 00 00 00 00" className={inputClass} />
                    </Field>
                    <Field label="Adresse e-mail" htmlFor="email" required>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="vous@email.com" className={inputClass} />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Pays" htmlFor="country">
                      <select id="country" name="country" className={inputClass} defaultValue="">
                        <option value="" disabled>Sélectionner…</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Service recherché" htmlFor="service" required>
                      <select id="service" name="service" className={inputClass} defaultValue="" required>
                        <option value="" disabled>Sélectionner…</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Budget estimatif" htmlFor="budget">
                    <select id="budget" name="budget" className={inputClass} defaultValue="">
                      <option value="" disabled>Sélectionner…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Description du projet" htmlFor="project_description" required>
                    <textarea
                      id="project_description"
                      name="project_description"
                      required
                      rows={5}
                      placeholder="Décrivez votre projet, vos objectifs, vos délais…"
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 glow"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
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
  children: React.ReactNode;
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

function Highlight({ icon: Icon, text }: { icon: typeof Clock; text: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-200">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary-300">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-base">{text}</span>
    </li>
  );
}

function SuccessState({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">Demande envoyée !</h3>
      <p className="max-w-sm text-slate-500">
        Merci pour votre confiance. Nous revenons vers vous sous 24h. Pour
        accélérer, envoyez-nous aussi votre demande sur WhatsApp.
      </p>
      <a
        href={whatsappUrl}
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
