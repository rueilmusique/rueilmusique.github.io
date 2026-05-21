const list = document.querySelector(".listeAlaune");
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
	if(direction === "previous") {
		list.scrollBy({ left: -itemWidth, behavior: "smooth" });
	} else {
		list.scrollBy({ left: itemWidth, behavior: "smooth" });
	}
}