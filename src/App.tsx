import "./index.css";
import Info from "./components/Info";
import RandomQuote from "./components/RandomQuote";
import RippleManager from "./components/RippleManager";

export default function App() {
  return (
    <>
      <main className="flex min-h-screen animate-color-change flex-col items-center justify-center gap-y-4 text-white">
        <Info />
        <RandomQuote />
      </main>
      <RippleManager />
    </>
  );
}
