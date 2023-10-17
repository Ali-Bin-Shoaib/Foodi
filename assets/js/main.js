// let slider = document.getElementsByClassName('slide-container ')[0];
// let cards = document.getElementsByClassName('dish-card');
// let rightBtn = document.getElementsByClassName('fa-angle-right')[0];
// let leftBtn = document.getElementsByClassName('fa-angle-left')[0];
// let gap = 48;
// let cardWidth = cards[0].clientWidth + gap;
// let n = 1;
// rightBtn.addEventListener('mouseover', () => {
// 	if (n >= cards.length - 2) {
// 	} else {
// 		rightBtn.classList.remove('bg-color-gray');
// 		leftBtn.classList.add('bg-color-gray');
// 		leftBtn.classList.remove('bg-color-primary', 'text-color-light');
// 		rightBtn.classList.add('bg-color-primary', 'text-color-light');

// 		transformSlider(-n * cardWidth);
// 		n++;
// 	}
// });
// leftBtn.addEventListener('mouseover', () => {
// 	if (n === 1) {
// 	} else {
// 		rightBtn.classList.remove('bg-color-primary', 'text-color-light');
// 		rightBtn.classList.add('bg-color-gray');
// 		leftBtn.classList.remove('bg-color-gray');
// 		leftBtn.classList.add('bg-color-primary', 'text-color-light');

// 		transformSlider(-(n - 1) * cardWidth + cardWidth);
// 		n--;
// 	}
// });
// function transformSlider(direction) {
// 	slider.style.transform = `translateX(${direction}px)`;
// }
