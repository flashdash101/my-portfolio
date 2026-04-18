// Projects component - Data Science & Machine Learning Focus
const projects = [
  {
    title: "PeerGraph: Semantic Corporate Intelligence",
    description:
      "Curated a Graph Attention Network (GAT) to identify corporate peers across the S&P 500 by processing Item 1A Risk Factors from SEC filings; engineered a k-NN graph using Sentence-Transformer embeddings to capture thematic and structural market overlaps. Trained a multi-head GAT model to learn sector-aware representations, achieving 60.3% classification accuracy and uncovering hidden cross-sector dependencies, such as convergence between AI hardware (NVIDIA) and energy infrastructure (ONEOK). Optimised production deployment by decoupling model training from serving; exported graph embeddings to NumPy snapshots for sub-1ms similarity-search inference, reducing container footprint by 98% and eliminating the need for a heavy PyTorch runtime in production.",
    tags: [
      "Python",
      "PyTorch",
      "Transformers",
      "Graph Attention Network",
      "Sentence-Transformers",
      "Docker",
      "APIs"
    ],
    github: "https://github.com/flashdash101/PeerGraph-GAT",
    demo: "",
    image: "./graph.png",
    imageScale: 0.90,
    category: "ML & Deep Learning",
    metrics: {
      accuracy: "60.3%",
      speed: "<1ms",
      footprint: "-98%",
    }
  },
  {
    title: "Structural Biology Generative AI Evaluation",
    description:
      "Led an 8-person team to develop a diagnostic pipeline that evaluates the geometric reliability of AlphaFold protein structure predictions against PDB ground truths. Engineered a custom diagonal extraction algorithm with NumPy/SciPy to compute rotationally invariant distance matrices for sequence-specific error mapping beyond standard RMSD-based superposition. Implemented a mu + 2sigma anomaly detection threshold to identify geometric hallucinations such as atomic clashes and bond violations, including high-confidence models (>90% pLDDT). Built an interactive 9-component Plotly dashboard for real-time diagnostics and mapping prediction errors to protein secondary structures (helix, sheet, loop).",
    tags: [
      "Bioinformatics",
      "Generative AI",
      "AlphaFold",
      "Python",
      "BioPython",
      "Plotly",
      "NumPy/SciPy"
    ],
    github: "https://github.com/flashdash101/Generative-AI-in-Structural-Biology",
    demo: "",
    image: "./protein.png",
    category: "ML & Bioinformatics",
    metrics: {
      team: "8",
      dashboard: "9",
    }
  },
  {
    title: "Football Player Recommendation System",
    description:
      "Built an ML pipeline processing 1,000+ players from top 5 European leagues across 68 statistical features (xG, progressive carries, tackles). Engineered percentile-based filtering system with per-90 normalisation and weighted K-Means clustering for 8 position-specific roles. Designed composite scoring algorithm combining role-specific feature weighting with additive style bonuses and controlled stochastic sampling. Deployed production-ready FastAPI backend on Render with React/Vite frontend, achieving sub-second response times through feature engineering optimizations.",
    tags: [
      "K-Means Clustering",
      "FastAPI",
      "React/Vite",
      "Feature Engineering",
      "Docker",
      "ML Pipeline",
      "Statistical Modeling"
    ],
    github: "https://github.com/flashdash101/football-suggest/tree/master",
    demo: "https://flashdash101.github.io/football-suggest/",
    image: "./FootballScout.png",
    category: "Data Science & ML",
    metrics: {
      players: "1,000+",
      features: "68",
    }
  },
  {
    title: "Financial Fraud Detection using Benford's Law",
    description:
      "Applied Benford's Law to a large-scale dataset of 50,000 credit card transactions to detect financial anomalies and potential fraud. Quantified deviations using Kolmogorov-Smirnov test which revealed significant divergence with MAPE of 32.20% and p-value of 0.0329, successfully flagging the dataset for potential irregularities. Developed analytical pipeline using Python, Pandas, and NumPy for data manipulation, with Matplotlib visualizations comparing observed vs. theoretical digit frequencies.",
    tags: [
      "Benford's Law",
      "Fraud Detection",
      "Statistical Analysis",
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization"
    ],
    github: "https://github.com/flashdash101/BenfordsLaw",
    demo: "",
    image: "./BenfordLaw.png",
    category: "Statistical Analysis",
    metrics: {
      transactions: "50K",
      mape: "32.20%",
    }
  },
];

export default projects;


