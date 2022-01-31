
```

sudo apt-get install -y ruby-full

echo 'export GEM_HOME=$HOME/gems'       >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

gem install rubygems-update jekyll bundler

bundle install
bundle exec jekyll serve --force_polling --livereload

```