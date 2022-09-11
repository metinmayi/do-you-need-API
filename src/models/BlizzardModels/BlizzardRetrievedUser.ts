export interface Self {
  href: string;
}

export interface User {
  href: string;
}

export interface Profile {
  href: string;
}

export interface Links {
  self: Self;
  user: User;
  profile: Profile;
}

export interface Character2 {
  href: string;
}

export interface ProtectedCharacter {
  href: string;
}

export interface Key {
  href: string;
}

export interface Realm {
  key: Key;
  name?: any;
  id: number;
  slug: string;
}

export interface Key2 {
  href: string;
}

type Ran<T extends number> = number extends T ? number : _Range<T, [1]>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T
  ? R[number]
  : _Range<T, [R["length"], ...R]>;
export interface PlayableClass {
  key: Key2;
  name?: any;
  id: Ran<13>;
}

export interface Key3 {
  href: string;
}

export interface PlayableRace {
  key: Key3;
  name?: any;
  id: number;
}

export interface Gender {
  type: string;
  name?: any;
}

export interface Faction {
  type: string;
  name?: any;
}

export interface Character {
  character: Character2;
  protected_character: ProtectedCharacter;
  name: string;
  id: number;
  realm: Realm;
  playable_class: PlayableClass;
  playable_race: PlayableRace;
  gender: Gender;
  faction: Faction;
  level: number;
}

export interface WowAccount {
  id: number;
  characters: Character[];
}

export interface Collections {
  href: string;
}

export interface BlizzardRetrievedUser {
  _links: Links;
  id: number;
  wow_accounts: WowAccount[];
  collections: Collections;
}
