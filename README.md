# VmShoppingUI

VM Shopping Api es un portal de para procesar pagos Web Checkout en PlacetoPay.

## Ejecución del proyecto

Ejecutar `ng serve` en la raíz del proyecto. Navegar a `http://localhost:4200/`. 

## Configuración

Este proyecto realiza peticiones al siguiente [proyecto](https://github.com/varnamartha/vm-shopping-api) por lo que algunas variables de entorno deben ser configuradas antes de su ejecución a una instancia de diho proyecto en ejecución

Fichero donde se debe cambiar

1. https://github.com/varnamartha/vm-shopping-ui/blob/develop/src/environments/environment.prod.ts
2. https://github.com/varnamartha/vm-shopping-ui/blob/develop/src/environments/environment.ts
3. Variable appUrl
