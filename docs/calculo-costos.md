---
id: calculo-costos
title: Cálculo de costos
sidebar_label: Cálculo de costos
description: Estimación del esfuerzo y duración de desarrollo de DM Hub mediante Puntos de Caso de Uso, y costos reales de un proyecto universitario sin fines de lucro.
---

# Cálculo de costos del proyecto

## Resumen ejecutivo

Para estimar el **esfuerzo y la duración** de **DM Hub** se utilizó el método de
**Puntos de Caso de Uso (UCP)**. Este método resulta apropiado porque el
sistema está descrito mediante actores, casos de uso y requisitos técnicos como
seguridad, concurrencia, rendimiento e integraciones externas.

DM Hub es un **proyecto universitario sin fines de lucro**: no se cobra por el
trabajo de desarrollo ni por el uso del sistema. Por esta razón, el UCP se usa
únicamente para planificar tiempos y organizar al equipo, y **no se traduce en
un costo de mano de obra**. El único costo real del proyecto es el de las
herramientas de desarrollo y el de la infraestructura de producción.

| Indicador | Resultado |
| --- | ---: |
| Puntos de Caso de Uso ajustados | **285.40 UCP** |
| Esfuerzo estimado | **5,708 horas-persona** |
| Equipo considerado | **6 personas** |
| Duración teórica a 20 h/semana por persona | **47.6 semanas** |
| Costo de mano de obra | **US$ 0.00** (proyecto académico, no remunerado) |
| Costo de herramientas de desarrollo | **hasta US$ 20.00** (suscripción de IDE con IA) |
| Costo de producción | **hasta US$ 15.00/mes** (Google Cloud) |
| Costo del dominio | **US$ 5.00** (pago único) |

## Alcance considerado

El cálculo cubre las funciones principales que actualmente conforman el
proyecto:

- autenticación, sesiones y recuperación de acceso;
- administración de clientes, personal, roles y permisos;
- gestión de tiendas, sucursales, productos e inventario;
- constructor visual y publicación del storefront;
- catálogo, búsqueda, carrito y proceso de compra del cliente;
- pagos contra entrega y pagos electrónicos mediante Stripe;
- reservaciones, pedidos y tablero Kanban;
- panel de indicadores, reportes y exportación de datos;
- configuración de integraciones con Stripe, Cloudinary y SMTP;
- operación multi-tenant mediante dominio o subdominio de la tienda.

No se incluyen el mantenimiento posterior a la entrega, nuevas funciones,
impuestos ni comisiones por transacción. Sí se incluye el consumo mensual
estimado de infraestructura en producción, ya que representa el único costo
recurrente real del proyecto.

## Método de estimación del esfuerzo

La fórmula general empleada es:

```text
UUCP = UAW + UUCW
TCF  = 0.6 + (0.01 × TF)
ECF  = 1.4 - (0.03 × EF)
UCP  = UUCP × TCF × ECF
Esfuerzo = UCP × factor de productividad
```

Donde:

- **UAW** es el peso de los actores sin ajustar;
- **UUCW** es el peso de los casos de uso sin ajustar;
- **TF** es la suma ponderada de los factores técnicos;
- **EF** es la suma ponderada de los factores ambientales;
- el factor de productividad adoptado es de **20 horas por UCP**.

Este cálculo se conserva porque sigue siendo útil para **planificar el
cronograma y distribuir el trabajo entre el equipo**, aunque no se use para
fijar un precio de venta ni un salario.

## 1. Peso de actores

Los actores que utilizan una interfaz gráfica se consideran complejos y las
integraciones por API se consideran simples.

| Tipo de actor | Actores identificados | Cantidad | Peso | Subtotal |
| --- | --- | ---: | ---: | ---: |
| Complejo | Cliente, cajero, administrador y superadministrador | 4 | 3 | 12 |
| Simple | Stripe, Cloudinary y SMTP | 3 | 1 | 3 |
|  | **UAW** |  |  | **15** |

## 2. Peso de casos de uso

La clasificación empleada asigna un peso de 5 a un caso simple, 10 a uno medio
y 15 a uno complejo.

