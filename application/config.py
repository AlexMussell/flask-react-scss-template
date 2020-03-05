import os

class BaseConfig(object):
    ''' Base configuration '''
    DEBUG = False
    DEBUG_TB_ENABLED = False
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    TESTING = False

class DevelopmentConfig(BaseConfig):
    ''' Development environment specific configuration  '''
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:////' + os.environ['HOME'] + '/dev.sqlite.'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DEBUG_TB_ENABLED = True
