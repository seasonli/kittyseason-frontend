#!/bin/bash

git clone -b master https://git.duapp.com/appidbker52cfbo

mkdir release/
cp -r dbCon router logger feeds server.js package.json app.conf .gitignore release/
cp -r release/ appidbker52cfbo/

cd appidbker52cfbo/
git add -A
git commit -a -m "release"
git push origin master

cd ../
rm -rf release/
rm -rf appidbker52cfbo/

echo "done"