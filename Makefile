#Makefile
install: # установка
	npm ci

brain-games: # быстрый запуск игры
	node bin/brain-games.js

publish: # публикация
	npm publish --dry-run