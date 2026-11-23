import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';
import type { LegalPageType } from './LegalPage';

const legalLinkClass =
  'group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-200 transition-all hover:border-red-500/60 hover:bg-red-600/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500';

const legalIconClass = 'w-4 h-4 text-red-400 transition-colors group-hover:text-red-300';

interface FooterProps {
  onOpenUserManagement?: () => void;
  onOpenLegalPage?: (page: LegalPageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalPage }) => {
  // Real links (work with open-in-new-tab); normal clicks open the page without a reload
  const handleLegalClick = (page: LegalPageType) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onOpenLegalPage || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onOpenLegalPage(page);
  };

  return (
    <footer className="relative bg-[#141a38] text-white overflow-hidden">
      {/* Brand accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-600" />

      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] max-w-full h-48 rounded-full bg-red-600/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col-reverse items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
            © 2026{' '}
            <span className="font-semibold text-gray-200">Exam Prep</span>. All Rights Reserved.
          </p>

          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="/terms" onClick={handleLegalClick('terms')} className={legalLinkClass}>
              <FileText className={legalIconClass} />
              <span>Terms &amp; Conditions</span>
            </a>
            <a href="/privacy" onClick={handleLegalClick('privacy')} className={legalLinkClass}>
              <ShieldCheck className={legalIconClass} />
              <span>Privacy Policy</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
