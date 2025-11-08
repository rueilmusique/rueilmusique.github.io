const hovers = document.querySelectorAll("[data-carousel-hover]")

hovers.forEach(onmouseover => {
	onmouseover.addEventListener("mouseover", () => {
		const offset = onmouseover.dataset.carouselHover === "next" ? 1 : -1
		const slides = onmouseover
			.closest("[data-carousel]")
			.querySelector("[data-slides]")
			
	const activeSlide = slides.querySelector("[data-active]")
	let newIndex = [...slides.children].indexOf(activeSlide) + offset
	if (newIndex < 0) newIndex = slides.children.length - 1
	if (newIndex >= slides.children.length) newIndex = 0
	
	slides.children[newIndex].dataset.active = true
	delete activeSlide.dataset.active
	})
})