#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy docs [skip ci]'

git push -f https://github.com/d0whc3r/vuepress-plugin-demo-block.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist
