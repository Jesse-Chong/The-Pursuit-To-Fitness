import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Modal, Button } from "react-bootstrap";

const API = import.meta.env.VITE_API_URL;

function FitnessDetails() {
  const [fitness, setFitness] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  let navigate = useNavigate();
  let { id } = useParams();
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API}/exercise/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }
      alert('Fitness entry deleted successfully');
      navigate('/fitness');
    } catch (error) {
      console.error('Error deleting fitness entry:', error.message);
    }
  };

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        fetch(`${API}/exercise/${id}`)
          .then((res) => res.json())
          .then((res) => {
            setFitness(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchWorkout();
  }, [id]);

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
                <p>Name of exercise: {fitness.workout_name}</p>
                <p>How many days a week: {fitness.workout_days}</p>
                <p>Type of workout: {fitness.workout_type}</p>
                <p>Did you skip? 👀: {fitness.is_true ? "✅" : "❌"}</p>
                <div>

                <button
                    className="btn btn-danger me-2"
                    onClick={handleShowDeleteModal}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate("/fitness")}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/fitness/${id}/edit`)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this fitness entry?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FitnessDetails;
