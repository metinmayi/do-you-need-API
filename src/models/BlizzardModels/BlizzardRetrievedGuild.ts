export interface BlizzardRetrievedGuild {
  _links: Links;
  id: number;
  name: string;
  faction: Faction;
  achievement_points: number;
  member_count: number;
  realm: Realm;
  roster: Roster;
  achievements: Achievements;
  created_timestamp: number;
  activity: Activity;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Faction {
  type: string;
  name: any;
}

export interface Realm {
  key: Key;
  name: any;
  id: number;
  slug: string;
}

export interface Key {
  href: string;
}

export interface Roster {
  href: string;
}

export interface Achievements {
  href: string;
}

export interface Activity {
  href: string;
}
