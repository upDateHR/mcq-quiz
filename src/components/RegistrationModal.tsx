import React, { useState } from 'react';
import { Mail, Lock, X, CheckCircle } from 'lucide-react';
import { getApiUrl } from '../lib/api';

interface RegistrationModalProps {
  onClose: () => void;
  onRegistered: (name: string, email: string) => void;
  onSwitchToLogin: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose, onRegistered, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError('Please provide email and password.');
      setSuccess(false);
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const allowedAccounts = [
        { email: 'nism01@gmail.com', password: '1234nism' },
        { email: 'nism02@gmail.com', password: '1234nism' },
        { email: 'nism03@gmail.com', password: '1234nism' },
      ];

      const foundAccount = allowedAccounts.find(
        (acc) => acc.email === trimmedEmail && acc.password === trimmedPassword
      );

      if (foundAccount) {
        setError('');
        setSuccess(true);
        setIsLoading(false);

        const name = trimmedEmail.split('@')[0];
        const userData = { name, email: trimmedEmail };
        localStorage.setItem('examprep_registered_user', JSON.stringify(userData));

        setTimeout(() => {
          onRegistered(name, trimmedEmail);
        }, 1200);
      } else {
        setError('Invalid email or password. Only authorized accounts are allowed.');
        setSuccess(false);
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Registration Successful!</h3>
            <p className="text-sm text-gray-600">Redirecting to your full examination mock test...</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Exam Access
              </div>
              <h2 className="text-2xl font-extrabold text-[#1b2246] tracking-tight">Create Your Account</h2>
              <p className="text-sm text-gray-600 mt-1">
                Register to unlock the complete Currency Derivatives mock exam with all questions and explanations.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3 rounded-lg text-sm shadow-md transition-all cursor-pointer"
                >
                  {isLoading ? 'Creating Account...' : 'Register & Start Full Exam'}
                </button>
              </div>
            </form>


          </div>
        )}
      </div>
    </div>
  );
};
