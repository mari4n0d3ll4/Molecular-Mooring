"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Share2, MessageCircle, Send } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { translations } from "@/lib/translations"

// First, let's replace the defaultResponses object with a more structured system
// that can combine different elements to create more varied interpretations

// Define interpretation templates for different interaction types
const interpretationTemplates = {
  hydrophobic: [
    "These interactions are like secretive soulmates hiding in the shadows, avoiding water and drama alike. Their bond? As unbreakable as a couple binge-watching disaster documentaries while the world outside crumbles.",
    "When life gets tough, these residues cling to each other like introverts at a loud party, seeking mutual refuge from the chaos. Stay too close, though, and they might disappear into a mysterious, hydrophobic void forever.",
    "Picture two celebrities who hate paparazzi—that's these hydrophobic residues avoiding water at all costs. They've built their relationship in a private bubble where only they exist, like that couple who deleted all social media and now just sends carrier pigeons.",
    "These amino acids are the molecular equivalent of that friend who cancels plans when it rains. 'Water? No thanks, we'll just stick together in our cozy hydrophobic corner and judge everyone else from afar.'",
    "Like desert-dwelling hermits who've sworn off swimming pools, these residues have formed a water-hating pact. Their relationship thrives in dry conditions—mention a splash of H2O and watch them huddle together in biochemical panic.",
  ],
  hydrophilic: [
    "Fluid, honest, and maybe a bit too transparent. These residues represent the over-sharing friend who's always ready to talk—whether you asked or not.",
    "They thrive on openness—like a couple who live-stream their kitchen debates about dishwasher loading. No secrets, no mystery, just H2O and feelings.",
    "These water-loving residues are the extroverts of the protein world, always surrounded by friends (mostly water molecules). They're like that couple who can't go anywhere without inviting fifteen other people along.",
    "As comfortable in water as ducks in a pond, these residues never met a solvent they didn't like. Their relationship is built on transparency—literally, since you can see right through their watery surroundings.",
    "Think of them as molecular influencers, always performing for an audience of water molecules. 'Look at us being polar and interactive!' they seem to say, while secretly competing for who can attract the most hydrogen bonds.",
  ],
  ionic: [
    "Opposites attract? More like opposites ATTACK each other with electrostatic force. These charged residues are like that couple who communicates exclusively through passionate arguments followed by equally passionate reconciliations.",
    "These ionic bonds are the protein equivalent of magnets on a refrigerator—stuck together until someone (probably a pH change) comes along and rearranges everything. Stability with an asterisk.",
    "Like a power couple where one is a social media star and the other runs a Fortune 500 company, these oppositely charged residues complete each other while maintaining their distinct identities. Just don't ask who's the positive influence.",
    "These charged residues found each other in a crowded cytoplasm and haven't let go since. It's like they swiped right on a molecular dating app where the only criterion was 'must have opposite charge.'",
    "The relationship between these ionic residues is like a never-ending game of tug-of-war that somehow keeps both sides perfectly balanced. They're constantly pulling on each other but never actually going anywhere.",
  ],
  hydrogen: [
    "Individually weak but collectively strong, these hydrogen bonds are like that friend group that's been together since kindergarten. None of them is particularly impressive alone, but together they've created something unbreakable.",
    "These hydrogen bonds are commitment-phobes—easy to make, easy to break, yet somehow essential. They're like those friends who never RSVP but always show up when you really need them.",
    "Think of these as the protein's casual relationships—not the strongest bonds individually, but there are so many of them that they create something surprisingly stable. It's quantity over quality, but hey, it works!",
    "These hydrogen bonds are like those couples who break up and get back together every other week. Each individual bond is a fleeting romance, but collectively, they create a surprisingly stable situationship.",
    "The hydrogen bonding network here resembles a molecular social media platform—everyone is connected to everyone else through weak but numerous interactions. It's not about the strength of any single connection; it's about how many followers you have.",
  ],
  disulfide: [
    "These disulfide bridges are the protein equivalent of those couples who get matching tattoos on the first date. Permanent, slightly excessive, but undeniably effective at keeping things together.",
    "Strong, rare, and slightly dramatic, these disulfide bonds are like finding true love at a biochemistry conference. Against all odds, two cysteines found each other in the vast cellular expanse and decided, 'This is it. We're forming a covalent bond.'",
    "These cysteine residues took one look at each other and said, 'Let's make this official—with covalent bonds.' It's the molecular equivalent of skipping the dating phase and going straight to the joint bank account.",
    "Disulfide bridges: when 'till death do us part' isn't committed enough. These bonds require actual chemical intervention to break. It's like those couples who not only finish each other's sentences but have legally merged their identities.",
    "These cysteines didn't just swipe right; they forged a bond that requires enzymatic intervention or actual reduction to break. Talk about setting the relationship difficulty level to 'extreme.'",
    "When these residues bond, they bond for life. It's the kind of connection that endures world wars, bad hair days, and six seasons of questionable TV spin-offs.",
    "You can try to break them apart, but it'll take more than words. This is the 'ride-or-die' kind of bond—or maybe just a codependent cling that won't quit.",
  ],
  aromatic: [
    "These aromatic residues are stacked together like books on a shelf—flat, parallel, and surprisingly stable. They're the intellectual power couple of the protein world, always engaged in deep π-π interactions.",
    "Like jazz musicians improvising together, these aromatic rings have found the perfect arrangement where they can be close without cramping each other's style. It's not about fusion; it's about complementary resonance.",
    "These aromatic residues are the cool kids of the protein, hanging out in their exclusive π-stacking club. They're like that hipster couple who were into obscure electron configurations before it was mainstream.",
    "Flat, rigid, and perfectly aligned—these aromatic residues have found their perfect match. It's like architectural elements in a precisely designed building, where form and function create something greater than the sum of its parts.",
    "These aromatic interactions are like a perfectly choreographed dance between two partners who never actually touch—maintaining the ideal distance for maximum attraction without the messiness of direct contact.",
    "These residues light up like a pair of drama magnets who thrive on intensity. Sparks fly, literally, and they leave a fluorescent trail wherever they go. The chemistry is strong, but can anyone survive this much passion?",
    "It's like that couple who lights up the room—and then breaks the room's metaphorical furniture with their over-the-top antics. Bright, bold, and way too much.",
  ],
  proline: [
    "With proline in the mix, this protein structure takes unexpected turns—literally. It's like having that one friend who always suggests wild detours on road trips, somehow making the journey more interesting.",
    "Proline: the amino acid equivalent of that person who refuses to conform to social norms. While other residues are forming neat, predictable structures, proline is over here doing structural parkour.",
    "These prolines create kinks in the protein chain like plot twists in a mystery novel. Just when you think you know where the structure is heading—BAM!—90-degree turn into uncharted conformational territory.",
    "Proline doesn't just break the rules; it rewrites the structural handbook. It's the revolutionary thinker of amino acids, creating avant-garde protein architecture that somehow still functions perfectly.",
    "Having proline in your sequence is like inviting a chaos agent to your otherwise orderly party. Suddenly, your nice alpha helix has a bend in it, your beta sheet has a twist, and somehow, it all works better than before.",
  ],
  glycine: [
    "Glycine brings flexibility to this relationship like that friend who's always up for anything. No bulky side chain, no strong opinions—just pure conformational freedom and possibilities.",
    "With its minimal side chain, glycine is the minimalist of amino acids. It's like that zen friend who owns exactly five items of clothing but somehow always looks perfectly appropriate for every occasion.",
    "Glycine: proving that sometimes less is more. While other amino acids are showing off with their fancy side chains, glycine creates essential flexibility with nothing but a humble hydrogen atom.",
    "This glycine-rich region is the structural equivalent of a yoga instructor—incredibly flexible, deceptively strong, and capable of conformations that make everyone else feel inadequate.",
    "Glycine doesn't need a side chain to make an impact. It's like that quiet person at meetings who says nothing for an hour, then delivers the one comment that changes everything.",
  ],
  mixed: [
    "This protein interaction is like a potluck dinner where everyone brought something different—hydrophobic forces brought the main dish, hydrogen bonds brought the sides, and there's a disulfide bridge for dessert. Somehow, it all works together.",
    "We've got a real structural party happening here—multiple interaction types all contributing to the relationship. It's like a successful band where everyone plays a different instrument but creates harmony together.",
    "This is the protein equivalent of a complex relationship that works on multiple levels—physical attraction (hydrophobic interactions), emotional connection (hydrogen bonds), and shared values (electrostatic complementarity).",
    "With this mix of interaction types, we're seeing a relationship built to withstand multiple challenges. If one interaction weakens, others compensate—it's like having both a romantic connection AND being best friends.",
    "This diverse interaction profile is like a well-diversified investment portfolio—not relying too heavily on any single bond type provides stability against the volatile conditions of cellular life.",
  ],
  repulsive: [
    "Oh no, not these two. This relationship was doomed before it began. Like siblings arguing over the front seat, they push, shove, and repel until someone calls for a time-out.",
    "Two like-charged residues in the same room? Disaster. They'll clash, bicker, and explode out of each other's orbits faster than you can say, 'Opposites attract!' Poor the parents who have to manage this mess!",
    "These residues are like two cats in a territory dispute—backs arched, fur raised, and neither willing to back down. The electrostatic repulsion between them creates a no-man's land that even water molecules avoid.",
    "Picture two divas with the same signature move trying to share a stage. The drama! The tension! The mutual shoving to claim the spotlight! These like-charged residues create more drama than a reality TV show finale.",
    "This interaction is the molecular equivalent of trying to push the same poles of two magnets together. Nature says no, physics says no, and yet here they are, forced into proximity and absolutely hating every moment of it.",
  ],
  electrostatic: [
    "Opposites attract, they said. And oh boy, do these residues deliver. Magnetic, unpredictable, and maybe just a little volatile—this bond might create the stability of a rock or the chaos of a summer storm.",
    "They're like Romeo and Juliet: destined to collide dramatically, but whether it's a balcony scene or a balcony collapse is anyone's guess.",
    "These charged residues found each other across a crowded protein core and it was electric—literally. Their attraction is so strong it can reorganize water molecules, shift pKa values, and make neighboring residues uncomfortable with their intensity.",
    "Like that couple who can't keep their hands off each other at dinner parties, these charged residues are constantly reaching across space to maintain contact. It's sweet but also maybe tone it down a bit? We're trying to fold a protein here.",
    "The electrostatic attraction between these residues is like gravity between celestial bodies—a fundamental force that shapes everything around it. Just as the moon pulls the tides, these charges pull the protein's structure into their preferred arrangement.",
  ],
  histidine: [
    "This residue is the wildcard. Protonated one day, neutral the next—good luck pinning down what it wants. Commitment issues? Or just impressively adaptive?",
    "They're like your friend who keeps ghosting you and then reappearing with tales of personal growth. Mysterious, elusive, and frustratingly charismatic.",
    "Histidine is the protein's mood ring, changing its charge state with the pH. It's like that friend who's different depending on who they're hanging out with—academic and serious in one crowd, wild and unpredictable in another.",
    "With a pKa around physiological pH, histidine lives on the edge between charged and neutral states. It's the molecular equivalent of someone who can't decide whether they're an introvert or extrovert and honestly, that ambiguity is its superpower.",
    "Histidine doesn't conform to your binary charged/uncharged classification system. It exists in a quantum superposition of charge states, collapsing into one form or another depending on its microenvironment. Very avant-garde.",
  ],
  vanderwaals: [
    "Subtle and almost invisible, these bonds are like the quiet neighbors who leave small but meaningful gestures: a shared lawn mower, a borrowed cup of sugar, a knowing nod.",
    "Blink and you'll miss them. But underestimate these sneaky stabilizers, and suddenly they'll be holding the whole neighborhood—or the whole protein—together.",
    "These interactions are the molecular equivalent of background music—barely noticeable individually, but remove them and suddenly everything feels off. They're the unsung heroes of protein stability.",
    "Van der Waals forces are like those friends who never make a big show of their support but are somehow always there when you need them. Individually weak, collectively essential.",
    "Like the gentle pressure of holding hands, these interactions aren't flashy or dramatic, but their cumulative effect creates a comfortable, stable connection that can withstand the test of time.",
  ],
  alphahelix: [
    "It's the relationship equivalent of a power couple on a steady, upward trajectory. They lift each other up, stay tightly connected, and always know which way is forward.",
    "Stable, predictable, and maybe a bit too perfect. You wonder what happens when the spiral stops—or whether it ever will.",
    "This alpha helix structure is like that friend who has their entire life planned out—career path, retirement savings, and vacation schedule for the next five years. Impressively organized, if a bit rigid.",
    "The alpha helix represents stability through cooperation—each turn supporting the next in a continuous spiral of mutual reinforcement. It's like a family tradition passed down through generations, creating a sense of identity and purpose.",
    "Like a perfectly choreographed dance routine, this alpha helix demonstrates what happens when everyone knows their role and executes it flawlessly. Beautiful to observe, challenging to maintain.",
  ],

  parallelbeta: [
    "They're synchronized, efficient, and always working toward a common goal. A power team with matching to-do lists and a shared Google calendar.",
    "Some might call them overly coordinated, but hey—when you're aiming for molecular glory, it pays to stay in sync.",
    "These parallel beta strands are like lanes on a highway—everyone moving in the same direction, maintaining their spacing, creating a system that efficiently transports energy across distances.",
    "Think of a rowing team moving in perfect unison—these parallel structures demonstrate the power of alignment and shared purpose. When everyone pulls in the same direction, the protein achieves remarkable stability.",
    "Like railroad tracks running side by side, these parallel beta sheets create a foundation that can support tremendous weight and pressure. They're not flashy, but they're fundamental.",
  ],

  antiparallelbeta: [
    "They may not always agree, but their bond is stronger for it. Opposites in motion, holding each other steady—even while arguing about which way to fold the laundry.",
    "It's like a couple with wildly different Spotify playlists who somehow make it work. The tension is palpable—but so is the strength.",
    "These antiparallel beta sheets are the molecular version of a productive debate—opposing viewpoints that strengthen rather than weaken the overall structure. The tension between them creates stability rather than chaos.",
    "Like two teams of tug-of-war competitors who have reached perfect equilibrium, these opposing forces create a standoff that results in remarkable structural integrity.",
    "Think of interlocking fingers from opposite hands—coming from different directions but creating a stronger grip than either could achieve alone. That's the antiparallel beta sheet strategy.",
  ],

  disorder: [
    "Chaotic, unpredictable, and surprisingly adaptable. They're the life of the party, and you never know who they'll end up dancing with next.",
    "Free spirits with commitment issues. They'll charm you, confuse you, and leave you wondering what just happened—but you'll probably go back for more.",
    "These disordered regions are like that friend who refuses to be pinned down to a specific career path but somehow excels at whatever they try. Frustratingly flexible, endlessly adaptable.",
    "Like improvisational jazz compared to classical music, these disordered structures prioritize adaptability over predictability. They may seem chaotic, but there's a method to their molecular madness.",
    "These intrinsically disordered regions are the protein equivalent of a blank canvas—undefined until they interact with a partner, at which point they transform into exactly what's needed for that specific relationship.",
  ],
}

