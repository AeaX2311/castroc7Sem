# Metodos y codigos de respuesta HTTP
## Alan Abiud Castro Cruz
<br/>

### Metodos HTTP
HTTP utiliza diversos metodos previamente definidos, que son indispensables para cooperar con peticiones, determinando asi que accion se va a realizar a determinado recurso. Es gracias a estos metodos que obtenemos los recursos necesarios.

#### GET
El método GET ***solicita*** una representación de un recurso específico.

#### POST
El método POST se utiliza para ***enviar*** una entidad a un recurso en específico.

#### PUT
El modo PUT ***reemplaza*** todas las representaciones actuales del recurso de destino con la carga útil de la petición.

#### DELETE
El método DELETE ***borra*** un recurso en específico.

#### CONNECT
El método CONNECT ***establece un túnel hacia el servidor*** identificado por el recurso.

#### OPTIONS
El método OPTIONS ***describe*** las opciones de comunicación para el recurso de destino.

#### TRACE
El método TRACE realiza una ***prueba de bucle de retorno de mensaje*** a lo largo de la ruta al recurso de destino.

#### PATCH
El método PATCH es utilizado para ***aplicar modificaciones parciales*** a un recurso.

#### HEAD
El método HEAD pide una ***respuesta*** idéntica a la de una petición GET, pero ***sin el cuerpo de la respuesta***.

### Codigos de respuesta
Las peticiones suelen arrojar algun codigo de respuesta identificado por un numero, cuyo valor fijo esta establecido, y determina el estado en el que fue implementada la respuesta.

| Código de error | Descripción |
| --------------- | ----------- |
| 200 | Aceptar.
| 400 | Argumento no válido o solicitud incorrecta
| 401 | Acceso no autorizado.
| 403 | Acceso prohibido Verifica Cloud Console y el archivo de credenciales para asegurarte de que el servicio se habilitó correctamente.
| 404 | No se encontró el recurso.
| 409 | Se intentó crear un recurso que ya existe o se anuló.
| 429 | Demasiadas solicitudes. El cliente superó las restricciones de la cuota asignada. Consulta Cuotas y límites para obtener más información sobre tu cuota.
| 499 | La operación se canceló.
| 500 | Error del servidor interno
| 501 | La operación no se implementó, no está habilitada o no se admite.
| 503 | Servicio no disponible. Vuelve a intentarlo más tarde.
| 504 | Tiempo de espera de la solicitud de la puerta de enlace

### Referencias
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- https://cloud.google.com/talent-solution/job-search/docs/http-response-codes?hl=es-419
