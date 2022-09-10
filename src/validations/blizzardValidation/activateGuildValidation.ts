import { z } from "zod";

const zActivateGuildSchema = z
  .object({
    character: z.string(),
    guild: z.string(),
    realm: z.string(),
    token: z.string(),
  })
  .strict();

type zActivateGuildSchema = z.infer<typeof zActivateGuildSchema>;
export const activateGuildValidation = (user: any) => {
  const parsed = zActivateGuildSchema.safeParse(user);
  return parsed;
};
