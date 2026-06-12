import { Link } from "react-router";
import { ArrowRight, BookOpen, Calendar, Clock, Compass, Flame, GraduationCap, Menu, Target, TrendingUp } from "lucide-react";

export function StudentDashboard() {
  const currentStreak = 12;
  const weeklyGoal = 15;
  const hoursThisWeek = 12;

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-black/5 bg-white z-40">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="size-8 bg-black rounded-lg flex items-center justify-center">
              <GraduationCap className="size-4 text-white" />
            </div>
            <span className="font-semibold">EduVerse</span>
          </div>

          <nav className="space-y-1">
            {[
              { name: "Dashboard", icon: Menu, active: true, path: "/dashboard" },
              { name: "Skill Tree", icon: Target, active: false, path: "/skill-tree" },
              { name: "Learning Guide", icon: Compass, active: false, path: "/mentor" },
              { name: "Career Path", icon: TrendingUp, active: false, path: "/roadmap" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active ? "bg-black text-white" : "text-black/60 hover:bg-black/5"
                }`}
              >
                <item.icon className="size-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-black/5">
            <div className="bg-black/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="size-4 text-orange-500" />
                <span className="text-sm font-medium">{currentStreak} Day Streak</span>
              </div>
              <p className="text-xs text-black/60">Keep it going! You're on fire 🔥</p>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-black/5">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium">
              IC
            </div>
            <div>
              <div className="text-sm font-medium">Ishani Chakravarty</div>
              <div className="text-xs text-black/40">Level 8 Learner</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Welcome back, Ishani</h1>
          <p className="text-black/60">Let's continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="size-5 text-black/40" />
              <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+3h this week</span>
            </div>
            <div className="text-2xl font-semibold mb-1">{hoursThisWeek}h</div>
            <div className="text-xs text-black/60">Learning Time</div>
            <div className="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
              <div className="h-full bg-black" style={{ width: `${(hoursThisWeek / weeklyGoal) * 100}%` }} />
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="size-5 text-black/40" />
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">4 active</span>
            </div>
            <div className="text-2xl font-semibold mb-1">8/12</div>
            <div className="text-xs text-black/60">Skills Mastered</div>
            <div className="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: "67%" }} />
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Flame className="size-5 text-orange-500" />
              <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Personal best!</span>
            </div>
            <div className="text-2xl font-semibold mb-1">{currentStreak}</div>
            <div className="text-xs text-black/60">Day Streak</div>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1 rounded-full ${i < 7 ? "bg-orange-500" : "bg-black/5"}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="size-5 text-black/40" />
              <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Top 15%</span>
            </div>
            <div className="text-2xl font-semibold mb-1">2,847</div>
            <div className="text-xs text-black/60">XP This Month</div>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Continue Learning</h2>
            <Link to="/skill-tree" className="text-sm text-black/60 hover:text-black">View all</Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="mb-4">
                <div className="text-xs text-white/80 mb-1">Continue where you left off</div>
                <h3 className="text-xl font-semibold mb-2">Advanced Data Structures</h3>
                <p className="text-sm text-white/90">Binary Trees & Graph Algorithms</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/80 mb-1">Progress</div>
                  <div className="text-2xl font-semibold">67%</div>
                </div>
                <Link
                  to="/skill-tree"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
                >
                  Continue
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-black/5 rounded-xl p-6">
              <div className="mb-4">
                <div className="text-xs text-black/60 mb-1">Recommended for you</div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning Basics</h3>
                <p className="text-sm text-black/60">Neural Networks Introduction</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-black/40" />
                  <span className="text-sm text-black/60">12 lessons</span>
                </div>
                <Link
                  to="/skill-tree"
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-black/90 transition-colors"
                >
                  Start
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* This Week's Schedule */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">This Week</h2>
            <button className="text-sm text-black/60 hover:text-black">View calendar</button>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const isToday = i === 2;
              const hasSession = i <= 2;
              return (
                <div
                  key={day}
                  className={`border rounded-lg p-4 ${
                    isToday ? "border-black bg-black text-white" : "border-black/5 bg-white"
                  }`}
                >
                  <div className={`text-xs mb-2 ${isToday ? "text-white/80" : "text-black/60"}`}>{day}</div>
                  <div className="text-2xl font-semibold mb-2">{i + 3}</div>
                  {hasSession && (
                    <div className={`text-xs px-2 py-1 rounded ${isToday ? "bg-white/20" : "bg-emerald-50 text-emerald-700"}`}>
                      {isToday ? "Today" : "Done"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <Link
            to="/mentor"
            className="bg-white border border-black/5 rounded-xl p-6 hover:border-black/20 transition-all group"
          >
            <Compass className="size-8 mb-3 text-black/80 group-hover:scale-110 transition-transform" />
            <h3 className="font-medium mb-1">Ask Astra</h3>
            <p className="text-sm text-black/60">Get personalized learning guidance</p>
          </Link>

          <Link
            to="/roadmap"
            className="bg-white border border-black/5 rounded-xl p-6 hover:border-black/20 transition-all group"
          >
            <TrendingUp className="size-8 mb-3 text-black/80 group-hover:scale-110 transition-transform" />
            <h3 className="font-medium mb-1">Career Path</h3>
            <p className="text-sm text-black/60">Explore your future opportunities</p>
          </Link>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
            <Calendar className="size-8 mb-3 text-emerald-700" />
            <h3 className="font-medium mb-1">Study Session</h3>
            <p className="text-sm text-black/60">Schedule your next learning block</p>
          </div>
        </div>
      </main>
    </div>
  );
}
