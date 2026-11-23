import React from 'react';

interface FeedbackTabProps {
  onClick?: () => void;
}

export const FeedbackTab: React.FC<FeedbackTabProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#e53935] hover:bg-red-700 text-white px-2.5 py-3.5 rounded-l shadow-lg cursor-pointer transition-all flex items-center justify-center font-bold tracking-wider text-xs uppercase"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Feedback
    </div>
  );
};
