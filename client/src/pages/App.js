import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesPage from "../components/NotesPage";

function App() {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<NotesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
