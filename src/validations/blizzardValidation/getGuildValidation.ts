import { z } from "zod";

const zGetGuildValidation = z
  .object({
    character: z.string(),
    realm: z.string(),
    token: z.string(),
  })
  .strict();

type zGetGuildValidation = z.infer<typeof zGetGuildValidation>;

export const getGuildValidation = (reqQuery: any, token: any) => {
  reqQuery.token = token;
  const parsed = zGetGuildValidation.safeParse(reqQuery);
  return parsed;
};
