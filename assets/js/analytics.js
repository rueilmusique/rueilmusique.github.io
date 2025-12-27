/* ============================================================
   Google Analytics 4 – RGPD compliant
   Déclenchement conditionnel via localStorage
   Mutualisable avec consentement YouTube
   ============================================================ */

(function () {
  const GA_ID = 'G-XXXXXXXXXX'; // <-- REMPLACER PAR TON ID
  const CONSENT_KEY = 'consent_analytics';

  // Sécurité : éviter toute erreur si GA est déjà chargé
  if (window.__gaScriptLoaded) return;
  window.__gaScriptLoaded = true;

  // 1. Charger la librairie GA4 (sans envoyer de données)
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);

  // 2. Initialiser gtag (ne déclenche rien seul)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  gtag('js', new Date());

  // 3. Fonction d’activation réelle (appelée après consentement)
  window.enableAnalytics = function () {
    try {
      if (localStorage.getItem(CONSENT_KEY) !== 'granted') {
        return;
      }
    } catch (e) {
      return;
    }

    if (window.__gaInitialized) return;
    window.__gaInitialized = true;

    gtag('config', GA_ID, {
      anonymize_ip: true
    });
  };

  // 4. Auto-activation si consentement déjà donné (navigation inter-pages)
  document.addEventListener('DOMContentLoaded', function () {
    try {
      if (localStorage.getItem(CONSENT_KEY) === 'granted') {
        window.enableAnalytics();
      }
    } catch (e) {}
  });

})();




//Changement de GA4 (ne déclenche rien tant qu'on n'appelle pas enableAnalytics)
/*(function(){
	var script = document.createElement('script');
	script.async = true;
	script.src = 'https://www.googletagmanager.com/gtag/js?id=G-453KG168EG';
	document.head.appendChild(script);
	
	window.dataLayer = window.dataLayer || [];
	window.gtag = function(){
		dataLayer.push(arguments);
	};
	gtag('js', new Date());
	
	//NEW
	window.enableAnalytics = function(){
		try{
			if(localStorage.getItem('consent_analytics' !== 'granted'){
				return;
			}
		}
		catch(e){}
		
		if(window.__gaEnabled) return;
		window.__gaEnabled = true;
		
		gtag('config', 'G-453KG168EG', {
			anonymize_ip: true
		})
	}
})();*/