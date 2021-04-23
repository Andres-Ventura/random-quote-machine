const QUOTEBANK = [
  {
    quote: "Imagination is more important than knowledge.",
    author: "- Albert Einstein"
  },
  {
    quote: "Coincidence is God's way of remaining anonymous.",
    author: "- Albert Einstein"
  },
  {
    quote:
      "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "- Albert Einstein"
  },

  {
    quote:
      "An eye for eye only ends up making the whole world blind.",
    author: "- Mahatma Gandhi"
  },
  {
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "- Mahatma Gandhi"
  },
    {
    quote:
      "Anyone who has ever made anything of importance was disciplined.",
    author: "- Andrew Hendrixson"
  },
  {
    quote:
      "Creativity is intelligence having fun.",
    author: "- Albert Einstein"
  },
    {
    quote:
      "Always keep your eyes open. Keep watching. Because whatever you see can inspire you.",
    author: "- Grace Coddington"
  },
  {
    quote:
      "I destroy my enemies when I make them my friends.",
    author: "- Abraham Lincoln"
  },

   {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "- Nelson Mandela"
  },
    {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "- Eleanor Roosevelt"
  },
  {
    quote:
      "Life is 10 percent what happens to you and 90 percent how you react to it.",
    author: "- Unknown"
  }
];

window.onload = init;

function init() {
  generateQuote();
}

function generateQuote() {
  /* iterates through each quote set */
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];
/* stops here*/
  
/* links quote to twitter link */
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="

  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat;
  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += " - " + authorInApiFormat;
/* stops twitter link here */
  
  /*looks through the document and grabs an "ElementById " to  grab the first id of ("whats in here")*/
  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}

