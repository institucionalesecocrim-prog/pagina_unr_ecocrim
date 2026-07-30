# Instrucciones de Integración Técnica - Área de IT

Para integrar el bloque de novedades de EcoCrim de la manera más limpia y adaptativa posible, proponemos dos alternativas técnicas prioritarias.

## Opción 1: Inyección Nativa vía Script (Recomendada)
Esta opción evita el uso de bordes artificiales o barras de scroll fijas, permitiendo que el contenedor se estire elásticamente según el contenido.

1. **Insertar el contenedor base en el HTML de destino:**
```html
<div id="ecocrim-news-container" class="ecocrim-news-wrapper">
    <header class="ecocrim-header">
        <h2>Novedades</h2>
        <div class="ecocrim-brand-line"></div>
    </header>
    <div id="ecocrim-news-feed"></div>
</div>
