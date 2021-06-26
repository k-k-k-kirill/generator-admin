FROM node:13.12.0-alpine
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install 
COPY . ./
CMD ["npm", "start"]