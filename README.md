# Architecture Anomaly - Backend Flask

Este backend permite manejar la verificación de pagos para asesorías usando PayPal, y muestra automáticamente el formulario de agendamiento una vez el pago se haya confirmado.

## 📦 Endpoints

- `POST /paypal-webhook`  
  Endpoint donde PayPal enviará la notificación de pago (requiere configuración en PayPal Developer).

- `GET /verificar-pago`  
  Devuelve `{ "confirmado": true | false }` para que el frontend sepa si mostrar el formulario de agenda.

## 🚀 Despliegue Recomendado

- [Render](https://render.com)
- [Railway](https://railway.app)

## ⚙️ Requisitos

- Python 3.8+
- Archivo `Procfile` con `web: gunicorn app:app`
- Dependencias listadas en `requirements.txt`