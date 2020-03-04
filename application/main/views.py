from flask import render_template, Blueprint

main_blueprint = Blueprint('main', __name__)

@main_blueprint.route('/')
def hello_world():
    return 'Hello World!'


