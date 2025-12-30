// Google Tag Manager
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDWTVMM2');
// End Google Tag Manager

/*
//Google Tag Manager - Nouveau script
(function(w,d,s,l,i){
	w[l]=w[l]||[];
	w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
	var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),
		dl=l!='dataLayer'?'&l='+l:'';
		j.async=true;
		j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDWTVMM2');
//End Google Tag Manager

//Ancien script, potentiellement à changer
(function () {
  const GA_ID = 'G-453KG168EG';
  const CONSENT_KEY = 'consent_analytics';

  // Charger la librairie GA (une seule fois)
  if (!document.getElementById('ga4-script')) {
    const script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  gtag('js', new Date());

  window.enableAnalytics = function () {
    try {
      if (localStorage.getItem(CONSENT_KEY) !== 'granted') return;
    } catch (e) {
      return;
    }

    if (window.__gaInitialized) return;
    window.__gaInitialized = true;

    gtag('config', GA_ID, {
      anonymize_ip: true
    });
  };

})();
*/