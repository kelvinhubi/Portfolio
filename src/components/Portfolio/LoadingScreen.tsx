import { useProgress } from "@react-three/drei";

export function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <div className="loading-screen" aria-label="Loading portfolio">
      <div className="loading-mark">
        KF<span>.</span>
      </div>
      <div className="loading-line">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="loading-meta">
        <span>Loading experience</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
