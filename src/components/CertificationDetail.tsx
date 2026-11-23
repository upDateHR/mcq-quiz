import React from 'react';
import { Award, Play, ShoppingCart, CheckCircle2, BookOpen, Clock, FileText, Calendar, ArrowLeft, ShieldCheck } from 'lucide-react';

interface CertificationDetailProps {
  examTitle: string;
  onFreeDemo: () => void;
  onBuyNow: () => void;
  onBackToHome: () => void;
}

export const CertificationDetail: React.FC<CertificationDetailProps> = ({
  examTitle,
  onFreeDemo,
  onBuyNow,
  onBackToHome,
}) => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation / Back Button */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center space-x-2 text-sm font-bold text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Exams</span>
          </button>
        </div>

        {/* Main Certification Header Card */}
        <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6 sm:p-10 space-y-8">
          {/* Header Title Section */}
          <div className="space-y-4 border-b border-gray-100 pb-8">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Certification Series</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1b2246] tracking-tight leading-tight">
              {examTitle}
            </h1>

            <p className="text-gray-600 text-sm sm:text-base sm:leading-relaxed max-w-3xl">
              Comprehensive mock test series designed to help you clear the Currency Derivatives exam with confidence. Features practice questions, instant feedback, and detailed explanations.
            </p>
          </div>

          {/* Exam Information Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#1b2246] flex items-center space-x-2">
              <FileText className="w-5 h-5 text-red-600" />
              <span>Exam Information</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl border border-gray-100/80">
                <div className="flex items-center space-x-1.5 text-gray-500 mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Total Questions</span>
                </div>
                <span className="text-gray-900 font-extrabold text-base sm:text-xl block">100+ Q&A</span>
              </div>

              <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl border border-gray-100/80">
                <div className="flex items-center space-x-1.5 text-gray-500 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Passing Marks</span>
                </div>
                <span className="text-gray-900 font-extrabold text-base sm:text-xl block">60%</span>
              </div>

              <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl border border-gray-100/80">
                <div className="flex items-center space-x-1.5 text-gray-500 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Duration</span>
                </div>
                <span className="text-gray-900 font-extrabold text-base sm:text-xl block">120 Minutes</span>
              </div>

              <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl border border-gray-100/80">
                <div className="flex items-center space-x-1.5 text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Validity</span>
                </div>
                <span className="text-gray-900 font-extrabold text-base sm:text-xl block">6 Months</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center mb-4">
              Select Practice Option
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Free Demo Button */}
              <button
                onClick={onFreeDemo}
                className="w-full sm:w-auto min-w-[220px] flex items-center justify-center space-x-2.5 bg-white hover:bg-red-50/50 text-red-600 border-2 border-red-600 font-bold px-8 py-3.5 rounded-xl shadow-xs hover:shadow-md transition-all text-base cursor-pointer"
              >
                <Play className="w-5 h-5 fill-red-600" />
                <span>Free Demo</span>
              </button>

              {/* Buy Now Button */}
              <button
                onClick={onBuyNow}
                className="w-full sm:w-auto min-w-[220px] flex items-center justify-center space-x-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-base cursor-pointer transform hover:scale-[1.01]"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy Now</span>
              </button>
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-3">
              No registration required for Free Demo • Instant access upon registration for full set
            </p>
          </div>
        </div>

        {/* Features & Benefits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Instant Feedback</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get immediate correctness status and detailed step-by-step explanations as soon as you select an answer.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Exam Standard Q&A</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Questions crafted meticulously following the latest curriculum and weightage guidelines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">6 Months Access</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Unlimited practice test attempts with full answers and explanations available 24/7 on any device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
