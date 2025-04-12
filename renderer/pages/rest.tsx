import { ChevronDown, Play, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import EndSessionButton from "../components/end-session-button"
import LeftSide from "../components/leftsidebar"
import TimerDisplay from "../components/timer-display"

export default function RestPage() {
    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="hidden lg:block w-[280px]">
                <LeftSide />
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 py-8 items-center justify-center flex flex-col">
                <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 mr-2" />
                    <h2 className="text-xl font-medium">Rest</h2>
                    <Zap className="h-5 w-5 ml-2" />
                </div>

                <TimerDisplay initialMinutes={5} initialSeconds={0} />

                <div className="mt-8">
                    <Link href="/congratulations" className="text-lg font-medium hover:text-blue-600 transition-colors">
                        Skip Rest
                    </Link>
                </div>

                <EndSessionButton href="/congratulations" />
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block w-[350px] border-l border-gray-200 p-6 relative h-screen">
                {/* User Card */}
                <div className="flex items-center justify-between mb-8 bg-[#F6FCFE] rounded-[16px] w-full h-[90px] relative px-4">
                    <div className="flex items-center flex-1">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                            <Image src="/da.png" alt="User Avatar" width={40} height={40} className="rounded-full object-cover" />
                        </div>
                        <div>
                            <div className="font-medium">Leonardo C</div>
                            <div className="text-sm text-gray-500">leonardocc@gmail.com</div>
                        </div>
                    </div>

                    {/* Chevron and Level */}
                    <div className="flex flex-col items-center ml-2">
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                        <div className="mt-1 flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold">
                                5
                            </div>
                            <span className="text-[14px] text-black font-bold mt-1">Level 5</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 right-6 flex items-center space-x-2">
                    <div className="w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-blue-900" />
                    </div>
                    <Image src="/wave.svg" alt="wave" width={130} height={40} />
                </div>
            </div>
        </div>

    )
}
