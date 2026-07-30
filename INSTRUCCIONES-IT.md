Markdown
# Instrucciones de Integración - Sección Novedades EcoCrim

Este componente ha sido concebido para integrarse en el portal de la Universidad Nacional de Rosario respetando el diseño institucional y optimizando la altura vertical.

## Opción 1: Integración Directa (Recomendada)
Esta opción permite que la sección adapte su altura dinámicamente sin scrollbars adicionales ni desfasajes estéticos.

### Pasos:
1. Copiar `styles.css` y `script.js` en el servidor web.
2. Insertar el contenedor HTML donde debe mostrarse la sección:
   ```html
   <div id="ecocrim-news"></div>
Incluir las dependencias en la página:

HTML
<link rel="stylesheet" href="/ruta/styles.css">
<script src="/ruta/script.js" defer></script>
Opción 2: Integración vía iFrame (Plan B)
Si existen restricciones normativas sobre la ejecución de JavaScript externo:

HTML
<iframe 
  src="/ruta/index.html" 
  width="100%" 
  height="320" 
  style="border:none; overflow:hidden;" 
  title="Novedades EcoCrim">
</iframe>

## Opción 2: Integración vía iFrame (Plan B)
Si existen restricciones normativas sobre la ejecución de JavaScript externo:

HTLM
<iframe 
  src="/ruta/index.html" 
  width="100%" 
  height="320" 
  style="border:none; overflow:hidden;" 
  title="Novedades EcoCrim">
</iframe>
