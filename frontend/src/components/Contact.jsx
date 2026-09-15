import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Mail, Phone, Instagram, Send, Loader2 } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ full_name: '', company_name: '', email: '', phone: '', inquiry_type: '', message: '' });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, { ...form, inquiry_type: form.inquiry_type || 'General Inquiry' });
      toast.success(t.contact.success);
      setForm({ full_name: '', company_name: '', email: '', phone: '', inquiry_type: '', message: '' });
    } catch (err) {
      toast.error(t.contact.error);
    } finally {
      setSending(false);
    }
  };

  const inputCls = 'w-full rounded-2xl border border-purple-100 bg-[#FAF7FC] px-4 py-3.5 text-sm text-[#2A1535] placeholder:text-[#a08cae] outline-none transition-all duration-300 focus:border-fuchsia-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(192,132,252,0.15)]';
  const labelCls = 'mb-2 block text-xs font-bold uppercase tracking-wider text-[#8A688A]';

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-[#FAF7FC] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 end-[-6%] h-96 w-96 rounded-full bg-fuchsia-200/50 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 start-[-6%] h-80 w-80 rounded-full bg-[#C5A16F]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              data-testid="contact-form"
              onSubmit={submit}
              className="rounded-3xl border border-purple-100 bg-white p-7 sm:p-9 shadow-[0_20px_60px_rgba(126,34,206,0.1)]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="full_name">{t.contact.fullName}</label>
                  <input data-testid="contact-input-fullname" id="full_name" required value={form.full_name} onChange={set('full_name')} placeholder={t.contact.fullNamePh} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="company_name">{t.contact.company}</label>
                  <input data-testid="contact-input-company" id="company_name" value={form.company_name} onChange={set('company_name')} placeholder={t.contact.companyPh} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">{t.contact.email}</label>
                  <input data-testid="contact-input-email" id="email" type="email" required value={form.email} onChange={set('email')} placeholder={t.contact.emailPh} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">{t.contact.phone}</label>
                  <input data-testid="contact-input-phone" id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder={t.contact.phonePh} className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="inquiry_type">{t.contact.inquiry}</label>
                  <select
                    data-testid="contact-select-inquiry-type"
                    id="inquiry_type"
                    value={form.inquiry_type}
                    onChange={set('inquiry_type')}
                    className={`${inputCls} appearance-none ${form.inquiry_type ? '' : 'text-[#a08cae]'}`}
                  >
                    <option value="" disabled>{t.contact.inquiryPh}</option>
                    {t.contact.inquiryOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="message">{t.contact.message}</label>
                  <textarea data-testid="contact-input-message" id="message" required rows={5} value={form.message} onChange={set('message')} placeholder={t.contact.messagePh} className={`${inputCls} resize-none`} />
                </div>
              </div>
              <button
                data-testid="contact-submit-button"
                type="submit"
                disabled={sending}
                className="group mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-l from-[#8A688A] to-fuchsia-500 px-9 py-4 text-sm font-bold text-white shadow-[0_12px_36px_rgba(168,85,247,0.35)] transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
              >
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 rtl:-scale-x-100" />}
                {sending ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl bg-[#16091f] p-8 shadow-[0_20px_60px_rgba(22,9,31,0.35)]">
                <h3 className="text-lg font-semibold text-purple-50" data-testid="contact-info-title">{t.contact.infoTitle}</h3>
                <div className="mt-6 flex flex-col gap-5">
                  <a href="mailto:entertainment@hamatalebdaa.com" data-testid="contact-email-link" className="group flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-fuchsia-300 transition-colors duration-300 group-hover:bg-fuchsia-500 group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-purple-300/60">{t.contact.emailLabel}</span>
                      <span className="block text-sm font-semibold text-purple-100" dir="ltr">entertainment@hamatalebdaa.com</span>
                    </span>
                  </a>
                  <a href="tel:+966569969513" data-testid="contact-phone-link" className="group flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C5A16F]/15 text-[#C5A16F] transition-colors duration-300 group-hover:bg-[#C5A16F] group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-purple-300/60">{t.contact.phoneLabel}</span>
                      <span className="block text-sm font-semibold text-purple-100" dir="ltr">+966 569969513</span>
                    </span>
                  </a>
                  <a href="https://instagram.com/Hamat.alebdaa" target="_blank" rel="noopener noreferrer" data-testid="contact-instagram-link" className="group flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-400/15 text-purple-300 transition-colors duration-300 group-hover:bg-purple-400 group-hover:text-white">
                      <Instagram className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-purple-300/60">{t.contact.socialLabel}</span>
                      <span className="block text-sm font-semibold text-purple-100" dir="ltr">@Hamat.alebdaa</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-purple-100 shadow-[0_20px_60px_rgba(126,34,206,0.12)]">
                <img src="/assets/citywalk-night.jpg" alt="Event venue at night" className="h-full min-h-56 w-full object-cover" data-testid="contact-image" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16091f]/60 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
