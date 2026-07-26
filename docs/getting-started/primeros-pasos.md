---
sidebar_position: 1
---

# Primeros Pasos - Administradores

Guía completa para configurar tu tienda por primera vez.

## 1️⃣ Crear tu Cuenta

### Paso 1: Ir a la página de registro
1. Navega a [ruta pendiente]
2. Selecciona el apartado "No tienes cuenta? **Registrate**"

### Paso 2: Completar formulario
```
Email: tu@email.com (Ejemplo: @gmail, @outlook, @hotmail)
Nombre completo: Tu Nombre y Apellido 
Tienda: Nombre de tu negocio
Contraseña: (Segura: 8+ caracteres)
```

### Paso 3: Confirmar email
- Revisa tu bandeja de entrada
- Haz clic en el enlace de confirmación
- ¡Tu cuenta está lista!

**Nota**: Actualmente esta verificacion esta desactivada por fines de desarollo. 

---

## 2️⃣ Acceder al Panel Administrativo

### Ingresando al Panel
1. Con el correo y contraseña ingresadas, inicia sesión en [ruta pendiente] 
2. Verás el **Dashboard** (resumen de tu tienda)
3. En la barra lateral izquierda tienes  la siguiente lista de opciones

```
Panel Administrativo
├── 📊 Tablero (Dashboard)
├── 🏪 Sucursales (Branches)
├── 📋 Reservaciones (Reservations)
├── 💳 Pagos (Payments)
├── ⏹️ Tablero Kanban (Kanban board)
├── 👥 Clientes (Users)
├── 📦 Productos (Products)
├── 📈 Reportes (Reports)
├── 👤 Usuarios (User Management)
├── 🎨 Constructor (Visual Builder)
└── ⚙️ Configuración (Settings)
```

---

## 3️⃣ Configuración Inicial

### A. Información de tu Tienda 
1. Ve a **Configuración** → **Información de la Tienda**
2. Completa:
   - Nombre oficial
   - Identificador (Slug/Subdominio)
   - Logo mediante URL
   - Dominio de prueba

### B. Configurar Métodos de Pago

1. Ve a **Configuración** → **Pasarela de Pago (Stripe)**
2. Conecta **Stripe**:
   - Crea cuenta en [stripe.com](https://stripe.com)
   - Obtén tus "API Keys"
   - Copia y pega en los apartados (Stripe public key & Stripe private key)
3. ¡Tu tienda ya esta lista para recibir pagos mediante tarjetas de credito!

### C. Configurar Almacenamiento de Imágenes

1. Ve a **Configuración** → **Almacenamiento de Multimedia**
2. Conecta **Cloudinary**:
   - Crea cuenta en [cloudinary.com](https://cloudinary.com)
   - Copia tu "Cloud Name" y pegalo en el apartado (Cloudinary Cloud Name)
   - Copia tus credenciales de Cloudinary y pegalas en el apartado (Cloudinary API Key & Cloudinary API Secret)

### D. Configurar Email

1. Ve a **Configuración** → **Configuracion de correo Emisor SMTP**
2. Ingresa los siguientes datos:
   - **Usuario**: tu@email.com
   - **Contraseña**: tu-contraseña

Esta configuracion se utiliza para automatizar el envio de codigos de recuperacion de contraseña de los clientes de forma automatica.

**Nota**: Actualmente esta funcionalidad esta disponible con correos **@gmail**, **@outlook** y **@hotmail** los cuales tienen activado la verificacion de dos pasos. 

---

## 4️⃣ Crear tu Primer Producto

### Paso 1: Ir a Productos
1. Dirigete al apartado **Productos** en la barra lateral
2. Haz clic en **"+ Nuevo Producto"**

### Paso 2: Información Básica
Completa:
- **Nombre**: "Ej: Harina Suave Premium"
- **Codigo SKU**: "Ej: Har-SUA-01"
- **Precio Detalle**: Precio estandar
- **Precio Mayoreo**: Precio para grandes compras 
- **Categoria**: "Ej: Cereales y derivados"
- **Stock Minimo**: Stock inicial del producto
- **Imagen URL**: URL obtenida mediante Cloudinary
- **Descripción del producto**: "Ej: Detalles de prestacion, empaque, preso neto"
- **Stock por Sucursal**: listado de todas las sucursales creadas para distribuir el stock disponible. **Importante**: el stock repartido en este apartado debe ser menor o igual al stock minimo. 
- **Publicar a clientes**: permite mostrar el producto de inmediato al catalogo de tus clientes, puede ser seleccionado mas tarde. 

### Paso 3: Guardar
- Haz clic en **"Guardar Producto"**
- ¡Tu producto ya está visible en la tienda! 

---

## 5️⃣ Personalizar tu Tienda (Constructor Visual)

### Acceder al Constructor
Ve a **Configuración** → **Constructor Tienda**

### Secciones Disponibles
El constructor te permite editar:
- **Hero** (imagen grande de portada)
- **Categorías destacadas**
- **Productos en promoción**
- **Newsletter**
- **Footer** (pie de página)

**NOTA**: Se planea expandir la cantidad de elementos a editar en el futuro. 

### Ejemplo: Cambiar Color Principal
1. Haz clic en la sección "Colores"
2. Elige tu color primario (azul, rojo, verde, etc.)
3. **Preview en tiempo real** en la derecha
4. Haz clic en "Guardar"

---

## 6️⃣ Crear Sucursales (Opcional)

Si tienes múltiples ubicaciones:

1. Ve al aparatado de **Sucursales**
2. Haz clic en **"+ Nueva Sucursal"**
3. Completa:
   - Nombre ("Ej: Sucursal Central Oeste")
   - Dirección: ("Ej: Calzada Roosevelt 22-43)
   - Teléfono de contacto: ("Ej: 2440-4321")
4. **Guardar**

Tras crear la nueva sucursal, aparecera automaticamente en el listado de sucursales en el apartado edicion de stock de productos. 

---

## 7️⃣ Invitar Equipo (Usuarios)

Si tienes empleados:

1. Ve a **Usuarios**
2. Haz clic en **"Invitar Usuario"**
3. Completa:
   - Nombre completo
   - Correo electronico
   - Contraseña inicial
   - Rol:
     - **Administrador**: Acceso total
     - **Vendedor**: Gestión de productos
     - **Cajero**: Procesar órdenes
4. Enviar invitación

El empleado recibirá un email para activar su cuenta.

**Nota**: La notificacion por email de los usuarios esta desabilitada por fines de desarrollo. 

---

## 8️⃣ Entender el Dashboard

### Métricas Principales

| Métrica | Qué Significa |
|---------|--------------|
| **Ventas Hoy** | Dinero generado en el día |
| **Pedidos Pendientes** | Órdenes de tipo contra entrega |
| **Productos** | Total en tu catálogo |
| **Clientes** | Usuarios registrados |

### Gráficos
- **Ventas por hora**: Tendencia de ingresos
- **Productos populares**: Más vendidos
- **Stock critico**: Productos con baja cantidad de existencias
- **Ultimas ventas**: Listado de las ventas mas recientes

---

## Próximo Paso

[Aprende a Utilizar el tablero Kanban](../features/tableroKanban.md)

---

**¡Tu tienda está lista!**
