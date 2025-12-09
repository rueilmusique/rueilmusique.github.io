class SpecialFooter extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `
		<footer id='footer'>
			<div class='inner' id='contact'>
			<section>
				<h2><a href='https://rueilmusique.github.io/contact.html'>Contactez-nous</a></h2>
				<ul class='actions'>
					<li>
						<a href='tel:+33147494849' class='button primary small icon solid'>
							<div class="iconTextLeft">
								<svg class="" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
									<g id="layer1">
										<path id="path4" fill="#ffffff" d="m305.65 87.48c5.82-0.96 11.49-1.75 17.42-2.47 12.6-0.13 25.48 2.04 37.39 6.43 16.29 8.11 30.39 20.16 41.24 35.05 6.79 9.61 9.4 21.33 7.2 32.71-21.38 115.79-97.66 213.83-204.49 263.3-12.2 5.52-26.35 5.92-38.61 0.66-9.1-3.99-17.77-8.52-25.4-14.18-17.78-13.45-30.42-31.95-37-52.87-0.89-2.49-0.26-5.57 1.47-7.79 0.86-1.11 2.34-2.05 3.71-2.46l81.79-31.52c4.13-1.69 8.97 0.31 10.75 4.52l10.89 25.32c0.6 1.52 1.56 2.57 2.67 3.43 3.79 2.97 9.04 2.16 12-1.64l110.99-142.08c2.96-3.8 2.48-9.08-1.31-12.05-1.3-1.01-2.95-1.55-4.56-1.77l-16.43-1.07c-4.24-0.49-7.4-3.7-7.88-7.64l-8.64-84.61c-0.09-2.16 0.48-4.23 1.86-6 1.22-1.56 3.1-2.63 4.94-3.27z"/>
									</g>
								</svg>
							</div>
							<div class="iconTextRight">
								Appeler
							</div>
						</a>
					</li>
					<li>
						<a href='https://rueilmusique.github.io/contact.html' class='button primary small icon solid'>
							<div class="iconTextLeft">
								<svg class="" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
									<g id="SVGRepo_iconCarrier">
										<path fill-rule="evenodd" fill="#ffffff" d="m125 175l-25 25v400l25 25h550l25-25v-400l-25-25zm25 81.52v318.48h500v-318.49l-250 227.28zm460.33-31.52h-420.67l210.33 191.21z"/>
									</g>
								</svg>
							</div>
							<div class="iconTextRight">
								Envoyer un mail
							</div>
						</a>
					</li>
				</ul>
				<p>Besoin d'un renseignement ou de nos conseils d'experts ? Contactez-nous, nous sommes ouvert du mardi au samedi, de 10h à 20h (fermeture à 19h pendant les vacances scolaires)</p>
			</section>
			<section align='justify'>
				<h2>Nos réseaux</h2>
				<ul class='icons'>
					<li>
						<a class="icon style2" href='https://www.instagram.com/rueilmusique/' target='_blank' rel='noopener noreferrer' aria-label='Page Instagram'>
							<svg class="svgIcons" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
								<g id="Layer 1">
									<g id="Layer 1">
										<path fill="#3e3e3e" d="m255.5 85.5c-46.44 0-52.26 0.2-70.5 1.03-18.2 0.83-30.63 3.72-41.51 7.95q-4.27 1.6-8.33 3.66-4.07 2.06-7.89 4.55-3.82 2.48-7.35 5.37-3.52 2.89-6.72 6.14-3.25 3.19-6.14 6.72-2.88 3.53-5.37 7.35-2.49 3.82-4.55 7.88-2.06 4.07-3.67 8.34c-4.22 10.88-7.11 23.31-7.94 41.51-0.83 18.23-1.03 24.06-1.03 70.5 0 46.44 0.2 52.27 1.03 70.5 0.83 18.2 3.72 30.63 7.95 41.51q1.61 4.27 3.67 8.33 2.05 4.07 4.54 7.89 2.49 3.82 5.38 7.35 2.88 3.52 6.13 6.72 3.2 3.25 6.73 6.14 3.52 2.88 7.34 5.37 3.82 2.49 7.89 4.55 4.07 2.06 8.33 3.66c10.88 4.23 23.31 7.12 41.51 7.95 18.24 0.83 24.06 1.03 70.5 1.03 46.44 0 52.27-0.2 70.51-1.03 18.2-0.83 30.63-3.72 41.5-7.95 5.67-2.19 11.09-4.96 16.18-8.28 5.09-3.31 9.82-7.15 14.11-11.44 4.3-4.3 8.13-9.03 11.44-14.12 3.32-5.09 6.09-10.51 8.28-16.17 4.23-10.88 7.12-23.31 7.95-41.51 0.83-18.24 1.03-24.06 1.03-70.5 0-46.44-0.2-52.27-1.03-70.5-0.83-18.2-3.72-30.63-7.95-41.51q-1.6-4.27-3.66-8.33-2.06-4.07-4.55-7.89-2.48-3.82-5.37-7.35-2.89-3.53-6.14-6.72-3.19-3.25-6.72-6.14-3.53-2.89-7.35-5.37-3.82-2.49-7.88-4.55-4.07-2.06-8.34-3.67c-10.88-4.22-23.31-7.11-41.51-7.94-18.23-0.83-24.06-1.03-70.5-1.03zm0 30.81c45.66 0 51.07 0.18 69.1 1 16.67 0.76 25.73 3.54 31.75 5.89q2.78 1.02 5.42 2.35 2.65 1.33 5.13 2.94 2.48 1.61 4.77 3.49 2.28 1.88 4.34 4.01 2.13 2.06 4.01 4.35 1.88 2.28 3.49 4.76 1.62 2.48 2.94 5.13 1.33 2.64 2.36 5.42c2.34 6.02 5.12 15.08 5.88 31.75 0.83 18.03 1 23.44 1 69.1 0 45.66-0.17 51.07-1 69.1-0.76 16.67-3.54 25.73-5.88 31.75-1.42 3.68-3.22 7.2-5.37 10.5-2.15 3.31-4.64 6.38-7.43 9.17-2.78 2.78-5.85 5.27-9.16 7.42-3.3 2.15-6.82 3.95-10.5 5.37-6.02 2.34-15.08 5.12-31.75 5.88-18.03 0.83-23.44 1-69.1 1-45.66 0-51.07-0.17-69.1-1-16.67-0.76-25.73-3.54-31.75-5.88q-2.78-1.03-5.42-2.36-2.65-1.32-5.13-2.94-2.48-1.61-4.77-3.49-2.28-1.88-4.34-4-2.13-2.07-4.01-4.35-1.88-2.29-3.49-4.77-1.62-2.48-2.94-5.12-1.33-2.65-2.36-5.43c-2.34-6.02-5.12-15.08-5.88-31.75-0.83-18.03-1-23.44-1-69.1 0-45.66 0.17-51.07 1-69.1 0.76-16.67 3.54-25.72 5.88-31.75q1.03-2.78 2.36-5.42 1.33-2.65 2.94-5.13 1.61-2.48 3.49-4.77 1.88-2.28 4.01-4.34 2.06-2.13 4.35-4.01 2.28-1.88 4.76-3.49 2.48-1.61 5.13-2.94 2.64-1.33 5.42-2.35c6.02-2.35 15.08-5.13 31.75-5.89 18.03-0.83 23.44-1 69.1-1z"/>
										<path fill="#3e3e3e" d="m255.5 168.69c-35.52 0-67.54 21.39-81.13 54.21-13.59 32.81-6.08 70.58 19.04 95.69 25.11 25.11 62.88 32.63 95.69 19.04 32.82-13.6 54.21-45.61 54.21-81.13 0-11.53-2.27-22.95-6.68-33.6-4.42-10.66-10.88-20.34-19.04-28.49-8.15-8.16-17.83-14.62-28.49-19.04-10.65-4.41-22.07-6.68-33.6-6.68zm0 144.81c-23.05 0-43.84-13.89-52.66-35.19-8.82-21.3-3.95-45.81 12.36-62.12 16.3-16.3 40.81-21.17 62.11-12.35 21.3 8.82 35.19 29.61 35.19 52.66 0 7.48-1.47 14.9-4.34 21.81-2.86 6.92-7.06 13.2-12.36 18.49-5.29 5.3-11.57 9.5-18.49 12.36-6.91 2.86-14.32 4.34-21.81 4.34z"/>
										<path fill="#3e3e3e" d="m346.78 185.74c-11.35 0-20.52-9.17-20.52-20.52 0-11.35 9.17-20.52 20.52-20.52 11.35 0 20.52 9.17 20.52 20.52 0 11.35-9.17 20.52-20.52 20.52z"/>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a class="icon style2" href='https://www.youtube.com/@rueilmusique/' target='_blank' rel='noopener noreferrer' aria-label='Chaine YouTube'>
							<svg class="svgIcons" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
								<g id="Layer 1">
									<g id="g5">
										<path id="path7" fill="#3e3e3e" d="m255.78 85.4c0 0-152.69 0-190.87 10.05-20.49 5.62-37.38 22.5-43 43.4-10.05 38.17-10.05 117.33-10.05 117.33 0 0 0 79.57 10.05 117.34 5.62 20.9 22.1 37.38 43 43 38.58 10.45 190.87 10.45 190.87 10.45 0 0 152.7 0 190.88-10.05 20.89-5.62 37.38-22.1 43-43 10.05-38.18 10.05-117.34 10.05-117.34 0 0 0.4-79.56-10.05-117.73-5.62-20.9-22.11-37.38-43-43-38.18-10.45-190.88-10.45-190.88-10.45zm-48.62 97.65l126.98 73.13-126.98 73.14z"/>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a class="icon style2" href='https://www.tiktok.com/@rueilmusique' target='_blank' rel='noopener noreferrer' aria-label='Page TikTok'>
							<svg class="svgIcons" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
								<g id="Layer 1">
									<g id="Layer 1">
										<path fill="#3e3e3e" d="m365.81 159.38q-0.86-0.44-1.7-0.9-0.85-0.47-1.68-0.95-0.84-0.49-1.66-0.99-0.82-0.51-1.63-1.04-2.34-1.55-4.59-3.24-2.25-1.69-4.4-3.51-2.14-1.82-4.18-3.77-2.03-1.95-3.94-4.01c-12.76-14.61-17.53-29.42-19.28-39.79h0.07c-1.47-8.61-0.86-14.18-0.77-14.18h-58.13v224.76c0 3.02 0 6-0.12 8.95 0 0.37-0.04 0.7-0.06 1.1q0.01 0.24-0.03 0.5 0 0.06 0 0.13c-0.31 4.01-1.1 7.98-2.37 11.8-1.27 3.83-3 7.48-5.16 10.88-2.16 3.4-4.72 6.53-7.64 9.31-2.92 2.78-6.16 5.19-9.67 7.18q-2.73 1.56-5.65 2.75-2.91 1.19-5.96 1.99-3.04 0.8-6.16 1.21-3.13 0.4-6.28 0.4c-27.08 0-49.03-22.09-49.03-49.36 0-27.27 21.95-49.35 49.03-49.35q1.92-0.01 3.84 0.14 1.91 0.15 3.81 0.45 1.89 0.3 3.76 0.75 1.86 0.45 3.69 1.05l0.07-59.19c-7.38-0.95-14.84-1.14-22.25-0.56-7.42 0.58-14.76 1.93-21.9 4.02-7.14 2.09-14.05 4.91-20.61 8.42-6.56 3.5-12.74 7.68-18.44 12.46q-3.75 3.26-7.2 6.83-3.45 3.57-6.58 7.43-3.13 3.86-5.91 7.98-2.78 4.11-5.2 8.45c-2.45 4.23-11.71 21.23-12.83 48.82-0.7 15.66 4 31.89 6.24 38.59v0.14c1.41 3.95 6.87 17.42 15.78 28.78q2.69 3.42 5.62 6.62 2.93 3.21 6.09 6.19 3.16 2.98 6.53 5.72 3.37 2.74 6.94 5.23v-0.14l0.14 0.14c28.14 19.12 59.34 17.86 59.34 17.86 5.4-0.22 23.49 0 44.04-9.73 22.78-10.8 35.76-26.88 35.76-26.88q3.1-3.6 5.89-7.45 2.78-3.84 5.23-7.91 2.45-4.07 4.54-8.34 2.1-4.26 3.83-8.68c5.25-13.83 7.01-30.41 7.01-37.04v-119.24c0.71 0.42 10.1 6.63 10.1 6.63 0 0 13.53 8.67 34.64 14.32 15.14 4.02 35.55 4.87 35.55 4.87v-57.71c-7.15 0.78-21.67-1.48-36.53-8.89z"/>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a class="icon style2" href='https://www.facebook.com/rueilmusique/' target='_blank' rel='noopener noreferrer' aria-label='Page Facebook'>
							<svg class="svgIcons" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
								<g id="Layer 1">
									<path fill="#3e3e3e" d="m274.89 158.65c0-13.66 12.19-18.56 25.85-18.56 13.65 0 28.24 4.24 28.24 4.24l8.74-51.97c0 0-18.56-6.36-62.83-6.36-27.18 0-42.96 10.34-54.49 25.59-10.87 14.45-11.27 37.65-11.27 52.63v34.07h-35.13v50.77h35.13v176.32h65.76v-176.32h52.1l3.84-50.77h-55.94z"/>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a class="icon style2" href='tel:+33147494849' aria-label='Téléphone'>
							<svg class="svgIcons" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
								<g id="layer1">
									<path id="path4" fill="#3e3e3e" d="m305.65 87.48c5.82-0.96 11.49-1.75 17.42-2.47 12.6-0.13 25.48 2.04 37.39 6.43 16.29 8.11 30.39 20.16 41.24 35.05 6.79 9.61 9.4 21.33 7.2 32.71-21.38 115.79-97.66 213.83-204.49 263.3-12.2 5.52-26.35 5.92-38.61 0.66-9.1-3.99-17.77-8.52-25.4-14.18-17.78-13.45-30.42-31.95-37-52.87-0.89-2.49-0.26-5.57 1.47-7.79 0.86-1.11 2.34-2.05 3.71-2.46l81.79-31.52c4.13-1.69 8.97 0.31 10.75 4.52l10.89 25.32c0.6 1.52 1.56 2.57 2.67 3.43 3.79 2.97 9.04 2.16 12-1.64l110.99-142.08c2.96-3.8 2.48-9.08-1.31-12.05-1.3-1.01-2.95-1.55-4.56-1.77l-16.43-1.07c-4.24-0.49-7.4-3.7-7.88-7.64l-8.64-84.61c-0.09-2.16 0.48-4.23 1.86-6 1.22-1.56 3.1-2.63 4.94-3.27z"/>
								</g>
							</svg>
						</a>
					</li>
				</ul>
				<a href='https://maps.app.goo.gl/mXEdYxWUZvsPta75A' target='_blank' rel='noopener noreferrer'>16 rue Marollet, 92500 Rueil-Malmaison</a>
				<br/>
				<br/>
				<a href='mailto:rueil-music@wanadoo.fr' style='font-weight: 600;'>rueil-music@wanadoo.fr</a><br/><a href='tel:+33147494849' style='font-weight: 600;'>01 47 49 48 49</a>
			</section>
			<ul class='copyright'>
				<li>&copy; Rueil Musique. Tous droits réservés</li>
				<li>Design: <a href='https://html5up.net/' target='_blank' rel='noopener noreferrer'>HTML5 UP</a> (repris par Rami Zian)</li>
				<li><a href='https://rueilmusique.github.io/mentionslegales.html'>Mentions légales</a></li>
			</ul>
			</div>
		</footer>`
	}
}

