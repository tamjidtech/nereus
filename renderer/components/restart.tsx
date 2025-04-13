

import { HelpCircle } from "lucide-react"

interface RestartTutorialButtonProps {
  onClick: () => void
  className?: string
}

export function RestartTutorialButton({ onClick, className = "" }: RestartTutorialButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 ${className}`}
    >
      <HelpCircle className="h-4 w-4" />
      <span>Restart Tutorial</span>
    </button>
  )
}
