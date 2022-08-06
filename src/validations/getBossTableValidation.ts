import { IdToBoss } from "../constants";

export const getBossTableValidation = (bossName: string | undefined) => {
  try {
    const validBossNames = Object.values(IdToBoss);
    if (!bossName || !validBossNames.includes(bossName)) {
      throw new Error("Invalid bossName requested");
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};
