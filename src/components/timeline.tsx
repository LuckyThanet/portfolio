import React from 'react';
import { useTranslation } from 'react-i18next';

interface ExperienceTranslatedItem {
  date: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  bullets: string[];
}

const experienceTags: string[][] = [
  ['React', 'TypeScript', 'Tailwind CSS', 'Go (Fiber)', 'GORM', 'PostgreSQL', 'ADFS SSO / JWT'],
  ['React', 'TypeScript', 'Node.js', 'Express', 'REST API', 'Git'],
  ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'SQL'],
  ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker'],
  ['Power Apps', 'Power Fx', 'Database Modeling', 'Automation'],
];

export const Timeline: React.FC = () => {
  const { t } = useTranslation();

  const items = (t('experience.items', { returnObjects: true }) as ExperienceTranslatedItem[]) || [];

  return (
    <section className="border-t border-gray-200 py-14 sm:py-20 md:py-24" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 md:mb-14">
          <div className="text-xs font-mono tracking-wider uppercase text-brand-accent font-semibold mb-2">
            {t('experience.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-ink">
            {t('experience.headline')}
          </h2>
          <p className="text-sm text-brand-muted mt-2">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-12 max-w-4xl">
          {items.map((exp, index) => {
            const tags = experienceTags[index] || [];
            return (
              <div key={index} className="relative pl-7 sm:pl-8 border-l-2 border-gray-200 space-y-3">
                {/* Node indicator */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-brand-accent" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-ink">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-brand-accent">
                      {exp.organization}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-brand-subtle">
                    {exp.date} · {exp.location}
                  </div>
                </div>

                <p className="text-sm text-brand-muted leading-relaxed pt-1">
                  {exp.summary}
                </p>

                {/* Native markers sit on the first line's baseline in any script */}
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-brand-muted pt-1 marker:text-brand-subtle">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-brand-subtle">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-brand-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
