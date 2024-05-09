# Evaluación de modelo API Gateway para la gestión de pagos digitales para PyMEs en México.

Las industrias, organizaciones y empresas modernas operan con sistemas informáticos para gestionar clientes y procesar pagos, una necesidad fundamental en el entorno comercial actual. En México, las PyMEs, enfrentan el desafío de adoptar un sistema especializado y centralizado que administre eficientemente sus operaciones. Esta investigación explora un modelo basado en una API gateway que sea una alternativa al proceso complejo de integración de cada pasarela de pagos. Especificamente busca solucionar el tema de centralizar los diferentes medios de pago que usualmente tiene una PyME . Para probar este modelo como factible, se realizará un caso de estudio en el que se ejecute un proceso de procesamiento de pagos con este modelo de arquitectura de manera paralela que un modelo tradicional.

## Ejemplo de uso de la API Gateway

### Solicitud a Stripe

Para realizar un cargo a través de Stripe, sigue esta especificación:

**URL del Endpoint:** `http://dominio.com/stripe/pago`
**URL del pruebas:** `http://localhost:3000/stripe/pago`

**Método:** POST

**Cuerpo de la Solicitud:**

```json
{
  "token": "tok_visa",
  "monto": 2000,
  "moneda": "MXN",
  "descripcion": "Descripción del cargo"
}
```


### Solicitud a Conekta

Para realizar un cargo a través de conekta, sigue esta especificación:

**URL del Endpoint:** `http://dominio.com/conekta/pago`
**URL del pruebas:** `http://localhost:3000/conekta/pago`

**Método:** POST

**Cuerpo de la Solicitud:**

```json
{
  "token": "tok_visa",
  "monto": 2000,
  "moneda": "MXN",
  "descripcion": "Descripción del cargo"
}
```
### Solicitud a Openpay

Para realizar un cargo a través de openpay, sigue esta especificación:

**URL del Endpoint:** `http://dominio.com/openpay/pago`
**URL del pruebas:** `http://localhost:3000/openpay/pago`

**Método:** POST

**Cuerpo de la Solicitud:**

```json
{
  "token": "tok_visa",
  "monto": 2000,
  "moneda": "MXN",
  "descripcion": "Descripción del cargo"
}
```

### Ejemplo de Query desde frontend JavaScript:

```javascript
fetch('http://tu-dominio.com/stripe/pago', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: "tok_visa",
    monto: 2000,
    moneda: "MXN",
    descripcion: "Descripción del cargo"
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```



