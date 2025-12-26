// Data Visualization Decorative Elements
import React from 'react';
import './data-accents.css';

export const DataParticles = () => (
  <div className="data-particles">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="data-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

export const CodeStream = ({ position = 'right' }) => (
  <div className={`code-stream code-stream-${position}`}>
    <div className="code-line">import numpy as np</div>
    <div className="code-line">model.fit(X_train)</div>
    <div className="code-line">accuracy: 94.2%</div>
    <div className="code-line">predictions = []</div>
  </div>
);

export const DataBars = () => (
  <div className="data-bars">
    {[65, 85, 72, 90, 78].map((height, i) => (
      <div
        key={i}
        className="data-bar"
        style={{
          height: `${height}%`,
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
  </div>
);

export const NeuralNode = ({ size = 'medium' }) => (
  <div className={`neural-node neural-node-${size}`}>
    <div className="node-core"></div>
    <div className="node-ring"></div>
    <div className="node-pulse"></div>
  </div>
);
