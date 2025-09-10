import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import HowItWorks from "../components/HowItWorks";

const HowItWorksPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto p-4 pb-32">
        <button
          className="p-2 rounded-full hover:bg-muted mb-4 flex items-center"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 mb-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <HowItWorks />
      </div>
    </div>
  );
};

export default HowItWorksPage;
