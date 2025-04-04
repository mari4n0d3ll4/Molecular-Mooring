"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function BioInterpretation({ proteinData, names }) {
  if (!proteinData) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bio-Seer Interpretation</CardTitle>
        <CardDescription>
          Merging concepts of amino acids and protein folding with human relationships between {names.name1} and{" "}
          {names.name2}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {proteinData.interpretation.map((interaction, index) => (
          <div key={index} className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold">{interaction.interactionType}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {interaction.residues.map((residue, i) => (
                  <Badge key={i} variant="outline" className="bg-primary/10">
                    {residue}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{interaction.interpretation}</p>
            {index < proteinData.interpretation.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}

        <div className="mt-8 pt-4 border-t">
          <h3 className="text-lg font-semibold mb-3">Overall Relationship Analysis</h3>
          <p className="text-muted-foreground">{proteinData.overallInterpretation}</p>
        </div>
      </CardContent>
    </Card>
  )
}

