const produitsContainer = document.getElementById("produits");
const sortSelect = document.getElementById("sort");
const gammeSelect = document.getElementById("filter-gamme");
const searchInput = document.getElementById("searchbox");

// On sauvegarde UNE FOIS l'ordre d'origine
const produits = Array.from(
	document.querySelectorAll(".produit")
);

produits.forEach((produit, index) => {
	produit.dataset.defaultOrder = index;
});

// Events : surveille tout changement de tri, de sélection de gamme, et de filtre recherche
sortSelect.addEventListener("change", updateProduits);
gammeSelect.addEventListener("change", updateProduits);
searchInput.addEventListener("input", updateProduits);

// Fonction principale
function updateProduits() {

	const search = searchInput.value.toLowerCase().trim();
	const gamme = gammeSelect.value;
	const sort = sortSelect.value;


	// FILTRES
	produits.forEach(produit => {
		const titre = produit.querySelector(".titreProduit").textContent.toLowerCase();
		const type = produit.querySelector(".titreProduit").nextElementSibling.textContent.toLowerCase();
		
		const searchableText = `${titre} ${type}`;
		
		const matchSearch =	searchableText.includes(search);
		const matchGamme = gamme === "all" || produit.dataset.gamme === gamme;

		produit.style.display = (matchSearch && matchGamme) ? "" : "none";
	});

	// TRI
	produits.sort((a, b) => {

		const prixA = Number(a.dataset.prix);
		const prixB = Number(b.dataset.prix);
		
		const nomA = a.querySelector(".titreProduit").textContent.trim();
		const nomB = b.querySelector(".titreProduit").textContent.trim();
		
		// Tri croissant prix
		if (sort === "asc") {
			return prixA - prixB;
		}
		
		// Tri décroissant prix
		if (sort === "desc") {
			return prixB - prixA;
		}
		
		// Tri A-Z
		if (sort === "name-asc"){
			return nomA.localeCompare(nomB, "fr", {
				sensitivity: "base"
			});
		}
		
		//Tri Z-A
		if (sort === "name-desc"){
			return nomB.localeCompare(nomA, "fr", {
				sensitivity: "base"
			});
		}

		// Tri par défaut
		return (
			Number(a.dataset.defaultOrder) - Number(b.dataset.defaultOrder)
		);
	});

	// Réorganisation DOM
	produits.forEach(produit => {
		produitsContainer.appendChild(produit);
	});
}

updateProduits();