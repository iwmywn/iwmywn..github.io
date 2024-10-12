import quotes from "../data/quotes";

export default function RandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex w-[90vw] select-none flex-col items-center gap-y-2 sm:w-[75vw]">
      <q className="text-center">
        <i>{randomQuote.text}</i>
      </q>
      <span className="whitespace-nowrap text-sm text-slate-300">
        {randomQuote.source}
      </span>
    </div>
  );
}
