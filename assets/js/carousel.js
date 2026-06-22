const list = document.querySelector(".listeAlaune");
const item = document.querySelector(".item");

function getScrollWidth() {
	const itemWidth = item.offsetWidth;

	if (window.matchMedia("(max-width: 900px)" || "(max-height: 500px)").matches) {
		return itemWidth; // scroll lent sur mobile (doit correspondre au max-width/max-height du @media screen
	}

	return itemWidth * 2; // scroll rapide sur desktop/tablette
}

function handleClick(direction) {
	const scrollWidth = getScrollWidth();

	list.scrollBy({
		left: direction === "previous" ? -scrollWidth : scrollWidth,
		behavior: "smooth"
	});
}