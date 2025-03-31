
import { ChevronDown, CreditCard, Droplet, LayoutGrid, LineChart, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Area,
  Bar,
  CartesianGrid,
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[200px] max-h-full border-r border-gray-200 p-6 flex flex-col">
        <div className="space-y-6 flex-1">
          <Link href="/dashboard" className="pb-2">
            <Image src="/logo.png" alt="Nereus Deep Work" width={200} height={70} />
          </Link>
          <Link href="/dashboard" className="flex items-center text-gray-500 font-medium">
            <LayoutGrid className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/analytics" className="flex items-center text-blue-900 font-medium">
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
      <div className="flex-1 relative">

        {/* Deep Work Statistics */}
        <div className="absolute left-[100px] top-[10px] w-[680px] h-[400px] bg-white border border-[#F3F3F3] rounded-[6px] shadow-sm p-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-semibold">Deep Work Statistics</h1>
            <button className="flex items-center gap-1 px-3 py-1 rounded-md border">
              Weekly <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4 justify-end">
              <div className="w-3 h-3 rounded-full bg-[#7dd3fc]"></div>
              <span>Deep Work</span>
            </div>
            <DeepWorkChart />
          </div>
        </div>

        {/* Top Distractions */}
        <div className="absolute left-[15px] top-[450px] w-[400px] h-[320px] bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium mb-6">Top Distractions Blocked Daily</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Social</span>
              <div className="w-[232px] h-8 bg-[#38B6FF] rounded-md flex items-center justify-center text-white">
                6 hr 2 min
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Text/Email</span>
              <div className="w-[100px] h-8 bg-[#38B6FF] rounded-md flex items-center justify-center text-white">
                34 min
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>TV/Video</span>
              <div className="w-[160px] h-8 bg-[#38B6FF] rounded-md flex items-center justify-center text-white">
                4 hr 43 min
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Sports</span>
              <div className="w-[180px] h-8 bg-[#38B6FF] rounded-md flex items-center justify-center text-white">
                5 hr 12 min
              </div>
            </div>
          </div>
        </div>

        {/* Focus Session Chart */}
        <div className="absolute right-[310px] top-[450px] pb-4 w-[400px] h-[320px] bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium mb-6">Focus Session Hours (By Session Type)</h2>
          <FocusSessionChart />
        </div>

        {/* Right sidebar with stats */}
        <div className="absolute right-0 top-0 w-[300px] border-l border-gray-200 p-6 h-full">
          {/* User profile */}
          <div className="flex items-center mb-8 bg-[#F6FCFE] rounded-[16px] w-[280px] h-[73px] p-3">
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
          <div className="grid grid-rows-1 md:grid-row-3 gap-6">
            {/* Deep Work */}
            <div className="border rounded-lg p-6 text-center">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-4xl font-semibold">2.1</span>
                  <span className="text-sm text-muted-foreground">hr</span>
                </div>
                <CircularProgress value={35} />
              </div>
              <h3 className="mt-4 font-medium">Deep Work</h3>
              <p className="text-sm text-muted-foreground">Hours Today</p>
            </div>

            {/* Deep Work Streak */}
            <div className="border rounded-lg p-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-3xl font-semibold">03</span>
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
            <div className="border rounded-lg p-6">
              <div className="flex items-center">
                <div className="text-[#7dd3fc] mr-2">
                  <Image src="/water.png" alt="Water" width={60} height={40} />
                </div>
                <span className="text-3xl font-semibold">32</span>
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
    <div className="h-64 relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-gray-500">
        <div>10 hr</div>
        <div>8 hr</div>
        <div>6 hr</div>
        <div>4 hr</div>
        <div>2 hr</div>
        <div>1 hr</div>
      </div>

      {/* 4 hours marker */}
      <div className="absolute left-12 right-0 top-[40%] flex items-center">
        <div className="border-l border-dashed border-gray-300 h-full absolute left-[90px] top-[-40px] bottom-0 z-0"></div>
        <div className="absolute left-[70px] top-[-20px] text-xs text-[#7dd3fc] flex items-center">
          <span className="text-[#7dd3fc] mr-1">+</span>4 hours
        </div>
      </div>

      <div className="ml-12 h-full">
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

function FocusSessionChart() {
  const data = [
    { type: "Econ", hours: 2.5, color: "#e0e1f5" },
    { type: "Gaming", hours: 3.2, color: "#ffecd1" },
    { type: "High", hours: 2.8, color: "#d1f7dd" },
    { type: "Development", hours: 3.5, color: "#d1f0f7" },
    { type: "Frontend", hours: 4.2, color: "#ffd1d1" },
    { type: "Gaming", hours: 3.0, color: "#ffecd1" },
    { type: "Development", hours: 5.5, color: "#d1f0f7" },
  ]

  return (
    <div className="h-48 relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-gray-500">
        <div>6 hr</div>
        <div>4 hr</div>
        <div>2 hr</div>
        <div>1 hr</div>
      </div>

      <div className="ml-12 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barSize={30}>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="type"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload, index }) => {
                // Get the color for the current bar
                const color = data[index]?.color || "#6b7280"

                return (
                  <g transform={`translate(${x},${y + 10})`}>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor="middle"
                      fill={color}
                      style={{ fontSize: "10px", writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                      {payload.value}
                    </text>
                  </g>
                )
              }}
            />
            <YAxis hide />
            <Bar
              dataKey="hours"
              radius={[4, 4, 0, 0]}
              fill="#8884d8"
              shape={(props) => {
                const { x, y, width, height, payload } = props
                return <rect x={x} y={y} width={width} height={height} fill={payload.color} rx={4} ry={4} />
              }}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

