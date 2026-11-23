import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
  onRegisterClick: () => void;
  onHomeClick: () => void;
  onSubscribedClick?: () => void;
  onLogoutClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  userName = "nism01",
  onRegisterClick,
  onHomeClick,
  onSubscribedClick,
  onLogoutClick,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const displayName = (userName && userName.includes('@') ? userName.split('@')[0] : userName) || "nism01";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={onHomeClick}
          aria-label="Exam Prep - Home"
          className="cursor-pointer select-none rounded-lg leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          <span className="text-2xl sm:text-3xl font-black tracking-tight">
            <span className="text-[#1b2246]">Exam</span>
            <span className="text-red-600 ml-1.5">Prep</span>
          </span>
        </button>

        {/* Right side auth buttons */}
        <div className="relative" ref={dropdownRef}>
          {isLoggedIn ? (
            <div>
              {/* Account Pill Button */}
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-2 text-sm font-bold text-[#1b2246] bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full cursor-pointer transition-colors border border-gray-200/80 focus:outline-none"
              >
                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <span>{displayName}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {/* User Header Info */}
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center space-x-3 bg-gray-50/60 rounded-t-2xl">
                    <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm shrink-0 border border-red-200">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Account</p>
                      <p className="text-sm font-bold text-[#1b2246] truncate">{displayName}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-1">
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        if (onLogoutClick) onLogoutClick();
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 flex items-center space-x-2.5 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onRegisterClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

