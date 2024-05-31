import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NotesList from "./containers/notesList";
import AddNewNote from "./containers/addNotes";

function App() {
  return (
    <div className="App">
      {/* header part */}
      <Header />
      <Routes>
        <Route path="/" index element={<NotesList />} />
        <Route path="/add-new-note" element={<AddNewNote />} />
      </Routes>
      {/* Page Content */}
    </div>
  );
}

export default App;
