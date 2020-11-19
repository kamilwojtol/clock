/* Consts */

const timer = document.querySelector(".clock__timer");
const greeting = document.querySelector(".greeting__text");
const quote = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");

/* Timer */

function setTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = ("0" + time.getMinutes()).slice(-2);
  let seconds = ("0" + time.getSeconds()).slice(-2);
  let fullTime = `${hours}:${minutes}:${seconds}`;

  timer.innerText = fullTime;

  /* Greeting */

  function setGreeting() {
    if (hours > 5 && hours <= 11) {
      greeting.innerText = "Miłego poranka!";
    } else if (hours >= 12 && hours <= 17) {
      greeting.innerText = "Miłego dnia!";
    } else {
      greeting.innerText = "Miłego wieczoru!";
    }
  }

  setGreeting();
}

/* Quotes */

function setQuotes() {
  const quotes = [
    {
      text:
        "Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu",
      author: "Antoine de Saint-Exupéry",
    },
    {
      text:
        "Są dwie drogi, aby przeżyć życie. Jedna to żyć tak, jakby nic nie było cudem. Druga to żyć tak, jakby cudem było wszystko.",
      author: "Albert Einstein",
    },
    {
      text: "Życia nie można wybrać, ale można z niego coś zrobić.",
      author: "Peter Lippert",
    },
    {
      text: "Nigdy nie jest za późno, by stać się tym, kim chcemy być.",
      author: "George Eliot",
    },
    {
      text: "Przeciwności losu uczą mądrości, powodzenie ją odbiera.",
      author: "Seneka Młodszy",
    },
    {
      text: "Kto wiele wycierpiał - ten wiele zrozumie.",
      author: "Pitagoras",
    },
    {
      text: "Wojna. Wojna nigdy się nie zmienia.",
      author: "Fallout",
    },
  ];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const randomQuote = getRandomArbitrary(0, quotes.length);

  quote.textContent = quotes[randomQuote].text;
  quoteAuthor.textContent = quotes[randomQuote].author;
}

setInterval(setTime, 1000);
setQuotes();
