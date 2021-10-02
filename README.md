# node-redis



### start redis with docker

docker start forward port 6379 on the current localhost:
in foreground
`docker run -p 6379:6379 redis`
in background
`docker run -d -p 6379:6379 redis`
example:
`docker run --name redis-local -d -p 6379:6379 redis`

connect to redis cli in docker:
`docker exec -it container_name redis-cli`
example if :
`docker exec -it redis-local redis-cli`
