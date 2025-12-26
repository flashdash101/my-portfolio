// Projects component - Data Science & Machine Learning Focus
const projects = [
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
  {
    title: "Statistical Process Control for Anomaly Detection",
    description:
      "Engineered a monitoring system using Individuals-Moving Range (I-MR) control charts to analyze time-series sensor data across 750,000 data points and 15 sensors. Built an automated analysis pipeline in Python (Pandas, NumPy) to calculate dynamic control limits and generate individual control chart visualizations for each sensor, demonstrating scalability and efficiency. Reduced false positive rates by implementing robust scaling techniques for predictive maintenance workflows.",
    tags: [
      "SPC",
      "Time-Series Analysis",
      "Control Charts",
      "Python",
      "Anomaly Detection",
      "Predictive Maintenance"
    ],
    github: "https://github.com/flashdash101/Control-Charts",
    demo: "",
    image: "./anomalydetection.webp",
    category: "Sensor Analytics",
    metrics: {
      dataPoints: "750K",
      sensors: "15",
    }
  },
];

export default projects;


