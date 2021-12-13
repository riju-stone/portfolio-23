import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useThree, extend, useFrame, useLoader } from "@react-three/fiber";
import {
  Box,
  useMatcapTexture,
  Octahedron,
  shaderMaterial,
} from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { ThinFilmFresnelMap } from "../../utils/ThinFilmFresnelMap";
import { mirrorsData } from "../../utils/Data";

import BackgroundImage from "../../assets/images/bg.jpg";

function Mirror({ material, texture, args, map, ...props }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.01;
  });

  return (
    <group {...props}>
      <Box ref={ref} args={args}>
        <meshLambertMaterial
          attachArray="material"
          map={map}
          color={0xaaaaaa}
        />
        <meshLambertMaterial
          attachArray="material"
          map={map}
          color={0xaaaaaa}
        />
        <meshLambertMaterial
          attachArray="material"
          map={map}
          color={0xaaaaaa}
        />
        <meshLambertMaterial
          attachArray="material"
          map={map}
          color={0xaaaaaa}
        />
        <meshLambertMaterial
          attachArray="material"
          envMap={texture}
          map={map}
        />
        <meshLambertMaterial
          attachArray="material"
          envMap={texture}
          map={map}
        />
      </Box>
    </group>
  );
}

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

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  const [image] = useLoader(THREE.TextureLoader, [BackgroundImage]);

  return (
    <mesh position={[0, 0, -10]}>
      <planeBufferGeometry args={[6, 9, 50, 50]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};

export default function MirrorScene() {
  const [cubeRenderTarget] = useState(
    new THREE.WebGLCubeRenderTarget(1024, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
    })
  );
  const thinFilmFresnelMap = new ThinFilmFresnelMap();

  const camera = useRef();
  const sphere = useRef();

  const [matcapTexture] = useMatcapTexture("C8D1DC_575B62_818892_6E747B");

  useFrame(({ gl, scene }) => {
    sphere.current.visible = true;
    camera.current.update(gl, scene);
    sphere.current.visible = false;
  });

  const group = useRef();

  const { viewport } = useThree();

  const [posV, rotE, rotQ] = useMemo(() => {
    return [
      new THREE.Vector3(0, 0, 0),
      new THREE.Euler(0, 0, 0),
      new THREE.Quaternion(0, 0, 0, 0),
    ];
  }, []);

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 100;
    const y = (mouse.y * viewport.height) / 100;

    posV.set(x, y, 0);
    rotE.set(y, x, 0);

    rotQ.setFromEuler(rotE);

    group.current.position.lerp(posV, 0.1);
    group.current.quaternion.slerp(rotQ, 0.1);
  });

  return (
    <group ref={group}>
      <cubeCamera
        ref={camera}
        args={[0.1, 100, cubeRenderTarget]}
        position={[0, 0, 5]}
      />
      <group name="mirrors">
        {mirrorsData.mirrors.map((mirror, index) => (
          <Mirror
            key={`0${index}`}
            {...mirror}
            texture={cubeRenderTarget.texture}
            map={thinFilmFresnelMap}
          />
        ))}
      </group>
      <Wave />
      <Octahedron ref={sphere} args={[20, 4, 4]} position={[0, 0, 2]}>
        <meshMatcapMaterial
          matcap={matcapTexture}
          side={THREE.BackSide}
          transparent
          opacity={0.3}
        />
      </Octahedron>
    </group>
  );
}