// Define humor styles to add variety
const humorStyles = ["sarcastic", "observational", "absurdist", "self-deprecating", "witty", "deadpan", "satirical"]

// Define relationship metaphors
const relationshipMetaphors = [
  "romantic partners",
  "old married couple",
  "siblings",
  "roommates",
  "coworkers",
  "best friends",
  "mentor-mentee",
  "neighbors",
  "business partners",
  "bandmates",
]

// Define intensity modifiers
const intensityModifiers = {
  high: ["extraordinarily", "remarkably", "intensely", "profoundly", "exceptionally"],
  medium: ["notably", "significantly", "considerably", "markedly", "distinctly"],
  low: ["somewhat", "slightly", "marginally", "subtly", "faintly"],
}

// Define conclusion templates
const conclusionTemplates = [
  "In the grand molecular narrative, this interaction suggests {intensity} {quality} potential for long-term stability.",
  "The biochemical evidence points to a relationship with {intensity} {quality} compatibility, though environmental factors will play a role.",
  "From a structural perspective, this interaction shows {intensity} {quality} alignment of key elements.",
  "The Bio-Seer's analysis reveals {intensity} {quality} complementarity between these molecular entities.",
  "Reading between the amino acid lines, there's {intensity} {quality} resonance in this molecular partnership.",
]

