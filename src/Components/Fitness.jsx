import { Link } from "react-router-dom";
import { useState } from "react";
import capitalize from "./utility";

const API = import.meta.env.VITE_API_URL;

function Fitness({ workout }) {
  console.log(workout);
  const { id, workout_name, workout_type, workout_days, is_true } = workout;
  const [completionStatus, setCompletionStatus] = useState(is_true);

  const calculateIntensity = () => {
    if (workout_days >= 5 && workout_days <= 7) {
      return "🥵";
    } else if (workout_days >= 3 && workout_days <= 4) {
      return "😥";
    } else if (workout_days === 2) {
      return "😌";
    } else if (workout_days === 1) {
      return "😇";
    } else {
      return "Unknown Intensity";
    }
  };

  const handleToggleCompletion = async () => {
    try {
      const response = await fetch(`${API}/exercise/${id}/completion`, {
        method: "PUT",
        body: JSON.stringify({ is_true: !completionStatus }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setCompletionStatus((prevCompletionStatus) => !prevCompletionStatus);
      }
    } catch (error) {
      console.error("Error updating fitness entry:", error);
    }
  };

  return (
    <tr>
      <td>
        <button onClick={handleToggleCompletion}>
          {completionStatus ? "✅" : "❌"}
        </button>
      </td>
      <td>
        <Link to={`/fitness/${id}`}>{capitalize(workout_name)}</Link>
      </td>
      <td>{capitalize(workout_type)}</td>
      <td>{calculateIntensity()}</td>
    </tr>
  );
}

export default Fitness;