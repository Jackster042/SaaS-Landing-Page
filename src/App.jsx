import "./App.css";

// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  );
}

export default App;
