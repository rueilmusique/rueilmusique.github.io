const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");
const overlayImg = document.getElementById("overlay-img");
const close = document.getElementById("close");

function ouvrirOverlay(produit) {

    const detail = produit.querySelector(".produit-detail");
    const picture = produit.querySelector("picture");
	const titre = produit.querySelector(".titreProduit").textContent;

    overlayText.innerHTML = detail.innerHTML;
    overlayImg.replaceChildren(picture.cloneNode(true));
	
	overlay.dataset.produitId = produit.id;
	
	history.replaceState(null, "", `#${produit.id}`);
	
	const boutonPartager = overlayText.querySelector(".boutonPartager");
	
    if (boutonPartager) {
		boutonPartager.addEventListener("click", async () => {
			if (navigator.share) {
				navigator.share({
					title: titre,
					text: `🎶 ${titre} chez Rueil Musique !`,
					url: location.href
				});
			}
			else {
				await navigator.clipboard.writeText(location.href);
			}
			boutonPartager.textContent = "✅ Lien copié !";
			setTimeout(() => {
				boutonPartager.textContent = "🔗 Copier le lien";
			}, 1500);
		});
	}
	overlay.classList.remove("hidden");
}

function fermerOverlay() {
	overlay.classList.add("hidden");
	history.replaceState(null, "", location.pathname);
}

document.querySelectorAll(".produit").forEach(produit => {
	produit.addEventListener("click", () => {
		ouvrirOverlay(produit);
	});
});

close.addEventListener("click", fermerOverlay);
overlay.addEventListener("click", (e) => {
	if (e.target === overlay) {
		fermerOverlay();
	}
});

if (location.hash) {
	const produit = document.querySelector(location.hash);
	if (produit) {
		ouvrirOverlay(produit);
	}
}