import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { limitDaysToSeven } from "./utility";

const API = import.meta.env.VITE_API_URL;

function Fitness_EditForm() {
  let { id } = useParams();
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

  // Update a fitness. Redirect to show view
  const updateFitness = () => {
    fetch(`${API}/exercise/${id}`, {
      method: "PUT",
      body: JSON.stringify(fitness),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/fitness/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the fitness data
  useEffect(() => {
    fetch(`${API}/exercise/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setFitness(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fitness.workout_days > 7) {
      alert("Days cannot be more than 7");
      return;
    }
    updateFitness();
  };

  // Whenever a user puts in a number more than 7 for days, automatically change the number to 7
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
        Edit
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="Edit">
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
              <Link to={`/fitness/${id}`}>
                <button className="btn btn-secondary mt-2">Cancel</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Fitness_EditForm;