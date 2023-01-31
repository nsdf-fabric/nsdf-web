#!/bin/bash

sudo apt-get install -y ruby ruby-dev

echo 'export GEM_HOME=$HOME/gems'       >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

gem install rubygems-update jekyll bundler
# bundle add webrick



