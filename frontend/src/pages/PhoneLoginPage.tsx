// PhoneLoginPage.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PhoneLoginPage = () => {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [human, setHuman] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const isValidPhone = /^\d{10}$/.test(phone);
  const canContinue = isValidPhone && human;

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate next step or navigation here
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen bg-background flex flex-col items-center transition-opacity duration-500 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-md mx-auto p-4 pb-32">
        <button
          className="p-2 rounded-full hover:bg-muted mb-4 flex items-center transition-transform duration-300 active:scale-95"
          onClick={() => {
            setAnimate(false);
            setTimeout(() => navigate(-1), 300);
          }}
          aria-label="Go Back"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
        </button>
        <div className="flex items-center gap-2 mb-6">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          {/* <span className="font-bold text-lg">ServoSeva</span> */}
        </div>
        <h2 className="text-xl font-semibold mb-2">Enter your phone number</h2>
        <p className="text-sm text-muted-foreground mb-4">
          We'll send you a text with a verification code. Standard tariff may
          apply.
        </p>
        <form className="space-y-4" onSubmit={handleContinue}>
          <div className="flex gap-2 mb-2 items-center relative">
            <div className="relative w-28">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="appearance-none border rounded px-4 py-3 text-base w-full bg-white focus:outline-none focus:ring-2 focus:ring-primary pr-8"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={10}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="border rounded p-3 flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={human}
              onChange={(e) => setHuman(e.target.checked)}
              id="humanCheck"
              className="h-4 w-4"
            />
            <label htmlFor="humanCheck" className="text-sm">
              Verify you are human
            </label>
            <img
              src="https://www.cloudflare.com/img/logo-cloudflare-black.svg"
              alt="Cloudflare"
              className="h-4 ml-auto"
            />
          </div>
        </form>
      </div>
      {/* Fixed bottom for mobile view */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-background border-t shadow-md p-4 md:hidden">
        <button
          type="submit"
          className={`w-full py-2 rounded bg-primary text-white font-semibold text-base flex items-center justify-center gap-2 ${
            canContinue ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!canContinue || loading}
        >
          {loading ? (
            <span className="flex items-center justify-center w-full">
              <span className="dot-loader">
                <span className="dot bg-white"></span>
                <span className="dot bg-white"></span>
                <span className="dot bg-white"></span>
              </span>
            </span>
          ) : (
            "Continue"
          )}
        </button>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            T&amp;C
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy
          </a>{" "}
          policy.
        </p>
      </div>
      <style>{`
.dot-loader {
  display: inline-flex;
  gap: 6px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0.5;
  animation: dotFade 1s infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes dotFade {
  0%, 80%, 100% { opacity: 0.3; }
  40% { opacity: 1; }
}
`}</style>
    </div>
  );
};

export default PhoneLoginPage;
