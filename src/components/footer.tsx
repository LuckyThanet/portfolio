import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-subtle">
        <div className="flex flex-wrap items-center justify-center gap-x-2 text-center">
          <span className="font-medium text-brand-ink">{t('footer.name')}</span>
          <span>·</span>
          <span>{t('footer.affiliation')}</span>
        </div>
        <div>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
        <a
          href="#"
          onClick={scrollToTop}
          className="py-2 hover:text-brand-ink transition-colors font-mono cursor-pointer"
        >
          {t('footer.backToTop')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
