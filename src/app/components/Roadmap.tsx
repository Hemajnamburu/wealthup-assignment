import StepCard from "./StepCard";

export default function Roadmap() {
  return (
    <section className="mt-8 bg-white p-4 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Your personalized roadmap to{" "}
        <span className="font-bold">70+ WealthUp score</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-3">
        <StepCard
          step="Step 1"
          title="Build your safety net (Emergency fund)"
          description="Avoid a potential 2-year setback. Build your emergency fund to be risk-free within the next 6 months."
          active
          points={20}
          ctaText='Start Investing Today '
          extraText="⚡ Express setup: Complete in under 3 minutes"
        />

        <StepCard
          step="Step 2"
          title="Optimize investments"
          description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile."
          points={12}
          ctaText='Begin Investing '
          extraText="🔒 Complete Step 1 (critical) to unlock"
        />

        <StepCard
          step="Step 3"
          title="Maximize growth"
          description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles."
          points={8}
          ctaText='Analyse your Mutual Funds '
          extraText="🔒 Complete Step 1 (critical) to unlock"
        />
      </div>
    </section>
  );
}
