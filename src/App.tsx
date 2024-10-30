import "./index.css";
import Info from "./components/Info";
import RandomQuote from "./components/RandomQuote";
import RippleManager from "./components/RippleManager";
import ToggleTheme from "./components/ToggleTheme";

export default function App() {
  return (
    <>
      <main className="animate-color-change-light dark:animate-color-change-dark flex min-h-screen flex-col items-center justify-center gap-y-4 text-black dark:text-white">
        <Info />
        <RandomQuote />
      </main>
      <ToggleTheme />
      <RippleManager />
    </>
  );
}
