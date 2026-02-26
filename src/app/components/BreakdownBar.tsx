type BreakdownBarProps = {
  label: string;
  value: number;
  max: number;
};

export default function BreakdownBar({
  label,
  value,
  max,
}: BreakdownBarProps) {
  const percent = (value / max) * 100;

  return (
    <div className="space-y-1">
      {/* Label row */}
      <div className="flex justify-between text-sm">
        <span className="text-[#3b5b7a] font-medium">{label}</span>
        <span className="text-slate-400">
          {value} / {max}
        </span>
      </div>

      {/* Bar */}
      <div className="w-full h-2 bg-[#e9edf3] rounded-full overflow-hidden">
        {value === 0 ? (
          <div className="w-2 h-2 bg-red-400 rounded-full" />
        ) : (
          <div
            className="h-full rounded-full"
            style={{
              width: `${percent}%`,
              background:
                "linear-gradient(90deg, #ff7a7a 0%, #fbbf24 60%, #86efac 100%)",
            }}
          />
        )}
      </div>
    </div>
  );
}