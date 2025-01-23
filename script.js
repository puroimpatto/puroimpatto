
// Aggiungi classe per ridurre l'opacità dopo l'animazione
window.addEventListener('load', function() {
const logo = document.getElementById('logo');
    logo.classList.add('loaded');
    });
    
// Funzione per muovere l'effetto cursore dietro il cursore
document.body.addEventListener('mousemove', function(event) {
    const cursorEffect = document.getElementById('cursor-effect');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    cursorEffect.style.left = `${mouseX - cursorEffect.offsetWidth / 2}px`;
    cursorEffect.style.top = `${mouseY - cursorEffect.offsetHeight / 2}px`;
    });
    
document.body.addEventListener('click', function() {
document.body.classList.toggle('clicked');
    });



const jsonUrl = "https://raw.githubusercontent.com/puroimpatto/puroimpatto/refs/heads/main/annunci.json";

async function caricaAnnunci() {
    const annunciDiv = document.getElementById('annunci');
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Errore nella risposta');
        const annunci = await response.json();
        let html = `<h2>Annunci</h2>`;
        annunci.forEach(annuncio => {
            html += `
                <div class="annuncio">
                    <h3>${annuncio.titolo}</h3>
                    <p>${annuncio.descrizione}</p>
                    <a href="dettagli.html?id=${annuncio.id}" target="_blank">Leggi di più</a>
                </div>
            `;
        });
        annunciDiv.innerHTML = html;
    } catch (error) {
        console.error('Errore:', error);
        annunciDiv.innerHTML = `<p>Impossibile caricare gli annunci al momento.</p>`;
    }
}

// Carica gli annunci quando la pagina è pronta
window.onload = caricaAnnunci;