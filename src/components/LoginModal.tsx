import React, { useState } from "react";
import { Mail, Lock, X, CheckCircle } from "lucide-react";
import { getApiUrl } from "../lib/api";

interface LoginModalProps {
  onClose: () => void;
  onLoggedIn: (name: string, email: string) => void;
  onSwitchToRegister: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onLoggedIn,
  onSwitchToRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Invalid email or password.");
      setSuccess(false);
      return;
    }

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const allowedAccounts = [
        { email: "chanda@gmail.com", password: "1234nism", name: "Chanda" },
        { email: "roshan@gmail.com", password: "1234nism", name: "Roshan" },
        { email: "karishma@gmail.com", password: "1234nism", name: "Karishma" },
        { email: "shruti@gmail.com", password: "1234nism", name: "Shruti" },
        { email: "tajendra@gmail.com", password: "1234nism", name: "Tajendra" },
        { email: "anisiya@gmail.com", password: "1234nism", name: "Anisiya" },
        { email: "deepika@gmail.com", password: "1234nism", name: "Deepika" },
        { email: "kalpana@gmail.com", password: "1234nism", name: "Kalpana" },
        {
          email: "mukeshkumar@gmail.com",
          password: "1234nism",
          name: "Mukesh Kumar",
        },
        {
          email: "prachinayak@gmail.com",
          password: "1234nism",
          name: "Prachi Nayak",
        },
        { email: "pinky@gmail.com", password: "1234nism", name: "Pinky" },
        { email: "puranlal@gmail.com", password: "1234nism", name: "Puranlal" },
        {
          email: "shushmita@gmail.com",
          password: "1234nism",
          name: "Shushmita",
        },
        {
          email: "thameshwarisuryavanshi@gmail.com",
          password: "1234nism",
          name: "Thameshwari Suryavanshi",
        },
        { email: "monika@gmail.com", password: "1234nism", name: "Monika" },
        {
          email: "geetanjali@gmail.com",
          password: "1234nism",
          name: "Geetanjali",
        },
        {
          email: "yogendranag@gmail.com",
          password: "1234nism",
          name: "Yogendra Nag",
        },
        { email: "jailal@gmail.com", password: "1234nism", name: "Jailal" },
        { email: "dipankar@gmail.com", password: "1234nism", name: "Dipankar" },
        {
          email: "shubhamkumar@gmail.com",
          password: "1234nism",
          name: "Shubham kumar",
        },
        {
          email: "nareshkumar@gmail.com",
          password: "1234nism",
          name: "Naresh kumar",
        },
        {
          email: "sinakumar@gmail.com",
          password: "1234nism",
          name: "Sina kumar",
        },
        { email: "shreya@gmail.com", password: "1234nism", name: "Shreya" },
        { email: "ashvan@gmail.com", password: "1234nism", name: "Ashvan" },
        { email: "mukesh@gmail.com", password: "1234nism", name: "Mukesh" },
        { email: "arun@gmail.com", password: "1234nism", name: "Arun" },
        { email: "poonam@gmail.com", password: "1234nism", name: "Poonam" },

        { email: "nism01@gmail.com", password: "1234nism", name: "nism01" },
        { email: "nism02@gmail.com", password: "1234nism", name: "nism02" },
        { email: "nism03@gmail.com", password: "1234nism", name: "nism03" },
      ];

      const foundAccount = allowedAccounts.find(
        (acc) => acc.email === trimmedEmail && acc.password === trimmedPassword
      );

      if (foundAccount) {
        setError("");
        setSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          onLoggedIn(trimmedEmail.split("@")[0], trimmedEmail);
        }, 1000);
      } else {
        setError("Invalid email or password.");
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
          accessibility-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Login Successful!
            </h3>
            <p className="text-sm text-gray-600">Welcome back...</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Member Access
              </div>
              <h2 className="text-2xl font-extrabold text-[#1b2246] tracking-tight">
                Login to Your Account
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Enter your credentials to access your certification mock exams.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Email Address
                </label>
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
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Password
                </label>
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
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
