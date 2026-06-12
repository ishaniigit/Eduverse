import { Link } from "react-router";
import { AlertCircle, ArrowLeft, BookOpen, ChevronDown, Clock, Compass, Download, TrendingDown, TrendingUp, Users } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export function TeacherAnalytics() {
  const engagementData = [
    { week: "Week 1", active: 245, completed: 180 },
    { week: "Week 2", active: 268, completed: 195 },
    { week: "Week 3", active: 289, completed: 210 },
    { week: "Week 4", active: 312, completed: 245 },
    { week: "Week 5", active: 298, completed: 230 },
    { week: "Week 6", active: 325, completed: 268 },
  ];

  const skillMasteryData = [
    { skill: "Python Basics", mastery: 85 },
    { skill: "Data Structures", mastery: 72 },
    { skill: "OOP", mastery: 68 },
    { skill: "Algorithms", mastery: 54 },
    { skill: "Databases", mastery: 45 },
  ];

  const courseCompletionData = [
    { name: "Completed", value: 68, color: "#10b981" },
    { name: "In Progress", value: 24, color: "#6366f1" },
    { name: "Not Started", value: 8, color: "#e5e7eb" },
  ];

  const strugglingStudents = [
    { name: "Sarah Chen", course: "Data Structures", progress: 23, lastActive: "2 days ago", risk: "high" },
    { name: "Michael Brown", course: "Algorithms", progress: 34, lastActive: "5 days ago", risk: "high" },
    { name: "Emma Davis", course: "OOP Concepts", progress: 45, lastActive: "1 day ago", risk: "medium" },
    { name: "James Wilson", course: "Databases", progress: 38, lastActive: "3 days ago", risk: "medium" },
  ];

  const topPerformers = [
    { name: "Ishani Chakravarty", xp: 2847, streak: 12, completion: 92 },
    { name: "Priya Patel", xp: 2654, streak: 15, completion: 88 },
    { name: "David Lee", xp: 2489, streak: 8, completion: 85 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/5 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-black/60 hover:text-black">
                <ArrowLeft className="size-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
                <p className="text-sm text-black/60">Python Mastery Course • Spring 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-sm text-black/60 hover:text-black">
                <span>Last 30 days</span>
                <ChevronDown className="size-4" />
              </button>
              <button className="flex items-center gap-2 border border-black/10 px-4 py-2 rounded-lg text-sm hover:bg-black/5 transition-colors">
                <Download className="size-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <Users className="size-5 text-black/40" />
              <div className="flex items-center gap-1 text-xs text-emerald-600">
                <TrendingUp className="size-3" />
                +12%
              </div>
            </div>
            <div className="text-3xl font-semibold mb-1">325</div>
            <div className="text-sm text-black/60">Active Students</div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <BookOpen className="size-5 text-black/40" />
              <div className="flex items-center gap-1 text-xs text-emerald-600">
                <TrendingUp className="size-3" />
                +8%
              </div>
            </div>
            <div className="text-3xl font-semibold mb-1">68%</div>
            <div className="text-sm text-black/60">Avg Completion Rate</div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <Clock className="size-5 text-black/40" />
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <TrendingUp className="size-3" />
                +15%
              </div>
            </div>
            <div className="text-3xl font-semibold mb-1">8.5h</div>
            <div className="text-sm text-black/60">Avg Weekly Hours</div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <AlertCircle className="size-5 text-orange-500" />
              <div className="flex items-center gap-1 text-xs text-orange-600">
                <TrendingDown className="size-3" />
                4 students
              </div>
            </div>
            <div className="text-3xl font-semibold mb-1">12</div>
            <div className="text-sm text-black/60">Need Attention</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Engagement Trends */}
          <div className="col-span-2 bg-white border border-black/5 rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Student Engagement</h2>
              <p className="text-sm text-black/60">Active vs. completed lessons over time</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#00000010" />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#00000080" }} />
                <YAxis tick={{ fontSize: 12, fill: "#00000080" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #00000010",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line type="monotone" dataKey="active" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Course Completion */}
          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-1">Completion Status</h2>
              <p className="text-sm text-black/60">Overall course progress</p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={courseCompletionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {courseCompletionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {courseCompletionData.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-black/70">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Mastery */}
        <div className="bg-white border border-black/5 rounded-xl p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Skill Mastery Levels</h2>
            <p className="text-sm text-black/60">Average student proficiency by topic</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={skillMasteryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00000010" />
              <XAxis dataKey="skill" tick={{ fontSize: 12, fill: "#00000080" }} />
              <YAxis tick={{ fontSize: 12, fill: "#00000080" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #00000010",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="mastery" fill="#030213" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Struggling Students */}
          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold mb-1">Students Needing Support</h2>
                <p className="text-sm text-black/60">Low progress or engagement</p>
              </div>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">4 at risk</span>
            </div>
            <div className="space-y-3">
              {strugglingStudents.map((student, i) => (
                <div key={i} className="border border-black/5 rounded-lg p-4 hover:border-black/20 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium mb-0.5">{student.name}</h3>
                      <p className="text-sm text-black/60">{student.course}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        student.risk === "high"
                          ? "bg-red-100 text-red-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {student.risk} risk
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-black/60">Progress: {student.progress}%</span>
                    <span className="text-black/60">Last active: {student.lastActive}</span>
                  </div>
                  <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${student.risk === "high" ? "bg-red-500" : "bg-orange-500"}`}
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                  <button className="mt-3 w-full border border-black/10 py-2 rounded-lg text-sm hover:bg-black/5 transition-colors">
                    Send Check-in
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-1">Top Performers</h2>
              <p className="text-sm text-black/60">Students excelling in the course</p>
            </div>
            <div className="space-y-3">
              {topPerformers.map((student, i) => (
                <div key={i} className="border border-emerald-500/20 bg-emerald-500/5 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      #{i + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{student.name}</h3>
                      <p className="text-xs text-black/60">{student.xp} XP earned</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-black/60 mb-1">Completion</div>
                      <div className="text-lg font-semibold">{student.completion}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-black/60 mb-1">Streak</div>
                      <div className="text-lg font-semibold">{student.streak} days</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-black text-white py-2.5 rounded-lg text-sm hover:bg-black/90 transition-colors">
              View All Students
            </button>
          </div>
        </div>

        {/* Platform Insights */}
        <div className="mt-8 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="size-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Compass className="size-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Learning Insights</h3>
              <p className="text-sm text-black/70 leading-relaxed mb-4">
                Data Structures module shows 28% drop-off rate. Students report difficulty with linked lists. Consider adding interactive visualizations and scheduling a live Q&A session. Students who complete the optional practice problems are 3x more likely to pass the module assessment.
              </p>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View Full Report →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
