let dishes = document.getElementsByClassName('dish-card');
let slider = document.getElementsByClassName('slide-container ')[0];
let cards = document.getElementsByClassName('dish-card');
let rightBtn = document.getElementsByClassName('fa-angle-right')[0];
let leftBtn = document.getElementsByClassName('fa-angle-left')[0];
let gap = 32;
let cardWidth = cards[0].clientWidth + gap;
let n = 1;
rightBtn.addEventListener('click', () => {
	rightBtn.classList.remove('bg-color-gray');
	leftBtn.classList.add('bg-color-gray');
	leftBtn.classList.remove('bg-color-primary', 'text-color-light');
	rightBtn.classList.add('bg-color-primary', 'text-color-light');
	if (n >= cards.length - 2) {
		// n = 0;
	} else {
		transformSlider(-n * cardWidth);
		n++;
		console.log('🚀 ~ file: main.js:19 ~ rightBtn.addEventListener ~ n:', n);
	}
});
leftBtn.addEventListener('click', () => {
	rightBtn.classList.remove('bg-color-primary', 'text-color-light');
	rightBtn.classList.add('bg-color-gray');
	leftBtn.classList.remove('bg-color-gray');
	leftBtn.classList.add('bg-color-primary', 'text-color-light');
	if (n === 1) {
	} else {
		transformSlider(-(n - 1) * cardWidth + cardWidth);
		console.log('🚀 ~ file: main.js:31 ~ leftBtn.addEventListener ~ n:', n);
		n--;
	}
});
function transformSlider(direction) {
	slider.style.transform = `translateX(${direction}px)`;
}
