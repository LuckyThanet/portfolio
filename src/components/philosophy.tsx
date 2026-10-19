import React from 'react';
import { useTranslation } from 'react-i18next';

export const Philosophy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="border-t border-gray-200 bg-brand-surface-subtle/50 py-14 sm:py-20 md:py-24" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 md:mb-14">
          <div className="text-xs font-mono tracking-wider uppercase text-brand-accent font-semibold mb-2">
            {t('about.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-ink">
            {t('about.headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Academic Foundation */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="p-6 rounded-lg bg-white border border-gray-200 space-y-4 text-brand-muted text-sm leading-relaxed shadow-sm">
              <p>
                {t('about.education.p1Prefix')}
                <strong className="text-brand-ink font-semibold">
                  {t('about.education.university')}
                </strong>
                {t('about.education.p1Suffix')}
              </p>
              <p>{t('about.education.p2')}</p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200 flex items-center justify-between text-xs text-brand-muted shadow-sm">
              <span className="font-medium text-brand-ink">{t('about.languageProficiency.label')}</span>
              <span>{t('about.languageProficiency.value')}</span>
            </div>
          </div>

          {/* Right Column: 3 Architectural Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {/* Pillar 1 */}
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-brand-accent font-bold">
                  {t('about.pillars.backend.num')}
                </span>
                <h3 className="font-semibold text-brand-ink text-base">
                  {t('about.pillars.backend.title')}
                </h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed pl-6">
                {t('about.pillars.backend.description')}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-brand-accent font-bold">
                  {t('about.pillars.frontend.num')}
                </span>
                <h3 className="font-semibold text-brand-ink text-base">
                  {t('about.pillars.frontend.title')}
                </h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed pl-6">
                {t('about.pillars.frontend.description')}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-brand-accent font-bold">
                  {t('about.pillars.devops.num')}
                </span>
                <h3 className="font-semibold text-brand-ink text-base">
                  {t('about.pillars.devops.title')}
                </h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed pl-6">
                {t('about.pillars.devops.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
