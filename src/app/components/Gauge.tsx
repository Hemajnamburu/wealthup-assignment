type GaugeProps = {
  score: number;
};

export default function Gauge({ score }: GaugeProps) {
  const radius = 70;
  const stroke = 12;
  const circumference = Math.PI * radius;

  const progress = (score / 100) * circumference;

  const targetScore = 70;
  const targetAngle = Math.PI * (1 - targetScore / 100); // radians

  const centerX = 90;
  const centerY = 90;
  const outerOffset = -10; // small offset from arc
  const innerOffset = 16; // how deep line goes

  const markerX = centerX + (radius - outerOffset) * Math.cos(targetAngle);
  const markerY = centerY - (radius - outerOffset) * Math.sin(targetAngle);

  const lineEndX = centerX + (radius - innerOffset) * Math.cos(targetAngle);
  const lineEndY = centerY - (radius - innerOffset) * Math.sin(targetAngle);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f5f8fc] rounded-2xl shadow-inner px-10 pt-8 pb-6 relative">
        <svg className="w-[320px] h-45" viewBox="0 0 180 100">
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ff7a7a" />
              <stop offset="60%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="#e9edf3"
            strokeWidth={stroke}
            strokeLinecap="round"
          />

          {/* Progress arc */}
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
          />

          {/* Dotted marker line */}
          <line
            x1={markerX}
            y1={markerY}
            x2={lineEndX}
            y2={lineEndY}
            stroke="#9ca3af"
            strokeDasharray="3 4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Tooltip */}
        <div
          className="absolute text-xs bg-white shadow-lg px-3 py-2 rounded-lg text-slate-600 z-2"
          style={{ top: "20px", left: "52%" }}
        >
          You need <b>+27</b> points to reach a{" "}
          <span className="text-green-600 font-semibold">good</span> score of 70
          <div className="absolute left-18 -bottom-1 w-3 h-3 bg-white rotate-45"></div>
        </div>

        {/* Center Score */}
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-14">
          <p className="text-[80px] font-bold text-[#ff6b6b] leading-none">
            {score}
          </p>
          <p className="text-slate-600 text-sm tracking-wide">
            Current WealthUp Score
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-400 mt-3 italic">
        Better than <span className="text-sky-600 font-medium">46%</span> of
        peers
      </p>
    </div>
  );
}
