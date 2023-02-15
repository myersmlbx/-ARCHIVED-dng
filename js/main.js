window.addEventListener(`DOMContentLoaded`, () => {

	// Arrays with words
const nouns = [`Healing`, `Secret`, `Medicine`, `Wellness`, `Advice`, `Story`, `Care`, `Balance`, `Help`, `Body`, `Health`, `Soul`, `Riddle`, `Magazine`, `Journal`, `Your`, `Heart`, `Beat`, `Energy`,`Fitness`,`Strength`,`Bloom`,`Euphoria`,`Pink`,`Prime`,`Robustness`,`Shape`,`Stamina`,`State`,`Tone`,`Vigor`,`CleanBill`,`Good`, `Condition`,`Top`, `Form`, `Appearance`,`Aspect`,`Build`,`Constitution`,`Mint`,`Status`, `Anatomy`,`Being`,`Figure`,`Object`,`Person`,`Phenomenon`,`Physique`,`Silhouette`,`Torso`,
	`Comfort`,`Happiness`,`Prosperity`,`Welfare`,`Advantage`,`Benefit`,`Ease`,`Aid`,`Antidote`,`Assistance`,`Corrective`,`Countermeasure`,`Drug`,`Elixir`,`ElixirVitae`,`Fix`,`Medicament`,`Medicant`,`Medication`,`Nostrum`,`Panacea`,`QuickFix`,`Recovery`,`Remedy`,`Reparation`, `Style`, `Lifestyle`, `Gossip`, `Talk`, `Therapeutic`,`Treatment`,`Club`, `News`, `Guide`, `BeHealthy`, `Education`, `Life`, `Live`, `Leaders`, `Dream`, `Diary`, `Beauty`, `Ideal`, `Spirit`, `Healthcare`, `Knowledge`, `Inspiration`, `America`, `US`, `Notebook`, `Pages`, `Tips`, `Mind`, `Herbs`];
const adjectives = [`Beautiful`, `Healthy`, `Mental`, `Strong`, `Easy`,`Active`,`Athletic`,`Fresh`,`Healthful`,`Happy`,`Lively`,`Normal`,`Robust`,`Tough`,`Vigorous`,`AbleBodied`,`AllRight`,`Blooming`,`Firm`,`Fit`,`Flourishing`,`FullOfLife`,`InGoodShape`,`InThePink`,`Potent`,`Restored`,`RosyCheeked`,`SafeAndSound`,`Sound`,`Well`,`Whole`, `Bonny`, `Beautiful`,`Cheerful`,`Fair`,`Fine`,`Goodlooking`,`Handsome`,`Pretty`, `Delicious`, `Nice`, `Delighted`,`Merry`,`Peaceful`,`Pleasant`,`Pleased`,`Satisfied`,`Blessed`,`FlyingHigh`,`Laughing`,`Light`,`LookingGood`,`OnCloudNine`,`Sparkling`,`Sunny`,`WalkingOnAir`,`Cute`,`Clever`,`Dexterous`,`Energetic`,`Rapid`,`Ready`,`Sharp`,`Spirited`,`TwinkleToes`, `Smart`, `American`, `United`, `Clear`, `Clean`];

	// Controls
const btnGen = document.querySelector(`#button-addon1`);
const btnGenMoreRandom = document.querySelector(`#button-addon2`);
const field = document.querySelector(`.field`);
const wrapper = document.querySelector(`.generator__wrapper .generator__history-wrapper`);
const namesObj = {};

	// Functions
	function getRandomNum() {
			let num = Math.floor(Math.random() * 10) + 1;
			return num;
		}

	function generateName (input) {
		getRandomNum();
		getRandomNum() % 2 === 0 ? input.value = nouns[Math.floor(Math.random() * nouns.length)] + adjectives[Math.floor(Math.random() * adjectives.length)] + `.com` 
		: input.value = adjectives[Math.floor(Math.random() * adjectives.length)] + nouns[Math.floor(Math.random() * nouns.length)] + `.com`
	}

	function generateLongerName (input) {
		getRandomNum();
		switch(getRandomNum()) {
			case 1:
			case 2:
			case 3:
			case 4:
				input.value = nouns[Math.floor(Math.random() * nouns.length)] + nouns[Math.floor(Math.random() * nouns.length)] + adjectives[Math.floor(Math.random() * adjectives.length)] + `.com`;
				break;
			case 5:
			case 6:
			case 7:
				input.value = adjectives[Math.floor(Math.random() * adjectives.length)] + nouns[Math.floor(Math.random() * nouns.length)] + nouns[Math.floor(Math.random() * nouns.length)] + `.com`;
				break;
			case 8:
			case 9:
			case 10:
				input.value = nouns[Math.floor(Math.random() * nouns.length)] + adjectives[Math.floor(Math.random() * adjectives.length)] + nouns[Math.floor(Math.random() * nouns.length)] + `.com`;
				break;
		}
	}

	function createHistoryWrapper() {
		const historyTitle = document.createElement(`h2`);
		const historyList = document.createElement(`ol`);
		historyTitle.classList.add(`generator__history-title`);
		historyList.classList.add(`generator__history`);
		historyTitle.textContent = `Recently generated:`
		wrapper.append(historyTitle);
		wrapper.append(historyList);
		historyList.innerHTML = `
			<li>${field.value}</li>
		`;
		namesObj[`name1`] = field.value;
		showWrapper(wrapper);
	}

	function showWrapper (block) {
		block.classList.remove(`hide`);
		block.classList.add(`show`);
	}

	function pushOptions () {
		const historyList = document.body.children[0].children[0].children[3].children[1];
		if(historyList.children.length >= 10) {
			historyList.innerHTML = ``;
			historyList.innerHTML += `
				<li>${field.value}</li>
		`;
		} else {
			historyList.innerHTML += `
				<li>${field.value}</li>
		`;
		getNamesObject(historyList.children)
		}
	}

	function getNamesObject (arr) {
		for(let i = 1; i < arr.length; i++) {
				namesObj[`name` + (i + 1)] = `${arr[i].textContent}`;
			};
	}

	function saveProgress () {
		localStorage.setItem(`names`, JSON.stringify(namesObj));
	}

	function loadProgress () {
		const historyWrapper = document.body.children[0].children[0].children[3].children[1];
		const savedNamesArr = Object.values(JSON.parse(localStorage.getItem(`names`)));
		if(!historyWrapper && savedNamesArr) {
			const historyTitle = document.createElement(`h2`);
			const historyList = document.createElement(`ol`);
			historyTitle.classList.add(`generator__history-title`);
			historyList.classList.add(`generator__history`);
			historyTitle.textContent = `Recently generated:`
			wrapper.append(historyTitle);
			wrapper.append(historyList);
			showWrapper(wrapper);
			for(let i = 0; i < savedNamesArr.length; i++) {
				historyList.innerHTML += `
					<li>${savedNamesArr[i]}</li>
				`;
			}
		}
	}

	btnGen.addEventListener(`click`, () => {
		const historyList = document.body.children[0].children[0].children[3].children[1];
		generateName(field);
		if(!historyList) {
			createHistoryWrapper();
		} else {
			pushOptions();
		}
		saveProgress()
	});

	btnGenMoreRandom.addEventListener(`click`, () => {
		const historyList = document.body.children[0].children[0].children[3].children[1];
		generateLongerName(field);
		if(!historyList) {
			createHistoryWrapper();
		} else {
			pushOptions();
		}
		saveProgress()
	});

	loadProgress();
});