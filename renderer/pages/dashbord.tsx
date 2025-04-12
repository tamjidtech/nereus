"use client"

import { ChevronDown, Play, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import LeftSide from "../components/leftsidebar"
import { SocialDropdown } from "../components/social-dropdown"

type DistractionKey = "social" | "textEmail" | "tvVideo" | "shopping" | "sports" | "news"

export default function Dashboard() {
    const [sessionGoal, setSessionGoal] = useState("")
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
    const [distractions, setDistractions] = useState({
        social: true,
        textEmail: false,
        tvVideo: false,
        shopping: false,
        sports: false,
        news: true,
    })
    const [tabLock, setTabLock] = useState(false)
    const [customCategories, setCustomCategories] = useState<string[]>([])
    const [availableCategories, setAvailableCategories] = useState(["Dating", "Adult", "Games", "Gambling", "Politics"])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [workTime, setWorkTime] = useState("25 : 00")
    const [restTime, setRestTime] = useState("5 : 00")
    const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false)

    const [showTutorial, setShowTutorial] = useState(false)
    const [tutorialStep, setTutorialStep] = useState(1)
    const totalTutorialSteps = 5

    useEffect(() => {
        const hasSeenTutorial = localStorage.getItem("hasSeenTutorial")
        const isNewUser = localStorage.getItem("isNewUser")

        if (!hasSeenTutorial || isNewUser === "true") {
            setShowTutorial(true)
            if (isNewUser === "true") {
                localStorage.setItem("isNewUser", "false")
            }
        }
    }, [])

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
        )
    }

    const toggleDistraction = (key: DistractionKey) => {
        setDistractions({ ...distractions, [key]: !distractions[key] })
    }

    const addCategory = (category: string) => {
        if (!customCategories.includes(category)) {
            setCustomCategories([...customCategories, category])
            setAvailableCategories(availableCategories.filter((item) => item !== category))
        }
        setShowCategoryDropdown(false)
    }

    const removeCategory = (category: string) => {
        setCustomCategories(customCategories.filter((cat) => cat !== category))
        setAvailableCategories([...availableCategories, category])
    }

    const handleGeneralSession = () => {
        setWorkTime("25 : 00")
        setRestTime("5 : 00")
        setSessionGoal("General")
    }

    const handleEconSession = () => {
        setWorkTime("35 : 00")
        setRestTime("15 : 00")
        setSessionGoal("Econ")
    }

    const skipTutorial = () => {
        setShowTutorial(false)
        localStorage.setItem("hasSeenTutorial", "true")
    }

    const resetTutorial = () => {
        localStorage.removeItem("hasSeenTutorial")
        localStorage.setItem("isNewUser", "true")
        setShowTutorial(true)
        setTutorialStep(1)
    }

    const nextTutorialStep = () => {
        if (tutorialStep < totalTutorialSteps) {
            setTutorialStep(tutorialStep + 1)
        } else {
            skipTutorial()
        }
    }

    const prevTutorialStep = () => {
        if (tutorialStep > 1) {
            setTutorialStep(tutorialStep - 1)
        }
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
            {/* Left Sidebar */}

            <LeftSide />

            {/* Main + Right Content */}
            <div className="flex flex-col-reverse lg:flex-row flex-1">
                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8 overflow-y-auto flex justify-center">
                    <div className="max-w-3xl w-full">
                        <h1 className="text-2xl md:text-3xl font-medium text-blue-900 mb-8 text-center">
                            What&apos;s Your Session Goal?
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-4 relative">
                            {showTutorial && tutorialStep === 1 && (
                                <div className="absolute left-2 md:-left-6 max-w-xs ">
                                    <div className="relative flex items-center">
                                        <div className="bg-white shadow-lg rounded-lg p-4 text-sm font-medium text-center break-words w-full">
                                            Enter your Deep Work<br />session goal here
                                        </div>
                                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[24px]">→</div>
                                    </div>
                                </div>
                            )}

                            <input
                                type="text"
                                value={sessionGoal}
                                onChange={(e) => setSessionGoal(e.target.value)}
                                placeholder="Session Goal..."
                                className="w-full sm:w-[300px] h-[57px] p-4 border border-gray-300 rounded-md"
                            />

                            <div className="relative">
                                {showTutorial && tutorialStep === 2 && (
                                    <div className="absolute -top-6 left-[130px] whitespace-nowrap">
                                        <div className="relative flex items-center">
                                            <div className="absolute -left-7 top-1/2 -translate-y-1/2 text-black text-[24px]">
                                                ←
                                            </div>

                                            <div className="bg-white shadow-lg rounded-lg p-4 text-sm font-medium text-center">
                                                Press enter for AI to <br />
                                                block distraction <br />
                                                categories based on <br />
                                                your task
                                            </div>
                                        </div>
                                    </div>

                                )}
                                <button className="w-full sm:w-auto bg-[#38B6FF] text-white px-6 py-4 rounded-lg font-medium text-lg">
                                    Enter
                                </button>
                            </div>
                        </div>

                        <section className="mb-10 relative">
                            <div className="flex items-center justify-center mb-6">
                                <h2 className="text-xl font-medium text-blue-900">Distractions</h2>
                                <ChevronDown className="ml-2 h-5 w-5 text-blue-900" />
                            </div>
                            {showTutorial && tutorialStep === 3 && (
                                <div className="absolute -left-10 whitespace-nowrap">
                                    <div className="relative flex items-center">
                                        <div className="bg-white shadow-lg rounded-lg p-4">
                                            <div className="text-[14px] leading-[15px] font-medium text-center">
                                                A check means a <br />distraction category is <br />blocked
                                            </div>
                                        </div>
                                        <div className="absolute -right-5 top-8 -translate-y-1/2 text-[24px]">
                                            →
                                        </div>
                                    </div>
                                </div>

                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 left-8 relative">


                                {["Social", "Shopping", "Text/Email", "Sports", "TV/Video", "News"].map((item) => {
                                    const key = item.toLowerCase().replace("/", "") as DistractionKey
                                    return (
                                        <div key={item} className="flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                checked={distractions[key]}
                                                onChange={() => toggleDistraction(key)}
                                                className="w-5 h-5 text-[#38B6FF] cursor-pointer"
                                            />
                                            <span className="ml-2">{item}</span>

                                            <div className="ml-2 relative">
                                                <button onClick={() => setIsSocialDropdownOpen((prev) => !prev)}>
                                                    <Image src="/1.svg" alt="" width="13" height="15" />
                                                </button>
                                                {item === "Social" && isSocialDropdownOpen && (
                                                    <SocialDropdown
                                                        isOpen={isSocialDropdownOpen}
                                                        onClose={() => setIsSocialDropdownOpen(false)}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}

                                {customCategories.map((category) => (
                                    <div key={category} className="flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => toggleCategory(category)}
                                            className="w-5 h-5 text-[#38B6FF] cursor-pointer"
                                        />
                                        <span className="ml-2">{category}</span>
                                        <button onClick={() => removeCategory(category)} className="ml-2 text-red-500">
                                            <Image src="/delet.svg" alt="" width="13" height="15" />
                                        </button>
                                        <Image src="/1.svg" alt="" width="13" height="15" className="ml-2" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-center relative">
                                <div>
                                    <button
                                        className="flex items-center justify-center w-10 h-10 bg-[#38B6FF] rounded-full text-white"
                                        onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                    {showCategoryDropdown && (
                                        <div className="absolute z-10 mt-2 w-64 bg-white border rounded-md shadow-lg left-1/2 -translate-x-1/2">
                                            <div className="p-3 text-center text-gray-600 border-b">Add Category</div>
                                            {availableCategories.map((category) => (
                                                <div
                                                    key={category}
                                                    className="flex justify-between p-3 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => addCategory(category)}
                                                >
                                                    <span>{category}</span>
                                                    <Plus className="h-4 w-4 text-gray-500" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-center items-center mb-8 relative">
                            {showTutorial && tutorialStep === 4 && (
                                <div className="absolute -mt-10 right-[130px] whitespace-nowrap">
                                    <div className="relative">
                                        <div className="absolute -left-6 top-16 -translate-y-1/2 text-black text-[26px]">
                                            ←
                                        </div>

                                        <div className="bg-white shadow-lg rounded-lg p-4">
                                            <div className="text-[14px] leading-[18px] font-medium text-center">
                                                Tab lock prevents you <br />from opening<br />additional <br />applications/tabs
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )}

                            <span className="text-sm mr-2">Tab Lock</span>
                            <div
                                className={`w-10 h-5 rounded-full flex items-center p-0.5 cursor-pointer ${tabLock ? "bg-[#38B6FF]" : "bg-gray-300"
                                    }`}
                                onClick={() => setTabLock(!tabLock)}
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full transform transition-transform ${tabLock ? "translate-x-5" : "translate-x-0"
                                        }`}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center mb-12 relative">
                            {showTutorial && tutorialStep === 5 && (
                                <div className="absolute top-12  -right-[35px] whitespace-nowrap">
                                    <div className="absolute -left-6 top-10 -translate-y-1/2 text-black text-[26px]">
                                        ←
                                    </div>



                                    <div className="bg-white shadow-lg rounded-lg p-4 text-sm font-medium text-center">
                                        Set work/rest time and<br />start your session!
                                    </div>

                                </div>

                            )}

                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                <div className="flex flex-col items-center">
                                    <span className="text-blue-900 text-sm font-medium flex items-center gap-2">
                                        <Image src="/2.svg" alt="" width={15} height={16} />
                                        Work
                                        <Image src="/2.svg" alt="" width={15} height={16} />
                                    </span>
                                    <div className="w-[200px] h-[46px] bg-[#2F4C74] border border-[#9BDFF9] rounded-md flex justify-center items-center mt-2">
                                        <span className="text-white text-lg font-medium">{workTime}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span className="text-blue-900 text-sm font-medium flex items-center gap-2">
                                        <Image src="/rest.svg" alt="" width={14} height={16} />
                                        Rest
                                        <Image src="/rest.svg" alt="" width={14} height={16} />
                                    </span>
                                    <div className="w-[203px] h-[40px] bg-[#2F4C74] border border-[#9BDFF9] rounded-md flex justify-center items-center mt-2">
                                        <span className="text-white text-lg font-medium">{restTime}</span>
                                    </div>
                                </div>
                            </div>
                            <Link href="/activation">
                                <button className="w-full sm:w-auto bg-[#38B6FF] text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-[#1E90FF] transition">
                                    Start Session (+30)
                                </button>
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l border-gray-200 p-6">
                    <div className="flex items-center mb-8 bg-[#F6FCFE] rounded-[16px] h-[73px] p-2">
                        <div className="flex items-center flex-1">
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                                <Image src="/da.png" alt="User" width={40} height={40} className="rounded-full" />
                            </div>
                            <div>
                                <div className="font-medium">Leonardo C</div>
                                <div className="text-sm text-gray-500">leonardocc@gmail.com</div>
                            </div>
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-1 text-xl font-medium">
                            <span>3</span>
                            <Image src="/fire.svg" alt="" width={20} height={25} />
                        </div>
                        <div className="text-xl font-medium">$532</div>
                        <Image src="/water.png" alt="Water" width={58} height={36} />
                    </div>

                    <div className="mb-8">
                        <div className="p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
                            <div className="relative flex justify-center items-center mb-2">
                                <div className="w-36 h-36 rounded-full border-[20px] border-[#D6EFFF] flex justify-center items-center">
                                    <div className="text-center">
                                        <div className="text-3xl font-medium">2.1</div>
                                        <div className="text-sm">hr</div>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="#38B6FF"
                                            strokeWidth="16"
                                            strokeDasharray="251"
                                            strokeDashoffset="100"
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-medium">Deep Work</div>
                                <div className="text-gray-500">Hours Today</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-medium text-center">Recent Sessions</h2>
                        <div className="bg-[#FCFEFE] border p-4 rounded-md shadow-md hover:scale-105 transition">
                            <div
                                className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                                onClick={handleGeneralSession}
                            >
                                <span>General</span>
                                <div className="flex items-center">
                                    <span className="text-gray-500 mr-2">25:5</span>
                                    <div className="w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center">
                                        <Play className="h-4 w-4 text-blue-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FCFEFE] border p-4 rounded-md shadow-md hover:scale-105 transition">
                            <div
                                className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                                onClick={handleEconSession}
                            >
                                <span>Econ</span>
                                <div className="flex items-center">
                                    <span className="text-gray-500 mr-2">35:15</span>
                                    <div className="w-8 h-8 border border-blue-900 rounded-full flex items-center justify-center">
                                        <Play className="h-4 w-4 text-blue-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>



            {/* Bottom tutorial navigation box */}
            {showTutorial && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 z-50">
                    {/* Skip button */}
                    <button
                        onClick={skipTutorial}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                    >
                        Skip
                    </button>

                    {/* Step indicators */}
                    <div className="flex gap-1">
                        {Array.from({ length: totalTutorialSteps }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 w-8 rounded-full ${i === tutorialStep - 1 ? "bg-[#38B6FF]" : "bg-gray-200"}`}
                            />
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex gap-2">
                        {tutorialStep > 1 && (
                            <button
                                onClick={prevTutorialStep}
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                            >
                                Previous
                            </button>
                        )}
                        <button
                            onClick={nextTutorialStep}
                            className="bg-[#38B6FF] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2AA3F3]"
                        >
                            {tutorialStep < totalTutorialSteps ? "Next" : "Finish"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
