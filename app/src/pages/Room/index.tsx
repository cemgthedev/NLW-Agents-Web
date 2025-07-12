import { useParams } from "react-router-dom";

export function Room() {
  const { id } = useParams();

  return (
    <div>
      <p>Room</p>
      <p>id: {id}</p>
    </div>
  );
}
