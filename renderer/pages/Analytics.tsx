import { ChevronDown, CreditCard, Droplet, LayoutGrid, LineChart, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sidebar - hidden on mobile, shown on md and up */}
      <div className="hidden md:flex w-[200px] border-r border-gray-200 p-6 flex-col h-screen sticky top-0">
        <div className="space-y-6 flex-1">
          <Link href="/dashbord" className="pb-2 block">
            <Image src="/logo.png" alt="Nereus Deep Work" width={200} height={70} />
          </Link>
          <Link href="/dashbord" className="flex items-center text-gray-500 font-medium">
            <LayoutGrid className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/Analytics" className="flex items-center text-blue-900 font-medium">
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

      {/* Mobile navigation */}
      <div className="flex md:hidden items-center justify-between p-4 border-b border-gray-200">
        <Link href="/dashbord" className="block">
          <Image src="/logo.png" alt="Nereus Deep Work" width={120} height={40} />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/dashbord">
            <LayoutGrid className="h-6 w-6 text-gray-500" />
          </Link>
          <Link href="/Analytics">
            <LineChart className="h-6 w-6 text-blue-900" />
          </Link>
          <Link href="/premium">
            <CreditCard className="h-6 w-6 text-gray-500" />
          </Link>
          <Link href="/settings">
            <Settings className="h-6 w-6 text-gray-500" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Right sidebar with stats - appears first on mobile/tablet */}
          <div className="w-full lg:w-[300px] lg:order-last lg:border-l border-gray-200 lg:pl-6">
            {/* User profile */}
            <div className="flex items-center mb-8 bg-[#F6FCFE] rounded-[16px] p-3">
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

            {/* Today's deep work */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6 mb-6 lg:mb-0">
              {/* Deep Work */}
              <div className="border rounded-lg p-4 md:p-6 text-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl md:text-4xl font-semibold">2.1</span>
                    <span className="text-sm text-muted-foreground">hr</span>
                  </div>
                  <CircularProgress value={35} />
                </div>
                <h3 className="mt-4 font-medium">Deep Work</h3>
                <p className="text-sm text-muted-foreground">Hours Today</p>
              </div>

              {/* Deep Work Streak */}
              <div className="border rounded-lg p-4 md:p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl md:text-3xl font-semibold">03</span>
                    <span className="text-sm text-muted-foreground ml-1">day</span>
                  </div>
                  <Droplet className="h-5 w-5 text-[#7dd3fc]" />
                </div>
                <p className="mt-2 text-sm">
                  Deep
                  <br />
                  Work Streak
                </p>
              </div>

              {/* Bottles Removed */}
              <div className="border rounded-lg p-4 md:p-6">
                <div className="flex items-center">
                  <div className="text-[#7dd3fc] mr-2">
                    <Image src="/water.png" alt="Water" width={60} height={40} />
                  </div>
                </div>
                <p className="mt-2 text-sm">
                  Bottles
                  <br />
                  removed from
                  <br />
                  the ocean
                </p>
              </div>
            </div>
          </div>

          {/* Left and center content */}
          <div className="flex-1 space-y-4">
            {/* Deep Work Statistics */}
            <div className="bg-white border border-[#F3F3F3] rounded-[6px] shadow-sm p-4 md:p-6 lg:p-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-4">
                <h1 className="text-xl md:text-2xl font-semibold mb-2 sm:mb-0">Deep Work Statistics</h1>
                <button className="flex items-center gap-1 px-3 py-1 rounded-md border">
                  Weekly <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-2 md:mt-6">
                <div className="flex items-center gap-2 mb-4 justify-end">
                  <div className="w-3 h-3 rounded-full bg-[#7dd3fc]"></div>
                  <span>Deep Work</span>
                </div>
                <DeepWorkChart />
              </div>
            </div>

            {/* Charts row */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Top Distractions */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg flex-1">
                <h2 className="text-sm font-medium mb-4 pb-2 text-center">Top Distractions Blocked Daily</h2>
                <div className="space-y-4 md:space-y-6">
                  {/* Social */}
                  <div className="flex items-center">
                    <span className="w-20 text-xs">Social</span>
                    <div className="relative w-full bg-[#EDF8FF] h-6 rounded-md">
                      <div className="w-[70%] h-full bg-[#38B6FF] rounded-md flex items-center justify-center text-white text-xs shadow-md">
                        6 hr 2 min
                      </div>
                    </div>
                  </div>

                  {/* Text/Email */}
                  <div className="flex items-center">
                    <span className="w-20 text-xs">Text/Email</span>
                    <div className="relative w-full bg-[#EDF8FF] h-6 rounded-md">
                      <div className="w-[30%] h-full bg-[#38B6FF] rounded-md flex items-center justify-center text-white text-xs shadow-md">
                        34 min
                      </div>
                    </div>
                  </div>

                  {/* TV/Video */}
                  <div className="flex items-center">
                    <span className="w-20 text-xs">TV/Video</span>
                    <div className="relative w-full bg-[#EDF8FF] h-6 rounded-md">
                      <div className="w-[55%] h-full bg-[#38B6FF] rounded-md flex items-center justify-center text-white text-xs shadow-md">
                        4 hr 43 min
                      </div>
                    </div>
                  </div>

                  {/* Sports */}
                  <div className="flex items-center">
                    <span className="w-20 text-xs">Sports</span>
                    <div className="relative w-full bg-[#EDF8FF] h-6 rounded-md">
                      <div className="w-[60%] h-full bg-[#38B6FF] rounded-md flex items-center justify-center text-white text-xs shadow-md">
                        5 hr 12 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus Session Chart */}
              <div className="flex-1">
                <FocusSessionChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CircularProgress({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 50
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <svg className="w-full h-full" viewBox="0 0 120 120">
      <circle
        className="text-[#e6f4ff]"
        strokeWidth="12"
        stroke="currentColor"
        fill="transparent"
        r="50"
        cx="60"
        cy="60"
      />
      <circle
        className="text-[#7dd3fc]"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r="50"
        cx="60"
        cy="60"
        style={{
          transformOrigin: "center",
          transform: "rotate(-90deg)",
        }}
      />
    </svg>
  )
}

function DeepWorkChart() {
  const data = [
    { day: "Sun", hours: 1.2, label: "Sun" },
    { day: "Mon", hours: 4, label: "Mon", active: true },
    { day: "Tue", hours: 2.5, label: "Tue" },
    { day: "Wed", hours: 6, label: "Wed" },
    { day: "Thu", hours: 8, label: "Thu" },
    { day: "Fri", hours: 5, label: "Fri" },
    { day: "Sat", hours: 7, label: "Sat" },
  ]

  return (
    <div className="h-48 md:h-64 relative">
      {/* Y-axis labels - hidden on small screens */}
      <div className="absolute left-0 top-0 bottom-0 hidden sm:flex flex-col justify-between text-sm text-gray-500">
        <div>10 hr</div>
        <div>8 hr</div>
        <div>6 hr</div>
        <div>4 hr</div>
        <div>2 hr</div>
        <div>1 hr</div>
      </div>

      {/* 4 hours marker */}
      <div className="absolute left-0 sm:left-12 right-0 top-[40%] flex items-center">
        <div className="border-l border-dashed border-gray-300 h-full absolute left-[60px] sm:left-[90px] top-[-40px] bottom-0 z-0"></div>
        <div className="absolute left-[40px] sm:left-[70px] top-[-20px] text-xs text-[#7dd3fc] flex items-center">
          <span className="text-[#7dd3fc] mr-1">+</span>4 hours
        </div>
      </div>

      <div className="ml-0 sm:ml-12 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7dd3fc" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#7dd3fc" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => (
                <text x={x} y={y + 15} fill={payload.value === "Mon" ? "#38B6FF" : "#6b7280"} textAnchor="middle">
                  {payload.value}
                </text>
              )}
            />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#7dd3fc"
              strokeWidth={2}
              fill="url(#colorHours)"
              dot={(props) => {
                const { cx, cy, payload } = props
                if (payload.active) {
                  return <circle cx={cx} cy={cy} r={4} fill="#ffffff" stroke="#7dd3fc" strokeWidth={2} />
                }
                return null
              }}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const data = [
  { type: "Econ", hours: 4.5, color: "#e0e1f5", textColor: "#717EEE" },
  { type: "Gaming", hours: 4.8, color: "#ffecd1", textColor: "#FFB057" },
  { type: "High", hours: 3.6, color: "#d1f7dd", textColor: "#68CD80" },
  { type: "Development", hours: 4.2, color: "#d1f0f7", textColor: "#37B8FC" },
  { type: "Frontend", hours: 5.1, color: "#ffd1d1", textColor: "#FF576B" },
  { type: "Gaming", hours: 4.0, color: "#ffecd1", textColor: "#FFB057" },
  { type: "Development", hours: 6.0, color: "#d1f0f7", textColor: "#37B8FC" },
]

function FocusSessionChart() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md h-full">
      <h2 className="text-sm md:text-lg font-medium mb-2 md:mb-4 text-center">Focus Session Hours (By Session Type)</h2>
      <div className="h-36 md:h-48 w-full flex">
        <div className="flex flex-col pt-2 justify-between text-xs text-gray-500 font-bold h-full">
          <div className="flex items-center justify-start whitespace-nowrap" style={{ height: "16.66%" }}>
            <span>6 hr</span>
          </div>
          <div className="flex items-center justify-start whitespace-nowrap" style={{ height: "16.66%" }}>
            <span>4 hr</span>
          </div>
          <div className="flex items-center justify-start whitespace-nowrap" style={{ height: "16.66%" }}>
            <span>2 hr</span>
          </div>
          <div className="flex items-center justify-start whitespace-nowrap" style={{ height: "16.66%" }}>
            <span>1 hr</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10 }} barSize={30} maxBarSize={30}>
            <XAxis dataKey="type" axisLine={false} tickLine={false} tick={false} />
            <YAxis domain={[0, 6]} ticks={[1, 2, 4, 6]} hide />
            <Bar
              dataKey="hours"
              radius={[6, 6, 0, 0]}
              shape={(props) => {
                const { x, y, width, height, payload } = props
                return (
                  <g>
                    <rect x={x} y={y} width={width} height={height} fill={payload.color} rx={6} ry={6} />
                    <text
                      x={x + width / 2}
                      y={y + height / 2}
                      textAnchor="middle"
                      dy={5}
                      fontSize={12}
                      fill={payload.textColor}
                      fontWeight="bold"
                      transform={`rotate(270, ${x + width / 2}, ${y + height / 2})`}
                    >
                      {payload.type}
                    </text>
                  </g>
                )
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

