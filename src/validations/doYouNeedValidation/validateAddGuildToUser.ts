import { z } from "zod";
import { IGuild } from "../../models/IGuild";

interface IAddGuildToUser {
  guild: IGuild;
  token: string;
}

const zAddGuildToUserSchema: z.ZodType<IAddGuildToUser> = z.lazy(() =>
  z.object({
    guild: z.object({
      blizzard_guild_id: z.string(),
      name: z.string(),
      realm: z.string(),
      license: z.string(),
      faction: z.string(),
    }),
    token: z.string(),
  })
);

export function zValidateAddGuildToUser(request: any) {
  const parsed = zAddGuildToUserSchema.safeParse(request);
  return parsed;
}