| Caso de uso | Complejidad | Peso |
| --- | ---: | ---: |
| Autenticar usuario y recuperar acceso | Media | 10 |
| Administrar usuarios, equipo, roles y permisos | Compleja | 15 |
| Administrar tiendas y sucursales | Compleja | 15 |
| Administrar productos y categorías | Compleja | 15 |
| Controlar inventario por sucursal | Compleja | 15 |
| Consultar panel de indicadores | Media | 10 |
| Crear, filtrar y exportar reportes | Compleja | 15 |
| Gestionar pedidos y reservaciones en Kanban | Compleja | 15 |
| Configurar servicios externos | Media | 10 |
| Diseñar y publicar la tienda con el constructor visual | Compleja | 15 |
| Registrar y administrar el perfil del cliente | Media | 10 |
| Explorar y buscar productos en el catálogo | Media | 10 |
| Administrar el carrito de compra | Media | 10 |
| Completar una compra contra entrega | Media | 10 |
| Completar una compra y administrar métodos de pago con Stripe | Compleja | 15 |
| Consultar historial de compras y reservaciones | Media | 10 |
| Previsualizar la tienda | Media | 10 |
| Resolver y acceder a una tienda por su subdominio | Media | 10 |
|  | **UUCW** | **220** |

En total se identificaron 10 casos medios y 8 complejos:

```text
UUCW = (10 × 10) + (8 × 15) = 220
UUCP = UAW + UUCW = 15 + 220 = 235
```

## 3. Factores técnicos

Cada factor se califica de 0 a 5. La calificación se multiplica por el peso
estándar del método UCP.

| Factor técnico | Peso | Valor | Resultado |
| --- | ---: | ---: | ---: |
| Sistema distribuido | 2.0 | 4 | 8.0 |
| Objetivos de tiempo de respuesta | 1.0 | 4 | 4.0 |
| Eficiencia para el usuario final | 1.0 | 4 | 4.0 |
| Procesamiento interno complejo | 1.0 | 4 | 4.0 |
| Código reutilizable | 1.0 | 4 | 4.0 |
| Facilidad de instalación | 0.5 | 3 | 1.5 |
| Facilidad de uso | 0.5 | 4 | 2.0 |
| Portabilidad | 2.0 | 4 | 8.0 |
| Facilidad de mantenimiento | 1.0 | 4 | 4.0 |
| Concurrencia | 1.0 | 4 | 4.0 |
| Seguridad | 1.0 | 5 | 5.0 |
| Acceso de terceros | 1.0 | 3 | 3.0 |
| Necesidades de capacitación | 1.0 | 2 | 2.0 |
|  |  | **TF** | **53.5** |

```text
TCF = 0.6 + (0.01 × 53.5) = 1.135
```

La seguridad recibe la valoración más alta debido al aislamiento por tienda,
la autenticación, el control de acceso por roles y el manejo de pagos.

## 4. Factores ambientales

Estos factores representan las condiciones y experiencia del equipo. Los
factores con peso negativo aumentan el esfuerzo cuando tienen una calificación
alta.

| Factor ambiental | Peso | Valor | Resultado |
| --- | ---: | ---: | ---: |
| Familiaridad con el proceso de desarrollo | 1.5 | 3 | 4.5 |
| Experiencia en aplicaciones similares | 0.5 | 2 | 1.0 |
| Experiencia en orientación a objetos | 1.0 | 3 | 3.0 |
| Capacidad del analista líder | 0.5 | 3 | 1.5 |
| Motivación del equipo | 1.0 | 4 | 4.0 |
| Estabilidad de requisitos | 2.0 | 2 | 4.0 |
| Dedicación parcial | -1.0 | 4 | -4.0 |
| Dificultad del stack tecnológico | -1.0 | 3 | -3.0 |
|  |  | **EF** | **11.0** |

```text
ECF = 1.4 - (0.03 × 11) = 1.07
```

La dedicación parcial refleja el contexto académico del proyecto, en el cual
el equipo combina el desarrollo con otras materias y responsabilidades. La
dificultad del stack considera la combinación de Next.js, ASP.NET Core,
PostgreSQL, Docker, multi-tenancy y servicios externos.

## 5. UCP y esfuerzo total

```text
UCP = 235 × 1.135 × 1.07
UCP = 285.39575 ≈ 285.40

Esfuerzo = 285.39575 × 20 horas/UCP
Esfuerzo = 5,707.915 ≈ 5,708 horas-persona
```

Para un equipo de seis integrantes:

```text
Horas por integrante = 5,708 / 6 = 951.3 horas
Duración a 20 h/semana = 5,708 / (6 × 20) = 47.6 semanas
Duración a 40 h/semana = 5,708 / (6 × 40) = 23.8 semanas
```

