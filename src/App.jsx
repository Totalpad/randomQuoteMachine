import { useEffect, useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getNewQuote();
  }, []);

  async function getNewQuote() {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) throw new Error("Error fetch quote");
      const data = await response.json();

      setText(data.content);
      setAuthor(data.author);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div id="wrapper" className=" ">
      <div
        id="quote-box"
        className=" rounded-md bg-stone-200 p-6 text-purple-500"
      >
        <div id="text" className="text-xl font-semibold ">
          {text}
        </div>
        <div id="author" className="my-4 text-right text-sm">
          - {author}
        </div>
        <div className="mt-3 flex items-center justify-between ">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${text}" - ${author}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="h-6 w-6 " />
          </a>
          <button
            id="new-quote"
            onClick={getNewQuote}
            className=" inline-block rounded-full bg-purple-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-purple-300 focus:bg-purple-300 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-2 active:bg-purple-600 disabled:cursor-not-allowed disabled:bg-slate-400 md:px-5 md:py-2.5 "
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div
id="wrapper"
className="flex h-screen items-center justify-center bg-blue-400"
>
<div
  id="quote-box"
  className=" max-w-md rounded-md bg-stone-200 p-7 text-blue-400"
>
  <div id="text" className="text-xl font-semibold ">
    {text}
  </div>
  <div id="author" className="my-4 text-right text-sm">
    - {author}
  </div>
  <div className="mt-3 flex items-center justify-between ">
    <a
      id="tweet-quote"
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${text}" - ${author}`,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaSquareXTwitter className="h-6 w-6 " />
    </a>
    <button
      id="new-quote"
      onClick={getNewQuote}
      className=" inline-block rounded-full bg-blue-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 active:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-400 md:px-5 md:py-2.5 "
    >
      New Quote
    </button>
  </div>
</div>
</div>
);
} */
}
