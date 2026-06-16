import { Suspense } from "react";
import SplineNext from "@splinetool/react-spline/next";
import { cn } from "@/lib/utils";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  );
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <Suspense fallback={<SplineLoader />}>
        <SplineNext scene={scene} style={{ width: "100%", height: "100%" }} />
      </Suspense>
    </div>
  );
}
