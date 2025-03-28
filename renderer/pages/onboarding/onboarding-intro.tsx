import { ChevronLeft } from 'lucide-react';

interface OnboardingIntroProps {
  onNext: () => void;
  onBack: () => void;
}

export default function OnboardingIntro({ onNext, onBack }: OnboardingIntroProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="w-full max-w-md mb-12">
        <div className="border-b-2 border-indigo-600 w-64 mx-auto mb-8"></div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Before we start, answer a few questions to personalize your Deep Work experience.
        </h2>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={onNext}
        className="w-full max-w-sm bg-blue-500 text-white font-medium py-3 rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Next
      </button>
    </div>
  );
}
