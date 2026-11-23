import React from 'react';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';

export type LegalPageType = 'terms' | 'privacy';

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalContent {
  title: string;
  intro: string;
  sections: LegalSection[];
}

const LAST_UPDATED = 'November 22, 2026';
const CONTACT_EMAIL = 'info@examprep.in';

const content: Record<LegalPageType, LegalContent> = {
  terms: {
    title: 'Terms & Conditions',
    intro:
      'These Terms & Conditions govern your use of the Exam Prep website and its mock tests. By accessing or using Exam Prep, you agree to these terms. If you do not agree, please do not use the website.',
    sections: [
      {
        heading: '1. About Exam Prep',
        paragraphs: [
          'Exam Prep is an online practice platform that offers mock tests, practice questions and explanations to help you prepare for certification exams.',
          'Exam Prep is an independent platform. It is not affiliated with, endorsed by or connected to NISM, SEBI or any other examining or regulatory body. Exam names are used only to describe the subject of the practice material.',
        ],
      },
      {
        heading: '2. Accounts and Access',
        bullets: [
          'Access to the full mock tests requires an account provided to you by Exam Prep.',
          'You are responsible for keeping your login details confidential and for all activity under your account.',
          'Accounts are for individual use only. Sharing your account with others is not permitted.',
          'We may suspend or close an account that is misused or that breaks these terms.',
        ],
      },
      {
        heading: '3. Test Attempts',
        paragraphs: [
          'Each online test can be attempted a limited number of times, as shown on the tests page. An attempt is counted when you start a test. Attempts that have been used cannot be restored.',
        ],
      },
      {
        heading: '4. Acceptable Use',
        paragraphs: ['When using Exam Prep, you agree not to:'],
        bullets: [
          'Copy, reproduce, sell or distribute the questions, explanations or other content.',
          'Try to bypass attempt limits, access controls or other restrictions.',
          'Use automated tools to access or extract content from the website.',
          'Interfere with or disrupt the website or its security.',
        ],
      },
      {
        heading: '5. Intellectual Property',
        paragraphs: [
          'All questions, explanations, designs and other content on Exam Prep belong to Exam Prep or its licensors and are protected by applicable laws. You may use the content only for your own personal, non-commercial exam preparation.',
        ],
      },
      {
        heading: '6. No Guarantee of Results',
        paragraphs: [
          'Exam Prep is a study aid. We work to keep our content accurate and up to date, but we do not guarantee that it is complete or error-free, or that using it will lead to passing any exam. Always refer to the official study material published by the examining body.',
        ],
      },
      {
        heading: '7. Limitation of Liability',
        paragraphs: [
          'Exam Prep is provided on an "as is" and "as available" basis. To the extent permitted by law, Exam Prep is not liable for any indirect or consequential loss arising from your use of, or inability to use, the website.',
        ],
      },
      {
        heading: '8. Changes to These Terms',
        paragraphs: [
          'We may update these terms from time to time. The "Last updated" date at the top of this page shows when they were last changed. Continuing to use Exam Prep after an update means you accept the revised terms.',
        ],
      },
      {
        heading: '9. Governing Law',
        paragraphs: ['These terms are governed by the laws of India.'],
      },
      {
        heading: '10. Contact Us',
        paragraphs: [`If you have any questions about these terms, please contact us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro:
      'This Privacy Policy explains what information Exam Prep collects when you use the website, how it is used and the choices you have.',
    sections: [
      {
        heading: '1. Information We Collect',
        bullets: [
          'Account details: the email address and display name linked to your account.',
          'Usage details: the number of attempts you have used and have left for each test.',
          'Session details: whether you are currently logged in, so that you stay signed in between visits.',
        ],
      },
      {
        heading: '2. How Your Information Is Stored',
        paragraphs: [
          "Your login status, display name, email address and test attempt counts are stored in your browser's local storage on your own device. Your answers during a test are kept only while the test page is open and are not saved after you leave it.",
        ],
      },
      {
        heading: '3. How We Use Your Information',
        bullets: [
          'To let you log in and access the mock tests.',
          'To show your name in the website header.',
          'To track the number of attempts remaining for each test.',
        ],
      },
      {
        heading: '4. Sharing of Information',
        paragraphs: [
          'We do not sell, rent or trade your personal information. We do not share it with third parties except where required by law.',
        ],
      },
      {
        heading: '5. Cookies and Tracking',
        paragraphs: [
          'Exam Prep does not use advertising or analytics cookies. Browser local storage is used only for the purposes described above.',
        ],
      },
      {
        heading: '6. Your Choices',
        bullets: [
          'You can log out at any time, which removes your login details from the browser.',
          "You can clear your browser's site data to remove all information Exam Prep has stored on your device. This will also reset the attempt counts stored on that device.",
          'You can contact us to ask about the personal information linked to your account.',
        ],
      },
      {
        heading: '7. Data Security',
        paragraphs: [
          'We take reasonable steps to protect your information. However, no method of storage or transmission over the internet is completely secure. Please use the website on a device you trust and log out after using a shared device.',
        ],
      },
      {
        heading: "8. Children's Privacy",
        paragraphs: [
          'Exam Prep is intended for people preparing for professional certification exams and is not directed at children under 18.',
        ],
      },
      {
        heading: '9. Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page shows when it was last changed.',
        ],
      },
      {
        heading: '10. Contact Us',
        paragraphs: [`If you have any questions about this Privacy Policy, please contact us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

interface LegalPageProps {
  page: LegalPageType;
  onBackToHome: () => void;
  onSwitchPage: (page: LegalPageType) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ page, onBackToHome, onSwitchPage }) => {
  const { title, intro, sections } = content[page];
  const Icon = page === 'terms' ? FileText : ShieldCheck;
  const otherPage: LegalPageType = page === 'terms' ? 'privacy' : 'terms';

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-red-600 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <article className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-xs p-6 sm:p-10 space-y-8">
          <header className="space-y-3 border-b border-gray-100 pb-6">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1b2246] tracking-tight">{title}</h1>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{intro}</p>
          </header>

          <div className="space-y-7">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-[#1b2246]">{section.heading}</h2>
                {section.paragraphs?.map((text) => (
                  <p key={text} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {text}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-1.5 marker:text-red-500">
                    {section.bullets.map((text) => (
                      <li key={text} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <footer className="border-t border-gray-100 pt-6 text-sm text-gray-600">
            Also read our{' '}
            <button
              type="button"
              onClick={() => onSwitchPage(otherPage)}
              className="font-semibold text-red-600 hover:underline cursor-pointer"
            >
              {content[otherPage].title}
            </button>
            .
          </footer>
        </article>
      </div>
    </div>
  );
};
