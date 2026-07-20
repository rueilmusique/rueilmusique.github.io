// Constantes : overlay = background ; overlayText = contenu texte ; carouselOverlay & track = images supp du produit ; boutonPrevious & boutonNext = boutons chevrons ; close = fermer l'overlay
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");

const carouselOverlay = document.querySelector(".carouselOverlay");
const track = carouselOverlay.querySelector(".track");

const boutonPrevious = overlay.querySelector(".boutonPrevious");
const boutonNext = overlay.querySelector(".boutonNext");

const close = document.getElementById("close");


// Fonctions pour ouvrir l'overlay avec son contenu
function ouvrirOverlay(produit) {
	// Update dès l'ouverture pour éviter une animation de disparition dès l'ouverture
	updateButtons();
	
	// Constantes autour du produit : détail, picture, et titre du produit
    const detail = produit.querySelector(".produit-detail");
    const picture = produit.querySelector("picture");
	const titre = produit.querySelector(".titreProduit").textContent;

	// Le contenu du overlayText est rempli en fonction du détail du produit
    overlayText.innerHTML = detail.innerHTML;
	
	// Constante images : on récupère le(s) nom(s) des images via le data-images du produit, séparées d'une virgule
	const images = [picture.cloneNode(true),...(produit.dataset.images ? produit.dataset.images.split(",") : [])];
	requestAnimationFrame(() => {
		carouselOverlay.scrollLeft = 0;
		updateButtons();
	});
	
	track.replaceChildren();
	track.appendChild(picture.cloneNode(true));
	
	(produit.dataset.images || "").split(",").filter(Boolean).forEach(image => {
		const vue = document.createElement("picture");
		vue.innerHTML = `
			<source srcset="../images/${produit.dataset.folder}/${produit.id}_${image.trim()}.avif" type="image/avif">
			<img src="../images/${produit.dataset.folder}/${produit.id}_${image.trim()}.jpg" alt="">
		`;
		track.appendChild(vue);
	});
	
	overlay.dataset.produitId = produit.id;
	
	// On ajoute à l'URL l'ID du produit
	history.replaceState(null, "", `#${produit.id}`);
	
	
	// Bouton partager : si le navigateur supporte l'API Share, le bouton ouvre la boîte de dialogue, sinon il copie le lien dans le clipboard
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
				boutonPartager.textContent = "✅ Lien copié !";
				setTimeout(() => {
					boutonPartager.textContent = "🔗 Partager/copier le lien";
				}, 1500);
			}
		});
	}
	
	// On enlève la classe hidden pour voir l'overlay
	overlay.classList.remove("hidden");
}

// Fonction pour fermer l'overlay
function fermerOverlay() {
	overlay.classList.add("hidden");
	history.replaceState(null, "", location.pathname);
}

// Fonction pour mettre à jour les chevrons du carrousel en fonction du nombre d'images
function updateButtons() {
    boutonPrevious.disabled = carouselOverlay.scrollLeft <= 1;
    boutonNext.disabled = carouselOverlay.scrollLeft >= carouselOverlay.scrollWidth - carouselOverlay.clientWidth - 1;
}


// EventListeners pour ouvrir et fermer l'overlay & l'overlay content
// Clic sur un article = ouvrir
document.querySelectorAll(".produit").forEach(produit => {
	produit.addEventListener("click", () => {
		ouvrirOverlay(produit);
	});
});

// Clic sur la croix = Fermer
close.addEventListener("click", fermerOverlay);

// Clic sur l'overlay = Fermer
overlay.addEventListener("click", (e) => {
	if (e.target === overlay) {
		fermerOverlay();
	}
});

// Touche Échap = Fermer
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
		fermerOverlay();
    }
});

// On met à jour les boutons dès qu'il y a un scroll
carouselOverlay.addEventListener("scroll", updateButtons);


// Ouvrir directement l'overlay si l'URL contient l'ID
if (location.hash) {
	const produit = document.getElementById(location.hash.slice(1));
	if (produit) {
		ouvrirOverlay(produit);
	}
}


// Boutons previous/next pour carrousel
boutonPrevious.addEventListener("click", () => {
	carouselOverlay.scrollBy({
		left: -carouselOverlay.clientWidth,
		behavior: "smooth"
	});
});

boutonNext.addEventListener("click", () => {
	carouselOverlay.scrollBy({
		left: carouselOverlay.clientWidth,
		behavior: "smooth"
	});
});