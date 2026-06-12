import { Link } from "react-router";
import { ArrowRight, BookOpen, Code, Compass, GraduationCap, Headphones, Languages, LineChart, Monitor, MousePointer2, Sparkles, TrendingUp } from "lucide-react";

export function LandingPage() {
  const careers = [
    {
      title: "Software Engineer",
      description: "Build applications that solve real problems",
      skills: ["Python", "JavaScript", "System Design"],
      salary: "$95k - $150k",
      demand: "High",
      icon: Code,
    },
    {
      title: "Data Scientist",
      description: "Transform data into actionable insights",
      skills: ["Python", "Statistics", "Machine Learning"],
      salary: "$100k - $160k",
      demand: "Very High",
      icon: LineChart,
    },
    {
      title: "Product Designer",
      description: "Create intuitive digital experiences",
      skills: ["UI/UX", "Prototyping", "User Research"],
      salary: "$85k - $140k",
      demand: "High",
      icon: Monitor,
    },
  ];

  const learningModes = [
    {
      icon: BookOpen,
      title: "Visual Learning",
      description: "Interactive diagrams, skill trees, and progress maps",
    },
    {
      icon: Headphones,
      title: "Audio Support",
      description: "Lesson narration and screen reader compatibility",
    },
    {
      icon: MousePointer2,
      title: "Keyboard Navigation",
      description: "Full accessibility without a mouse",
    },
    {
      icon: Languages,
      title: "Multiple Languages",
      description: "Learn in your native language",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-black/5 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-black rounded-lg flex items-center justify-center">
              <GraduationCap className="size-4 text-white" />
            </div>
            <span className="font-semibold">EduVerse</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="text-sm text-black/60 hover:text-black transition-colors">
              For Students
            </Link>
            <Link to="/analytics" className="text-sm text-black/60 hover:text-black transition-colors">
              For Teachers
            </Link>
            <Link
              to="/dashboard"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-black/90 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-semibold mb-6 leading-tight">
              Learn at your pace.<br />Master for life.
            </h1>
            <p className="text-xl text-black/60 mb-8 max-w-2xl leading-relaxed">
              A personalized education platform that adapts to how you learn best. Build real skills, visualize your progress, and map your path to a fulfilling career.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/90 transition-colors"
              >
                Explore Your Path
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/skill-tree"
                className="border border-black/10 px-6 py-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-black/5 rounded-2xl p-8 border border-black/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium">Your Learning Path</h3>
                <span className="text-xs text-black/40">67% Complete</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Introduction to Python", status: "completed", progress: 100 },
                  { name: "Data Structures", status: "in-progress", progress: 67 },
                  { name: "Algorithms", status: "locked", progress: 0 },
                ].map((course, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-black/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{course.name}</span>
                      {course.status === "completed" && (
                        <div className="size-5 bg-emerald-500 rounded-full flex items-center justify-center">
                          <div className="text-white text-xs">✓</div>
                        </div>
                      )}
                    </div>
                    <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-black text-white rounded-2xl p-6 border border-black/5">
                <Compass className="size-6 mb-4 opacity-80" />
                <h4 className="text-sm font-medium mb-2">Astra Guide</h4>
                <p className="text-xs text-white/60">Your personalized learning companion</p>
              </div>
              <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20">
                <TrendingUp className="size-6 mb-4 text-emerald-700" />
                <h4 className="text-sm font-medium mb-2">Career Roadmap</h4>
                <p className="text-xs text-black/60">From skills to your dream role</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Future */}
      <section className="py-20 px-6 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold mb-4">Choose Your Future</h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Explore career paths and see exactly what skills you need to get there
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {careers.map((career, i) => (
              <Link
                key={i}
                to="/roadmap"
                className="bg-white rounded-2xl p-8 border border-black/5 hover:border-black/20 transition-all group"
              >
                <div className="size-12 bg-black/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                  <career.icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                <p className="text-sm text-black/60 mb-4 leading-relaxed">{career.description}</p>

                <div className="mb-4">
                  <div className="text-xs text-black/40 mb-2">Key Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, j) => (
                      <span key={j} className="text-xs bg-black/5 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <div>
                    <div className="text-xs text-black/40">Average Salary</div>
                    <div className="text-sm font-medium">{career.salary}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-black/40">Demand</div>
                    <div className="text-sm font-medium text-emerald-600">{career.demand}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/roadmap" className="text-sm text-black/60 hover:text-black inline-flex items-center gap-1">
              Explore all career paths
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skill Galaxy */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-4">Navigate your Skill Galaxy</h2>
              <p className="text-lg text-black/60 mb-6 leading-relaxed">
                Every skill connects to another. See the bigger picture with our interactive skill tree that shows you exactly how each lesson builds toward mastery.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="size-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white text-xs">✓</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Prerequisites made clear</div>
                    <div className="text-sm text-black/60">Know exactly what to learn next</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white text-xs">✓</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Track mastery in real-time</div>
                    <div className="text-sm text-black/60">Watch your knowledge graph grow</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white text-xs">✓</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Multiple learning paths</div>
                    <div className="text-sm text-black/60">Choose the route that fits your goals</div>
                  </div>
                </li>
              </ul>
              <Link
                to="/skill-tree"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-black/90 transition-colors"
              >
                View Skill Tree
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Skill Galaxy Visualization */}
            <div className="relative h-[500px] bg-gradient-to-br from-black/[0.02] to-transparent rounded-2xl border border-black/5 p-8">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                {/* Connection lines */}
                <line x1="200" y1="80" x2="120" y2="180" stroke="#00000010" strokeWidth="2" />
                <line x1="200" y1="80" x2="280" y2="180" stroke="#00000010" strokeWidth="2" />
                <line x1="120" y1="180" x2="100" y2="300" stroke="#10b981" strokeWidth="2" />
                <line x1="120" y1="180" x2="200" y2="300" stroke="#10b981" strokeWidth="2" />
                <line x1="280" y1="180" x2="200" y2="300" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="280" y1="180" x2="300" y2="300" stroke="#00000010" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="100" y1="300" x2="150" y2="420" stroke="#10b981" strokeWidth="2" />
                <line x1="200" y1="300" x2="150" y2="420" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="300" x2="250" y2="420" stroke="#00000010" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Skill nodes */}
              {[
                { x: 200, y: 80, status: "completed", label: "Python Basics" },
                { x: 120, y: 180, status: "completed", label: "Data Types" },
                { x: 280, y: 180, status: "completed", label: "Functions" },
                { x: 100, y: 300, status: "completed", label: "OOP" },
                { x: 200, y: 300, status: "in-progress", label: "Algorithms" },
                { x: 300, y: 300, status: "locked", label: "Databases" },
                { x: 150, y: 420, status: "in-progress", label: "Design Patterns" },
                { x: 250, y: 420, status: "locked", label: "System Design" },
              ].map((node, i) => (
                <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                  <circle
                    r="24"
                    fill={
                      node.status === "completed"
                        ? "#10b981"
                        : node.status === "in-progress"
                        ? "#6366f1"
                        : "#f3f3f5"
                    }
                    stroke={
                      node.status === "completed"
                        ? "#059669"
                        : node.status === "in-progress"
                        ? "#4f46e5"
                        : "#00000010"
                    }
                    strokeWidth="3"
                  />
                  {node.status === "completed" && (
                    <text
                      textAnchor="middle"
                      dy="6"
                      fontSize="16"
                      fill="white"
                      fontWeight="500"
                    >
                      ✓
                    </text>
                  )}
                  {node.status === "locked" && (
                    <text
                      textAnchor="middle"
                      dy="6"
                      fontSize="14"
                      fill="#00000040"
                    >
                      🔒
                    </text>
                  )}
                  <text
                    textAnchor="middle"
                    dy="45"
                    fontSize="11"
                    fill="#00000080"
                    fontWeight="500"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive Learning Mode */}
      <section className="py-20 px-6 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Learn your way</h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Education should work for everyone. Choose how you engage with content and customize your experience.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {learningModes.map((mode, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-black/5">
                <div className="size-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <mode.icon className="size-6 text-black/80" />
                </div>
                <h3 className="font-medium mb-2">{mode.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-black/5">
            <div className="flex items-start gap-6">
              <div className="size-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Compass className="size-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Meet Astra, your learning guide</h3>
                <p className="text-black/60 leading-relaxed mb-4">
                  Astra is your personal learning companion—not a chatbot, but an intelligent guide that understands your goals, adapts to your progress, and suggests the best next steps. Get explanations when concepts feel unclear, practice problems when you're ready, and encouragement when you need it.
                </p>
                <Link
                  to="/mentor"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn more about Astra
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Roadmap Module */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Career Roadmap Visualization */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Your Career Roadmap</h3>

              <div className="space-y-6">
                {[
                  { level: "Now", title: "Learning Foundation", progress: 67, active: true },
                  { level: "6-9 months", title: "Junior Developer", progress: 0, active: false },
                  { level: "2-3 years", title: "Software Engineer", progress: 0, active: false },
                  { level: "4-6 years", title: "Senior Engineer", progress: 0, active: false },
                ].map((stage, i) => (
                  <div key={i} className="relative">
                    {i < 3 && (
                      <div className="absolute left-4 top-12 w-0.5 h-6 bg-white/20" />
                    )}
                    <div className="flex items-start gap-4">
                      <div
                        className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          stage.active ? "bg-white text-indigo-600" : "bg-white/20"
                        }`}
                      >
                        {stage.active ? "◉" : "○"}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-white/70 mb-1">{stage.level}</div>
                        <div className="font-medium mb-2">{stage.title}</div>
                        {stage.active && (
                          <div className="bg-white/20 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-white"
                              style={{ width: `${stage.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-semibold mb-4">From skills to career</h2>
              <p className="text-lg text-black/60 mb-6 leading-relaxed">
                See exactly where your learning leads. Our career roadmap connects every skill you master to real job opportunities and shows you what's next on your journey.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="size-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white text-xs">1</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Personalized timelines</div>
                    <div className="text-sm text-black/60">Based on your pace and dedication</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white text-xs">2</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Real job market data</div>
                    <div className="text-sm text-black/60">Salaries, demand, and growth trends</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-white text-xs">3</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Skills gap analysis</div>
                    <div className="text-sm text-black/60">Know exactly what to learn next</div>
                  </div>
                </li>
              </ul>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-black/90 transition-colors"
              >
                Explore Career Paths
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl font-semibold mb-4">Begin your learning journey</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of learners building real skills and shaping their futures
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Start Learning Free
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-black rounded-md flex items-center justify-center">
                <GraduationCap className="size-3 text-white" />
              </div>
              <span className="text-sm font-medium">EduVerse</span>
            </div>
            <p className="text-sm text-black/40">© 2026 EduVerse. Empowering learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
