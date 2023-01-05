#Makefile
install: # установка
	npm ci

brain-games: # быстрый запуск игры
	node bin/brain-games.js

publish: # публикация
	npm publish --dry-run

lint: # запуск лиента eslint
	npx eslint .

brain-even: # быстрый запуск игры Четные числа
	node bin/brain-even.js
