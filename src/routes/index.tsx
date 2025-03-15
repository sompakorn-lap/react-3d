import { createFileRoute } from "@tanstack/react-router";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export const Route = createFileRoute("/")({
  component: Page,
});

const Ball = lazy(() => import("../models/ball/Ball"));

function Page() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Ball />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default Page;
