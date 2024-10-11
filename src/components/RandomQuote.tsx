import quotes from "../data/quotes";

export default function RandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mx-6 flex flex-col items-center gap-y-2 sm:mx-12 md:mx-20 lg:mx-28 xl:mx-36 2xl:mx-44">
      <q className="text-center">
        <i>{randomQuote.text}</i>
      </q>
      <span className="text-sm text-slate-300">{randomQuote.source}</span>
    </div>
  );
}