class SpecialMenu extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `
		<div class='inner'>
			<h2>Menu</h2>
			<ul>
				<li>
					<a href='https://rueilmusique.github.io/index.html'>
						<div class="iconMenu">
							<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
								<g>
									<g>
										<path fill="#ffffff" d="m713.43 370.16l-270.97-271.01c-11.25-11.25-26.53-17.57-42.42-17.57-15.92 0-31.19 6.32-42.44 17.57l-271.03 271.01c-17.15 17.15-22.29 42.74-13 65.17 9.3 22.42 31.17 36.82 55.44 36.82h34.62v193.84c0 28.99 23.14 52.44 52.14 52.44h46.12v-175.23c0-13.35 11.04-23.78 24.37-23.78h89.61c13.34 0 24.09 10.44 24.09 23.78v175.22h184.31c28.99 0 52.02-23.46 52.02-52.45v-193.82h34.72c24.26 0 46.14-14.4 55.44-36.82 9.27-22.43 4.15-48-13.02-65.17z"/>
									</g>
								</g>
							</svg>
						</div>
						<div class="iconMenuText">
							Accueil
						</div>
						<span class='icon solid' style='margin: 0 0.65em 0 0'>
						</span>
					</a>
				</li>
				<li>
					<a href='https://rueilmusique.github.io/instruments-accessoires/index.html'>
						<div class="iconMenu">
							<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
								<g id="Layer 1">
									<path fill="#ffffff" d="m713.47 137.65l-51.12-51.12c-4.71-4.71-12.34-4.71-17.04 0l-51.13 51.12c-4.7 4.71-4.7 12.33 0 17.04l-141.61 141.6c-46.59-32.66-98.4-38.99-125.39-11.99-6.12 6.11-10.53 13.51-13.31 21.83-2.35 6.9-5.05 13.98-8.38 21.04-3.9 8.27-9.06 16.13-15.92 22.99-9.6 9.6-21.21 15.82-33.29 19.7-25.13 8.07-56.04 13.96-81.91 21.77-9.6 2.4-18.8 5.83-27.44 10.32-4.18 2.05-7.96 4.25-11.26 6.63q0.01 0.01 0.01 0.01c-6.16 4.13-11.96 8.87-17.32 14.23-23.85 23.85-35.4 56.33-35.36 91.1 0.05 47.35 21.58 99.08 62.78 140.29 41.35 41.35 92.82 62.88 140.3 62.79 34.59-0.07 67.35-11.62 91.09-35.37 5.39-5.39 10.14-11.22 14.29-17.41 2.3-3.2 4.44-6.86 6.43-10.88 4.66-8.92 8.22-18.42 10.64-28.36 7.72-25.74 13.58-56.35 21.59-81.28 3.88-12.08 10.09-23.69 19.7-33.29 6.86-6.86 14.72-12.01 22.99-15.91 6.94-3.28 13.91-5.95 20.71-8.28 8.46-2.77 15.97-7.2 22.17-13.4 27-27 20.67-78.8-11.99-125.4l141.6-141.6h0.01c4.7 4.71 12.33 4.71 17.04 0l51.12-51.12c4.71-4.71 4.71-12.34 0-17.05zm-425.89 460.24l-85.21-85.2 17.04-17.04 85.21 85.2zm126.33-147.91c-17.64 17.65-46.25 17.65-63.9 0-17.65-17.64-17.65-46.25 0-63.9 17.64-17.65 46.26-17.65 63.9 0 17.65 17.64 17.65 46.26 0 63.9z"/>
								</g>
							</svg>
						</div>
						<div class="iconMenuText">
							Instruments & accessoires
						</div>
						<span class='icon solid' style='margin: 0 0.65em 0 0'>
						</span>
					</a>
				</li>
				<li>
					<a href='https://rueilmusique.github.io/atelier-lutherie.html'>
						<div class="iconMenu">
							<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
								<g id="Layer 1">
									<path fill="#ffffff" d="m619.02 107.98l-146.01 109.51v70.79l-94.71 94.71c7.74 4.85 15.13 10.34 21.75 16.96 6.61 6.62 12.11 14.01 16.96 21.76l94.71-94.72h70.8l109.5-146.01zm-365.02 317.79l-133.56 133.56c-16.59 16.59-16.59 43.51 0 60.12l60.12 60.12c16.61 16.61 43.52 16.61 60.13 0l133.55-133.56c33.21-33.2 33.21-87.03 0-120.24-33.21-33.2-87.04-33.2-120.24 0z"/>
								</g>
							</svg>
						</div>
						<div class="iconMenuText">
							Atelier de lutherie
						</div>
						<span class='icon solid' style='margin: 0 0.67em 0 0'>
						</span>
					</a>
				</li>
				<li>
					<a href='https://rueilmusique.github.io/librairie-musicale.html'>
						<div class="iconMenu">
							<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
								<style>
									.s0 { fill: none;stroke: #ffffff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 66.7 } 
								</style>
								<g id="Layer 1">
									<path class="s0" d="m188.73 584.86v-338.03c0-29.58 0-44.37 5.76-55.67 5.06-9.93 13.14-18.01 23.08-23.08 11.3-5.76 26.09-5.76 55.67-5.76h253.52c29.58 0 44.37 0 55.67 5.76 9.94 5.07 18.02 13.15 23.08 23.08 5.76 11.3 5.76 26.09 5.76 55.67v285.21h-369.72c-29.17 0-52.82 23.65-52.82 52.82zm0 0c0 29.17 23.65 52.82 52.82 52.82h369.72m-290.5-369.72h158.46m-158.46 105.63h158.46m105.63 158.45v105.64"/>
								</g>
							</svg>
						</div>
						<div class="iconMenuText">
							Librairie musicale
						</div>
						<span class='icon solid' style='margin: 0 0.77em 0 0'>
						</span>
					</a>
				</li>
				<li>
					<a href='https://rueilmusique.github.io/contact.html'>
						<div class="iconMenu">
							<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
								<g id="layer1">
									<path id="path4" fill="#ffffff" d="m305.65 87.48c5.82-0.96 11.49-1.75 17.42-2.47 12.6-0.13 25.48 2.04 37.39 6.43 16.29 8.11 30.39 20.16 41.24 35.05 6.79 9.61 9.4 21.33 7.2 32.71-21.38 115.79-97.66 213.83-204.49 263.3-12.2 5.52-26.35 5.92-38.61 0.66-9.1-3.99-17.77-8.52-25.4-14.18-17.78-13.45-30.42-31.95-37-52.87-0.89-2.49-0.26-5.57 1.47-7.79 0.86-1.11 2.34-2.05 3.71-2.46l81.79-31.52c4.13-1.69 8.97 0.31 10.75 4.52l10.89 25.32c0.6 1.52 1.56 2.57 2.67 3.43 3.79 2.97 9.04 2.16 12-1.64l110.99-142.08c2.96-3.8 2.48-9.08-1.31-12.05-1.3-1.01-2.95-1.55-4.56-1.77l-16.43-1.07c-4.24-0.49-7.4-3.7-7.88-7.64l-8.64-84.61c-0.09-2.16 0.48-4.23 1.86-6 1.22-1.56 3.1-2.63 4.94-3.27z"/>
								</g>
							</svg>
						</div>
						<div class="iconMenuText">
							Contactez-nous / FAQ
						</div>
						<span class='icon solid' style='margin: 0 0.6em 0 0'>
						</span>
					</a>
				</li>
			</ul>
		</div>
		<a class='close' href='#menu'>
		</a>`
	}
}


