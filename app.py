from flask import Flask
from flask_migrate import Migrate, MigrateCommand
from application import db, app
from application.models import User
from flask_sqlalchemy import SQLAlchemy
from flask.cli import AppGroup

migrate = Migrate(app, db)
develop = AppGroup('develop')

@develop.command("create-db")
def create_db():
	db.create_all()

@develop.command("drop-db")
def drop_db():
	db.drop_all()

app.cli.add_command(develop)

if __name__ == "__main__":
    app.run()
