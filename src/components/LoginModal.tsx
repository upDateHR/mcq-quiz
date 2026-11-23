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
        { email: "nism01@gmail.com", password: "1234nism", name: "nism01" },
        { email: "nism02@gmail.com", password: "1234nism", name: "nism02" },
        { email: "nism03@gmail.com", password: "1234nism", name: "nism03" },
        { email: "nism04@gmail.com", password: "1234nism", name: "nism04" },
        { email: "nism05@gmail.com", password: "1234nism", name: "nism05" },
        { email: "nism06@gmail.com", password: "1234nism", name: "nism06" },
        { email: "nism07@gmail.com", password: "1234nism", name: "nism07" },
        { email: "nism08@gmail.com", password: "1234nism", name: "nism08" },
        { email: "nism09@gmail.com", password: "1234nism", name: "nism09" },
        { email: "nism10@gmail.com", password: "1234nism", name: "nism10" },
        { email: "nism11@gmail.com", password: "1234nism", name: "nism11" },
        { email: "nism12@gmail.com", password: "1234nism", name: "nism12" },
        { email: "nism13@gmail.com", password: "1234nism", name: "nism13" },
        { email: "nism14@gmail.com", password: "1234nism", name: "nism14" },
        { email: "nism15@gmail.com", password: "1234nism", name: "nism15" },
        { email: "nism16@gmail.com", password: "1234nism", name: "nism16" },
        { email: "nism17@gmail.com", password: "1234nism", name: "nism17" },
        { email: "nism18@gmail.com", password: "1234nism", name: "nism18" },
        { email: "nism19@gmail.com", password: "1234nism", name: "nism19" },
        { email: "nism20@gmail.com", password: "1234nism", name: "nism20" },
        { email: "nism21@gmail.com", password: "1234nism", name: "nism21" },
        { email: "nism22@gmail.com", password: "1234nism", name: "nism22" },
        { email: "nism23@gmail.com", password: "1234nism", name: "nism23" },
        { email: "nism24@gmail.com", password: "1234nism", name: "nism24" },
        { email: "nism25@gmail.com", password: "1234nism", name: "nism25" },
        { email: "nism26@gmail.com", password: "1234nism", name: "nism26" },
        { email: "nism27@gmail.com", password: "1234nism", name: "nism27" },
        { email: "nism28@gmail.com", password: "1234nism", name: "nism28" },
        { email: "nism29@gmail.com", password: "1234nism", name: "nism29" },
        { email: "nism30@gmail.com", password: "1234nism", name: "nism30" },
        { email: "nism31@gmail.com", password: "1234nism", name: "nism31" },
        { email: "nism32@gmail.com", password: "1234nism", name: "nism32" },
        { email: "nism33@gmail.com", password: "1234nism", name: "nism33" },
        { email: "nism34@gmail.com", password: "1234nism", name: "nism34" },
        { email: "nism35@gmail.com", password: "1234nism", name: "nism35" },
        { email: "nism36@gmail.com", password: "1234nism", name: "nism36" },
        { email: "nism37@gmail.com", password: "1234nism", name: "nism37" },
        { email: "nism38@gmail.com", password: "1234nism", name: "nism38" },
        { email: "nism39@gmail.com", password: "1234nism", name: "nism39" },
        { email: "nism40@gmail.com", password: "1234nism", name: "nism40" },
        { email: "nism41@gmail.com", password: "1234nism", name: "nism41" },
        { email: "nism42@gmail.com", password: "1234nism", name: "nism42" },
        { email: "nism43@gmail.com", password: "1234nism", name: "nism43" },
        { email: "nism44@gmail.com", password: "1234nism", name: "nism44" },
        { email: "nism45@gmail.com", password: "1234nism", name: "nism45" },
        { email: "nism46@gmail.com", password: "1234nism", name: "nism46" },
        { email: "nism47@gmail.com", password: "1234nism", name: "nism47" },
        { email: "nism48@gmail.com", password: "1234nism", name: "nism48" },
        { email: "nism49@gmail.com", password: "1234nism", name: "nism49" },
        { email: "nism50@gmail.com", password: "1234nism", name: "nism50" },
        { email: "nism51@gmail.com", password: "1234nism", name: "nism51" },
        { email: "nism52@gmail.com", password: "1234nism", name: "nism52" },
        { email: "nism53@gmail.com", password: "1234nism", name: "nism53" },
        { email: "nism54@gmail.com", password: "1234nism", name: "nism54" },
        { email: "nism55@gmail.com", password: "1234nism", name: "nism55" },
        { email: "nism56@gmail.com", password: "1234nism", name: "nism56" },
        { email: "nism57@gmail.com", password: "1234nism", name: "nism57" },
        { email: "nism58@gmail.com", password: "1234nism", name: "nism58" },
        { email: "nism59@gmail.com", password: "1234nism", name: "nism59" },
        { email: "nism60@gmail.com", password: "1234nism", name: "nism60" },
        { email: "nism61@gmail.com", password: "1234nism", name: "nism61" },
        { email: "nism62@gmail.com", password: "1234nism", name: "nism62" },
        { email: "nism63@gmail.com", password: "1234nism", name: "nism63" },
        { email: "nism64@gmail.com", password: "1234nism", name: "nism64" },
        { email: "nism65@gmail.com", password: "1234nism", name: "nism65" },
        { email: "nism66@gmail.com", password: "1234nism", name: "nism66" },
        { email: "nism67@gmail.com", password: "1234nism", name: "nism67" },
        { email: "nism68@gmail.com", password: "1234nism", name: "nism68" },
        { email: "nism69@gmail.com", password: "1234nism", name: "nism69" },
        { email: "nism70@gmail.com", password: "1234nism", name: "nism70" },
        { email: "nism71@gmail.com", password: "1234nism", name: "nism71" },
        { email: "nism72@gmail.com", password: "1234nism", name: "nism72" },
        { email: "nism73@gmail.com", password: "1234nism", name: "nism73" },
        { email: "nism74@gmail.com", password: "1234nism", name: "nism74" },
        { email: "nism75@gmail.com", password: "1234nism", name: "nism75" },
        { email: "nism76@gmail.com", password: "1234nism", name: "nism76" },
        { email: "nism77@gmail.com", password: "1234nism", name: "nism77" },
        { email: "nism78@gmail.com", password: "1234nism", name: "nism78" },
        { email: "nism79@gmail.com", password: "1234nism", name: "nism79" },
        { email: "nism80@gmail.com", password: "1234nism", name: "nism80" },
        { email: "nism81@gmail.com", password: "1234nism", name: "nism81" },
        { email: "nism82@gmail.com", password: "1234nism", name: "nism82" },
        { email: "nism83@gmail.com", password: "1234nism", name: "nism83" },
        { email: "nism84@gmail.com", password: "1234nism", name: "nism84" },
        { email: "nism85@gmail.com", password: "1234nism", name: "nism85" },
        { email: "nism86@gmail.com", password: "1234nism", name: "nism86" },
        { email: "nism87@gmail.com", password: "1234nism", name: "nism87" },
        { email: "nism88@gmail.com", password: "1234nism", name: "nism88" },
        { email: "nism89@gmail.com", password: "1234nism", name: "nism89" },
        { email: "nism90@gmail.com", password: "1234nism", name: "nism90" },
        { email: "nism91@gmail.com", password: "1234nism", name: "nism91" },
        { email: "nism92@gmail.com", password: "1234nism", name: "nism92" },
        { email: "nism93@gmail.com", password: "1234nism", name: "nism93" },
        { email: "nism94@gmail.com", password: "1234nism", name: "nism94" },
        { email: "nism95@gmail.com", password: "1234nism", name: "nism95" },
        { email: "nism96@gmail.com", password: "1234nism", name: "nism96" },
        { email: "nism97@gmail.com", password: "1234nism", name: "nism97" },
        { email: "nism98@gmail.com", password: "1234nism", name: "nism98" },
        { email: "nism99@gmail.com", password: "1234nism", name: "nism99" },
        { email: "nism100@gmail.com", password: "1234nism", name: "nism100" },
        { email: "nism101@gmail.com", password: "1234nism", name: "nism101" },
        { email: "nism102@gmail.com", password: "1234nism", name: "nism102" },
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
