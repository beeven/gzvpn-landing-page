FROM nginx:alpine

WORKDIR /web
COPY ./dist/gzvpn /web/
COPY ./default.conf /etc/nginx/conf.d/
