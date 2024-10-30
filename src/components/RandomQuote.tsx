import quotes from "../data/quotes";

export default function RandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex w-[90vw] select-none flex-col items-center justify-center gap-y-2 text-center font-medium sm:w-[75vw]">
      <q>
        <i>{randomQuote.text}</i>
      </q>
      <span className="text-sm text-black/75 dark:text-white/75">
        {randomQuote.source}
      </span>
    </div>
  );
}
