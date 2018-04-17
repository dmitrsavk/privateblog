#!/bin/bash

yarn upgrade
yarn build
rm -rf /var/www/build_old/
mv /var/www/build/ /var/www/build_old/
cp -r ./build/ /var/www/
forever stop /root/city-del/src/api/server.js
forever start /root/city-del/src/api/server.js
