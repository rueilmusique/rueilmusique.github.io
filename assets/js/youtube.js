/* YouTube consent + lazy embed (CNIL friendly)
   Script d’origine – corrections minimales
*/
(function(){

const playlistId = "PL20jwMxdxu3yFof2fHYwT98J0oZXoXXc2";
const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
const CONSENT_KEY = 'yt_consent';
const CONSENT_ANALYTICS_KEY = 'consent_analytics'; // + pour GA

let banner, btnAccept, btnDecline, thumbImg, iframe, playButton;

// ===== Fonctions utilitaires =====
function showBanner(){ if(banner) banner.style.display = 'flex'; }
function hideBanner(){ if(banner) banner.style.display = 'none'; }

function setConsent(value){
	try{
		localStorage.setItem(CONSENT_KEY, value);
		localStorage.setItem(CONSENT_ANALYTICS_KEY, value); // + GA
	}catch(e){}

	if(value === 'granted'){
		initYouTube();

		// + Activer Google Analytics au même moment
		if(typeof window.enableAnalytics === 'function'){
			window.enableAnalytics();
		}
	}
	hideBanner();
}

// ===== Initialisation YouTube =====
function initYouTube(){
	if(iframe && iframe.dataset.src) return;

	fetch(proxy)
	.then(res => res.text())
	.then(str => {
		const data = (new DOMParser()).parseFromString(str, "text/xml");
		const nodes = data.getElementsByTagName("yt:videoId");
		const latest = nodes.length > 0 ? nodes[0].textContent : null;

		if(!latest){
			console.warn('YouTube RSS: impossible de déterminer la dernière vidéo.');
			return;
		}

		const thumb = `https://i.ytimg.com/vi/${latest}/maxresdefault.jpg`;
		const iframeSrc = `https://www.youtube-nocookie.com/embed/${latest}?list=${playlistId}&autoplay=1`;

		if(thumbImg) thumbImg.src = thumb;
		if(iframe) iframe.dataset.src = iframeSrc;
	})
	.catch(err => {
		console.error('Erreur RSS YouTube :', err);
		if(thumbImg && !thumbImg.src){
			thumbImg.src = 'https://rueil-musique.fr/images/og-image.jpg';
		}
	});
}

// ===== DOM READY (clé du correctif) =====
document.addEventListener('DOMContentLoaded', ()=>{

	// 🔧 Sélecteurs DOM déplacés ici (CORRECTION)
	banner = document.getElementById('yt-consent-banner');
	btnAccept = document.getElementById('yt-consent-accept');
	btnDecline = document.getElementById('yt-consent-decline');
	thumbImg = document.getElementById('yt-thumb');
	iframe = document.getElementById('yt-iframe');
	playButton = document.querySelector('.yt-button');

	if(btnAccept) btnAccept.addEventListener('click', ()=> setConsent('granted'));
	if(btnDecline) btnDecline.addEventListener('click', ()=> setConsent('denied'));

	if(playButton){
		playButton.addEventListener('click', ()=>{
			const consent = localStorage.getItem(CONSENT_KEY);
			if(consent === 'granted'){
				if(iframe) iframe.src = iframe.dataset.src || iframe.src;
				playButton.style.display = 'none';
			}else{
				showBanner();
			}
		});
	}

	// ===== Lecture du consentement au chargement =====
	const consent = localStorage.getItem(CONSENT_KEY);

	if(consent === 'granted'){
		initYouTube();

		// + GA auto sur les autres pages
		if(typeof window.enableAnalytics === 'function'){
			window.enableAnalytics();
		}
	}
	else if(consent === 'denied'){
		if(thumbImg && !thumbImg.src){
			thumbImg.src = 'https://rueil-musique.fr/images/og-image.jpg';
		}
	}
	else{
		showBanner();
		if(thumbImg && !thumbImg.src){
			thumbImg.src = 'https://rueil-musique.fr/images/og-image.jpg';
		}
	}
});

})();
