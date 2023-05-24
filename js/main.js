'use strick'

window.addEventListener('scroll', e => {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});



//// -=====   Header manipulation ====== ////
const body = document.body
const header = document.querySelector('.header');
const sectionWork = document.getElementById('section__works');
const sectionAbout = document.querySelector('.section__about');
const sectionPortfolio = document.querySelector('.section__portfolio');
const headerLinks = document.querySelectorAll('.header__li');
const techBlock = document.querySelector('.tech__block');
const usedTech = document.querySelector('.used__tehnologis');
const techH1 = document.querySelector('.tech__skill-h1');
const burgerButton = document.querySelector('.header__menu-burger')
const hiddenList = document.querySelector('.header__list-hidden')
let prevScrollPos = window.pageYOffset;


window.addEventListener('scroll', () => {
	let currentScrollPos = window.pageYOffset;
	if (currentScrollPos > 0) {
		prevScrollPos > currentScrollPos ?
			header.classList.remove("opacity") : header.classList.add("opacity");
		prevScrollPos = currentScrollPos;
	}

	// if (currentScrollPos <= 0) {
	// 	header.classList.remove('opacity')
	// }
	const sectionWorkCoords = sectionWork.getBoundingClientRect();
	if (sectionWorkCoords.top < window.innerHeight && sectionWorkCoords.bottom >= 0) {
		techBlock.classList.add('animation');
		usedTech.classList.add('animation');
		techH1.classList.add('animation');
	}
});

burgerButton.addEventListener('click', () => {
	hiddenList.classList.toggle('hidden')
	hiddenList.classList.toggle('transform')
	body.classList.toggle('overflow')
})

headerLinks.forEach(item => item.addEventListener('click', () => {
	body.classList.remove('overflow')
	hiddenList.classList.add('hidden')
	hiddenList.classList.remove('transform')
}))

header.addEventListener('mouseover', () => {
	header.classList.add('mouseover')
});
header.addEventListener('mouseout', () => {
	header.classList.remove('mouseover')
});
headerLinks.forEach(link => {
	link.addEventListener('mouseover', () => {
		link.classList.add('scale')
	})
	link.addEventListener('mouseout', () => {
		link.classList.remove('scale')
	})
})



function smooth(e) {
	e.preventDefault();
	if (e.target.classList.contains('header__link')) {
		const href = e.target.getAttribute('href');
		document.querySelector(href).scrollIntoView({
			behavior: 'smooth'
		});
	}
}
const behaviorHeader = document.querySelector('.header__list').addEventListener('click', smooth)


///==== Vanta color ===///


let randomNumber = function (max) {
	console.log(Math.floor(Math.random() * max));
	return Math.floor(Math.random() * max)

}



const colors = [
	'ff0000', 'ff0f', 'ff', 'f0ff', 'ff8700', 'fffe00', 'ffffff', 'fa00dc', 'f2aa', 'fff000'
];

VANTA.NET({
	el: "#section__works",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200,
	minWidth: 200,
	scale: 1,
	scaleMobile: 1,
	color: 0xff00ff,
	backgroundColor: 0x0,
	points: 8,
	maxDistance: 14,
	spacing: 18.00
});

const btnSwitch = document.getElementById('switch')


btnSwitch.addEventListener('click', () => {
	VANTA.NET({
		el: "#section__works",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200,
		minWidth: 200,
		scale: 1,
		scaleMobile: 1,
		color: Number(`0x${colors[randomNumber(colors.length)]}`),
		backgroundColor: 0x0,
		points: 8,
		maxDistance: 14,
		spacing: 18.00
	})
});


//=== SLIDER ===///

const slider = new Swiper('.slider__main', {
	centeredSlides: true,
	freeMode: true,
	slidesPerView: 1,
	direction: 'vertical',
	// initialSlide: ,
	// loop: true,
	spaceBetween: 30,
	mousewheel: {
		sensitivity: 5
	},
	parallax: true,
	breakpoints: {
		980: {
			slidesPerView: 3,
			direction: 'horizontal',

		},
		640: {
			slidesPerView: 2,
			direction: 'horizontal',
			spaceBetween: 0,
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});

const sliderBg = new Swiper('.slider__bg', {
	freeMode: true,
	centeredSlides: true,
	slidesPerView: 3,
	parallax: true,
});

const sliderAbout = new Swiper('.swiper-about', {
	// freeMode: true,
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 200,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	effect: 'flip',
	flipEffect: {
		slidesShadows: true,
		limitRotation: true
	}
})


const slideContainers = document.querySelectorAll('.slider-front-item')


slideContainers.forEach(item => {
	item.addEventListener('mouseover', function () {
		item.firstElementChild.classList.add('hidden-slide')
		item.lastElementChild.classList.remove('hidden-slide')
	})
	item.addEventListener('mouseout', function () {
		item.firstElementChild.classList.remove('hidden-slide')
		item.lastElementChild.classList.add('hidden-slide')
	})
})


slider.controller.control = sliderBg;
const disc = document.querySelector('.discription');

window.addEventListener('resize', function () {
	if (window.innerWidth >= 600 && window.innerWidth <= 768) {
		slider.on('slideChange', e => {
			slider.activeIndex >= 0 ? disc.classList.remove('hidden') : disc.classList.add('hidden')
		})
		console.log('Promejnost');
	} else {
		slider.on('slideChange', e => {
			slider.activeIndex > 0 ? disc.classList.add('hidden') : disc.classList.remove('hidden')
		})
	}
})











document.querySelectorAll('link').forEach(link => link.preventDefault)

const copiedLink = document.querySelector('.copied')

document.body.onclick = (e) => {
	// e.preventDefault()
	const elem = e.target;
	if (elem.classList.contains('copy__mail')) {
		e.preventDefault();
		navigator.clipboard.writeText('fiz.ryk.5656@gmail.com');
		copiedLink.classList.remove('hidden')
		let time = function () {
			copiedLink.classList.add('hidden')
		}
		setTimeout(time, 1500)
	}
}