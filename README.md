# NSDF Web
 
See https://nationalsciencedatafabric.org

Links:
- https://paulle.ca/how-to-start-a-blog-or-personal-website-using-jekyll-and-github-pages
- https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef


## Run locally

```
# setup once only
# ./setup.sh

./run.sh
```

And open the following url: `http://127.0.0.1:4000`


## Add a page:

- Add the markdown/HTML file at the top level
- In case of markdown, setup the header appropriately (see other pages for an example)
- Change the `_config.yml`


## Bibliography

```bash
git clone https://github.com/fabian-beck/survis.git

rm survis/bib/references.bib
cp ./references.bib survis/bib/references.bib

# 'papers_pdf' (optional): PDF files of the papers, please use the BibTeX id as a file name
# 'papers_img' (optional): PNG thumbnails for the papers, please use the BibTeX id as a file name
pushd survis
python3 update_data.py
# CTRL+C
popd

code  survis/src/data/index.xtml
```