// Define relationship qualities
const relationshipQualities = {
  positive: [
    "harmonious",
    "synergistic",
    "complementary",
    "balanced",
    "supportive",
    "resilient",
    "adaptive",
    "dynamic",
  ],
  neutral: ["complex", "nuanced", "multifaceted", "evolving", "situational", "context-dependent", "fluctuating"],
  negative: ["challenging", "strained", "unstable", "tense", "conflicting", "misaligned", "discordant"],
}

// First, let's update the generateComplexInterpretation function to be more logically consistent with relationship types

// In the generateComplexInterpretation function, replace the current implementation with a more structured approach:

// Update the generateComplexInterpretation function to handle the new β-Sheet types
function generateComplexInterpretation(structuralData, names) {
  // Start with determining if there's an interaction at all - this is the most important factor
  const hasInteraction =
    structuralData.interaction_formation === "Yes" || structuralData.interaction_formation === "Partially"
  const isPartialInteraction = structuralData.interaction_formation === "Partially"
  const noInteraction = structuralData.interaction_formation === "No"

  // Get relationship type
  const relationshipType = structuralData.type_of_relationship

  // Determine the primary interaction type based on structural data
  let primaryInteractionType = "mixed"
  let secondaryInteractionType = null
  let intensity = "medium"
  let relationshipQuality = "neutral"

  // Map structural data to interaction types
  if (structuralData.amino_acids_in_contact.includes("Hydrophobic")) {
    primaryInteractionType = "hydrophobic"
  } else if (structuralData.amino_acids_in_contact.includes("Electrostatic")) {
    primaryInteractionType = Math.random() > 0.5 ? "ionic" : "electrostatic"
  } else if (structuralData.amino_acids_in_contact.includes("Polar")) {
    primaryInteractionType = "hydrophilic"
  } else if (noInteraction) {
    // If there's no interaction formation, it might be repulsive
    primaryInteractionType = Math.random() > 0.7 ? "repulsive" : "mixed"
  }

  // Determine secondary interaction type based on special amino acids
  if (structuralData.special_amino_acids.includes("Disulfide")) {
    secondaryInteractionType = "disulfide"
  } else if (structuralData.special_amino_acids.includes("Prolines")) {
    secondaryInteractionType = "proline"
  } else if (structuralData.special_amino_acids.includes("Fluorescent")) {
    secondaryInteractionType = "aromatic"
  } else if (structuralData.special_amino_acids.includes("Histidines")) {
    secondaryInteractionType = "histidine"
  } else if (structuralData.secondary_structure.includes("Disordered")) {
    secondaryInteractionType = "glycine"
  } else if (structuralData.amino_acids_in_contact.includes("Mixed")) {
    // Get a random interaction type, excluding 'mixed' to avoid redundancy
    const availableTypes = Object.keys(interpretationTemplates).filter(
      (type) => type !== "mixed" && type !== primaryInteractionType,
    )
    secondaryInteractionType = availableTypes[Math.floor(Math.random() * availableTypes.length)]
  }

  // Check for structural elements in the secondary structure data
  if (structuralData.secondary_structure.includes("α-Helix")) {
    // 30% chance to focus on alpha helix structure instead of amino acid interactions
    if (Math.random() < 0.3) {
      secondaryInteractionType = "alphahelix"
    }
  } else if (structuralData.secondary_structure.includes("parallel β-Sheet")) {
    // For parallel beta sheets
    if (Math.random() < 0.3) {
      secondaryInteractionType = "parallelbeta"
    }
  } else if (structuralData.secondary_structure.includes("anti parallel β-Sheet")) {
    // For antiparallel beta sheets
    if (Math.random() < 0.3) {
      secondaryInteractionType = "antiparallelbeta"
    }
  } else if (structuralData.secondary_structure.includes("β-Sheet")) {
    // For generic beta sheets, randomly choose between parallel and antiparallel
    if (Math.random() < 0.3) {
      secondaryInteractionType = Math.random() < 0.5 ? "parallelbeta" : "antiparallelbeta"
    }
  } else if (structuralData.secondary_structure.includes("Disordered")) {
    // 30% chance to focus on disorder when it's present
    if (Math.random() < 0.3) {
      secondaryInteractionType = "disorder"
    }
  }

  // Add a chance for Van der Waals interactions to be mentioned
  if (!secondaryInteractionType || Math.random() < 0.2) {
    // 20% chance to mention Van der Waals forces as they're present in all proteins
    secondaryInteractionType = "vanderwaals"
  }

  // Determine intensity based on interaction formation
  if (structuralData.interaction_formation === "Yes") {
    intensity = "high"
    relationshipQuality = "positive"
  } else if (structuralData.interaction_formation === "Partially") {
    intensity = "medium"
    relationshipQuality = "neutral"
  } else {
    intensity = "low"
    relationshipQuality = "negative"
  }

  // Adjust relationship quality based on relationship type
  if (structuralData.type_of_relationship === "Accomplished Couple") {
    relationshipQuality = relationshipQuality === "negative" ? "neutral" : "positive"
  } else if (structuralData.type_of_relationship === "Desired Couple") {
    // More variable for desired couples
    relationshipQuality = ["positive", "neutral", "negative"][Math.floor(Math.random() * 3)]
  }

  // Create relationship-specific descriptions that avoid inappropriate metaphors
  let relationshipDescription = ""

  if (relationshipType === "Siblings/Brothers") {
    if (hasInteraction) {
      relationshipDescription = noInteraction
        ? "These molecules maintain their independence like siblings who have grown apart but still share genetic similarities. They exist in proximity without forming meaningful bonds."
        : isPartialInteraction
          ? "These molecules show a familial connection like siblings who maintain contact but lead separate lives. Their interaction is present but not overwhelming."
          : "These molecules display a strong familial bond like siblings who remain close throughout life. Their interaction is stable and supportive."
    } else {
      relationshipDescription =
        "These molecules show no interaction, like estranged siblings who have lost their connection. They maintain their individual structures without influencing each other."
    }
  } else if (relationshipType === "Accomplished Couple") {
    if (hasInteraction) {
      relationshipDescription = noInteraction
        ? "These molecules fail to form a lasting bond despite their potential, like a relationship that couldn't overcome fundamental differences."
        : isPartialInteraction
          ? "These molecules form a moderate connection like partners who are compatible but maintain some independence. Their interaction is present but allows for individual expression."
          : "These molecules form a strong, stable bond like long-term partners who have built a life together. Their interaction is complementary and reinforcing."
    } else {
      relationshipDescription =
        "These molecules show no interaction, suggesting incompatibility despite proximity. Like a couple that looks good on paper but lacks chemistry, they maintain their individual structures without forming bonds."
    }
  } else if (relationshipType === "Desired Couple") {
    if (hasInteraction) {
      relationshipDescription = noInteraction
        ? "These molecules show potential but fail to connect, like two people with chemistry who never quite find the right timing."
        : isPartialInteraction
          ? "These molecules form a tentative connection, like the early stages of a relationship where both parties are still discovering compatibility."
          : "These molecules form a surprisingly strong bond, like a new relationship with immediate and powerful chemistry. Their interaction suggests promising compatibility."
    } else {
      relationshipDescription =
        "These molecules show no interaction despite proximity, like potential partners who are attracted to each other but face fundamental barriers to connection."
    }
  } else if (relationshipType === "Work Colleagues") {
    if (hasInteraction) {
      relationshipDescription = noInteraction
        ? "These molecules maintain professional distance without forming bonds, like colleagues who interact only when necessary."
        : isPartialInteraction
          ? "These molecules form a functional connection like colleagues who work well together but maintain clear boundaries. Their interaction is purposeful but limited."
          : "These molecules form an efficient working bond like colleagues with exceptional professional chemistry. Their interaction is productive and goal-oriented."
    } else {
      relationshipDescription =
        "These molecules show no interaction, like colleagues assigned to the same project but unable to find common ground. They maintain their individual approaches without productive collaboration."
    }
  } else {
    // Default for "Prefer Not To Say" or any other type
    if (hasInteraction) {
      relationshipDescription = noInteraction
        ? "These molecules exist in proximity without forming meaningful connections. Their individual structures remain unaffected by each other."
        : isPartialInteraction
          ? "These molecules form a moderate connection that balances togetherness with independence. Their interaction is present but not all-consuming."
          : "These molecules form a strong, stable bond with clear complementarity. Their interaction suggests natural compatibility."
    } else {
      relationshipDescription =
        "These molecules show no interaction despite their proximity. They maintain their individual structures without influencing each other."
    }
  }

  // Select templates for molecular interactions that make sense with the relationship type
  let primaryTemplate = ""
  let secondaryTemplate = ""

  // Only include interaction templates if there is an interaction
  if (hasInteraction) {
    // Filter templates to avoid inappropriate metaphors for the relationship type
    const filteredTemplates = interpretationTemplates[primaryInteractionType].filter((template) => {
      // For siblings, avoid templates with romantic/couple references
      if (relationshipType === "Siblings/Brothers") {
        return !template.includes("couple") && !template.includes("dating") && !template.includes("lovers")
      }
      // For work colleagues, avoid overly intimate references
      if (relationshipType === "Work Colleagues") {
        return !template.includes("love") && !template.includes("dating") && !template.includes("romance")
      }
      return true
    })

    // If we filtered out all templates, use a default one
    if (filteredTemplates.length === 0) {
      primaryTemplate = "These molecular interactions show characteristics typical of their structural properties."
    } else {
      primaryTemplate = filteredTemplates[Math.floor(Math.random() * filteredTemplates.length)]
    }

    // Do the same for secondary template if it exists
    if (secondaryInteractionType) {
      const filteredSecondaryTemplates = interpretationTemplates[secondaryInteractionType].filter((template) => {
        if (relationshipType === "Siblings/Brothers") {
          return !template.includes("couple") && !template.includes("dating") && !template.includes("lovers")
        }
        if (relationshipType === "Work Colleagues") {
          return !template.includes("love") && !template.includes("dating") && !template.includes("romance")
        }
        return true
      })

      if (filteredSecondaryTemplates.length > 0) {
        secondaryTemplate = filteredSecondaryTemplates[Math.floor(Math.random() * filteredSecondaryTemplates.length)]
      }
    }
  }

  // Select intensity modifier
  const intensityModifier =
    intensityModifiers[intensity][Math.floor(Math.random() * intensityModifiers[intensity].length)]

  // Select relationship quality
  const quality =
    relationshipQualities[relationshipQuality][
      Math.floor(Math.random() * relationshipQualities[relationshipQuality].length)
    ]

  // Select conclusion that's appropriate for the relationship type
  let conclusionOptions = []

  if (relationshipType === "Siblings/Brothers") {
    conclusionOptions = [
      "The molecular evidence suggests a {intensity} {quality} familial bond with deep-rooted connections.",
      "This interaction displays {intensity} {quality} patterns typical of relationships with shared origins.",
      "From a structural perspective, these molecules show {intensity} {quality} characteristics of entities with common foundations.",
    ]
  } else if (relationshipType === "Accomplished Couple") {
    conclusionOptions = [
      "The structural data reveals a {intensity} {quality} established bond that has matured over time.",
      "This interaction shows {intensity} {quality} patterns of mutual adaptation and complementarity.",
      "The molecular analysis indicates a {intensity} {quality} partnership with synchronized structural elements.",
    ]
  } else if (relationshipType === "Desired Couple") {
    conclusionOptions = [
      "The molecular patterns suggest {intensity} {quality} potential that may develop under the right conditions.",
      "There's {intensity} {quality} chemistry that could evolve into something more structured with time.",
      "The structural analysis reveals {intensity} {quality} compatibility that remains partially unexpressed.",
    ]
  } else if (relationshipType === "Work Colleagues") {
    conclusionOptions = [
      "The structural analysis indicates a {intensity} {quality} professional alignment that serves functional purposes.",
      "From a biochemical perspective, this interaction shows {intensity} {quality} collaborative potential with appropriate boundaries.",
      "The molecular data suggests a {intensity} {quality} working relationship focused on structural efficiency.",
    ]
  } else {
    conclusionOptions = [
      "In the grand molecular narrative, this interaction suggests {intensity} {quality} potential for long-term stability.",
      "The biochemical evidence points to a relationship with {intensity} {quality} compatibility, though environmental factors will play a role.",
      "From a structural perspective, this interaction shows {intensity} {quality} alignment of key elements.",
    ]
  }

  let conclusion = conclusionOptions[Math.floor(Math.random() * conclusionOptions.length)]
  conclusion = conclusion.replace("{intensity}", intensityModifier).replace("{quality}", quality)

  // Build the interpretation based on whether there's an interaction
  let interpretation = `The molecular connection between ${names[0] || "Partner 1"} and ${names[1] || "Partner 2"} reveals fascinating insights. ${relationshipDescription}`

  // Only add interaction details if there is an interaction
  if (hasInteraction && primaryTemplate) {
    interpretation += `\n\nAt the molecular level: ${primaryTemplate}`

    if (secondaryTemplate) {
      interpretation += `\n\nAdditionally, ${secondaryTemplate}`
    }
  }

  // Add structural information regardless of interaction
  if (structuralData.secondary_structure) {
    let structureDescription = ""
    if (structuralData.secondary_structure.includes("α-Helix")) {
      structureDescription = "The presence of α-helical structures suggests stability and ordered patterns"
    } else if (structuralData.secondary_structure.includes("parallel β-Sheet")) {
      structureDescription = "The parallel β-sheet formations indicate strength through alignment and shared direction"
    } else if (structuralData.secondary_structure.includes("anti parallel β-Sheet")) {
      structureDescription =
        "The anti-parallel β-sheet structures suggest strength through complementary differences and opposing directions"
    } else if (structuralData.secondary_structure.includes("β-Sheet")) {
      structureDescription = "The β-sheet formations indicate strength through alignment and cooperative structure"
    } else if (structuralData.secondary_structure.includes("Disordered")) {
      structureDescription = "The disordered regions suggest flexibility and adaptability to changing conditions"
    } else if (structuralData.secondary_structure.includes("Mixed")) {
      structureDescription = "The mix of structural elements indicates a balance between stability and adaptability"
    }

    if (structureDescription) {
      interpretation += `\n\n${structureDescription} in these molecular entities.`
    }
  }

  // Add conclusion
  interpretation += `\n\n${conclusion}`

  return interpretation
}

