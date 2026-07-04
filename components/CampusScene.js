// University-themed placeholder illustration: a small campus scene with a
// classical columned building, a clock tower, and trees. Copyright-safe,
// always renders offline, and fills its container like object-cover
// (preserveAspectRatio="slice"). `accent` tints the roofs/pediment; `flip`
// mirrors the scene horizontally for subtle per-card variety.
export default function CampusScene({ className = "", accent = "#C8102E", flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Sky */}
      <rect width="400" height="300" fill="#0E2C4C" />

      <g transform={flip ? "translate(400,0) scale(-1,1)" : undefined}>
        {/* Stars */}
        <g fill="#ffffff" opacity="0.12">
          <circle cx="55" cy="45" r="1.5" />
          <circle cx="110" cy="32" r="1" />
          <circle cx="200" cy="28" r="1.2" />
          <circle cx="255" cy="55" r="1" />
          <circle cx="300" cy="44" r="1" />
          <circle cx="352" cy="70" r="1.4" />
          <circle cx="35" cy="82" r="1" />
        </g>

        {/* Ground */}
        <rect y="238" width="400" height="62" fill="#08203A" />
        <polygon points="182,300 193,240 207,240 218,300" fill="#12324F" />

        {/* Left building */}
        <rect x="36" y="150" width="78" height="88" fill="#D7E2EF" />
        <rect x="32" y="144" width="86" height="8" rx="2" fill={accent} />
        <g fill="#2A4A6E">
          <rect x="46" y="162" width="14" height="12" />
          <rect x="68" y="162" width="14" height="12" />
          <rect x="90" y="162" width="14" height="12" />
          <rect x="46" y="184" width="14" height="12" />
          <rect x="68" y="184" width="14" height="12" />
          <rect x="90" y="184" width="14" height="12" />
          <rect x="46" y="206" width="14" height="12" />
          <rect x="68" y="206" width="14" height="12" />
          <rect x="90" y="206" width="14" height="12" />
        </g>

        {/* Central classical building */}
        <rect x="150" y="220" width="100" height="18" fill="#D7E2EF" />
        <rect x="148" y="214" width="104" height="7" fill="#C9D6E5" />
        <g fill="#E8EEF5">
          <rect x="156" y="158" width="8" height="56" />
          <rect x="175" y="158" width="8" height="56" />
          <rect x="194" y="158" width="8" height="56" />
          <rect x="213" y="158" width="8" height="56" />
          <rect x="232" y="158" width="8" height="56" />
        </g>
        <rect x="148" y="150" width="104" height="10" fill="#E8EEF5" />
        <polygon points="150,150 200,120 250,150" fill={accent} />
        <circle cx="200" cy="139" r="5" fill="#E8EEF5" />

        {/* Right clock tower */}
        <rect x="300" y="120" width="46" height="118" fill="#E8EEF5" />
        <rect x="337" y="120" width="9" height="118" fill="#D2DEEC" />
        <polygon points="296,120 323,92 350,120" fill={accent} />
        <line x1="323" y1="92" x2="323" y2="80" stroke="#E8EEF5" strokeWidth="2" />
        <polygon points="323,80 336,84 323,88" fill={accent} />
        <circle cx="323" cy="148" r="11" fill="#F5F7FA" stroke="#0A2540" strokeWidth="2" />
        <line x1="323" y1="148" x2="323" y2="140" stroke={accent} strokeWidth="2" />
        <line x1="323" y1="148" x2="330" y2="148" stroke={accent} strokeWidth="2" />
        <g fill="#2A4A6E">
          <rect x="307" y="175" width="10" height="12" />
          <rect x="329" y="175" width="10" height="12" />
          <rect x="307" y="200" width="10" height="12" />
          <rect x="329" y="200" width="10" height="12" />
        </g>

        {/* Trees */}
        <rect x="120" y="214" width="6" height="24" fill="#6B4F2A" />
        <circle cx="123" cy="208" r="15" fill="#2E7D57" />
        <rect x="270" y="214" width="6" height="24" fill="#6B4F2A" />
        <circle cx="273" cy="208" r="15" fill="#2E7D57" />
      </g>
    </svg>
  );
}
