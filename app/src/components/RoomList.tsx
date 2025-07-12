import { useRooms } from "@/http/use-rooms";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function RoomList() {
  const { data: rooms, isLoading: isLoadingRooms } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 max-h-[50vh] overflow-auto">
        {isLoadingRooms && (
          <p className="text-muted-foreground text-sm">Carregando...</p>
        )}
        {rooms?.map((room) => (
          <Link
            to={`/room/${room.id}`}
            key={room.id}
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
          >
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="font-medium">{room.name}</h3>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {dayjs(room.createdAt).fromNow()}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {room.questionCount} pergunta(s)
                </Badge>
              </div>
            </div>

            <span className="flex items-center gap-1 text-sm">
              Entrar <ArrowRight className="size-3" />
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
