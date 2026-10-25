/**
 * The one image on the landing page, and the only ornament anywhere: a glucose
 * trace crossing a target band, with the controller's insulin action stepping
 * underneath it. It is the shape of the research, not decoration — so it stays
 * monochrome, unlabelled, and draws itself exactly once.
 *
 * Geometry is computed at module scope from fixed points, so the server and the
 * client render byte-identical markup.
 */

type Point = [number, number];

const GLUCOSE: Point[] = [
  [0, 128],
  [44, 134],
  [88, 126],
  [132, 70],
  [176, 48],
  [220, 78],
  [264, 110],
  [308, 128],
  [352, 118],
  [396, 130],
  [440, 124],
];

/** Cardinal spline through the points, emitted as cubic bezier segments. */
function smoothPath(points: Point[], tension = 0.35): string {
  if (points.length < 2) return "";
  const d: string[] = [`M ${points[0][0]} ${points[0][1]}`];

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension * 2;
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension * 2;
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension * 2;
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension * 2;

    d.push(
      `C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(
        2
      )}, ${p2[0]} ${p2[1]}`
    );
  }

  return d.join(" ");
}

const GLUCOSE_PATH = smoothPath(GLUCOSE);
const LAST = GLUCOSE[GLUCOSE.length - 1];

/* Insulin delivery, as a step function: the dose rises after the excursion. */
const INSULIN_PATH = "M 0 198 H 120 V 184 H 176 V 168 H 248 V 188 H 330 V 194 H 440";

export default function SignalTrace({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 212"
      fill="none"
      role="img"
      aria-label="A glucose trace crossing its target band, with the controller's insulin dose stepping underneath."
      className={className}
    >
      {/* Target range. */}
      <rect x="0" y="96" width="440" height="50" fill="var(--trace-soft)" />
      <line x1="0" y1="96" x2="440" y2="96" stroke="var(--trace-line)" strokeWidth="1" />
      <line x1="0" y1="146" x2="440" y2="146" stroke="var(--trace-line)" strokeWidth="1" />

      {/* Separator between the measured signal and the control action. */}
      <line x1="0" y1="212" x2="440" y2="212" stroke="var(--rule)" strokeWidth="1" />

      {/* The controller's action. */}
      <path
        d={INSULIN_PATH}
        stroke="var(--ink-2)"
        strokeWidth="1"
        strokeOpacity="0.55"
        pathLength={1}
        className="animate-trace"
      />

      {/* The measured signal. */}
      <path
        d={GLUCOSE_PATH}
        stroke="var(--trace)"
        strokeWidth="1.75"
        strokeLinecap="round"
        pathLength={1}
        className="animate-trace"
      />

      <circle
        cx={LAST[0] - 3}
        cy={LAST[1]}
        r="3.5"
        fill="var(--trace)"
        className="animate-trace-dot"
      />
    </svg>
  );
}
