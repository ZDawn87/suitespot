<<<<<<< HEAD
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import * as rbstrap from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState([]);
 
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
    <div className="App">
    <rbstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<rbstrap.Navbar.Brand href="#home">React-Bootstrap</rbstrap.Navbar.Brand>
<rbstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<rbstrap.Navbar.Collapse id="responsive-navbar-nav">
  <rbstrap.Nav className="mr-auto">
    <rbstrap.Nav.Link href="#features">Features</rbstrap.Nav.Link>
    <rbstrap.Nav.Link href="#pricing">Pricing</rbstrap.Nav.Link>
    <rbstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <rbstrap.NavDropdown.Item href="#action/3.1">Action</rbstrap.NavDropdown.Item>
      <rbstrap.NavDropdown.Item href="#action/3.2">Another action</rbstrap.NavDropdown.Item>
      <rbstrap.NavDropdown.Item href="#action/3.3">Something</rbstrap.NavDropdown.Item>
      <rbstrap.NavDropdown.Divider />
      <rbstrap.NavDropdown.Item href="#action/3.4">Separated link</rbstrap.NavDropdown.Item>
    </rbstrap.NavDropdown>
  </rbstrap.Nav>
  <rbstrap.Nav>
    <rbstrap.Nav.Link href="#deets">More deets</rbstrap.Nav.Link>
    <rbstrap.Nav.Link eventKey={2} href="#memes">
      Dank memes
    </rbstrap.Nav.Link>
  </rbstrap.Nav>
</rbstrap.Navbar.Collapse>
</rbstrap.Navbar>
  </div>

      <Header />

      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
=======
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
>>>>>>> 7a340909777c652fe08ae22d0f8503cafcccb763
