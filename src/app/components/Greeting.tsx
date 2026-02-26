export default function Greeting() {
  return (
    <section className="flex items-start justify-between mt-6">
      {/* Left text */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-700">
          Good Morning, <span className="font-bold">Ankit!</span>
        </h2>
        <p className="text-slate-500 mt-1">
          At <span className="font-semibold">28</span>, your income is strong,
          but your wealth efficiency is lagging.
        </p>
      </div>

      {/* Verified badge */}
      <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full shadow-sm">
        <span className="text-sm font-medium">✔ Verified Analysis</span>
      </div>
    </section>
  );
}