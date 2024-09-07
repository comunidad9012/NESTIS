from flask import Flask
from core.db import init_db


def create_app():
    app = Flask(__name__)

    # Inicializar la base de datos
    with app.app_context():
        init_db()

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=8000)

