## Install Flask
# Base Image
FROM python:3.8.2-slim

# Install netcat
RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get -y install curl gnupg && \
    apt-get clean

RUN curl -sL https://deb.nodesource.com/setup_13.x  | bash - && \
    apt-get -y install nodejs

# set working directory
WORKDIR /usr/src/app


COPY . /usr/src/app

# add and install requirements
# COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt
RUN cd application/static && npm install && npm run dev-build 

EXPOSE 5000

CMD  flask run