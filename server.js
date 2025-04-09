const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Simulación de almacenamiento en memoria
let pagoConfirmado = false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/paypal-webhook', (req, res) => {
  const { resource } = req.body;

  // Validar si el pago es completo
  if (resource && resource.status === 'COMPLETED') {
    pagoConfirmado = true;
    console.log('✅ Pago recibido y confirmado.');
  }

  res.sendStatus(200);
});

app.get('/verificar-pago', (req, res) => {
  res.json({ confirmado: pagoConfirmado });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
