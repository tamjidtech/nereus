import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DescribeYouQuestion from "../components/onboarding/describe-you-question";
import FreeTimeQuestion from "../components/onboarding/free-time-question";
import OnboardingIntro from "../components/onboarding/onboarding-intro";
export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    freeTime: "",
    description: "",
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("../signup");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.push("../home");
    }
  };

  const updateAnswer = (question: string, answer: string) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-md lg:max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

        {/* Back Button */}
        {step > 1 && (
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {/* Step Content */}

        {step === 1 && (
          <FreeTimeQuestion
            selectedOption={answers.freeTime}
            onSelect={(option) => updateAnswer("freeTime", option)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 2 && (
          <DescribeYouQuestion
            selectedOption={answers.description}
            onSelect={(option) => updateAnswer("description", option)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && <OnboardingIntro onNext={handleNext} onBack={handleBack} />}  {/* Add onBack prop */}
      </div>
    </div>
  );
}
