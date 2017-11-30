npm run build
rm dist.tar
tar cf dist.tar dist
scp dist.tar hygkui@120.25.227.156:/home/hygkui/ 
rm dist.tar
