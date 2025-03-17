"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"

export function ProteinForm({ onSubmit }) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const name1 = formData.get("name1")
    const name2 = formData.get("name2")

    try {
      // Here we would integrate with actual AlphaFold
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name1, name2 }),
      })

      const data = await response.json()
      onSubmit(data)
    } catch (error) {
      console.error("Prediction failed:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto border-purple-800/20 bg-purple-900/10 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Consult the Bio-Seer
        </CardTitle>
        <CardDescription>Enter two names to reveal their molecular connection</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name1">First Name</Label>
            <Input
              id="name1"
              name="name1"
              placeholder="Enter full name"
              className="bg-purple-950/50 border-purple-800/30"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name2">Second Name</Label>
            <Input
              id="name2"
              name="name2"
              placeholder="Enter full name"
              className="bg-purple-950/50 border-purple-800/30"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={loading}
          >
            {loading ? "Consulting the Oracle..." : "Reveal Connection"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

