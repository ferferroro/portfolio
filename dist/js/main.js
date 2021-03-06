// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial  State of Menu
let showMenu =  false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

	if(!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('close');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach(item => item.classList.add('show'))
	}
	else {
		menuBtn.classList.remove('close');
		menu.classList.remove('close');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'))
	}

	showMenu = !showMenu;
}