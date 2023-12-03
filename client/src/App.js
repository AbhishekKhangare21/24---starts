import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // State
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  // Use effect
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");

    setNotes(res.data.notes);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault();

    // Create the note
    const res = await axios.post("http://localhost:3000/notes", createForm);

    // Update the state
    setNotes([...notes, res.data.note]);

    // Clear form state
    setCreateForm({
      title: "",
      body: "",
    });
  };

  const deleteNote = async (_id) => {
    // Delete the note
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
    console.log(res);
    // Update state
    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNotes);
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (note) => {
    setUpdateForm({
      title: note.title,
      body: note.body,
      _id: note._id,
    });
  };

  const updateNote = async (e) => {
    e.preventDefault();
    const { title, body } = updateForm;

    // Send the update request
    const res = await axios.put(
      `http://localhost:3000/notes/${updateForm._id}`,
      {
        title,
        body,
      }
    );
    console.log("res ==>", res);
    // Update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === updateForm._id;
    });
    newNotes[noteIndex] = res.data.note;

    setNotes(newNotes);

    //  Clear updte form state
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    });
  };

  return (
    <div className="App">
      <div>
        <h2>Notes:</h2>
        {notes &&
          notes.map((note) => {
            return (
              <div key={note._id}>
                <h3>{note.title}</h3>
                <button onClick={() => deleteNote(note._id)}>
                  delete note
                </button>
                <button onClick={() => toggleUpdate(note)}>Update note</button>
              </div>
            );
          })}
      </div>
      {updateForm._id && (
        <div>
          <h2>Update note</h2>
          <form action="" onSubmit={updateNote}>
            <input
              onChange={handleUpdateFieldChange}
              value={updateForm.title}
              type="text"
              name="title"
            />
            <textarea
              onChange={handleUpdateFieldChange}
              value={updateForm.body}
              name="body"
            />
            <button type="submit">Update note</button>
          </form>
        </div>
      )}

      {!updateForm._id && (
        <div>
          <h2>Create note</h2>
          <form onSubmit={createNote}>
            <input
              onChange={updateCreateFormField}
              name="title"
              value={createForm.title}
            />
            <textarea
              name="body"
              onChange={updateCreateFormField}
              value={createForm.body}
            />
            <button type="submit">Create note</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
