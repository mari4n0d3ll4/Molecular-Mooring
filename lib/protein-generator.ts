// This is a simplified simulation of protein generation based on names
// In a real application, this would connect to AlphaFold or another protein prediction service

import { hashString } from "./utils"

// Amino acid properties
const aminoAcids = [
  { code: "A", name: "Alanine", type: "hydrophobic", color: 0x1e88e5 },
  { code: "R", name: "Arginine", type: "positively charged", color: 0xd81b60 },
  { code: "N", name: "Asparagine", type: "polar", color: 0x43a047 },
  { code: "D", name: "Aspartic Acid", type: "negatively charged", color: 0xe53935 },
  { code: "C", name: "Cysteine", type: "special", color: 0xfdd835 },
  { code: "E", name: "Glutamic Acid", type: "negatively charged", color: 0xe53935 },
  { code: "Q", name: "Glutamine", type: "polar", color: 0x43a047 },
  { code: "G", name: "Glycine", type: "special", color: 0xfdd835 },
  { code: "H", name: "Histidine", type: "positively charged", color: 0xd81b60 },
  { code: "I", name: "Isoleucine", type: "hydrophobic", color: 0x1e88e5 },
  { code: "L", name: "Leucine", type: "hydrophobic", color: 0x1e88e5 },
  { code: "K", name: "Lysine", type: "positively charged", color: 0xd81b60 },
  { code: "M", name: "Methionine", type: "hydrophobic", color: 0x1e88e5 },
  { code: "F", name: "Phenylalanine", type: "hydrophobic", color: 0x1e88e5 },
  { code: "P", name: "Proline", type: "special", color: 0xfdd835 },
  { code: "S", name: "Serine", type: "polar", color: 0x43a047 },
  { code: "T", name: "Threonine", type: "polar", color: 0x43a047 },
  { code: "W", name: "Tryptophan", type: "hydrophobic", color: 0x1e88e5 },
  { code: "Y", name: "Tyrosine", type: "polar", color: 0x43a047 },
  { code: "V", name: "Valine", type: "hydrophobic", color: 0x1e88e5 },
]

// Interaction interpretations
const interpretations = {
  hydrophobic: {
    interactionType: "Hydrophobic Interactions",
    interpretation:
      "These bonds form in adversity, representing relationships that seek closeness and protection from external pressures. They thrive in intimate, protective environments, symbolizing mutual refuge and comfort.",
  },
  hydrophilic: {
    interactionType: "Hydrophilic Interactions",
    interpretation:
      "Reflecting openness and transparency, these bonds represent relationships that flourish in social settings. They embrace external connections and represent partnerships that grow through shared experiences with others.",
  },
  ionic: {
    interactionType: "Ionic Bonds",
    interpretation:
      "Strong yet flexible, these connections represent complementary relationships where opposites attract. They symbolize balance through difference, with each partner providing what the other lacks.",
  },
  hydrogen: {
    interactionType: "Hydrogen Bonds",
    interpretation:
      "Numerous but individually weak, these bonds represent relationships built on many small moments of connection. They symbolize consistency and reliability rather than intensity, creating strength through repetition.",
  },
  disulfide: {
    interactionType: "Disulfide Bridges",
    interpretation:
      "Rare but exceptionally strong, these bonds represent deep, transformative relationships that fundamentally change both parties. They symbolize connections that persist through significant life changes and challenges.",
  },
}

// Generate a protein sequence from names
function generateSequence(name1, name2) {
  const combinedName = `${name1}${name2}`.replace(/[^a-zA-Z]/g, "").toUpperCase()
  let sequence = ""

  for (let i = 0; i < combinedName.length; i++) {
    const charCode = combinedName.charCodeAt(i) % 20
    sequence += aminoAcids[charCode].code
  }

  return sequence
}

// Generate 3D positions for amino acids based on sequence
function generatePositions(sequence) {
  const positions = []
  const sequenceHash = hashString(sequence)
  let x = 0,
    y = 0,
    z = 0
  const directions = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ]

  for (let i = 0; i < sequence.length; i++) {
    // Use character code to determine direction
    const dirIndex = (sequenceHash + i * sequence.charCodeAt(i)) % directions.length
    const [dx, dy, dz] = directions[dirIndex]

    x += dx * 3
    y += dy * 3
    z += dz * 3

    positions.push({ x, y, z })
  }

  return positions
}

