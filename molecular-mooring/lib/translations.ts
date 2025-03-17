export const translations = {
  en: {
    // Header
    title: "Molecular Mooring",
    subtitle: "Teaching Structural Biology Through Popular Beliefs",
    openSource: "Open Source",

    // Tabs
    predict: "Predict",
    learn: "Learn",
    about: "About",
    support: "Support",

    // Predict section
    beginJourney: "Begin Your Molecular Journey",
    enterNames: "Enter two names to discover their molecular connection through the eyes of our bio-seer",

    // Steps
    processNames: "1. Process Names",
    structureAnalysis: "2. Structure Analysis",
    bioSeerInterpretation: "3. Bio-Seer Interpretation",

    // Name Processor
    enterNamesTitle: "Enter Names",
    enterNamesDescription: "Enter two names to process for AlphaFold prediction",
    firstName: "First Name",
    secondName: "Second Name",
    processNamesButton: "Process Names",
    processedNames: "Processed Names",
    processedNamesDescription: "Names converted to valid amino acid sequences",
    firstNameProcessed: "First Name (Processed)",
    secondNameProcessed: "Second Name (Processed)",
    combinedFormat: "Combined Format",
    processedNamesWillAppear: "Processed names will appear here",
    continueToStructure: "Continue to Structure Analysis",
    errorBothNames: "Please enter both names",
    errorNoValidLetters: "After filtering, at least one name doesn't contain valid amino acid letters",

    // Next Steps
    nextStepTitle: "Next Step: Predict Structure",
    nextStepDescription: "Use the processed names with AlphaFold or ColabFold to generate a protein structure",
    copyAndChoose: "Copy your processed sequence and choose one of these prediction tools:",
    alphafold: "AlphaFold",
    alphafoldDescription: "Official AlphaFold server by EBI",
    openAlphafold: "Open AlphaFold",
    colabfold: "ColabFold",
    colabfoldDescription: "Run AlphaFold in Google Colab (faster)",
    openColabfold: "Open ColabFold",

    // Structure Analysis
    analyzeStructure: "Analyze Structure in iCn3D",
    afterGenerating: "After generating your structure with AlphaFold, analyze it using iCn3D",
    currentNames: "Current Names",
    openViewer: "Open iCn3D Viewer",
    uploadPDB: "Upload your PDB file to analyze the structure",
    enterStructural: "Enter Structural Characteristics",
    basedOnAnalysis: "Based on your analysis in iCn3D, provide the following information",

    // Relationship types
    typeOfRelationship: "Type of Relationship Between Partners",
    siblings: "Siblings/Brothers",
    accomplishedCouple: "Accomplished Couple",
    desiredCouple: "Desired Couple",
    workColleagues: "Work Colleagues",

    // Interaction formation
    interactionFormation: "Interaction Formation",
    yes: "Yes",
    partially: "Partially",
    no: "No",

    // Secondary structure
    secondaryStructure: "Secondary Structure Classification",
    fullyAlphaHelix: "Fully α-Helix",
    fullyBetaSheet: "Fully β-Sheet",
    fullyDisordered: "Fully Disordered",
    mixedAlphaBeta: "Mixed (α-Helix + β-Sheet)",
    mixedAlphaDisordered: "Mixed (α-Helix + Disordered)",
    mixedBetaDisordered: "Mixed (β-Sheet + Disordered)",
    mixedAll: "Mixed (α-Helix + β-Sheet + Disordered)",

    // Amino acids
    aminoAcidsInContact: "Amino Acids in Contact",
    fullyElectrostatic: "Fully Electrostatic (Charged: R, K, E, D)",
    fullyHydrophobic: "Fully Hydrophobic (A, V, L, I, M, F, etc.)",
    mixedElectrostaticHydrophobic: "Mixed Electrostatic & Hydrophobic",
    polarPolar: "Polar-Polar (N, Q, S, T, Y, etc.)",
    none: "None",

    // Special amino acids
    specialAminoAcids: "Special Amino Acids in Interaction",
    fluorescent: "Fluorescent (W, Y, F)",
    disulfideBridge: "Disulfide Bridge (Cysteine-Cysteine)",
    prolines: "Prolines (P)",
    histidines: "Histidines (H)",

    // Buttons
    generateInterpretation: "Generate Bio-Seer Interpretation",

    // BioSeer Interpretation
    bioSeerInterpretationTitle: "Bio-Seer Interpretation",
    mysticalAnalysis: "The mystical analysis of your molecular connection",
    consulting: "The Bio-Seer is consulting the molecular oracle...",
    relationshipType: "Relationship Type",
    bondIntensity: "Bond Intensity",
    copy: "Copy",
    share: "Share",

    // About BioSeer
    aboutBioSeer: "About Bio-Seer Interpretations",
    understandingScience: "Understanding the science behind the metaphors",
    bioSeerExplanation:
      "Bio-Seer interpretations merge scientific understanding of protein structures with metaphorical insights into human relationships. The analysis draws parallels between:",
    secondaryStructuresExplanation: "Secondary structures (α-helices, β-sheets) and relationship stability patterns",
    aminoAcidInteractionsExplanation:
      "Amino acid interactions (electrostatic, hydrophobic) and emotional connection styles",
    specialResiduesExplanation: "Special residues (cysteine, proline) and unique relationship qualities",
    disclaimer:
      "While based on actual structural biology concepts, Bio-Seer interpretations are metaphorical in nature and should be enjoyed as a creative exploration of the intersection between science and human connection.",

    // Educational Posters
    educationalResources: "Educational Resources",
    exploreBasics: "Explore the fundamentals of protein structure and prediction",
    buildingBlocks: "Building Blocks",
    proteinFolding: "Protein Folding",
    prediction: "Prediction",
    poster1Title: "Poster 1: Protein Building Blocks",
    poster1Description: "Understanding amino acids and their properties",
    poster2Title: "Poster 2: Protein Folding",
    poster2Description: "From sequence to structure",
    poster3Title: "Poster 3: Protein Folding Prediction",
    poster3Description: "Modern computational approaches",
    keyConcepts: "Key Concepts",
    structuralHierarchy: "Structural Hierarchy",
    alphafoldColabfold: "AlphaFold and ColabFold",

    // About Section
    aboutMolecularMooring: "About Molecular Mooring",
    bridgeBiology: "A bridge between structural biology and human connection",
    overview: "Overview",
    historical: "Historical Example",
    methodology: "Methodology",
    research: "Research Impact",
    projectOverview: "Project Overview",
    projectDescription: "Teaching Structural Biology Through Popular Beliefs using AI and AlphaFold",
    historicalExample: "Historical Example",
    nobelLaureates: "Nobel Laureates Analysis",
    methodologyTitle: "Methodology & Public Engagement",
    methodologyDescription: "How Molecular Mooring works and engages the public",
    researchImpact: "Research Impact & Future Directions",
    researchDescription: "The broader implications of the Molecular Mooring project",

    // Support Section
    supportProject: "Support the Project",
    supportDescription: "Help us continue developing educational resources and community outreach",
    donate: "Donate",
    donateDescription: "Your contribution helps fund materials for science outreach events",
    donateButton: "Support with Tecito",
    inPersonSessions: "In-Person Sessions",
    sessionsDescription: "We offer workshops and demonstrations for schools, museums, and community centers",
    bioSeerTraining: "BioSeer Training",
    trainingDescription: "Learn to interpret protein structures and communicate science through metaphor",
    contactUs: "Contact Us",

    // Footer
    nonProfit: "Molecular Mooring is a non-profit educational project",
    openAccess: "All resources are provided under open access principles",
    license: "Licensed under Creative Commons Attribution-NonCommercial 4.0 International",
    madeWith: "Made with",
    forScience: "for science education",
  },
  es: {
    // Header
    title: "Molecular Mooring",
    subtitle: "Enseñando Biología Estructural a través de Creencias Populares",
    openSource: "Código Abierto",

    // Tabs
    predict: "Predecir",
    learn: "Aprender",
    about: "Acerca de",
    support: "Apoyar",

    // Predict section
    beginJourney: "Comienza Tu Viaje Molecular",
    enterNames: "Ingresa dos nombres para descubrir su conexión molecular a través de los ojos de nuestro bio-vidente",

    // Steps
    processNames: "1. Procesar Nombres",
    structureAnalysis: "2. Análisis de Estructura",
    bioSeerInterpretation: "3. Interpretación Bio-Vidente",

    // Name Processor
    enterNamesTitle: "Ingrese Nombres",
    enterNamesDescription: "Ingrese dos nombres para procesar para la predicción de AlphaFold",
    firstName: "Primer Nombre",
    secondName: "Segundo Nombre",
    processNamesButton: "Procesar Nombres",
    processedNames: "Nombres Procesados",
    processedNamesDescription: "Nombres convertidos a secuencias válidas de aminoácidos",
    firstNameProcessed: "Primer Nombre (Procesado)",
    secondNameProcessed: "Segundo Nombre (Procesado)",
    combinedFormat: "Formato Combinado",
    processedNamesWillAppear: "Los nombres procesados aparecerán aquí",
    continueToStructure: "Continuar al Análisis de Estructura",
    errorBothNames: "Por favor ingrese ambos nombres",
    errorNoValidLetters: "Después de filtrar, al menos un nombre no contiene letras válidas de aminoácidos",

    // Next Steps
    nextStepTitle: "Siguiente Paso: Predecir Estructura",
    nextStepDescription:
      "Utilice los nombres procesados con AlphaFold o ColabFold para generar una estructura proteica",
    copyAndChoose: "Copie su secuencia procesada y elija una de estas herramientas de predicción:",
    alphafold: "AlphaFold",
    alphafoldDescription: "Servidor oficial de AlphaFold por EBI",
    openAlphafold: "Abrir AlphaFold",
    colabfold: "ColabFold",
    colabfoldDescription: "Ejecute AlphaFold en Google Colab (más rápido)",
    openColabfold: "Abrir ColabFold",

    // Structure Analysis
    analyzeStructure: "Analizar Estructura en iCn3D",
    afterGenerating: "Después de generar tu estructura con AlphaFold, analízala usando iCn3D",
    currentNames: "Nombres Actuales",
    openViewer: "Abrir Visualizador iCn3D",
    uploadPDB: "Sube tu archivo PDB para analizar la estructura",
    enterStructural: "Ingresa Características Estructurales",
    basedOnAnalysis: "Basado en tu análisis en iCn3D, proporciona la siguiente información",

    // Relationship types
    typeOfRelationship: "Tipo de Relación Entre Participantes",
    siblings: "Hermanos",
    accomplishedCouple: "Pareja Establecida",
    desiredCouple: "Pareja Deseada",
    workColleagues: "Colegas de Trabajo",

    // Interaction formation
    interactionFormation: "Formación de Interacción",
    yes: "Sí",
    partially: "Parcialmente",
    no: "No",

    // Secondary structure
    secondaryStructure: "Clasificación de Estructura Secundaria",
    fullyAlphaHelix: "Completamente α-Hélice",
    fullyBetaSheet: "Completamente Lámina β",
    fullyDisordered: "Completamente Desordenada",
    mixedAlphaBeta: "Mixta (α-Hélice + Lámina β)",
    mixedAlphaDisordered: "Mixta (α-Hélice + Desordenada)",
    mixedBetaDisordered: "Mixta (Lámina β + Desordenada)",
    mixedAll: "Mixta (α-Hélice + Lámina β + Desordenada)",

    // Amino acids
    aminoAcidsInContact: "Aminoácidos en Contacto",
    fullyElectrostatic: "Completamente Electrostático (Cargados: R, K, E, D)",
    fullyHydrophobic: "Completamente Hidrofóbico (A, V, L, I, M, F, etc.)",
    mixedElectrostaticHydrophobic: "Mixto Electrostático e Hidrofóbico",
    polarPolar: "Polar-Polar (N, Q, S, T, Y, etc.)",
    none: "Ninguno",

    // Special amino acids
    specialAminoAcids: "Aminoácidos Especiales en Interacción",
    fluorescent: "Fluorescentes (W, Y, F)",
    disulfideBridge: "Puente Disulfuro (Cisteína-Cisteína)",
    prolines: "Prolinas (P)",
    histidines: "Histidinas (H)",

    // Buttons
    generateInterpretation: "Generar Interpretación Bio-Vidente",

    // BioSeer Interpretation
    bioSeerInterpretationTitle: "Interpretación Bio-Vidente",
    mysticalAnalysis: "El análisis místico de tu conexión molecular",
    consulting: "El Bio-Vidente está consultando el oráculo molecular...",
    relationshipType: "Tipo de Relación",
    bondIntensity: "Intensidad del Vínculo",
    copy: "Copiar",
    share: "Compartir",

    // About BioSeer
    aboutBioSeer: "Acerca de las Interpretaciones Bio-Videntes",
    understandingScience: "Entendiendo la ciencia detrás de las metáforas",
    bioSeerExplanation:
      "Las interpretaciones Bio-Videntes fusionan el entendimiento científico de las estructuras proteicas con perspectivas metafóricas sobre las relaciones humanas. El análisis establece paralelismos entre:",
    secondaryStructuresExplanation:
      "Estructuras secundarias (α-hélices, láminas β) y patrones de estabilidad en relaciones",
    aminoAcidInteractionsExplanation:
      "Interacciones de aminoácidos (electrostáticas, hidrofóbicas) y estilos de conexión emocional",
    specialResiduesExplanation: "Residuos especiales (cisteína, prolina) y cualidades únicas de relación",
    disclaimer:
      "Aunque se basan en conceptos reales de biología estructural, las interpretaciones Bio-Videntes son de naturaleza metafórica y deben disfrutarse como una exploración creativa de la intersección entre ciencia y conexión humana.",

    // Educational Posters
    educationalResources: "Recursos Educativos",
    exploreBasics: "Explora los fundamentos de la estructura y predicción de proteínas",
    buildingBlocks: "Bloques de Construcción",
    proteinFolding: "Plegamiento de Proteínas",
    prediction: "Predicción",
    poster1Title: "Póster 1: Bloques de Construcción de Proteínas",
    poster1Description: "Entendiendo los aminoácidos y sus propiedades",
    poster2Title: "Póster 2: Plegamiento de Proteínas",
    poster2Description: "De la secuencia a la estructura",
    poster3Title: "Póster 3: Predicción de Plegamiento de Proteínas",
    poster3Description: "Enfoques computacionales modernos",
    keyConcepts: "Conceptos Clave",
    structuralHierarchy: "Jerarquía Estructural",
    alphafoldColabfold: "AlphaFold y ColabFold",

    // About Section
    aboutMolecularMooring: "Acerca de Molecular Mooring",
    bridgeBiology: "Un puente entre la biología estructural y la conexión humana",
    overview: "Visión General",
    historical: "Ejemplo Histórico",
    methodology: "Metodología",
    research: "Impacto en la Investigación",
    projectOverview: "Visión General del Proyecto",
    projectDescription: "Enseñando Biología Estructural a través de Creencias Populares usando IA y AlphaFold",
    historicalExample: "Ejemplo Histórico",
    nobelLaureates: "Análisis de Premios Nobel",
    methodologyTitle: "Metodología y Participación Pública",
    methodologyDescription: "Cómo funciona Molecular Mooring y cómo involucra al público",
    researchImpact: "Impacto en la Investigación y Direcciones Futuras",
    researchDescription: "Las implicaciones más amplias del proyecto Molecular Mooring",

    // Support Section
    supportProject: "Apoya el Proyecto",
    supportDescription: "Ayúdanos a seguir desarrollando recursos educativos y divulgación comunitaria",
    donate: "Donar",
    donateDescription: "Tu contribución ayuda a financiar materiales para eventos de divulgación científica",
    donateButton: "Apoyar con Tecito",
    inPersonSessions: "Sesiones Presenciales",
    sessionsDescription: "Ofrecemos talleres y demostraciones para escuelas, museos y centros comunitarios",
    bioSeerTraining: "Entrenamiento Bio-Vidente",
    trainingDescription: "Aprende a interpretar estructuras de proteínas y comunicar ciencia a través de metáforas",
    contactUs: "Contáctanos",

    // Footer
    nonProfit: "Molecular Mooring es un proyecto educativo sin fines de lucro",
    openAccess: "Todos los recursos se proporcionan bajo principios de acceso abierto",
    license: "Bajo licencia Creative Commons Attribution-NonCommercial 4.0 International",
    madeWith: "Hecho con",
    forScience: "para la educación científica",
  },
}

