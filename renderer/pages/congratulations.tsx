import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LeftSide from "../components/leftsidebar";

export default function CongratulationsPage() {
    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            {/* Left Sidebar */}
            <div className="hidden lg:block w-[280px]">
                <LeftSide />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
                <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
                <p className="text-2xl font-medium mb-8">+30 bottles</p>

                <div className="mt-12">
                    <Link
                        href="/dashbord"
                        className="bg-[#29b6f6] text-white font-medium py-3 px-6 rounded-md hover:bg-[#0a9fe4] transition-colors"
                    >
                        Start New Session
                    </Link>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block w-[350px] border-l border-gray-200 p-6 relative h-screen">
                {/* User Card */}
                <div className="flex items-center justify-between mb-8 bg-[#F6FCFE] rounded-[16px] w-full h-[90px] relative px-4">
                    <div className="flex items-center flex-1">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                            <Image
                                src="/da.png"
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
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

                {/* Play and Wave at the bottom */}
                <div className="absolute bottom-6 right-6 flex items-center space-x-2">
                    <div className="w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-blue-900" />
                    </div>
                    <Image src="/wave.svg" alt="wave" width={130} height={40} />
                </div>
            </div>
        </div>
    );
}
