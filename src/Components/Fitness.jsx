// import { Link } from 'react-router-dom';

function Fitness({ workout }) {
  const { workout_name, workout_type, is_true } = workout;

  console.log(workout_name, workout_type, is_true);

  return (
    <tr>
      <td>{is_true ? "✅" : ""}</td>
      {/* <td>
        <Link to={`/fitness/${workout.id}`}>
          {workout_name}
        </Link>
      </td> */}
      <td>{workout_type}</td>
      <td>{is_true}</td>
    </tr>
  );
}

export default Fitness;
