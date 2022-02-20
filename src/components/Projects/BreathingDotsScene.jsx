import React, { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

const roundedSquareWave = (t, delta, a, f) => {
  return ((5 * a) / Math.PI) * Math.atan(Math.sin(1 * Math.PI * t * f) / delta);
};
const someValue = 10000;
function Dots({ multiply, speed }) {
  const ref = useRef();
  const { vec, transform, positions, distances } = useMemo(() => {
    const vec = new THREE.Vector3();
    const transform = new THREE.Matrix4();

    // Precompute randomized initial positions
    const positions = [...Array(someValue)].map((_, i) => {
      const position = new THREE.Vector3();
      // Place in a grid
      position.x = (i % 100) - 50;
      position.y = Math.floor(i / 100) - 50;

      // Offset every other column (hexagonal pattern)
      position.y += (i % 2) * 0.5;

      // Add some noise
      position.x += Math.random() * 0.5;
      position.y += Math.random() * 0.5;
      return position;
    });

    // Precompute initial distances with octagonal offset
    const right = new THREE.Vector3(1, 0, 0);
    const distances = positions.map((pos) => {
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5;
    });
    return { vec, transform, positions, distances };
  }, []);
  useFrame(({ clock }) => {
    for (let i = 0; i < someValue; ++i) {
      const dist = distances[i * multiply];

      // Distance affects the wave phase
      const t = clock.elapsedTime - dist / speed;

      // Oscillates between -0.4 and +0.4
      const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8);

      // Scale initial position by our oscillator
      vec.copy(positions[i]).multiplyScalar(wave + 1.3);

      // Apply the Vector3 to a Matrix4
      transform.setPosition(vec);

      // Update Matrix4 for this instance
      ref.current.setMatrixAt(i, transform);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <>
      <instancedMesh ref={ref} args={[null, null, someValue]}>
        <circleBufferGeometry args={[0.08]} />
        <meshBasicMaterial color={"#09bd86"} />
      </instancedMesh>
    </>
  );
}

export default function BreathingDotsScene() {
  const [speed, setSpeed] = useState(5);
  return (
    <>
      <Canvas orthographic camera={{ zoom: 40 }} colorManagement={true}>
        <Suspense fallback={null}>
          <Dots multiply={1} speed={speed} />
        </Suspense>
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <Vignette eskil={false} offset={0.4} darkness={0.6} />
        </EffectComposer>
      </Canvas>
    </>
  );
}
