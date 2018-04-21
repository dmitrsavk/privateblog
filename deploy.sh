#!/bin/bash

yarn
yarn build
rm -rf /var/www/build_old/
mv /var/www/build/ /var/www/build_old/
cp -r ./build/ /var/www/