// Also update the handleSendMessage and handleSuggestedQuestion functions to use the same relationship-specific logic

// Function to generate a more complex interpretation
// function generateComplexInterpretation(structuralData, names) {
//   // Determine the primary interaction type based on structural data
//   let primaryInteractionType = "mixed"
//   let secondaryInteractionType = null
//   let intensity = "medium"
//   let relationshipQuality = "neutral"

//   // Map structural data to interaction types
//   if (structuralData.amino_acids_in_contact.includes("Hydrophobic")) {
//     primaryInteractionType = "hydrophobic"
//   } else if (structuralData.amino_acids_in_contact.includes("Electrostatic")) {
//     primaryInteractionType = Math.random() > 0.5 ? "ionic" : "electrostatic"
//   } else if (structuralData.amino_acids_in_contact.includes("Polar")) {
//     primaryInteractionType = "hydrophilic"
//   } else if (structuralData.interaction_formation === "No") {
//     // If there's no interaction formation, it might be repulsive
//     primaryInteractionType = Math.random() > 0.7 ? "repulsive" : "mixed"
//   }

//   // Determine secondary interaction type based on special amino acids
//   if (structuralData.special_amino_acids.includes("Disulfide")) {
//     secondaryInteractionType = "disulfide"
//   } else if (structuralData.special_amino_acids.includes("Prolines")) {
//     secondaryInteractionType = "proline"
//   } else if (structuralData.special_amino_acids.includes("Fluorescent")) {
//     secondaryInteractionType = "aromatic"
//   } else if (structuralData.special_amino_acids.includes("Histidines")) {
//     secondaryInteractionType = "histidine"
//   } else if (structuralData.secondary_structure.includes("Disordered")) {
//     secondaryInteractionType = "glycine"
//   } else if (structuralData.amino_acids_in_contact.includes("Mixed")) {
//     // Get a random interaction type, excluding 'mixed' to avoid redundancy
//     const availableTypes = Object.keys(interpretationTemplates).filter(
//       (type) => type !== "mixed" && type !== primaryInteractionType,
//     )
//     secondaryInteractionType = availableTypes[Math.floor(Math.random() * availableTypes.length)]
//   }

