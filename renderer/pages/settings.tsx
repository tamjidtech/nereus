

import { ChevronDown, CreditCard, LayoutGrid, LineChart, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../pages/ui/button"
import { Input } from "../pages/ui/input"
import { Switch } from "../pages/ui/switch"

const settings = () => {
    return (
        <div className="flex min-h-screen bg-white">
            <div className="w-[200px] border-r border-gray-200 p-6 flex flex-col">
                <div className="space-y-6 flex-1">
                    <Link href="../dashbord" className="pb-2">
                        <Image src="/logo.png" alt="Nereus Deep Work" width={200} height={70} />
                    </Link>
                    <Link href="/dashbord" className="flex items-center text-blue-900 font-medium">
                        <LayoutGrid className="mr-3 h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link href="../Analytics" className="flex items-center text-gray-500 font-medium">
                        <LineChart className="mr-3 h-5 w-5" />
                        Analytics
                    </Link>
                    <Link href="/premium" className="flex items-center text-gray-500 font-medium">
                        <CreditCard className="mr-3 h-5 w-5" />
                        Premium
                    </Link>
                </div>
                <Link href="/settings" className="flex items-center text-gray-500 font-medium mt-auto">
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                </Link>
            </div>





            <div className="flex-1 overflow-auto bg-[#F7FDFF]">
                <div className="max-w-6xl mx-auto p-8">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
                            <p className="text-gray-600">Good morning, Leonardo 👋</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left column */}
                        <div className="space-y-4">
                            {/* Session Controls */}
                            <h2 className="text-lg font-semibold mb-4">Session Controls</h2>
                            <div className="bg-white rounded-xl p-6 shadow-lg w-[564px]">
                                <div className="flex items-center justify-between py-4 border-b">
                                    <div>
                                        <h3 className="font-medium">End session early?</h3>
                                        <p className="text-sm text-gray-500">Option to end focus sessions early.</p>
                                    </div>
                                    <Switch className="bg-gray-300 data-[state=checked]:bg-sky-400" />
                                </div>
                            </div>

                            {/* Sync Devices */}
                            <h2 className=" pt-4 text-lg font-semibold mb-2">Sync Devices</h2>
                            <div className="bg-white rounded-xl p-6 shadow-lg w-[564px]">
                                <div className="flex items-center justify-between py-4 border-b">
                                    <div>
                                        <h3 className="font-medium">Sync Chrome Extension?</h3>
                                        <p className="text-sm text-gray-500">
                                            Automatically syncs with chrome extensions signed into the same profile
                                        </p>
                                    </div>
                                    <Switch className="bg-gray-300 data-[state=checked]:bg-sky-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* right side */}

            <div className="w-[400px]  p-4 transform -translate-x-8">
                <div className="pl-10">


                    <div className="flex items-center  mb-8 bg-[#F6FCFE] rounded-[16px] w-[280px] h-[73px]">
                        <div className="flex items-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                                <Image src="/da.png" alt="User Avatar" width={40} height={40} className="rounded-full object-cover" />
                            </div>
                            <div>
                                <div className="font-medium">Leonardo C</div>
                                <div className="text-sm text-gray-500">leonardocc@gmail.com</div>
                            </div>
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                        <div className="flex items-center text-[#38B6FF]">
                            <Image src="/water.png" alt="Water" width={60} height={40} />
                        </div>
                    </div>
                </div>


                <div className="pl-8">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>

                        <div className="space-y-6">
                            {/* Profile Picture */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Change your Profile Picture</label>
                                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-400 mb-2"
                                    >
                                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                        <circle cx="12" cy="13" r="3"></circle>
                                    </svg>
                                    <span className="text-sm text-gray-500">Upload your photo</span>
                                </div>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <Input defaultValue="Leonardo C" className="w-full" />
                            </div>

                            {/* Hourly Rate */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                    </div>
                                    <Input className="pl-7 w-full" />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="pt-4 space-y-3">
                                <Button className="w-full bg-sky-400 hover:bg-sky-500">Update Profile</Button>
                                <Button variant="outline" className="w-full bg-sky-400 hover:bg-sky-500 text-white border-0">
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}
export default settings