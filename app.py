from flask import Flask
from application import db, app
from flask.cli import AppGroup


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
