document.addEventListener('DOMContentLoaded', () => {

	const STORAGE_KEY = 'google-consent';
	
	/*
	|--------------------------------------------------------------------------
	| Éléments DOM
	|--------------------------------------------------------------------------
	*/

	const banner = document.getElementById('yt-consent-banner');

	const btnAccept = document.getElementById('yt-consent-accept');
	const btnDecline = document.getElementById('yt-consent-decline');

	const ytIframe = document.getElementById('yt-iframe');
	const ytButton = document.querySelector('.yt-button');

	const googleMap = document.getElementById('google-map');

	const resetConsent = document.getElementById('reset-consent');
	
	if(resetConsent){

	resetConsent.addEventListener('click', () => {

		localStorage.removeItem(STORAGE_KEY);

		location.reload();

	});
}

	/*
	|--------------------------------------------------------------------------
	| Afficher bannière consentement
	|--------------------------------------------------------------------------
	*/

	function showConsentBanner(){

		if(!banner) return;

		banner.style.display = 'flex';

		banner.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}



	/*
	|--------------------------------------------------------------------------
	| Charger la vidéo YouTube uniquement au clic
	|--------------------------------------------------------------------------
	*/

	function loadYouTubeVideo(){

		if(!ytIframe || !ytIframe.dataset.src) return;

		ytIframe.src = ytIframe.dataset.src;

		ytIframe.style.display = 'flex';

		if(ytButton){
			ytButton.style.display = 'none';
		}
	}



	/*
	|--------------------------------------------------------------------------
	| Activer services Google
	|--------------------------------------------------------------------------
	*/

	function enableGoogleServices(){



		/*
		|--------------------------------------------------------------------------
		| Google Maps
		|--------------------------------------------------------------------------
		*/

		if(googleMap && googleMap.dataset.src){

			googleMap.src = googleMap.dataset.src;

			googleMap.style.display = 'block';

			const placeholder = document.getElementById('map-placeholder');

			if(placeholder){
				placeholder.style.display = 'none';
			}
		}

		/*
		|--------------------------------------------------------------------------
		| Google Analytics
		|--------------------------------------------------------------------------
		*/

		if(typeof window.enableAnalytics === 'function'){
			window.enableAnalytics();
		}
	}

	/*
	|--------------------------------------------------------------------------
	| Consentement déjà donné ?
	|--------------------------------------------------------------------------
	*/

	const consent = localStorage.getItem(STORAGE_KEY);

	if(consent === 'granted'){

		enableGoogleServices();

		if(banner){
			banner.style.display = 'none';
		}

	}else{

		if(banner){
			banner.style.display = 'flex';
		}
	}

	/*
	|--------------------------------------------------------------------------
	| Bouton Autoriser
	|--------------------------------------------------------------------------
	*/

	if(btnAccept){

		btnAccept.addEventListener('click', () => {

			localStorage.setItem(STORAGE_KEY, 'granted');

			enableGoogleServices();

			if(banner){
				banner.style.display = 'none';
			}
		});
	}

	/*
	|--------------------------------------------------------------------------
	| Bouton Refuser
	|--------------------------------------------------------------------------
	*/

	if(btnDecline){

		btnDecline.addEventListener('click', () => {

			localStorage.setItem(STORAGE_KEY, 'denied');

			if(banner){
				banner.style.display = 'none';
			}
		});
	}



	/*
	|--------------------------------------------------------------------------
	| Bouton placeholder Maps
	|--------------------------------------------------------------------------
	*/

	const mapButton = document.getElementById('map-consent-button');

	if(mapButton){

		mapButton.addEventListener('click', () => {

			localStorage.setItem(STORAGE_KEY, 'granted');

			enableGoogleServices();

			if(banner){
				banner.style.display = 'none';
			}
		});
	}



	/*
	|--------------------------------------------------------------------------
	| Clic sur miniature YouTube
	|--------------------------------------------------------------------------
	*/

	if(ytButton){

		ytButton.addEventListener('click', (e) => {

			const consent = localStorage.getItem(STORAGE_KEY);

			/*
			|--------------------------------------------------------------------------
			| Consentement accepté
			|--------------------------------------------------------------------------
			*/

			if(consent === 'granted'){

				loadYouTubeVideo();

				return;
			}

			/*
			|--------------------------------------------------------------------------
			| Consentement refusé / absent
			|--------------------------------------------------------------------------
			*/

			e.preventDefault();

			showConsentBanner();

		});
	}

});