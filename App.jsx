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
  import Home from "../Home";
  import Index from "../Index";
  
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
            </Routes>
          </main>
        </Router>
      </div>
    );
  }
  
  export default App;
  