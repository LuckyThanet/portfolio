import React from 'react';
import { useTranslation } from 'react-i18next';

interface HighlightItem {
  highlight: string;
  text: string;
}

export const EducationSection: React.FC = () => {
  const { t } = useTranslation();

  const curriculum = (t('education.curriculum', { returnObjects: true }) as string[]) || [];
  const honorItems = (t('education.honors.items', { returnObjects: true }) as HighlightItem[]) || [];
  const mentorItems = (t('education.mentorship.items', { returnObjects: true }) as HighlightItem[]) || [];

  return (
    <section className="border-t border-gray-200 bg-brand-surface-subtle/50 py-14 sm:py-20 md:py-24" id="education-honors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 md:mb-14">
          <div className="text-xs font-mono tracking-wider uppercase text-brand-accent font-semibold mb-2">
            {t('education.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-ink">
            {t('education.headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-white border border-gray-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-brand-ink font-medium">
                  {t('education.degree.badge')}
                </span>
                <span className="text-xs font-mono text-brand-subtle">
                  {t('education.degree.university')}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">
                {t('education.degree.title')}
              </h3>
              <div className="text-sm font-medium text-brand-accent mb-4">
                {t('education.degree.major')}
              </div>

              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {t('education.degree.description')}
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="font-mono text-xs text-brand-ink font-bold">
                  {t('education.degree.curriculumLabel')}
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-brand-subtle">
                  {curriculum.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-gray-50 border border-gray-200 text-brand-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 font-mono text-xs text-brand-subtle flex justify-between items-center">
              <span>{t('education.degree.department')}</span>
              <span className="text-brand-ink font-medium">
                {t('education.degree.status')}
              </span>
            </div>
          </div>

          {/* Honors & Mentorship */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-lg bg-white border border-gray-200 flex-1 shadow-sm space-y-2">
              <div className="font-mono text-xs text-brand-accent uppercase tracking-wider font-semibold">
                {t('education.honors.badge')}
              </div>
              <h4 className="font-semibold text-brand-ink text-base">
                {t('education.honors.title')}
              </h4>
              <ul className="text-xs sm:text-sm text-brand-muted space-y-2 pt-1 leading-relaxed">
                {honorItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-brand-accent font-mono shrink-0">▸</span>
                    <span>
                      <strong className="text-brand-ink">{item.highlight}</strong> — {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-white border border-gray-200 flex-1 shadow-sm space-y-2">
              <div className="font-mono text-xs text-brand-accent uppercase tracking-wider font-semibold">
                {t('education.mentorship.badge')}
              </div>
              <h4 className="font-semibold text-brand-ink text-base">
                {t('education.mentorship.title')}
              </h4>
              <ul className="text-xs sm:text-sm text-brand-muted space-y-2 pt-1 leading-relaxed">
                {mentorItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-brand-accent font-mono shrink-0">▸</span>
                    <span>
                      <strong className="text-brand-ink">{item.highlight}</strong> — {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
