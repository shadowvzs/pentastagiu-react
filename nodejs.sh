#!/bin/bash
sudo docker run -v /home/shadowvzs/projects/PentaStagiu/module_1_homework_2_react/:/home/project -it --rm -p 3000:3000 --network mynetwork --name nodejs nodejs:1 /bin/bash
