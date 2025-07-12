export type GetRoomsResponse = Array<{
  id: string;
  name: string;
  description?: string;
  questionCount: number;
  createdAt: string;
}>;
