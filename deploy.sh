#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git config user.name "Nicolas Oliveira"
git config user.email "nicksouza861@gmail.com"
git checkout -b deploy
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:NicolasOliveira861/corebiz-dev-test.git deploy:gh-pages

cd -
