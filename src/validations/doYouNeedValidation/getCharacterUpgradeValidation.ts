import { z } from "zod";

interface IGetCharacterUpgradesValidation {
  guildId: string;
  bossName: string;
}

const zGetCharacterUpgradesValidation: z.ZodType<IGetCharacterUpgradesValidation> =
  z.lazy(() =>
    z.object({
      guildId: z.string(),
      bossName: z.string(),
    })
  );

export function zValidateGetCharacterUpgrade(request: any) {
  const parsed = zGetCharacterUpgradesValidation.safeParse(request);
  return parsed;
}
