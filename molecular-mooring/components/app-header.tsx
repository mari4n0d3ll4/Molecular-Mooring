import { Beaker } from "lucide-react"

export function AppHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 flex items-center gap-4">
        <Beaker className="h-6 w-6" />
        <div>
          <h1 className="text-xl font-bold">Molecular Mooring</h1>
          <p className="text-sm text-muted-foreground">Explore relationships through protein structure prediction</p>
        </div>
      </div>
    </header>
  )
}

