import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const API = import.meta.env.VITE_API_URL;

function FitnessDetails() {
  const [fitness, setFitness] = useState({ name: "" });
  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        fetch(`${API}/fitness/${index}`)
          .then((res) => res.json())
          .then((res) => {
            setFitness(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchWorkout();
  }, [index]);

  return (
    <>
      <h1
        className="text-center"
        style={{ background: "#333", color: "white", padding: "10px" }}
      >
        Full Details
      </h1>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Card className="border-5">
          <Card.Body className="text-center p-3">
            {fitness && (
              <>
                <p>Name of excerise: {fitness.workout_name}</p>
                <p>How many days a week: {fitness.workout_days}</p>
                <p>Type of workout: {fitness.workout_type}</p>
                <p>Did you skip? 👀: {fitness.is_true}</p>

                <div>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate("/fitness")}
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FitnessDetails;
