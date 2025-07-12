import { useCreateRoom } from "@/http/use-create-room";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createRoomFormSchema = z.object({
  name: z
    .string({
      error: "O nome é obrigatório",
    })
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" }),
  description: z.string().optional(),
});

type CreateRoomFormData = z.infer<typeof createRoomFormSchema>;

export function CreateRoomForm() {
  const { mutateAsync: createRoom } = useCreateRoom();

  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomFormSchema),
  });

  async function handleCreateRoom({ name, description }: CreateRoomFormData) {
    await createRoom({
      name,
      description,
    });

    createRoomForm.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntas e receber respostas
          de I.A.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Nome da sala</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o nome da sala" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Descrição da sala</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite a descrição da sala"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button type="submit" className="w-full">
              Criar Sala
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
