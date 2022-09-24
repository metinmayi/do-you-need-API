import { z } from "zod";

const zGetCharactersGuildValidation = z
  .object({
    character: z.string(),
    realm: z.string(),
    token: z.string(),
  })
  .strict();

type zGetCharactersGuildValidation = z.infer<
  typeof zGetCharactersGuildValidation
>;

export const GetCharactersGuildValidation = (reqQuery: any, token: any) => {
  reqQuery.token = token;
  const parsed = zGetCharactersGuildValidation.safeParse(reqQuery);
  return parsed;
};
