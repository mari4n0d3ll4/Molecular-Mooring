"use client"

import ProteinViewer from "@/components/protein-viewer"
import BioInterpretation from "@/components/bio-interpretation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProteinResults({ proteinData, loading }) {
  if (loading) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Predicting Structure...</CardTitle>
          <CardDescription>Please wait while we generate the protein structure.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This may take a few minutes.</p>
        </CardContent>
      </Card>
    )
  }

  if (!proteinData) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>No Results</CardTitle>
          <CardDescription>No protein data available.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Please submit the form to generate a protein structure.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Protein Structure</CardTitle>
          <CardDescription>Visual representation of the predicted protein structure.</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ProteinViewer proteinData={proteinData} />
        </CardContent>
      </Card>

      <BioInterpretation proteinData={proteinData} names={{ name1: "Name 1", name2: "Name 2" }} />
    </div>
  )
}

