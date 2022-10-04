import { ICharacter } from "./doYouNeed/ICharacter";

export interface IGuild {
  id: string;
  name: string;
  realm: string;
  license: string;
  faction: string;
  characters: ICharacter[];
}

export function isIGuild(object: any): object is IGuild {
  if (typeof object !== "object" || !object) return false;
  return (
    typeof object.id === "string" &&
    typeof object.name === "string" &&
    typeof object.realm === "string" &&
    typeof object.license === "string" &&
    typeof object.faction === "string" &&
    typeof object.characters === "object"
  );
}
