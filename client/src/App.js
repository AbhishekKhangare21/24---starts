import { useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");

    console.log(res);
  };

  return <div className="App">Abhishek</div>;
}

export default App;
