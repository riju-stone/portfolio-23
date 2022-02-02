import React, { useRef } from "react";
import * as THREE from "three";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

import BackgroundImage from "../../assets/images/bg.jpg";

//hooks
import { useIsMobile } from "../../hooks/useMediaQuery";
import useSlerp from "../../hooks/useSlerp";
import useRenderTarget from "../../hooks/useRenderTarget";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
      precision mediump float;
      varying vec2 vUv;
      varying float vWave;
      uniform float uTime;
      #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
      void main() {
        vUv = uv;
        vec3 pos = position;
        float noiseFreq = 0.6;
        float noiseAmp = 0.3;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
      }
    `,
  // Fragment Shader
  glsl`
      precision mediump float;
      uniform vec3 uColor;
      uniform float uTime;
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying float vWave;
      void main() {
        float wave = vWave * 0.4;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0); 
      }
    `
);

extend({ WaveShaderMaterial });

export default function WaveMaterial() {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  const [image] = useLoader(THREE.TextureLoader, [BackgroundImage]);

  const isMobile = useIsMobile();

  const dimensions = {
    height: isMobile ? 7 : 9,
    width: isMobile ? 4 : 6,
  };

  const group = useSlerp();
  const [cubeCamera, renderTarget] = useRenderTarget();

  return (
    <>
      <cubeCamera
        layers={[11]}
        name="cubeCamera"
        ref={cubeCamera}
        args={[0.1, 100, renderTarget]}
        position={[0, 0, -12]}
      />
      <group ref={group}>
        <mesh position={[0, 0, -5]}>
          <planeBufferGeometry
            args={[dimensions.width, dimensions.height, 80, 80]}
          />
          <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
        </mesh>
      </group>
    </>
  );
}
