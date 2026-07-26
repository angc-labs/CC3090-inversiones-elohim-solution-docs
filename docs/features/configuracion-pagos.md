---
sidebar_position: 3
---

# Configuración de Pagos

## ¿Qué es?
La configuración de pagos es el módulo que conecta tu tienda con **Stripe**, una de las plataforma de procesamiento de pagos más segura en la actualidad. 

## Para qué sirve
- Procesar pagos con tarjetas de crédito y débito
- Garantizar seguridad PCI-DSS en todas las transacciones
- Automatizar confirmaciones de pago instantáneas
- Rastrear todas las transacciones en tiempo real
- Acceder a reportes detallados de ingresos por canal de pago

## Casos de uso
1. **Tienda online tradicional**: Aceptar tarjetas de clientes nacionales e internacionales
2. **Reservas pagadas**: Cobrar depósitos o pagos totales al reservar productos
3. **Pagos recurrentes**: Configurar suscripciones o pagos periódicos (planes futuros)
4. **Múltiples sucursales**: Cada rama puede tener su propia configuración de Stripe si lo requiere

## Características clave
- **Transacciones instantáneas**: Confirmación de pago en menos de 2 segundos
- **Reembolsos automáticos**: Procesar devoluciones directamente desde el panel
- **Historial de transacciones**: Auditoría completa de cada pago
- **Webhooks**: Actualizaciones automáticas cuando cambia el estado de un pago

## Integración con otras funciones
- Se sincroniza automáticamente con **Reportes** para análisis de ingresos
- Los pagos se vinculan a **Historial de Compras** del cliente
- Genera órdenes automáticas en **Inventario** al completarse el pago
- Notifica al **Equipo** cuando hay transacciones sospechosas

## ¿Cómo acceder?
Ve a **Configuración** → **Pasarela de Pago (Stripe)** en tu panel administrativo.

Para pasos detallados, [consulta la guía de configuración inicial](/docs/getting-started/primeros-pasos#b-configurar-métodos-de-pago).

