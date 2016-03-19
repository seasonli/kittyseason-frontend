#!/bin/bash

sh release.sh

git clone -b master https://git.duapp.com/appidbker52cfbo

mkdir view/
cp -r release/kittyseason-frontend/0.0.1/ view/
cp -r view/ appidbker52cfbo/view/

cd appidbker52cfbo/
git add -A
git commit -a -m "release"
git push origin master

cd ../
rm -rf release/
rm -rf view/
rm -rf appidbker52cfbo/

echo "done"