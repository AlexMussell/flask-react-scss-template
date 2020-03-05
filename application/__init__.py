from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from application.main.views import main_blueprint


app = Flask(__name__,
 static_folder = './templates/public',
 template_folder="./templates/static")

app.config.from_object('application.config.DevelopmentConfig')


db = SQLAlchemy(app)
migrate = Migrate(app, db)

app.register_blueprint(main_blueprint)
