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
    title: "Green House Paradox",
    description:
      "• Curated and engineered a 2 step API pipeline, combining Nominatim geocoding and OSM overpass queries with multiple endpoint fallback logic to fetch real time park data across London Boroughs. • Performed bivariate spatial autocorrelation (Global Moran’s I + LISA) using libpysal / esda, with KNN spatial weight matrix to identify statistically significant clusters of deprivation/greenspaces regimes at LSOA level. • Built an interactive Folium choropleth map overlaying IMD deprivation scores against park density revealing that 77.2% of mapped parks fall within the 40% most deprived LSOSAs across 5 east London boroughs.",
    tags: [
      "Spatial Data Science",
      "Folium",
      "libpysal / esda",
      "OSM Overpass",
      "Nominatim",
      "Python",
      "Geospatial Analytics"
    ],
    github: "https://github.com/flashdash101/Green-House-Paradox",
    demo: "",
    image: "./anomalydetection.webp",
    category: "Spatial Analytics",
    pageRoute: "/projects/green-house-paradox",
    metrics: {
      parkCoverage: "77.2%",
      boroughs: "5",
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


