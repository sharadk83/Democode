import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css";
import Menu from "./Menu";
import AddStudent from "./components/AddStudent";
import ViewStudent from "./components/ViewStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <>
    
        <Router>
        <Menu />
            <Routes>
                <Route path="/" element={<ViewStudent />}/>
                <Route path="/add-student" element={<AddStudent />}/>
                <Route path="/edit-student/:id" element={<EditStudent />}/>
            </Routes>
        </Router>        
    </>
    
  );
}

export default App;
