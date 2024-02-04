import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'

import AppForm from './components/AppForm.jsx'
import AppList from './components/AppList.jsx'

const baseURL = 'http://localhost:3001'
const api = axios.create({ baseURL })

export default function App() {
  const [notes, setNotes] = useState([])

  async function createNote(text) {
    const note = await api.post('/api/note', {text})
    setNotes([...notes, {...note.data.note}])
  }

  const fetchNotes = useCallback(async () => {
    const notes = await api.get('/api/note')

    setNotes(Array.isArray(notes.data) ? notes.data : [])
  }, [])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <div className="app">
      <nav className="navbar">
        <h3>Docker MERN</h3>
      </nav>
      <div className="container with-nav">
        <AppForm onCreate={createNote} />

        <AppList list={notes} />
      </div>
    </div>
  )
}
