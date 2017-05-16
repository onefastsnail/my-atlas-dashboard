#pull base node image
FROM node:6.10.3

#install atlasboard globally
RUN npm install -g atlasboard nodemon

#make a app dir
RUN mkdir -p /srv/www/app

#now lets use that dir for the following commands
WORKDIR /srv/www/app

#copy entrypoint script and set permissions so we can execute
COPY entrypoint.sh /entrypoint.sh
RUN chmod 0755 /entrypoint.sh

#run that bad boy
CMD ["/entrypoint.sh"]