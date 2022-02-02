# How to build locally

One time only:

```
sudo apt-get install -y ruby-full

echo 'export GEM_HOME=$HOME/gems'       >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
gem install rubygems-update jekyll bundler
```

To add a page:
- Add the markdown file at the top level
- Copy the header (see other pages as an example; be careful to change the header appropriately)
- Change the `_config.yml`, header_page_refs

Build and run:

```
bundle install
bundle exec jekyll serve --force_polling --livereload
# open http://127.0.0.1:4000
```