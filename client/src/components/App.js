import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotesPage from "./NotesPage";
import LoginPage from "../pages/LoginPage";

function App() {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Routes>
          <Route index element={<NotesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
