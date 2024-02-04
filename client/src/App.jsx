import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {List} from './List.jsx'
import {Form} from './Form.jsx'

function App() {
  const [notes, setNotes] = useState([])

  async function createNote(text) {
    const note = await axios.post('http://localhost:3001/api/note', {text})
    setNotes([...notes, {...note.data.note}])
  }

  const fetchNotes = useCallback(async () => {
    const notes = await axios.get('http://localhost:3001/api/note')

    setNotes(Array.isArray(notes.data) ? notes.data : [])
  }, [])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <div>
      <nav className="navbar">
        <h3>Docker MERN</h3>
      </nav>
      <div className="container with-nav">
        <Form onCreate={createNote} />
        <List list={notes} />
      </div>
    </div>
  )
}

export default App;
