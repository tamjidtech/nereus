

import { X } from "lucide-react"

interface TutorialOverlayProps {
  currentStep: number
  totalSteps: number
  onSkip: () => void
  onNext: () => void
  onPrev: () => void
  onComplete: () => void
}

export function TutorialOverlay({ currentStep, totalSteps, onSkip, onNext, onPrev, onComplete }: TutorialOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={onSkip}
          className="bg-white text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
        >
          Skip Tutorial
        </button>
        <button onClick={onSkip} className="bg-white/10 hover:bg-white/20 rounded-full p-1">
          <X className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
        <div className="text-sm text-gray-500">
          Step {currentStep} of {totalSteps}
        </div>

        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`h-2 w-8 rounded-full ${i === currentStep - 1 ? "bg-[#38B6FF]" : "bg-gray-200"}`} />
          ))}
        </div>

        <div className="flex gap-2">
          {currentStep > 1 && (
            <button
              onClick={onPrev}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Previous
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              onClick={onNext}
              className="bg-[#38B6FF] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2AA3F3]"
            >
              Next
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="bg-[#38B6FF] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2AA3F3]"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
