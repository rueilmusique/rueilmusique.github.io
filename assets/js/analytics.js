window.dataLayer = window.dataLayer || [];

function gtag(){
	dataLayer.push(arguments);
}

/*
|--------------------------------------------------------------------------
| Consentement par défaut = refusé
|--------------------------------------------------------------------------
*/

gtag('consent', 'default', {
	'ad_storage': 'denied',
	'analytics_storage': 'denied',
	'ad_user_data': 'denied',
	'ad_personalization': 'denied'
});

/*
|--------------------------------------------------------------------------
| Google Tag Manager
|--------------------------------------------------------------------------
*/

(function(w,d,s,l,i){
	w[l]=w[l]||[];

	w[l].push({
		'gtm.start': new Date().getTime(),
		event:'gtm.js'
	});

	var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),
		dl=l!='dataLayer' ? '&l='+l : '';

	j.async = true;
	j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

	f.parentNode.insertBefore(j,f);

})(window,document,'script','dataLayer','GTM-PDWTVMM2');

/*
|--------------------------------------------------------------------------
| Activation analytics après consentement
|--------------------------------------------------------------------------
*/

window.enableAnalytics = function(){

	gtag('consent', 'update', {
		'analytics_storage': 'granted'
	});

	dataLayer.push({
		event: 'analytics_consent_granted'
	});
};