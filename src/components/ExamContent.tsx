import React, { useState } from 'react';
import { Question } from '../types';
import { initialQuestions } from '../data/questions';
import { lastDayRevision2Questions } from '../data/lastDayRevision2';
import { lastDayRevision1Questions } from '../data/lastDayRevision1';
import { practiceTest6Questions } from '../data/practiceTest6';
import { practiceTest5Questions } from '../data/practiceTest5';
import { practiceTest4Questions } from '../data/practiceTest4';
import { practiceTest3Questions } from '../data/practiceTest3';
import { practiceTest2Questions } from '../data/practiceTest2';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ExamContentProps {
  mode: 'demo' | 'full';
  selectedTestTitle?: string;
  onBackToHome: () => void;
}

export const ExamContent: React.FC<ExamContentProps> = ({ mode, selectedTestTitle = '', onBackToHome }) => {
  // Select the appropriate source questions array based on the selected test title
  let sourceQuestions = initialQuestions;
  if (
    selectedTestTitle === "IMPORTANT 'LAST 3 DAY REVISION' TEST 3" ||
    selectedTestTitle === "IMPORTANT 'LAST DAY REVISION' TEST 2"
  ) {
    sourceQuestions = lastDayRevision2Questions;
  } else if (
    selectedTestTitle === "IMPORTANT 'LAST 3 DAY REVISION' TEST 2" ||
    selectedTestTitle === "IMPORTANT 'LAST DAY REVISION' TEST 1"
  ) {
    sourceQuestions = lastDayRevision1Questions;
  } else if (
    selectedTestTitle === "IMPORTANT 'LAST 3 DAY REVISION' TEST 1" ||
    selectedTestTitle === "PRACTICE TEST NO. 6"
  ) {
    sourceQuestions = practiceTest6Questions;
  } else if (selectedTestTitle === "PRACTICE TEST NO. 5") {
    sourceQuestions = practiceTest5Questions;
  } else if (selectedTestTitle === "PRACTICE TEST NO. 4") {
    sourceQuestions = practiceTest4Questions;
  } else if (selectedTestTitle === "PRACTICE TEST NO. 3") {
    sourceQuestions = practiceTest3Questions;
  } else if (selectedTestTitle === "PRACTICE TEST NO. 2") {
    sourceQuestions = practiceTest2Questions;
  }

  // If demo mode, show first 5 demo questions. If full mode, show all questions.
  const activeQuestionsList = mode === 'demo' ? sourceQuestions.slice(0, 5) : sourceQuestions;
  
  const [questions, setQuestions] = useState<Question[]>(activeQuestionsList);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return; // Lock options after quiz submission

    setQuestions(prev =>
      prev.map(q => {
        if (q.id === questionId) {
          // Lock options once question has been answered
          if (q.userAnswer !== undefined) return q;
          const isCorrect = optionIndex === q.correctAnswer;
          return {
            ...q,
            userAnswer: optionIndex,
            isCorrect
          };
        }
        return q;
      })
    );
  };

  // Find questions stats
  const totalQuestions = questions.length;
  const correctCount = questions.filter(q => q.userAnswer !== undefined && q.isCorrect).length;
  const wrongCount = questions.filter(q => q.userAnswer !== undefined && !q.isCorrect).length;
  const unattemptedQuestions = questions.filter(q => q.userAnswer === undefined);
  const unattemptedCount = unattemptedQuestions.length;

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetExam = () => {
    setQuestions(activeQuestionsList.map(q => ({ ...q, userAnswer: undefined, isCorrect: undefined })));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Top bar with back to home & mode badge */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-1.5 text-sm font-bold text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Exam Details</span>
        </button>

        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${mode === 'demo' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
          {mode === 'demo' ? `Free Demo Exam (${totalQuestions} Questions)` : `Full Certified Exam (${totalQuestions} Questions)`}
        </div>
      </div>

      <div className="h-6 sm:h-10 bg-[#f8f9fa]"></div>

      {/* Main question container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-10 sm:py-14 shadow-xs border border-gray-100 rounded-2xl">
        
        {/* Score summary banner after submission */}
        {submitted && (
          <div className="mb-10 p-6 bg-slate-50 border border-gray-200 rounded-2xl text-center text-[#1b2246] space-y-3 shadow-xs animate-in fade-in duration-300">
            <div className="inline-flex items-center space-x-2 text-green-700 bg-green-100/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Quiz Result Summary</span>
            </div>

            <p className="text-lg sm:text-xl font-extrabold text-[#1b2246] leading-relaxed">
              Out of {totalQuestions} questions, {correctCount} correct, {wrongCount} wrong and {unattemptedCount} unattempted.
            </p>
          </div>
        )}

        <div className="space-y-8">
          {questions.map((q) => {
            const hasAnswered = q.userAnswer !== undefined;
            const isCorrect = q.isCorrect;

            return (
              <div 
                key={q.id} 
                id={`question-${q.id}`}
                className="p-5 rounded-2xl border border-gray-200 bg-white"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <span className="font-extrabold text-[#1b2246] text-sm sm:text-base min-w-[36px]">
                      Q {q.id}.
                    </span>
                    <p className="text-gray-900 text-sm sm:text-base font-semibold leading-relaxed pt-0.5">
                      {q.question}
                    </p>
                  </div>
                </div>

                 {/* Options */}
                <div className="ml-8 sm:ml-10 space-y-2.5 mb-4">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = q.userAnswer === optIdx;
                    const isCorrectOpt = q.correctAnswer === optIdx;

                    let optionStyle = "border-transparent hover:bg-gray-50 text-gray-800";

                    if (isSelected) {
                      optionStyle = "bg-blue-50/80 border-blue-300 font-bold text-gray-900";
                    }

                    return (
                      <label
                        key={optIdx}
                        className={`flex items-start space-x-3 py-2 px-3 rounded-lg transition-colors border ${optionStyle} ${
                          hasAnswered || submitted ? 'cursor-default pointer-events-none' : 'cursor-pointer'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          checked={isSelected}
                          disabled={hasAnswered || submitted}
                          onChange={() => handleOptionSelect(q.id, optIdx)}
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className={`text-sm sm:text-base ${isSelected ? 'font-bold' : 'text-gray-800'}`}>
                          {opt}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {/* Answer status & Explanation block - SHOWN IMMEDIATELY WHEN ANSWERED OR AFTER SUBMIT */}
                {(hasAnswered || submitted) && (
                  <div className="ml-8 sm:ml-10 space-y-3 pt-2 animate-in fade-in duration-200 bg-gray-50/90 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        {!hasAnswered ? (
                          <div className="flex items-center space-x-1.5 text-amber-600 font-bold text-sm">
                            <span>-</span>
                            <span>UNATTEMPTED</span>
                          </div>
                        ) : isCorrect ? (
                          <div className="flex items-center space-x-1.5 text-green-700 font-extrabold text-sm tracking-wide">
                            <span>✓ CORRECT ANSWER</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1.5 text-red-600 font-extrabold text-sm tracking-wide">
                            <span>✕ WRONG ANSWER</span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        Quick Answer
                      </span>
                    </div>

                    <div className="text-sm space-y-1">
                      <p className="text-gray-800">
                        <span className="font-extrabold text-gray-900 tracking-wide">CORRECT ANSWER: </span>
                        <span className="font-bold text-green-700">{q.options[q.correctAnswer]}</span>
                      </p>
                    </div>

                    {q.explanation && (
                      <div className="text-sm pt-2 border-t border-gray-200/80">
                        <span className="font-extrabold text-gray-900 block mb-1">Explanation:</span>
                        <div className="text-[#0000ff] font-normal leading-relaxed whitespace-pre-line space-y-2">
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Submit Confirmation & Result Summary Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-100 text-center space-y-6">
          {submitted ? (
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="p-6 bg-slate-50 border border-gray-200 rounded-2xl text-center text-[#1b2246] space-y-2 shadow-xs">
                <div className="inline-flex items-center space-x-2 text-green-700 bg-green-100/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Quiz Result Summary</span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-[#1b2246] leading-relaxed">
                  Out of {totalQuestions} questions, {correctCount} correct, {wrongCount} wrong and {unattemptedCount} unattempted.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBackToHome}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base cursor-pointer transform hover:scale-[1.01]"
                >
                  Back to Exam Details
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base cursor-pointer transform hover:scale-[1.01]"
                >
                  Submit Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

