
import { z } from "zod";

const zGetPlayersRankSchema = z
  .object({
    characterName: z.string(),
    guildName: z.string(),
    guildRealm: z.string(),
    token: z.string(),
  })
  .strict();

type zGetPlayersRankSchema = z.infer<typeof zGetPlayersRankSchema>;
export const getPlayersRankValidation = (request: any) => {
  const parsed = zGetPlayersRankSchema.safeParse(request);
  return parsed;
};
