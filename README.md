# Introducción

Este es el sistema de una corredora que vende seguros de auto. La plataforma actualmente se encarga de mantener actualizado el precio de sus productos basado en reglas explicadas más abajo.

## Los Productos:

- Todos los productos tienen un `sellIn` que representa la cantidad de días restantes para poder vender el producto.
- Todos los productos tienen un `price` que representa el precio del producto.
- Al final de cada día nuestro sistema actualiza ambos atributos para cada producto.

Esa es la parte simple, ahora la parte un poco más compleja:

- Cuando el producto expira (ya no hay días restantes en `sellIn`), `price` se reduce al doble de velocidad.
- El `price` del producto nunca es negativo.
- El producto **"Full Coverage"** aumenta el `price` en vez de reducirlo a medida que pasa el tiempo.
- El `price` de un producto nunca es más de 50.
- **"Mega Coverage"** es un producto legendario así que no baja de precio ni tiene expiración.
- **"Special Full Coverage"**, al igual que Full Coverage, aumenta el `price` a medida que `sellIn` llega a 0:
  - `price` aumenta en 2 cuando solo quedan 10 días o menos y por 3 cuando quedan 5 días o menos. Pero...
  - `price` baja directo a 0 cuando ya no quedan días y está expirado.

La compañía acaba de lanzar un nuevo tipo de producto, _Super Sale product_. Esto requiere una actualización a nuestro sistema:

- **"Super Sale"** Baja el `price` al doble de la velocidad de los productos normales.

Puedes hacer cualquier cambio al metodo `updatePrice`, también agregar todo el código que necesites incluyendo archivos y
clases siempre que todo continúe funcionando correctamente. Sin embargo _NO DEBES_ alterar el constructor de la clase `Product`.

## Últimas aclaraciones

- Un producto nunca puede tener su `price` por encima de 50, sin embargo **"Mega Coverage"** es un
  producto legendario y su `price` es fijo en 80, nunca cambia.

- El archivo `products_after_30_days.txt` muestra el comportamiento de los productos en un período de 30 días.
