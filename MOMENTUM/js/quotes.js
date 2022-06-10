const quotes = [
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel",
  },
  {
    quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Fix the cause, not the symptom.",
    author: "Steve Maguire",
  },
  {
    quote: "Optimism is an occupational hazard of programming: feedback is the treatment. ",
    author: "Kent Beck",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    author: "Edsger Dijkstra",
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];
// quote.innerText = `${todaysQuote.quote}`;
// author.innerText = `${todaysQuote.author}`;
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

