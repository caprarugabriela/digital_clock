// function to get updated time (HH:MM:SS)
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  // padStart - completeaza sirul de caractere pana atinge lungimea specificata
  // in acest caz, orele si secundele sunt reprezentate de 2 cifre
  // daca valoarea este sub 10, se va adauga un 0 la inceput
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const timeNow = `${hours}:${minutes}:${seconds}`;
  document.querySelector('.setTime').innerHTML = timeNow;
}

setInterval(function () {
  getTime();
}, 1000);

// function to get updated date (WeekDay, DD Month)
function getDate() {
  const date = new Date();
  const daysOfWeek = [
    'Duminica',
    'Luni',
    'Marti',
    'Miercuri',
    'Joi',
    'Vineri',
    'Sambata',
  ];
  const months = [
    'Ian',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];

  const dateNow = `${dayOfWeek}, ${dayOfMonth} ${month}`;
  document.querySelector('.setDate').innerHTML = dateNow;
}

setInterval(function () {
  getDate();
}, 1000);

// function to get updated background based on the season
function updateSeasonBackground() {
  const date = new Date();
  // 0 - ian, 1- feb samd
  const month = date.getMonth() + 1;

  let imageUrl;
  if (month >= 12 || (month >= 1 && month <= 2)) {
    //check if Dec, Jan or Feb
    imageUrl = 'background/winter.jpg';
  } else if (month >= 3 && month <= 5) {
    //check if March, April, or May
    imageUrl = 'background/spring.jpg';
  } else if (month >= 6 && month <= 8) {
    //check if June, July, or August
    imageUrl = 'background/summer.jpg';
  } else {
    //check if September, Occtober or November
    imageUrl = 'background/autumn.jpg';
  }

  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// function to get random quote from an array
function getRandomQuote() {
  const quotes = [
    'Tot ce vă puteți imagina este real.',
    'Succesul nu este final, eşecul nu este fatal: curajul de a continua este ceea ce contează.',
    'Într-o lume în care poți fi orice, fii bun.',
    'Succesul = 99% muncă + 1% talent.',
    'Încet și sigur se câștigă cursa.',
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}

// function to update the displayed quote
function updateQuote() {
  const quoteTextElement = document.querySelector('.quoteText');
  quoteTextElement.innerHTML = getRandomQuote();
}

// initial display of a quote
updateQuote();

// event delegation for changeQuoteButton
const changeQuoteButton = document.querySelector('.changeQuoteButton');

changeQuoteButton.addEventListener('click', updateQuote);

updateSeasonBackground();
