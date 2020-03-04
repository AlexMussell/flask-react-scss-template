from flask import Flask
from flask_migrate import Migrate, MigrateCommand
from application import db, app
from application.models import User
from flask_sqlalchemy import SQLAlchemy


app.config.from_object('application.config.DevelopmentConfig')

migrate = Migrate(app, db)


@app.cli.command()
def create_db():
	db.create_all()

@app.cli.command()
def drop_db():
	db.drop_all()




if __name__ == "__main__":
    app.run()
