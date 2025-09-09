// PhoneLoginPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PhoneLoginPage = () => {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [human, setHuman] = useState(false);

  const isValidPhone = /^\d{10}$/.test(phone);
  const canContinue = isValidPhone && human;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="w-full max-w-md mx-auto p-4 pb-32">
        <button
          className="p-2 rounded-full hover:bg-muted mb-4 flex items-center"
          onClick={() => navigate(-1)}
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
        <form className="space-y-4">
          <div className="flex gap-2 mb-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border rounded px-2 py-2 text-sm"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="flex-1 border rounded px-3 py-2 text-sm"
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
          className={`w-full py-2 rounded bg-primary text-white font-semibold text-base ${
            canContinue ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!canContinue}
        >
          Continue
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
    </div>
  );
};

export default PhoneLoginPage;
