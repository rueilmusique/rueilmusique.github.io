const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");
const overlayImg = document.getElementById("overlay-img");
const close = document.getElementById("close");

document.querySelectorAll(".produit").forEach(produit => {

	produit.addEventListener("click", () => {

		const detail = produit.querySelector(".produit-detail");
		const image = produit.querySelector("img");

		overlayText.innerHTML = detail.innerHTML;
		overlayImg.src = image.src;

		overlay.classList.remove("hidden");
	});
});

close.addEventListener("click", () => {
	overlay.classList.add("hidden");
});

overlay.addEventListener("click", (e) => {
	if (e.target === overlay) {
		overlay.classList.add("hidden");
	}
});