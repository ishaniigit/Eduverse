import { Link } from "react-router";
import { ArrowLeft, Briefcase, Building2, ChevronRight, Compass, DollarSign, MapPin, TrendingUp } from "lucide-react";

export function CareerRoadmap() {
  const careerPath = [
    {
      level: "Current",
      title: "Learning Foundation",
      role: "Student",
      status: "active",
      skills: ["Python Basics", "Data Structures", "OOP"],
      progress: 67,
      timeframe: "Now",
    },
    {
      level: "Entry Level",
      title: "Junior Developer",
      role: "Software Engineer I",
      status: "next",
      skills: ["Algorithms", "Databases", "Web Dev"],
      salary: "$65k - $85k",
      timeframe: "6-9 months",
      companies: ["Tech Startups", "Mid-size Companies"],
    },
    {
      level: "Mid Level",
      title: "Software Engineer",
      role: "Software Engineer II",
      status: "future",
      skills: ["System Design", "APIs", "Testing"],
      salary: "$95k - $130k",
      timeframe: "2-3 years",
      companies: ["Google", "Meta", "Amazon"],
    },
    {
      level: "Senior Level",
      title: "Senior Engineer",
      role: "Senior Software Engineer",
      status: "future",
      skills: ["Architecture", "Leadership", "Mentoring"],
      salary: "$150k - $200k+",
      timeframe: "4-6 years",
      companies: ["FAANG", "Tech Leaders"],
    },
  ];

  const opportunities = [
    {
      company: "TechCorp",
      role: "Junior Python Developer",
      location: "Remote",
      salary: "$70k - $80k",
      match: 85,
      logo: "TC",
    },
    {
      company: "DataFlow Inc",
      role: "Backend Engineer Intern",
      location: "San Francisco, CA",
      salary: "$25/hr",
      match: 78,
      logo: "DF",
    },
    {
      company: "CloudStart",
      role: "Software Engineer I",
      location: "New York, NY",
      salary: "$75k - $90k",
      match: 72,
      logo: "CS",
    },
  ];

  const skillGaps = [
    { skill: "Databases (SQL)", current: 40, target: 80 },
    { skill: "Web Development", current: 30, target: 75 },
    { skill: "Git & Version Control", current: 60, target: 90 },
    { skill: "Testing & Debugging", current: 45, target: 85 },
  ];

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
                <h1 className="text-xl font-semibold">Career Roadmap</h1>
                <p className="text-sm text-black/60">Your path to Software Engineer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="border border-black/10 px-4 py-2 rounded-lg text-sm hover:bg-black/5 transition-colors">
                Explore Other Paths
              </button>
              <Link
                to="/skill-tree"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-black/90 transition-colors"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Roadmap */}
          <div className="col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Your Career Journey</h2>
                  <p className="text-white/90 text-sm">You're 67% ready for your first developer role</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-xs text-white/80 mb-1">Estimated Timeline</div>
                  <div className="text-xl font-semibold">6-9 months</div>
                </div>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white" style={{ width: "67%" }} />
              </div>
            </div>

            {/* Career Path Timeline */}
            <div className="space-y-4">
              {careerPath.map((stage, i) => (
                <div key={i} className="relative">
                  {/* Connector Line */}
                  {i < careerPath.length - 1 && (
                    <div className="absolute left-6 top-full h-4 w-0.5 bg-black/10" />
                  )}

                  <div
                    className={`border rounded-2xl p-6 transition-all ${
                      stage.status === "active"
                        ? "border-indigo-500 bg-indigo-500/5"
                        : stage.status === "next"
                        ? "border-black bg-white"
                        : "border-black/10 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Status Icon */}
                      <div
                        className={`size-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          stage.status === "active"
                            ? "bg-indigo-500 text-white"
                            : stage.status === "next"
                            ? "bg-black text-white"
                            : "bg-black/5 text-black/40"
                        }`}
                      >
                        {stage.status === "active" ? (
                          <TrendingUp className="size-6" />
                        ) : stage.status === "next" ? (
                          <Sparkles className="size-6" />
                        ) : (
                          <Briefcase className="size-6" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="text-xs text-black/60 mb-1">{stage.level}</div>
                            <h3 className="text-xl font-semibold mb-1">{stage.title}</h3>
                            <p className="text-sm text-black/60">{stage.role}</p>
                          </div>
                          <div className="text-right">
                            {stage.salary && <div className="font-medium mb-1">{stage.salary}</div>}
                            <div className="text-xs text-black/60">{stage.timeframe}</div>
                          </div>
                        </div>

                        {/* Progress Bar for Active Stage */}
                        {stage.status === "active" && stage.progress !== undefined && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-black/60">Overall Progress</span>
                              <span className="font-medium">{stage.progress}%</span>
                            </div>
                            <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                              <div className="h-full bg-indigo-500" style={{ width: `${stage.progress}%` }} />
                            </div>
                          </div>
                        )}

                        {/* Skills */}
                        <div className="mb-3">
                          <div className="text-xs text-black/60 mb-2">Key Skills</div>
                          <div className="flex flex-wrap gap-2">
                            {stage.skills.map((skill, j) => (
                              <div
                                key={j}
                                className={`px-3 py-1 rounded-full text-xs ${
                                  stage.status === "active"
                                    ? "bg-indigo-100 text-indigo-700"
                                    : "bg-black/5 text-black/70"
                                }`}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Companies */}
                        {stage.companies && (
                          <div>
                            <div className="text-xs text-black/60 mb-2">Target Companies</div>
                            <div className="flex items-center gap-2 text-sm text-black/70">
                              <Building2 className="size-4" />
                              {stage.companies.join(", ")}
                            </div>
                          </div>
                        )}

                        {/* CTA for Next Stage */}
                        {stage.status === "next" && (
                          <button className="mt-4 w-full bg-black text-white py-2.5 rounded-lg text-sm hover:bg-black/90 transition-colors flex items-center justify-center gap-2">
                            View Required Skills
                            <ChevronRight className="size-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skill Gaps */}
            <div className="border border-black/10 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold mb-4">Skill Gaps to Close</h3>
              <div className="space-y-4">
                {skillGaps.map((gap, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>{gap.skill}</span>
                      <span className="text-xs text-black/60">
                        {gap.current}% → {gap.target}%
                      </span>
                    </div>
                    <div className="h-2 bg-black/5 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/10 rounded-full" style={{ width: `${gap.target}%` }} />
                      <div className="absolute inset-0 bg-emerald-500 rounded-full" style={{ width: `${gap.current}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/skill-tree"
                className="mt-4 w-full bg-black text-white py-2.5 rounded-lg text-sm hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
              >
                Start Training
                <ChevronRight className="size-4" />
              </Link>
            </div>

            {/* Job Opportunities */}
            <div className="border border-black/10 rounded-2xl p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Matching Opportunities</h3>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{opportunities.length} new</span>
              </div>
              <div className="space-y-3">
                {opportunities.map((job, i) => (
                  <div key={i} className="border border-black/5 rounded-xl p-4 hover:border-black/20 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="size-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                        {job.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-0.5 truncate">{job.role}</h4>
                        <p className="text-xs text-black/60">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-black/60 mb-2">
                      <MapPin className="size-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs">
                        <DollarSign className="size-3 text-emerald-600" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="size-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-xs text-emerald-600 font-medium">{job.match}% match</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full border border-black/10 py-2.5 rounded-lg text-sm hover:bg-black/5 transition-colors">
                View All Jobs
              </button>
            </div>

            {/* Personalized Insights */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="size-5 text-amber-600" />
                <h3 className="font-semibold">Your Next Steps</h3>
              </div>
              <p className="text-sm text-black/70 leading-relaxed">
                Based on your progress, you're on track to land a junior role in 7 months. Focus on building 2-3 portfolio projects to stand out.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
