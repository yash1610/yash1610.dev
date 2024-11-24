# yash1610.dev - Jekyll based personal website

yash1610.dev website built using Jekyll uses a self made custom theme

## Requirements

	Jekyll > 3.5.0
	Ruby
	bundler

## To build

	gem install jekyll bundler
	bundle install
	JEKYLL_ENV=production bundle exec jekyll build

## To devlop

	bundle exec jekyll serve --trace --livereload --host <host_ip>

## To deploy

	rsync -avP --delete --no-inc-recursive _site/ <host>:/var/www/yash1610.dev/public
