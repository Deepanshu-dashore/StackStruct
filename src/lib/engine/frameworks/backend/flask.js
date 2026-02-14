import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves base structure for a Flask backend.
 */
export function flaskFramework(config) {
  return [
    getFolder("app", [
      getFile(
        "__init__.py",
        "from flask import Flask\nfrom flask_cors import CORS\n\ndef create_app():\n    app = Flask(__name__)\n    CORS(app)\n    \n    from .routes import api\n    app.register_blueprint(api, url_prefix='/api')\n    \n    return app",
      ),
      getFile(
        "routes.py",
        "from flask import Blueprint, jsonify\n\napi = Blueprint('api', __name__)\n\n@api.route('/health')\ndef health():\n    return jsonify({'status': 'ok', 'message': 'API is running'})",
      ),
    ]),
    getFile(
      "run.py",
      "from app import create_app\n\napp = create_app()\n\nif __name__ == '__main__':\n    app.run(port=5000, debug=True)",
    ),
    getFile("requirements.txt", "flask\nflask-cors"),
    getFile(".env", "FLASK_APP=run.py\nFLASK_ENV=development"),
    getFile(".gitignore", "venv/\n__pycache__/\n.env\n*.pyc"),
  ];
}
