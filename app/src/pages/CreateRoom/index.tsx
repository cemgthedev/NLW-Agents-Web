import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsResponse = Array<{
  id: string;
  name: string;
  description?: string;
}>;

export function CreateRoom() {
  const { data: rooms, isLoading: isLoadingRooms } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const data: GetRoomsResponse = await response.json();

      return data;
    },
  });

  return (
    <div>
      <p>Create Room</p>
      {isLoadingRooms && <p>Loading...</p>}
      {rooms && rooms.length > 0 && (
        <ul className="flex flex-col gap-2">
          {rooms.map((room) => (
            <li key={room.id}>
              <Link to={`/room/${room.id}`} className="hover:text-purple-600">
                <p>{room.name}</p>
                <p>{room.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
