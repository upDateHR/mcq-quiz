/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { CertificationDetail } from './components/CertificationDetail';
import { ExamContent } from './components/ExamContent';
import { SubscribedExams } from './components/SubscribedExams';
import { ExamTestsList } from './components/ExamTestsList';
import { RegistrationModal } from './components/RegistrationModal';
import { LoginModal } from './components/LoginModal';
import { UserManagementModal } from './components/UserManagementModal';
import { Footer } from './components/Footer';
import { LegalPage, LegalPageType } from './components/LegalPage';

type View = 'home' | 'subscribed' | 'exam-tests' | 'detail' | 'demo' | 'full' | LegalPageType;

// Legal pages have their own URLs (/terms, /privacy) so they can be linked to directly
const legalPaths: Record<LegalPageType, string> = { terms: '/terms', privacy: '/privacy' };

const getLegalPageFromPath = (path: string): LegalPageType | null => {
  const clean = path.replace(/\/+$/, '').toLowerCase();
  if (clean === legalPaths.terms) return 'terms';
  if (clean === legalPaths.privacy) return 'privacy';
  return null;
};

export default function App() {
  const [currentView, setCurrentView] = useState<View>(
    () => getLegalPageFromPath(window.location.pathname) ?? 'home'
  );

  // Keep the address bar in sync with the legal pages
  useEffect(() => {
    const currentPage = getLegalPageFromPath(window.location.pathname);
    if (currentView === 'terms' || currentView === 'privacy') {
      if (currentPage !== currentView) {
        window.history.pushState(null, '', legalPaths[currentView]);
      }
    } else if (currentPage) {
      window.history.pushState(null, '', '/');
    }
  }, [currentView]);

  // Browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getLegalPageFromPath(window.location.pathname) ?? 'home');
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openLegalPage = (page: LegalPageType) => {
    setCurrentView(page);
    window.scrollTo({ top: 0 });
  };
  const [selectedExamTitle, setSelectedExamTitle] = useState<string>(
    'NISM Series XII : Securities Market Foundation Mock Test'
  );
  const [selectedTestTitle, setSelectedTestTitle] = useState<string>('PRACTICE TEST NO. 1');
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [userManagementOpen, setUserManagementOpen] = useState(false);

  // Session state with localStorage persistence
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('examprep_logged_in') === 'true';
  });

  const [userEmail, setUserEmail] = useState<string>(() => {
    return localStorage.getItem('examprep_user_email') || 'nism01@gmail.com';
  });

  const [userName, setUserName] = useState<string>(() => {
    const savedName = localStorage.getItem('examprep_user_name');
    if (savedName && savedName !== 'My Account' && savedName !== 'QQ') return savedName;
    const savedEmail = localStorage.getItem('examprep_user_email') || 'nism01@gmail.com';
    return savedEmail.includes('@') ? savedEmail.split('@')[0] : savedEmail;
  });

  const handleStartQuiz = () => {
    setSelectedExamTitle('NISM Series XII : Securities Market Foundation Mock Test');
    if (isLoggedIn) {
      setCurrentView('exam-tests');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleSelectExam = (examTitle: string) => {
    setSelectedExamTitle(examTitle);
    if (isLoggedIn) {
      setCurrentView('exam-tests');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleFreeDemo = () => {
    setCurrentView('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyNow = () => {
    if (isLoggedIn) {
      setCurrentView('exam-tests');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLoginModalOpen(true);
    }
  };

  const handleRegistered = (name: string, email: string) => {
    setIsLoggedIn(true);
    const emailTrimmed = email ? email.trim() : 'nism01@gmail.com';
    const emailPrefix = emailTrimmed.includes('@') ? emailTrimmed.split('@')[0] : emailTrimmed;
    const finalName = (name && name !== 'My Account' && name !== 'QQ') ? name : emailPrefix;

    setUserName(finalName);
    setUserEmail(emailTrimmed);
    localStorage.setItem('examprep_logged_in', 'true');
    localStorage.setItem('examprep_user_name', finalName);
    localStorage.setItem('examprep_user_email', emailTrimmed);
    setRegistrationOpen(false);
    setSelectedExamTitle('NISM Series XII : Securities Market Foundation Mock Test');
    setCurrentView('exam-tests');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoggedIn = (name: string, email: string) => {
    setIsLoggedIn(true);
    const emailTrimmed = email ? email.trim() : 'nism01@gmail.com';
    const emailPrefix = emailTrimmed.includes('@') ? emailTrimmed.split('@')[0] : emailTrimmed;
    const finalName = (name && name !== 'My Account' && name !== 'QQ') ? name : emailPrefix;

    setUserName(finalName);
    setUserEmail(emailTrimmed);
    localStorage.setItem('examprep_logged_in', 'true');
    localStorage.setItem('examprep_user_name', finalName);
    localStorage.setItem('examprep_user_email', emailTrimmed);
    setLoginModalOpen(false);
    setSelectedExamTitle('NISM Series XII : Securities Market Foundation Mock Test');
    setCurrentView('exam-tests');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('examprep_logged_in');
    localStorage.removeItem('examprep_user_name');
    localStorage.removeItem('examprep_user_email');
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Header
        isLoggedIn={isLoggedIn}
        userName={userName}
        onRegisterClick={() => setLoginModalOpen(true)}
        onHomeClick={() => setCurrentView('home')}
        onSubscribedClick={handleStartQuiz}
        onLogoutClick={handleLogout}
      />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <Home
            onSelectExam={handleSelectExam}
            onStartQuiz={handleStartQuiz}
            onFreeDemo={handleFreeDemo}
            onBuyNow={handleBuyNow}
          />
        )}

        {currentView === 'subscribed' && (
          <SubscribedExams
            onSelectExam={handleSelectExam}
            isLoggedIn={isLoggedIn}
          />
        )}

        {currentView === 'exam-tests' && (
          <ExamTestsList
            examTitle={selectedExamTitle}
            userEmail={userEmail}
            onStartTest={(testTitle) => {
              setSelectedTestTitle(testTitle || 'PRACTICE TEST NO. 1');
              setCurrentView('full');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'detail' && (
          <CertificationDetail
            examTitle={selectedExamTitle}
            onFreeDemo={handleFreeDemo}
            onBuyNow={handleBuyNow}
            onBackToHome={() => setCurrentView('subscribed')}
          />
        )}

        {currentView === 'demo' && (
          <ExamContent
            key={`demo-${selectedTestTitle}`}
            mode="demo"
            selectedTestTitle={selectedTestTitle}
            onBackToHome={() => setCurrentView('exam-tests')}
          />
        )}

        {currentView === 'full' && (
          <ExamContent
            key={`full-${selectedTestTitle}`}
            mode="full"
            selectedTestTitle={selectedTestTitle}
            onBackToHome={() => setCurrentView('exam-tests')}
          />
        )}

        {(currentView === 'terms' || currentView === 'privacy') && (
          <LegalPage
            page={currentView}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0 });
            }}
            onSwitchPage={openLegalPage}
          />
        )}
      </main>

      <Footer
        onOpenUserManagement={() => setUserManagementOpen(true)}
        onOpenLegalPage={openLegalPage}
      />

      {/* Registration Modal */}
      {registrationOpen && (
        <RegistrationModal
          onClose={() => setRegistrationOpen(false)}
          onRegistered={handleRegistered}
          onSwitchToLogin={() => {
            setRegistrationOpen(false);
            setLoginModalOpen(true);
          }}
        />
      )}

      {/* Login Modal */}
      {loginModalOpen && (
        <LoginModal
          onClose={() => setLoginModalOpen(false)}
          onLoggedIn={handleLoggedIn}
          onSwitchToRegister={() => {
            setLoginModalOpen(false);
            setRegistrationOpen(true);
          }}
        />
      )}

      {/* User Management System Modal */}
      {userManagementOpen && (
        <UserManagementModal onClose={() => setUserManagementOpen(false)} />
      )}
    </div>
  );
}
