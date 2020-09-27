FROM node:10.15.3-alpine as build-deps

WORKDIR /app
RUN npm install react-scripts@2.1.8 -g --silent

COPY package.json /app

COPY . /app
RUN CI=true npm test
RUN npm run build

FROM nginx:1.15.9-alpine
COPY . /app/build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]