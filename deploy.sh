npm run build
rm kf-battle-dist.tar
tar cf kf-battle-dist.tar dist
scp kf-battle-dist.tar hygkui@120.25.227.156:/home/hygkui/ 
rm dist.tar
