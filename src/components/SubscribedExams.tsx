import React from 'react';

export interface SubscribedExamItem {
  srNo: number;
  examTitle: string;
  subscribedOn: string;
  expiryDate: string;
  status: 'Active' | 'Expired';
}

interface SubscribedExamsProps {
  onSelectExam: (examTitle: string) => void;
  isLoggedIn?: boolean;
}

export const defaultSubscribedExams: SubscribedExamItem[] = [
  {
    srNo: 1,
    examTitle: "NISM Series XII : Securities Market Foundation Mock Test",
    subscribedOn: "01 Aug 2026",
    expiryDate: "01 Sep 2026",
    status: "Active"
  },
  {
    srNo: 2,
    examTitle: "NISM Series VII : Securities Operations and Risk Management Mock Test",
    subscribedOn: "08 Apr 2026",
    expiryDate: "19 Apr 2026",
    status: "Expired"
  },
  {
    srNo: 3,
    examTitle: "NISM Series VA : Mutual Fund Distributors Mock Test",
    subscribedOn: "18 Sep 2025",
    expiryDate: "19 Oct 2025",
    status: "Expired"
  },
  {
    srNo: 4,
    examTitle: "NISM Series I : Currency Derivatives Mock Test",
    subscribedOn: "29 Jul 2025",
    expiryDate: "29 Aug 2025",
    status: "Expired"
  },
  {
    srNo: 5,
    examTitle: "NISM Series IV : Interest Rate Derivatives Certification Mock Test",
    subscribedOn: "29 Jul 2025",
    expiryDate: "29 Aug 2025",
    status: "Expired"
  },
  {
    srNo: 6,
    examTitle: "NISM Series VIII : Equity Derivatives Mock Test",
    subscribedOn: "29 Jul 2025",
    expiryDate: "29 Aug 2025",
    status: "Expired"
  },
  {
    srNo: 7,
    examTitle: "NISM Series XVII : Retirement Adviser Mock Test",
    subscribedOn: "07 May 2025",
    expiryDate: "18 May 2025",
    status: "Expired"
  },
  {
    srNo: 8,
    examTitle: "NISM Series XVI : Commodity Derivatives Certification Mock Test",
    subscribedOn: "02 Jan 2025",
    expiryDate: "13 Jan 2025",
    status: "Expired"
  },
  {
    srNo: 9,
    examTitle: "NISM Series VA : Mutual Fund Distributors Mock Test",
    subscribedOn: "26 Dec 2024",
    expiryDate: "25 Feb 2025",
    status: "Expired"
  },
  {
    srNo: 10,
    examTitle: "NISM Series VA : Mutual Fund Distributors Mock Test",
    subscribedOn: "17 Apr 2024",
    expiryDate: "18 May 2024",
    status: "Expired"
  }
];

export const SubscribedExams: React.FC<SubscribedExamsProps> = ({
  onSelectExam,
}) => {
  return (
    <div className="bg-[#edf3f8] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Large white rounded container matching reference image */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-200/80 space-y-6">
          
          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1b2246] tracking-tight leading-snug">
            List of Exams Subscribed - Click on exam name to see the Q&As as per below
          </h1>

          {/* Table Container with Horizontal Scroll for Mobile */}
          <div className="overflow-x-auto rounded-lg border border-gray-200/90">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="bg-[#ebf4fa] border-b border-gray-200">
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 w-20 text-left">
                    Sr. No.
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left">
                    Exam ( Click on Exam name to see the Q&As )
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left w-44">
                    Subscribed On
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm border-r border-gray-200/80 text-left w-56">
                    Subscription Expiry Date
                  </th>
                  <th className="py-3.5 px-4 font-bold text-[#1b2246] text-xs sm:text-sm text-left w-28">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/80">
                {defaultSubscribedExams.map((item) => {
                  const isActive = item.status === 'Active';
                  return (
                    <tr 
                      key={item.srNo} 
                      className="bg-white hover:bg-sky-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-gray-800 border-r border-gray-200/80">
                        {item.srNo}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium border-r border-gray-200/80">
                        <button
                          onClick={() => onSelectExam(item.examTitle)}
                          className={`text-left hover:underline transition-colors cursor-pointer font-semibold ${
                            isActive ? 'text-[#c52828] hover:text-red-700' : 'text-[#1b2246] hover:text-red-600'
                          }`}
                        >
                          {item.examTitle}
                        </button>
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-normal text-gray-800 border-r border-gray-200/80 whitespace-nowrap">
                        {item.subscribedOn}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-normal text-gray-800 border-r border-gray-200/80 whitespace-nowrap">
                        {item.expiryDate}
                      </td>
                      <td className="py-3.5 px-4 text-xs sm:text-sm whitespace-nowrap">
                        {isActive ? (
                          <span className="bg-[#e3f7ed] text-[#218557] px-3 py-1 rounded-md text-xs font-semibold inline-block">
                            Active
                          </span>
                        ) : (
                          <span className="bg-[#fde8e8] text-[#c52828] px-3 py-1 rounded-md text-xs font-semibold inline-block">
                            Expired
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};
