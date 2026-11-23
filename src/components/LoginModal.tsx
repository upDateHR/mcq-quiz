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
        { email: "updt01@gmail.com", password: "1234updt", name: "updt01" },
        { email: "updt02@gmail.com", password: "1234updt", name: "updt02" },
        { email: "updt03@gmail.com", password: "1234updt", name: "updt03" },
        { email: "updt04@gmail.com", password: "1234updt", name: "updt04" },
        { email: "updt05@gmail.com", password: "1234updt", name: "updt05" },
        { email: "updt06@gmail.com", password: "1234updt", name: "updt06" },
        { email: "updt07@gmail.com", password: "1234updt", name: "updt07" },
        { email: "updt08@gmail.com", password: "1234updt", name: "updt08" },
        { email: "updt09@gmail.com", password: "1234updt", name: "updt09" },
        { email: "updt10@gmail.com", password: "1234updt", name: "updt10" },
        { email: "updt11@gmail.com", password: "1234updt", name: "updt11" },
        { email: "updt12@gmail.com", password: "1234updt", name: "updt12" },
        { email: "updt13@gmail.com", password: "1234updt", name: "updt13" },
        { email: "updt14@gmail.com", password: "1234updt", name: "updt14" },
        { email: "updt15@gmail.com", password: "1234updt", name: "updt15" },
        { email: "updt16@gmail.com", password: "1234updt", name: "updt16" },
        { email: "updt17@gmail.com", password: "1234updt", name: "updt17" },
        { email: "updt18@gmail.com", password: "1234updt", name: "updt18" },
        { email: "updt19@gmail.com", password: "1234updt", name: "updt19" },
        { email: "updt20@gmail.com", password: "1234updt", name: "updt20" },
        { email: "updt21@gmail.com", password: "1234updt", name: "updt21" },
        { email: "updt22@gmail.com", password: "1234updt", name: "updt22" },
        { email: "updt23@gmail.com", password: "1234updt", name: "updt23" },
        { email: "updt24@gmail.com", password: "1234updt", name: "updt24" },
        { email: "updt25@gmail.com", password: "1234updt", name: "updt25" },
        { email: "updt26@gmail.com", password: "1234updt", name: "updt26" },
        { email: "updt27@gmail.com", password: "1234updt", name: "updt27" },
        { email: "updt28@gmail.com", password: "1234updt", name: "updt28" },
        { email: "updt29@gmail.com", password: "1234updt", name: "updt29" },
        { email: "updt30@gmail.com", password: "1234updt", name: "updt30" },
        { email: "updt31@gmail.com", password: "1234updt", name: "updt31" },
        { email: "updt32@gmail.com", password: "1234updt", name: "updt32" },
        { email: "updt33@gmail.com", password: "1234updt", name: "updt33" },
        { email: "updt34@gmail.com", password: "1234updt", name: "updt34" },
        { email: "updt35@gmail.com", password: "1234updt", name: "updt35" },
        { email: "updt36@gmail.com", password: "1234updt", name: "updt36" },
        { email: "updt37@gmail.com", password: "1234updt", name: "updt37" },
        { email: "updt38@gmail.com", password: "1234updt", name: "updt38" },
        { email: "updt39@gmail.com", password: "1234updt", name: "updt39" },
        { email: "updt40@gmail.com", password: "1234updt", name: "updt40" },
        { email: "updt41@gmail.com", password: "1234updt", name: "updt41" },
        { email: "updt42@gmail.com", password: "1234updt", name: "updt42" },
        { email: "updt43@gmail.com", password: "1234updt", name: "updt43" },
        { email: "updt44@gmail.com", password: "1234updt", name: "updt44" },
        { email: "updt45@gmail.com", password: "1234updt", name: "updt45" },
        { email: "updt46@gmail.com", password: "1234updt", name: "updt46" },
        { email: "updt47@gmail.com", password: "1234updt", name: "updt47" },
        { email: "updt48@gmail.com", password: "1234updt", name: "updt48" },
        { email: "updt49@gmail.com", password: "1234updt", name: "updt49" },
        { email: "updt50@gmail.com", password: "1234updt", name: "updt50" },
        { email: "updt51@gmail.com", password: "1234updt", name: "updt51" },
        { email: "updt52@gmail.com", password: "1234updt", name: "updt52" },
        { email: "updt53@gmail.com", password: "1234updt", name: "updt53" },
        { email: "updt54@gmail.com", password: "1234updt", name: "updt54" },
        { email: "updt55@gmail.com", password: "1234updt", name: "updt55" },
        { email: "updt56@gmail.com", password: "1234updt", name: "updt56" },
        { email: "updt57@gmail.com", password: "1234updt", name: "updt57" },
        { email: "updt58@gmail.com", password: "1234updt", name: "updt58" },
        { email: "updt59@gmail.com", password: "1234updt", name: "updt59" },
        { email: "updt60@gmail.com", password: "1234updt", name: "updt60" },
        { email: "updt61@gmail.com", password: "1234updt", name: "updt61" },
        { email: "updt62@gmail.com", password: "1234updt", name: "updt62" },
        { email: "updt63@gmail.com", password: "1234updt", name: "updt63" },
        { email: "updt64@gmail.com", password: "1234updt", name: "updt64" },
        { email: "updt65@gmail.com", password: "1234updt", name: "updt65" },
        { email: "updt66@gmail.com", password: "1234updt", name: "updt66" },
        { email: "updt67@gmail.com", password: "1234updt", name: "updt67" },
        { email: "updt68@gmail.com", password: "1234updt", name: "updt68" },
        { email: "updt69@gmail.com", password: "1234updt", name: "updt69" },
        { email: "updt70@gmail.com", password: "1234updt", name: "updt70" },
        { email: "updt71@gmail.com", password: "1234updt", name: "updt71" },
        { email: "updt72@gmail.com", password: "1234updt", name: "updt72" },
        { email: "updt73@gmail.com", password: "1234updt", name: "updt73" },
        { email: "updt74@gmail.com", password: "1234updt", name: "updt74" },
        { email: "updt75@gmail.com", password: "1234updt", name: "updt75" },
        { email: "updt76@gmail.com", password: "1234updt", name: "updt76" },
        { email: "updt77@gmail.com", password: "1234updt", name: "updt77" },
        { email: "updt78@gmail.com", password: "1234updt", name: "updt78" },
        { email: "updt79@gmail.com", password: "1234updt", name: "updt79" },
        { email: "updt80@gmail.com", password: "1234updt", name: "updt80" },
        { email: "updt81@gmail.com", password: "1234updt", name: "updt81" },
        { email: "updt82@gmail.com", password: "1234updt", name: "updt82" },
        { email: "updt83@gmail.com", password: "1234updt", name: "updt83" },
        { email: "updt84@gmail.com", password: "1234updt", name: "updt84" },
        { email: "updt85@gmail.com", password: "1234updt", name: "updt85" },
        { email: "updt86@gmail.com", password: "1234updt", name: "updt86" },
        { email: "updt87@gmail.com", password: "1234updt", name: "updt87" },
        { email: "updt88@gmail.com", password: "1234updt", name: "updt88" },
        { email: "updt89@gmail.com", password: "1234updt", name: "updt89" },
        { email: "updt90@gmail.com", password: "1234updt", name: "updt90" },
        { email: "updt91@gmail.com", password: "1234updt", name: "updt91" },
        { email: "updt92@gmail.com", password: "1234updt", name: "updt92" },
        { email: "updt93@gmail.com", password: "1234updt", name: "updt93" },
        { email: "updt94@gmail.com", password: "1234updt", name: "updt94" },
        { email: "updt95@gmail.com", password: "1234updt", name: "updt95" },
        { email: "updt96@gmail.com", password: "1234updt", name: "updt96" },
        { email: "updt97@gmail.com", password: "1234updt", name: "updt97" },
        { email: "updt98@gmail.com", password: "1234updt", name: "updt98" },
        { email: "updt99@gmail.com", password: "1234updt", name: "updt99" },
        { email: "updt100@gmail.com", password: "1234updt", name: "updt100" },
        { email: "updt101@gmail.com", password: "1234updt", name: "updt101" },
        { email: "updt102@gmail.com", password: "1234updt", name: "updt102" },
        { email: "kalpanadevi@gmail.com", password: "1234updt", name: "Kalpana devi" },
        { email: "bhavna@gmail.com", password: "1234updt", name: "Bhavna" },
        { email: "shushmita@gmail.com", password: "1234updt", name: "Shushmita" },
        { email: "chunni@gmail.com", password: "1234updt", name: "Chunni" },
        { email: "yogendra@gmail.com", password: "1234updt", name: "Yogendra" },
        { email: "purushottam@gmail.com", password: "1234updt", name: "Purushottam" },
        { email: "poonam@gmail.com", password: "1234updt", name: "Poonam" },
        { email: "hemlata@gmail.com", password: "1234updt", name: "Hemlata" },
        { email: "pushpraj@gmail.com", password: "1234updt", name: "Pushpraj" },
        { email: "aakanksha@gmail.com", password: "1234updt", name: "Aakanksha" },
        { email: "anita@gmail.com", password: "1234updt", name: "Anita" },
        { email: "sarita@gmail.com", password: "1234updt", name: "Sarita" },
        { email: "basant@gmail.com", password: "1234updt", name: "Basant" },
        { email: "tileshwari@gmail.com", password: "1234updt", name: "Tileshwari" },
        { email: "nand@gmail.com", password: "1234updt", name: "Nand" },
        { email: "kirtan@gmail.com", password: "1234updt", name: "Kirtan" },
        { email: "damini@gmail.com", password: "1234updt", name: "Damini" },
        { email: "gopika@gmail.com", password: "1234updt", name: "Gopika" },
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
      ];

      const foundAccount = allowedAccounts.find(
        (acc) => acc.email === trimmedEmail && acc.password === trimmedPassword
      );

      if (foundAccount) {
        setError("");
        setSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          onLoggedIn(foundAccount.name, trimmedEmail);
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
