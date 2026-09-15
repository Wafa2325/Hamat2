import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const PURPLE = '#8A688A';
const PINK = '#e879f9';
const GOLD = '#C5A16F';

const GlassBox = ({ size, position, color = PURPLE, edge = PINK, opacity = 0.42, emissive = 0.35 }) => {
  const geo = useMemo(() => new THREE.BoxGeometry(...size), [size]);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  return (
    <group position={position}>
      <mesh geometry={geo}>
        <meshPhysicalMaterial color={color} transparent opacity={opacity} roughness={0.15} metalness={0.4} emissive={color} emissiveIntensity={emissive} depthWrite={false} />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={edge} transparent opacity={0.9} toneMapped={false} />
      </lineSegments>
    </group>
  );
};

const Screen = () => {
  const mat = useRef();
  useFrame(({ clock }) => { mat.current.uniforms.uTime.value = clock.elapsedTime; });
  const shader = useMemo(() => ({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform float uTime; varying vec2 vUv;
      void main(){
        float w = sin(vUv.x*6.0 + uTime*1.2) * 0.5 + 0.5;
        float v = sin(vUv.y*4.0 - uTime*0.8 + vUv.x*3.0) * 0.5 + 0.5;
        vec3 a = vec3(0.91,0.47,0.98); vec3 b = vec3(0.77,0.63,0.44); vec3 c = vec3(0.54,0.41,0.54);
        vec3 col = mix(mix(c,a,w), b, v*0.55);
        float grid = step(0.92, fract(vUv.x*24.0)) + step(0.92, fract(vUv.y*14.0));
        col += grid*0.12;
        gl_FragColor = vec4(col*0.6, 0.95);
      }`,
  }), []);
  return (
    <mesh position={[0, 2.35, -2.9]}>
      <planeGeometry args={[5.4, 3]} />
      <shaderMaterial ref={mat} args={[shader]} transparent toneMapped={false} />
    </mesh>
  );
};

const Truss = () => {
  const bars = [];
  const x = 3.2, top = 4.4, z0 = -3.1, z1 = 1.2;
  [-x, x].forEach((sx) => [z0, z1].forEach((sz) => bars.push({ size: [0.16, top, 0.16], position: [sx, top / 2, sz] })));
  [z0, z1].forEach((sz) => bars.push({ size: [x * 2 + 0.16, 0.16, 0.16], position: [0, top, sz] }));
  [-x, x].forEach((sx) => bars.push({ size: [0.16, 0.16, z1 - z0], position: [sx, top, (z0 + z1) / 2] }));
  return bars.map((b, i) => <GlassBox key={i} size={b.size} position={b.position} color={GOLD} edge={GOLD} opacity={0.55} emissive={0.5} />);
};

const Beam = ({ position, delay, color }) => {
  const ref = useRef();
  useFrame(({ clock }) => { ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.7 + delay) * 0.5; ref.current.rotation.x = 0.25 + Math.cos(clock.elapsedTime * 0.5 + delay) * 0.2; });
  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -2.2, 0]}>
        <coneGeometry args={[0.9, 4.4, 24, 1, true]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </mesh>
      <mesh><sphereGeometry args={[0.14, 12, 12]} /><meshBasicMaterial color={color} toneMapped={false} /></mesh>
    </group>
  );
};

const Crowd = () => {
  const { positions, colors } = useMemo(() => {
    const n = 260, p = new Float32Array(n * 3), c = new Float32Array(n * 3);
    const g = new THREE.Color(GOLD), k = new THREE.Color(PINK);
    for (let i = 0; i < n; i++) {
      p[i * 3] = (Math.random() - 0.5) * 6.4; p[i * 3 + 1] = 0.35 + Math.random() * 0.25; p[i * 3 + 2] = 1.7 + Math.random() * 2.4;
      const col = Math.random() > 0.5 ? g : k; c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b;
    }
    return { positions: p, colors: c };
  }, []);
  const ref = useRef();
  useFrame(({ clock }) => { ref.current.material.size = 0.09 + Math.sin(clock.elapsedTime * 2) * 0.02; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.1} sizeAttenuation transparent opacity={0.9} toneMapped={false} />
    </points>
  );
};

const Confetti = () => {
  const positions = useMemo(() => {
    const n = 180, p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { p[i * 3] = (Math.random() - 0.5) * 12; p[i * 3 + 1] = Math.random() * 7; p[i * 3 + 2] = (Math.random() - 0.5) * 10; }
    return p;
  }, []);
  const ref = useRef();
  useFrame(({ clock }) => { ref.current.rotation.y = clock.elapsedTime * 0.05; ref.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.2; });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color={GOLD} size={0.05} transparent opacity={0.7} toneMapped={false} />
    </points>
  );
};

const Ring = ({ radius, y, speed, color }) => {
  const ref = useRef();
  useFrame(({ clock }) => { ref.current.rotation.z = clock.elapsedTime * speed; });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} position={[0, y, 0]}>
      <torusGeometry args={[radius, 0.012, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} toneMapped={false} />
    </mesh>
  );
};

const Rig = ({ mouse, children }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, -0.45 + Math.sin(t * 0.18) * 0.18 + mouse.current.x * 0.35, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0.08 - mouse.current.y * 0.18, 0.05);
    ref.current.position.y = Math.sin(t * 0.6) * 0.12 - 1.4;
  });
  return <group ref={ref}>{children}</group>;
};

export const Stage3D = ({ mouse }) => (
  <Canvas dpr={[1, 1.5]} camera={{ position: [0, 7, 27], fov: 30 }} gl={{ antialias: true, powerPreference: 'high-performance' }} onCreated={({ gl }) => gl.setClearColor('#120818', 1)}>
    <ambientLight intensity={0.6} />
    <pointLight position={[4, 6, 4]} intensity={30} color={PINK} />
    <pointLight position={[-4, 3, 3]} intensity={20} color={GOLD} />
    <Rig mouse={mouse}>
      <GlassBox size={[9.6, 0.5, 8.4]} position={[0, -0.25, 0]} color="#2a1535" edge={PURPLE} opacity={0.75} emissive={0.05} />
      <GlassBox size={[9.0, 0.06, 7.8]} position={[0, 0.03, 0]} color={PINK} edge={PINK} opacity={0.08} emissive={0.4} />
      <GlassBox size={[7.2, 0.9, 4.2]} position={[0, 0.45, -1.2]} />
      <GlassBox size={[6.6, 0.7, 3.6]} position={[0, 1.25, -1.5]} />
      <GlassBox size={[6.0, 0.5, 3.0]} position={[0, 1.85, -1.8]} />
      <GlassBox size={[3.2, 0.3, 1.4]} position={[0, 0.15, 1.5]} color={GOLD} edge={GOLD} opacity={0.3} emissive={0.3} />
      <GlassBox size={[2.4, 0.3, 1.0]} position={[0, 0.45, 1.1]} color={GOLD} edge={GOLD} opacity={0.3} emissive={0.3} />
      <GlassBox size={[0.9, 1.2, 0.9]} position={[-4.1, 0.6, 2.9]} color={PURPLE} edge={GOLD} opacity={0.35} />
      <GlassBox size={[0.9, 1.2, 0.9]} position={[4.1, 0.6, 2.9]} color={PURPLE} edge={GOLD} opacity={0.35} />
      <Screen />
      <Truss />
      <Beam position={[-2.2, 4.3, -1]} delay={0} color={PINK} />
      <Beam position={[0, 4.3, -1]} delay={2} color={GOLD} />
      <Beam position={[2.2, 4.3, -1]} delay={4} color={PINK} />
      <Crowd />
      <Confetti />
      <Ring radius={6.2} y={0.1} speed={0.12} color={PINK} />
      <Ring radius={7.1} y={0.35} speed={-0.08} color={GOLD} />
    </Rig>
    <EffectComposer disableNormalPass>
      <Bloom intensity={0.9} luminanceThreshold={0.55} luminanceSmoothing={0.25} mipmapBlur />
    </EffectComposer>
  </Canvas>
);
