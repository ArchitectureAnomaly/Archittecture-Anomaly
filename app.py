from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Simulación de estado de pago
pago_confirmado = {"confirmado": False}

@app.route("/paypal-webhook", methods=["POST"])
def paypal_webhook():
    data = request.json
    if data.get("resource", {}).get("status") == "COMPLETED":
        pago_confirmado["confirmado"] = True
        print("✅ Pago confirmado recibido.")
    return "", 200

@app.route("/verificar-pago", methods=["GET"])
def verificar_pago():
    return jsonify(pago_confirmado)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)