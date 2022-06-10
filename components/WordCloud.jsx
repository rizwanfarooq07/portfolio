import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, TrackballControls } from "@react-three/drei";

import randomWord from "random-words";
import { skills } from "../data";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    color: "#00f260",
    font: "/Inter-Bold.woff",
    fontSize: 1.7,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  // useEffect(() => {
  //   if (hovered) document.body.style.cursor = "pointer";
  //   return () => (document.body.style.cursor = "auto");
  // }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    // @ts-ignore
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    // @ts-ignore
    // ref.current.material.color.lerp(
    //   color.set(hovered ? "#00f260" : "white"),
    //   0.1
    // );
    // ref.current.rotation.x += 0.05;
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    // console.log(word, "skill");
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          skills[Math.floor(Math.random() * skills.length)],

          // skills[i],
          // "React",
          // randomWord(),
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function WordCloud() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Cloud count={6} radius={24} />
      <TrackballControls rotation={true} rotationSpeed={20} />
      <OrbitControls autoRotate autoRotateSpeed={1.3} matrix={true} />
    </Canvas>
  );
}
