import { Link } from "react-router";
import { ArrowLeft, BookOpen, Code, Compass, Lightbulb, Send, Sparkles, Target, Zap } from "lucide-react";

export function AIMentor() {
  const conversationHistory = [
    {
      role: "assistant",
      content: "Hi Ishani! I'm Astra, your personalized learning guide. I've been tracking your progress through Data Structures, and I noticed you've been spending extra time on linked lists. How are you finding them?",
      timestamp: "10:23 AM",
    },
    {
      role: "user",
      content: "I'm struggling with understanding how decorators work in Python. Can you explain?",
      timestamp: "10:24 AM",
    },
    {
      role: "assistant",
      content: "I see you've moved ahead to decorators—that's great initiative! Let me connect this to what you already know.\n\nYou've mastered functions and closures. Decorators build on those concepts. Think of them as wrappers that modify the behavior of functions without changing their code.\n\nHere's an analogy: imagine you have a gift (your function). A decorator is like gift wrapping—it adds something extra around the gift without changing what's inside.\n\nWould you like me to show you a practical example?",
      timestamp: "10:24 AM",
      suggestions: ["Show me an example", "Explain use cases", "Practice exercise"],
    },
    {
      role: "user",
      content: "Yes, please show me an example!",
      timestamp: "10:25 AM",
    },
    {
      role: "assistant",
      content: "Perfect! Here's a practical example that builds on timing concepts from your Algorithms module:\n\n```python\ndef timing_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f\"{func.__name__} took {end-start:.2f}s\")\n        return result\n    return wrapper\n\n@timing_decorator\ndef slow_function():\n    time.sleep(2)\n    return \"Done!\"\n```\n\nThis decorator measures how long a function takes to run. The @timing_decorator syntax is shorthand for wrapping your function.\n\nBased on your learning style, I recommend trying this hands-on: create a decorator that logs when a function is called. Ready to practice?",
      timestamp: "10:25 AM",
      codeSnippet: true,
      suggestions: ["Start practice", "See more examples", "Why use decorators?"],
    },
  ];

  const quickActions = [
    { icon: Code, label: "Debug my code", color: "bg-blue-500" },
    { icon: Lightbulb, label: "Explain concept", color: "bg-amber-500" },
    { icon: BookOpen, label: "Suggest resources", color: "bg-purple-500" },
    { icon: Target, label: "Practice problems", color: "bg-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-80 border-r border-black/5 flex flex-col">
        <div className="p-6 border-b border-black/5">
          <Link to="/dashboard" className="flex items-center gap-2 text-black/60 hover:text-black mb-6">
            <ArrowLeft className="size-4" />
            <span className="text-sm">Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <Compass className="size-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold">Astra</h2>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Guiding your path
              </div>
            </div>
          </div>

          <p className="text-sm text-black/60 leading-relaxed">
            Your personalized learning guide that adapts to your pace, understands your goals, and helps you navigate challenges.
          </p>
        </div>

        <div className="p-6">
          <h3 className="text-xs font-medium text-black/40 uppercase tracking-wide mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors text-left"
              >
                <div className={`size-8 ${action.color} rounded-lg flex items-center justify-center`}>
                  <action.icon className="size-4 text-white" />
                </div>
                <span className="text-sm">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-black/5">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-4">
            <h4 className="font-medium mb-1 text-sm">Your Learning Profile</h4>
            <p className="text-xs text-black/60 mb-3">
              You learn best through practical examples and hands-on practice. Morning sessions (9-11am) show highest retention.
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-600">
              <Compass className="size-3" />
              <span>Personalized to you</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-black/5 p-6">
          <h1 className="text-xl font-semibold mb-1">Learning with Astra</h1>
          <p className="text-sm text-black/60">Get guidance tailored to your goals and progress</p>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {conversationHistory.map((message, i) => (
            <div key={i} className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              {message.role === "assistant" && (
                <div className="size-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Compass className="size-5 text-white" />
                </div>
              )}
              {message.role === "user" && (
                <div className="size-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
                  AK
                </div>
              )}

              {/* Message Content */}
              <div className={`flex-1 max-w-2xl ${message.role === "user" ? "flex flex-col items-end" : ""}`}>
                <div
                  className={`rounded-2xl p-4 ${
                    message.role === "user"
                      ? "bg-black text-white"
                      : message.codeSnippet
                      ? "bg-black/5 border border-black/10"
                      : "bg-white border border-black/10"
                  }`}
                >
                  <p className={`text-sm leading-relaxed whitespace-pre-wrap ${message.codeSnippet ? "font-mono text-xs" : ""}`}>
                    {message.content}
                  </p>

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-black/10">
                      {message.suggestions.map((suggestion, j) => (
                        <button
                          key={j}
                          className="text-xs px-3 py-1.5 bg-white border border-black/10 rounded-full hover:bg-black/5 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`text-xs text-black/40 mt-1 ${message.role === "user" ? "text-right" : ""}`}>
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          <div className="flex gap-4">
            <div className="size-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Compass className="size-5 text-white" />
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-4 flex items-center gap-1">
              <div className="size-2 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="size-2 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="size-2 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-black/5 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3 items-end">
              <div className="flex-1 bg-white border border-black/10 rounded-2xl p-4 focus-within:border-black/30 transition-colors">
                <textarea
                  placeholder="Ask Astra anything..."
                  className="w-full resize-none outline-none text-sm"
                  rows={3}
                />
              </div>
              <button className="size-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-black/90 transition-colors flex-shrink-0">
                <Send className="size-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs text-black/40">
              <Compass className="size-3" />
              <span>Astra understands your progress and adapts guidance to your learning style</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
