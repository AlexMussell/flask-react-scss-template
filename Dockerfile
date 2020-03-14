FROM python:3.8.2-slim

RUN apt-get update && \
    apt-get -y install curl gnupg && \
    apt-get clean

RUN curl -sL https://deb.nodesource.com/setup_13.x  | bash - && \
    apt-get -y install nodejs

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN pip install -r requirements.txt
RUN cd application/static && npm install && npm run dev-build 

EXPOSE 5000

CMD  flask run -h 0.0.0.0
