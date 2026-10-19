import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface NavLinkItem {
  key: 'about' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';
  href: string;
}

const navLinks: NavLinkItem[] = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'education', href: '#education-honors' },
  { key: 'contact', href: '#contact' },
];

const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'th' ? 'th' : 'en';

  const handleLanguageChange = (lang: 'en' | 'th') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`inline-flex items-center rounded-md border border-gray-200 bg-gray-50/80 p-0.5 text-xs font-mono ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`min-w-9 px-2.5 py-1.5 sm:min-w-0 sm:px-2 sm:py-0.5 rounded transition-all font-medium cursor-pointer ${
          currentLang === 'en'
            ? 'bg-white text-brand-ink shadow-xs font-semibold'
            : 'text-brand-subtle hover:text-brand-ink'
        }`}
        aria-label={t('nav.aria.switchEn')}
        aria-pressed={currentLang === 'en'}
      >
        EN
      </button>
      <span className="text-gray-300 select-none">|</span>
      <button
        type="button"
        onClick={() => handleLanguageChange('th')}
        className={`min-w-9 px-2.5 py-1.5 sm:min-w-0 sm:px-2 sm:py-0.5 rounded transition-all font-medium cursor-pointer ${
          currentLang === 'th'
            ? 'bg-white text-brand-ink shadow-xs font-semibold'
            : 'text-brand-subtle hover:text-brand-ink'
        }`}
        aria-label={t('nav.aria.switchTh')}
        aria-pressed={currentLang === 'th'}
      >
        TH
      </button>
    </div>
  );
};

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight text-brand-ink hover:text-brand-accent transition-colors whitespace-nowrap"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-dot inline-block" />
            <span>{t('nav.brand')}</span>
          </span>
          <span className="hidden sm:inline text-gray-300 font-normal">/</span>
          <span className="hidden sm:inline font-mono text-xs font-normal text-brand-subtle">{t('nav.handle')}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-brand-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-brand-ink transition-colors"
            >
              {t(`nav.links.${link.key}`)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />

          <a
            className="hidden sm:inline-flex p-2 text-brand-muted hover:text-brand-ink transition-colors"
            href="https://github.com/LuckyThanet"
            rel="noreferrer"
            target="_blank"
            title={t('nav.aria.github')}
            aria-label={t('nav.aria.github')}
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a
            className="hidden sm:inline-flex p-2 text-brand-muted hover:text-brand-ink transition-colors"
            href="https://www.linkedin.com/in/thanet-jomphool-770769343"
            rel="noreferrer"
            target="_blank"
            title={t('nav.aria.linkedin')}
            aria-label={t('nav.aria.linkedin')}
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium whitespace-nowrap bg-brand-ink text-white hover:bg-neutral-800 transition-colors shadow-sm"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>{t('nav.resume')}</span>
            <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
          </a>


          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden -mr-2 p-2.5 text-brand-ink hover:text-brand-accent focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t('nav.aria.menu')}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white/95 backdrop-blur-lg px-4 sm:px-6 py-4 space-y-3">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-brand-muted hover:text-brand-ink py-2.5 transition-colors"
              >
                {t(`nav.links.${link.key}`)}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <a
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-sm font-medium bg-brand-ink text-white hover:bg-neutral-800 transition-colors"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>{t('nav.resume')}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/LuckyThanet"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-brand-muted hover:text-brand-ink"
                aria-label={t('nav.aria.github')}
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thanet-jomphool-770769343"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-brand-muted hover:text-brand-ink"
                aria-label={t('nav.aria.linkedin')}
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
