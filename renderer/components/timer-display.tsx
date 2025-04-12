
import { useEffect, useState } from "react"

interface TimerDisplayProps {
  initialMinutes: number
  initialSeconds: number
  isRunning?: boolean
}

export default function TimerDisplay({ initialMinutes, initialSeconds, isRunning = true }: TimerDisplayProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          clearInterval(interval)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [minutes, seconds, isRunning])

  const adjustTime = (amount: number) => {
    const newMinutes = minutes + amount
    if (newMinutes >= 0) {
      setMinutes(newMinutes)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        {minutes !== initialMinutes && (
          <button onClick={() => adjustTime(-5)} className="text-2xl font-bold mr-4">
            -5
          </button>
        )}

        <div className="bg-[#2c4a7c] text-white text-4xl font-bold py-3 px-8 rounded-md">
          {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}
        </div>

        {minutes !== initialMinutes && (
          <button onClick={() => adjustTime(5)} className="text-2xl font-bold ml-4">
            +5
          </button>
        )}
      </div>
    </div>
  )
}
