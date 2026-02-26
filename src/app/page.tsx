import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import ScoreCard from "./components/Scorecard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef3f8] py-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Greeting />
        <ScoreCard />
        <Roadmap />
        {/* <Roadmap /> */}
      </div>
    </main>
  );
}