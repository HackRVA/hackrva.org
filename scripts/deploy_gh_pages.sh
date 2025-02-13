#!/bin/bash

GIT_REPO_URL=$(git config --get remote.origin.url)

mkdir -p ./dist
cp -r ./web ./dist/web
cd ./dist/web/
git init .
git remote add github $GIT_REPO_URL
git checkout -b gh-pages
git add .
git commit -am "Static site deploy"
git push github gh-pages --force

