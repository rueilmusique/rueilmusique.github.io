function liveSearch() {
  let instruDescJS = document.querySelectorAll('.instruDesc');
  let search_query = document.getElementById("searchbox").value.toLowerCase();

  // Filtrage des modèles
  instruDescJS.forEach(div => {
    if (div.innerText.toLowerCase().includes(search_query)) {
      div.classList.remove("is-hidden");
    } else {
      div.classList.add("is-hidden");
    }
  });

  // Gestion des titres de gamme + paragraphe associé
  let gammes = document.querySelectorAll("h2.gammeGuitare");

  gammes.forEach(h2 => {
    let next = h2.nextElementSibling;

    // Le paragraphe immédiatement après le h2
    let paragraph = null;
    if (next && next.tagName.toLowerCase() === "div") {
      paragraph = next;
      next = next.nextElementSibling; // Passe au premier .instruDesc
    }

    let hasVisibleModel = false;

    // Parcourt les modèles jusqu'au prochain h2
    while (next && !next.matches("h2.gammeGuitare")) {
      if (next.classList && next.classList.contains("instruDesc") &&
          !next.classList.contains("is-hidden")) {
        hasVisibleModel = true;
        break;
      }
      next = next.nextElementSibling;
    }

    // Affichage ou masquage
    if (hasVisibleModel) {
      h2.classList.remove("is-hidden");
      if (paragraph) paragraph.classList.remove("is-hidden");
    } else {
      h2.classList.add("is-hidden");
      if (paragraph) paragraph.classList.add("is-hidden");
    }
  });
}