Estas duraciones son equivalentes teóricos y se usan solo para planificación.
La duración real puede aumentar por dependencias entre tareas, revisiones,
disponibilidad del equipo y cambios de alcance.

## 6. Distribución del esfuerzo

La distribución conserva la implementación como la actividad principal, pero
reserva tiempo explícito para calidad, diseño y gestión. Como el proyecto no
es remunerado, esta tabla se presenta únicamente en horas, sin asignar una
tarifa por hora.

| Fase | Porcentaje | Horas |
| --- | ---: | ---: |
| Requisitos y análisis | 10 % | 571 |
| Diseño y arquitectura | 15 % | 856 |
| Implementación | 40 % | 2,283 |
| Pruebas y aseguramiento de calidad | 20 % | 1,142 |
| Despliegue, documentación y capacitación | 10 % | 571 |
| Gestión del proyecto | 5 % | 285 |
| **Total** | **100 %** | **5,708** |

## 7. Costos reales del proyecto

A diferencia de un proyecto comercial, DM Hub no incurre en costos de mano de
obra: el equipo trabaja sin cobrar, como parte de su formación académica. Los
únicos costos reales son las herramientas de desarrollo y la infraestructura
necesaria para tener el sistema en producción durante el periodo del curso.

### 7.1 Herramientas de desarrollo

| Herramienta | Propósito | Costo máximo |
| --- | --- | ---: |
| IDE con asistencia de IA (p. ej. Antigravity) | Desarrollo y aceleración del codeo | US$ 20.00 |

Este es un costo opcional: el equipo puede optar por herramientas gratuitas
(por ejemplo, extensiones de IA con capa gratuita) y no incurrir en gasto
alguno. US$ 20.00 se toma como el techo, correspondiente a una suscripción
mensual de un IDE con IA de pago.

### 7.2 Infraestructura de producción

| Concepto | Proveedor | Costo | Periodicidad |
| --- | --- | ---: | --- |
| Hosting, base de datos y servicios en la nube | Google Cloud | hasta US$ 15.00 | mensual |
| Dominio | Registrador de dominios | US$ 5.00 | pago único |

El costo de Google Cloud se estima como un techo mensual aprovechando la capa
gratuita del proveedor (por ejemplo, Cloud Run, Cloud SQL en configuración
mínima y almacenamiento reducido); en la práctica podría ser menor si el
consumo se mantiene dentro de los límites gratuitos.

### 7.3 Presupuesto total del proyecto

| Concepto | Cálculo | Monto |
| --- | --- | ---: |
| Mano de obra | 5,708 h × US$ 0/h | US$ 0.00 |
| Herramientas de desarrollo | Suscripción de IDE con IA (máximo) | US$ 20.00 |
| Dominio | Pago único | US$ 5.00 |
| Producción (1 mes) | Google Cloud (máximo) | US$ 15.00 |
| **Costo total estimado del proyecto (primer mes)** |  | **US$ 40.00** |

Para meses adicionales de operación en producción, una vez pagado el dominio,
el costo recurrente máximo estimado es de **US$ 15.00/mes** (solo Google
Cloud).

## Riesgos que pueden modificar la estimación

- cambios en los requisitos del constructor visual o del flujo de compras;
- requisitos adicionales de cumplimiento y seguridad para pagos;
- mayor complejidad en el aislamiento de datos entre tiendas;
- migración o depuración de datos existentes;
- pruebas de carga, accesibilidad o compatibilidad no contempladas;
- que el consumo real en Google Cloud supere la capa gratuita y el techo de
  US$ 15.00 mensuales estimado;
- que el equipo decida usar una herramienta de IA de pago distinta, con un
  costo distinto al techo de US$ 20.00 considerado.

## Conclusión

Aplicando UCP al alcance actual, DM Hub requiere aproximadamente **5,708
horas-persona** de trabajo en equipo, útiles únicamente para planificar el
cronograma. Como proyecto universitario sin fines de lucro, no existe costo de
mano de obra: el gasto real del proyecto se limita a **hasta US$ 20.00** en
herramientas de desarrollo, **US$ 5.00** de pago único por el dominio y **hasta
US$ 15.00 al mes** en infraestructura de Google Cloud para mantener el sistema
en producción.

La estimación de esfuerzo debe actualizarse cuando cambie el alcance,
ajustando actores, casos de uso y factores técnicos o ambientales. Los costos
reales deben actualizarse si cambia la herramienta de IA elegida o el consumo
real de infraestructura en Google Cloud.