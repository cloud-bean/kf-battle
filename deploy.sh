npm run build
mv dist joybox-battle-dist
tar cf joybox-battle-dist.tar joybox-battle-dist
scp joybox-battle-dist.tar bridgeWater:/home/bridgeWater/srv/joybox-battle 
rm -rf joybox-battle-dist
rm joybox-battle-dist.tar
