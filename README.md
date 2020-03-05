# flask-react-webpack-template
A barebones skeleton for a Flask, ReactJS, Webpack, and NPM frontend stack.

Under Construction.

To include: Docker

## Before
First create virtualenv, virtualenv is preinstalled with python now, but I prefer the flexibility of [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/). Assuming you have this installed, `mkvirtualenv <name>` then install requirements
`pip3 install -r requirements.txt`

## Flask
Uses Flask CLI and not manager. Run with `flask run`, create custom commands in `app.py` to manage your application locally. Development configuration specifices an sqlite3 database for local testing `flask db init`, then create the database with the custom command `flask develop create-db`, the db will be written to disk at `$HOME/dev.sqlite`. For this skeleton, there is no router that POSTs to the DB. When you want to create a production config, do so in config.py and update application/__init__ with config object name (ProductionConfig).

https://flask-migrate.readthedocs.io/en/latest/   flask migrate

## Install NPM packages
npm install application/templates/static
sass, webpack, webpack-cli

## sass
sass --watch application/templates/public/sass/main.scss application/templates/public/css/example.css
https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4 for sass structuring

