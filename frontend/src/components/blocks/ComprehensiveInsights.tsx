import { CheckCircle, TrendingUp, BarChart3 } from "lucide-react";

export function ComprehensiveInsights() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      {/* Badge */}
      <div className="mb-4 flex justify-center">
        <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-900 font-medium text-sm shadow flex items-center gap-2">
          <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#64748b" strokeWidth="2"/><path d="M5 9h8M9 5v8" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/></svg>
          Live Oversight
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 mb-2 text-center">Comprehensive Insights</h1>
      <p className="text-gray-600 text-lg mb-10 text-center">
        Track every campaign and customer interaction to refine engagement strategies
      </p>
      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
        {/* Left Card */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between min-h-[380px]">
          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <div className="text-gray-400 text-sm mb-1">Total Spent</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$682.5</div>
            {/* Bar Chart */}
            <svg width="100%" height="120" viewBox="0 0 340 120" className="mb-2">
              {/* Dotted line */}
              <line x1="0" y1="40" x2="340" y2="40" stroke="#7dd3fc" strokeDasharray="6 6" strokeWidth="2"/>
              {/* Bars */}
              <rect x="20" y="60" width="24" height="40" rx="6" fill="#e5e7eb"/>
              <rect x="60" y="45" width="24" height="55" rx="6" fill="#e5e7eb"/>
              <rect x="100" y="55" width="24" height="45" rx="6" fill="#e5e7eb"/>
              <rect x="140" y="65" width="24" height="35" rx="6" fill="#e5e7eb"/>
              <rect x="180" y="30" width="24" height="70" rx="6" fill="#6366f1"/>
              <rect x="220" y="55" width="24" height="45" rx="6" fill="#e5e7eb"/>
              <rect x="260" y="40" width="24" height="60" rx="6" fill="#e5e7eb"/>
              <rect x="300" y="65" width="24" height="35" rx="6" fill="#e5e7eb"/>
              {/* Months */}
              <text x="22" y="115" fontSize="12" fill="#a3a3a3">Jan</text>
              <text x="62" y="115" fontSize="12" fill="#a3a3a3">Feb</text>
              <text x="102" y="115" fontSize="12" fill="#a3a3a3">Mar</text>
              <text x="142" y="115" fontSize="12" fill="#a3a3a3">Apr</text>
              <text x="182" y="115" fontSize="12" fill="#a3a3a3">May</text>
              <text x="222" y="115" fontSize="12" fill="#a3a3a3">Jun</text>
              <text x="262" y="115" fontSize="12" fill="#a3a3a3">Jul</text>
              <text x="302" y="115" fontSize="12" fill="#a3a3a3">Aug</text>
            </svg>
          </div>
          <div className="flex items-start gap-3 mt-2">
            <BarChart3 className="w-12 h-12 text-violet-500 mt-1" />
            <div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">Real-Time Insights</div>
              <div className="text-gray-600 text-base text-lg">
                Monitor your campaigns in real time to ensure maximum effectiveness and identify areas for improvement
              </div>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between min-h-[380px]">
          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-900 font-semibold text-lg">Balance</span>
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-medium text-sm">On track</span>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="bg-white rounded-xl px-4 py-2 shadow text-center">
                <div className="text-gray-400 text-xs">Saves</div>
                <div className="text-2xl font-bold text-gray-900">43.50%</div>
                <div className="text-green-500 text-xs font-semibold">+2.45%</div>
              </div>
              <div className="bg-white rounded-xl px-4 py-2 shadow text-center">
                <div className="text-gray-400 text-xs">Balance</div>
                <div className="text-2xl font-bold text-gray-900">$52,422</div>
                <div className="text-red-500 text-xs font-semibold">-4.75%</div>
              </div>
            </div>
            {/* Line Chart */}
            <svg width="100%" height="60" viewBox="0 0 320 60">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a5b4fc" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3"
                points="0,40 40,50 80,30 120,45 160,20 200,50 240,35 280,55 320,30"
              />
            </svg>
          </div>
          <div className="flex items-start gap-3 mt-2">
            <TrendingUp className="w-12 h-12 text-purple-600 mt-1" />
            <div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">Actionable Data</div>
              <div className="text-gray-600 text-base text-lg">
                Leverage analytics to enhance workflows, boost engagement, and make informed marketing decisions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}