//   // Check for structural elements in the secondary structure data
//   if (structuralData.secondary_structure.includes("α-Helix")) {
//     // 30% chance to focus on alpha helix structure instead of amino acid interactions
//     if (Math.random() < 0.3) {
//       secondaryInteractionType = "alphahelix"
//     }
//   } else if (structuralData.secondary_structure.includes("β-Sheet")) {
//     // For beta sheets, randomly choose between parallel and antiparallel
//     if (Math.random() < 0.3) {
//       secondaryInteractionType = Math.random() < 0.5 ? "parallelbeta" : "antiparallelbeta"
//     }
//   } else if (structuralData.secondary_structure.includes("Disordered")) {
//     // 30% chance to focus on disorder when it's present
//     if (Math.random() < 0.3) {
//       secondaryInteractionType = "disorder"
//     }
//   }

//   // Add a chance for Van der Waals interactions to be mentioned
//   if (!secondaryInteractionType || Math.random() < 0.2) {
//     // 20% chance to mention Van der Waals forces as they're present in all proteins
//     secondaryInteractionType = "vanderwaals"
//   }

//   // Determine intensity based on interaction formation
//   if (structuralData.interaction_formation === "Yes") {
//     intensity = "high"
//     relationshipQuality = "positive"
//   } else if (structuralData.interaction_formation === "Partially") {
//     intensity = "medium"
//     relationshipQuality = "neutral"
//   } else {
//     intensity = "low"
//     relationshipQuality = "negative"
//   }

//   // Adjust relationship quality based on relationship type
//   if (structuralData.type_of_relationship === "Accomplished Couple") {
//     relationshipQuality = relationshipQuality === "negative" ? "neutral" : "positive"
//   } else if (structuralData.type_of_relationship === "Desired Couple") {
//     // More variable for desired couples
//     relationshipQuality = ["positive", "neutral", "negative"][Math.floor(Math.random() * 3)]
//   }

//   // Make interpretation more logically aligned with the relationship type
//   if (structuralData.type_of_relationship) {
//     // Select relationship-specific metaphors based on the relationship type
//     let relationshipSpecificMetaphors = []

//     switch (structuralData.type_of_relationship) {
//       case "Siblings/Brothers":
//         relationshipSpecificMetaphors = [
//           "siblings with a lifelong bond",
//           "brothers who know each other's secrets",
//           "family members with shared history",
//           "siblings who bicker but always have each other's backs",
//           "family with deep genetic connections",
//         ]
//         break
//       case "Accomplished Couple":
//         relationshipSpecificMetaphors = [
//           "a long-term couple who've weathered many storms",
//           "partners who've built something lasting",
//           "a power couple with complementary strengths",
//           "life partners who've grown together over time",
//           "a married couple who finish each other's sentences",
//         ]
//         break
//       case "Desired Couple":
//         relationshipSpecificMetaphors = [
//           "potential lovers circling each other",
//           "a relationship with unrealized potential",
//           "two people with chemistry that hasn't fully developed",
//           "a connection that could blossom under the right conditions",
//           "partners still discovering each other's depths",
//         ]
//         break
//       case "Work Colleagues":
//         relationshipSpecificMetaphors = [
//           "professional collaborators with clear boundaries",
//           "teammates focused on shared goals",
//           "colleagues who respect each other's expertise",
//           "coworkers who maintain a productive distance",
//           "professional partners who complement each other's skills",
//         ]
//         break
//       default:
//         // Use the general metaphors for "I prefer not to say"
//         relationshipSpecificMetaphors = relationshipMetaphors
//     }

//     // If we have relationship-specific metaphors, use one of those instead
//     if (relationshipSpecificMetaphors.length > 0) {
//       const metaphor = relationshipSpecificMetaphors[Math.floor(Math.random() * relationshipSpecificMetaphors.length)]
//     }
//   }

//   // Select templates
//   const primaryTemplate =
//     interpretationTemplates[primaryInteractionType][
//       Math.floor(Math.random() * interpretationTemplates[primaryInteractionType].length)
//     ]

//   let secondaryTemplate = ""
//   if (secondaryInteractionType) {
//     secondaryTemplate =
//       interpretationTemplates[secondaryInteractionType][
//         Math.floor(Math.random() * interpretationTemplates[secondaryInteractionType].length)
//       ]
//   }

//   // Select a relationship metaphor
//   const metaphor = relationshipMetaphors[Math.floor(Math.random() * relationshipMetaphors.length)]

//   // Select intensity modifier
//   const intensityModifier =
//     intensityModifiers[intensity][Math.floor(Math.random() * intensityModifiers[intensity].length)]

//   // Select relationship quality
//   const quality =
//     relationshipQualities[relationshipQuality][
//       Math.floor(Math.random() * relationshipQualities[relationshipQuality].length)
//     ]

//   // Select conclusion that's appropriate for the relationship type
//   const conclusionOptions = [...conclusionTemplates]
//   if (structuralData.type_of_relationship === "Desired Couple") {
//     // Add some potential-focused conclusions for desired couples
//     conclusionOptions.push(
//       "The molecular patterns suggest {intensity} {quality} potential that may develop under the right conditions.",
//       "There's {intensity} {quality} chemistry that could evolve into something more structured with time.",
//     )
//   } else if (structuralData.type_of_relationship === "Work Colleagues") {
//     // Add some professional-focused conclusions for work colleagues
//     conclusionOptions.push(
//       "The structural analysis indicates a {intensity} {quality} professional alignment that serves functional purposes.",
//       "From a biochemical perspective, this interaction shows {intensity} {quality} collaborative potential with appropriate boundaries.",
//     )
//   } else if (structuralData.type_of_relationship === "Siblings/Brothers") {
//     // Add some family-focused conclusions for siblings
//     conclusionOptions.push(
//       "The molecular evidence suggests a {intensity} {quality} familial bond with deep-rooted connections.",
//       "This interaction displays {intensity} {quality} patterns typical of relationships with shared origins.",
//     )
//   } else if (structuralData.type_of_relationship === "Accomplished Couple") {
//     // Add some established relationship conclusions
//     conclusionOptions.push(
//       "The structural data reveals a {intensity} {quality} established bond that has matured over time.",
//       "This interaction shows {intensity} {quality} patterns of mutual adaptation and complementarity.",
//     )
//   }

//   let conclusion = conclusionOptions[Math.floor(Math.random() * conclusionOptions.length)]
//   conclusion = conclusion.replace("{intensity}", intensityModifier).replace("{quality}", quality)

//   // Build the interpretation
//   let interpretation = `The molecular connection between ${names[0] || "Partner 1"} and ${names[1] || "Partner 2"} reveals fascinating insights. ${primaryTemplate}`

