// DEPENDENCIES
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS

function App() {
  const titleStyle = {
    fontWeight: "bold",
    fontSize: "40px",
    color: "aquamarine",
  };
  return (
    <div className="App">
      <Router>
        <Navbar
          className="d-flex justify-content-between"
          bg="dark"
          variant="dark"
        >
          <Nav>
            <Nav.Link as={NavLink} to="/fitness/new" className="text-left">
              New Fitness Entry
            </Nav.Link>
          </Nav>
          <Navbar.Brand
            as={NavLink}
            to="/fitness"
            className="ml-auto"
            style={titleStyle}
          >
            Fitness App
          </Navbar.Brand>
        </Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fitness" element={<Index />} />
            <Route path="/fitness/:id" element={<Show />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <footer>
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
