const quotes = [
  "“The more I learn, the more I realize how much I don't know.” — Albert Einstein",
  "“Hell is other people.” — Jean-Paul Sartre",
  "“I think, therefore I am.” — René Descartes",
  "“The fear has gripped me but here I go.” — ∆",
  "“Curiosity is the beginning of understanding.” — Neil deGrasse Tyson",
];

const quoteEl = document.getElementById("quote");
quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
