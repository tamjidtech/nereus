import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LeftSide from "../components/leftsidebar";
export default function Premium() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-x-hidden">

            <LeftSide />

            {/* Content */}
            <div className="flex-1 lg:pt-10 p-6">
                <div className="flex lg:hidden items-center mb-6 bg-[#F6FCFE] rounded-[16px] w-full h-[73px]">
                    <div className="flex items-center flex-1 overflow-hidden">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                            <Image src="/da.png" alt="User Avatar" width={40} height={40} className="rounded-full object-cover" />
                        </div>
                        <div className="truncate">
                            <div className="font-medium truncate">Leonardo C</div>
                            <div className="text-sm text-gray-500 truncate">leonardocc@gmail.com</div>
                        </div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-500 mx-2" />
                    <div className="flex items-center text-[#38B6FF]">
                        <Image src="/water.png" alt="Water" width={60} height={40} />
                    </div>
                </div>


                {/* Header */}
                <div className="flex justify-center items-center mb-12">
                    <h1 className="text-2xl md:text-3xl pt-5 font-bold text-[#2d4b6e] text-center">
                        What's your time worth?
                    </h1>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-xl sm:max-w-xl md:max-w-xl lg:max-w-4xl mx-auto mb-8">
                    {/* Monthly Plan */}
                    <div
                        className={`border rounded-xl p-6 pt-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${selectedPlan === "monthly" ? "border-blue-500 ring-2 ring-blue-500" : ""} mt-20`}
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
                    <div className="relative">
                        <div className="w-full bg-[#0a2342] text-white py-2 px-4 h-[50px] rounded text-center font-bold shadow ">
                            YEARLY VALUE
                        </div>

                        <div
                            className={`border -mt-3 rounded-xl overflow-hidden flex bg-white flex-col items-center text-center shadow  `}
                            onClick={() => setSelectedPlan("yearly")}
                        >
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
                    </div>

                    {/* Lifetime Plan */}
                    <div
                        className={`border rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${selectedPlan === "lifetime" ? "border-blue-500 ring-2 ring-blue-500" : ""} mt-20`}
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
            <div className="hidden lg:block w-full sm:w-[250px] border-l border-gray-200 p-3 sm:p-3 transform lg:translate-x-0 -translate-x-3">
                <div className="flex items-center mb-6 bg-[#F6FCFE] rounded-[16px] w-full h-[73px]">
                    <div className="flex items-center flex-1 overflow-hidden">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                            <Image src="/da.png" alt="User Avatar" width={40} height={40} className="rounded-full object-cover" />
                        </div>
                        <div className="truncate">
                            <div className="font-medium truncate">Leonardo C</div>
                            <div className="text-sm text-gray-500 truncate">leonardocc@gmail.com</div>
                        </div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-500 mx-2" />
                    <div className="flex items-center text-[#38B6FF]">
                        <Image src="/water.png" alt="Water" width={60} height={40} />
                    </div>
                </div>
            </div>



        </div>
    );
}
