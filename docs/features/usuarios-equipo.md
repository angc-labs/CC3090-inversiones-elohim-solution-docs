---
sidebar_position: 6
---

# Gestión de Usuarios y Equipo

## ¿Qué es?
El módulo de usuarios y equipo te permite invitar, autorizar y controlar quién tiene acceso a tu tienda, asignando permisos específicos según el rol de cada persona.

## Para qué sirve
- Invitar miembros del equipo con email
- Asignar roles específicos (Admin, Vendor, Cashier)
- Controlar qué puede hacer cada persona
- Auditar acciones de usuarios en el sistema
- Revocar acceso cuando alguien se va
- Gestionar permisos por módulo/funcionalidad

## Casos de uso
1. **Dueño + 1 Administrador**: Repartir responsabilidades de gestión
2. **Vendedores múltiples**: Cada uno gestiona sus propios productos
3. **Equipo de atención**: Cajeros que solo pueden procesar ventas
4. **Acceso especializado**: Contadores que solo ven reportes financieros
5. **Empresas grandes**: Estructura jerárquica con múltiples niveles de autoridad

## Roles disponibles

### Admin
- Acceso total a toda la plataforma
- Puede crear, editar y eliminar usuarios
- Acceso a configuración y reportes
- Ideal para: Dueño, Gerente general

### Vendor
- Gestionar productos propios
- Ver reportes de sus ventas
- No puede cambiar configuración global
- Ideal para: Vendedores, Proveedores internos

### Cajero
- Procesar transacciones de venta
- Ver historial de cobros
- No puede crear productos ni cambiar precios
- Ideal para: Personal de caja, Vendedores de punto de venta

## Características clave
- **Invitación por email**: Enviar links de acceso rápidamente
- **Asignación de roles**: Define exactamente qué puede hacer cada usuario
- **Historial de actividad**: Auditoría de qué hizo cada persona y cuándo
- **Revocación instantánea**: Desactivar acceso al instante
- **2FA opcional**: Autenticación de dos factores para cuentas sensibles

## Integración con otras funciones
- Los Admins pueden configurar **Stripe** y **Cloudinary**
- Los Vendors ven sus propios datos en **Reportes**
- Los Cashiers procesan **Pagos** y actualizan **Inventario**
- Todas las acciones quedan registradas en **Historial de Cambios**

## Mejores prácticas
1. **Principio de menor privilegio**: Dale a cada usuario solo lo que necesita
2. **Roles claros**: Define bien quién es Admin vs Vendor vs Cashier
3. **Auditoría regular**: Revisa quién tiene acceso cada mes
4. **Documentación**: Documenta por qué cada persona tiene su rol

## ¿Cómo acceder?
Ve a **Usuarios** en la barra lateral de tu panel administrativo.

Para pasos detallados sobre invitar miembros, [consulta la guía completa](/docs/getting-started/primeros-pasos#8️⃣-invitar-usuarios-al-equipo).

