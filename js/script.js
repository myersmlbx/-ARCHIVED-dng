const nouns = [`Healing`, `Secret`, `Medicine`, `Wellness`, `Advice`, `Story`, `Care`, `Balance`, `Help`, `Body`, `Health`, `Soul`, `Riddle`, `Magazine`, `Journal`, `Your`, `Heart`, `Beat`, `Energy`,`Fitness`,`Strength`,`Bloom`,`Euphoria`,`Pink`,`Prime`,`Robustness`,`Shape`,`Stamina`,`State`,`Tone`,`Vigor`,`CleanBill`,`Good`, `Condition`,`Top`, `Form`, `Appearance`,`Aspect`,`Build`,`Constitution`,`Mint`,`Status`, `Anatomy`,`Being`,`Figure`,`Object`,`Person`,`Phenomenon`,`Physique`,`Silhouette`,`Torso`,
	`Comfort`,`Happiness`,`Prosperity`,`Welfare`,`Advantage`,`Benefit`,`Ease`,`Aid`,`Antidote`,`Assistance`,`Corrective`,`Countermeasure`,`Drug`,`Elixir`,`ElixirVitae`,`Fix`,`Medicament`,`Medicant`,`Medication`,`Nostrum`,`Panacea`,`QuickFix`,`Recovery`,`Remedy`,`Reparation`, `Style`, `Lifestyle`, `Gossip`, `Talk`, `Therapeutic`,`Treatment`,`Club`, `News`, `Guide`, `BeHealthy`, `Education`, `Life`, `Live`, `Leaders`, `Dream`, `Diary`, `Beauty`, `Ideal`, `Spirit`, `Healthcare`, `Knowledge`, `Inspiration`, `America`, `US`, `Place`, `Notebook`, `Pages`, `Tips`, `Mind`, `Herbs`, `Blog`];
const verbs = ['Run', 'Heal', 'Make', 'Do', 'Use', 'Look', 'Watch', 'Care', 'Be', 'Restore'];
const adjectives = [`Beautiful`, `Healthy`, `Mental`, `Strong`, `Easy`,`Active`,`Athletic`,`Fresh`,`Healthful`,`Happy`,`Lively`,`Normal`,`Robust`,`Tough`,`Vigorous`,`AbleBodied`,`AllRight`,`Blooming`,`Firm`,`Fit`,`Flourishing`,`FullOfLife`,`InGoodShape`,`InThePink`,`Potent`,`Restored`,`RosyCheeked`,`SafeAndSound`,`Sound`,`Well`,`Whole`, `Bonny`, `Beautiful`,`Cheerful`,`Fair`,`Fine`,`Goodlooking`,`Handsome`,`Pretty`, `Delicious`, `Nice`, `Delighted`,`Merry`,`Peaceful`,`Pleasant`,`Pleased`,`Satisfied`,`Blessed`,`FlyingHigh`,`Laughing`,`Light`,`LookingGood`,`OnCloudNine`,`Sparkling`,`Sunny`,`WalkingOnAir`,`Cute`,`Clever`,`Dexterous`,`Energetic`,`Rapid`,`Ready`,`Sharp`,`Spirited`,`TwinkleToes`, `Smart`, `American`, `United`, `Clear`, `Clean`];
const articles = ['The', 'A', 'An', 'For', 'To'];
const pronouns = ['Our', 'Your', 'His', 'Her'];

let savedNames = JSON.parse(localStorage.getItem('businessNames')) || [];
let lastTenNames = savedNames.slice(-10);

function generateBusinessName() {
  let name = articles[Math.floor(Math.random() * articles.length)];
  if (Math.random() < 0.5) {
    name += adjectives[Math.floor(Math.random() * adjectives.length)];
  }
  name += nouns[Math.floor(Math.random() * nouns.length)];
  if (Math.random() < 0.5) {
    name += verbs[Math.floor(Math.random() * verbs.length)];
  }
  if (Math.random() < 0.5) {
    name += articles[Math.floor(Math.random() * articles.length)];
  }
  if (Math.random() < 0.5) {
    name += adjectives[Math.floor(Math.random() * adjectives.length)];
  }
  name += nouns[Math.floor(Math.random() * nouns.length)];
  if (Math.random() < 0.5) {
    name += pronouns[Math.floor(Math.random() * pronouns.length)];
  }
  return name + '.com';
}

function saveBusinessName() {
  const name = generateBusinessName();
  savedNames.push(name);
  localStorage.setItem('businessNames', JSON.stringify(savedNames));
  document.querySelector('.form-control.field').value = name;
  lastTenNames = savedNames.slice(-10);
  displayLastTenNames();
}

function displayLastTenNames() {
  const container = document.querySelector('.generator__history-wrapper');
  const historyTitle = document.createElement(`h2`);
  historyTitle.classList.add(`generator__history-title`);
  historyTitle.textContent = `Recently generated:`;
  container.innerHTML = '';
  container.appendChild(historyTitle);
  lastTenNames.forEach((name) => {
    const element = document.createElement('div');
    element.textContent = name;
    container.appendChild(element);
  });
}

displayLastTenNames();

document.querySelector('#button-addon1').addEventListener('click', () => {
  saveBusinessName();
  document.querySelector('.generator__history-wrapper').classList.remove(`hide`);
  document.querySelector('.generator__history-wrapper').classList.add(`show`);
});

document.querySelector('#button-addon2').addEventListener('click', () => {
	document.querySelector('.generator__history-wrapper').classList.remove(`show`);
  document.querySelector('.generator__history-wrapper').classList.add(`hide`);
  setTimeout(() => {
  	savedNames = [];
  localStorage.removeItem('businessNames');
  document.querySelector('.form-control.field').value = ``;
}, 400)
});
