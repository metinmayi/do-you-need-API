import { z } from "zod";
import { INewGuild } from "../../models/INewGuild";

interface IRegisterGuild {
  guild: INewGuild;
  character: string;
  token: string;
  realm: string;
}

const zRegisterGuildSchema: z.ZodType<IRegisterGuild> = z.lazy(() =>
  z.object({
    character: z.string(),
    token: z.string(),
    realm: z.string(),
    guild: z.object({
      isNew: z.boolean(),
      id: z.string(),
      license: z.string(),
      name: z.string(),
      realm: z.string(),
      faction: z.string(),
      characters: z.array(z.any()),
    }),
  })
);

type zRegisterGuildSchema = z.infer<typeof zRegisterGuildSchema>;
export const registerGuildValidation = (user: any) => {
  const parsed = zRegisterGuildSchema.safeParse(user);
  return parsed;
};
