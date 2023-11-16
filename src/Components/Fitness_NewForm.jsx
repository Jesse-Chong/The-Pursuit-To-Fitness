import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { limitDaysToSeven } from "./utility";

const API = import.meta.env.VITE_API_URL;

function Fitness_NewForm() {
  const navigate = useNavigate();
  const [fitness, setFitness] = useState({
    workout_name: "",
    workout_type: "",
    workout_days: 0,
    is_true: false,
  });

  const handleTextChange = (event) => {
    setFitness({ ...fitness, [event.target.id]: event.target.value });
  };

  const createFitness = () => {
    fetch(`${API}/exercise/`, {
      method: "POST",
      body: JSON.stringify(fitness),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to create fitness: ${response.statusText}`);
        }
        return response.json();
      })
      .then((createdFitness) => {
        const createdFitnessId = createdFitness.id;
        navigate(`/fitness/${createdFitnessId}`);
      })
      .catch((error) => console.error("Error creating fitness:", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fitness.workout_days > 7) {
      alert("Days cannot be more than 7");
      return;
    }
    createFitness();
  };

  const handleDaysBlur = () => {
    const limitedDays = limitDaysToSeven(fitness.workout_days);
    setFitness({ ...fitness, workout_days: limitedDays });
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ background: "#333", color: "white", padding: "10px" }}
      >
        New Workout
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="New">
          <Card className="border-5">
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="workout_name" className="form-label">
                    Name:
                  </label>
                  <input
                    id="workout_name"
                    value={fitness.workout_name}
                    type="text"
                    className="form-control"
                    onChange={handleTextChange}
                    placeholder="Name of Workout"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="workout_days" className="form-label">
                    Days:
                  </label>
                  <input
                    id="workout_days"
                    type="number"
                    value={fitness.workout_days}
                    className="form-control"
                    placeholder="# of days a week"
                    onChange={handleTextChange}
                    onBlur={handleDaysBlur}
                    max="7"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="workout_type" className="form-label">
                    Workout Type:
                  </label>
                  <input
                    id="workout_type"
                    type="text"
                    value={fitness.workout_type}
                    className="form-control"
                    placeholder="Type of workout"
                    onChange={handleTextChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </form>
              <Link to={`/fitness/`}>
                <button className="btn btn-secondary mt-2">Nevermind!</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Fitness_NewForm;