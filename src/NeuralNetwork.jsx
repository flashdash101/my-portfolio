import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Instances, Instance, Line, Html } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const NODE_ROTATION_SPEED = 0.2;
const PULSE_SPEED_MIN = 0.14;
const PULSE_SPEED_VARIANCE = 0.05;
const INFERENCE_UPDATE_INTERVAL_SECONDS = 3.5;

// Responsive Camera Component
const ResponsiveCamera = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    const handleResize = () => {
      const isMobileViewport = window.innerWidth < 768;
      const isLargeDesktop = window.innerWidth >= 1440;

      if (isMobileViewport) {
        camera.position.set(0, 0, 21);
        camera.fov = 62;
      } else if (isLargeDesktop) {
        camera.position.set(0, 0, 24);
        camera.fov = 56;
      } else {
        camera.position.set(0, 0, 22);
        camera.fov = 58;
      }
      camera.updateProjectionMatrix();
    };
    
    // Trigger once on load
    handleResize();
    
    // Add listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera]);

  return null;
};

// Individual Node Component
const Node = ({ position, isActive, isDropped }) => {
  const meshRef = useRef();
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      // Subtle rotation animation
      meshRef.current.rotation.x += NODE_ROTATION_SPEED * delta;
      meshRef.current.rotation.y += NODE_ROTATION_SPEED * delta;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshBasicMaterial 
        color={isDropped ? '#ff0000' : '#00ff00'} 
        wireframe 
        opacity={isDropped ? 0.3 : 1}
        transparent
      />
    </mesh>
  );
};

// Neural Layer Component
const NeuralLayer = ({ position, nodeCount, layerIndex, droppedNodes }) => {
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }).map((_, i) => {
      const ySpacing = 1.2;
      const yOffset = (nodeCount * ySpacing) / 2 - ySpacing / 2;
      return {
        id: `${layerIndex}-${i}`,
        position: [position[0], i * ySpacing - yOffset, position[2]]
      };
    });
  }, [nodeCount, position, layerIndex]);

  return (
    <group>
      {nodes.map((node, i) => (
        <Node 
          key={node.id}
          position={node.position}
          isActive={true}
          isDropped={droppedNodes.has(node.id)}
        />
      ))}
    </group>
  );
};

// Connection Lines Component
const ConnectionLines = ({ layers, droppedNodes }) => {
  const lines = useMemo(() => {
    const allLines = [];
    
    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayer = layers[l];
      const nextLayer = layers[l + 1];
      
      for (let i = 0; i < currentLayer.nodeCount; i++) {
        const ySpacing = 1.2;
        const yOffset1 = (currentLayer.nodeCount * ySpacing) / 2 - ySpacing / 2;
        const start = [
          currentLayer.position[0],
          i * ySpacing - yOffset1,
          currentLayer.position[2]
        ];
        
        for (let j = 0; j < nextLayer.nodeCount; j++) {
          const yOffset2 = (nextLayer.nodeCount * ySpacing) / 2 - ySpacing / 2;
          const end = [
            nextLayer.position[0],
            j * ySpacing - yOffset2,
            nextLayer.position[2]
          ];
          
          const startNodeId = `${l}-${i}`;
          const endNodeId = `${l + 1}-${j}`;
          const isHidden = droppedNodes.has(startNodeId) || droppedNodes.has(endNodeId);
          
          allLines.push({
            start,
            end,
            isHidden,
            key: `${l}-${i}-${j}`
          });
        }
      }
    }
    
    return allLines;
  }, [layers, droppedNodes]);

  return (
    <group>
      {lines.map((line) => (
        <Line
          key={line.key}
          points={[line.start, line.end]}
          color={line.isHidden ? '#000000' : '#ffffff'}
          lineWidth={line.isHidden ? 0 : 1}
          opacity={line.isHidden ? 0 : 0.4}
          transparent
        />
      ))}
    </group>
  );
};

