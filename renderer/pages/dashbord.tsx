import { ChevronDown, Play, Plus } from 'lucide-react'
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
        <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-x-hidden">
            {/* Left Sidebar */}
            <LeftSide />

            {/* Main + Right Content */}
            <div className="flex flex-col-reverse lg:flex-row flex-1">
                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8 flex justify-center">
                    <div className="max-w-3xl w-full">
                        <h1 className="text-2xl md:text-3xl font-medium text-blue-900 mb-8 text-center">
                            What&apos;s Your Session Goal?
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-4 relative">
                            <div className="relative w-full sm:w-[300px] h-[57px]">
                                {showTutorial && tutorialStep === 1 && (
                                    <>
                                        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 pointer-events-auto" />
                                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-md z-50 pointer-events-none shadow-lg" >
                                            <input
                                                type="text"
                                                value={sessionGoal}
                                                onChange={(e) => setSessionGoal(e.target.value)}
                                                placeholder="Session Goal..."
                                                className="w-full h-full p-4 border border-gray-300 rounded-md z-10 relative bg-white"
                                            />
                                        </div>

                                        <div className="absolute -left-[270px] top-1/2 -translate-y-1/2 z-50 flex items-center">
                                            <div className="bg-white shadow-lg rounded-lg p-4 text-sm font-medium text-center w-[220px]">
                                                Enter your Deep Work
                                                <br />
                                                session goal here
                                                <div className="flex justify-between mt-3">
                                                    <button
                                                        onClick={skipTutorial}
                                                        className="text-xs text-gray-500 hover:text-gray-700"
                                                    >
                                                        Skip
                                                    </button>
                                                    <button
                                                        onClick={nextTutorialStep}
                                                        className="text-xs text-blue-500 hover:text-blue-700"
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="text-[32px] font-bold text-white drop-shadow-md ml-2">→</div>
                                        </div>
                                    </>
                                )}

                                <input
                                    type="text"
                                    value={sessionGoal}
                                    onChange={(e) => setSessionGoal(e.target.value)}
                                    placeholder="Session Goal..."
                                    className="w-full h-full p-4 border border-gray-300 rounded-md z-10 relative bg-white"
                                />
                            </div>




                            <div className="relative">
                                <div className="flex items-center gap-4 relative">
                                    <button
                                        className="w-full sm:w-auto bg-[#38B6FF] text-white px-6 py-4 rounded-lg font-medium text-lg relative z-10"
                                    >
                                        Enter
                                    </button>

                                    {showTutorial && tutorialStep === 2 && (
                                        <div className="absolute top-0 left-0 w-full h-full z-50">
                                            <div className="fixed inset-0 bg-black bg-opacity-70 z-40 pointer-events-auto" />
                                            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-md z-50 pointer-events-none shadow-lg" >


                                                <button
                                                    className="w-full sm:w-auto bg-[#38B6FF] text-white px-6 py-4 rounded-lg font-medium text-lg relative z-10"
                                                >
                                                    Enter
                                                </button>
                                            </div>
                                            <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-50 flex items-center ml-2">
                                                <div className="text-white text-[26px] drop-shadow-md mr-2">←</div>

                                                <div className="bg-white shadow-lg rounded-lg lg:p-4 text-sm font-medium text-center lg:w-[200px] p-2 md:w-[150px] sm:w-[160px] ">
                                                    Press enter for AI to <br />
                                                    block distraction <br />
                                                    categories based on <br />
                                                    your task
                                                    <div className="flex justify-between mt-3">
                                                        <button
                                                            onClick={skipTutorial}
                                                            className="text-xs text-gray-500 hover:text-gray-700"
                                                        >
                                                            Skip
                                                        </button>
                                                        <button
                                                            onClick={nextTutorialStep}
                                                            className="text-xs text-blue-500 hover:text-blue-700"
                                                        >
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>




                        </div>

                        <section className="mb-10 relative">
                            <div className="flex items-center justify-center mb-6">
                                <h2 className="text-xl font-medium text-blue-900">Distractions</h2>
                                <ChevronDown className="ml-2 h-5 w-5 text-blue-900" />
                            </div>

                            {showTutorial && tutorialStep === 3 && (
                                <div className="absolute top-0 left-0 w-full h-full z-50">
                                    {/* Dark overlay */}
                                    <div className="fixed inset-0 bg-black bg-opacity-70 pointer-events-auto" />

                                    <div className="absolute top-[35px] p-3 left-[220px] w-[370px] bg-white h-[140px] border-2 border-blue-500 rounded-lg pointer-events-none shadow-lg z-50" >

                                        <div className="w-full max-w-md mx-auto">
                                            <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                                                {[
                                                    { key: "social", label: "Social" },
                                                    { key: "shopping", label: "Shopping" },
                                                    { key: "textEmail", label: "Text/Email" },
                                                    { key: "sports", label: "Sports" },
                                                    { key: "tvVideo", label: "TV/Video" },
                                                    { key: "news", label: "News" },
                                                ].map((item) => (
                                                    <div key={item.key} className="flex items-center">
                                                        <div
                                                            className={`w-5 h-5 flex items-center justify-center mr-2 cursor-pointer ${distractions[item.key as DistractionKey] ? "bg-[#38B6FF]" : "border border-gray-300 rounded"}`}
                                                            onClick={() => toggleDistraction(item.key as DistractionKey)}
                                                        >
                                                            {distractions[item.key as DistractionKey] && (
                                                                <svg
                                                                    width="12"
                                                                    height="9"
                                                                    viewBox="0 0 12 9"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.00016 6.58597L10.2431 0.342896L11.6573 1.75711L4.00016 9.41426L0.343018 5.75711L1.75723 4.34289L4.00016 6.58597Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-medium">{item.label}</span>

                                                        <button className="ml-1 text-gray-400 hover:text-gray-600">
                                                            <Image src="/1.svg" alt="" width="13" height="15" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="absolute top-[20px] -left-[25px] z-50 flex items-center">
                                        {/* Tooltip box */}
                                        <div className="bg-white shadow-lg rounded-lg p-4 text-sm font-medium text-center w-[210px]">
                                            A check means a <br />
                                            distraction category is <br />
                                            blocked
                                            <div className="flex justify-between mt-3">
                                                <button
                                                    onClick={skipTutorial}
                                                    className="text-xs text-gray-500 hover:text-gray-700"
                                                >
                                                    Skip
                                                </button>
                                                <button
                                                    onClick={nextTutorialStep}
                                                    className="text-xs text-blue-500 hover:text-blue-700"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>

                                        <div className="text-white text-[24px] drop-shadow-md ml-2">→</div>
                                    </div>
                                </div>
                            )}





                            <div className="flex flex-wrap gap-8 justify-center relative left-20">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                                        {["Social", "Shopping", "Text/Email", "Sports", "TV/Video", "News"].map((item) => {
                                            const key = item.toLowerCase().replace("/", "") as DistractionKey;
                                            return (
                                                <div key={item} className="flex items-start">
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
                                            );
                                        })}
                                    </div>
                                </div>


                                {/* Custom Categories Section */}
                                <div className="w-full max-w-md mx-auto mt-1">
                                    <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                                        {customCategories.map((category) => (
                                            <div key={category} className="flex items-center">
                                                <div
                                                    className={`w-5 h-5 flex items-center justify-center mr-2 cursor-pointer ${selectedCategories.includes(category) ? "bg-[#38B6FF]" : "border border-gray-300 rounded"}`}
                                                    onClick={() => toggleCategory(category)}
                                                >
                                                    {selectedCategories.includes(category) && (
                                                        <svg
                                                            width="12"
                                                            height="9"
                                                            viewBox="0 0 12 9"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M4.00016 6.58597L10.2431 0.342896L11.6573 1.75711L4.00016 9.41426L0.343018 5.75711L1.75723 4.34289L4.00016 6.58597Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="text-sm font-medium">{category}</span>
                                                <button onClick={() => removeCategory(category)} className="ml-2 text-red-500">
                                                    <Image src="/delet.svg" alt="" width="13" height="15" />
                                                </button>
                                                <Image src="/1.svg" alt="" width="13" height="15" className="ml-2" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                                <div className="absolute top-0 left-0 w-full h-full z-50">
                                    <div className="fixed inset-0 bg-black bg-opacity-70 pointer-events-auto" />

                                    <div className="absolute -top-[4px] left-[50%] transform -translate-x-1/2 w-[200px] h-[50px] border-2 bg-white border-blue-500 rounded-lg pointer-events-none shadow-lg z-50">
                                        <div key="tablock" className="flex items-center justify-between gap-3 p-2">
                                            <span className="text-sm sm:text-base flex items-center gap-2">
                                                <span className="bg-blue-500 text-white rounded-full w-4 h-4 p-2 flex items-center justify-center text-xs font-bold">!</span>
                                                Tab Lock
                                            </span>

                                            <div
                                                className={`w-10 h-5 rounded-full flex items-center p-0.5 cursor-pointer ${tabLock ? "bg-[#38B6FF]" : "bg-gray-300"}`}
                                                onClick={() => setTabLock(!tabLock)}
                                                aria-label="Toggle tab lock"
                                            >
                                                <div
                                                    className={`w-4 h-4 bg-white rounded-full transform transition-transform ${tabLock ? "translate-x-5" : "translate-x-0"}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -top-[50px] lg:left-[84%] md:left-[86%] sm:left-[84%] transform -translate-x-1/2 z-50 flex items-center">
                                        <div className="text-white text-[20px] sm:text-[30px] lg:p-4 drop-shadow-md mr-3">←</div>

                                        <div className="bg-white shadow-lg rounded-lg p-4 text-xs sm:text-sm font-medium text-center w-[180px] sm:w-[140px] md:w-[170px] ">
                                            Tab lock prevents you <br />
                                            from opening <br />
                                            additional <br />
                                            applications/tabs
                                            <div className="flex justify-between mt-3">
                                                <button
                                                    onClick={skipTutorial}
                                                    className="text-xs sm:text-sm text-gray-500 hover:text-gray-700"
                                                >
                                                    Skip
                                                </button>
                                                <button
                                                    onClick={nextTutorialStep}
                                                    className="text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div key="tablock" className="flex items-center gap-3 p-2">
                                <span className="text-sm sm:text-base flex items-center gap-2">
                                    <span className="bg-blue-500 text-white rounded-full w-4 h-4 p-2 flex items-center justify-center text-xs font-bold">!</span>
                                    Tab Lock
                                </span>
                            </div>
                            <div
                                className={`w-10 h-5 rounded-full flex items-center p-0.5 cursor-pointer ${tabLock ? "bg-[#38B6FF]" : "bg-gray-300"}`}
                                onClick={() => setTabLock(!tabLock)}
                                aria-label="Toggle tab lock"
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full transform transition-transform ${tabLock ? "translate-x-5" : "translate-x-0"}`}
                                />
                            </div>
                        </div>



                        <div className="flex flex-col items-center mb-12 relative">
                            {showTutorial && tutorialStep === 5 && (
                                <div className="absolute top-0 left-0 w-full h-full z-50">
                                    <div className="fixed inset-0 bg-black bg-opacity-70 pointer-events-auto" />

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="relative">

                                            <div className="absolute left-[200px] -top-[30px] z-50 flex items-center">
                                                <div className="text-white text-[24px] drop-shadow-md mr-2">←</div>

                                                <div className="bg-white shadow-lg rounded-lg p-4 text-sm font-medium text-center w-[190px]">
                                                    Set work/rest time and <br />
                                                    start your session!
                                                    <div className="flex justify-between mt-3">
                                                        <button
                                                            onClick={skipTutorial}
                                                            className="text-xs text-gray-500 hover:text-gray-700"
                                                        >
                                                            Skip
                                                        </button>
                                                        <button
                                                            onClick={nextTutorialStep}
                                                            className="text-xs text-blue-500 hover:text-blue-700"
                                                        >
                                                            Finish
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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
                        <div className="space-y-4 lg:hidden">
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

                    <div className="space-y-4 hidden lg:block">
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

            {/* Reset Tutorial Button (for testing) */}
            <button
                onClick={resetTutorial}
                className="fixed bottom-4 right-4 bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs hover:bg-gray-300"
            >
                Reset Tutorial
            </button>
        </div>
    )
}
