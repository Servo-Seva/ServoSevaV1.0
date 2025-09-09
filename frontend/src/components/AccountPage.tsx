// AccountPage.tsx
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AccountPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{10}$/.test(phone)) {
      setSubmitted(true);
      // Here you would trigger OTP or backend logic
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 pb-24">
      {/* Back Arrow Button */}
      <button
        className="p-2 rounded-full hover:bg-muted mb-4 flex items-center"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <h1 className="text-2xl font-semibold mb-6">Account</h1>

      {/* Login / Signup + Theme Toggle */}
      <div className="flex flex-row items-center gap-4 mb-6 flex-wrap">
        {/* Login / Signup button navigates to phone login page */}
        <button
          className="px-4 py-2 border rounded bg-primary text-white text-sm"
          onClick={() => navigate("/login")}
        >
          Login / Signup
        </button>
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* About Us */}
      <div className="max-w-md">
        <h2 className="font-medium mb-2">About Us</h2>
        <p className="text-sm text-muted-foreground">
          ServiceConnect connects users with service providers for all daily
          needs like AC repair, plumbing, home services, and more.
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
