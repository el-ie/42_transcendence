all: build node_modules

build:
	docker-compose -f ./docker-compose.yml up -d --build

stop:
	docker-compose -f ./docker-compose.yml stop

start:
	docker-compose -f ./docker-compose.yml start

down:
	docker-compose -f ./docker-compose.yml down

clean: down
	docker system prune -af

fclean : clean
#	docker volume rm <folder name>_react_volume&
#	docker volume rm <folder name>_nest_volume&
#	docker volume rm <folder name>_postgres_volume&
	docker volume prune -f&

re: fclean all

log :
	docker-compose -f ./docker-compose.yml logs

node_modules:
	@if [ ! -d "./requirements/react/app/node_modules" ]; then \
		cd ./requirements/react/app && npm install; \
	fi
	@if [ ! -d "./requirements/nestjs/app/node_modules" ]; then \
		cd ./requirements/nestjs/app && npm install; \
	fi

.PHONY: all build stop start down clean fclean re log node_modules
