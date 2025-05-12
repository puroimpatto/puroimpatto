// Effetto confetti su clic del pulsante WhatsApp
document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('.share-button');
  if (shareButton) {
    shareButton.addEventListener('click', () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  }

  // Caricamento dinamico degli articoli da articles.json
  fetch('articles.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('news-container');
      data.articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article', 'scroll-fade');
        articleDiv.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.content}</p>`;
        container.appendChild(articleDiv);
      });
    })
    .catch(error => console.error('Errore nel caricamento degli articoli:', error));

  // Animazione "fade-in" per elementi con classe .scroll-fade
  const elements = document.querySelectorAll('.scroll-fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});