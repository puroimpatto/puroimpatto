
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
            const container = document.getElementById('lista-annunci');
            try {
                const response = await fetch(jsonUrl);
                if (!response.ok) throw new Error('Errore nel caricamento degli annunci');
                const annunci = await response.json();

                // Ordina gli annunci per data (dal più recente al più vecchio)
                annunci.sort((a, b) => new Date(b.data) - new Date(a.data));

                // Crea l'elenco HTML
                container.innerHTML = annunci.map(annuncio => `
                    <div class="annuncio">
                        <h2>${annuncio.titolo}</h2>
                        <p>${annuncio.descrizione}</p>
                        <p><strong>Pubblicato il:</strong> ${new Date(annuncio.data).toLocaleString('it-IT')}</p>
                        <a href="dettagli.html?id=${annuncio.id}">Leggi di più</a>
                    </div>
                `).join('');
            } catch (error) {
                container.innerHTML = `<p>Errore nel caricamento degli annunci.</p>`;
            }
        }

        caricaAnnunci();s