// Pulse Particles Component
const Pulses = ({ layers, droppedNodes }) => {
  const pulseRefs = useRef([]);
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    // Create initial pulses
    const initialPulses = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      progress: Math.random(),
      path: Math.floor(Math.random() * layers[0].nodeCount),
      speed: PULSE_SPEED_MIN + Math.random() * PULSE_SPEED_VARIANCE,
      currentLayerIndex: 0,
      targetNodeIndex: 0,
      isActive: true
    }));
    setPulses(initialPulses);
  }, [layers]);

  useFrame((_, delta) => {
    pulses.forEach((pulse, index) => {
      if (pulseRefs.current[index] && pulse.isActive) {
        pulse.progress += pulse.speed * delta;
        
        if (pulse.progress > 1) {
          // Reset pulse
          pulse.progress = 0;
          pulse.path = Math.floor(Math.random() * layers[0].nodeCount);
          pulse.currentLayerIndex = 0;
          pulse.isActive = true;
        }

        // Calculate position along the network
        const totalLayers = layers.length - 1;
        const currentLayerIndex = Math.floor(pulse.progress * totalLayers);
        const nextLayerIndex = Math.min(currentLayerIndex + 1, totalLayers);
        const t = (pulse.progress * totalLayers) - currentLayerIndex;

        if (currentLayerIndex < layers.length) {
          const currentLayer = layers[currentLayerIndex];
          const nextLayer = layers[nextLayerIndex];
          
          const ySpacing = 1.2;
          const yOffset1 = (currentLayer.nodeCount * ySpacing) / 2 - ySpacing / 2;
          const nodeIndex1 = pulse.path % currentLayer.nodeCount;
          
          const yOffset2 = (nextLayer.nodeCount * ySpacing) / 2 - ySpacing / 2;
          const nodeIndex2 = pulse.path % nextLayer.nodeCount;

          // Check if current or next node is dropped
          const currentNodeId = `${currentLayerIndex}-${nodeIndex1}`;
          const nextNodeId = `${nextLayerIndex}-${nodeIndex2}`;
          
          if (droppedNodes.has(currentNodeId) || droppedNodes.has(nextNodeId)) {
            // Hide pulse if it's going through dropped nodes
            pulseRefs.current[index].visible = false;
          } else {
            pulseRefs.current[index].visible = true;
            
            const startX = currentLayer.position[0];
            const startY = nodeIndex1 * ySpacing - yOffset1;
            
            const endX = nextLayer.position[0];
            const endY = nodeIndex2 * ySpacing - yOffset2;

            pulseRefs.current[index].position.x = startX + (endX - startX) * t;
            pulseRefs.current[index].position.y = startY + (endY - startY) * t;
          }
        }
      }
    });
  });

  return (
    <group>
      {pulses.map((pulse, i) => (
        <mesh
          key={pulse.id}
          ref={(el) => (pulseRefs.current[i] = el)}
        >
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
};

// Inference Result Display Component
const InferenceResult = ({ position, onPulseHit }) => {
  const [results, setResults] = useState([
    { label: 'RECRUITER', value: 87.42 },
    { label: 'DEVELOPER', value: 10.15 },
    { label: 'BOT_CRAWL', value: 2.43 }
  ]);
  const [isScrambling, setIsScrambling] = useState(false);
  const [maxPrediction, setMaxPrediction] = useState('RECRUITER');
  const [isMobile, setIsMobile] = useState(false);
  const scramblingRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (onPulseHit && !scramblingRef.current) {
      scrambleAndSettle();
    }
  }, [onPulseHit]);

  const scrambleAndSettle = () => {
    scramblingRef.current = true;
    setIsScrambling(true);

    // Generate new random values that sum to 100
    const generateValidValues = () => {
      // 70% chance for RECRUITER to be highest, 30% for DEVELOPER
      const isRecruiterMax = Math.random() < 0.7;
      
      let values;
      if (isRecruiterMax) {
        values = [
          Math.random() * 30 + 60,  // RECRUITER: 60-90%
          Math.random() * 20 + 5,   // DEVELOPER: 5-25%
          Math.random() * 10         // BOT_CRAWL: 0-10%
        ];
      } else {
        values = [
          Math.random() * 25 + 10,  // RECRUITER: 10-35%
          Math.random() * 30 + 50,  // DEVELOPER: 50-80%
          Math.random() * 10         // BOT_CRAWL: 0-10%
        ];
      }
      
      // Normalize to sum to exactly 100
      const sum = values.reduce((a, b) => a + b, 0);
      values = values.map(v => (v / sum) * 100);
      
      // Fix floating point errors - ensure exact 100% sum
      const actualSum = values.reduce((a, b) => a + b, 0);
      values[0] += (100 - actualSum);
      
      return values;
    };

    const labels = ['RECRUITER', 'DEVELOPER', 'BOT_CRAWL'];
    const finalValues = generateValidValues();
    const scramblingDuration = 600; // ms
    const scrambleInterval = 30; // ms
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += scrambleInterval;
      
      if (elapsed >= scramblingDuration) {
        clearInterval(interval);
        // Set final values with correct labels
        const newResults = [
          { label: labels[0], value: finalValues[0] },
          { label: labels[1], value: finalValues[1] },
          { label: labels[2], value: finalValues[2] }
        ];
        setResults(newResults);
        
        // Determine max prediction
        const maxResult = newResults.reduce((max, curr) => 
          curr.value > max.value ? curr : max
        );
        setMaxPrediction(maxResult.label);
        
        setIsScrambling(false);
        scramblingRef.current = false;
      } else {
        // Scramble with random digits, but preserve labels
        setResults(prev => prev.map((item, idx) => ({
          label: labels[idx],
          value: Math.random() * 100
        })));
      }
    }, scrambleInterval);
  };

  return (
    <Html position={position} center>
      <div style={{
        background: '#000000',
        border: '2px solid #00ff00',
        padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
        fontFamily: "'JetBrains Mono', monospace",
        color: '#00ff00',
        minWidth: isMobile ? '180px' : '220px',
        fontSize: isMobile ? '0.45rem' : '0.55rem',
        letterSpacing: '0.03em',
        lineHeight: '1.4',
        textAlign: 'left',
        boxShadow: '0 0 15px rgba(0, 255, 0, 0.2)',
        pointerEvents: 'none',
        userSelect: 'none',
        transform: isMobile ? 'scale(0.9)' : 'none'
      }}>
        <div style={{ 
          marginBottom: '0.5rem',
          fontSize: '0.5rem',
          fontWeight: '700',
          color: '#ffffff',
          borderBottom: '1px solid #00ff00',
          paddingBottom: '0.3rem'
        }}>
          {`> INFERENCE_RESULT: `}
          <span style={{ 
            color: '#00ff00',
            fontWeight: '900',
            textShadow: '0 0 8px rgba(0, 255, 0, 0.6)'
          }}>
            {isScrambling ? '███████' : maxPrediction}
          </span>
        </div>
        
        {results.map((result, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '0.3rem',
            fontWeight: '500',
            gap: '0.5rem'
          }}>
            <span style={{ color: '#ffffff', fontSize: '0.5rem' }}>
              [ {result.label} ] :
            </span>
            <span style={{ 
              fontWeight: '700',
              color: isScrambling ? '#00ff00' : '#ffffff',
              fontVariantNumeric: 'tabular-nums',
              minWidth: '50px',
              textAlign: 'right',
              fontSize: '0.5rem'
            }}>
              {isScrambling 
                ? `${Math.floor(Math.random() * 100)}.${Math.floor(Math.random() * 100)}%`
                : `${result.value.toFixed(2)}%`
              }
            </span>
          </div>
        ))}
        
        <div style={{ 
          marginTop: '0.5rem',
          paddingTop: '0.4rem',
          borderTop: '1px solid #00ff00',
          fontSize: '0.45rem',
          color: '#00ff00',
          fontWeight: '700'
        }}>
          {'> STATUS: HIGH_CONFIDENCE'}
        </div>
      </div>
    </Html>
  );
};

