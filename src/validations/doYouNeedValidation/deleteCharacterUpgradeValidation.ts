import { z } from "zod";

interface deleteCharacterUpgradeProp {
  id: string;
}

const zDeleteCharacterUpgradeValidation: z.ZodType<deleteCharacterUpgradeProp> =
  z.lazy(() =>
    z.object({
      id: z.string().min(1),
    })
  );

export function deleteCharacterUpgradeValidation(request: any) {
  const parsed = zDeleteCharacterUpgradeValidation.safeParse(request);
  return parsed;
}
