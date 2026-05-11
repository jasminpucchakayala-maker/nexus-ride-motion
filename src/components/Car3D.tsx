import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Procedural 3D "luxury car" — built from primitives so we don't need GLTF assets.
 * Stylized, glossy, neon-lit. Rotates and floats subtly.
 */
function Car({ color = "#7aa8ff" }: { color?: string }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.35 + pointer.x * 0.4;
    group.current.rotation.x = pointer.y * 0.08;
  });

  const body = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.9,
    roughness: 0.25,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#0a0f1f",
    metalness: 0.2,
    roughness: 0.05,
    transmission: 0.8,
    transparent: true,
    opacity: 0.7,
    ior: 1.4,
  });
  const tire = new THREE.MeshStandardMaterial({ color: "#0b0b0f", roughness: 0.9 });
  const rim = new THREE.MeshStandardMaterial({ color: "#cfd8e6", metalness: 1, roughness: 0.2 });
  const light = new THREE.MeshBasicMaterial({ color: "#9bd4ff" });
  const tail = new THREE.MeshBasicMaterial({ color: "#ff5d8f" });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* lower body */}
      <mesh material={body} position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[3.6, 0.45, 1.5]} />
      </mesh>
      {/* mid body (sleek) */}
      <mesh material={body} position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[3.2, 0.3, 1.45]} />
      </mesh>
      {/* cabin */}
      <mesh material={body} position={[-0.05, 0.95, 0]} castShadow>
        <boxGeometry args={[1.9, 0.55, 1.3]} />
      </mesh>
      {/* windshield */}
      <mesh material={glass} position={[0.55, 0.95, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.9, 0.5, 1.25]} />
      </mesh>
      {/* rear window */}
      <mesh material={glass} position={[-0.85, 0.95, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.9, 0.5, 1.25]} />
      </mesh>
      {/* headlights */}
      <mesh material={light} position={[1.78, 0.5, 0.55]}>
        <boxGeometry args={[0.05, 0.12, 0.3]} />
      </mesh>
      <mesh material={light} position={[1.78, 0.5, -0.55]}>
        <boxGeometry args={[0.05, 0.12, 0.3]} />
      </mesh>
      {/* tail lights */}
      <mesh material={tail} position={[-1.78, 0.5, 0.55]}>
        <boxGeometry args={[0.05, 0.1, 0.3]} />
      </mesh>
      <mesh material={tail} position={[-1.78, 0.5, -0.55]}>
        <boxGeometry args={[0.05, 0.1, 0.3]} />
      </mesh>
      {/* underglow */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[3.2, 0.02, 1.2]} />
        <meshBasicMaterial color="#7c4dff" />
      </mesh>

      {/* wheels */}
      {[
        [1.1, 0.2, 0.78],
        [1.1, 0.2, -0.78],
        [-1.1, 0.2, 0.78],
        [-1.1, 0.2, -0.78],
      ].map((p, i) => (
        <group key={i} position={p as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={tire}>
            <cylinderGeometry args={[0.32, 0.32, 0.25, 32]} />
          </mesh>
          <mesh material={rim} position={[0, 0.13, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.05, 16]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Car3D({ color = "#7aa8ff" }: { color?: string }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [4.5, 2.2, 5.5], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <spotLight position={[8, 8, 5]} angle={0.3} intensity={1.2} color="#7aa8ff" castShadow />
      <spotLight position={[-8, 6, -4]} angle={0.4} intensity={1} color="#c77dff" />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
          <Car color={color} />
        </Float>
        <Sparkles count={60} scale={[8, 4, 8]} size={2} speed={0.4} color="#9bd4ff" />
        <ContactShadows position={[0, -0.21, 0]} opacity={0.6} scale={10} blur={2.4} far={3} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
