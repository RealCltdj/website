#!/bin/bash

npm i
npm run build

cd dist
git config --global user.email "cltdjgaming+CI@gmail.com"
git config --global user.name "RealCltdj"
git init
git add -A
git commit -m 'rebuilt vue app'
git push -f https://RealCltdj:$1@github.com/RealCltdj/website.git master:prod
