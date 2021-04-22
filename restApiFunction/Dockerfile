
# from base image node
FROM node:10.19

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
RUN npm install

# copy oter files as well
COPY /. . 
#COPY index.js .
#COPY views . 
#COPY node_modules .

#expose the port
EXPOSE 5000

CMD ["npm","start"]