customElements.define('special-footer', SpecialFooter)
customElements.define('special-menu', SpecialMenu)

// <li><a href='mailto:rueil-music@wanadoo.fr' class='icon solid style2 fa-envelope' aria-label='Adresse mail'><span class='label'>E-mail</span></a></li>
// <li><a href='https://rueilmusique.github.io/equipe.html'><span class='icon solid fa-users' style='margin: 0 0.4em 0 0'></span>L'équipe Rueil Musique</a></li>
//<li><a href='https://www.instagram.com/rueilmusique/' target='_blank' rel='noopener noreferrer' class='icon brands style2 fa-instagram' aria-label='Page Instagram'><span class='label'>Instagram</span></a></li>
//<li><a href='https://www.youtube.com/@rueilmusique/' target='_blank' rel='noopener noreferrer' class='icon brands style2 fa-youtube' aria-label='Chaine YouTube'><span class='label'>YouTube</span></a></li>
//<li><a href='https://www.tiktok.com/@rueilmusique' target='_blank' rel='noopener noreferrer' class='icon brands style2 fa-tiktok' aria-label='Page TikTok'><span class='label'>TikTok</span></a></li>
//<li><a href='https://www.facebook.com/rueilmusique/' target='_blank' rel='noopener noreferrer' class='icon brands style2 fa-facebook-f' aria-label='Page Facebook'><span class='label'>Facebook</span></a></li>
//<li><a href='tel:+33147494849' class='icon solid style2 fa-phone' aria-label='Téléphone'><span class='label'>Phone</span></a></li>

//<li><a href='tel:+33147494849' class='button primary small icon solid fa-phone'>Appeler</a></li>

//<div class='inner'><h2>Menu</h2><ul><li><a href='https://rueilmusique.github.io/index.html'><span class='icon solid fa-home' style='margin: 0 0.6em 0 0'></span>Accueil</a></li><li><a href='https://rueilmusique.github.io/instruments-accessoires/index.html'><span class='icon solid fa-guitar' style='margin: 0 0.65em 0 0'></span>Instruments & accessoires</a></li><li><a href='https://rueilmusique.github.io/atelier-lutherie.html'><span class='icon solid fa-screwdriver' style='margin: 0 0.67em 0 0'></span>Atelier de lutherie</a></li><li><a href='https://rueilmusique.github.io/librairie-musicale.html'><span class='icon solid fa-book' style='margin: 0 0.77em 0 0'></span>Librairie musicale</a></li><li><a href='https://rueilmusique.github.io/contact.html'><span class='icon solid fa-phone' style='margin: 0 0.6em 0 0'></span>Contactez-nous / FAQ</a></li></ul></div><a class='close' href='#menu'></a>