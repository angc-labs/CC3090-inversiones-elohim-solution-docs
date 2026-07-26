---
sidebar_position: 7
---

# Tablero estilo Kanban 

Visualiza el proceso completo de las solicitudes de los clientes

## ¿Qué es?
Un board que ayuda visualizar la etapa actual en la que se encuentra las diferentes solicitudes de los clientes. 

Actualmente se encuentran 3 etapas diferentes: 
- Pendiente de pago: el pedido del cliente no realizo el pago virtual, puede que lo haga mas tarde, lo haga el pago contra entrega o bien cancele el pedido. 
- Pago verificado: el pedido del cliente ya fue pagado mediante stripe. 
- Despachado: el pedido del cliente ya fue entregado o bien empaquetado para enviarlo a otra direccion. 

## Para qué sirve
- Visualizar el estado actual de las solicitudes de los clientes dentro de las diferentes sucursales 
- Actualizar en cualquier momento el estado actual de la solicitud.
- Visualizar la cantidad de dinero que se encuentra en cada etapa mediante los contadores en la parte superior de la pantalla. 
- Buscar una solicitud especifica, al escribir el id del pedido en la barra de buscador.
- Filtrar la busqueda de solicitudes medainte sucursales existentes. 

## Casos de uso
1. **Revision de Auditoria**: al contar con los contadores de dinero que se encuentra en cada estado de los pedidos. 
2. **Busqueda inmediata de pedidos**: verificacion que realmente se registrara la venta dentro del sistema, por si existe una queja de clientes. 
3. **Organizar al equipo de inventario**: al tener una representacion visual del estado actual de cada pedido.  

## Integración con otras funciones
- Trabaja en conjunto con **Reportes** y **Dashboard**, ya que todo cambio que se realize en esta funcionalidad se reflejaran en las graficas diarias y mensuales de las sucursales. 
