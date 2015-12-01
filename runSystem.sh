#!/bin/bash
docker stop $(sudo docker ps -a -q)
docker rm $(sudo docker ps -a -q)
rm -rf omOgTilbyg/node_modules
#docker build -t seeeb/omogtilbyg .
#docker pull mongo
docker run --name omOgTilbygThisMongo -v ~/omOgTilbyg/mongoVol:/data/db -it -d mongo:latest
docker run --rm --name nodejs --link omOgTilbygThisMongo:db -p 80:80 -it -v ~/omOgTilbyg/omOgTilbyg:/www seeeb/omogtilbyg

