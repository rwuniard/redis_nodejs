# redis_nodejs
Using Redis in NodeJs

1. Install Redis inside docker -> docker run -d -p 6379:6379 --name redis1 redis
2. To ensure the docker is running you can type -> docker ps
3. To connect through redis cli, type the instruction below:
  - docker exec -it redis1 sh
  - redis cli
4. or you can create another container for the client redis
  - docker run -it --rm --link redis1:myredis --name client1 redis sh
  - redis-cli -h myredis
5. Install redis module -> npm install redis
6. Run the code -> node index

This should set the "my test key" and retrieve the value "my test value".