// Generate bonds between amino acids
function generateBonds(sequence, positions) {
  const bonds = []

  // Sequential bonds (backbone)
  for (let i = 0; i < sequence.length - 1; i++) {
    bonds.push({
      start: i,
      end: i + 1,
      type: "peptide",
      color: 0x9e9e9e,
    })
  }

  // Non-sequential bonds (based on amino acid properties)
  for (let i = 0; i < sequence.length; i++) {
    for (let j = i + 3; j < sequence.length; j++) {
      const aa1 = aminoAcids.find((aa) => aa.code === sequence[i])
      const aa2 = aminoAcids.find((aa) => aa.code === sequence[j])

      if (!aa1 || !aa2) continue

      // Distance between amino acids
      const pos1 = positions[i]
      const pos2 = positions[j]
      const distance = Math.sqrt(
        Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2) + Math.pow(pos2.z - pos1.z, 2),
      )

      // Only create bonds if amino acids are close enough
      if (distance < 15) {
        // Determine bond type based on amino acid properties
        let bondType = ""
        let bondColor = 0xffffff

        if (aa1.type === "hydrophobic" && aa2.type === "hydrophobic") {
          bondType = "hydrophobic"
          bondColor = 0x1976d2
        } else if (
          (aa1.type === "positively charged" && aa2.type === "negatively charged") ||
          (aa1.type === "negatively charged" && aa2.type === "positively charged")
        ) {
          bondType = "ionic"
          bondColor = 0xe91e63
        } else if (aa1.type === "polar" && aa2.type === "polar") {
          bondType = "hydrogen"
          bondColor = 0x66bb6a
        } else if (aa1.code === "C" && aa2.code === "C") {
          bondType = "disulfide"
          bondColor = 0xffd600
        } else if (
          (aa1.type === "polar" || aa1.type === "positively charged" || aa1.type === "negatively charged") &&
          (aa2.type === "polar" || aa2.type === "positively charged" || aa2.type === "negatively charged")
        ) {
          bondType = "hydrophilic"
          bondColor = 0x26a69a
        }

        if (bondType) {
          bonds.push({
            start: i,
            end: j,
            type: bondType,
            color: bondColor,
          })
        }
      }
    }
  }

  return bonds
}

// Generate interpretation based on bonds
function generateInterpretation(sequence, bonds) {
  // Count bond types
  const bondCounts = {}
  bonds.forEach((bond) => {
    if (bond.type !== "peptide") {
      bondCounts[bond.type] = (bondCounts[bond.type] || 0) + 1
    }
  })

  // Get amino acids involved in each interaction type
  const interactionResidues = {}
  bonds.forEach((bond) => {
    if (bond.type !== "peptide") {
      if (!interactionResidues[bond.type]) {
        interactionResidues[bond.type] = new Set()
      }

      const aa1 = aminoAcids.find((aa) => aa.code === sequence[bond.start])
      const aa2 = aminoAcids.find((aa) => aa.code === sequence[bond.end])

      if (aa1) interactionResidues[bond.type].add(`${aa1.name} (${aa1.code})`)
      if (aa2) interactionResidues[bond.type].add(`${aa2.name} (${aa2.code})`)
    }
  })

  // Create interpretation objects
  const interpretationResults = []

  Object.keys(bondCounts).forEach((bondType) => {
    if (interpretations[bondType]) {
      interpretationResults.push({
        interactionType: interpretations[bondType].interactionType,
        residues: Array.from(interactionResidues[bondType] || []),
        interpretation: interpretations[bondType].interpretation,
      })
    }
  })

  // Sort by bond count (most frequent first)
  interpretationResults.sort((a, b) => {
    return (
      bondCounts[b.interactionType.toLowerCase().split(" ")[0]] -
      bondCounts[a.interactionType.toLowerCase().split(" ")[0]]
    )
  })

  return interpretationResults
}

// Generate overall interpretation
function generateOverallInterpretation(name1, name2, interpretationResults) {
  const dominantInteractions = interpretationResults.slice(0, 2).map((i) => i.interactionType.toLowerCase())

  let overallInterpretation = `The relationship between ${name1} and ${name2} is characterized primarily by `

  if (dominantInteractions.includes("hydrophobic interactions")) {
    overallInterpretation += "a tendency to create a close, protective bond that thrives in intimate settings. "
  }

  if (dominantInteractions.includes("hydrophilic interactions")) {
    overallInterpretation += "openness and social connection, flourishing in community settings. "
  }

  if (dominantInteractions.includes("ionic bonds")) {
    overallInterpretation += "complementary strengths and weaknesses, with each person balancing the other. "
  }

  if (dominantInteractions.includes("hydrogen bonds")) {
    overallInterpretation +=
      "consistent, reliable connections built through many small moments rather than grand gestures. "
  }

  if (dominantInteractions.includes("disulfide bridges")) {
    overallInterpretation += "rare but transformative connections that fundamentally change both individuals. "
  }

  // Add a personalized touch based on names
  const nameSum = hashString(name1) + hashString(name2)
  const personalizedInsights = [
    "This relationship has potential for growth through shared experiences.",
    "Communication will be key to maintaining balance in this relationship.",
    "This connection shows potential for mutual support during challenging times.",
    "Creative collaboration could strengthen this bond significantly.",
    "This relationship may benefit from establishing clear boundaries.",
    "Shared intellectual pursuits could be particularly rewarding for this connection.",
  ]

  overallInterpretation += personalizedInsights[nameSum % personalizedInsights.length]

  return overallInterpretation
}

// Main function to generate protein data from names
export async function generateProteinFromNames(name1, name2) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate protein sequence
  const sequence = generateSequence(name1, name2)

  // Generate 3D positions
  const positions = generatePositions(sequence)

  // Create amino acid objects
  const aminoAcidObjects = sequence.split("").map((code, index) => {
    const aa = aminoAcids.find((a) => a.code === code)
    return {
      code,
      name: aa?.name || "Unknown",
      type: aa?.type || "unknown",
      color: aa?.color || 0xcccccc,
      size: 1.5,
      position: positions[index],
    }
  })

  // Generate bonds
  const bonds = generateBonds(sequence, positions)

  // Generate interpretation
  const interpretation = generateInterpretation(sequence, bonds)

  // Generate overall interpretation
  const overallInterpretation = generateOverallInterpretation(name1, name2, interpretation)

  return {
    sequence,
    aminoAcids: aminoAcidObjects,
    bonds,
    interpretation,
    overallInterpretation,
  }
}

