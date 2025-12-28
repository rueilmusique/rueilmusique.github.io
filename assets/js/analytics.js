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
