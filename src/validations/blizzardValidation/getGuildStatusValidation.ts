import { z } from "zod";

const zGuildStatusSchema = z
  .object({
    character: z.string(),
    realm: z.string(),
    token: z.string(),
  })
  .strict();

type zGuildStatusSchema = z.infer<typeof zGuildStatusSchema>;

export const getGuildStatusValidation = (reqQuery: any, token: any) => {
  reqQuery.token = token;
  const parsed = zGuildStatusSchema.safeParse(reqQuery);
  return parsed;
};
