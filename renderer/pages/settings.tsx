import { ChevronDown, CreditCard, LayoutGrid, LineChart, Menu, Settings, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../pages/ui/button"
import { Input } from "../pages/ui/input"
import { Switch } from "../pages/ui/switch"

const SettingsPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen md:flex-row bg-white">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 rounded-md hover:bg-gray-100"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <Link href="../home">
                    <Image src="/logo.png" alt="Nereus Deep Work" width={150} height={50} />
                </Link>
                <button
                    onClick={() => setRightSidebarOpen(true)}

                >

                </button>
            </div>

            {/* Left Sidebar - Static on all devices */}
            <div className="hidden md:flex w-[200px] border-r border-gray-200 p-6 flex-col">
                <div className="space-y-6 flex-1">
                    <Link href="../home" className="pb-2 block">
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

            {/* Mobile Sidebar Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            >
                <div
                    className={`absolute top-0 left-0 w-64 h-full bg-white transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-4 border-b flex justify-between items-center">
                        <Image src="/logo.png" alt="Nereus Deep Work" width={150} height={50} />
                        <button onClick={() => setSidebarOpen(false)}>
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="p-4 space-y-6">
                        <Link href="/dashbord" className="flex items-center text-blue-900 font-medium py-2">
                            <LayoutGrid className="mr-3 h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link href="../Analytics" className="flex items-center text-gray-500 font-medium py-2">
                            <LineChart className="mr-3 h-5 w-5" />
                            Analytics
                        </Link>
                        <Link href="/premium" className="flex items-center text-gray-500 font-medium py-2">
                            <CreditCard className="mr-3 h-5 w-5" />
                            Premium
                        </Link>
                        <Link href="/settings" className="flex items-center text-gray-500 font-medium py-2">
                            <Settings className="mr-3 h-5 w-5" />
                            Settings
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content + Right Sidebar */}
            <div className="flex-1 overflow-auto bg-[#F7FDFF]">
                <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">

                    {/* Right Sidebar - Appears first on mobile */}
                    <div className="lg:order-2 order-1">
                        <div className="bg-[#F6FCFE] rounded-[16px] p-4 flex items-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                                <Image src="/da.png" alt="User Avatar" width={40} height={40} className="rounded-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">Leonardo C</div>
                                <div className="text-sm text-gray-500">leonardocc@gmail.com</div>
                            </div>
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                            <div className="ml-3 flex items-center text-[#38B6FF]">
                                <Image src="/water.png" alt="Water" width={60} height={40} />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Change your Profile Picture</label>
                                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                                        <span className="text-sm text-gray-500">Upload your photo</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <Input defaultValue="Leonardo C" className="w-full" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <Input className="pl-7 w-full" />
                                    </div>
                                </div>
                                <div className="pt-4 space-y-3">
                                    <Button className="w-full bg-sky-400 hover:bg-sky-500">Update Profile</Button>
                                    <Button variant="outline" className="w-full bg-sky-400 hover:bg-sky-500 text-white border-0">Logout</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Settings - Appears second on mobile */}
                    <div className="lg:order-1 order-2">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
                            <p className="text-gray-600">Good morning, Leonardo 👋</p>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between py-4 border-b">
                                    <div>
                                        <h3 className="font-medium">End session early?</h3>
                                        <p className="text-sm text-gray-500">Option to end focus sessions early.</p>
                                    </div>
                                    <Switch className="bg-gray-300 data-[state=checked]:bg-sky-400" />
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between py-4 border-b">
                                    <div>
                                        <h3 className="font-medium">Sync Chrome Extension?</h3>
                                        <p className="text-sm text-gray-500">Automatically syncs with chrome extensions signed into the same profile</p>
                                    </div>
                                    <Switch className="bg-gray-300 data-[state=checked]:bg-sky-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
