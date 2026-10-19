import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'thanet.jomp@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="border-t border-gray-200 py-14 sm:py-20 md:py-24" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono tracking-wider uppercase text-brand-accent font-semibold mb-2">
                {t('contact.badge')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-ink leading-tight">
                {t('contact.headline')}
              </h2>
            </div>

            <p className="text-base text-brand-muted leading-relaxed">
              {t('contact.description')}
            </p>

            {/* Direct Contact List */}
            <div className="space-y-3 pt-2">
              {/* Email with copy */}
              <div className="p-4 rounded-lg border border-gray-200 bg-white flex items-center justify-between gap-3 shadow-sm">
                <div className="min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-subtle block">
                    {t('contact.directEmail')}
                  </span>
                  <a
                    className="font-medium text-brand-ink hover:text-brand-accent text-sm transition-colors break-all"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="shrink-0 px-3 py-2 text-xs font-mono font-medium rounded border border-gray-200 hover:bg-gray-50 text-brand-muted hover:text-brand-ink transition-colors cursor-pointer"
                >
                  {copied ? t('contact.copied') : t('contact.copy')}
                </button>
              </div>

              {/* GitHub Link */}
              <a
                className="p-4 rounded-lg border border-gray-200 bg-white flex items-center justify-between hover:border-gray-300 transition-colors group shadow-sm"
                href="https://github.com/LuckyThanet"
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-subtle block">
                    {t('contact.sourceCode')}
                  </span>
                  <span className="font-medium text-brand-ink text-sm group-hover:text-brand-accent transition-colors">
                    github.com/LuckyThanet
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-brand-subtle group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* LinkedIn Link */}
              <a
                className="p-4 rounded-lg border border-gray-200 bg-white flex items-center justify-between hover:border-gray-300 transition-colors group shadow-sm"
                href="https://www.linkedin.com/in/thanet-jomphool-770769343"
                rel="noreferrer"
                target="_blank"
              >
                <div className="min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-brand-subtle block">
                    LinkedIn
                  </span>
                  <span className="font-medium text-brand-ink text-sm group-hover:text-brand-accent transition-colors break-all">
                    linkedin.com/in/thanet-jomphool
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-brand-subtle group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  className="p-3.5 rounded-lg border border-gray-200 bg-white flex items-center justify-between hover:border-gray-300 transition-colors group shadow-sm"
                  href="https://www.facebook.com/thnes.cxm.phul"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-subtle block">
                      Facebook
                    </span>
                    <span className="font-medium text-brand-ink text-xs group-hover:text-brand-accent transition-colors">
                      Thanet Jomphool
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-brand-subtle group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </a>

                <a
                  className="p-3.5 rounded-lg border border-gray-200 bg-white flex items-center justify-between hover:border-gray-300 transition-colors group shadow-sm"
                  href="https://www.instagram.com/etantj._"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-subtle block">
                      Instagram
                    </span>
                    <span className="font-medium text-brand-ink text-xs group-hover:text-brand-accent transition-colors">
                      @etantj._
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-brand-subtle group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="text-xs text-brand-subtle flex items-center gap-1.5 pt-2">
              <span className="material-symbols-outlined text-[16px] text-brand-subtle">
                location_on
              </span>
              <span>{t('contact.location')}</span>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-lg bg-brand-surface-subtle/70 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-ink mb-1">
                {t('contact.form.title')}
              </h3>
              <p className="text-xs text-brand-muted mb-6">
                {t('contact.form.subtitle')}
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    className="w-full text-base sm:text-sm bg-white border border-gray-200 rounded px-3.5 py-2.5 sm:py-2 text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-ink transition-colors"
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    className="w-full text-base sm:text-sm bg-white border border-gray-200 rounded px-3.5 py-2.5 sm:py-2 text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-ink transition-colors"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="w-full text-base sm:text-sm bg-white border border-gray-200 rounded px-3.5 py-2.5 sm:py-2 text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-ink resize-none transition-colors"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {formSubmitted && (
                  <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                    {t('contact.form.success')}
                  </div>
                )}

                <button
                  className="w-full py-2.5 rounded bg-brand-ink text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                  type="submit"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;