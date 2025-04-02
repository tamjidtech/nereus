

import { ChevronDown, CreditCard, LayoutGrid, LineChart, Play, Plus, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SocialDropdown } from "../pages/social-dropdown";

type DistractionKey = "social" | "textEmail" | "tvVideo" | "shopping" | "sports" | "news";

export default function Dashboard() {
    const [sessionGoal, setSessionGoal] = useState("");
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(true);
    const [distractions, setDistractions] = useState({
        social: true,
        textEmail: false,
        tvVideo: false,
        shopping: false,
        sports: false,
        news: true,
    });
    const [tabLock, setTabLock] = useState(false);
    const [customCategories, setCustomCategories] = useState<string[]>([]);

    const [availableCategories, setAvailableCategories] = useState(["Dating", "Adult", "Games", "Gambling", "Politics"]);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [workTime, setWorkTime] = useState("25 : 00");
    const [restTime, setRestTime] = useState("5 : 00");

    const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter((item) => item !== category);
            } else {
                return [...prevSelectedCategories, category];
            }
        });
    };

    const toggleDistraction = (key: DistractionKey) => {
        setDistractions({
            ...distractions,
            [key]: !distractions[key],
        });
    };

    const addCategory = (category: string) => {
        if (!customCategories.includes(category)) {
            setCustomCategories([...customCategories, category]);
            setAvailableCategories(availableCategories.filter((item) => item !== category));
        }
        setShowCategoryDropdown(false);
    };

    const removeCategory = (category: string) => {
        setCustomCategories(customCategories.filter((cat) => cat !== category));
        setAvailableCategories([...availableCategories, category]);
    };

    const handleGeneralSession = () => {
        setWorkTime("25 : 00");
        setRestTime("5 : 00");
        setSessionGoal("General");
    };

    const handleEconSession = () => {
        setWorkTime("35 : 00");
        setRestTime("15 : 00");
        setSessionGoal("Econ");
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Sidebar */}
            <div className="w-[200px] border-r border-gray-200 p-6 flex flex-col">
                <div className="space-y-6 flex-1">
                    <Link href="../home" className="pb-2">
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

            {/* Main Content */}
            <div className="flex-1 p-8 flex flex-col items-center">
                <div className="max-w-3xl w-full">
                    <h1 className="text-3xl font-medium text-blue-900 mb-8 text-center">What&apos;s Your Session Goal?</h1>
                    <div className="flex items-center justify-center mb-12 pl-5 w-full">
                        <input
                            type="text"
                            value={sessionGoal}
                            onChange={(e) => setSessionGoal(e.target.value)}
                            placeholder="Session Goal..."
                            className="w-[300px] h-[57px] p-4 border border-gray-300 rounded-md mr-4"
                        />
                        <button className="bg-[#38B6FF] text-white px-10 py-4 rounded-lg font-medium text-lg">Enter</button>
                    </div>

                    {/* Distractions Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-xl font-medium text-blue-900">Distractions</h2>
                            <ChevronDown className="ml-2 h-5 w-5 text-blue-900" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Static Distractions */}

                            {["Social", "Shopping", "Text/Email", "Sports", "TV/Video", "News"].map((item) => {
                                const key = item.toLowerCase().replace("/", "") as keyof typeof distractions;

                                return (
                                    <div key={item} className="flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            checked={distractions[key]}
                                            onChange={() => toggleDistraction(key)}
                                            className="w-5 h-5 text-[#38B6FF] border-gray-400 rounded-sm focus:ring-2 focus:ring-[#38B6FF] cursor-pointer"
                                        />
                                        <span className="ml-2">{item}</span>

                                        {item === "Social" && (
                                            <div className="relative">
                                                <button onClick={() => setIsSocialDropdownOpen((prev) => !prev)} className="ml-2 focus:outline-none">
                                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.51614 12.137C2.13997 12.137 1.78847 12.0075 1.53564 11.767C1.21497 11.4648 1.0608 11.0085 1.1163 10.5151L1.34447 8.51712C1.38764 8.14096 1.6158 7.64146 1.88097 7.37012L6.9438 2.01129C8.20797 0.673123 9.52764 0.636123 10.8658 1.90029C12.204 3.16446 12.241 4.48412 10.9768 5.82229L5.91397 11.1811C5.65497 11.4586 5.17397 11.7176 4.7978 11.7793L2.81214 12.1185C2.7073 12.1246 2.6148 12.137 2.51614 12.137ZM8.9233 1.89412C8.44847 1.89412 8.03531 2.19012 7.61597 2.63412L2.55314 7.99912C2.4298 8.12862 2.28797 8.43696 2.2633 8.61579L2.03514 10.6138C2.01047 10.8173 2.0598 10.9838 2.1708 11.0886C2.2818 11.1935 2.4483 11.2305 2.6518 11.1996L4.63747 10.8605C4.8163 10.8296 5.1123 10.6693 5.23564 10.5398L10.2985 5.18096C11.0631 4.36696 11.3406 3.61462 10.2245 2.56629C9.73114 2.09146 9.30564 1.89412 8.9233 1.89412Z" fill="#7E92A2" />
                                                        <path d="M9.7928 6.85212C9.78047 6.85212 9.76197 6.85212 9.74964 6.85212C7.82564 6.66096 6.2778 5.19946 5.9818 3.28779C5.9448 3.03496 6.11747 2.80062 6.3703 2.75746C6.62314 2.72046 6.85747 2.89312 6.90064 3.14596C7.13497 4.63829 8.34364 5.78529 9.8483 5.93329C10.1011 5.95796 10.2861 6.18612 10.2615 6.43896C10.2306 6.67329 10.0271 6.85212 9.7928 6.85212Z" fill="#7E92A2" />
                                                        <path d="M12.0498 14.1288H0.949805C0.696971 14.1288 0.487305 13.9191 0.487305 13.6663C0.487305 13.4135 0.696971 13.2038 0.949805 13.2038H12.0498C12.3026 13.2038 12.5123 13.4135 12.5123 13.6663C12.5123 13.9191 12.3026 14.1288 12.0498 14.1288Z" fill="#7E92A2" />
                                                    </svg>

                                                </button>

                                                {isSocialDropdownOpen && <SocialDropdown isOpen={isSocialDropdownOpen} onClose={() => setIsSocialDropdownOpen(false)} />}
                                            </div>
                                        )}
                                        {item !== "Social" && (
                                            <div className="ml-2 cursor-pointer">
                                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.51614 12.137C2.13997 12.137 1.78847 12.0075 1.53564 11.767C1.21497 11.4648 1.0608 11.0085 1.1163 10.5151L1.34447 8.51712C1.38764 8.14096 1.6158 7.64146 1.88097 7.37012L6.9438 2.01129C8.20797 0.673123 9.52764 0.636123 10.8658 1.90029C12.204 3.16446 12.241 4.48412 10.9768 5.82229L5.91397 11.1811C5.65497 11.4586 5.17397 11.7176 4.7978 11.7793L2.81214 12.1185C2.7073 12.1246 2.6148 12.137 2.51614 12.137ZM8.9233 1.89412C8.44847 1.89412 8.03531 2.19012 7.61597 2.63412L2.55314 7.99912C2.4298 8.12862 2.28797 8.43696 2.2633 8.61579L2.03514 10.6138C2.01047 10.8173 2.0598 10.9838 2.1708 11.0886C2.2818 11.1935 2.4483 11.2305 2.6518 11.1996L4.63747 10.8605C4.8163 10.8296 5.1123 10.6693 5.23564 10.5398L10.2985 5.18096C11.0631 4.36696 11.3406 3.61462 10.2245 2.56629C9.73114 2.09146 9.30564 1.89412 8.9233 1.89412Z" fill="#7E92A2" />
                                                    <path d="M9.7928 6.85212C9.78047 6.85212 9.76197 6.85212 9.74964 6.85212C7.82564 6.66096 6.2778 5.19946 5.9818 3.28779C5.9448 3.03496 6.11747 2.80062 6.3703 2.75746C6.62314 2.72046 6.85747 2.89312 6.90064 3.14596C7.13497 4.63829 8.34364 5.78529 9.8483 5.93329C10.1011 5.95796 10.2861 6.18612 10.2615 6.43896C10.2306 6.67329 10.0271 6.85212 9.7928 6.85212Z" fill="#7E92A2" />
                                                    <path d="M12.0498 14.1288H0.949805C0.696971 14.1288 0.487305 13.9191 0.487305 13.6663C0.487305 13.4135 0.696971 13.2038 0.949805 13.2038H12.0498C12.3026 13.2038 12.5123 13.4135 12.5123 13.6663C12.5123 13.9191 12.3026 14.1288 12.0498 14.1288Z" fill="#7E92A2" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}






                            {/* Custom Categories */}
                            {customCategories.map((category) => (
                                <div key={category} className="flex items-center justify-center">
                                    {/* Checkbox for custom category */}
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                        className="w-5 h-5 text-[#38B6FF] border-gray-400 rounded-sm focus:ring-2 focus:ring-[#38B6FF] cursor-pointer"
                                    />
                                    <span className="ml-2">{category}</span>

                                    {/* Remove button */}
                                    <button onClick={() => removeCategory(category)} className="ml-2 text-red-500 hover:text-red-700">
                                        <svg width="15" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.02734 6.29346H4.92952H20.1469"
                                                stroke="#012456"
                                                strokeWidth="1.4837"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.2449 6.29348V19.6087C18.2449 20.1132 18.0445 20.597 17.6878 20.9537C17.331 21.3105 16.8472 21.5109 16.3427 21.5109H6.83186C6.32737 21.5109 5.84355 21.3105 5.48682 20.9537C5.13009 20.597 4.92969 20.1132 4.92969 19.6087V6.29348M7.78295 6.29348V4.39131C7.78295 3.88682 7.98336 3.403 8.34008 3.04627C8.69681 2.68954 9.18063 2.48914 9.68512 2.48914H13.4895C13.994 2.48914 14.4778 2.68954 14.8345 3.04627C15.1912 3.403 15.3916 3.88682 15.3916 4.39131V6.29348"
                                                stroke="#012456"
                                                strokeWidth="1.4837"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9.68457 11.049V16.7555"
                                                stroke="#012456"
                                                strokeWidth="1.4837"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.4893 11.049V16.7555"
                                                stroke="#012456"
                                                strokeWidth="1.4837"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <span className="p-2">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.51614 12.137C3.13997 12.137 2.78847 12.0075 2.53564 11.767C2.21497 11.4648 2.0608 11.0085 2.1163 10.5151L2.34447 8.51712C2.38764 8.14096 2.6158 7.64146 2.88097 7.37012L7.9438 2.01129C9.20797 0.673123 10.5276 0.636123 11.8658 1.90029C13.204 3.16446 13.241 4.48412 11.9768 5.82229L6.91397 11.1811C6.65497 11.4586 6.17397 11.7176 5.7978 11.7793L3.81214 12.1185C3.7073 12.1246 3.6148 12.137 3.51614 12.137ZM9.9233 1.89412C9.44847 1.89412 9.03531 2.19012 8.61597 2.63412L3.55314 7.99912C3.4298 8.12862 3.28797 8.43696 3.2633 8.61579L3.03514 10.6138C3.01047 10.8173 3.0598 10.9838 3.1708 11.0886C3.2818 11.1935 3.4483 11.2305 3.6518 11.1996L5.63747 10.8605C5.8163 10.8296 6.1123 10.6693 6.23564 10.5398L11.2985 5.18096C12.0631 4.36696 12.3406 3.61462 11.2245 2.56629C10.7311 2.09146 10.3056 1.89412 9.9233 1.89412Z"
                                                fill="#7E92A2"
                                            />
                                            <path
                                                d="M10.7928 6.85212C10.7805 6.85212 10.762 6.85212 10.7496 6.85212C8.82564 6.66096 7.2778 5.19946 6.9818 3.28779C6.9448 3.03496 7.11747 2.80062 7.3703 2.75746C7.62314 2.72046 7.85747 2.89312 7.90064 3.14596C8.13497 4.63829 9.34364 5.78529 10.8483 5.93329C11.1011 5.95796 11.2861 6.18612 11.2615 6.43896C11.2306 6.67329 11.0271 6.85212 10.7928 6.85212Z"
                                                fill="#7E92A2"
                                            />
                                            <path
                                                d="M13.0498 14.1288H1.9498C1.69697 14.1288 1.4873 13.9191 1.4873 13.6663C1.4873 13.4135 1.69697 13.2038 1.9498 13.2038H13.0498C13.3026 13.2038 13.5123 13.4135 13.5123 13.6663C13.5123 13.9191 13.3026 14.1288 13.0498 14.1288Z"
                                                fill="#7E92A2"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Add Category Button */}
                        <div className="mt-4 flex justify-center pt-3 relative">
                            <div className="relative">
                                <button
                                    className="flex items-center justify-center w-10 h-10 bg-[#38B6FF] rounded-full text-white"
                                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                                >
                                    <Plus className="h-5 w-5" />
                                </button>

                                {/* Dropdown for Adding Categories */}
                                {showCategoryDropdown && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                        <div className="p-3 text-center text-gray-600 border-b border-gray-200">Add Category</div>
                                        {availableCategories.map((category) => (
                                            <div
                                                key={category}
                                                className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
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
                    </div>

                    {/* Tab Lock Feature */}
                    <div className="mt-6 flex items-center justify-center">
                        <span className="text-sm mr-2">Tab Lock</span>
                        <div
                            className={`w-10 h-5 rounded-full flex items-center p-0.5 cursor-pointer ${tabLock ? "bg-[#38B6FF]" : "bg-gray-300"}`}
                            onClick={() => setTabLock(!tabLock)}
                        >
                            <div
                                className={`w-4 h-4 rounded-full bg-white transform transition-transform ${tabLock ? "translate-x-5" : "translate-x-0"}`}
                            />
                        </div>
                    </div>

                    {/* Work Session Timer */}
                    <div className="mb-8 w-full flex flex-col items-center">
                        <div className="flex items-center justify-between w-full max-w-sm mb-4"></div>

                        <div className="flex items-center justify-center gap-8 mb-6">
                            <div className="flex flex-col items-center">
                                <span className="text-blue-900 text-sm font-medium px-3 py-1 flex items-center gap-2">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.5 0.5L1 9.5H7.75L7 15.5L14.5 6.5H7.75L8.5 0.5Z"
                                            stroke="black"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Work
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.5 0.5L1 9.5H7.75L7 15.5L14.5 6.5H7.75L8.5 0.5Z"
                                            stroke="black"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <div className="flex items-center justify-center px-2 py-3 w-[200px] h-[46px] bg-[#2F4C74] border border-[#9BDFF9] rounded-md">
                                    <span className="text-white text-lg font-medium">{workTime}</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-blue-900 text-sm font-medium px-3 py-1 flex items-center gap-2">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 2.375C5.66498 2.375 4.35994 2.77088 3.2499 3.51258C2.13987 4.25428 1.27471 5.30849 0.763816 6.54189C0.252925 7.77529 0.119252 9.13249 0.379702 10.4419C0.640153 11.7512 1.28303 12.954 2.22703 13.898C3.17104 14.842 4.37377 15.4848 5.68314 15.7453C6.99252 16.0057 8.34972 15.8721 9.58312 15.3612C10.8165 14.8503 11.8707 13.9851 12.6124 12.8751C13.3541 11.7651 13.75 10.46 13.75 9.125C13.748 7.33542 13.0361 5.61972 11.7707 4.35429C10.5053 3.08886 8.78959 2.37705 7 2.375ZM7 14.75C5.88748 14.75 4.79995 14.4201 3.87492 13.802C2.94989 13.1839 2.22892 12.3054 1.80318 11.2776C1.37744 10.2498 1.26604 9.11876 1.48309 8.02762C1.70013 6.93647 2.23586 5.93419 3.02253 5.14752C3.8092 4.36085 4.81148 3.82512 5.90262 3.60808C6.99376 3.39104 8.12476 3.50243 9.1526 3.92818C10.1804 4.35392 11.0589 5.07489 11.677 5.99992C12.2951 6.92494 12.625 8.01248 12.625 9.125C12.6233 10.6163 12.0302 12.0461 10.9756 13.1006C9.9211 14.1552 8.49133 14.7483 7 14.75ZM10.2105 5.91453C10.2628 5.96677 10.3043 6.02881 10.3326 6.0971C10.3609 6.16538 10.3754 6.23858 10.3754 6.3125C10.3754 6.38642 10.3609 6.45962 10.3326 6.5279C10.3043 6.59619 10.2628 6.65823 10.2105 6.71047L7.39797 9.52297C7.34571 9.57523 7.28367 9.61669 7.21538 9.64497C7.1471 9.67325 7.07391 9.68781 7 9.68781C6.92609 9.68781 6.85291 9.67325 6.78463 9.64497C6.71634 9.61669 6.6543 9.57523 6.60204 9.52297C6.54977 9.47071 6.50832 9.40866 6.48003 9.34038C6.45175 9.2721 6.43719 9.19891 6.43719 9.125C6.43719 9.05109 6.45175 8.9779 6.48003 8.90962C6.50832 8.84134 6.54977 8.77929 6.60204 8.72703L9.41454 5.91453C9.46678 5.86223 9.52881 5.82074 9.5971 5.79243C9.66539 5.76413 9.73858 5.74956 9.8125 5.74956C9.88643 5.74956 9.95962 5.76413 10.0279 5.79243C10.0962 5.82074 10.1582 5.86223 10.2105 5.91453ZM4.75 0.6875C4.75 0.538316 4.80927 0.395242 4.91476 0.289752C5.02025 0.184263 5.16332 0.125 5.3125 0.125H8.6875C8.83669 0.125 8.97976 0.184263 9.08525 0.289752C9.19074 0.395242 9.25 0.538316 9.25 0.6875C9.25 0.836684 9.19074 0.979758 9.08525 1.08525C8.97976 1.19074 8.83669 1.25 8.6875 1.25H5.3125C5.16332 1.25 5.02025 1.19074 4.91476 1.08525C4.80927 0.979758 4.75 0.836684 4.75 0.6875Z"
                                            fill="black"
                                        />
                                    </svg>
                                    Rest
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 2.375C5.66498 2.375 4.35994 2.77088 3.2499 3.51258C2.13987 4.25428 1.27471 5.30849 0.763816 6.54189C0.252925 7.77529 0.119252 9.13249 0.379702 10.4419C0.640153 11.7512 1.28303 12.954 2.22703 13.898C3.17104 14.842 4.37377 15.4848 5.68314 15.7453C6.99252 16.0057 8.34972 15.8721 9.58312 15.3612C10.8165 14.8503 11.8707 13.9851 12.6124 12.8751C13.3541 11.7651 13.75 10.46 13.75 9.125C13.748 7.33542 13.0361 5.61972 11.7707 4.35429C10.5053 3.08886 8.78959 2.37705 7 2.375ZM7 14.75C5.88748 14.75 4.79995 14.4201 3.87492 13.802C2.94989 13.1839 2.22892 12.3054 1.80318 11.2776C1.37744 10.2498 1.26604 9.11876 1.48309 8.02762C1.70013 6.93647 2.23586 5.93419 3.02253 5.14752C3.8092 4.36085 4.81148 3.82512 5.90262 3.60808C6.99376 3.39104 8.12476 3.50243 9.1526 3.92818C10.1804 4.35392 11.0589 5.07489 11.677 5.99992C12.2951 6.92494 12.625 8.01248 12.625 9.125C12.6233 10.6163 12.0302 12.0461 10.9756 13.1006C9.9211 14.1552 8.49133 14.7483 7 14.75ZM10.2105 5.91453C10.2628 5.96677 10.3043 6.02881 10.3326 6.0971C10.3609 6.16538 10.3754 6.23858 10.3754 6.3125C10.3754 6.38642 10.3609 6.45962 10.3326 6.5279C10.3043 6.59619 10.2628 6.65823 10.2105 6.71047L7.39797 9.52297C7.34571 9.57523 7.28367 9.61669 7.21538 9.64497C7.1471 9.67325 7.07391 9.68781 7 9.68781C6.92609 9.68781 6.85291 9.67325 6.78463 9.64497C6.71634 9.61669
 6.6543 9.57523 6.60204 9.52297C6.54977 9.47071 6.50832 9.40866 6.48003 9.34038C6.45175 9.2721 6.43719 9.19891 6.43719 9.125C6.43719 9.05109 6.45175 8.9779 6.48003 8.90962C6.50832 8.84134 6.54977 8.77929 6.60204 8.72703L9.41454 5.91453C9.46678 5.86223 9.52881 5.82074 9.5971 5.79243C9.66539 5.76413 9.73858 5.74956 9.8125 5.74956C9.88643 5.74956 9.95962 5.76413 10.0279 5.79243C10.0962 5.82074 10.1582 5.86223 10.2105 5.91453ZM4.75 0.6875C4.75 0.538316 4.80927 0.395242 4.91476 0.289752C5.02025 0.184263 5.16332 0.125 5.3125 0.125H8.6875C8.83669 0.125 8.97976 0.184263 9.08525 0.289752C9.19074 0.395242 9.25 0.538316 9.25 0.6875C9.25 0.836684 9.19074 0.979758 9.08525 1.08525C8.97976 1.19074 8.83669 1.25 8.6875 1.25H5.3125C5.16332 1.25 5.02025 1.19074 4.91476 1.08525C4.80927 0.979758 4.75 0.836684 4.75 0.6875Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>

                                <div className="flex items-center justify-center w-[203px] h-[40px] bg-[#2F4C74] border border-[#9BDFF9] rounded-md px-2 py-3">
                                    <span className="text-white text-lg font-medium">{restTime}</span>
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#38B6FF] text-white py-4 px-6 rounded-lg font-medium text-lg shadow-md hover:bg-[#1E90FF] transition">
                            Start Session (+30)
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[300px] border-l border-gray-200 p-6 transform -translate-x-8">
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

                <div className="flex items-center justify-center pl-6 gap-12 mb-8">

                    <div className="flex items-center justify-center text-xl font-medium text-center ">
                        <span className="p-2">3</span>

                        <svg width="20" height="25" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="33" rx="15" fill="#E9F8FE" />
                            <path d="M20.0913 17.6448L20.0914 17.6451L20.1009 17.7767L20.1009 17.7768L20.0913 17.6448ZM20.0913 17.6448C19.9355 15.6165 18.9901 14.3439 18.166 13.2346L18.1642 13.2321C17.3992 12.2023 16.7566 11.334 16.7566 10.0532C16.7566 9.91991 16.682 9.7983 16.5639 9.73734M20.0913 17.6448L16.5296 9.80376M11.9878 14.4878C11.9798 14.4326 11.959 14.38 11.9269 14.3344C11.8948 14.2886 11.8525 14.2511 11.8032 14.2247L11.8026 14.2244C11.7031 14.1724 11.5845 14.1679 11.4814 14.2187C11.4421 14.2377 11.0632 14.432 10.6838 14.9857C10.3043 15.5396 9.92736 16.4489 9.88577 17.8927L11.9139 14.4987M11.9878 14.4878C11.9878 14.4879 11.9878 14.4879 11.9879 14.488M11.9878 14.4878L11.9878 14.4878L11.9139 14.4987M11.9878 14.4878L11.9879 14.4879L11.9879 14.488M11.9879 14.488L11.9139 14.4987M11.9879 14.488L11.9879 14.4883L11.9881 14.4894L11.9887 14.4935L11.9912 14.5086C11.9935 14.5217 11.9968 14.5405 12.0015 14.5644C12.0108 14.6123 12.0253 14.6801 12.0462 14.762C12.088 14.9259 12.1551 15.1446 12.2568 15.3697C12.4502 15.7979 12.7606 16.2316 13.2447 16.3756M11.9139 14.4987C11.9165 14.5169 12.1642 16.1524 13.2441 16.4532C13.2442 16.4278 13.2444 16.4019 13.2447 16.3756M13.2447 16.3756C13.2518 15.6394 13.2923 14.569 13.5345 13.6102L13.5345 13.6101C13.8998 12.1678 14.9432 10.66 16.1949 9.76434L16.2384 9.82513M13.2447 16.3756C13.2691 16.3828 13.294 16.3894 13.3193 16.3951C13.3259 15.6595 13.365 14.5865 13.6069 13.6285L16.2384 9.82513M16.2384 9.82513L16.1944 9.76467C16.3027 9.68595 16.4455 9.67609 16.5639 9.73734M16.2384 9.82513C16.3235 9.76324 16.436 9.75531 16.5296 9.80376M16.5639 9.73734L16.5296 9.80376M16.5639 9.73734C16.564 9.73736 16.564 9.73737 16.564 9.73738L16.5296 9.80376M13.395 20.7706L13.3949 20.7706C13.3929 20.8062 13.3929 20.8357 13.3929 20.8666L13.3929 20.8754C13.3929 21.8266 14.1182 22.5923 15 22.5923C15.8818 22.5923 16.6071 21.8266 16.6071 20.8754C16.6071 20.8266 16.6038 20.7807 16.6002 20.7323L16.6002 20.7322C16.5429 19.9414 16.2186 19.4793 15.8951 19.0195L15.8951 19.0195L15.8925 19.0158C15.6917 18.7304 15.4803 18.4299 15.35 18.07C15.1297 18.3562 14.9593 18.6925 14.8836 19.0084C14.7865 19.4143 14.778 19.8666 14.778 20.266C14.778 20.266 14.778 20.2661 14.778 20.2661L13.395 20.7706ZM13.395 20.7706L13.395 20.7682C13.4034 20.4595 13.4497 20.2273 13.5073 20.0551M13.395 20.7706L13.5073 20.0551M13.5073 20.0551C13.6874 20.3595 13.9799 20.6211 14.4229 20.6211C14.4696 20.6212 14.5157 20.612 14.5588 20.5942L13.5073 20.0551ZM14.0842 19.6223C14.1 19.3748 14.1312 19.1016 14.1929 18.8431L14.1929 18.843C14.3535 18.1732 14.8117 17.4745 15.3631 17.0579L15.4082 17.1176L15.3629 17.058C15.4156 17.0181 15.4783 16.9936 15.5442 16.9875C15.61 16.9813 15.6762 16.9938 15.7353 17.0233M14.0842 19.6223L13.9536 16.7806C13.9536 16.7806 13.9536 16.7806 13.9536 16.7805C13.9536 15.8423 13.9749 14.7668 14.2231 13.7842C14.4933 12.7171 15.218 11.5635 16.1029 10.7533C16.2922 11.9036 16.932 12.7645 17.5903 13.6502L17.5942 13.6555C17.5942 13.6555 17.5942 13.6555 17.5942 13.6555C18.4112 14.7552 19.2434 15.8773 19.3831 17.6957L19.3927 17.8294L19.3927 17.8297L19.3934 17.8396C19.402 17.9532 19.4103 18.0638 19.4103 18.1821C19.4102 19.9024 18.4193 21.3951 16.9784 22.1216C17.1908 21.7577 17.3172 21.3334 17.3172 20.8754C17.3172 20.8063 17.3129 20.7423 17.3047 20.6281L17.3047 20.628C17.2367 19.6918 16.8285 19.1119 16.477 18.6124L16.4758 18.6108L16.4758 18.6107C16.1748 18.1833 15.9321 17.8348 15.9321 17.3412C15.9321 17.2064 15.8559 17.0833 15.7353 17.0233M14.0842 19.6223C14.0578 19.567 14.0362 19.5094 14.0189 19.4551C13.9847 19.348 13.97 19.2622 13.9675 19.2478C13.9673 19.2467 13.9672 19.246 13.9671 19.2458L13.9672 19.2458L13.9668 19.243C13.959 19.1868 13.9378 19.1332 13.9051 19.0869C13.8723 19.0405 13.829 19.0026 13.7786 18.9765L13.7785 18.9764C13.6774 18.924 13.5558 18.9223 13.453 18.9751C13.453 18.9752 13.4529 18.9752 13.4529 18.9752L13.4871 19.0417L14.0842 19.6223ZM15.7353 17.0233L15.7019 17.0902L15.7352 17.0232C15.7352 17.0233 15.7353 17.0233 15.7353 17.0233ZM13.0217 22.1216C11.5808 21.3951 10.5899 19.9024 10.5899 18.1821L10.5899 18.1721C10.5899 18.0912 10.5899 18.0127 10.5952 17.9256L10.5952 17.9256L10.5953 17.9231C10.639 16.3977 11.0895 15.5858 11.4238 15.1893C11.5539 15.6026 11.7694 16.0603 12.0928 16.4282C12.4516 16.8366 12.945 17.1356 13.5985 17.1357C13.6451 17.1357 13.6913 17.1265 13.7344 17.1087C13.7775 17.0909 13.8167 17.0647 13.8496 17.0317C13.8826 16.9987 13.9088 16.9596 13.9266 16.9165L13.0217 22.1216ZM13.0217 22.1216C12.8092 21.7577 12.6828 21.3334 12.6828 20.8755C12.6828 20.8316 12.6831 20.7859 12.6856 20.7396L13.0217 22.1216Z" fill="#2EC1FF" stroke="#2EC1FF" stroke-width="0.149504" />
                        </svg>
                    </div>



                    <div className="text-center">
                        <div className="text-xl font-medium">$532</div>
                    </div>

                    <div className="flex items-center text-[#38B6FF]">
                        <Image src="/water.png" alt="Water" width={58} height={36} />
                    </div>
                </div>

                <div className="flex w-[211px] h-[305px] top-[100px] pl-12 justify-center items-center">
                    <div className="mb-8 p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                        <div className="relative flex justify-center items-center mb-2">
                            <div className="w-36 h-36 rounded-full border-[20px] border-[#D6EFFF] flex items-center justify-center shadow-md">
                                <div className="text-center">
                                    <div className="text-3xl font-medium">2.1</div>
                                    <div className="text-sm">hr</div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-36">
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

                <div className="flex flex-col gap-4 items-center ml-8">
                    <h2 className="text-center text-xl font-medium text-gray-900">Recent Sessions</h2>

                    <div
                        className="flex flex-col p-4 bg-[#FCFEFE] border border-[#F3F3F3] rounded-md w-[306px] h-auto gap-2 shadow-md 
            transition-transform duration-300 hover:scale-105"
                    >
                        <div
                            className="flex items-center justify-between mb-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                            onClick={handleGeneralSession}
                        >
                            <div>General</div>
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-2">25:5</span>
                                <div className="w-8 h-8 rounded-full border border-blue-900 flex items-center justify-center">
                                    <Play className="h-4 w-4 text-blue-900 ml-0.5 fill-black" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col p-4 bg-[#FCFEFE] border border-[#F3F3F3] rounded-md w-[306px] h-auto gap-2 shadow-md 
            transition-transform duration-300 hover:scale-105"
                    >
                        <div
                            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                            onClick={handleEconSession}
                        >
                            <div>Econ</div>
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-2">35:15</span>
                                <div className="w-8 h-8 rounded-full border border-blue-900 flex items-center justify-center">
                                    <Play className="h-4 w-4 text-blue-900 ml-0.5 fill-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

