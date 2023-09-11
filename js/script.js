const quote = document.querySelector('.advice__quote');
const dice = document.querySelector('.btn-dice');
const advice = document.querySelector('.advice__heading');

dice.addEventListener('click', async function () {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  const slip = data.slip;
  console.log(data);
  console.log(slip);
  advice.textContent = `advice #${slip.id}`;
  quote.textContent = ` "${slip.advice}"`;
});
