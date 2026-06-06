"""
Portfolio Landing Page - Flask Backend
Author: Prabowo Boemi Wijaya
Description: Serves the single-page portfolio application.
"""

import os
from flask import Flask, render_template

# ---------------------------------------------------------------------------
# Flask app configuration
# ---------------------------------------------------------------------------
app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__), "templates"),
    static_folder=os.path.join(os.path.dirname(__file__), "static"),
)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.route("/")
def index():
    """Render the single-page portfolio."""
    return render_template("index.html")


# ---------------------------------------------------------------------------
# Development server entry-point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)