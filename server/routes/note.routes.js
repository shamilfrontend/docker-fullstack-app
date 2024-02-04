const { Router } = require('express')

const NoteModel = require('../models/note')

const router = Router()

router.post('/', async (req, res) => {
  const text = req.body.text
  const note = new NoteModel({ text })
  await note.save()

  res.status(201).json({ note })
})

router.get('/', async (req, res) => {
  const notes = await NoteModel.find()

  res.json(notes)
})

module.exports = router
