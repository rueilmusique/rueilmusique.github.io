/* YouTube consent + lazy embed (CNIL friendly), uses youtube-nocookie for privacy-by-default, does NOT fetch YouTube RSS or create the iframe until user accepts, persists consent choice in localStorage ('yt_consent' = 'granted'|'denied')*/
(function(){
const playlistId = "PL20jwMxdxu3yFof2fHYwT98J0oZXoXXc2";
const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
const CONSENT_KEY = 'yt_consent';

// elements
const banner = document.getElementById('yt-consent-banner');
const btnAccept = document.getElementById('yt-consent-accept');
const btnDecline = document.getElementById('yt-consent-decline');
const thumbImg = document.getElementById('yt-thumb');
const iframe = document.getElementById('yt-iframe');
const playButton = document.querySelector('.yt-button');

function showBanner(){ banner.style.display = 'flex'; }
function hideBanner(){ banner.style.display = 'none'; }

function setConsent(value){
	try{ localStorage.setItem(CONSENT_KEY, value); }catch(e){ /* ignore */ }
	if(value === 'granted'){ initYouTube(); }
	hideBanner();
}

// On accept -> save and init
btnAccept.addEventListener('click', ()=> setConsent('granted'));
// On decline -> save and keep placeholder
btnDecline.addEventListener('click', ()=> setConsent('denied'));

// Initialize YouTube functionality only when consent is granted
function initYouTube(){
	// if iframe already has dataset.src set, avoid duplicate fetch
	if(iframe.dataset.src) return;

	// fetch the RSS via CORS proxy and populate thumbnail + iframe dataset (nocookie)
	fetch(proxy)
	.then(res => res.text())
	.then(str => {
		const data = (new DOMParser()).parseFromString(str, "text/xml");
		// Récupération du dernier ID vidéo sans dépendre du namespace XML
		const nodes = data.getElementsByTagName("yt:videoId");
		//const latest = data.querySelector("entry > yt\\:videoId")?.textContent || data.querySelector("id")?.textContent || null;
		const latest = nodes.length > 0 ? nodes[0].textContent : null;
		console.log("Dernière vidéo ID :", latest);
		
		if(!latest){
			console.warn('YouTube RSS: impossible de déterminer la dernière vidéo.');
			return;
		}
		const thumb = `https://i.ytimg.com/vi/${latest}/maxresdefault.jpg`;
		const iframeSrc = `https://www.youtube-nocookie.com/embed/${latest}?list=${playlistId}&autoplay=1`;
		
		// set src of thumbnail and dataset of iframe
		if(thumbImg) thumbImg.src = thumb;
		iframe.dataset.src = iframeSrc;
	})
	.catch(err => {
		console.error('Erreur lors de la récupération du flux RSS via proxy :', err);
		// fallback : set a safe static thumbnail (og-image) so something appears
		if(thumbImg && !thumbImg.src){
			thumbImg.src = 'https://rueil-musique.fr/images/og-image.jpg';
		}
	});
}

// On play button click: if consent denied -> show banner again; if granted -> load iframe
playButton.addEventListener('click', (e) => {
	const consent = localStorage.getItem(CONSENT_KEY);
	if(consent === 'granted'){
		// load iframe src and hide the play button visually
		iframe.src = iframe.dataset.src || iframe.src;
		playButton.style.display = 'none';
	} else if(consent === 'denied'){
		// show a polite banner asking to accept (re-open banner)
		showBanner();
	} else {
		// no choice yet -> show banner and wait for user input
		showBanner();
	}
});

// On load: check stored choice
document.addEventListener('DOMContentLoaded', ()=>{
	const consent = localStorage.getItem(CONSENT_KEY);
	if(consent === 'granted'){
		// init immediately (loads thumbnail but not the iframe)
		initYouTube();
	} else if(consent === 'denied'){
		// put a sensible fallback thumbnail (OG image) so the area isn't empty
		if(thumbImg && !thumbImg.src){
			thumbImg.src = 'https://rueil-musique.fr/images/og-image.jpg';
		}
		// do not show banner unless user clicks play
	} else {
		// no decision yet -> show the small banner
		showBanner();
		// set a neutral placeholder thumbnail (optional)
		if(thumbImg && !thumbImg.src){
			thumbImg.src = 'https://rueil-musique.fr/images/og-image.jpg';
		}
	}
});
})();