const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes/note.routes')

const app = express()
const port = process.env.PORT ?? 3001

app.use(express.json({ extended: true }))
app.use(cors())
app.use('/api/note', routes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(`mongodb://host.docker.internal:27017/notes`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    app.listen(
      port,
      console.log.bind(console, `Server has been started on port ${port}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()
