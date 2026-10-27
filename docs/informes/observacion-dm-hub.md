---
sidebar_position: 1
---

# Informe de observación de uso de DM Hub

## Análisis comparativo de tres casos

## Hallazgo principal

En las tres grabaciones, la mirada se concentra sobre el área central de trabajo, sobre todo cuando aparecen formularios, ventanas de diálogo o paneles de consulta. El cursor acompaña varias de esas interacciones, aunque el mapa agregado no permite afirmar que mirada y cursor coincidan en cada momento. Las pantallas más prolongadas o con más pasos visibles son el inicio de sesión, la creación o edición de registros y el constructor de la tienda.

El caso 1 dura cerca de 25 minutos, el caso 2 cerca de 16 minutos 38 segundos y el caso 3 cerca de 11 minutos 18 segundos. Estas duraciones describen las sesiones completas; no son por sí mismas una medida de facilidad ni de éxito.

## Alcance y método

Se revisaron las tres grabaciones de DM Hub observando la pantalla, el mapa de calor, los desplazamientos del cursor y la línea de tiempo con eventos. Se registraron las pantallas visibles y las acciones que podían identificarse en la reproducción. Los tiempos por actividad se estimaron con los marcadores de inicio y fin cuando estos ofrecían un límite legible.

El caso 1 muestra varios marcadores repetidos para una misma actividad; por eso se describe cualitativamente y se excluye de los promedios por tarea. Los promedios de la sección [Tiempo estimado por actividad](#tiempo-estimado-por-actividad) usan los casos 2 y 3 cuando ambos permiten una estimación. Kanban tiene un solo dato aprovechable porque sus marcadores se superponen en el caso 3.

## Duración de las grabaciones

| Registro | Duración | Uso en los tiempos por tarea |
| --- | --- | --- |
| Caso 1 | 24:59 | Descripción; marcadores repetidos |
| Caso 2 | 16:38 | Incluido |
| Caso 3 | 11:18 | Incluido cuando el límite es legible |

Las duraciones se redondean al segundo. La observación es exploratoria y se basa en una grabación por caso.

## Pantallas y actividades observadas

La secuencia recorre las principales áreas de administración y termina en la configuración de una tienda. Los tiempos que aparecen abajo son referencias aproximadas de reproducción, no límites exactos de tarea.

| Pantalla o actividad | Qué se veía y qué hizo la persona |
| --- | --- |
| Inicio de sesión | Página de acceso con campos de credenciales y botón de ingreso. La atención se agrupa sobre el formulario central. En los casos 1 y 2 la pantalla de acceso aparece durante una parte extensa de la sesión; no se puede determinar la causa solo con el video. |
| Dashboard | Panel de indicadores, gráfico de ventas y tarjetas de resumen. En el caso 3 se observa alrededor del minuto 2; en el caso 2 aparece en la primera parte de la sesión. El cursor pasa del panel a la navegación para abrir otras secciones. |
| Sucursales | Listado de sucursales y ventana para agregar o editar un registro. En el caso 1 se ve el formulario cerca del minuto 5 y nuevamente en muestras posteriores; en los casos 2 y 3 se recorre esta área en la primera mitad. La mirada cae sobre los campos y la acción de guardar. |
| Kanban | Tablero de pedidos con tarjetas distribuidas por estado. El cursor se mueve entre columnas y controles de estado. El marcador del caso 3 coincide con el cierre de sucursales, de modo que no permite separar con seguridad la duración de Kanban. |
| Productos | Listado y formulario de producto con nombre, código, precio, categoría, descripción, existencias y asignación por sucursal. El caso 1 muestra además un selector de archivos; la mirada permanece sobre el bloque central del formulario y el cursor pasa entre campos y botones. |
| Reportes SQL | Consola de consultas, ayuda de esquema y tabla de resultados. Se observa el editor en los tres casos; las muestras incluyen los casos 1 y 2 cerca de los minutos 20 y 12, y el caso 3 cerca del minuto 8. La mirada se concentra en la consulta y los resultados. |
| Constructor de tienda | Vista previa de una tienda con portada, texto y tarjetas de productos, junto a un panel lateral de configuración. En los tres registros aparece hacia el final; el cursor alterna entre la vista y los controles de edición. |

En todas las pantallas el área central recibe la mayor concentración visual. La navegación lateral se usa para cambiar de módulo, pero en los mapas agregados su señal es menor que la del contenido activo.

## Tiempo estimado por actividad

La tabla resume los intervalos que se pudieron leer entre los marcadores de inicio y fin de cada tarea. El promedio se calcula con los casos 2 y 3; el caso 1 queda fuera porque sus marcas se repiten y no permiten fijar un único intervalo confiable.

| Actividad | Caso 2 | Caso 3 | Promedio estimado |
| --- | ---: | ---: | ---: |
| Autenticación | 2:05 | 1:56 | 2:01 (n=2) |
| Dashboard | 1:28 | 1:09 | 1:19 (n=2) |
| Sucursales | 1:16 | 2:12 | 1:44 (n=2) |
| Kanban | 1:22 | Sin límite claro | 1:22 (n=1) |
| Productos | 3:12 | 1:54 | 2:33 (n=2) |
| Reportes | 1:36 | 1:00 | 1:18 (n=2) |
| Constructor de tienda | 4:35 | 2:40 | 3:38 (n=2) |

### Cómo interpretar estos tiempos

El intervalo empieza en el marcador `TASK_START` asociado a la actividad y termina en el marcador con el nombre de esa tarea. Las cifras están redondeadas al segundo. En algunos casos hay unos segundos de transición entre marcadores; por eso son estimaciones y no tiempos de interacción activa medidos fotograma a fotograma.

Productos y el constructor de tienda son los intervalos más largos en el caso 2 y también aparecen entre las actividades de mayor duración en el caso 3. Esto puede reflejar más campos, configuración o exploración. Las grabaciones no permiten distinguir cuál de esas causas explica el tiempo.

El caso 1 también muestra formularios y edición de tienda, pero no se mezcla en el promedio para evitar que los marcadores repetidos inflen o reduzcan artificialmente los resultados. Para obtener un promedio de los tres casos conviene estandarizar una sola marca de inicio y otra de finalización por tarea.

## Conclusiones y oportunidades de mejora

Los tres registros muestran una navegación por módulos y una atención sostenida en el contenido central de cada pantalla. La interacción se vuelve más densa en formularios largos, consultas SQL y configuración del sitio. El constructor de tienda exige alternar entre una vista previa amplia y un panel de opciones, mientras que productos reúne varios campos y, en el caso 1, una selección de archivo.

### Recomendaciones

- Agrupar los campos de productos y sucursales por tarea, señalar los campos obligatorios y mostrar errores junto al campo correspondiente.
- Ofrecer confirmación visible después de guardar y conservar el contexto del listado para que la persona entienda si el registro se creó o se actualizó.
- En el constructor, mantener una relación clara entre cada control y la parte de la vista previa que modifica; considerar una indicación breve cuando se selecciona una sección.
- En reportes SQL, mantener visibles el esquema, la consulta y el resultado, y explicar de forma clara qué acción ejecuta o exporta cada botón.
- Registrar una marca única de inicio y cierre por tarea en futuras sesiones. Con el guion de tareas y el criterio de éxito se podrán comparar tiempos, errores y finalización de forma consistente.

## Límites de la lectura

Los mapas son acumulados y muestran zonas de atención, no fijaciones individuales ni duración exacta por elemento. El cursor evidencia acciones, pero no explica la intención. Tampoco se entregó un guion con el resultado esperado de cada tarea, así que los marcadores de fin no prueban por sí solos que el objetivo se completó correctamente.

Los promedios disponibles reúnen solo dos sesiones por actividad, salvo Kanban, que tiene una sola estimación. Deben leerse como referencias preliminares para orientar una revisión de usabilidad, no como resultados representativos de todos los usuarios.

## Base de observación

Grabaciones DM Hub caso 1, caso 2 y caso 3, con captura de pantalla, cursor, eye tracker y línea de eventos. Duraciones aproximadas de las sesiones: 24:59, 16:38 y 11:18, respectivamente.
