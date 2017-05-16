#!/bin/bash

#change dir to the app folder
cd /srv/www/app

#run nodemon in development
# if [ $NODE_ENV = "development" ]
# then
#     nodemon --legacy-watch start.js
# else
#     node start.js
# fi