import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Fitness from "./Fitness";

const API = import.meta.env.VITE_API_URL;

function Fitnesss() {
  const [fitness, setFitness] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/exercise`)
        .then((res) => res.json())
        .then((res) => {
          setFitness(res);
        });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
            <h1
        className="text-center"
        style={{ background: "#333", color: "white", padding: "10px" }}
      >Workouts</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Did you skip? 😗</th>
            <th>Name</th>
            <th>Workout Type</th>
            <th>Intensity</th>
          </tr>
        </thead>
        <tbody>
          {fitness.map((workout) => (
            <Fitness key={workout.id} workout={workout} />
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default Fitnesss;
