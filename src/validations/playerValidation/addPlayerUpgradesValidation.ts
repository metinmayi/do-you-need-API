import { z } from "zod";
import { IGuild } from "../../models/IGuild";

interface IAddPlayerValidation {
  guild: IGuild;
  raidbotsURL: string;
}

const zAddPlayerValidationSchema: z.ZodType<IAddPlayerValidation> = z.lazy(() =>
  z.object({
    guild: z.object({
      id: z.string(),
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

export function zAddPLayerValidation(request: any) {
  const parsed = zAddPlayerValidationSchema.safeParse(request);
  return parsed;
}
