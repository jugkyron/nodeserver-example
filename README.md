# nodeserver-example
# 
# * demonstrates docker and nodejs server 
# * Successful browsing to: 127.0.0.1:5000 prints browser gui: "Hello world!"
# * (see example run in below)
#
# * Dockerfile:
# FROM ubuntu:18.04
# WORKDIR /usr
# RUN apt-get update && apt-get install -y git
# RUN apt-get install -y curl
# RUN git clone https://github.com/jugkyron/nodeserver-example.git
# WORKDIR /usr/nodeserver-example
# RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
# RUN apt-get install -y nodejs
# RUN echo "node version:" >> version-of-service
# RUN nodejs -v >> version-of-service
# RUN echo "npm version:" >> version-of-service
# RUN npm -v >> version-of-service
# RUN npm install -y
# EXPOSE 3000
# ENTRYPOINT ["npm", "start"]
# * End of Dockerfile
#
# Example Run:
# docker build -t nodejse .
# docker run -d --rm -p 5000:3000 nodejse
# Connect your browser to: http://127.0.0.1:5000
# or : curl -i http://127.0.0.1:5000
