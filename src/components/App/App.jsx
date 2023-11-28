import axios from "axios";
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import About from "../About.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">GitHub Student List</h1>
      </header>
      <Router>
        <nav>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/allStudents">
              <li>All Students</li>
            </Link>
          </ul>
        </nav>
        <br />
        <Route path="/home">
          <StudentForm />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/allStudents">
          <p>Student list:</p>
          <StudentList />
        </Route>
      </Router>
    </div>
  );
}

export default App;
