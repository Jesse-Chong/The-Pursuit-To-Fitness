import { Link } from "react-router-dom";
import capitalize from "./utility";

function Fitness({ workout }) {
  const { workout_name, workout_type, workout_days, is_true } = workout;

  console.log(workout_name, workout_type, workout_days, is_true);

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

  return (
    <tr>
      <td>{is_true ? "✅" : "❌"}</td>
      <td>
        <Link to={`/fitness/${workout.id}`}>{capitalize(workout_name)}</Link>
      </td>
      <td>{capitalize(workout_type)}</td>
      <td>{calculateIntensity()}</td>
    </tr>
  );
}

export default Fitness;
