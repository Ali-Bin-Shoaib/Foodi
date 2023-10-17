let slider = document.getElementsByClassName('slide-container ')[0];
let cards = document.getElementsByClassName('dish-card');
let rightBtn = document.getElementsByClassName('fa-angle-right')[0];
let leftBtn = document.getElementsByClassName('fa-angle-left')[0];

let gap = 48;

let n = 1;
rightBtn.addEventListener('click', () => {
	if (n >= cards.length - 2) {
	} else {
		rightBtn.classList.remove('bg-color-gray');
		leftBtn.classList.add('bg-color-gray');
		leftBtn.classList.remove('bg-color-primary', 'text-color-light');
		rightBtn.classList.add('bg-color-primary', 'text-color-light');

		transformSlider(-n * getCardWidth());
		n++;
	}
});
leftBtn.addEventListener('click', () => {
	let cardWidth = cards[0].clientWidth + gap;

	if (n === 1) {
	} else {
		rightBtn.classList.remove('bg-color-primary', 'text-color-light');
		rightBtn.classList.add('bg-color-gray');
		leftBtn.classList.remove('bg-color-gray');
		leftBtn.classList.add('bg-color-primary', 'text-color-light');

		transformSlider(-(n - 1) * getCardWidth() + getCardWidth());
		n--;
	}
});
function transformSlider(direction) {
	slider.style.transform = `translateX(${direction}px)`;
}
function getCardWidth() {
	return cards[0].clientWidth + gap;
}
