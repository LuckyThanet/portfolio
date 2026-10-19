import React from 'react';
import { useTranslation } from 'react-i18next';

interface SkillTierItem {
  tier: string;
  headline: string;
  skills: string;
}

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const skillTiers = (t('skills.tiers', { returnObjects: true }) as SkillTierItem[]) || [];

  return (
    <section className="border-t border-gray-200 py-14 sm:py-20 md:py-24" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 md:mb-14">
          <div className="text-xs font-mono tracking-wider uppercase text-brand-accent font-semibold mb-2">
            {t('skills.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-ink">
            {t('skills.headline')}
          </h2>
          <p className="text-sm text-brand-muted mt-2">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-200 pt-10">
          {skillTiers.map((tier, idx) => {
            const isFullWidth = idx === skillTiers.length - 1;
            return (
              <div
                key={idx}
                className={`space-y-2 ${isFullWidth ? 'md:col-span-2' : ''}`}
              >
                <div className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold">
                  {tier.tier}
                </div>
                <h3 className="text-base font-semibold text-brand-ink">
                  {tier.headline}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {tier.skills}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
