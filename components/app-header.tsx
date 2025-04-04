import { Beaker } from "lucide-react"

export function AppHeader() {
  return (
    <header className="border-b border-purple-800/30 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm">
      <div className="container mx-auto py-4 flex items-center gap-4">
        <div className="relative">
          <Beaker className="h-6 w-6 text-purple-300 animate-pulse" />
          <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
    </header>
  )
}

