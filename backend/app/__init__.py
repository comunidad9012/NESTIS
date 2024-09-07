from flask import Flask, Request, jsonify, request


def create_app(test_config=None):
    # crear y configurar aplicacion
    app = Flask(__name__)

    if test_config is None:
        # cargar configuracion de la instancia en produccion
        pass
    else:
        # cargar configuracion de testeo
        pass

    # endpoint base
    @app.route("/api")
    @app.route("/")
    def root():
        query = request.args

        return jsonify(msg="NESTIS API funcionando", query=query)

    return app


app = create_app()

if __name__ == "__main__":
    # para situaciones de depuracion
    app.run(
        host="0.0.0.0",
        debug=True,
        port=80,
    )
