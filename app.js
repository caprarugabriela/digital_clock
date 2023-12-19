function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const digitalTime = document.querySelector('.setTime');
  digitalTime.textContent = `${formatTime(hours)}:${formatTime(
    minutes,
  )}:${formatTime(seconds)}`;
}

function updateMonth() {
  const now = new Date();
  const daysOfWeek = [
    'Duminică',
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

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const digitalDate = document.querySelector('.setDate');
  digitalDate.textContent = `${dayOfWeek}, ${formatTime(dayOfMonth)} ${month}`;
}

setInterval(updateTime, 1000);
setInterval(updateMonth, 1000);

updateTime();
updateMonth();

// update background based on the season
function updateSeasonBackground() {
  const now = new Date();
  const month = now.getMonth() + 1;

  const body = document.body;

  let imageUrl;
  if (month >= 12 || (month >= 1 && month <= 2)) {
    imageUrl = 'background/winter3.jpg';
  } else if (month >= 3 && month <= 5) {
    imageUrl = 'background/spring.jpg';
  } else if (month >= 6 && month <= 8) {
    imageUrl = 'background/summer.jpg';
  } else {
    imageUrl = 'background/autumn.jpg';
  }

  body.style.backgroundImage = `url('${imageUrl}')`;
}

updateSeasonBackground();

function getRandomQuote() {
  const quotes = [
    'Perseverența este cheia succesului; indiferent cât de dificilă este călătoria, continuă să mergi cu încredere și vei ajunge la destinația dorită.',
    'Disciplina înseamnă să faci lucrurile pe care le-ai planificat atunci când nu mai ai chef. Este ceea ce te diferențiază între cei obișnuiți și cei excepționali.',
    'Atunci când simți că nu mai poți, adu-ți aminte că fiecare pas pe care îl faci înseamnă un pas mai aproape de reușită. Perseverența înfrânge orice obstacol.',
    'Puterea de a te reinventa vine din dorința de a evolua. Fii dispus să te schimbi, să crești și să devii versiunea ta cea mai bună în fiecare zi.',
    'Reinventează-te constant pentru a fi mereu relevant. Îmbunătățirea continuă și dorința de a deveni mai bun în fiecare zi sunt secretele celor care ating excelența.',
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  const quoteText = document.querySelector('.quoteText');
  if (quoteText) {
    quoteText.textContent = getRandomQuote();
  }
}

updateQuote();

const changeQuoteButton = document.querySelector('.changeQuoteButton');
if (changeQuoteButton) {
  changeQuoteButton.addEventListener('click', updateQuote);
}
