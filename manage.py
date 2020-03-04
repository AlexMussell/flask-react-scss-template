from flask import Flask

from flask_script import Manage
from flask_migrate import Migrate, MigrateCommand
from application import app, db
from application.models import User


migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

migrate = Migrate(app, db)

@manager.command
def create_db():
	db.create_all()

@manager.command
def drop_db():
	db.drop_all()


if __name__ == "__main__":
    manager.run()
