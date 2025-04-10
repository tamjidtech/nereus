import { ChevronDown } from "lucide-react";
import Image from "next/image";
import LeftSidebar from "../components/leftsidebar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";

const SettingsPage = () => {
    return (
        <div className="flex flex-col min-h-screen md:flex-row bg-white">

            <LeftSidebar />




            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-[#F7FDFF]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">

                    {/* Right Sidebar (User Info + Profile Settings) */}
                    <div className="lg:order-2 order-1">
                        {/* User Info */}
                        <div className="bg-[#F6FCFE] rounded-[16px] p-4 flex items-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                                <Image
                                    src="/da.png"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
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

                        {/* Profile Settings */}
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>
                            <div className="space-y-6">
                                {/* Profile Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Change your Profile Picture</label>
                                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 mb-2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                            <circle cx="12" cy="13" r="3"></circle>
                                        </svg>
                                        <span className="text-sm text-gray-500">Upload your photo</span>
                                    </div>
                                </div>

                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <Input defaultValue="Leonardo C" className="w-full" />
                                </div>

                                {/* Hourly Rate Input */}
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
                                <div className="pt-4 grid gap-3 sm:grid-cols-2">
                                    <Button className="w-full bg-sky-400 hover:bg-sky-500">Update Profile</Button>
                                    <Button variant="outline" className="w-full bg-sky-400 hover:bg-sky-500 text-white border-0">Logout</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Settings */}
                    <div className="lg:order-1 order-2">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
                            <p className="text-gray-600">Good morning, Leonardo 👋</p>
                        </div>

                        <div className="space-y-8">
                            {/* Session Toggle */}
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between py-4 border-b">
                                    <div>
                                        <h3 className="font-medium">End session early?</h3>
                                        <p className="text-sm text-gray-500">Option to end focus sessions early.</p>
                                    </div>
                                    <Switch className="bg-gray-300 data-[state=checked]:bg-sky-400" />
                                </div>
                            </div>

                            {/* Sync Toggle */}
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
            </main>
        </div>
    );
};

export default SettingsPage;
