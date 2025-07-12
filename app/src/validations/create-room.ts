import { z } from "zod";

const messages = {
  required_error_name: "O nome é obrigatório",
};

const createRoomFormSchema = z.object({
  name: z
    .string({
      required_error: messages.required_error_name,
      invalid_type_error: "O nome precisa ser uma string",
    })
    .min(3, { message: "O nome precisa ter pelo menos 3 letras" }),
  description: z.string().optional(),
});

type CreateRoomFormData = z.infer<typeof createRoomFormSchema>;
