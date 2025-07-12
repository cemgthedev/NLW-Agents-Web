import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResponse } from "./types/GetRoomsResponse";

export function useRooms() {
  const response = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const data: GetRoomsResponse = await response.json();

      return data;
    },
  });

  return response;
}
