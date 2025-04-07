import { Check, ChevronDown, CreditCard, LayoutGrid, LineChart, Menu, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Premium() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white">

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
                    className="p-2 rounded-md hover:bg-gray-100"
                >
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                        <Image src="/da.png" alt="User Avatar" width={32} height={32} className="rounded-full object-cover" />
                    </div>
                </button>
            </div>
            {/* Left Sidebar - Desktop */}
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

            {/* Left Sidebar - Mobile */}
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

            {/* Content */}
            <div className="flex-1 p-6">


                {/* Header */}
                <div className="flex justify-center items-center mb-12">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#2d4b6e] text-center">
                        What's your time worth?
                    </h1>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                    {/* Monthly Plan */}
                    <div
                        className={`border rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${selectedPlan === "monthly" ? "border-blue-500 ring-2 ring-blue-500" : ""
                            }`}
                        onClick={() => setSelectedPlan("monthly")}
                    >
                        <Image src="/logo.png" alt="Nereus Deep Work" width={100} height={40} className="my-2" />
                        <div className="text-2xl md:text-3xl font-bold mb-4">$8.99/mo.</div>
                        <button className="bg-[#0a2342] text-white rounded-full py-2 px-6 font-medium w-full transition-all duration-300 hover:bg-[#092031]">
                            START MONTHLY
                        </button>
                        <div className="text-sm text-gray-600 mt-3">
                            $8.99 billed monthly, <br />
                            cancel anytime
                        </div>
                    </div>

                    {/* Yearly Plan */}
                    <div
                        className={`border rounded-xl overflow-hidden flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${selectedPlan === "yearly" ? "border-blue-500 ring-2 ring-blue-500" : ""
                            }`}
                        onClick={() => setSelectedPlan("yearly")}
                    >
                        <div className="bg-[#0a2342] text-white py-2 px-4 w-full text-center font-bold">YEARLY VALUE</div>
                        <div className="p-6 flex flex-col items-center w-full">
                            <Image src="/logo.png" alt="Nereus Deep Work" width={100} height={40} className="my-2" />
                            <div className="text-2xl md:text-3xl font-bold mb-4">$4.99/mo.</div>
                            <button className="bg-[#0a2342] text-white rounded-full py-2 px-6 font-medium w-full transition-all duration-300 hover:bg-[#092031]">
                                BUY NOW
                            </button>
                            <div className="text-sm text-gray-600 mt-3">
                                $59.99 billed yearly, <br />
                                cancel anytime
                            </div>
                        </div>
                    </div>

                    {/* Lifetime Plan */}
                    <div
                        className={`border rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${selectedPlan === "lifetime" ? "border-blue-500 ring-2 ring-blue-500" : ""
                            }`}
                        onClick={() => setSelectedPlan("lifetime")}
                    >
                        <Image src="/logo.png" alt="Nereus Deep Work" width={100} height={40} className="my-2" />
                        <div className="text-2xl md:text-3xl font-bold mb-4">$149</div>
                        <button className="bg-[#0a2342] text-white rounded-full py-2 px-6 font-medium w-full transition-all duration-300 hover:bg-[#092031]">
                            OWN IT FOREVER
                        </button>
                        <div className="text-sm text-gray-600 mt-3">
                            One-time payment, <br />
                            no recurring fees
                        </div>
                    </div>
                </div>

                {/* Selected Plan Message */}
                {selectedPlan && (
                    <div className="text-center text-lg font-medium text-green-600">
                        You have selected the {selectedPlan} plan.
                    </div>
                )}

                {/* Features */}
                <div className="max-w-lg mx-auto mt-6">
                    <h2 className="text-xl font-medium mb-4 text-center">Includes</h2>
                    <div className="space-y-3">
                        {[
                            "Distraction blocking across browsers and desktop",
                            "Remove real plastic from the ocean",
                            "Syncs with phone and chrome extension",
                            "Tab lock",
                            "Deep work analytics",
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-blue-100 rounded-full p-1">
                                    <Check className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-sm sm:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel - User Profile */}
            <div className="w-[300px] border-l border-gray-200 p-6 transform -translate-x-3 ">
                <div className="flex items-center mb-8 bg-[#F6FCFE] rounded-[16px] w-[280px] h-[73px]">
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
        </div>
    );
}
