# Docker example

##Backend
### MongoDB setting
`docker run -d -p 27017:27017 --name mongodb --rm mongo`

### Сборка образа
`docker build -t notes-backend .`

### Запуск образа
`docker run -p 3001:3001 --rm --name backend notes-backend`
