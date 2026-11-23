import React, { useState, useEffect, useCallback } from 'react';
import { getApiUrl } from '../lib/api';

export interface TestDetailItem {
  srNo: number;
  testTitle: string;
  totalQuestions: number;
  timeDuration: string;
  online: boolean;
  onlineAttemptLeft: string;
}

interface ExamTestsListProps {
  examTitle?: string;
  userEmail?: string;
  onStartTest: (testTitle?: string) => void;
  onBackToSubscribed?: () => void;
}

export const defaultTestsList: TestDetailItem[] = [
  {
    srNo: 1,
    testTitle: "PRACTICE TEST NO. 1",
    totalQuestions: 50,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 2,
    testTitle: "PRACTICE TEST NO. 2",
    totalQuestions: 50,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 3,
    testTitle: "PRACTICE TEST NO. 3",
    totalQuestions: 50,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 4,
    testTitle: "PRACTICE TEST NO. 4",
    totalQuestions: 50,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 5,
    testTitle: "PRACTICE TEST NO. 5",
    totalQuestions: 50,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 6,
    testTitle: "IMPORTANT 'LAST 3 DAY REVISION' TEST 1",
    totalQuestions: 75,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 7,
    testTitle: "IMPORTANT 'LAST 3 DAY REVISION' TEST 2",
    totalQuestions: 75,
    timeDuration: "-",
    online: true,
    onlineAttemptLeft: "20"
  },
  {
    srNo: 8,
    testTitle: "IMPORTANT 'LAST 3 DAY REVISION' TEST 3",
    totalQuestions: 100,
    timeDuration: "120 Minutes",
    online: true,
    onlineAttemptLeft: "20"
  }
];

const getAttemptKey = (email: string, testTitle: string) => {
  const cleanEmail = email.trim().toLowerCase();
  const cleanTitle = testTitle.trim().toLowerCase().replace(/\s+/g, '_');
  return `examprep_attempts_left_${cleanEmail}_${cleanTitle}`;
};

export const ExamTestsList: React.FC<ExamTestsListProps> = ({
  examTitle = "NISM Series XII : Securities Market Foundation Mock Test",
  userEmail = "nism01@gmail.com",
  onStartTest,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [testAttempts, setTestAttempts] = useState<Record<string, number>>({});

  const loadAllAttempts = useCallback(() => {
    const attempts: Record<string, number> = {};
    defaultTestsList.forEach((item) => {
      if (item.online) {
        const key = getAttemptKey(userEmail, item.testTitle);
        const saved = localStorage.getItem(key);
        if (saved !== null) {
          attempts[item.testTitle] = parseInt(saved, 10);
        } else {
          localStorage.setItem(key, '20');
          attempts[item.testTitle] = 20;
        }
      }
    });
    setTestAttempts(attempts);
  }, [userEmail]);

  useEffect(() => {
    loadAllAttempts();
  }, [loadAllAttempts]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(defaultTestsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTests = defaultTestsList.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleStartTestClick = (testTitle: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const currentRemaining = testAttempts[testTitle] !== undefined ? testAttempts[testTitle] : 20;

    // Call onStartTest IMMEDIATELY synchronously so user enters exam view without delay
    onStartTest(testTitle);

    if (currentRemaining <= 0) {
      return;
    }

    // Update locally and persist
    const nextAttempts = Math.max(0, currentRemaining - 1);
    setTestAttempts((prev) => ({
      ...prev,
      [testTitle]: nextAttempts,
    }));
    const key = getAttemptKey(userEmail, testTitle);
    localStorage.setItem(key, String(nextAttempts));
  };

  return (
    <div className="bg-[#edf3f8] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Large white rounded container matching reference image */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-200/80 space-y-6">
          
          {/* Exam Header Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1b2246] tracking-tight leading-snug">
            {examTitle}
          </h1>

          {/* Test Table Container with Horizontal Scroll for Mobile */}
          <div className="overflow-x-auto rounded-lg border border-gray-200/90">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="bg-[#ebf4fa] border-b border-gray-200">
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 w-20 text-left">
                    Sr. No.
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left">
                    Test
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left w-36">
                    Total Questions
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left w-48">
                    Time Duration (in mins)
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left w-32">
                    Online
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm text-left w-44">
                    Online Attempt Left
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/80">
                {currentTests.map((item) => {
                  const currentRemaining = testAttempts[item.testTitle] !== undefined ? testAttempts[item.testTitle] : 20;
                  const itemRemaining = item.online ? currentRemaining : item.onlineAttemptLeft;
                  const isExhausted = item.online && currentRemaining === 0;

                  return (
                    <tr 
                      key={item.srNo} 
                      className="bg-white hover:bg-sky-50/30 transition-colors"
                    >
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-gray-800 border-r border-gray-200/80">
                        {item.srNo}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-gray-900 border-r border-gray-200/80">
                        {(item.online && !isExhausted) || item.testTitle === "IMPORTANT 'LAST DAY REVISION' TEST 1" || item.testTitle === "IMPORTANT 'LAST DAY REVISION' TEST 2" ? (
                          <button
                            type="button"
                            onClick={(e) => handleStartTestClick(item.testTitle, e)}
                            className="text-left font-medium text-gray-900 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            {item.testTitle}
                          </button>
                        ) : (
                          <span className={isExhausted ? "text-gray-500" : ""}>{item.testTitle}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-gray-800 border-r border-gray-200/80">
                        {item.totalQuestions}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-gray-800 border-r border-gray-200/80">
                        {item.timeDuration}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium border-r border-gray-200/80">
                        {item.online ? (
                          isExhausted ? (
                            <span className="text-gray-400 font-semibold cursor-not-allowed">
                              No attempts remaining
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => handleStartTestClick(item.testTitle, e)}
                              className="text-[#c52828] hover:text-red-700 font-semibold cursor-pointer hover:underline"
                            >
                              Start Test
                            </button>
                          )
                        ) : (
                          <span className="text-gray-400"></span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-gray-800">
                        {itemRemaining}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Centered Pagination matching screenshot: << 1 >> */}
          <div className="pt-6 flex items-center justify-center space-x-1.5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-bold bg-[#f4f5f7] border border-gray-200 text-gray-700 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 cursor-pointer'
              }`}
            >
              &lt;&lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-1.5 rounded text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#c52828] text-white shadow-xs'
                    : 'bg-[#f4f5f7] border border-gray-200 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-bold bg-[#f4f5f7] border border-gray-200 text-gray-700 ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 cursor-pointer'
              }`}
            >
              &gt;&gt;
            </button>
          </div>

          {/* Bottom Note */}
          <div className="pt-2 text-xs sm:text-sm text-gray-500 italic">
            Online test available for maximum of &apos;20&apos; attempts.
          </div>

        </div>
      </div>
    </div>
  );
};
