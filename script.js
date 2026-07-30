document.addEventListener("DOMContentLoaded", () => {
    const feedContainer = document.getElementById("ecocrim-news-feed");
    
    // Ruta al archivo JSON (se asume relativa o configurable)
    const JSON_URL = "novedades.json"; 

    fetch(JSON_URL)
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el archivo de novedades.");
            return response.json();
        })
        .then(data => {
            if (!data || data.length === 0) {
                feedContainer.innerHTML = '<div class="ecocrim-error">No hay novedades disponibles en este momento.</div>';
                return;
            }

            // Separar la destacada de las secundarias independientemente de su orden
            const destacada = data.find(item => item.destacada === true) || data[0];
            const secundarias = data.filter(item => item !== destacada);

            let htmlContent = "";

            // 1. Renderizar Noticia Destacada
            const tieneImagen = destacada.imagen && destacada.imagen.trim() !== "";
            htmlContent += `
                <article class="ecocrim-featured ${tieneImagen ? '' : 'no-image'}">
                    ${tieneImagen ? `
                    <div class="ecocrim-featured-img-area">
                        <img src="${destacada.imagen}" alt="${destacada.titulo}">
                    </div>` : ''}
                    <div class="ecocrim-featured-body">
                        <span class="ecocrim-chip">${destacada.categoria}</span>
                        <h3>${destacada.titulo}</h3>
                        <p>${destacada.descripcion}</p>
                        <div class="ecocrim-meta-row">
                            <span class="ecocrim-date">${destacada.fecha}</span>
                            <a href="${destacada.url}" class="ecocrim-link">${destacada.boton} →</a>
                        </div>
                    </div>
                </article>
            `;

            // 2. Renderizar Novedades Secundarias (Estilo Agenda)
            if (secundarias.length > 0) {
                htmlContent += `<div class="ecocrim-list">`;
                secundarias.forEach(item => {
                    htmlContent += `
                        <div class="ecocrim-item">
                            <div class="ecocrim-item-left">
                                <div class="ecocrim-item-title-row">
                                    <span class="ecocrim-chip">${item.categoria}</span>
                                    <h4>${item.titulo}</h4>
                                </div>
                                <span class="ecocrim-item-date">${item.fecha}</span>
                            </div>
                            <a href="${item.url}" class="ecocrim-link">${item.boton} →</a>
                        </div>
                    `;
                });
                htmlContent += `</div>`;
            }

            feedContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Error en el componente EcoCrim:", error);
            feedContainer.innerHTML = '<div class="ecocrim-error">Error al cargar las novedades.</div>';
        });
});