//   if (secondaryTemplate) {
//     interpretation += `\n\nAdditionally, ${secondaryTemplate}`
//   }

//   interpretation += `\n\nIn many ways, these molecules interact like ${metaphor}, but with biochemical twists that make their relationship uniquely their own. ${conclusion}`

//   return interpretation
// }

// Define a default responses object instead of trying to import it with require
// const defaultResponses = {
//   responses: [
//     {
//       main_relationship: "Siblings/Brothers",
//       interaction_stability: "Yes",
//       secondary_structure: "Fully α-Helix",
//       amino_acid_contact: "Fully Hydrophobic (A, V, L, I, M, F, etc.)",
//       special_amino_acids: "Prolines (P)",
//       interpretation: {
//         en: "These partners interact like siblings—close, but with some quirks that make them dynamic. Their bond appears stable and enduring. The fully α-helical structure provides rigidity and strength to the interaction. Hydrophobic interactions keep the partners together, avoiding water. Proline residues introduce kinks, adding some structural constraints. They're basically the protein version of a sitcom family.",
//         es: "Estos socios interactúan como hermanos: cercanos, pero con algunas peculiaridades que los hacen dinámicos. Su vínculo parece estable y duradero. La estructura completamente α-helicoidal proporciona rigidez y fuerza a la interacción. Las interacciones hidrofóbicas mantienen a los socios unidos, evitando el agua. Los residuos de prolina introducen giros, lo que añade algunas restricciones estructurales. Son básicamente la versión proteica de una familia de comedia de situación.",
//       },
//     },
//     {
//       main_relationship: "Accomplished Couple",
//       interaction_stability: "Partially",
//       secondary_structure: "Mixed (α-Helix + β-Sheet)",
//       amino_acid_contact: "Mixed Electrostatic & Hydrophobic",
//       special_amino_acids: "Histidines (H)",
//       interpretation: {
//         en: "This interaction is as stable and harmonious as an accomplished couple, complementing each other perfectly. Their interaction is somewhat stable but with occasional fluctuations. The combination of α-helices and β-sheets provides both stability and adaptability. The contact is balanced between hydrophobic attraction and electrostatic pull. Histidine residues may provide pH-dependent binding properties. They're like a power couple, but with occasional disagreements over the thermostat.",
//         es: "Esta interacción es tan estable y armoniosa como la de una pareja consolidada, complementándose. Su interacción es algo estable, pero con fluctuaciones ocasionales. La combinación de α-hélices y β-láminas proporciona estabilidad y adaptabilidad. El contacto está equilibrado entre la atracción hidrofóbica y el tirón electrostático. Los residuos de histidina pueden proporcionar propiedades de unión dependientes del pH. Son como una pareja poderosa, pero con desacuerdos ocasionales sobre el termostato.",
//       },
//     },
//     {
//       main_relationship: "Desired Couple",
//       interaction_stability: "No",
//       secondary_structure: "Fully Disordered",
//       amino_acid_contact: "None",
//       special_amino_acids: "None",
//       interpretation: {
//         en: "This interaction is like a desired couple that hasn't quite connected. The fully disordered structure suggests a lack of stable interaction. The absence of specific amino acid contacts indicates minimal binding affinity. They're like two people who keep missing each other at parties.",
//         es: "Esta interacción es como una pareja deseada que no ha conectado del todo. La estructura totalmente desordenada sugiere una falta de interacción estable. La ausencia de contactos específicos de aminoácidos indica una afinidad de unión mínima. Son como dos personas que siguen perdiéndose en las fiestas.",
//       },
//     },
//     {
//       main_relationship: "Work Colleagues",
//       interaction_stability: "Yes",
//       secondary_structure: "Mixed (α-Helix + β-Sheet + Disordered)",
//       amino_acid_contact: "Polar-Polar (N, Q, S, T, Y, etc.)",
//       special_amino_acids: "None",
//       interpretation: {
//         en: "This interaction is like work colleagues—professional and functional. The mixed secondary structure provides a balance of stability and flexibility. Polar-polar contacts suggest a cooperative, but not overly intimate, relationship. They get the job done, but don't expect them to hang out after hours.",
//         es: "Esta interacción es como la de colegas de trabajo: profesional y funcional. La estructura secundaria mixta proporciona un equilibrio de estabilidad y flexibilidad. Los contactos polares-polares sugieren una relación cooperativa, pero no demasiado íntima. Hacen el trabajo, pero no esperes que salgan después del trabajo.",
//       },
//     },
//   ],
// }

interface BioSeerInterpretationProps {
  names: string[]
  structuralData: any
  language?: string
}

