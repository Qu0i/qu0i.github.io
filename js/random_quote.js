const quotes = [
  "“The more I learn, the more I realize how much I don't know.” — Albert Einstein",
  "“Unpin your butterflies, Russia.” — ∆",
  "“Hell is other people.” — Jean-Paul Sartre",
  "“Triangles are my favourite shape.” — ∆",
  "“I think, therefore I am.” — René Descartes",
  "“The fear has gripped me but here I go.” — ∆",
  "“Curiosity is the beginning of understanding.” — Neil deGrasse Tyson",
];

const quoteEl = document.getElementById("quote");
quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
