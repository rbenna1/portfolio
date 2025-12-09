import { useMemo } from 'react';

export default function Snowflakes() {
  // Mémorise les positions et timings pour éviter les recalculs au re-render
  const snowflakes = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4
    }));
  }, []);

  return (
    <div className="snowflakes" aria-hidden="true" style={{ opacity: 0, pointerEvents: 'none' }}>
      {snowflakes.map((flake, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
