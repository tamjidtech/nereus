import type { ReactNode } from "react"

interface TutorialTooltipProps {
  children: ReactNode
  position: "left" | "right" | "top" | "bottom"
  className?: string
}

export function TutorialTooltip({ children, position, className = "" }: TutorialTooltipProps) {
  const positionClasses = {
    left: "right-full mr-4",
    right: "left-full ml-4",
    top: "bottom-full mb-4",
    bottom: "top-full mt-4",
  }

  const arrowClasses = {
    left: "right-[-12px] top-1/2 -translate-y-1/2 border-l-white border-t-transparent border-b-transparent border-r-transparent",
    right:
      "left-[-12px] top-1/2 -translate-y-1/2 border-r-white border-t-transparent border-b-transparent border-l-transparent",
    top: "bottom-[-12px] left-1/2 -translate-x-1/2 border-t-white border-l-transparent border-r-transparent border-b-transparent",
    bottom:
      "top-[-12px] left-1/2 -translate-x-1/2 border-b-white border-l-transparent border-r-transparent border-t-transparent",
  }

  return (
    <div
      className={`absolute z-50 bg-white border border-gray-200 rounded-md p-3 shadow-lg max-w-xs ${positionClasses[position]} ${className}`}
    >
      <div className="text-sm font-medium text-gray-800">{children}</div>
      <div className={`absolute w-0 h-0 border-[6px] ${arrowClasses[position]}`} style={{ zIndex: 51 }}></div>
    </div>
  )
}
