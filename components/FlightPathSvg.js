// Decorative dotted flight path with location pins and a small plane.
// Shared by the homepage hero and the auth split-screen panels.
export default function FlightPathSvg({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" className={className}>
      <path
        d="M40 320 C 120 180, 260 300, 360 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 8"
        strokeLinecap="round"
      />
      <circle cx="40" cy="320" r="6" className="fill-primary" />
      <circle cx="360" cy="80" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* little plane pointing along the path */}
      <g transform="translate(360 80) rotate(-35)" className="fill-primary">
        <path d="M0 -9 L3 0 L0 9 L-9 3 L-3 0 L-9 -3 Z" />
      </g>
    </svg>
  );
}
