
interface OnboardingIntroProps {
  onNext: () => void;
  onBack: () => void;
}

export default function OnboardingIntro({ onNext, onBack }: OnboardingIntroProps) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-4">
      <button
        onClick={onBack}
        className="absolute top-2 left-2 p-2 rounded-full "
      >

      </button>



      <div className="mb-16 max-w-md">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
          Deep Work was coined by Dr. Cal Newport and means focused, undistracted work.
        </h2>
        <p className="text-xl md:text-2xl text-gray-700">
          2-4 hour bursts of Deep Work per day is associated with 51% greater productivity.
        </p>
      </div>

      <button
        onClick={onNext}
        className="bg-blue-500 text-white font-medium px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}
