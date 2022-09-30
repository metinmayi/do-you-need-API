import { ICharacter } from "./doYouNeed/ICharacter";

export interface IGuild {
  id: string;
  name: string;
  realm: string;
  license: string;
  faction: string;
  characters: ICharacter[];
}
