# Educated Guess Website

## Install

### Node

    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs

### Yarn

    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt update && sudo apt install yarn

## Building

    yarn install
    yarn build
    mv build/ ~
    rm -rf node_modules/
    git checkout -f master
    rm -rf *
    mv ~/build/* .
    rm -rf ~/build/
