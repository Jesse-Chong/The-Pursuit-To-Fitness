// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

// COMPONENTS
import "./Components/Background.css";

function App() {
  return (
    <div className="App background">
      <Router>
        <Navbar
          className="d-flex justify-content-between align-items-center"
          bg="dark"
          variant="dark"
        >
          <Nav>
            <Nav.Link href="/fitness">Workouts</Nav.Link>
          </Nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand
              className="text-center"
              style={{ fontSize: "30px", color: "teal" }}
            >
              The Pursuit to Fitness
            </Navbar.Brand>
          </Link>
          <Nav>
            <Nav.Link href="/fitness/new">New Fitness Entry</Nav.Link>
          </Nav>
        </Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fitness" element={<Index />} />
            <Route path="/fitness/:id/edit" element={<Edit />} />
            <Route path="/fitness/:id" element={<Show />} />
            <Route path="/fitness/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <footer className="fixed-bottom">
          {" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/iBcuyRJD3XCc/gym-weights"
          >
            Gym Weights
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>{" "}
        </footer>
      </Router>
    </div>
  );
}

export default App;