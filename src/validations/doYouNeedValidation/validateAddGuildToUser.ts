import { z } from "zod";
import { IUserGuild } from "../../models/IUserGuild";

interface IAddGuildToUser {
  guild: IUserGuild;
  token: string;
}

const zAddGuildToUserSchema: z.ZodType<IAddGuildToUser> = z.lazy(() =>
  z.object({
    guild: z.object({
      id: z.string(),
      name: z.string(),
      realm: z.string(),
      license: z.string(),
      faction: z.string(),
      playerRank: z.string(),
      characters: z.array(z.any()),
    }),
    token: z.string(),
  })
);

export function zValidateAddGuildToUser(request: any) {
  const parsed = zAddGuildToUserSchema.safeParse(request);
  return parsed;
}
