
#!/bin/sh

# install app dependecies
npm install

# Update system
sudo apt update

# install xvfb for cypress
sdup apt install xvfb