export function BioSeerInterpretation({ names, structuralData, language = "en" }: BioSeerInterpretationProps) {
  const [interpretation, setInterpretation] = useState("")
  const [displayedInterpretation, setDisplayedInterpretation] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [relationshipType, setRelationshipType] = useState("")
  const [intensity, setIntensity] = useState("Medium")
  const [loading, setLoading] = useState(true)
  const [chatMessages, setChatMessages] = useState<any[]>([])
  const [currentMessage, setCurrentMessage] = useState("")
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [showChatInterface, setShowChatInterface] = useState(false)

  const t = translations[language]

  // Animation speed (ms)
  const typingSpeed = 20

  useEffect(() => {
    if (structuralData) {
      setLoading(true)
      // Simulate API call or processing time
      setTimeout(() => {
        generateInterpretation()
        setLoading(false)
      }, 1500)
    }
  }, [structuralData, language])

  // Typewriter effect
  useEffect(() => {
    if (!loading && interpretation) {
      const timer = setTimeout(() => {
        if (currentIndex < interpretation.length) {
          setDisplayedInterpretation(interpretation.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      }, typingSpeed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, interpretation, loading])

  // Auto-scroll chat to bottom when new messages appear
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chatMessages])

  // Initialize default chat questions when component mounts
  useEffect(() => {
    if (!chatMessages.length && !loading && interpretation) {
      setChatMessages([
        {
          type: "system",
          content:
            language === "en"
              ? "Ask the Bio-Seer about this interpretation or the relationship between these structures."
              : "Pregúntale al Bio-Vidente sobre esta interpretación o la relación entre estas estructuras.",
        },
      ])
    }
  }, [loading, interpretation, language, chatMessages.length])

  // Helper function to translate relationship types
  function translateRelationshipType(type: string) {
    switch (type) {
      case "Siblings/Brothers":
        return "Hermanos"
      case "Accomplished Couple":
        return "Pareja Establecida"
      case "Desired Couple":
        return "Pareja Deseada"
      case "Work Colleagues":
        return "Colegas de Trabajo"
      case "Prefer Not To Say":
        return "Prefiero no decir"
      default:
        return type
    }
  }

  // Update the generateInterpretation function to use our new complex interpretation generator
  const generateInterpretation = () => {
    try {
      // Generate a complex interpretation using our new function
      const complexInterpretation = generateComplexInterpretation(structuralData, names)

      setInterpretation(complexInterpretation)
      setDisplayedInterpretation("")
      setCurrentIndex(0) // Reset for typewriter effect

      // Set relationship type for display
      setRelationshipType(structuralData.type_of_relationship)

      // Set intensity based on interaction formation
      if (structuralData.interaction_formation === "Yes") {
        setIntensity(language === "en" ? "Strong" : "Fuerte")
      } else if (structuralData.interaction_formation === "Partially") {
        setIntensity(language === "en" ? "Medium" : "Media")
      } else {
        setIntensity(language === "en" ? "Weak" : "Débil")
      }
    } catch (error) {
      console.error("Error generating interpretation:", error)

      // Fallback interpretation if something goes wrong
      const fallbackInterpretation =
        language === "en"
          ? `The molecular analysis reveals a unique connection between ${names[0] || "Partner 1"} and ${names[1] || "Partner 2"}. While I can't fully interpret the complexity of this relationship, there's definitely something interesting happening at the molecular level. Perhaps some things are best left to the imagination rather than the Bio-Seer's analysis.`
          : `El análisis molecular revela una conexión única entre ${names[0] || "Socio 1"} y ${names[1] || "Socio 2"}. Aunque no puedo interpretar completamente la complejidad de esta relación, definitivamente está sucediendo algo interesante a nivel molecular. Quizás algunas cosas es mejor dejarlas a la imaginación en lugar del análisis del Bio-Vidente.`

      setInterpretation(fallbackInterpretation)
      setDisplayedInterpretation("")
      setCurrentIndex(0)

      // Set default values for display
      setRelationshipType(structuralData.type_of_relationship || "Unknown")
      setIntensity(language === "en" ? "Medium" : "Media")
    }
  }

  // Also update the handleSendMessage function to use our new templates for more varied responses
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return

    // Add user message to chat
    const newMessage = { type: "user", content: currentMessage }
    setChatMessages([...chatMessages, newMessage])

    // Clear input field
    setCurrentMessage("")

    // Generate response (more varied responses based on our templates)
    setTimeout(() => {
      let response = ""
      const question = newMessage.content.toLowerCase()

      // Consider relationship type in responses
      const relationshipType = structuralData.type_of_relationship
      let relationshipContext = ""

      // Add relationship-specific context
      if (relationshipType === "Siblings/Brothers") {
        relationshipContext = "Given the sibling/familial nature of this relationship, "
      } else if (relationshipType === "Accomplished Couple") {
        relationshipContext = "Considering this is an established partnership, "
      } else if (relationshipType === "Desired Couple") {
        relationshipContext = "With this relationship's potential still developing, "
      } else if (relationshipType === "Work Colleagues") {
        relationshipContext = "In the context of a professional relationship, "
      }

      // Determine which interaction type to use for the response
      let responseType = "mixed"

      if (question.includes("toxic") || question.includes("bad") || question.includes("negative")) {
        if (structuralData.amino_acids_in_contact === "Fully Electrostatic (Charged: R, K, E, D)") {
          responseType = "ionic"
        } else if (structuralData.special_amino_acids.includes("Disulfide")) {
          responseType = "disulfide"
        } else {
          responseType = "hydrophobic"
        }

        // Get a random template from the selected type
        const templates = interpretationTemplates[responseType]
        response = templates[Math.floor(Math.random() * templates.length)]

        // Add relationship context to the response
        response +=
          language === "en"
            ? `\n\nRegarding toxicity specifically, ${relationshipContext}the Bio-Seer observes ${structuralData.interaction_formation === "Yes" ? "strong bonds that suggest a healthy foundation" : structuralData.interaction_formation === "Partially" ? "moderate connections with some areas of potential conflict" : "weak interactions that might indicate compatibility challenges"}.`
            : `\n\nEn cuanto a la toxicidad específicamente, ${relationshipContext}el Bio-Vidente observa ${structuralData.interaction_formation === "Yes" ? "fuertes enlaces que sugieren una base saludable" : structuralData.interaction_formation === "Partially" ? "conexiones moderadas con algunas áreas de conflicto potencial" : "interacciones débiles que podrían indicar desafíos de compatibilidad"}.`
      } else if (question.includes("succeed") || question.includes("future") || question.includes("potential")) {
        // Select a conclusion template and customize it
        let conclusion = conclusionTemplates[Math.floor(Math.random() * conclusionTemplates.length)]
        const intensity =
          structuralData.interaction_formation === "Yes"
            ? "high"
            : structuralData.interaction_formation === "Partially"
              ? "medium"
              : "low"
        const qualityType =
          structuralData.interaction_formation === "Yes"
            ? "positive"
            : structuralData.interaction_formation === "Partially"
              ? "neutral"
              : "negative"

        const intensityModifier =
          intensityModifiers[intensity][Math.floor(Math.random() * intensityModifiers[intensity].length)]
        const quality =
          relationshipQualities[qualityType][Math.floor(Math.random() * relationshipQualities[qualityType].length)]

        conclusion = conclusion.replace("{intensity}", intensityModifier).replace("{quality}", quality)

        // Add relationship context to the response
        response =
          language === "en"
            ? `Looking into the molecular future of this relationship, ${relationshipContext}the Bio-Seer observes patterns that suggest interesting possibilities. ${conclusion} The structural ${structuralData.secondary_structure.toLowerCase()} configuration indicates ${structuralData.secondary_structure.includes("Mixed") ? "adaptability to changing conditions" : structuralData.secondary_structure.includes("α-Helix") ? "stability and resilience" : structuralData.secondary_structure.includes("β-Sheet") ? "strength through cooperation" : "flexibility and spontaneity"}.`
            : `Mirando hacia el futuro molecular de esta relación, ${relationshipContext}el Bio-Vidente observa patrones que sugieren posibilidades interesantes. ${conclusion} La configuración estructural ${structuralData.secondary_structure.toLowerCase()} indica ${structuralData.secondary_structure.includes("Mixed") ? "adaptabilidad a condiciones cambiantes" : structuralData.secondary_structure.includes("α-Helix") ? "estabilidad y resiliencia" : structuralData.secondary_structure.includes("β-Sheet") ? "fuerza a través de la cooperación" : "flexibilidad y espontaneidad"}.`
      } else {
        // For other questions, generate a more creative response
        // Select a random interaction type for variety
        const randomType =
          Object.keys(interpretationTemplates)[Math.floor(Math.random() * Object.keys(interpretationTemplates).length)]
        const templates = interpretationTemplates[randomType]
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)]

        // Add relationship context to the response
        response =
          language === "en"
            ? `The Bio-Seer contemplates your question through the lens of ${randomType} interactions... ${relationshipContext}${randomTemplate.split(".")[0]}. This pattern suggests that ${names[0] || "Partner 1"} and ${names[1] || "Partner 2"} have a relationship with unique molecular properties that might manifest in unexpected ways.`
            : `El Bio-Vidente contempla tu pregunta a través del lente de interacciones ${randomType}... ${relationshipContext}${randomTemplate.split(".")[0]}. Este patrón sugiere que ${names[0] || "Socio 1"} y ${names[1] || "Socio 2"} tienen una relación con propiedades moleculares únicas que podrían manifestarse de maneras inesperadas.`
      }

      setChatMessages((prev) => [...prev, { type: "bioseer", content: response }])
    }, 1500)
  }

  // Update the handleSuggestedQuestion function to use the same logic as handleSendMessage
  const handleSuggestedQuestion = (question: string) => {
    // Add selected question as user message
    const newMessage = { type: "user", content: question }

    // Filter out all suggested questions
    const filteredMessages = chatMessages.filter((msg) => msg.type !== "suggested")
    setChatMessages([...filteredMessages, newMessage])

    // Simulate response using the same logic as handleSendMessage
    setTimeout(() => {
      let response = ""
      const questionLower = question.toLowerCase()

      // Consider relationship type in responses
      const relationshipType = structuralData.type_of_relationship
      let relationshipContext = ""

      // Add relationship-specific context
      if (relationshipType === "Siblings/Brothers") {
        relationshipContext = "Given the sibling/familial nature of this relationship, "
      } else if (relationshipType === "Accomplished Couple") {
        relationshipContext = "Considering this is an established partnership, "
      } else if (relationshipType === "Desired Couple") {
        relationshipContext = "With this relationship's potential still developing, "
      } else if (relationshipType === "Work Colleagues") {
        relationshipContext = "In the context of a professional relationship, "
      }

      // Determine which interaction type to use for the response
      let responseType = "mixed"

      if (
        questionLower.includes("toxic") ||
        questionLower.includes("bad") ||
        questionLower.includes("negative") ||
        questionLower.includes("tóxica") ||
        questionLower.includes("mala") ||
        questionLower.includes("negativa")
      ) {
        if (structuralData.amino_acids_in_contact === "Fully Electrostatic (Charged: R, K, E, D)") {
          responseType = "ionic"
        } else if (structuralData.special_amino_acids.includes("Disulfide")) {
          responseType = "disulfide"
        } else {
          responseType = "hydrophobic"
        }

        // Get a random template from the selected type
        const templates = interpretationTemplates[responseType]
        response = templates[Math.floor(Math.random() * templates.length)]

        // Add relationship context to the response
        response +=
          language === "en"
            ? `\n\nRegarding toxicity specifically, ${relationshipContext}the Bio-Seer observes ${structuralData.interaction_formation === "Yes" ? "strong bonds that suggest a healthy foundation" : structuralData.interaction_formation === "Partially" ? "moderate connections with some areas of potential conflict" : "weak interactions that might indicate compatibility challenges"}.`
            : `\n\nEn cuanto a la toxicidad específicamente, ${relationshipContext}el Bio-Vidente observa ${structuralData.interaction_formation === "Yes" ? "fuertes enlaces que sugieren una base saludable" : structuralData.interaction_formation === "Partially" ? "conexiones moderadas con algunas áreas de conflicto potencial" : "interacciones débiles que podrían indicar desafíos de compatibilidad"}.`
      } else if (
        questionLower.includes("succeed") ||
        questionLower.includes("future") ||
        questionLower.includes("potential") ||
        questionLower.includes("éxito") ||
        questionLower.includes("futuro") ||
        questionLower.includes("potencial")
      ) {
        // Select a conclusion template and customize it
        let conclusion = conclusionTemplates[Math.floor(Math.random() * conclusionTemplates.length)]
        const intensity =
          structuralData.interaction_formation === "Yes"
            ? "high"
            : structuralData.interaction_formation === "Partially"
              ? "medium"
              : "low"
        const qualityType =
          structuralData.interaction_formation === "Yes"
            ? "positive"
            : structuralData.interaction_formation === "Partially"
              ? "neutral"
              : "negative"

        const intensityModifier =
          intensityModifiers[intensity][Math.floor(Math.random() * intensityModifiers[intensity].length)]
        const quality =
          relationshipQualities[qualityType][Math.floor(Math.random() * relationshipQualities[qualityType].length)]

        conclusion = conclusion.replace("{intensity}", intensityModifier).replace("{quality}", quality)

        // Add relationship context to the response
        response =
          language === "en"
            ? `Looking into the molecular future of this relationship, ${relationshipContext}the Bio-Seer observes patterns that suggest interesting possibilities. ${conclusion} The structural ${structuralData.secondary_structure.toLowerCase()} configuration indicates ${structuralData.secondary_structure.includes("Mixed") ? "adaptability to changing conditions" : structuralData.secondary_structure.includes("α-Helix") ? "stability and resilience" : structuralData.secondary_structure.includes("β-Sheet") ? "strength through cooperation" : "flexibility and spontaneity"}.`
            : `Mirando hacia el futuro molecular de esta relación, ${relationshipContext}el Bio-Vidente observa patrones que sugieren posibilidades interesantes. ${conclusion} La configuración estructural ${structuralData.secondary_structure.toLowerCase()} indica ${structuralData.secondary_structure.includes("Mixed") ? "adaptabilidad a condiciones cambiantes" : structuralData.secondary_structure.includes("α-Helix") ? "estabilidad y resiliencia" : structuralData.secondary_structure.includes("β-Sheet") ? "fuerza a través de la cooperación" : "flexibilidad y espontaneidad"}.`
      } else {
        // For other questions, generate a more creative response
        // Select a random interaction type for variety
        const randomType =
          Object.keys(interpretationTemplates)[Math.floor(Math.random() * Object.keys(interpretationTemplates).length)]
        const templates = interpretationTemplates[randomType]
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)]

        // Add relationship context to the response
        response =
          language === "en"
            ? `The Bio-Seer contemplates your question through the lens of ${randomType} interactions... ${relationshipContext}${randomTemplate.split(".")[0]}. This pattern suggests that ${names[0] || "Partner 1"} and ${names[1] || "Partner 2"} have a relationship with unique molecular properties that might manifest in unexpected ways.`
            : `El Bio-Vidente contempla tu pregunta a través del lente de interacciones ${randomType}... ${relationshipContext}${randomTemplate.split(".")[0]}. Este patrón sugiere que ${names[0] || "Socio 1"} y ${names[1] || "Socio 2"} tienen una relación con propiedades moleculares únicas que podrían manifestarse de maneras inesperadas.`
      }

      setChatMessages((prev) => [
        ...prev.filter((msg) => msg.type !== "suggested"),
        { type: "bioseer", content: response },
      ])
    }, 1500)
  }

  const openChat = () => {
    setShowChatInterface(true)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(interpretation)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/20 border-purple-500/20">
        <CardHeader>
          <CardTitle>{t.bioSeerInterpretationTitle}</CardTitle>
          <CardDescription className="text-purple-200">{t.mysticalAnalysis}</CardDescription>
          <div className="mt-2 p-3 bg-purple-900/20 rounded border border-purple-500/30 text-sm">
            <p className="text-purple-200">
              {language === "en"
                ? "The Bio-Seer's interpretations are metaphorical in nature and should be enjoyed as a creative exploration of the intersection between science and human connection."
                : "Las interpretaciones del Bio-Vidente son de naturaleza metafórica y deben disfrutarse como una exploración creativa de la intersección entre ciencia y conexión humana."}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <p className="text-purple-300">{t.consulting}</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 relative">
                <div className="absolute -top-3 left-4 bg-purple-600 text-xs px-2 py-1 rounded-full">
                  {t.relationshipType}:{" "}
                  {language === "en" ? relationshipType : translateRelationshipType(relationshipType)}
                </div>
                <div className="absolute -top-3 right-4 bg-pink-600 text-xs px-2 py-1 rounded-full">
                  {t.bondIntensity}: {intensity}
                </div>
                <p className="text-lg leading-relaxed mt-4 text-purple-100">{displayedInterpretation}</p>
                {currentIndex < interpretation.length && (
                  <div className="inline-block w-1 h-5 ml-1 align-middle bg-purple-400 animate-pulse" />
                )}
              </div>

              <div className="flex justify-between space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openChat}
                  className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {language === "en" ? "Ask the Bio-Seer" : "Pregunta al Bio-Vidente"}
                </Button>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyToClipboard}
                    className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    {t.copy}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-300 border-purple-500/30 hover:bg-purple-900/30"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    {t.share}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Chat Dialog */}
      <Dialog open={showChatInterface} onOpenChange={setShowChatInterface}>
        <DialogContent className="sm:max-w-[500px] bg-black/80 border-purple-500/30">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <span className="h-3 w-3 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
              {language === "en" ? "Ask the Bio-Seer" : "Pregunta al Bio-Vidente"}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2">
            <ScrollArea className="h-[350px] pr-4 rounded-md border border-purple-500/20 bg-black/60 p-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${msg.type === "user" ? "text-right" : msg.type === "system" ? "text-center" : ""}`}
                >
                  {msg.type === "user" && (
                    <div className="inline-block bg-purple-700/60 text-white px-4 py-2 rounded-lg max-w-[80%]">
                      {msg.content}
                    </div>
                  )}

                  {msg.type === "bioseer" && (
                    <div className="flex items-start gap-2">
                      <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs">
                        BS
                      </div>
                      <div className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/20 text-white px-4 py-2 rounded-lg max-w-[80%]">
                        {msg.content}
                      </div>
                    </div>
                  )}

                  {msg.type === "system" && (
                    <div className="bg-purple-500/10 text-purple-200 px-3 py-1 rounded-lg text-sm inline-block">
                      {msg.content}
                    </div>
                  )}

                  {msg.type === "suggested" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestedQuestion(msg.content)}
                      className="mb-2 mr-2 text-purple-300 border-purple-500/30 bg-purple-900/20 hover:bg-purple-900/30"
                    >
                      {msg.content}
                    </Button>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </ScrollArea>

            <div className="flex mt-4 gap-2">
              <Input
                placeholder={language === "en" ? "Ask something..." : "Pregunta algo..."}
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="bg-black/40 border-purple-500/30 text-purple-100"
              />
              <Button onClick={handleSendMessage} className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

