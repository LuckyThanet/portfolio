import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { featuredProjects, project, type InfoProject } from '../data/projects';
import Modal from './modal';

export const FeaturedProjects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCoursework, setSelectedCoursework] = useState<InfoProject | null>(null);
  const [showCoursework, setShowCoursework] = useState(false);

  const edubridge = featuredProjects[0];
  const twoB = featuredProjects[1];
  const infoscope = featuredProjects[2];
  const starthai = featuredProjects[3];

  return (
    <section className="border-t border-gray-200 bg-brand-surface-subtle/50 py-14 sm:py-20 md:py-24" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-brand-accent font-semibold mb-2">
              {t('projects.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-ink">
              {t('projects.headline')}
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-md">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Project 1: EduBridge */}
          {edubridge && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-brand-ink">
                      {edubridge.caseNumber}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-subtle">
                      {t('projects.featured.edubridge.category')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-brand-ink">
                    {t('projects.featured.edubridge.title')}
                  </h3>

                  <div className="space-y-3 text-sm text-brand-muted pt-1">
                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200/80">
                      <span className="font-mono text-xs font-semibold text-brand-ink block mb-1">
                        {t('projects.labels.challenge')}
                      </span>
                      {t('projects.featured.edubridge.challenge')}
                    </div>
                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200/80">
                      <span className="font-mono text-xs font-semibold text-brand-accent block mb-1">
                        {t('projects.labels.solution')}
                      </span>
                      {t('projects.featured.edubridge.solution')}
                    </div>
                  </div>

                  <div className="p-3 rounded bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
                    <span className="font-semibold font-mono">{t('projects.labels.outcome')}</span>{' '}
                    {t('projects.featured.edubridge.outcome')}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs text-brand-subtle">
                    {edubridge.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 text-brand-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 pt-1 text-xs font-medium">
                    {edubridge.liveUrl && (
                      <a
                        className="inline-flex items-center gap-1.5 py-2 text-brand-ink hover:text-brand-accent transition-colors"
                        href={edubridge.liveUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">play_circle</span>
                        <span>{t('projects.labels.liveDemo')}</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {/* Whole poster in the card; a click opens it at readable size */}
                  <a
                    href={edubridge.image}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block rounded-lg border border-gray-200 overflow-hidden bg-gray-50 shadow-inner"
                  >
                    <img
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                      src={edubridge.image}
                      alt={t('projects.featured.edubridge.imageAlt')}
                      width={1600}
                      height={2263}
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded bg-brand-ink/85 px-2.5 py-1.5 text-xs font-medium text-white">
                      {t('projects.labels.viewPoster')}
                      <span className="material-symbols-outlined text-[14px]">open_in_full</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Project 2: 2B-KMUTT */}
          {twoB && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                  {[
                    { src: twoB.image, alt: t('projects.featured.twoB.imageAlt') },
                    ...(twoB.secondaryImage
                      ? [{ src: twoB.secondaryImage, alt: t('projects.featured.twoB.secondaryImageAlt') }]
                      : []),
                  ].map((shot) => (
                    <a
                      key={shot.src}
                      href={shot.src}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-lg border border-gray-200 overflow-hidden bg-gray-50 shadow-inner"
                    >
                      <img
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                        src={shot.src}
                        alt={shot.alt}
                        width={1600}
                        height={790}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-brand-ink">
                      {twoB.caseNumber}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-subtle">
                      {t('projects.featured.twoB.category')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-brand-ink">
                    {t('projects.featured.twoB.title')}
                  </h3>

                  <div className="space-y-3 text-sm text-brand-muted pt-1">
                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200/80">
                      <span className="font-mono text-xs font-semibold text-brand-ink block mb-1">
                        {t('projects.labels.challenge')}
                      </span>
                      {t('projects.featured.twoB.challenge')}
                    </div>
                    <div className="p-3.5 rounded bg-gray-50 border border-gray-200/80">
                      <span className="font-mono text-xs font-semibold text-brand-accent block mb-1">
                        {t('projects.labels.solution')}
                      </span>
                      {t('projects.featured.twoB.solution')}
                    </div>
                  </div>

                  <div className="p-3 rounded bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
                    <span className="font-semibold font-mono">{t('projects.labels.outcome')}</span>{' '}
                    {t('projects.featured.twoB.outcome')}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs text-brand-subtle">
                    {twoB.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 text-brand-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Secondary Row: Projects 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 3: InfoScope */}
            {infoscope && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-brand-ink">
                      {infoscope.caseNumber}
                    </span>
                    {infoscope.badge && (
                      <span className="font-mono text-xs text-brand-subtle">
                        {infoscope.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-brand-ink">
                    {t('projects.featured.infoscope.title')}
                  </h4>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {t('projects.featured.infoscope.solution')}
                  </p>

                  <a
                    href={infoscope.image}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded border border-gray-200 overflow-hidden mt-3 bg-gray-50"
                  >
                    <img
                      className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      src={infoscope.image}
                      alt={t('projects.featured.infoscope.imageAlt')}
                      width={500}
                      height={176}
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-brand-subtle">
                    {infoscope.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 text-brand-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-x-4 pt-1 border-t border-gray-100 text-xs font-medium">
                    <a
                      className="py-2.5 text-brand-muted hover:text-brand-ink transition-colors"
                      href={infoscope.githubUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t('projects.labels.githubRepo')}
                    </a>
                    {infoscope.liveUrl && (
                      <a
                        className="py-2.5 text-brand-ink hover:text-brand-accent transition-colors"
                        href={infoscope.liveUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {t('projects.labels.architectureDocs')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Project 4: StartHai */}
            {starthai && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-brand-ink">
                      {starthai.caseNumber}
                    </span>
                    <span className="font-mono text-xs text-brand-subtle">
                      {t('projects.featured.starthai.badge')}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-brand-ink">
                    {t('projects.featured.starthai.title')}
                  </h4>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {t('projects.featured.starthai.solution')}
                  </p>

                  <a
                    href={starthai.liveUrl ?? starthai.image}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded border border-gray-200 overflow-hidden mt-3 bg-gray-50"
                  >
                    <img
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      src={starthai.image}
                      alt={t('projects.featured.starthai.imageAlt')}
                      width={500}
                      height={176}
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-brand-subtle">
                    {starthai.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 text-brand-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-x-4 pt-1 border-t border-gray-100 text-xs font-medium">
                    {starthai.liveUrl && (
                      <a
                        className="py-2.5 text-brand-ink hover:text-brand-accent transition-colors"
                        href={starthai.liveUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {t('projects.labels.liveDirectory')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Toggle for Additional Coursework Projects */}
          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => setShowCoursework(!showCoursework)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-gray-300 bg-white text-brand-ink text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            >
              <span>
                {showCoursework
                  ? t('projects.labels.hideCoursework')
                  : t('projects.labels.showCoursework')}
              </span>
              <span className="material-symbols-outlined text-[16px]">
                {showCoursework ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>

          {/* Coursework Cards */}
          {showCoursework && (
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold mb-6">
                {t('projects.labels.courseworkCatalog')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-sm"
                  >
                    <div>
                      <span className="font-mono text-[11px] text-brand-subtle block mb-1">
                        {t(`projects.coursework.${proj.id}.date`)}
                      </span>
                      <h4 className="font-semibold text-base text-brand-ink mb-1">
                        {t(`projects.coursework.${proj.id}.title`)}
                      </h4>
                      <p className="text-xs text-brand-muted line-clamp-2 mb-3">
                        {t(`projects.coursework.${proj.id}.summary`)}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1 font-mono text-[10px] text-brand-subtle">
                        {proj.technologies.slice(0, 3).map((tItem) => (
                          <span key={tItem} className="px-1.5 py-0.5 rounded bg-gray-100">
                            {tItem}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <button
                          type="button"
                          onClick={() => setSelectedCoursework(proj)}
                          className="font-medium text-brand-ink hover:text-brand-accent cursor-pointer"
                        >
                          {t('projects.labels.viewDetails')}
                        </button>
                        <a
                          href={proj.sourceCode}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-brand-muted hover:text-brand-ink"
                        >
                          {t('projects.labels.codeLink')}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Coursework Details */}
      {selectedCoursework && (
        <Modal
          isOpen={Boolean(selectedCoursework)}
          onClose={() => setSelectedCoursework(null)}
          title={t(`projects.coursework.${selectedCoursework.id}.title`)}
        >
          {selectedCoursework.imageUrl && selectedCoursework.imageUrl.length > 0 && (
            <div className="marquee overflow-hidden w-full">
              {/* Two identical sets; the track slides by exactly one set (-50%) so the loop has no seam */}
              <div
                className="marquee-track flex w-max"
                style={{ animationDuration: `${selectedCoursework.imageUrl.length * 5}s` }}
              >
                {[0, 1].map((copy) => (
                  <div key={copy} className="marquee-set flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
                    {selectedCoursework.imageUrl!.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={copy === 0 ? `${t(`projects.coursework.${selectedCoursework.id}.title`)} ${index + 1}` : ''}
                        className="h-25 sm:h-50 w-auto max-w-none shrink-0 object-cover rounded-lg shadow-md"
                        draggable={false}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5">
            {/* Description */}
            <div className="text-sm text-gray-600">
              {(
                t(`projects.coursework.${selectedCoursework.id}.description`, {
                  returnObjects: true,
                }) as string[]
              ).map((desc, i) => (
                <div key={i}>{desc}</div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-2 text-sm text-gray-700">
              <span className="font-semibold">{t('projects.labels.technologies')}</span>{' '}
              {selectedCoursework.technologies.join(', ')}
            </div>

            {/* Source code, status and due date */}
            <div className="mt-2 text-sm text-gray-700">
              <a
                href={selectedCoursework.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {t('contact.sourceCode')}
              </a>{' '}
              {t('projects.labels.status')}{' '}
              <span className="font-semibold text-[#34C759]">
                {t(`projects.coursework.${selectedCoursework.id}.status`)}
              </span>{' '}
              | {t('projects.labels.dueDate')}{' '}
              <span className="text-gray-500">{t(`projects.coursework.${selectedCoursework.id}.date`)}</span>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default FeaturedProjects;
