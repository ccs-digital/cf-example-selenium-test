FROM node:latest

# Latest Googgle Chrome installation package
RUN apt-get update && apt-get install -y wget
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update
RUN apt-get install -y xvfb
RUN apt-get install -y google-chrome-stable
RUN apt-get clean

RUN rm -fr /root/tmp

# Install protractor
RUN npm install --unsafe-perm -g protractor

RUN webdriver-manager update

RUN mkdir -p /protractor
WORKDIR /protractor
COPY . /protractor/

RUN npm install

ENV HOME /protractor/
ENV TESTCONF /protractor/conf.js

RUN chmod -R +x .