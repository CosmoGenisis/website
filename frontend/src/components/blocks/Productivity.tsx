import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Hourglass, ChartAreaIcon, MessageCircle } from "lucide-react"

export default function Productivity() {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              How Our <span className="text-blue-600">Tool Enhances</span>
              <br />
              Team <span className="text-gray-700">Productivity</span>
            </h1>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Boost your team's efficiency and collaboration effortlessly with our intuitive and powerful platform,
              designed for success.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-8 justify-items-center">
          {/* Manage Projects Card */}
          <Card className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
            <CardContent className="p-0 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
              {/* Mock UI for User List Menu */}
              <div className="mb-6">
                <img
                  src="https://framerusercontent.com/images/jJ74tYvFz8uCvLrQT3gH6Lkm5G8.png"
                  alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                  className="w-full h-50 object-cover rounded-2xl"
                />
              </div>
              </CardContent>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">
                  Manage <span className="text-blue-600">Projects</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Organize tasks, establish deadlines, and assign responsibilities to ensure everyone is on the same
                  page.
                </p>
              </div>
          </Card>

          {/* Collaborate Instantly Card */}
          <Card className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
            <CardContent className="p-0 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
              {/* Mock UI for Live Collaboration */}
              <div className="mb-6">
                <img
                  src="https://framerusercontent.com/images/IYIJmUicy668ZHCB8Ot6T3ytcU.png"
                  alt="Live collaboration interface showing real-time updates and team communications"
                  className="w-full h-50 object-cover rounded-2xl"
                />
              </div>
              </CardContent>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">
                  Collaborate <span className="text-blue-600">Instantly</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Work together in real-time, share updates instantly, and communicate seamlessly across departments.
                </p>
              </div>
          </Card>

          {/* Analyze Performance Card */}
          <Card className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
            <CardContent className="p-0 bg-white border-2 border-black rounded-3xl flex flex-col justify-between">
              {/* Mock UI for Performance Dashboard */}
              <div className="mb-6">
                <img
                  src="https://framerusercontent.com/images/fWtVyxIqdx14eVmo7xyCGQpb4os.png"
                  alt="Performance analytics dashboard with charts, metrics, and data visualization"
                  className="w-full h-50 object-cover rounded-2xl"
                />
              </div>
              </CardContent>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">
                  Analyze <span className="text-blue-600">Performance</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Track progress, identify bottlenecks, and make data-driven decisions to improve overall team
                  performance.
                </p>
              </div>
          </Card>
        </div>


        {/* Content Scheduling and Real Time Analysis */}
        <div className="grid grid-cols-2 gap-8 justify-items-center mt-20">
          {/* Real Time Analysis Card (right, 2 columns) */}
          <Card className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between w-full relative">
            {/* Sandglass Icon */}
            <div className="absolute top-4 right-4">
              <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                 <Hourglass size={28} className="text-orange-500" />
                 </div>
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-3">
                Real Time <span className="text-blue-600">Analytics</span>
              </h2>
              <p className="text-grey-600 text-lg leading-relaxed">
                Monitor result performance with real time insights.
              </p>
            </div>
            <CardContent className="h-80 p-0 flex items end">
              <div className="mt-6 rounded-2xl p-4 flex items-end h-full">
                <img
                  src="https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png"
                  alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Scheduling Card (left, 1 column) */}
          <Card className="col-span-1 p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between w-full relative">
            {/* Calendar Icon */}
            <div className="absolute top-4 right-4">
              <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                <Calendar size={28} className="text-orange-500" />
                </div>
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-3">
                Content <span className="text-blue-600">Scheduling</span>
              </h2>
              <p className="text-grey-600 text-lg leading-relaxed">
                Plan and schedule content across all platforms.
              </p>
            </div>
            <CardContent className="h-80 p-0 flex items end">
              <div className="mt-6 rounded-2xl p-4 flex items-end h-full">
                <img
                  src="https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png"
                  alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Content Scheduling and Real Time Analysis */}
        <div className="col-span-3 gap-8 justify-items-center mt-20">
          {/* Real Time Analysis Card (right, 2 columns) */}
          <Card className="p-6 bg-white border-2 border-black rounded-3xl flex flex-col justify-between w-full relative">
            {/* chat Icon */}
            <div className="absolute top-4 right-4">
              <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                <MessageCircle size={28} className="text-orange-500" />
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-3">
                Streamline <span className="text-blue-600">Comunication</span>
              </h2>
              <p className="text-grey-600 text-lg leading-relaxed">
                Manage conversations for smooth coordination.
              </p>
            </div>
            <CardContent className="h-90 p-0 flex items end">
              <div className="mt-6 rounded-2xl p-4 flex items-end h-full w-full">
                <img
                  src="https://framerusercontent.com/images/jg8cLHHFSZlOGSdg3rGKij2x6s.png"
                  alt="Project management interface showing task lists, progress bars, and team collaboration tools"
                  className="w-full h-90 object-cover rounded-2xl"
                />
              </div>
            </CardContent>
          </Card>
          </div>
      </div>
    </div>
  )
}
