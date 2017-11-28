#!/bin/bash
sudo cp ~/workspace/id_rsa ~/.ssh
sudo cp ~/workspace/id_rsa.pub ~/.ssh
chmod 400 ~/.ssh/id_rsa
ssh -t root@138.197.103.56 'rm -r /var/www/guise.tech/public_html; exit; sh -i'
scp -r ~/workspace root@138.197.103.56:/var/www/guise.tech/public_html
#if password is needed update the rsa files (ask jkim)
exit 0