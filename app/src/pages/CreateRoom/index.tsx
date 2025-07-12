import { CreateRoomForm } from "@/components/CreateRoomForm";
import { RoomList } from "@/components/RoomList";

export function CreateRoom() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8 p-8">
          <CreateRoomForm />

          <RoomList />
        </div>
      </div>
    </div>
  );
}