// Main Scene Component
const Scene = ({ onPulseHit, isMobile }) => {
  const groupRef = useRef();
  const { camera } = useThree();
  const droppedNodes = useMemo(() => new Set(), []);
  const pulseHitCountRef = useRef(0);
  const inferenceTimerRef = useRef(0);

  const layers = useMemo(() => [
    { position: [-6, 0, 0], nodeCount: 5 },
    { position: [-3, 0, 0], nodeCount: 8 },
    { position: [0, 0, 0], nodeCount: 8 },
    { position: [3, 0, 0], nodeCount: 6 },
    { position: [6, 0, 0], nodeCount: 3 }
  ], []);

  // Monitor pulses hitting output layer
  useFrame((_, delta) => {
    // Trigger inference update on elapsed time (fps-independent)
    inferenceTimerRef.current += delta;
    if (inferenceTimerRef.current >= INFERENCE_UPDATE_INTERVAL_SECONDS) {
      inferenceTimerRef.current = 0;
      pulseHitCountRef.current += 1;
      onPulseHit(pulseHitCountRef.current);
    }
  });

  // Scroll-triggered rotation
  useEffect(() => {
    if (!groupRef.current) return;
    if (isMobile) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-container',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    tl.to(groupRef.current.rotation, {
      y: Math.PI / 4,
      duration: 1
    });

    tl.to(camera.position, {
      z: 25,
      duration: 1
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [camera, isMobile]);

  const groupOffsetX = 0;

  return (
    <group ref={groupRef} position={[groupOffsetX, 0, 0]}>
      {layers.map((layer, index) => (
        <NeuralLayer
          key={index}
          position={layer.position}
          nodeCount={layer.nodeCount}
          layerIndex={index}
          droppedNodes={droppedNodes}
        />
      ))}
      <ConnectionLines layers={layers} droppedNodes={droppedNodes} />
      <Pulses layers={layers} droppedNodes={droppedNodes} />
      
      {/* Inference Result Box - positioned to the right of output layer */}
      <InferenceResult 
        position={[0, -7.2, 0]} 
        onPulseHit={pulseHitCountRef.current}
      />
    </group>
  );
};

// Main Neural Network Component
const NeuralNetwork = () => {
  const [pulseHitTrigger, setPulseHitTrigger] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePulseHit = (count) => {
    setPulseHitTrigger(count);
  };

  return (
    <div 
      className="neural-network-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'default',
        touchAction: 'manipulation'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ResponsiveCamera />
        <Scene onPulseHit={handlePulseHit} isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork;
