from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from application.main.views import main_blueprint


app = Flask(__name__)

app.config.from_object('application.config.DevelopmentConfig')

db = SQLAlchemy(app)

app.register_blueprint(main_blueprint)
