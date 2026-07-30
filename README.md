# Componente de Novedades EcoCrim (UNR)

Widget modular optimizado para mostrar las últimas novedades de EcoCrim de forma nativa en entornos web institucionales.

## Características
- **Diseño Horizontal Compacto:** Ocupa entre 280-350px de alto, ideal para finales de páginas largas.
- **Jerarquía Editorial:** Una única noticia destacada con imagen secundaria (35% ancho) seguida de una agenda de líneas limpias.
- **Sin Dependencias Externas:** Vanilla JavaScript y CSS puro sin frameworks que alteren la velocidad de carga.
- **Gestión Inteligente de Datos:** Ordenación automática basada en propiedades JSON (`"destacada": true`).

## Estructura de Archivos
- `index.html`: Estructura base / Entorno de pruebas.
- `styles.css`: Hojas de estilo institucionales adaptadas a la paleta UNR.
- `script.js`: Lógica de extracción, ordenamiento dinámico e inyección DOM.
- `novedades.json`: Base de datos de contenidos.
