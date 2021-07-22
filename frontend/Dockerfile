FROM node:alpine as builder
WORKDIR /krzysztof/src/jpquiz

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# This path below can be customized with nginx config
WORKDIR /usr/share/nginx/html

COPY --from=builder /krzysztof/src/jpquiz/build .

CMD ["nginx", "-g", "daemon off;"]