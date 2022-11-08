export interface IGuild {
  blizzard_guild_id: string;
  name: string;
  realm: string;
  license: string;
  faction: string;
}

export function isIGuild(object: any): object is IGuild {
  if (typeof object !== "object" || !object) return false;
  return (
    typeof object.blizzard_guild_id === "string" &&
    typeof object.name === "string" &&
    typeof object.realm === "string" &&
    typeof object.license === "string" &&
    typeof object.faction === "string"
  );
}
