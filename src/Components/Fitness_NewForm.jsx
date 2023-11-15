import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Fitness_NewForm() {
  return (
    <form>
      <label for="workout_name">
        Workout Name
        <input id="workout_name" type="text" />
      </label>

      <label for="workout_days">
        Workout Days
        <input id="workout_name" type="number" min="1" max="7" />
      </label>

      <label for="workout_name">
        Workout Name
        <input id="workout_name" type="text" />
      </label>

      <label for="workout_type">
        Workout Type
        <input id="workout_type" type="text" />
      </label>
    </form>
  );
}

export default Fitness_NewForm;
