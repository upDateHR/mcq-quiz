import React from 'react';
import {
  Play,
  ArrowDown,
  Sparkles,
  Award,
  ClipboardList,
  ListChecks,
  Lightbulb,
  MousePointerClick,
  BookOpenCheck,
} from 'lucide-react';

interface HomeProps {
  onSelectExam: (examTitle: string) => void;
  onStartQuiz: () => void;
  onFreeDemo?: () => void;
  onBuyNow?: () => void;
}

// Facts taken from the test data in src/data (8 tests, 500 questions, every question has an explanation)
const highlights = [
  { icon: ClipboardList, label: '8 Mock Tests' },
  { icon: ListChecks, label: '500+ Questions' },
  { icon: Lightbulb, label: 'Detailed Explanations' },
];

const steps = [
  {
    icon: ClipboardList,
    title: 'Choose Your Exam',
    text: 'Select the certification exam you are preparing for.',
  },
  {
    icon: MousePointerClick,
    title: 'Start Practicing',
    text: 'Attempt the questions and choose your answers.',
  },
  {
    icon: BookOpenCheck,
    title: 'Learn From Explanations',
    text: 'See the correct answer and a detailed explanation instantly.',
  },
];

export const Home: React.FC<HomeProps> = ({ onStartQuiz }) => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-[#f8f9fa] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        {/* Soft background accents */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-100/50 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-100 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-red-600" />
            <span>Certification Preparation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b2246] tracking-tight leading-tight text-balance">
            Prepare Smarter. <span className="text-red-600">Practice Better.</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Strengthen your certification exam preparation with practice questions, mock tests and instant explanations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 transition-all text-base cursor-pointer hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Start Quiz</span>
            </button>

            <button
              onClick={scrollToHowItWorks}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#1b2246] border border-gray-300 font-bold px-8 py-3.5 rounded-xl shadow-2xs hover:shadow-xs transition-all text-base cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <span>How It Works</span>
              <ArrowDown className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>

          {/* Quick highlights */}
          <ul className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-600">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-red-600" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">

        {/* How It Works Section */}
        <section id="how-it-works" className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xs space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">How It Works</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b2246] tracking-tight text-balance">
              Start Your Preparation in 3 Simple Steps
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className="group bg-gray-50/80 p-6 rounded-2xl border border-gray-100 space-y-3 transition-all hover:bg-white hover:border-red-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-gray-200 font-mono transition-colors group-hover:text-red-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-[#1b2246] text-lg">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#1b2246] to-[#2a3468] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md">
          <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative inline-flex items-center gap-2 bg-white/10 text-white/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Boost Your Preparation Today</span>
          </div>

          <h2 className="relative text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start Practicing?
          </h2>

          <p className="relative text-sky-100 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Choose your exam and start practicing today.
          </p>

          <div className="relative pt-2">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-9 py-4 rounded-xl shadow-lg transition-all text-base cursor-pointer hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b2246]"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Start Quiz</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
