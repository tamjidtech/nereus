import type React from "react"

interface TutorialTooltipProps {
  position: "left" | "right" | "top" | "bottom"
  content: string
  arrowPosition?: "start" | "center" | "end"
}

export const TutorialTooltip: React.FC<TutorialTooltipProps> = ({
  position,
  content,
  arrowPosition = "center",
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "right-full mr-2"
      case "right":
        return "left-full ml-2"
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2"
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2"
      default:
        return "right-full mr-2"
    }
  }

  const getArrowClasses = () => {
    const baseClasses = "w-4 h-4 border-t-2 border-r-2 border-black"

    switch (position) {
      case "left":
        return `${baseClasses} transform rotate-45`
      case "right":
        return `${baseClasses} transform -rotate-135`
      case "top":
        return `${baseClasses} transform rotate-135`
      case "bottom":
        return `${baseClasses} transform -rotate-45`
      default:
        return `${baseClasses} transform rotate-45`
    }
  }

  return (
    <div className={`absolute ${getPositionClasses()} top-1/2 -translate-y-1/2 flex items-center z-50`}>
      {position === "right" && (
        <div className="w-6 h-6 flex items-center justify-center">
          <div className={getArrowClasses()}></div>
        </div>
      )}
      <div className="bg-white p-3 rounded-md shadow-lg border border-gray-200 max-w-[200px]">
        <p className="text-sm font-medium">{content}</p>
      </div>
      {position === "left" && (
        <div className="w-6 h-6 flex items-center justify-center">
          <div className={getArrowClasses()}></div>
        </div>
      )}
    </div>
  )
}
