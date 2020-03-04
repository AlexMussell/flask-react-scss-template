class BaseConfig(object):
    ''' Base configuration '''
    DEBUG = False
    DEBUG_TB_ENABLED = False
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    TESTING = False
    FLASK_RUN_PORT=5005

class DevelopmentConfig(BaseConfig):
    ''' Development environment specific configuration  '''
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:////$HOME/application/dev.sqlite.'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DEBUG_TB_ENABLED = True
