import { z } from "zod";

interface i {
  characterId: string;
  bossName: string;
}

const parser: z.ZodType<i> = z.lazy(() =>
  z.object({
    characterId: z.string().min(1),
    bossName: z.string().min(1),
  })
);

export function zToggleCharacterSelectedValidation(request: any) {
  const parsed = parser.safeParse(request);
  return parsed;
}
