import { useEffect, useState } from "react";

export default function AnimatedCounter({ to, prefix = "", suffix = "", duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(to);
    const increment = end / (duration / 16); // ~60fps
    let frame;

    const update = () => {
      start += increment;
      if (start < end) {
        setDisplayValue(Math.floor(start));
        frame = requestAnimationFrame(update);
      } else {
        setDisplayValue(end);
        cancelAnimationFrame(frame);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [to, duration]);

  return (
    <span>
      {prefix}
      {Math.floor(displayValue)}
      {suffix}
    </span>
  );
}
