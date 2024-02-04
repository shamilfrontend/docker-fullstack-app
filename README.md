# Docker example

## BackEnd
### MongoDB setting
`docker run -d -p 27017:27017 --name mongodb --rm mongo`

### Сборка образа
`docker build -t notes-backend .`

### Запуск образа
`docker run -p 3001:3001 --rm --name backend notes-backend`


## FrontEnd
### Сборка образа
`docker build -t notes-frontend .`

### Запуск образа
`docker run -p 3000:3000 --rm --name frontend notes-frontend`
