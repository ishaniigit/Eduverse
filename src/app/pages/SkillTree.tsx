import { Link } from "react-router";
import { ArrowLeft, Check, Lock, Play, Sparkles, Star } from "lucide-react";

export function SkillTree() {
  const skills = [
    // Tier 1 - Foundation
    { id: 1, name: "Python Basics", tier: 1, x: 50, status: "completed", xp: 500, prerequisites: [] },

    // Tier 2 - Intermediate
    { id: 2, name: "Data Types", tier: 2, x: 30, status: "completed", xp: 400, prerequisites: [1] },
    { id: 3, name: "Control Flow", tier: 2, x: 70, status: "completed", xp: 450, prerequisites: [1] },

    // Tier 3 - Advanced Basics
    { id: 4, name: "Functions", tier: 3, x: 20, status: "completed", xp: 600, prerequisites: [2] },
    { id: 5, name: "OOP Concepts", tier: 3, x: 50, status: "in-progress", xp: 800, progress: 67, prerequisites: [2, 3] },
    { id: 6, name: "File I/O", tier: 3, x: 80, status: "completed", xp: 500, prerequisites: [3] },

    // Tier 4 - Specialization
    { id: 7, name: "Data Structures", tier: 4, x: 15, status: "in-progress", xp: 1000, progress: 45, prerequisites: [4, 5] },
    { id: 8, name: "Algorithms", tier: 4, x: 40, status: "locked", xp: 1200, prerequisites: [5, 7] },
    { id: 9, name: "Databases", tier: 4, x: 65, status: "available", xp: 900, prerequisites: [5, 6] },
    { id: 10, name: "Web Scraping", tier: 4, x: 85, status: "locked", xp: 700, prerequisites: [6] },

    // Tier 5 - Advanced
    { id: 11, name: "Machine Learning", tier: 5, x: 25, status: "locked", xp: 2000, prerequisites: [7, 8] },
    { id: 12, name: "Web Development", tier: 5, x: 50, status: "locked", xp: 1500, prerequisites: [8, 9] },
    { id: 13, name: "API Design", tier: 5, x: 75, status: "locked", xp: 1300, prerequisites: [9, 10] },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-emerald-500 border-emerald-600";
      case "in-progress": return "bg-indigo-500 border-indigo-600";
      case "available": return "bg-white border-black";
      default: return "bg-black/5 border-black/10";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <Check className="size-5 text-white" />;
      case "in-progress": return <Play className="size-5 text-white" />;
      case "available": return <Star className="size-5 text-black" />;
      default: return <Lock className="size-5 text-black/40" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/5 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-black/60 hover:text-black">
                <ArrowLeft className="size-5" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold">Python Mastery Path</h1>
                <p className="text-sm text-black/60">8 of 13 skills completed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-lg">
                <Sparkles className="size-4 text-amber-500" />
                <span className="text-sm font-medium">6,850 XP</span>
              </div>
              <Link
                to="/dashboard"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-black/90 transition-colors"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Skill Tree Visualization */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-b from-black/[0.02] to-transparent rounded-2xl p-8 border border-black/5">
          {/* Legend */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-black/5">
            <div className="flex items-center gap-2">
              <div className="size-4 bg-emerald-500 rounded-full border-2 border-emerald-600" />
              <span className="text-sm text-black/60">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 bg-indigo-500 rounded-full border-2 border-indigo-600" />
              <span className="text-sm text-black/60">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 bg-white rounded-full border-2 border-black" />
              <span className="text-sm text-black/60">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 bg-black/5 rounded-full border-2 border-black/10" />
              <span className="text-sm text-black/60">Locked</span>
            </div>
          </div>

          {/* Tree Container */}
          <div className="relative" style={{ minHeight: "600px" }}>
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {skills.map((skill) =>
                skill.prerequisites.map((prereqId) => {
                  const prereq = skills.find((s) => s.id === prereqId);
                  if (!prereq) return null;

                  const x1 = prereq.x;
                  const y1 = (prereq.tier - 1) * 120 + 60;
                  const x2 = skill.x;
                  const y2 = (skill.tier - 1) * 120 + 60;

                  const isCompleted = prereq.status === "completed";

                  return (
                    <line
                      key={`${prereqId}-${skill.id}`}
                      x1={`${x1}%`}
                      y1={y1}
                      x2={`${x2}%`}
                      y2={y2}
                      stroke={isCompleted ? "#10b981" : "#00000010"}
                      strokeWidth="2"
                      strokeDasharray={isCompleted ? "0" : "4 4"}
                    />
                  );
                })
              )}
            </svg>

            {/* Skill Nodes */}
            {skills.map((skill) => {
              const isClickable = skill.status !== "locked";

              return (
                <div
                  key={skill.id}
                  className="absolute"
                  style={{
                    left: `${skill.x}%`,
                    top: `${(skill.tier - 1) * 120}px`,
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                >
                  <button
                    disabled={!isClickable}
                    className={`group relative ${isClickable ? "cursor-pointer" : "cursor-not-allowed"}`}
                  >
                    {/* Node Circle */}
                    <div
                      className={`size-24 rounded-full border-4 flex items-center justify-center mb-2 transition-all ${getStatusColor(
                        skill.status
                      )} ${isClickable ? "group-hover:scale-110" : ""}`}
                    >
                      {getStatusIcon(skill.status)}
                    </div>

                    {/* Progress Ring for In-Progress Skills */}
                    {skill.status === "in-progress" && skill.progress !== undefined && (
                      <svg className="absolute inset-0 size-24 -rotate-90 pointer-events-none">
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          fill="none"
                          stroke="white"
                          strokeWidth="4"
                          strokeDasharray={`${(skill.progress / 100) * 276} 276`}
                          opacity="0.8"
                        />
                      </svg>
                    )}

                    {/* Skill Info */}
                    <div className="text-center">
                      <div className="font-medium text-sm mb-1">{skill.name}</div>
                      <div className="text-xs text-black/60">+{skill.xp} XP</div>
                      {skill.progress !== undefined && (
                        <div className="text-xs text-indigo-600 font-medium mt-1">{skill.progress}%</div>
                      )}
                    </div>

                    {/* Hover Tooltip */}
                    {isClickable && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                          Click to {skill.status === "completed" ? "review" : "continue"}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Focus Card */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="text-xs text-white/80 mb-2">Currently Learning</div>
            <h3 className="text-2xl font-semibold mb-3">OOP Concepts</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Progress</span>
                <span>67%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: "67%" }} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/80">3 lessons remaining</div>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors">
                Continue
                <Play className="size-4" />
              </button>
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-xl p-6">
            <div className="text-xs text-black/60 mb-2">Next Recommended</div>
            <h3 className="text-2xl font-semibold mb-3">Databases</h3>
            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm text-black/60 mb-2">
                <Check className="size-4 text-emerald-500" />
                Prerequisites completed
              </div>
              <div className="text-sm text-black/60">Unlock with +900 XP</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-black/60">5 lessons • 4 projects</div>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-black/90 transition-colors">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
