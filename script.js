fetch('novedades.json?v=' + Date.now())
  .then(response => {
    if (!response.ok) throw new Error('No se pudo cargar novedades.json');
    return response.json();
  })
  .then(news => {
    const container = document.getElementById('news-container');
    container.innerHTML = news.map((item, index) => `
      <article class="news-card ${index === 0 ? 'featured' : ''}">
        <img class="news-image" src="${item.imagen}" alt="">
        <div class="news-content">
          <p class="category">${item.categoria || 'EcoCrim'}</p>
          <h2 class="news-title">${item.titulo}</h2>
          <p class="news-date">${item.fecha}</p>
          <p class="news-description">${item.descripcion}</p>
          <a class="news-link" href="${item.url}" target="_blank" rel="noopener">${item.boton || 'LEER MÁS'}</a>
        </div>
      </article>
    `).join('');
  })
  .catch(error => {
    document.getElementById('news-container').innerHTML =
      '<p>No se pudieron cargar las novedades.</p>';
    console.error(error);
  });
