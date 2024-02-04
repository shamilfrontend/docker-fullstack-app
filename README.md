# Docker example

### mongoDB install
`docker run -d -p :27017:27017 --name mongodb --rm mongo`

### backend start
`docker run -p 3001:3001 --rm --name notes-backend notes-backend`

### Сборка образа backend
`docker build -t notes-backend .`
