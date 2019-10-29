#!/bin/sh
DST_DIR=/home/bridgeWater/srv/joybox-battle
SSH_HOST=bridgeWater
PROJECT='joybox-battle'
BUILD_DIR='./dist'
TIME=$(date '+%Y-%m-%d_%H%M%S')
TAR_FILE_NAME=${PROJECT}_${TIME}_dist.tar

npm run build
tar cf $TAR_FILE_NAME $BUILD_DIR
scp $TAR_FILE_NAME $SSH_HOST:$DST_DIR
rm -rf $TAR_FILE_NAME

ssh $SSH_HOST << EOF
        cd $DST_DIR
        tar xf $TAR_FILE_NAME
        rm -rf index.html static/
        mv dist/* $DST_DIR
        rm -rf $BUILD_DIR
        mkdir -p backups
        mv $TAR_FILE_NAME backups/
        exit
EOF
