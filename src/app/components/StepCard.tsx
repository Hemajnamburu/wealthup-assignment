type Props = {
  step: string;
  title: string;
  description: string;
  active?: boolean;
  points?: number;
    ctaText?: string;
    extraText?: string;
};

export default function StepCard({
  step,
  title,
  description,
  active,
  points,
  ctaText,
  extraText,
}: Props) {
  return (
    <div
  className={`rounded-2xl border p-6 transition flex flex-col h-full ${
        active
          ? "bg-white border-blue-200 shadow-[0_8px_24px_rgba(47,111,237,0.15)]"
          : "bg-gray-200/50 border-gray-200 text-gray-400"
      }`}
    >
        <div className="flex flex-col h-full">
      <p
        className={`text-sm ${active ? "text-red-500 font-medium" : "text-gray-400"}`}
      >
        {step} {active && "• Critical"}
      </p>

      <h3 className="font-semibold text-gray-800 mt-2">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed mt-2">
        {description}
      </p>

      {active && (
        <>
          {/* Monthly Selection */}
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">
              I can commit to saving <span className="font-semibold">₹500</span>{" "}
              monthly
            </p>

            <div className="flex flex-wrap gap-2">
              {["₹500", "₹1,000", "₹5,000", "₹6,000"].map((amt) => (
                <button
                  key={amt}
                  className="px-2 py-1.5 border border-gray-200 rounded-md text-sm text-gray-500 bg-white hover:border-blue-300 hover:text-blue-600 transition"
                >
                  {amt}
                </button>
              ))}
              <input
                placeholder="₹ Enter amount"
                className="mt-2 w-24 border-b text-gray-500 text-sm outline-none"
              />
            </div>
          </div>

          {/* Recommended Funds */}
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Recommended Funds (Top performers)
            </p>

            <div className="flex gap-2">
              <FundChip name="HDFC Mid-Cap Fund" returnRate="26% (3Y)" />
              <FundChip name="Bandhan Small Cap" returnRate="32% (3Y)" />
            </div>
          </div>

          {/* CTA */}
        </>
      )}
      </div>
      <div className="mt-auto">
      <button className="mt-5 w-full py-3 rounded-full font-medium text-white bg-linear-to-r from-blue-900 to-blue-400 shadow-[0_14px_28px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_24px_rgba(37,99,235,0.45)] transition">
        {ctaText}
        <span className="ml-2 bg-white rounded-4xl p-2 text-green-400">
          +{points} pts
        </span>
      </button>

        <p className="text-xs text-gray-500 mt-2 mx-auto text-center">
          {extraText}
        </p>
        </div>
    </div>
  );
}

function FundChip({ name, returnRate }: { name: string; returnRate: string }) {
  return (
    <div
      className="border border-gray-200 rounded-xl px-4 py-3 bg-white 
shadow-[0_2px_6px_rgba(0,0,0,0.05)] w-44"
    >
      <p className="text-sm text-[#363636]">{name}</p>
      <p className="text-xs text-green-600 font-medium mt-1">{returnRate}</p>
    </div>
  );
}
