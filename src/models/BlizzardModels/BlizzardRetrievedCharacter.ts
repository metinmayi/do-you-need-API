export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface Gender {
  type: string;
  name?: any;
}

export interface Faction {
  type: string;
  name?: any;
}

export interface Key {
  href: string;
}

export interface Race {
  key: Key;
  name?: any;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface CharacterClass {
  key: Key2;
  name?: any;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface ActiveSpec {
  key: Key3;
  name?: any;
  id: number;
}

export interface Key4 {
  href: string;
}

export interface Realm {
  key: Key4;
  name?: any;
  id: number;
  slug: string;
}

export interface Key5 {
  href: string;
}

export interface Key6 {
  href: string;
}

export interface Realm2 {
  key: Key6;
  name?: any;
  id: number;
  slug: string;
}

export interface Faction2 {
  type: string;
  name?: any;
}

export interface Guild {
  key: Key5;
  name: string;
  id: number;
  realm: Realm2;
  faction: Faction2;
}

export interface Achievements {
  href: string;
}

export interface Titles {
  href: string;
}

export interface PvpSummary {
  href: string;
}

export interface Encounters {
  href: string;
}

export interface Media {
  href: string;
}

export interface Specializations {
  href: string;
}

export interface Statistics {
  href: string;
}

export interface MythicKeystoneProfile {
  href: string;
}

export interface Equipment {
  href: string;
}

export interface Appearance {
  href: string;
}

export interface Collections {
  href: string;
}

export interface Key7 {
  href: string;
}

export interface ActiveTitle {
  key: Key7;
  name?: any;
  id: number;
  display_string?: any;
}

export interface Reputations {
  href: string;
}

export interface Quests {
  href: string;
}

export interface AchievementsStatistics {
  href: string;
}

export interface Professions {
  href: string;
}

export interface Key8 {
  href: string;
}

export interface ChosenCovenant {
  key: Key8;
  name?: any;
  id: number;
}

export interface Soulbinds {
  href: string;
}

export interface CovenantProgress {
  chosen_covenant: ChosenCovenant;
  renown_level: number;
  soulbinds: Soulbinds;
}

export interface BlizzardRetrievedCharacter {
  _links: Links;
  id: number;
  name: string;
  gender: Gender;
  faction: Faction;
  race: Race;
  character_class: CharacterClass;
  active_spec: ActiveSpec;
  realm: Realm;
  guild: Guild;
  level: number;
  experience: number;
  achievement_points: number;
  achievements: Achievements;
  titles: Titles;
  pvp_summary: PvpSummary;
  encounters: Encounters;
  media: Media;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: Specializations;
  statistics: Statistics;
  mythic_keystone_profile: MythicKeystoneProfile;
  equipment: Equipment;
  appearance: Appearance;
  collections: Collections;
  active_title: ActiveTitle;
  reputations: Reputations;
  quests: Quests;
  achievements_statistics: AchievementsStatistics;
  professions: Professions;
  covenant_progress: CovenantProgress;
}
