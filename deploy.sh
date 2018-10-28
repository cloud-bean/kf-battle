npm run build
mv dist kf-battle-dist
tar cf kf-battle-dist.tar kf-battle-dist
scp kf-battle-dist.tar hygkui@120.25.227.156:/home/hygkui/ 
rm -rf kf-battle-dist
rm kf-battle-dist.tar
