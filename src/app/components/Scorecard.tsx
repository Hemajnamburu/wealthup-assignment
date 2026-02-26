import BreakdownBar from "./BreakdownBar";
import Gauge from "./Gauge";

export default function ScoreCard() {
    return (
        <section className="mt-6 bg-white rounded-2xl shadow-md p-8 grid grid-cols-2 gap-8">
            {/* Left: Gauge placeholder */}
            <div className="flex items-center justify-center">
                <Gauge score={43} />
            </div>

            {/* Right: Financial stats */}
            <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-4">
                    Financial independence age
                </h3>

                {/* Trajectory boxes */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4 text-center shadow-sm">
                        <p className="text-xs text-slate-500">Current Trajectory</p>
                        <p className="text-2xl font-bold text-slate-700 mt-1">65</p>
                        <p className="text-xs text-slate-400 mt-1">
                            Based on current savings
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 text-center shadow-sm">
                        <p className="text-xs text-slate-500">Your Potential</p>
                        <p className="text-2xl font-bold text-sky-600 mt-1">38</p>
                        <p className="text-xs text-slate-400 mt-1">
                            With optimized planning
                        </p>
                    </div>
                </div>

                {/* Breakdown placeholder */}
                <h4 className="text-sm font-semibold text-[#3b5b7a] mb-3">
                    Your score breakdown
                </h4>

                <div className="grid grid-cols-3 gap-y-6">
                    {/* Row 1 */}
                    <div className="pr-6 border-r border-[#d4d4d4]">
                        <BreakdownBar label="Emergency Funds" value={0} max={20} />
                    </div>
                    <div className="px-6 border-r border-[#d4d4d4]">
                        <BreakdownBar label="Liquidity" value={11} max={20} />
                    </div>
                    <div className="pl-6">
                        <BreakdownBar label="Investments" value={20} max={20} />
                    </div>

                    {/* Row 2 */}
                    <div className="pr-6 border-r border-[#d4d4d4]">
                        <BreakdownBar label="Health Insurance" value={20} max={20} />
                    </div>
                    <div className="px-6 border-r border-[#d4d4d4]">
                        <BreakdownBar label="Life Insurance" value={7} max={20} />
                    </div>
                    <div className="pl-6">
                        <BreakdownBar label="Savings" value={16} max={20} />
                    </div>
                </div>
            </div>
        </section>
    );
}