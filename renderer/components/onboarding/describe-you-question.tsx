import { ChevronLeft } from 'lucide-react';

interface DescribeYouQuestionProps {
  selectedOption: string;
  onSelect: (option: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function DescribeYouQuestion({ selectedOption, onSelect, onNext, onBack }: DescribeYouQuestionProps) {
  const options = ["Digital Nomad", "Industry Professional", "Entrepreneur", "Other"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-md mb-8">
        <div className="border-b-2 border-indigo-600 w-64 mx-auto mb-12"></div>

        <h2 className="text-xl font-medium text-gray-700 text-center mb-8">What best describes you?</h2>

        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option}
              className={`flex items-center justify-between p-4 rounded-md cursor-pointer ${selectedOption === option ? "bg-gray-400" : "bg-gray-300"}`}
              onClick={() => onSelect(option)}
            >
              <span>{option}</span>
              <div className={`w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center ${selectedOption === option ? "bg-white" : "bg-transparent"}`}>
                {selectedOption === option && <div className="w-3 h-3 rounded-full bg-black"></div>}
              </div>
            </div>
          ))}
        </div>
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
        className="bg-blue-500 text-white font-medium px-8 py-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        Next
      </button>
    </div>
  );
}
