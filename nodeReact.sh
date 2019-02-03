#!/bin/bash
sudo docker run -v /home/shadowvzs/projects/PentaStagiu/03_flower_power_app/:/home/project -it --rm -p 4000:4000 -p 3000:3000 --network mynetwork --privileged --name nodejs nodejs:1 /bin/bash
