#!/bin/sh

# --configuration=production to build in prod mode

prod="--configuration=production"
buildDirName="dist"
zipFileName="client-app.zip"
zipPath="$buildDirName/$zipFileName"

npm install

if [[ -f $zipPath ]]; then
  rm $zipPath
fi

if [[ $1 == $prod ]]; then
  echo 'Building production...'
  ng build $1
else
  ng build
fi

zip -r $zipPath $buildDirName
if [[ -f $zipPath ]]; then
  echo 'Archive is created'
fi
