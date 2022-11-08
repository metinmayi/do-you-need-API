import { z } from "zod";
import { IGuild } from "../../models/IGuild";

interface IAddPlayerValidation {
  guild: IGuild;
  raidbotsURL: string;
}

const zAddCharacterUpgradeSchema: z.ZodType<IAddPlayerValidation> = z.lazy(() =>
  z.object({
    guild: z.object({
      blizzard_guild_id: z.string().min(1),
      name: z.string(),
      realm: z.string(),
      license: z.string(),
      faction: z.string(),
    }),
    raidbotsURL: z
      .string()
      .regex(/https:\/\/www.raidbots.com\/simbot\/report\/\w+/),
  })
);

export function zAddCharacterUpgradeValidation(request: any) {
  const parsed = zAddCharacterUpgradeSchema.safeParse(request);
  return parsed;
}
