import * as THREE from "three";
import { useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
	Physics,
	usePlane,
	useCompoundBody,
	useSphere,
} from "@react-three/cannon";

import { EffectComposer, SSAO } from "@react-three/postprocessing";

const baubleMaterial = new THREE.MeshLambertMaterial({
	color: "#D55A13",
	emissive: "#994210",
});
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const baubles = [...Array(50)].map(() => ({
	args: [0.6, 0.6, 0.8, 0.8, 1][Math.floor(Math.random() * 5)],
	mass: 1,
	angularDamping: 0.2,
	linearDamping: 0.95,
}));

function Bauble({ vec = new THREE.Vector3(), ...props }) {
	const [ref, api] = useCompoundBody(() => ({
		...props,
		shapes: [
			{
				type: "Box",
				position: [0, 0, 1.2 * props.args],
				args: new THREE.Vector3().setScalar(props.args * 0.2).toArray(),
			},
			{ type: "Sphere", args: [props.args] },
		],
	}));

	useEffect(
		() =>
			api.position.subscribe((p) =>
				api.applyForce(
					vec
						.set(...p)
						.normalize()
						.multiplyScalar(-props.args * 5)
						.toArray(),
					[0, 0, 0]
				)
			),
		[api, props.args, vec]
	);

	return (
		<group ref={ref} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				scale={props.args}
				geometry={sphereGeometry}
				material={baubleMaterial}
			/>
		</group>
	);
}

function Collisions() {
	const viewport = useThree((state) => state.viewport);
	usePlane(() => ({ position: [0, 0, 0], rotation: [0, 0, 0] }));
	usePlane(() => ({ position: [0, 0, 8], rotation: [0, -Math.PI, 0] }));
	usePlane(() => ({ position: [0, -4, 0], rotation: [-Math.PI / 2, 0, 0] }));
	usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }));
	const [, api] = useSphere(() => ({ type: "Kinematic", args: [2] }));
	return useFrame((state) =>
		api.position.set(
			(state.mouse.x * viewport.width) / 2,
			(state.mouse.y * viewport.height) / 2,
			2.5
		)
	);
}

const BubbleScene = () => (
	<Canvas
		shadows
		dpr={1.5}
		gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
		camera={{ position: [0, 0, 20], fov: 35, near: 10, far: 40 }}>
		<ambientLight intensity={0.25} />
		<spotLight
			position={[20, 20, 25]}
			penumbra={1}
			angle={0.23}
			color="purple"
			castShadow
			shadow-mapSize={[512, 512]}
		/>
		<directionalLight position={[0, 5, -4]} intensity={2} />
		<directionalLight position={[0, -15, -0]} intensity={3} color="purple" />
		<Physics gravity={[0, 1, 0]} iterations={5} broadphase="SAP">
			<Collisions />
			{baubles.map((props, i) => (
				<Bauble key={i} {...props} />
			))}
		</Physics>
		<EffectComposer multisampling={0}>
			<SSAO
				samples={15}
				radius={30}
				intensity={30}
				luminanceInfluence={0.6}
				color="#09bd45"
			/>
			<SSAO
				samples={21}
				radius={5}
				intensity={30}
				luminanceInfluence={0.6}
				color="#09bd45"
			/>
		</EffectComposer>
	</Canvas>
);

export default BubbleScene;
