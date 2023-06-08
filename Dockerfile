FROM node:18-alpine
WORKDIR /tutorial
COPY package*.json .
RUN npm install
COPY . .
CMD ["npx", "sails", "lift", "-p", "2020"]
EXPOSE 2020
