let dishes = document.getElementsByClassName('dish-card');
let rightBtn = document.getElementsByClassName('fa-angle-right')[0];
let leftBtn = document.getElementsByClassName('fa-angle-left')[0];
let n = 0;
rightBtn.addEventListener('click', () => {
	console.log('right click');
	rightBtn.classList.remove('bg-color-gray');
	leftBtn.classList.add('bg-color-gray');
	leftBtn.classList.remove('bg-color-primary', 'text-color-light');
	rightBtn.classList.add('bg-color-primary', 'text-color-light');
	// dishes[n].style.display = 'none';
	// dishes[n + 3].style.display = 'flex';
	// dishes[n + 3].style.opacity = '1';

});
leftBtn.addEventListener('click', () => {
	rightBtn.classList.remove('bg-color-primary', 'text-color-light');
	rightBtn.classList.add('bg-color-gray');
	leftBtn.classList.remove('bg-color-gray');
	leftBtn.classList.add('bg-color-primary', 'text-color-light');

	console.log('left click');
});
