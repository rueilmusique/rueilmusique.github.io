const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");
const overlayImg = document.getElementById("overlay-img");
const close = document.getElementById("close");

document.querySelectorAll(".produit").forEach(produit => {

	produit.addEventListener("click", () => {

		const detail = produit.querySelector(".produit-detail");
		const picture = produit.querySelector("picture");

		overlayText.innerHTML = detail.innerHTML;
		overlayImg.replaceChildren(picture.cloneNode(true));
		
		const boutonPartager = overlayText.querySelector(".boutonPartager");
		if (boutonPartager) {
			boutonPartager.addEventListener("click", async (e) => {
				e.stopPropagation(); // évite tout effet de bord
				const url = new URL(location.href);
				url.hash = produit.id;
				navigator.clipboard.writeText(url.href);
				// const url = `${location.origin}${location.pathname}#${produit.id}`;
				// await navigator.clipboard.writeText(url);
				boutonPartager.textContent = "✅ Lien copié !";
				setTimeout(() => {
					boutonPartager.textContent = "🔗 Copier le lien";
				}, 1500);
			});
		}

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