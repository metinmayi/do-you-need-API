import { z } from "zod";

const zRegisterGuildSchema = z
  .object({
    character: z.string(),
    guild: z.string(),
    realm: z.string(),
    token: z.string(),
  })
  .strict();

type zRegisterGuildSchema = z.infer<typeof zRegisterGuildSchema>;
export const registerGuildValidation = (user: any) => {
  const parsed = zRegisterGuildSchema.safeParse(user);
  return parsed;
};
