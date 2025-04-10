import { CreditCard, LayoutGrid, LineChart, Menu, Settings, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const LeftSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row lg:min-h-screen bg-white relative">

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

        </div>
    )
}

export default LeftSidebar;
