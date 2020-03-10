# Flask, ReactJS, and SASS Template (inc. Webpack)

Under Construction.

To include: Docker

A bare bones skeleton for a Flask, ReactJS, and SASS development stack. It also includes bundling integration with Webpack, and all the loaders configuered to get your application up and running. These docs will guide you through what is where, how it works, the different loaders and their usage, and how to run the test application.

If there is anything you think can be added/updated to this template, please let me know or submit a PR. This repository was set up as I couldn't find a good template to start myself off with. So hopefully it helps some others.

## How to Run
If you already know what you're doing, first clone the repo, create a virtualenv (I highly recomment [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)), install `requirements.txt` and then run from top of repository:

```
flask run
```
Then, from `application/static`:

```
npm install
npm run <watch/dev-build/build>
```

And that's it. Go to `127.0.0.1:<flaskport>` (usually 5000 unless `FLASK_RUN_PORT` set) to see the start of your new project!


## Flask
[Flask](https://flask.palletsprojects.com/en/1.1.x/quickstart/) is a microframework that will be used to route to our React appliction, and to serve backend API requests when you get to that stage. I won't go into detail about Flask, but give you a quick rundown of features this template uses.

The template uses Flask CLI and not the now depreceated manager to manage the running of Flask, and can be run with `flask run`. There are some custom commands added to `app.py` that enable us to manage our server locally and create an SQLITE3 database for local testing. To create this database, first initialise it with `flask db init`, then create the database with the custom command `flask develop create-db` (this will create a db with the `application/models.py` schema), the db will be written to disk at `$HOME/dev.sqlite`. For this skeleton, there is no route that POSTs to the DB. It's just there as to give you an understanding on how use the Flask CLI to configure your environment.

Configurations for your base class BaseConfig and its DevelopmentConfig sublclass can be found in `application/config.py`. When you want ready to deploy to production, create a production config in the config file and update `application/__init__.py` to reference this config.

When you are ready to write the API for your website, write it in `application, main, views.py`.

### List of various Flask resources used in more detail

[Flask Blueprints](https://flask.palletsprojects.com/en/1.0.x/blueprints/)
[Flask Migrate](https://flask-migrate.readthedocs.io/en/latest/)
[Flask CLI](https://flask.palletsprojects.com/en/1.1.x/cli/)

## Install NPM packages
npm install application/templates/static

## sass
sass --watch application/templates/public/sass/main.scss application/templates/public/css/example.css
https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4 for sass structuring

