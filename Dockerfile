FROM node:alpine

WORKDIR /ui
COPY package.json .
 
COPY . .
RUN npm i
CMD ["npm", "start"]
