import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
    const { t } = useTranslation();

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Executive Narrative */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-subtle border border-gray-200 text-[11px] font-mono tracking-wider uppercase text-brand-subtle mb-6">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 status-pulse-dot" />
                        {t('hero.badge')}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-ink mb-6 leading-[1.15]">
                        {t('hero.headline')}
                    </h1>

                    <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl font-normal">
                        {t('hero.intro.greeting')}{' '}
                        <span className="text-brand-ink font-medium">{t('hero.intro.name')}</span>
                        {t('hero.intro.bio')}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-12">
                        <button
                            type="button"
                            onClick={() => scrollTo('projects')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-ink text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                        >
                            <span>{t('hero.cta.viewProjects')}</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollTo('contact')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-gray-300 text-brand-ink font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <span>{t('hero.cta.contactMe')}</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                    </div>

                    {/* Metadata Strip */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200 w-full max-w-lg">
                        <div>
                            <div className="font-mono text-xs text-brand-subtle uppercase tracking-wider">
                                {t('hero.metrics.degreeLabel')}
                            </div>
                            <div className="font-medium text-sm text-brand-ink mt-0.5">
                                {t('hero.metrics.degreeValue')}
                            </div>
                        </div>
                        <div>
                            <div className="font-mono text-xs text-brand-subtle uppercase tracking-wider">
                                {t('hero.metrics.focusLabel')}
                            </div>
                            <div className="font-medium text-sm text-brand-ink mt-0.5">
                                {t('hero.metrics.focusValue')}
                            </div>
                        </div>
                        <div>
                            <div className="font-mono text-xs text-brand-subtle uppercase tracking-wider">
                                {t('hero.metrics.statusLabel')}
                            </div>
                            <div className="font-medium text-sm text-emerald-700 flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-pulse-dot" />
                                {t('hero.metrics.statusValue')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Light Mode Technical System Spec Box */}
                <div className="lg:col-span-5 w-full">
                    <div className="rounded-lg border border-gray-200 bg-brand-surface-subtle/70 overflow-hidden font-mono text-xs shadow-sm">
                        <div className="px-4 py-3 bg-gray-100/80 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400/40" />
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400/40" />
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 border border-gray-400/40" />
                            </div>
                            <span className="text-brand-subtle text-[11px]">{t('hero.terminal.prompt')}</span>
                            <span className="text-[10px] text-brand-accent uppercase font-medium">
                                {t('hero.terminal.sysStatus')}
                            </span>
                        </div>

                        <div className="p-5 space-y-3 text-brand-muted leading-relaxed">
                            <div className="text-brand-subtle">
                                <span className="text-brand-accent">$</span> cat /etc/engineer/profile.json
                            </div>

                            <div className="bg-white p-4 rounded border border-gray-200/90 text-[11.5px] space-y-1.5 overflow-x-auto">
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;engineer&quot;</span>: <span className="text-brand-ink font-medium">&quot;{t('hero.terminal.engineer')}&quot;</span>,
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;degree&quot;</span>: <span className="text-brand-ink">&quot;{t('hero.terminal.degree')}&quot;</span>,
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;university&quot;</span>: <span className="text-brand-ink">&quot;{t('hero.terminal.university')}&quot;</span>,
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;core_languages&quot;</span>: [&quot;TypeScript&quot;, &quot;Go&quot;, &quot;JavaScript&quot;, &quot;SQL&quot;],
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;frameworks&quot;</span>: [&quot;Next.js&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;Express&quot;],
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;databases&quot;</span>: [&quot;PostgreSQL&quot;, &quot;MySQL&quot;, &quot;Prisma&quot;],
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;infrastructure&quot;</span>: [&quot;Docker&quot;, &quot;AWS&quot;, &quot;Nginx&quot;, &quot;CI/CD&quot;],
                                </div>
                                <div>
                                    <span className="text-brand-accent font-semibold">&quot;mindset&quot;</span>: <span className="text-brand-ink">&quot;{t('hero.terminal.mindset')}&quot;</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] pt-1 text-brand-subtle flex-wrap gap-2">
                                <span className="flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 status-pulse-dot" />
                                    <span>{t('hero.terminal.envReady')}</span>
                                </span>
                                <span>{t('hero.terminal.location')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
