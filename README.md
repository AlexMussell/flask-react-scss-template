# Flask, ReactJS, and SCSS Template (inc. Webpack)

A bare bones skeleton for a Flask, ReactJS, and SCSS development stack. It also includes bundling integration with Webpack, and all the loaders configuered to get your application up and running. These docs will guide you through what is where, how it works, the different loaders and their usage, and how to run the test application.

If there is anything you think needs to be addressed/added/updated to this template, please let me know or submit a PR. This repository was set up as I couldn't find a good template to start myself off with. So hopefully it helps some others.

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
Install the required node packages with `npm install application/templates/static`

## Webpack
"Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. " - [Webpack](https://github.com/webpack/webpack)

### List of loaders and plugins
* [babel-loader](https://babeljs.io/): The loader for Babel, a transpiler for Javascript that is used to to convert modern JS into backwards compatible versions. We use the ReactJS preset.
* [css-loader](https://github.com/webpack-contrib/css-loader): Interprest `@import` and `url()` and resolves them.
* [style-loader](https://github.com/webpack-contrib/style-loader): Injects our CSS into the DOM.
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): Allows us to generate a landing page template. The main feature is it allows us to reference hashed static files via some built in vars. Check `/application/static/index-tempalte.html`. On `npm run watch`, `index.html` get generated in `/application/templates/` so that flask can serve the application to the client.
* [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin): Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
* [webpack-md5-hash](https://www.npmjs.com/package/webpack-md5-hash): Plugin to replace a standard webpack chunkhash with md5. Solves the issue of updated either `.scss` files or `.js` files and both output `.css` and `js` being regenerated with new hashes.
* [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin): Clears up `/application/static/dist` on successful build.
* [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin): A plugin to lint your SCSS (and CSS). Its config can be found at `application/static/stylelint.config.js`.
* [postcss-loader](https://github.com/postcss/postcss-loader): Loader to process CSS with [PostCSS](https://postcss.org/). PostCSS allows for CSS transformations with Javascript. Its configuration imports its own plugins and can be found at `application/static/postcss.config.js`
* [autoprefixer](https://github.com/postcss/autoprefixer): PostCSS plugin that adds vendor prefixes depending on host browser.
* [postcss-clean](https://www.npmjs.com/package/postcss-clean): PostCSS plugin CSS minifier that uses [clean-css](https://github.com/jakubpawlowicz/clean-css).

## TODO
* Docker
