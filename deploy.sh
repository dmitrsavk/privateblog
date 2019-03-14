#!/bin/bash

yarn
yarn build
rm -rf /var/www/privateblog.ru/build_old/
mv /var/www/privateblog.ru/build/ /var/www/privateblog.ru/build_old/
cp -r ./build/ /var/www/privateblog.ru/build/